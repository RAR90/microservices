
import React from 'react';
// import ReactDOM from 'react-dom';
import profileImage from '../assets/img/profile.jpg';

class QuickSidebar extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return (
      <div className="quick-sidebar">
        <a href="/" className="close-quick-sidebar">
          <i className="flaticon-cross"></i>
        </a>
        <div className="quick-sidebar-wrapper">
          <ul className="nav nav-tabs nav-line nav-color-primary" role="tablist">
            <li className="nav-item"> <a className="nav-link active show" data-toggle="tab" href="#messages" role="tab" aria-selected="true">Messages</a> </li>
            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#tasks" role="tab" aria-selected="false">Tasks</a> </li>
            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#settings" role="tab" aria-selected="false">Settings</a> </li>
          </ul>
          <div className="tab-content mt-3">
            <div className="tab-chat tab-pane fade show active" id="messages" role="tabpanel">
              <div className="messages-contact">
                <div className="quick-wrapper">
                  <div className="quick-scroll scrollbar-outer">
                    <div className="quick-content contact-content">
                      <span className="category-title mt-0">Recent</span>
                      <div className="contact-list contact-list-recent">
                        <div className="user">
                          <a href="/">
                            <div className="user-image">
                              <img src={profileImage} alt="denis" />
                              <span className="status online"></span>
                            </div>
                            <div className="user-data">
                              <span className="name">Jimmy Denis</span>
                              <span className="message">How are you ?</span>
                            </div>
                          </a>
                        </div>
                        <div className="user">
                          <a href="/">
                            <div className="user-image">
                              <img src="assets/img/chadengle.jpg" alt="chad" />
                              <span className="status away"></span>
                            </div>
                            <div className="user-data">
                              <span className="name">Chad</span>
                              <span className="message">Ok, Thanks !</span>
                            </div>
                          </a>
                        </div>
                        <div className="user">
                          <a href="/">
                            <div className="user-image">
                              <img src="assets/img/mlane.jpg" alt="john doe" />
                              <span className="status offline"></span>
                            </div>
                            <div className="user-data">
                              <span className="name">John Doe</span>
                              <span className="message">Ready for the meeting today with...</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <span className="category-title">Contacts</span>
                      <div className="contact-list">
                        <div className="user">
                          <a href="/">
                            <div className="user-image">
                              <img src="assets/img/jm_denis.jpg" alt="denis" />
                              <span className="status"></span>
                            </div>
                            <div className="user-data2">
                              <span className="name">Jimmy Denis</span>
                            </div>
                          </a>
                        </div>
                        <div className="user">
                          <a href="/">
                            <div className="user-image">
                              <img src="assets/img/chadengle.jpg" alt="chad" />
                              <span className="status away"></span>
                            </div>
                            <div className="user-data2">
                              <span className="name">Chad</span>
                            </div>
                          </a>
                        </div>
                        <div className="user">
                          <a href="/">
                            <div className="user-image">
                              <img src="assets/img/talha.jpg" alt="talha" />
                              <span className="status offline"></span>
                            </div>
                            <div className="user-data2">
                              <span className="name">Talha</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="messages-wrapper">
                <div className="messages-title">
                  <div className="user">
                    <img src="assets/img/chadengle.jpg" alt="chad" />
                    <span className="name">Chad</span>
                    <span className="last-active">Active 2h ago</span>
                  </div>
                  <button className="return">
                    <i className="flaticon-left-arrow-3"></i>
                  </button>
                </div>
                <div className="messages-body messages-scroll scrollbar-outer" />
                  <div className="message-content-wrapper">
                    <div className="message message-in">
                      <div className="message-pic">
                        <img src="assets/img/chadengle.jpg" alt="chad" />
                      </div>
                      <div className="message-body">
                        <div className="message-content">
                          <div className="name">Chad</div>
                          <div className="content">Hello, Rian</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-content-wrapper">
                    <div className="message message-out">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="content">
                            Hello, Chad
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-content-wrapper">
                    <div className="message message-in">
                      <div className="message-pic">
                        <img src="assets/img/chadengle.jpg" alt="chad" />
                      </div>
                      <div className="message-body">
                        <div className="message-content">
                          <div className="name">Chad</div>
                          <div className="content">
                            When is the deadline of the project we are working on ?
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-content-wrapper">
                    <div className="message message-out">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="content">
                            The deadline is about 2 months away
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-content-wrapper">
                    <div className="message message-in">
                      <div className="message-pic">
                        <img src="assets/img/chadengle.jpg" alt="chad" />
                      </div>
                      <div className="message-body">
                        <div className="message-content">
                          <div className="name">Chad</div>
                          <div className="content">
                            Ok, Thanks !
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="messages-form">
                  <div className="messages-form-control">
                    <input type="text" placeholder="Type here" className="form-control input-pill input-solid message-input" />
                  </div>
                  <div className="messages-form-tool">
                    <a href="/" className="attachment">
                      <i className="flaticon-file"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          <div className="tab-pane fade" id="tasks" role="tabpanel">
            <div className="tasks-wrapper">
              <div className="tasks-scroll scrollbar-outer">
                <div className="tasks-content">
                  <span className="category-title mt-0">Today</span>
                  <ul className="tasks-list">
                    <li>
                      <label className="custom-checkbox custom-control checkbox-secondary">
                        <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Planning new project structure</span>
                        <span className="task-action">
                          <a href="/" className="link text-danger">
                            <i className="flaticon-interface-5"></i>
                          </a>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label className="custom-checkbox custom-control checkbox-secondary">
                        <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Create the main structure							</span>
                        <span className="task-action">
                          <a href="/" className="link text-danger">
                            <i className="flaticon-interface-5"></i>
                          </a>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label className="custom-checkbox custom-control checkbox-secondary">
                        <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Add new Post</span>
                        <span className="task-action">
                          <a href="/" className="link text-danger">
                            <i className="flaticon-interface-5"></i>
                          </a>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label className="custom-checkbox custom-control checkbox-secondary">
                        <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Finalise the design proposal</span>
                        <span className="task-action">
                          <a href="/" className="link text-danger">
                            <i className="flaticon-interface-5"></i>
                          </a>
                        </span>
                      </label>
                    </li>
                  </ul>

                  <span className="category-title">Tomorrow</span>
                  <ul className="tasks-list">
                    <li>
                      <label className="custom-checkbox custom-control checkbox-secondary">
                        <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Initialize the project							</span>
                        <span className="task-action">
                          <a href="/" className="link text-danger">
                            <i className="flaticon-interface-5"></i>
                          </a>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label className="custom-checkbox custom-control checkbox-secondary">
                        <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Create the main structure							</span>
                        <span className="task-action">
                          <a href="/" className="link text-danger">
                            <i className="flaticon-interface-5"></i>
                          </a>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label className="custom-checkbox custom-control checkbox-secondary">
                        <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Updates changes to GitHub							</span>
                        <span className="task-action">
                          <a href="/" className="link text-danger">
                            <i className="flaticon-interface-5"></i>
                          </a>
                        </span>
                      </label>
                    </li>
                    <li>
                      <label className="custom-checkbox custom-control checkbox-secondary">
                        <input type="checkbox" className="custom-control-input" /><span title="This task is too long to be displayed in a normal space!" className="custom-control-label">This task is too long to be displayed in a normal space!				</span>
                        <span className="task-action">
                          <a href="/" className="link text-danger">
                            <i className="flaticon-interface-5"></i>
                          </a>
                        </span>
                      </label>
                    </li>
                  </ul>

                  <div className="mt-3">
                    <div className="btn btn-primary btn-rounded btn-sm">
                      <span className="btn-label">
                        <i className="la la-plus"></i>
                      </span>
                      Add Task
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="settings" role="tabpanel">
            <div className="quick-wrapper settings-wrapper">
              <div className="quick-scroll scrollbar-outer">
                <div className="quick-content settings-content">
                  <span className="category-title mt-0">General Settings</span>
                  <ul className="settings-list">
                    <li>
                      <span className="item-label">Enable Notifications</span>
                      <div className="item-control">
                        <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                      </div>
                    </li>
                    <li>
                      <span className="item-label">Signin with social media</span>
                      <div className="item-control">
                        <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                      </div>
                    </li>
                    <li>
                      <span className="item-label">Backup storage</span>
                      <div className="item-control">
                        <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                      </div>
                    </li>
                    <li>
                      <span className="item-label">SMS Alert</span>
                      <div className="item-control">
                        <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                      </div>
                    </li>
                  </ul>

                  <span className="category-title mt-0">Notifications</span>
                  <ul className="settings-list">
                    <li>
                      <span className="item-label">Email Notifications</span>
                      <div className="item-control">
                        <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                      </div>
                    </li>
                    <li>
                      <span className="item-label">New Comments</span>
                      <div className="item-control">
                        <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                      </div>
                    </li>
                    <li>
                      <span className="item-label">Chat Messages</span>
                      <div className="item-control">
                        <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                      </div>
                    </li>
                    <li>
                      <span className="item-label">Project Updates</span>
                      <div className="item-control">
                        <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                      </div>
                    </li>
                    <li>
                      <span className="item-label">New Tasks</span>
                      <div className="item-control">
                        <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default QuickSidebar;