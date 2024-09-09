import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/features/users/userSlice";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

const UserPage = () => {
    const dispatch = useDispatch();

    const [items, setItems] = useState(0);
    const itemsPerPage = 30;
    const usersState = useSelector((state) => state.users);

    useEffect(() => {
        const limit = itemsPerPage;
        const skip = 0;
        dispatch(fetchUsers({ limit, skip })); // Pass an object with limit and skip
    }, [dispatch]);

    useEffect(() => {
        if (usersState.status === 'succeeded') {
            setItems(usersState.users.total); // Adjust this according to your data
        }
    }, [usersState]);
console.log(items,itemsPerPage, 'ddddd')
    const pageCount = Math.ceil(items / itemsPerPage); // Correct calculation

    const handlePageClick = (event) => {
        const limit = itemsPerPage;
        const skip = event.selected * limit; // Calculate the skip value based on the selected page

        console.log(`User requested page number ${event.selected}, limit: ${limit}, skip: ${skip}`);

        dispatch(fetchUsers({ limit, skip })); // Pass an object with limit and skip
    };

    return (
        <section>
            <h1>User List</h1>

            <p>{items} Users</p>

            {usersState.status === 'loading' && <span>Loading...</span>}
            {usersState.status === 'failed' && <span>Error: {usersState.error}</span>}
            {usersState.status === 'succeeded' && (
                <table>
                    {/* <tbody>
                        {usersState.users.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.firstName} {item.lastName} {item.maidenName}</td>
                                <td><Link to="/"><i className="bi bi-pencil-square"></i></Link></td>
                                <td><button><i className="bi bi-trash3"></i></button></td>
                            </tr>
                        ))}
                    </tbody> */}
                </table>
            )}
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </section>
    );
};

export default UserPage;