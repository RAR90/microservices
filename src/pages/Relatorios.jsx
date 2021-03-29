import React from 'react'
// import ReactDOM from 'react-dom'
import MainMenu from '../components/MainMenu'
import SideBar from '../components/SideBar'
import QuickSidebar from '../components/QuickSidebar'
import NewReport from '../components/NewReport'

import '../App.css'

class Relatorios extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return (
      <div className="App">
        <MainMenu/>
        <SideBar page="/" />
        <div className="main-panel">
          <div className="content">
            <div className="container-fluid">
              <div className="page-header">
                <h3 className="py-0 my-0">Relatórios</h3>
                <div className="btn-group btn-group-page-header ml-auto">
                  <button type="button" className="btn btn-default btn-border btn-round btn-lg" data-toggle="modal" data-target="#new-report">
                    NOVO RELATÓRIO &nbsp;&nbsp;
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>

              <div className="row">

                <div className="col-md-5">
                  <div className="card pb-4">
                    <div className="card-header">
                      <h4 className="card-title">Relatório de Tickets</h4>
                      <p className="card-category">
                        Realtório do status do tickets abertos, importados do e-mail.
                      </p>
                    </div>
                    <div className="card-body mb-1">
                      <div className="chart-container">
                        <canvas id="usersChart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-head-row">
                        <div className="card-title">Estatísticas do Usuário</div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="chart-container">
                        <canvas id="statisticsChart"></canvas>
                      </div>
                      <div id="myChartLegend"></div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row row-card-no-pd">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-head-row">
                        <h4 className="card-title">Usuários pelo mundo</h4>
                        <div className="card-tools">
                          <a href="#a" className="btn btn-primary btn-icon-only"><span className="icon flaticon-down-arrow"></span></a>
                          <a href="#b" className="btn btn-primary btn-icon-only"><span className="icon flaticon-repeat"></span></a>
                          <a href="#c" className="btn btn-primary btn-icon-only"><span className="icon flaticon-cross"></span></a>
                        </div>
                      </div>
                      <p className="card-category">
                      Map of the distribution of users around the world</p>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="table-responsive table-hover table-sales">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img src="./img/flags/id.png" alt="indonesia" />
                                    </div>
                                  </td>
                                  <td>Indonesia</td>
                                  <td className="text-right">
                                    2.320
                                  </td>
                                  <td className="text-right">
                                    42.18%
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img src="./img/flags/us.png" alt="united states" />
                                    </div>
                                  </td>
                                  <td>USA</td>
                                  <td className="text-right">
                                    240
                                  </td>
                                  <td className="text-right">
                                    4.36%
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img src="./img/flags/au.png" alt="australia" />
                                    </div>
                                  </td>
                                  <td>Australia</td>
                                  <td className="text-right">
                                    119
                                  </td>
                                  <td className="text-right">
                                    2.16%
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img src="./img/flags/ru.png" alt="russia" />
                                    </div>
                                  </td>
                                  <td>Russia</td>
                                  <td className="text-right">
                                    1.081
                                  </td>
                                  <td className="text-right">
                                    19.65%
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img src="./img/flags/cn.png" alt="china" />
                                    </div>
                                  </td>
                                  <td>China</td>
                                  <td className="text-right">
                                    1.100
                                  </td>
                                  <td className="text-right">
                                    20%
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img src="./img/flags/br.png" alt="brazil" />
                                    </div>
                                  </td>
                                  <td>Brasil</td>
                                  <td className="text-right">
                                    640
                                  </td>
                                  <td className="text-right">
                                    11.63%
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mapcontainer">
                            <div id="map-example" className="vmap"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <QuickSidebar/>
        <NewReport/>
      </div>
    );
  }
}
export default Relatorios;