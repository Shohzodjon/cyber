import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';
import Input from '../components/BaseInput';

const LoginPage = () => {

  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (value === '') {
      setErrors({
        ...errors,
        [name]: 'error', 
      });
    } else {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  return (
    <section className='login'>
      <div className="container">
        <h2>Login page</h2>
        <form  className='login-form'>
          <Input
            type="email"
            value={formData.email}
            onChange={handleChange}
            errorClass={errors.email}
            label="Username"
            name="email"
            placeholder="Enter your name"
          />
          <Input
            type="password"
            value={formData.password}
            onChange={handleChange}
            errorClass={errors.password}
            label="Password"
            name="password"
            placeholder="Enter your password"
          />
          <button type="submit" className='login-btn' >Submit</button>
        </form>

      </div>
    </section>
  )
}
export default LoginPage;