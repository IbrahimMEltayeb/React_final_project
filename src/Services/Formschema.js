import * as Yup from "yup";

const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const Reg_form_schema = Yup.object().shape({
    name: Yup.string().required("required"),
    email: Yup.string().email("must be a valid email").required("required"),
    password: Yup.string().min(8).matches(passwordRegex,"please enter a stronger password e.g: P@ssword123").required("required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'),null],"passwords don't match").required("required")
});

export const Log_form_schema = Yup.object().shape({
    email: Yup.string().email("must be a valid email").required("required"),
    password: Yup.string().min(8).matches(passwordRegex,"please enter a stronger password e.g: P@ssword123").required("required"),
}); 

export const Contact_form_schema = Yup.object().shape({
    email: Yup.string().email("must be a valid email").required("required"),
    subject: Yup.string().required("required")
}); 