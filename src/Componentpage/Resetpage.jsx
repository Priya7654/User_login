import React from 'react'
import { Link } from 'react-router-dom'

function Forgotpage() {
  return (
    <div>
    <div className="container-fluid pl-0 pr-0">
      <div className="row no-gutters">
      <div className="col-md-7 mt-2">
      <img src='images/imag.png' style={{width:"100%" , height:"100vh"}}/>
      
      </div>
        <div className="col-md-5 p-5 bg-white full-height">
          <div className="login-main-left">
            <div className="text-center mb-5 login-main-left-header pt-4">
            <img src="images/resetlogo.jpeg" style={{ width: "20%", height: "20%", borderRadius: 50 }}  className="img-fluid" alt="LOGO" />
                <h5 className="mt-3 mb-3">Reset Password</h5>
              <p>It is a long established fact that a reader <br /> will be distracted by the readable.</p>
            </div>
            <form action="">
              <div className="form-group">
                <label>Enter Password </label>
                <input type="text"  style={{borderRadius:25}} className="form-control" placeholder="Enter New Password" />
              </div>
              <div className="form-group">
                <label>Enter Confirm Password </label>
                <input type="text" style={{borderRadius:15}} className="form-control" placeholder="Re-Enter New Password" />
              </div>
              <div className="mt-4">
                <button type="submit" className="btn btn-info btn-block btn-lg" style={{borderRadius:25}}>Sign In</button>
              </div>
            </form>
           
          </div>
        </div>
       
      </div>
    </div>
</div>

  )
}

export default Forgotpage