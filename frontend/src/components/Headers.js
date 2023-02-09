import { useFormik } from 'formik';
import React from 'react'
import { NavLink } from 'react-router-dom'


const Headers = () => {



  const links = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];


  return (
    <div className='bg-[#032541] flex justify-between py-2 px-10 text-white items-baseline z-50 sticky top-0'>


      <div>


        <NavLink to='/' replace={true}> <h1 className='text-2xl'>Blog</h1></NavLink>


        {/* {toggle === true && <div className='flex-col mt-2 space-y-2 hidden sm:flex  '>
          {links.map((l, i) => {
            return <NavLink onClick={() => dispatch(change())} className='menu-item' key={i} to={l.path}>{l.name}</NavLink>;
          })}
        </div>} */}
      </div>




      {/* {toggle === true ? <button className='hidden sm:block mt-1' onClick={() => dispatch(change())} > <i className="fa-solid fa-xmark fa-xl"></i></button> : <button onClick={() => dispatch(change())} className='hidden  sm:block mt-1'><i className="fa-solid fa-bars fa-xl "></i></button>
      } */}



      <div className='space-x-5  sm:hidden flex items-center'>
        <NavLink className='menu-item' to='/news/page'>Login</NavLink>
        <NavLink className='menu-item' to='/page/top_rated'>Create</NavLink>



      </div>


    </div>
  )
}

export default Headers
