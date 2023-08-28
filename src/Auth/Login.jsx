import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Log_form_schema } from '../Services/Formschema';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';


const Login = () => {
  
    const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Log_form_schema
  });

  return (
    <React.Fragment>
      <div className='container-fluid mt-5 mx-5'>
        <p className="fs-2 mx-5 mb-3">Sign in</p>
        <form onSubmit={loginForm.handleSubmit}>
          <div className="container-fluid m-2">
            <div className="mb-3 w-75">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                value={loginForm.values.email}
                onChange={loginForm.handleChange}
                onBlur={loginForm.handleBlur}
                type="email"
                className="form-control"
                id="emailinput"
                placeholder="Enter your email"
                name="email"
              />
              {loginForm.touched.email && loginForm.errors.email && (
                <span className="text-danger" role="alert">
                  {loginForm.errors.email}
                </span>
              )}
            </div>
            <div className="mb-3 w-75">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                value={loginForm.values.password}
                onChange={loginForm.handleChange}
                onBlur={loginForm.handleBlur}
                type="password"
                className="form-control"
                id="pass"
                placeholder="Enter your password"
                name="password"
              />
              {loginForm.touched.password && loginForm.errors.password && (
                <span className="text-danger" role="alert">
                  {loginForm.errors.password}
                </span>
              )}
            </div>
            <button disabled={Object.keys(loginForm.errors).length !== 0} type="submit" className="btn btn-primary " >
              Log in
            </button>
          </div>
          <NavLink to="reg" className='mx-4'>Don't have an account ? Sign up here</NavLink>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;