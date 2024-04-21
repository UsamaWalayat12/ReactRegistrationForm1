// import React,{useState} from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import Validation from './SignupValidation';
// import axios from 'axios'
// function Signup(){



//     const [values , setValues]=useState({
//         id:'',
//         name:'',
//         email:'',
//         password:''
//     })
   
//     const navigate=useNavigate();

//     const [errors, setErrors]=useState({});

//     const  handleInput=(event)=>{
//         setValues(prev=>({...prev ,[event.target.name]:[event.target.value]}))
//      }

//      const handleSubmit=(event)=>{
//         event.preventDefault();
//         setErrors(Validation(values));

//         if(errors.name==="" && errors.email===" " && errors.password===""){
//             axios.post('http://localhost:3000/signup' ,values) 
//              .then(res=> {
//                     navigate('/');
//              })
//              .catch(err=>console.log(err));
//         }

//      }


 
    



//     return(
      
//         <div className='d-flex justify-content-center align-items-center bg-primary vh-100'> 
//         <div className='bg-white p-3 rounded w-25'>
//             <h1>Sign Up</h1>
//             <form action="" onSubmit={handleSubmit}>
//             <div className='mb-3'>
//                 <label htmlFor='name'><strong>Name</strong></label>
//                 <input type="text" placeholder='Enter Name' name='name'
//                 onChange={handleInput}  className='form-control rounded-0'/>
//               {errors.name && <span className='text-danger'>{errors.name}</span>}

//               </div>

//               <div className='mb-3'>
//                 <label htmlFor='email'><strong>Email</strong></label>
//                 <input type="email" placeholder='Enter Email'name='email'
//                onChange={handleInput}   className='form-control rounded-0'/>
//               {errors.email && <span className='text-danger'>{errors.email}</span>}
//                                     {errors.password && <span className='text-danger'>{errors.password}</span>}

//               </div>
                   

//               <div className='mb-3'>
//                 <label htmlFor='password'><strong>Password</strong></label>
//                 <input type="password" placeholder='Enter  Password' name='password' 
//                onChange={handleInput}  className='form-control rounded-0'/>
//               {errors.password && <span className='text-danger'>{errors.password}</span>}

//               </div>

//               <button type='submit' className='btn btn-success w-100 rounded-0' >Sign up</button>
//               <p>You are agree to our terms and conditions</p>
              
//               <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>

//             </form>
//         </div>
//      </div>

//     )
// }


// export default Signup





















































import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
 
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/signup', formData);
      console.log(response.data);
      // Handle success (e.g., display a message, redirect, etc.)
    } catch (error) {
      console.error('Registration error:', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
