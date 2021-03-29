import React from 'react'
import axios from 'axios'
import MainMenu from './components/MainMenu'
import SideBar from './components/SideBar'

import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: []
    };
  }

  componentDidMount() {
    const headers = {
      'Token': '&*IUHK!@#$%&*45()ihjkhiuiuiIUY6JE45H@*&*&*764587yiu5jhkj',
      'Content-Type': 'application/json'
    };
    axios.get('http://teclabs.com.br/html/microservices/users.php', { headers })
    .then(res => {
      const persons = res.data;
      this.setState({ persons })
    })
  }

  render() {
    // { this.state.persons.map(person => <li>{person.name}</li>)}
    return (
      <div className="App">

        <MainMenu />

        <div className="wrapper">

          <SideBar />

          <div className="main-panel">
            <div className="panel-hedding">
              <div className="row">
                <div className="col-md-9">
                  <h1>Hello, BSA Standards</h1>
                  <p>Welcome to the BSA standards to React based tool development template, we have the best plugins and libraries available on the internet, feel free to browse. Hope you enjoy!</p>
                </div>
                <div className="col-lg-7">
                  <div className="alert bg-white shadow-sm alert-dismissible fade show mb-0" role="alert">
                    <i className="feather icon-alert-triangle text-primary mr-2"></i> Welcome back,  Dave mattew!  Your last sig in at Yesterday, 16:54 PM
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="add-new">
                    <a className="btn btn-primary" href="index.html#!"> <i className="feather icon-plus"></i> Add new</a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mt-4 mt-lg-5">
                  <div className="card">
                    <div className="card-title">
                      <div className="card-title-left">
                        <h4 className="card-title-text">Recent revenue</h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <div id="revenue-chart">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mt-lg-5">
                  <div className="card">
                    <div className="card-title">
                      <div className="card-title-left">
                        <h4 className="card-title-text">Top Sales</h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <div id="sale-chart"></div>
                      <div className="pt-4">
                        <div className="d-flex w-100">
                          <span className="text-light font-weight-normal"><i className="fa fa-circle pr-2 text-primary"></i> 44 not sent</span>
                          <span className="ml-auto text-light font-weight-normal"><i className="fa fa-circle pr-2 text-primary"></i> 44 opened</span>
                        </div>
                        <div className="d-flex w-100 mt-4">
                          <span className="text-light font-weight-normal"><i className="fa fa-circle pr-2 text-primary"></i> 44 success</span>
                          <span className="ml-auto text-light font-weight-normal"><i className="fa fa-circle pr-2 text-primary"></i> 44 SMTP error</span>
                        </div>
                        <a className="btn btn-light btn-block mt-4" href="index.html#">View more</a>
                        <p className="text-center mt-3">The secret of getting ahead is getting started</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mt-lg-5">
                  <div className="card mb-4 h-auto overflow-hidden">
                    <div className="card-title">
                      <div className="card-title-left">
                        <h4 className="card-title-text">Downloads</h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex align-items-end">
                        <div className="mr-3">
                          <h3>10M</h3>
                          <span>Views</span>
                        </div>
                        <div id="download-chart">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card h-auto">
                    <div className="card-title">
                      <div className="card-title-left">
                        <h4 className="card-title-text">Our Projects</h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="project-item">
                        <div className="project-title">
                          <div className="project-title-left">
                            <h5 className="mb-3"> <a href="index.html#!"> Application development </a></h5>
                            <span className="badge badge-overlay-danger">Pending</span>
                          </div>
                        </div>
                        <div className="project-comments mt-1">
                          <p>Officia nam sed possimus repellat et, assumenda corporis velit.</p>
                        </div>
                        <div className="project-status mt-2">
                          <div className="project-status-label ">
                            <span>Completed</span>
                            <span>60%</span>
                          </div>
                          <div className="progress progress-h-5">
                            <div className="progress-bar" role="progressbar" style={{"width": "60%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="card">
                    <div className="card-title">
                      <div className="card-title-left">
                        <h4 className="card-title-text">To do task</h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="todo-task">
                        <div className="search-box mb-2">
                          <a href="index.html#"> <i className="la la-align-left"></i>  </a>
                          <input className="form-control border-0" type="search" placeholder="Add a task..." aria-label="Search"/>
                        </div>
                        <ul className="list-group">
                          <li className="list-group-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck11"/>
                              <label className="custom-control-label" htmlFor="customCheck11"> New project wireframes</label>
                              <p className="task-status">Before 5pm, completed 60%</p>
                            </div>
                            <div className="task-action">
                              <ul className="list-unstyled">
                                <li> <a href="index.html#!"> <i className="la la-edit"></i> </a> </li>
                                <li> <a href="index.html#!"> <i className="la la-trash-o"></i> </a> </li>
                              </ul>
                            </div>
                          </li>
                          <li className="list-group-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck12"/>
                              <label className="custom-control-label" htmlFor="customCheck12"> Today bug fixed</label>
                              <p className="task-status">Letter in progress</p>
                            </div>
                            <div className="task-action">
                              <ul className="list-unstyled">
                                <li> <a href="index.html#!"> <i className="la la-edit"></i> </a> </li>
                                <li> <a href="index.html#!"> <i className="la la-trash-o"></i> </a> </li>
                              </ul>
                            </div>
                          </li>
                          <li className="list-group-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck13"/>
                              <label className="custom-control-label" htmlFor="customCheck13"> Update landing page</label>
                              <p className="task-status">Progress</p>
                            </div>
                            <div className="task-action">
                              <ul className="list-unstyled">
                                <li> <a href="index.html#!"> <i className="la la-edit"></i> </a> </li>
                                <li> <a href="index.html#!"> <i className="la la-trash-o"></i> </a> </li>
                              </ul>
                            </div>
                          </li>
                          <li className="list-group-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck14"/>
                              <label className="custom-control-label" htmlFor="customCheck14"> Reading about face 5</label>
                              <p className="task-status">Before 4pm, completed 85%</p>
                            </div>
                            <div className="task-action">
                              <ul className="list-unstyled">
                                <li> <a href="index.html#!"> <i className="la la-edit"></i> </a> </li>
                                <li> <a href="index.html#!"> <i className="la la-trash-o"></i> </a> </li>
                              </ul>
                            </div>
                          </li>
                          <li className="list-group-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck15"/>
                              <label className="custom-control-label" htmlFor="customCheck15"> Design cart page</label>
                              <p className="task-status">Completed 100%</p>
                            </div>
                            <div className="task-action">
                              <ul className="list-unstyled">
                                <li> <a href="index.html#!"> <i className="la la-edit"></i> </a> </li>
                                <li> <a href="index.html#!"> <i className="la la-trash-o"></i> </a> </li>
                              </ul>
                            </div>
                          </li>
                          <li className="list-group-item mb-1">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck16"/>
                              <label className="custom-control-label" htmlFor="customCheck16"> New project wireframes</label>
                              <p className="task-status">Before 5pm, completed 60%</p>
                            </div>
                            <div className="task-action">
                              <ul className="list-unstyled">
                                <li> <a href="index.html#!"> <i className="la la-edit"></i> </a> </li>
                                <li> <a href="index.html#!"> <i className="la la-trash-o"></i> </a> </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="card">
                    <div className="card-title">
                      <div className="card-title-left">
                        <h4 className="card-title-text">Support tickets</h4>
                      </div>
                      <div className="card-title-right">
                        <a className="btn btn-primary btn-sm" href="index.html#">Create a ticket</a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="support-ticket">
                        <a className="ticket-item" href="index.html#">
                          <div className="avatar avatar-xl bg-soft-primary">
                            <span className="avatar-name text-primary">OX</span>
                          </div>
                          <div className="ticket-info">
                            <span className="text-light ticket-customer">@airi_satou </span>
                            <span className="badge badge-overlay-danger">Bug</span>
                            <h5 className="title mt-2">Post Title under Post Image</h5>
                            <p className="text-light mb-0">Doloribus totam non impedit ipsa, aut rem sit earum illo....</p>
                          </div>
                          <div className="ticket-time text-right">
                            <span><i className="la la-calendar-o"></i> 2 hours ago</span>
                            <span><i className="la la-comment-o"></i>  5</span>
                          </div>
                        </a>
                        <a className="ticket-item" href="index.html#">
                          <div className="avatar avatar-xl bg-soft-primary">
                            <span className="avatar-name text-primary">SM</span>
                          </div>
                          <div className="ticket-info">
                            <span className="text-light ticket-customer">@cedric_kelly</span>
                            <span className="badge badge-overlay-success">Question</span>
                            <h5 className="title mt-2">Sicial media link problems</h5>
                            <p className="text-light mb-0">Doloribus totam non impedit ipsa, aut rem sit earum illo....</p>
                          </div>
                          <div className="ticket-time text-right">
                            <span><i className="la la-calendar-o"></i> 3 hours ago</span>
                            <span><i className="la la-comment-o"></i>  2</span>
                          </div>
                        </a>
                        <a className="ticket-item" href="index.html#">
                          <div className="avatar avatar-xl bg-soft-primary">
                            <span className="avatar-name text-primary">DC</span>
                          </div>
                          <div className="ticket-info">
                            <span className="text-light ticket-customer">@jena_gaines </span>
                            <span className="badge badge-overlay-danger">Bug</span>
                            <h5 className="title mt-2">Category page</h5>
                            <p className="text-light mb-0">Doloribus totam non impedit ipsa, aut rem sit earum illo....</p>
                          </div>
                          <div className="ticket-time text-right">
                            <span><i className="la la-calendar-o"></i> 6 hours ago</span>
                            <span><i className="la la-comment-o"></i>  10</span>
                          </div>
                        </a>
                        <a className="ticket-item" href="index.html#">
                          <div className="avatar avatar-xl bg-soft-primary">
                            <span className="avatar-name text-primary">BA</span>
                          </div>
                          <div className="ticket-info">
                            <span className="text-light ticket-customer">@tiger_nixon</span>
                            <span className="badge badge-overlay-info">Mega menu</span>
                            <h5 className="title mt-2">Sicial media link problems</h5>
                            <p className="text-light mb-0">Doloribus totam non impedit ipsa, aut rem sit earum illo....</p>
                          </div>
                          <div className="ticket-time text-right">
                            <span><i className="la la-calendar-o"></i> 10 hours ago</span>
                            <span><i className="la la-comment-o"></i>  4</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-title">
                      <div className="card-title-left">
                        <h4 className="card-title-text">New Registered Users </h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="user">
                        <div className="user-item">
                          <div className="avatar avatar-md mr-3">
                            <img className="img-fluid" src="images/team/05.jpg" alt=""/>
                          </div>
                          <div className="user-name">
                            <h6><a href="index.html#!">Caio Costa </a> </h6>
                            <span> rafael.ribeiro@gmail.com</span>
                          </div>
                          <div className="user-action">
                            <div className="dropdown icon-dropdown">
                              <a className="btn-icon dropdown-toggle" data-toggle="dropdown" href="index.html#">
                              <i className="zmdi zmdi-more"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-inbox"></i>Inbox</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-refresh-sync-alert"></i>Refresh</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-gps"></i>Manage Widgets</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-portable-wifi"></i>Edit Widgets</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-settings"></i>Settings</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="user-item">
                          <div className="avatar avatar-md mr-3 bg-secondary">
                            <img className="img-fluid" src="images/team/13.png" alt=""/>
                          </div>
                          <div className="user-name">
                            <h6><a href="index.html#!">Wanderleia Mattar	 </a> </h6>
                            <span> brunonash@gmail.com</span>
                          </div>
                          <div className="user-action">
                            <div className="dropdown icon-dropdown">
                              <a className="btn-icon dropdown-toggle" data-toggle="dropdown" href="index.html#">
                              <i className="zmdi zmdi-more"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-inbox"></i>Inbox</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-refresh-sync-alert"></i>Refresh</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-gps"></i>Manage Widgets</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-portable-wifi"></i>Edit Widgets</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-settings"></i>Settings</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="user-item">
                          <div className="avatar avatar-md mr-3">
                            <img className="img-fluid" src="images/team/05.jpg" alt=""/>
                          </div>
                          <div className="user-name">
                            <h6><a href="index.html#!">Lucas Célio </a> </h6>
                            <span> cedrickelly@gmail.com</span>
                          </div>
                          <div className="user-action">
                            <div className="dropdown icon-dropdown">
                              <a className="btn-icon dropdown-toggle" data-toggle="dropdown" href="index.html#">
                              <i className="zmdi zmdi-more"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-inbox"></i>Inbox</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-refresh-sync-alert"></i>Refresh</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-gps"></i>Manage Widgets</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-portable-wifi"></i>Edit Widgets</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-settings"></i>Settings</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="user-item">
                          <div className="avatar avatar-md mr-3">
                            <img className="img-fluid" src="images/team/02.jpg" alt=""/>
                          </div>
                          <div className="user-name">
                            <h6><a href="index.html#!">Suki Burks </a></h6>
                            <span> sukiburks@gmail.com</span>
                          </div>
                          <div className="user-action">
                            <div className="dropdown icon-dropdown">
                              <a className="btn-icon dropdown-toggle" data-toggle="dropdown" href="index.html#">
                              <i className="zmdi zmdi-more"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-inbox"></i>Inbox</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-refresh-sync-alert"></i>Refresh</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-gps"></i>Manage Widgets</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-portable-wifi"></i>Edit Widgets</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-settings"></i>Settings</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="user-item">
                          <div className="avatar avatar-md mr-3">
                            <img className="img-fluid" src="images/team/05.jpg" alt=""/>
                          </div>
                          <div className="user-name">
                            <h6><a href="index.html#!">Yuri Berry </a></h6>
                            <span> Yyuriberry@gmail.com</span>
                          </div>
                          <div className="user-action">
                            <div className="dropdown icon-dropdown">
                              <a className="btn-icon dropdown-toggle" data-toggle="dropdown" href="index.html#">
                              <i className="zmdi zmdi-more"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-inbox"></i>Inbox</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-refresh-sync-alert"></i>Refresh</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-gps"></i>Manage Widgets</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-portable-wifi"></i>Edit Widgets</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-settings"></i>Settings</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="user-item mb-2">
                          <div className="avatar avatar-md mr-3 mb-1">
                            <img className="img-fluid" src="images/team/05.jpg" alt=""/>
                          </div>
                          <div className="user-name">
                            <h6><a href="index.html#!">Caio Costa </a> </h6>
                            <span> rafael.ribeiro@gmail.com</span>
                          </div>
                          <div className="user-action">
                            <div className="dropdown icon-dropdown">
                              <a className="btn-icon dropdown-toggle" data-toggle="dropdown" href="index.html#">
                              <i className="zmdi zmdi-more"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-inbox"></i>Inbox</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-refresh-sync-alert"></i>Refresh</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-gps"></i>Manage Widgets</a>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-portable-wifi"></i>Edit Widgets</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="index.html#"><i className="zmdi zmdi-settings"></i>Settings</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-title">
                      <div className="card-title-left">
                        <h4 className="card-title-text">Latest activity</h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="activity">
                        <div className="activity-item">
                          <div className="date">Sep 25</div>
                          <div className="text">Responded to need <a href="index.html#!">“Volunteer opportunity”</a></div>
                        </div>
                        <div className="activity-item">
                          <div className="date">Sep 24</div>
                          <div className="text">Added an interest <a href="index.html#!">“Volunteer Activities”</a></div>
                        </div>
                        <div className="activity-item">
                          <div className="date">Sep 23</div>
                          <div className="text">Joined the group <a href="index.html#!">“Boardsmanship Forum”</a></div>
                        </div>
                        <div className="activity-item">
                          <div className="date">Sep 21</div>
                          <div className="text">Responded to need <a href="index.html#!">“In-Kind Opportunity”</a></div>
                        </div>
                        <div className="activity-item">
                          <div className="date">Sep 18</div>
                          <div className="text">Created need <a href="index.html#!">“Volunteer Opportunity”</a></div>
                        </div>
                        <div className="activity-item pb-2">
                          <div className="date">Sep 17</div>
                          <div className="text">Attending the event <a href="index.html#!">“Some New Event”</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card">
                    <div className="card-title">
                      <div className="card-title-left">
                        <h4 className="card-title-text">Manage employ position</h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-centered table-hover mb-0">
                          <thead>
                            <tr>
                              <th scope="col">Employ </th>
                              <th scope="col">Position</th>
                              <th scope="col">Office</th>
                              <th scope="col">Age</th>
                              <th scope="col">Start date</th>
                              <th scope="col">Aparicinacy</th>
                              <th scope="col">Salary</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row"><img className="rounded-circle mr-2" src="images/team/01.jpg" width="40" height="40"  alt=""/> </th>
                              <td>Accountant</td>
                              <td>802 Peninsula St. Madison, AL 35758</td>
                              <td>33</td>
                              <td>2008/11/28</td>
                              <td>
                                <div className="progress progress-h-5">
                                  <div className="progress-bar" role="progressbar" style={{"width":"75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td> $162,700 </td>
                              <td><a className="btn btn-overlay-primary btn-icon btn-sm" href="index.html#"><i className="la la-edit"></i> </a></td>
                            </tr>
                            <tr>
                              <th scope="row"><img className="rounded-circle mr-2" src="images/team/02.jpg" width="40" height="40"  alt=""/></th>
                              <td>Sales </td>
                              <td>412 S. Green Hill St. Asheboro, NC 27205</td>
                              <td>50</td>
                              <td>2001/08/12</td>
                              <td>
                                <div className="progress progress-h-5">
                                  <div className="progress-bar" role="progressbar" style={{"width":"90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td> $5,56,700 </td>
                              <td><a className="btn btn-overlay-primary btn-icon btn-sm" href="index.html#"><i className="fa fa-trash-o"></i> </a></td>
                            </tr>
                            <tr>
                              <th scope="row"><img className="rounded-circle mr-2" src="images/team/03.jpg" width="40" height="40"  alt=""/></th>
                              <td>Developer</td>
                              <td>46 St Paul Ave. Dickson, TN 37055</td>
                              <td>30</td>
                              <td>2010/12/30</td>
                              <td>
                                <div className="progress progress-h-5">
                                  <div className="progress-bar" role="progressbar" style={{"width":"60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td> $56,700 </td>
                              <td><a className="btn btn-overlay-primary btn-icon btn-sm" href="index.html#"><i className="la la-edit"></i> </a></td>
                            </tr>
                            <tr>
                              <th scope="row"><img className="rounded-circle mr-2" src="images/team/04.jpg" width="40" height="40"  alt=""/></th>
                              <td>Designer</td>
                              <td>197 Hawthorne Rd. Beckley, WV 25801</td>
                              <td>28</td>
                              <td>2012/06/02</td>
                              <td>
                                <div className="progress progress-h-5">
                                  <div className="progress-bar" role="progressbar" style={{"width":"80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td> $13,465 </td>
                              <td><a className="btn btn-overlay-primary btn-icon btn-sm" href="index.html#"><i className="fa fa-trash-o"></i> </a></td>
                            </tr>
                            <tr>
                              <th scope="row"><img className="rounded-circle mr-2" src="images/team/05.jpg" width="40" height="40"  alt=""/></th>
                              <td>Sales </td>
                              <td>412 S. Green Hill St. Asheboro, NC 27205</td>
                              <td>50</td>
                              <td>2001/08/12</td>
                              <td>
                                <div className="progress progress-h-5">
                                  <div className="progress-bar" role="progressbar" style={{"width":"90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </td>
                              <td> $5,56,700 </td>
                              <td><a className="btn btn-overlay-primary btn-icon btn-sm" href="index.html#"><i className="fa fa-trash-o"></i> </a></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
export default App;