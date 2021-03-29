import React from 'react';
// import ReactDOM from 'react-dom';
// import appLogo from '../assets/img/system-logo.png';

class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {page: this.props.page};
  }

  active(page) {
    if(page === this.state.page) {
      return "nav-item active"
    }
    return "nav-item"
  }

  render() {
    return (

      <div className="sidebar-panel nicescrollbar sidebar-panel-light">
        <ul className="sidebar-menu">
          <li className="sidebar-header"> Microservices </li>
          <li>
            <a href="#collapse">
              <i className="la la-envelope"></i> <span>Email </span> <i className="la la-angle-right down-arrow"></i>
            </a>
            <ul className="sidebar-submenu">
              <li><a href="/"><span> Send Email </span> </a></li>
            </ul>
          </li>
          {/*
          <li className="sidebar-header"> User interface </li>
            <li>
              <a href="#collapse">
              <i className="la la-envelope"></i> <span>Email </span> <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="email-compose.html"><span> Email compose </span> </a></li>
                <li><a href="email-inbox.html"><span> Email inbox </span> </a></li>
                <li><a href="email-read.html"><span> Email read </span> </a></li>
              </ul>
            </li>
            <li>
              <a href="#collapse">
              <i className="la la-cube"></i> <span>Basic ui</span> <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="ui-accordions.html"><span> Accordions </span> </a></li>
                <li><a href="ui-alerts.html"><span> Alerts </span> </a></li>
                <li><a href="ui-avatar.html"><span> Avatar </span> </a></li>
                <li><a href="ui-badge.html"><span> Badge </span> </a></li>
                <li><a href="ui-button.html"><span> Button </span> </a></li>
                <li><a href="ui-button-dropdown.html"><span> Button dropdown </span> </a></li>
                <li><a href="ui-button-group.html"><span> Button group </span> </a></li>
                <li><a href="ui-cards.html"><span> Cards </span> </a></li>
                <li><a href="ui-general.html"><span> General </span> </a></li>
                <li><a href="ui-grid.html"><span> Grid </span> </a></li>
                <li><a href="ui-pagination.html"><span> Pagination </span> </a></li>
                <li><a href="ui-popovers.html"><span> Popovers </span> </a></li>
                <li><a href="ui-progress-bar.html"><span> Progress bar </span> </a></li>
                <li><a href="ui-tabs.html"><span> Tabs </span> </a></li>
                <li><a href="ui-tooltips.html"><span> Tooltips </span> </a></li>
              </ul>
            </li>
            <li>
              <a href="#collapse">
              <i className="la la-briefcase"></i> <span>Advance ui</span> <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="advanced-ui-bootstrap-spinner.html"><span> Bootstrap spinner </span> </a></li>
                <li><a href="advanced-ui-cropperjs.html"><span> Cropperjs </span> </a></li>
                <li><a href="advanced-ui-duallistbox.html"><span> Duallistbox </span> </a></li>
                <li><a href="advanced-ui-lobilist.html"><span> Lobilist </span> </a></li>
                <li><a href="advanced-ui-modals.html"><span> Modals </span> </a></li>
                <li><a href="advanced-ui-nestable-lists.html"><span> Nestable lists </span> </a></li>
                <li><a href="advanced-ui-rangeslider.html"><span> Rangeslider </span> </a></li>
                <li><a href="advanced-ui-rating.html"><span> Rating </span> </a></li>
                <li><a href="advanced-ui-scrollbar.html"><span> Scrollbar </span> </a></li>
                <li><a href="advanced-ui-spinner.html"><span> Spinner </span> </a></li>
                <li><a href="advanced-ui-sweetalert2.html"><span> Sweetalert2 </span> </a></li>
                <li><a href="advanced-ui-switches.html"><span> Switches </span> </a></li>
                <li><a href="advanced-ui-toastr.html"><span> Toastr </span> </a></li>
              </ul>
            </li>
            <li>
              <a href="#collapse">
              <i className="la la-edit"></i> <span>Form</span> <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="form-basic.html"><span> Form Basic </span> </a></li>
                <li><a href="form-colorpicker.html"><span> Form Colorpicker </span> </a></li>
                <li><a href="form-datepicker.html"><span> Form Datepicker </span> </a></li>
                <li><a href="form-editors.html"><span> Form Editors </span> </a></li>
                <li><a href="form-input-groups.html"><span> Form Input groups </span> </a></li>
                <li><a href="form-masks.html"><span> Form Masks </span> </a></li>
                <li><a href="form-select.html"><span> Form Select </span> </a></li>
                <li><a href="form-touchspin.html"><span> Form Touchspin </span> </a></li>
                <li><a href="form-validation.html"><span> Form Validation </span> </a></li>
                <li><a href="form-wizard.html"><span> Form Wizard </span> </a></li>
                <li><a href="file-upload.html"><span> File upload </span> </a></li>
              </ul>
            </li>
            <li>
              <a href="#collapse">
              <i className="la la-smile-o"></i> <span>Icons pack</span> <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="icon-feather-font.html"><span> Feather font </span> </a></li>
                <li><a href="icon-flag.html"><span> Flag </span> </a></li>
                <li><a href="icon-font-awesome.html"><span> Font awesome </span> </a></li>
                <li><a href="icon-line-awesome.html"><span> Line awesome </span> </a></li>
                <li><a href="icon-material-design-iconic-font.html"><span> Material iconic </span> </a></li>
                <li><a href="icon-weather.html"><span> Weather iconic </span> </a></li>
              </ul>
            </li>
            <li>
              <a href="#collapse">
              <i className="la la-database"></i> <span>Portlet</span> <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="portlet-advanced.html"><span> Portlet advanced </span> </a></li>
                <li><a href="portlet-base.html"><span> Portlet base </span> </a></li>
                <li><a href="portlet-dragula.html"><span> Portlet dragula </span> </a></li>
              </ul>
            </li>
            <li>
              <a href="#collapse">
              <i className="la la-area-chart"></i> <span>Chart</span> <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="chart-amcharts.html"><i className="la la-minus"></i>Amcharts </a></li>
                <li><a href="chart-amcharts-02.html"><i className="la la-minus"></i>Amcharts advance </a></li>
                <li><a href="chart-amcharts-maps.html"><i className="la la-minus"></i>Amcharts maps </a></li>
                <li><a href="chart-apexcharts.html"><i className="la la-minus"></i>Apexcharts chart </a></li>
                <li><a href="chart-chartjs.html"><i className="la la-minus"></i>Chartjs chart </a></li>
                <li><a href="chart-morris.html"><i className="la la-minus"></i>Morris chart </a></li>
                <li><a href="chart-peity.html"><i className="la la-minus"></i>Peity chart </a></li>
                <li><a href="chart-sparkline.html"><i className="la la-minus"></i>Sparkline chart </a></li>
              </ul>
            </li>
            <li>
              <a href="#collapse">
              <i className="la la-map"></i>
              <span>Maps</span>
              <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="maps-google.html"><span> Maps google </span> </a></li>
                <li><a href="maps-vector.html"><span> Maps vector </span> </a></li>
              </ul>
            </li>
            <li>
              <a href="#collapse">
              <i className="la la-table"></i>
              <span>Tables</span>
              <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="tables-data.html"><span> Tables data </span> </a></li>
                <li><a href="tables-general.html"><span> Tables general </span> </a></li>
                <li><a href="tables-info.html"><span> Tables info </span> </a></li>
              </ul>
            </li>
            <li>
              <a href="#collapse">
              <i className="la la-comment"></i>
              <span>Blog</span>
              <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="blog.html"><span>  Blog </span> </a></li>
                <li><a href="blog-single.html"><span>  Blog single </span> </a></li>
              </ul>
            </li>
            <li>
              <a href="#collapse">
              <i className="la la-calendar"></i> <span>Calendar</span> <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="calendar.html"><span>  Calendar </span> </a></li>
                <li><a href="calendar-list.html"><span>  Calendar list </span> </a></li>
              </ul>
            </li>
            <li>
              <a href="timeline.html">
              <i className="la la-align-left"></i> <span>Timeline</span>
              <span className="sidebar-badge"> <span className="badge badge-success">4</span> </span>
              </a>
            </li>
            <li>
              <a href="chat.html">
              <i className="la la-wechat"></i> <span>Chat</span>
              <span className="sidebar-badge"> <span className="badge badge-primary">1</span> </span>
              </a>
            </li>
            <li className="sidebar-header"> Pages </li>
            <li>
              <a href="#collapse">
              <i className="la la-file"></i> <span>Pages</span> <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="blank-page.html"><span> Blank pag </span> </a></li>
                <li><a href="contacts.html"><span> Contact </span> </a></li>
                <li><a href="faqs.html"><span> Faqs </span> </a></li>
                <li><a href="pricing-table.html"><span> Pricing table </span> </a></li>
                <li><a href="profile.html"><span> Profile </span> </a></li>
                <li><a href="projects.html"><span> Projects </span> </a></li>
                <li><a href="search-results.html"><span> Search results </span> </a></li>
                <li>
                  <a href="#collapse!">
                  <span>File manager </span> <i className="la la-angle-right down-arrow"></i>
                  </a>
                  <ul className="sidebar-submenu">
                    <li><a href="file-manager.html"><span> file manager </span> </a></li>
                    <li><a href="file-manager-grid.html"><span> file manager grid </span> </a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#collapse">
              <i className="la la-print"></i> <span>invoice </span> <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="invoice-01.html"><span> Invoice 01 </span> </a></li>
                <li><a href="invoice-02.html"><span> Invoice 02 </span> </a></li>
              </ul>
            </li>
            <li>
              <a href="#collapse">
              <i className="la la-warning"></i> <span>Error </span> <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="error-01.html"><span> Error 01 </span> </a></li>
                <li><a href="error-02.html"><span> Error 02 </span> </a></li>
                <li><a href="error-03.html"><span> Error 03 </span> </a></li>
              </ul>
            </li>
            <li>
              <a href="#collapse">
              <i className="la la-expeditedssl"></i> <span>Forgot password  </span> <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="forgot-password-01.html"><span> forgot password 01 </span> </a></li>
                <li><a href="forgot-password-02.html"><span> forgot password 02 </span> </a></li>
              </ul>
            </li>
            <li>
              <a href="#collapse">
              <i className="la la-user-plus"></i> <span>Login </span> <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="login-01.html"><span> Login 01 </span> </a></li>
                <li><a href="login-02.html"><span> Login 02 </span> </a></li>
              </ul>
            </li>
            <li>
              <a href="#collapse">
              <i className="la la-user-secret"></i> <span>Sign up </span> <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="sign-up-01.html"><span> Sign up 01 </span> </a></li>
                <li><a href="sign-up-02.html"><span> Sign up 02 </span> </a></li>
              </ul>
            </li>
            <li className="sidebar-header"> Extras </li>
            <li>
              <a href="#collapse">
              <i className="la la-share"></i> <span>Multilevel</span>
              <i className="la la-angle-right down-arrow"></i>
              </a>
              <ul className="sidebar-submenu">
                <li><a href="#collapse"><span> Level One </span> </a></li>
                <li>
                  <a href="#collapse"><span> Level One </span> <i className="la la-angle-right down-arrow"></i></a>
                  <ul className="sidebar-submenu">
                    <li><a href="#collapse"><span> Level Two </span> </a></li>
                    <li>
                      <a href="#collapse"><span> Level Two </span> <i className="la la-angle-right down-arrow"></i></a>
                      <ul className="sidebar-submenu">
                        <li><a href="#collapse"><span> Level Three </span> </a></li>
                        <li><a href="#collapse"><span> Level Three </span> </a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="#collapse"><span> Level One </span> </a></li>
              </ul>
            </li>
          */}
          </ul>
      </div>

    );
  }
}
export default SideBar;