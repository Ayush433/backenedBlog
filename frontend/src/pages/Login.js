import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';


const Login = () => {

  const loginSchema = Yup.object().shape({
    email: Yup.string().required('email is required'),
    password: Yup.string().min(15, 'Too short').max(50, 'Too Long').required('password is required'),
  });


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (val) => {


    },
    validationSchema: loginSchema
  });


  return (
    <div>


      <form onSubmit={formik.handleSubmit} className='flex justify-center mt-3 items-center max-h-2xl '>
        <div className='w-[40%] mt-24 shadow-2xl bg-white p-4 space-y-4 '>

          <div className='flex justify-between'>
            <h1 className='text-2xl '>Login User</h1>

          </div>

          <div className='flex flex-col space-y-2'>
            <label htmlFor="email">Email</label>
            <input onChange={formik.handleChange} value={formik.values.email}
              className='border border-gray-500 outline-none px-2 py-1' type="email" id='email' name='email' placeholder='email' />
            {formik.errors.email && formik.touched.email ? <h1 className='text-pink-700'>{formik.errors.email}</h1> : ''}
          </div>

          <div className='flex flex-col space-y-2'>
            <label htmlFor="password">Password</label>
            <input
              className='border border-gray-500 outline-none px-2 py-1'
              onChange={formik.handleChange} value={formik.values.password} name="password"
              type='password' placeholder='password'
              id="password" />
            {formik.errors.password && formik.touched.password ? <h1 className='text-pink-700'>{formik.errors.password}</h1> : ''}
          </div>

          <div>
            <button className='bg-blue-500 p-2 w-[40%] rounded' type='submit'>Submit</button>
          </div>


        </div>


      </form>

    </div>
  )
}

export default Login
