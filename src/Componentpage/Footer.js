import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
       <footer className="sticky-footer">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-lg-6 col-sm-6">
                  <p className="mt-1 mb-0">© Copyright 2020 <strong className="text-dark">Vidoe</strong>. All
                    Rights Reserved<br />
                    <small className="mt-0 mb-0">Made with <i className="fas fa-heart text-danger" /> by <Link className="text-primary" target="_blank" to="https://askbootstrap.com/">Ask
                      Bootstrap</Link>
                    </small>
                  </p>
                </div>
                <div className="col-lg-6 col-sm-6 text-right ">
                  <div className="app" >
                    <Link to="#" className='mx-2' ><img alt src="img/google.png" /></Link>
                    <Link to="#" className='mx-2' ><img alt src="img/apple.png" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
  </>
  )
}
