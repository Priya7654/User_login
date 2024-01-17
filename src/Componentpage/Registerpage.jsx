
import React, { useEffect } from 'react';

import axios from 'axios';
import { useState } from 'react';
import { Link, json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registerpage() {

  let history = useNavigate();
  const [inputdata, setinputdata] = useState(

    {

      "username": "",
      "email": "",
      "password": "",
      "confirm_password": "",
      "gender": ""
    }

  )

  const handleData = (e) => {

    setinputdata({ ...inputdata, [e.target.name]: e.target.value })
  }
  

  const handlesubmit = (e) => {
   e.preventDefault();
   
    console.log(inputdata)
    axios.post("http://103.104.74.215:3003/api/signup", inputdata)
      .then((response) => {

        const data = response.data.data[0];

        if (response.data.result !== true) {
          console.log(response.data);
          const data = response.data.data[0];
          const userId = data._id;
          console.log('User ID:', userId);
          localStorage.setItem('myData', JSON.stringify(data));

          localStorage.setItem('useriddata', userId);
          toast.success('Sign-up successful!', {

            position: toast.POSITION.TOP_RIGHT,
          });

          history("/login")
        }
        else {
          toast.error('Sign-up unsuccessful!', {
            position: toast.POSITION.TOP_RIGHT,
          });
          history("/register")
        }
      })
      .catch(error => {
        console.log(error);
      });


    setinputdata({
      "username": "",
      "email": "",
      "password": "",
      "confirm_password": "",
      "gender": ""
    });
    
   }
       
    
  return (
    <>
      <div>
        <div className="container-fluid pl-0 pr-0">
          <div className="row no-gutters">
            <div className="col-md-7 mt-3">
              <img src='images/loginimage.jpeg' style={{ width: "100%", height: "100vh" }} />

            </div>
            <div className="col-md-5 p-5 bg-white full-height">
              <div className="login-main-left">
                <div className="text-center mb-5 login-main-left-header pt-4">
                  <img src="images/uselogo.jpeg" style={{ width: "10%", height: "10%", borderRadius: 50 }} className="img-fluid" alt="LOGO" />
                  <h5 className="mt-3 mb-3"> Welcome to Signup </h5>
                </div>
                <form action="#">
                  <div className="form-group">
                    <label> Name</label>
                    <input type="text" style={{borderRadius: 15}}  className="form-control" name='username' value={inputdata.username} placeholder="name" onChange={handleData} />
               
                 
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" style={{borderRadius: 15}} className="form-control" name='email' value={inputdata.email} placeholder="email@gmail.com" onChange={handleData} />
                  
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" style={{borderRadius: 15}}  className="form-control" name='password' value={inputdata.password} placeholder="********" onChange={handleData} />
                 
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" style={{borderRadius: 15}}  className="form-control" name='confirm_password' value={inputdata.confirm_password} placeholder="********" onChange={handleData} />
                
                  </div>
                  <div className="form-group">
                    <label>Gender</label><br />
                    <input type="radio" name="gender" value="male" onChange={handleData} /> <label>Male</label>
                    <br />
                    <input type="radio" name="gender" value="female" onChange={handleData} /> <label>Female</label>
                  </div>
                  <div className="mt-4">
                    <button type="submit"  onClick={handlesubmit} className="btn btn-outline-info btn-block btn-lg" style={{ borderRadius: 50}} >Sign Up</button>
                  </div>
                </form>
               
                <div className="text-center mt-4">
                  <p className="light-gray">I have already account ! <Link to="login">Sign In</Link></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>  
    </>
  )
}




