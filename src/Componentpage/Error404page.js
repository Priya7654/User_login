import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
// import Navbar from './Navbar'
import Asidebar from './Asidebar'

export default function Error404page() {
  return (
 <div>
 <Asidebar/>
  <div id="wrapper">
 <div id="content-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 mx-auto text-center  pt-4 pb-5">
            <h1><img alt={404} src="img/404.png" className="img-fluid" /></h1>
            <h1>Sorry! Page not found.</h1>
            <p className="land">Unfortunately the page you are looking for has been moved or deleted.</p>
            <div className="mt-5">
              <Link className="btn btn-outline-primary" to="/"><i className="mdi mdi-home" /> GO TO HOME PAGE</Link>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  </div>
  <Link className="scroll-to-top rounded" to="#page-top">
    <i className="fas fa-angle-up" />
  </Link>
  <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button className="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div className="modal-footer">
          <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <Link className="btn btn-primary" to="login.html">Logout</Link>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
