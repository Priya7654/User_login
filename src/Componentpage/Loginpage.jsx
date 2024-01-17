

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Loginpage() {


  let pagenav = useNavigate();
  const [inputdata, setinputdata] = useState(
    {
      "email": "",
      "password": ""
    }

  )
  let [validationError, setValidationError] = useState('');
   
  let validate = () => {
      if (inputdata === '' || inputdata === null) {
          setValidationError('Please enter email');
          return false;
      }
      if (inputdata === '' || inputdata === null) {
          setValidationError('Please enter password');
          return false;
      }
      setValidationError('');
      return true;
  };


  const [arr, setArr] = useState(() => {
    let localData = localStorage.getItem('loginiddata');
    try {
      const parsedData = JSON.parse(localData);
      return Array.isArray(parsedData) ? parsedData : [];
    } catch (error) {
      console.error('Error parsing localStorage data:', error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('localprofiledata', JSON.stringify(arr));
  }, [arr]);

  const handleData = (e) => {

    setinputdata({ ...inputdata, [e.target.name]: e.target.value })
  }
  const handlesubmit = (e) => {
    if (validate()) {
     
    e.preventDefault();
    console.log(inputdata)

    axios.post("http://103.104.74.215:3003/api/login", inputdata)

      .then((response) => {
        const data = response.data.data[0];
        if (response.data.result !== true) {
          console.log(response.data);

          const data = response.data.data;
          console.log(data)
          const userId = data._id;
          console.log('User ID:', userId);

          localStorage.setItem('loginidData', JSON.stringify(data));

          localStorage.setItem('keydata', userId);


          setArr((prevArr) => [...prevArr, data]);

          toast.success('Login successful!', {

            position: toast.POSITION.TOP_RIGHT,
          });
  
          pagenav("/home")
        }
        else {
          console.log("sorry user")
          toast.error('Sign-up unsuccessful!', {
            position: toast.POSITION.TOP_RIGHT,
          });
          pagenav("/")
        }
      })


    setinputdata({
      "email": "",
      "password": "",
    });

  }
       
  else{
      alert("Error occurred! please enter valid data")
  }
  
  };

  return (
    <>
      <div>
        <div className="container-fluid pl-0 pr-0">
          <div className="row no-gutters">
            <div className="col-md-6 mt-2">
              <img src='images/media.jpg' style={{ width: "100%", height: "100vh" }} />

            </div>
            <div className="col-md-6 p-5 bg-white full-height">
              <div className="login-main-left">
                <div className="text-center mb-5 login-main-left-header pt-4">
                  <img src="images/usersignup.jpeg" style={{ width: "20%", height: "20%", borderRadius: 50 }} className="img-fluid" alt="LOGO" />
                  <h3 className="mt-3 mb-3">Login</h3>
                </div>
                <form action="#">

                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" style={{borderRadius:25}}  className="form-control" name='email' value={inputdata.email} placeholder="John@gmail.com" onChange={handleData} />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" style={{borderRadius:25}}  className="form-control" name='password' value={inputdata.password} placeholder="********" onChange={handleData} />
                  </div>
                  <div className="mt-4">
                    <div className="row">
                      <div className="col-12">
                        <button type="submit" onClick={handlesubmit} className="btn btn-outline-info btn-block btn-lg" style={{ borderRadius: 50}} >Login</button>
                      </div>
                    </div>
                  </div>

                </form>
                <div className="text-center mt-4">
                  <p className="light-gray"><Link to="/forgot">Forgot password?</Link></p>
                </div>
                <div className="text-center mt-3">
                  <p className="light-gray">Don’t have an account? <Link to="/">Sign Up</Link></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
     
    </>
  )
}