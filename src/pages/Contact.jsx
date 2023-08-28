import React from 'react'
import { Contact_form_schema } from '../Services/Formschema'
import { useFormik } from 'formik';


const Contact = () => {


    const contact_style ={
        borderRadius : '20px',
        width : '50%',
    }

    const contactForm = useFormik({
        initialValues: {
          email: '',
          subject: '',
        },
        onSubmit: (values) => {
          console.log(values);
        },
        validationSchema: Contact_form_schema
      });

  return <React.Fragment>

    <div class="container text-center mt-5 p-3 bg-secondary-subtle text-emphasis-secondary" style={contact_style}>
        <p className='fs-2'>Contact Us</p>
        <p className='fs-4'>by sending us a message</p>
            <div className="mt-3 mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    value={contactForm.values.email}
                    onChange={contactForm.handleChange}
                    onBlur={contactForm.handleBlur}
                    type="email"
                    className="form-control"
                    id="emailinput"
                    placeholder="Enter your email"
                    name="email"
                />
                {contactForm.touched.email && contactForm.errors.email && (
                    <span className="text-danger" role="alert">
                    {contactForm.errors.email}
                    </span>
                )}
            </div>
            <div className="mt-3 mb-3">
              <label htmlFor="email" className="form-label">
                Your Message
              </label>
              <textarea
                value={contactForm.values.subject}
                onChange={contactForm.handleChange}
                onBlur={contactForm.handleBlur}
                className="form-control"
                id="emailinput"
                placeholder="Enter your email"
                name="subject"
              />

              {contactForm.touched.subject && contactForm.errors.subject && (
                <span className="text-danger" role="alert">
                  {contactForm.errors.subject}
                </span>
              )}
            </div>
            <button disabled={Object.keys(contactForm.errors).length !== 0} type="submit" className="btn btn-primary" >
              Send message
            </button>
            </div>

  </React.Fragment>
}

export default Contact