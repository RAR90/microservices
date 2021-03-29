import React from 'react';
// import ReactDOM from 'react-dom';
// import companyLogo from '../assets/img/nestle.png';
// import profileImage from '../assets/img/profile.jpg';

class MainMenu extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return (
      <header className="header header-fixed header-light">
        <div className="header-middle">
          <div className="logo-color logo-color-light">
            <div className="logo">
              <div className="logo-middle">
                <a href="index.html"><img src="images/nbs.png" alt="Logo" /></a>
              </div>
            </div>
          </div>
          <div className="header-topbar">
            <div className="topbar-left">
              <a className="side-toggle" href="#collapse">
                <i className="la la-bars"></i>
              </a>
              <div className="search-box">
                <div className="search">
                  <input className="form-control border-0" type="search" placeholder="Type something..." aria-label="Search"/>
                  <a href="#collapse">	<i className="la la-search"></i> </a>
                </div>
              </div>
            </div>
            <div className="topbar-right">
              <ul>
                <li className="dropdown show language">
                  <a className="dropdown-toggle" href="#collapse" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span> <i className="flag-icon flag-icon-us"></i></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="language-title">
                      <h5 className="mb-0">Language choose</h5>
                    </div>
                    <div className="language-choose">
                      <a className="dropdown-item" href="#collapse"><i className="flag-icon flag-icon-us"></i>USA</a>
                      <a className="dropdown-item" href="#collapse"><i className="flag-icon flag-icon-de"></i> Germany</a>
                      <a className="dropdown-item" href="#collapse"><i className="flag-icon flag-icon-fr"></i>France</a>
                      <a className="dropdown-item" href="#collapse"><i className="flag-icon flag-icon-cn"></i>China</a>
                    </div>
                  </div>
                </li>
                <li className="dropdown show setting">
                  <a id="showRight" className="dropdown-toggle" href="#collapse" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span> <i className="la la-tasks"></i></span>
                  </a>
                  <div className="animate-menu animate-menu-right right-sidebar">
                    <div className="tab">
                      <ul className="nav nav-pills" id="myTab-01" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="chat-tab-01" data-toggle="tab" href="#collapsechat-01" role="tab" aria-controls="chat-01" aria-selected="false"> Chat</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="projects-tab-01" data-toggle="tab" href="#collapseprojects-01" role="tab" aria-controls="projects-01" aria-selected="true">Projects</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="contact-tab-01" data-toggle="tab" href="#collapsecontact-01" role="tab" aria-controls="contact-01" aria-selected="false"> Todo </a>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent-01">
                        <div className="tab-pane fade show active" id="chat-01" role="tabpanel" aria-labelledby="chat-tab-01">
                          <div className="sidebar-chat">
                            <div className="mb-4">
                              <h5>Connections</h5>
                              <p>Blanditiis explicabo facilis ducimus</p>
                            </div>
                            <div className="list-group-item">
                              <div className="media">
                                <div className="avatar avatar-sm mr-3">
                                  <span className="status badge-success"></span>
                                  <img className="img-fluid" src="images/team/01.jpg" alt=""/>
                                </div>
                                <div className="media-body">
                                  <div className="messages-name">
                                    <h6><a href="#collapse">Lael Greer</a></h6>
                                    <span className="text-light">Excepturi dicta vero animi...</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="list-group-item">
                              <div className="media">
                                <div className="avatar avatar-sm mr-3">
                                  <span className="status badge-danger"></span>
                                  <img className="img-fluid" src="images/team/02.jpg" alt=""/>
                                </div>
                                <div className="media-body">
                                  <div className="messages-name">
                                    <h6><a href="#collapse">Olivia Liang </a></h6>
                                    <span className="text-light">Ut enim ad minim veniam nostrud...</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="list-group-item">
                              <div className="media">
                                <div className="avatar avatar-sm mr-3">
                                  <span className="status badge-danger"></span>
                                  <img className="img-fluid" src="images/team/03.jpg" alt=""/>
                                </div>
                                <div className="media-body">
                                  <div className="messages-name">
                                    <h6><a href="#collapse">Jena Gaines	 </a></h6>
                                    <span className="text-light">Exercitation ullamco laboris nisi...</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="list-group-item">
                              <div className="media">
                                <div className="avatar avatar-sm mr-3">
                                  <span className="status badge-success"></span>
                                  <img className="img-fluid" src="images/team/04.jpg" alt=""/>
                                </div>
                                <div className="media-body">
                                  <div className="messages-name">
                                    <h6><a href="#collapse">Lucas Célio </a></h6>
                                    <span className="text-light">Ut aliquip ex ea consequat...</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="list-group-item border-0">
                              <div className="media">
                                <div className="avatar avatar-sm mr-3">
                                  <span className="status badge-success"></span>
                                  <img className="img-fluid" src="images/team/05.jpg" alt=""/>
                                </div>
                                <div className="media-body">
                                  <div className="messages-name">
                                    <h6><a href="#collapse">Wanderleia Mattar </a></h6>
                                    <span className="text-light">Integer molestie lorem at massa...</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="chat-contact mt-4">
                              <div className="mb-4">
                                <h5>Contacts</h5>
                              </div>
                              <ul className="list-unstyled list-inline">
                                <li>
                                  <div className="avatar avatar-sm">
                                    <span className="status badge-success"></span>
                                    <img className="img-fluid" src="images/team/01.jpg" alt=""/>
                                  </div>
                                </li>
                                <li>
                                  <div className="avatar avatar-sm">
                                    <span className="status badge-danger"></span>
                                    <img className="img-fluid" src="images/team/02.jpg" alt=""/>
                                  </div>
                                </li>
                                <li>
                                  <div className="avatar avatar-sm">
                                    <span className="status badge-danger"></span>
                                    <img className="img-fluid" src="images/team/03.jpg" alt=""/>
                                  </div>
                                </li>
                                <li>
                                  <div className="avatar avatar-sm bg-warning">
                                    <span className="status badge-success"></span>
                                    <img className="img-fluid" src="images/team/09.png" alt=""/>
                                  </div>
                                </li>
                                <li>
                                  <div className="avatar avatar-sm bg-secondary">
                                    <span className="status badge-success"></span>
                                    <img className="img-fluid" src="images/team/10.png" alt=""/>
                                  </div>
                                </li>
                                <li>
                                  <div className="avatar avatar-sm">
                                    <span className="status badge-danger"></span>
                                    <img className="img-fluid" src="images/team/04.jpg" alt=""/>
                                  </div>
                                </li>
                                <li>
                                  <div className="avatar avatar-sm">
                                    <span className="status badge-success"></span>
                                    <img className="img-fluid" src="images/team/05.jpg" alt=""/>
                                  </div>
                                </li>
                                <li>
                                  <div className="avatar avatar-sm">
                                    <span className="status badge-success"></span>
                                    <img className="img-fluid" src="images/team/06.jpg" alt=""/>
                                  </div>
                                </li>
                                <li>
                                  <div className="avatar avatar-sm">
                                    <span className="status badge-danger"></span>
                                    <img className="img-fluid" src="images/team/07.jpg" alt=""/>
                                  </div>
                                </li>
                                <li>
                                  <div className="avatar avatar-sm bg-info">
                                    <span className="status badge-danger"></span>
                                    <img className="img-fluid" src="images/team/08.png" alt=""/>
                                  </div>
                                </li>
                                <li>
                                  <div className="avatar avatar-sm">
                                    <span className="status badge-success"></span>
                                    <img className="img-fluid" src="images/team/11.png" alt=""/>
                                  </div>
                                </li>
                                <li>
                                  <div className="avatar avatar-sm bg-success">
                                    <span className="status badge-success"></span>
                                    <img className="img-fluid" src="images/team/12.png" alt=""/>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="projects-01" role="tabpanel" aria-labelledby="projects-tab-01">
                          <div className="sidebar-project">
                            <div className="project-item">
                              <div className="project-title">
                                <div className="project-title-left">
                                  <h5 className="mb-3"> <a href="#collapse"> Application development </a></h5>
                                  <span className="badge badge-overlay-danger">Pending</span>
                                </div>
                              </div>
                              <div className="project-comments mt-2">
                                <p>Officia nam sed possimus repellat et, assumenda corporis velit.</p>
                              </div>
                              <div className="project-status mt-3">
                                <div className="project-status-label ">
                                  <span>Completed</span>
                                  <span>60%</span>
                                </div>
                                <div className="progress progress-h-5">
                                  <div className="progress-bar" role="progressbar" style={{"width":"60%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                              <div className="row mt-4">
                                <div className="col-12">
                                  <div className="project-deadline">
                                    <h6 className="mb-2 d-inline-block">End date: </h6>
                                    <p className="d-inline-block">10/01/2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="project-item">
                              <div className="project-title">
                                <div className="project-title-left">
                                  <h5 className="mb-3"> <a href="#collapse">  Application Testing  </a></h5>
                                  <span className="badge badge-overlay-success">Active</span>
                                </div>
                              </div>
                              <div className="project-comments mt-2">
                                <p>Assumenda corporis velit? Dicta et tenetur.</p>
                              </div>
                              <div className="project-status mt-3">
                                <div className="project-status-label ">
                                  <span>Completed</span>
                                  <span>80%</span>
                                </div>
                                <div className="progress progress-h-5">
                                  <div className="progress-bar" role="progressbar" style={{"width":"80%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                              <div className="row mt-4">
                                <div className="col-12">
                                  <div className="project-deadline">
                                    <h6 className="mb-2 d-inline-block">End date: </h6>
                                    <p className="d-inline-block">10/06/2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="project-item">
                              <div className="project-title">
                                <div className="project-title-left">
                                  <h5 className="mb-3"> <a href="#collapse"> UI design </a></h5>
                                  <span className="badge badge-overlay-success">Active</span>
                                </div>
                              </div>
                              <div className="project-comments mt-2">
                                <p>Tepellat et, assumenda corporis velit? Dicta et tenetur.</p>
                              </div>
                              <div className="project-status mt-3">
                                <div className="project-status-label ">
                                  <span>Completed</span>
                                  <span>72%</span>
                                </div>
                                <div className="progress progress-h-5">
                                  <div className="progress-bar" role="progressbar" style={{"width":"72%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                              <div className="row mt-4">
                                <div className="col-12">
                                  <div className="project-deadline">
                                    <h6 className="mb-2 d-inline-block">End date: </h6>
                                    <p className="d-inline-block">30/03/2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="project-item">
                              <div className="project-title">
                                <div className="project-title-left">
                                  <h5 className="mb-3"> <a href="#collapse"> App design </a></h5>
                                  <span className="badge badge-overlay-danger">Pending</span>
                                </div>
                              </div>
                              <div className="project-comments mt-2">
                                <p>Dicta et tenetur consequatur. officia nam sed possimus.</p>
                              </div>
                              <div className="project-status mt-3">
                                <div className="project-status-label ">
                                  <span>Completed</span>
                                  <span>60%</span>
                                </div>
                                <div className="progress progress-h-5">
                                  <div className="progress-bar" role="progressbar" style={{"width":"60%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                              <div className="row mt-4">
                                <div className="col-12">
                                  <div className="project-deadline">
                                    <h6 className="mb-2 d-inline-block">End date: </h6>
                                    <p className="d-inline-block">14/05/2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="contact-01" role="tabpanel" aria-labelledby="contact-tab-01">
                          <div className="sidebar-setting">
                            <h5 className="mb-4"> General settings </h5>
                            <div className="account-setting pb-3">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                <label className="custom-control-label" htmlFor="customCheck1">Report panel usage</label>
                              </div>
                            </div>
                            <div className="account-setting pb-3">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                <label className="custom-control-label" htmlFor="customCheck2">Mail redirect</label>
                              </div>
                            </div>
                            <div className="account-setting pb-3">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                <label className="custom-control-label" htmlFor="customCheck3">Expose author name</label>
                              </div>
                            </div>
                            <div className="account-setting pb-3">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                                <label className="custom-control-label" htmlFor="customCheck4">Save History</label>
                              </div>
                            </div>
                            <h5 className="mb-4 mt-5"> Account settings </h5>
                            <div className="account-setting">
                              <h6>Notifications</h6>
                              <label className="switch ">
                              <input type="checkbox" className="primary"/>
                              <span className="slider round name"></span>
                              </label>
                            </div>
                            <div className="account-setting">
                              <h6>Show Online</h6>
                              <label className="switch ">
                              <input type="checkbox" className="primary"/>
                              <span className="slider round name"></span>
                              </label>
                            </div>
                            <div className="account-setting">
                              <h6>Cloud Sync</h6>
                              <label className="switch ">
                              <input type="checkbox" className="primary"/>
                              <span className="slider round name"></span>
                              </label>
                            </div>
                            <div className="account-setting">
                              <h6>Status</h6>
                              <label className="switch ">
                              <input type="checkbox" className="primary"/>
                              <span className="slider round name"></span>
                              </label>
                            </div>
                            <h5 className="mb-4 mt-5"> CPU status </h5>
                            <span> % Utilization</span>
                            <div className="progress progress-h-5 mt-2">
                              <div className="progress-bar" role="progressbar" style={{"width":"90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown show messages">
                  <a className="dropdown-toggle" href="#collapse" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span>
                  <span className="messages-badge"></span>
                  <i className="la la-comment"></i></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="messages-title">
                      <div className="row">
                        <div className="col-8">
                          <h4>Messages</h4>
                          <p className="mb-0"> 12 unread messages</p>
                        </div>
                        <div className="col-4">
                          <span className="badge badge-light">56 new</span>
                        </div>
                      </div>
                    </div>
                    <ul className="list-unstyled">
                      <li>
                        <div className="media">
                          <div className="avatar avatar-sm mr-3">
                            <span className="status badge-success"></span>
                            <img className="img-fluid" src="images/team/05.jpg" alt=""/>
                          </div>
                          <div className="media-body">
                            <div className="messages-name">
                              <a href="#collapse">Caio Costa </a>
                              <span className="time-date"> 12 min ago</span>
                            </div>
                            <p>Excepturi dicta tempora vero animi...</p>
                            <div className="messages-replay">
                              <a className="link" href="#collapse"> <i className="la la-mail-reply"></i> Reply</a>
                              <a className="link" href="#collapse"> <i className="la la-eye"></i> Read</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="avatar avatar-sm mr-3">
                            <img className="img-fluid" src="images/team/07.jpg" alt=""/>
                          </div>
                          <div className="media-body">
                            <div className="messages-name">
                              <a href="#collapse">Jena Gaines </a>
                              <span className="time-date"> 12 hr ago</span>
                            </div>
                            <p>Exercitation ullamco laboris nisi...</p>
                            <div className="messages-replay">
                              <a className="link" href="#collapse"> <i className="la la-mail-reply"></i> Reply</a>
                              <a className="link" href="#collapse"> <i className="la la-eye"></i> Read</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="avatar avatar-sm mr-3">
                            <span className="status badge-success"></span>
                            <img className="img-fluid" src="images/team/03.jpg" alt=""/>
                          </div>
                          <div className="media-body">
                            <div className="messages-name">
                              <a href="#collapse">Lael Greer</a>
                              <span className="time-date"> 30 hr ago</span>
                            </div>
                            <p>Ut aliquip ex ea commodo...</p>
                            <div className="messages-replay">
                              <a className="link" href="#collapse"> <i className="la la-mail-reply"></i> Reply</a>
                              <a className="link" href="#collapse"> <i className="la la-eye"></i> Read</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="text-center">
                        <a className="link" href="#collapse">View all notification</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown show notifications">
                  <a className="dropdown-toggle" href="#collapse" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span>
                  <span className="notifications-badge"></span>
                  <i className="la la-bell"></i>
                  </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="notifications-title">
                      <div className="row">
                        <div className="col-8">
                          <h4>Notifications</h4>
                          <p className="mb-0"> 2 unread notification</p>
                        </div>
                        <div className="col-4">
                          <span className="badge badge-light">56 new</span>
                        </div>
                      </div>
                    </div>
                    <ul className="list-unstyled">
                      <li>
                        <div className="media">
                          <div className="avatar avatar-sm mr-3">
                            <img className="img-fluid" src="images/team/01.jpg" alt=""/>
                          </div>
                          <div className="media-body">
                            <a href="#collapse"> <b>Sed do </b> eiusmod tempor <span className="text-primary">labore</span> </a>
                            <span> <i className="fa fa-check-circle text-success"></i> 12 min ago</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="avatar avatar-sm mr-3">
                            <img className="img-fluid" src="images/team/02.jpg" alt=""/>
                          </div>
                          <div className="media-body">
                            <a href="#collapse"> Ut enim ad <b>minim</b> veniam nostrud </a>
                            <span> <i className="fa fa-arrow-circle-up text-info"></i> 40 min ago</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="avatar avatar-sm mr-3">
                            <img className="img-fluid" src="images/team/03.jpg" alt=""/>
                          </div>
                          <div className="media-body">
                            <a href="#collapse"> <b>Ullamco</b> laboris nisi ut aliquip </a>
                            <span> <i className="fa fa-plus-circle text-danger"></i> 12 hr ago</span>
                          </div>
                        </div>
                      </li>
                      <li className="text-center">
                        <a className="link" href="#collapse">View all notification</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown show user-profile">
                  <a className="dropdown-toggle" href="#collapse" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div className="avatar avatar-sm mr-1">
                      <img className="img-fluid" src="images/team/01.jpg" alt=""/>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="profile-pic">
                      <div className="row">
                        <div className="col-8">
                          <div className="profile-name">
                            <h4>Rafael Ribeiro</h4>
                            <a href="#collapse"> rafael.ribeiro@gmail.com</a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="avatar mr-1">
                            <img className="img-fluid" src="images/team/03.jpg" alt=""/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="profile-info">
                      <a className="dropdown-item" href="#collapse"> <i className="la la-edit"></i>  My Profile </a>
                      <a className="dropdown-item" href="#collapse"> <i className="la la-refresh"></i> Inbox <span className="badge badge-danger float-right">03</span></a>
                      <a className="dropdown-item" href="#collapse"> <i className="la la-star-o"></i>  Favorites </a>
                      <a className="dropdown-item" href="#collapse"> <i className="la la-wechat"></i>  Downloads </a>
                      <div className="separator my-2"></div>
                      <a className="dropdown-item" href="#collapse"> <i className="la la-cog"></i> Account Setting </a>
                      <a className="btn btn-outline-primary outline-gray btn-sm mt-3" href="#collapse"> <i className="la la-power-off"></i> Logout </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default MainMenu;