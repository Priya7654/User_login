import React from 'react'
import { Link } from 'react-router-dom'

function Forgotpage() {
  return (
    <div>
    <div className="container-fluid pl-0 pr-0">
      <div className="row no-gutters">
      <div className="col-md-7 mt-2">
      <img src='images/reset_pass.png' style={{width:"100%" , height:"100vh"}}/>
      
      </div>
        <div className="col-md-5 p-5 bg-white full-height">
          <div className="login-main-left">
            <div className="text-center mb-5 login-main-left-header pt-4">
              <img src="images/lockey.png" style={{ width: "20%", height: "20%", borderRadius: 50 }}  className="img-fluid" alt="LOGO" />
              <h5 className="mt-3 mb-3">Forgot password</h5>
             </div>
            <form action="reset">
            <div className="form-group">
                <label>Enter Email / Mobile number</label>
                <input type="text" className="form-control" placeholder="Enter Email / Mobile number" />
              </div>
              <div className="mt-4">
                <button type="submit" className="btn btn-outline-info btn-block btn-lg" style={{borderRadius:25}}>Send link</button>
              </div>
            </form>
            <div className="text-center mt-5">
              <p className="light-gray">Remember my password! <Link to="/login">Sign In</Link></p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
</div>

  )
}

export default Forgotpage
// import React from 'react';

// function Forgotpage() {
//   return (
//     <>
//   <div>
//    <div className="container-fluid pl-0 pr-0">
//       <div className="row no-gutters">
//         <div className="col-md-5 p-5 bg-white full-height">
//           <div className="login-main-left">
//             <div className="text-center mb-5 login-main-left-header pt-4">
//               <img src="img/favicon.png" className="img-fluid" alt="LOGO" />
//               <h5 className="mt-3 mb-3">Reset Password</h5>
//               <p>It is a long established fact that a reader <br /> will be distracted by the readable.</p>
//             </div>
//             <form action="https://askbootstrap.com/preview/vidoe-v2-3/theme-seven/index.html">
              // <div className="form-group">
              //   <label>Enter Email / Mobile number</label>
              //   <input type="text" className="form-control" placeholder="Enter Email / Mobile number" />
              // </div>
//               <div className="mt-4">
//                 <button type="submit" className="btn btn-outline-primary btn-block btn-lg">Reset Password</button>
//               </div>
//             </form>
//             <div className="text-center mt-5">
//               <p className="light-gray">Don’t have an account? <a href="register.html">Sign Up</a></p>
//             </div>
//           </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </>

       
//   )
//   }
//   export default Forgotpage
