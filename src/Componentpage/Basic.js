import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Asidebar from './Asidebar';
import Allfiledata from './Allfiledata';
import Channeldata from './Channeldata';
export default function Basic() {

  let [data, setdata] = useState(Allfiledata)
  let [Channel, setchannel] = useState(Channeldata)
  return (
    <>
      <div>   <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid pb-0">
            <div className="top-mobile-search">
              <div className="row">
                <div className="col-md-12">
                  <form className="mobile-search">
                    <div className="input-group">
                      <input type="text" placeholder="Search for..." className="form-control" />
                      <div className="input-group-append">
                        <button type="button" className="btn btn-dark"><i className="fas fa-search" /></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="top-category section-padding mb-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title">
                    <h3>Latest Video</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title">
                      <div className="btn-group float-right right-action">
                        <Link to="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Sort by <i className="fa fa-caret-down" aria-hidden="true" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-star" /> &nbsp; Top
                            Rated</Link>
                          <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-signal" /> &nbsp;
                            Viewed</Link>
                          <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-times-circle" />
                            &nbsp; Close</Link>
                        </div>
                      </div>
                      {/* <h6>Category </h6> */}
                    </div>
                  </div>
                  {
                    data.slice(0, 4).map((element, id) => {
                      return (
                        <>
                          <div className="col-xl-3 col-sm-6 mb-3">

                            <div className="video-card history-video">
                              <div className="video-card-image">
                                <Link className="video-close" to="#"><i className="fas fa-times-circle" /></Link>
                                <Link className="play-icon" to="#"><i className="fas fa-play-circle" /></Link>
                                <Link to="#"><img className="img-fluid" src={element.image} alt /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>1:40</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="#">{element.title}</Link>
                                </div>
                                <div className="video-page text-success">
                                  Education <Link title data-placement="top" data-toggle="tooltip" to="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></Link>
                                </div>
                                <div className="video-view">
                                </div>
                                <div className="video-view">
                                  1.8M views <i className="fas fa-calendar-alt" /> 11 Months ago
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )
                    })
                  }

                </div>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-md-12">
                <div className="main-title">
                  <div className="btn-group float-right right-action">
                    <Link to="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sort by <i className="fa fa-caret-down" aria-hidden="true" />
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-star" /> &nbsp; Top
                        Rated</Link>
                      <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-signal" /> &nbsp;
                        Viewed</Link>
                      <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-times-circle" />
                        &nbsp; Close</Link>
                    </div>
                  </div>
                  <h6>Channel Video</h6>
                </div>
              </div>
              {
                Channel.map((element, id) => {
                  return (
                    <>
                      <div className="col-xl-3 col-sm-6 mb-3">

                        <div className="video-card history-video">
                          <div className="video-card-image">
                            <Link className="video-close" to="#"><i className="fas fa-times-circle" /></Link>
                            <Link className="play-icon" to="#"><i className="fas fa-play-circle" /></Link>
                            <Link to="#"><img className="img-fluid" src={element.image} alt /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>1:40</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="#">{element.title}</Link>
                            </div>
                            <div className="video-page text-success">
                              Education <Link title data-placement="top" data-toggle="tooltip" to="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></Link>
                            </div>
                            <div className="video-view">
                            </div>
                            <div className="video-view">
                              1.8M views <i className="fas fa-calendar-alt" /> 11 Months ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }

            </div>


            <div className="row">
              <div className="col-md-12">
                <div className="main-title">
                  <div className="btn-group float-right right-action">
                    <Link to="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sort by <i className="fa fa-caret-down" aria-hidden="true" />
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-star" /> &nbsp; Top
                        Rated</Link>
                      <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-signal" /> &nbsp;
                        Viewed</Link>
                      <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-times-circle" />
                        &nbsp; Close</Link>
                    </div>
                  </div>
                  <h6>Watch Video</h6>
                </div>
              </div>
              {
                data.map((element, id) => {
                  return (
                    <>
                      <div className="col-xl-3 col-sm-6 mb-3">

                        <div className="video-card history-video">
                          <div className="video-card-image">
                            <Link className="video-close" to="#"><i className="fas fa-times-circle" /></Link>
                            <Link className="play-icon" to="#"><i className="fas fa-play-circle" /></Link>
                            <Link to="#"><img className="img-fluid" src={element.image} alt /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>1:40</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="#">{element.title}</Link>
                            </div>
                            <div className="video-page text-success">
                              Education <Link title data-placement="top" data-toggle="tooltip" to="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></Link>
                            </div>
                            <div className="video-view">
                            </div>
                            <div className="video-view">
                              1.8M views <i className="fas fa-calendar-alt" /> 11 Months ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }

            </div>

            <hr className="mt-0" />

          </div>
          {/* <Footer /> */}

        </div>
      </div>

      </div>
    </>


  )
}