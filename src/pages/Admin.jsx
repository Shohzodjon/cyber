import { Outlet, Link } from "react-router-dom"

const AdminPage = () => {
    return (
        <section className="admin-page">
            <div className="container">
                <div className="admin-page__grid">
                    <ul className="admin-page__nav">
                        <li><Link to='/admin'> <i className="bi bi-person"></i>  <span>Admin</span></Link></li>
                        <li><Link to='/admin/users'> <i className="bi bi-people"></i><span>Users</span></Link></li>
                        <li><Link to='/admin/posts'> <i className="bi bi-newspaper"></i><span>Posts</span></Link></li>
                        <li><Link to='/admin/todos'><i className="bi bi-columns-gap"></i><span>Todos</span></Link></li>
                        <li><Link to='/admin/products'><i className="bi bi-box-seam"></i><span>Products</span></Link></li>
                    </ul>
                    <main className="admin-page__main">
                        <Outlet />
                    </main>
                    <div className="admin-page__aside">
                        <button> imgaes</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AdminPage;