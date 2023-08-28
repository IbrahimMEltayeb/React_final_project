import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import { Reg_form_schema } from '../Services/Formschema';

const Reg = () => {
  const regForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema : Reg_form_schema
  });

  return (
    <React.Fragment>
      <div className='container-fluid mt-5 mx-5'>
        <p className="fs-2 mx-5 mb-3">Sign Up</p>
        <form onSubmit={regForm.handleSubmit}>
          <div className="container-fluid m-2">
            <div className="mb-3 w-75">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                value={regForm.values.name}
                onChange={regForm.handleChange}
                onBlur={regForm.handleBlur}
                type="text"
                className="form-control"
                id="nameinput"
                placeholder="Enter your name"
                name="name"
              />
              {regForm.touched.name && regForm.errors.name && (
            <span class="text-danger" role="alert">
              {regForm.errors.name}
            </span>
          )}
            </div>
            <div className="mb-3 w-75">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                value={regForm.values.email}
                onChange={regForm.handleChange}
                onBlur={regForm.handleBlur}
                type="email"
                className="form-control"
                id="emailinput"
                placeholder="Enter your email"
                name="email"
              />
              {regForm.touched.email && regForm.errors.email && (
            <span class="text-danger" role="alert">
              {regForm.errors.email}
            </span>
          )}
            </div>
            <div className="mb-3 w-75">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                value={regForm.values.password}
                onChange={regForm.handleChange}
                onBlur={regForm.handleBlur}
                type="password"
                className="form-control"
                id="pass"
                placeholder="Enter your password"
                name="password"
              />
              {regForm.touched.password && regForm.errors.password && (
            <span class="text-danger" role="alert">
              {regForm.errors.password}
            </span>
          )}
            </div>
            <div className="mb-3 w-75">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                value={regForm.values.confirmPassword}
                onChange={regForm.handleChange}
                onBlur={regForm.handleBlur}
                type="password"
                className="form-control"
                id="confirmpass"
                placeholder="Confirm your password"
                name="confirmPassword"
              />
              {regForm.touched.confirmPassword && regForm.errors.confirmPassword && (
            <span class="text-danger" role="alert">
              {regForm.errors.confirmPassword}
            </span>
          )}
            </div>
            <button type="submit" className="mb-5 btn btn-primary" disabled={Object.keys(regForm.errors).length !== 0}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Reg;