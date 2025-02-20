import { ErrorMessage, Field, Form, Formik } from 'formik'; 
import { useRecoilState } from 'recoil';
import * as Yup from 'yup'
import { UserState } from '../states/atoms/UserState';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const RegisterSchema = Yup.object().shape({
    name:Yup.string().required("Name is required"),
    email: Yup.string().email("Ivalid email address format").required("Email is required"),
    password: Yup.string().required("Password is required").min(6,"Password must be at least 6 characters"),
    confirmPassword:Yup.string().required("Confirm password is required").oneOf([Yup.ref('password')],"Passwords do not match")
})


const RegisterPage = () => {
    const [user,setUser] = useRecoilState(UserState);
    const naviagte = useNavigate();


    return (
        <div className="w-full h-screen flex justify-center items-center bg-sky-100">
            <div className="rounded-md bg-white shadow-md p-8 sm:w-1/2 w-full mx-5">
            <div className="my-5">
            <h1 className="text-center font-sans font-semibold text-lg text-gray-800">Welcome to FlowMart</h1>
            <p className="text-center text-sm text-gray-500">Please enter your details</p>
            </div>
                 <Formik
                initialValues={{name:'',email:'',password:'',confirmPassword:''}}
                validationSchema={RegisterSchema}
                // validate={values => {
                //     const errors:any = {};
                //     if(!values.email){
                //         errors.email = 'Required';
                //     }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                //         errors.email = "Invalid email address";
                //     }
                //     if(!values.password){
                //         errors.password = 'Required';
                //     }else if(values.password.length <6){
                //         errors.password = 'Password must be at least 6 characters';
                //     }if(!values.confirmPassword){
                //         errors.confirmPassword = 'Required';
                //     }else if(values.confirmPassword !== values.password){
                //         errors.confirmPassword = 'Passwords do not match';
                //     }
                //     return errors;
                // }}
                onSubmit={(values,{setSubmitting}) => {
                 
                    setTimeout(() => {
                        alert(JSON.stringify(values,null,2));
                        setSubmitting(false);
                        setUser(values);
                        naviagte('/home');
                        
                    },400);
                }}
                >
                        {({isSubmitting,}) => (
                        // <form onSubmit={handleSubmit} className='flex flex-col'>
                        //     <label htmlFor='email' className='text-sm font-sans text-gray-500 my-1'>Email:</label>
                        //     <input
                        //     type='email'
                        //     name="email"
                        //     onChange={handleChange}
                        //     onBlur={handleBlur}
                        //     value={values.email}
                        //     className='border-sky-300 w-full border p-2 focus:outline-sky-400 mt-1 text-sm' 
                        //     placeholder='Enter your email'/>
                        //     <div className='text-red-500 text-sm'>
                        //     {errors.email && touched.email && errors.email}
                        //     </div>
                         
                        //     <button type="submit" disabled={isSubmitting} className='bg-sky-500 px-4 text-white py-1 my-3'>Submit</button>
                        // </form>
                        <Form className='flex flex-col'>
                            <label htmlFor='name' className='text-sm font-sans text-gray-500'>User Name:</label>
                            <Field type='text' name='name' className='border-sky-300 w-full border p-2 focus:outline-sky-400 mt-1 text-sm' placeholder='Enter your name'/>
                            <ErrorMessage name='name' component={'div'} className='text-red-500 text-sm'/>
                            <label htmlFor='email' className='text-sm font-sans text-gray-500 mt-3'>Email:</label>
                            <Field type='email' name='email' className='border-sky-300 w-full border p-2 focus:outline-sky-400 mt-1 text-sm' placeholder='Enter your email'/>
                            <ErrorMessage name='email' component={'div'} className='text-red-500 text-sm'/>
                            <label htmlFor='password' className='text-sm font-sans text-gray-500 mt-3'>Password:</label>
                            <Field type='password' name='password' className='border-sky-300 w-full border p-2 focus:outline-sky-400  text-sm ' placeholder='Enter your password'/>
                            <ErrorMessage name='password' component={'div'} className='text-sm text-red-500'/>
                            <label htmlFor='confirmPassword' className='text-sm font-sans text-gray-500 mt-3'>Confirm password:</label>
                            <Field type='password' name='confirmPassword' className='border-sky-300 w-full border p-2 focus:outline-sky-400  text-sm ' placeholder='Enter password again'/>
                            <ErrorMessage name='confirmPassword' component={'div'} className='text-sm text-red-500'/>
                            <button type='submit' disabled={isSubmitting} className='bg-sky-500 px-4 text-white py-1 my-3 mt-5'>Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default RegisterPage;