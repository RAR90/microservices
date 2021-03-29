import React from 'react'
import MainMenu from '../components/MainMenu'
import SideBar from '../components/SideBar'
import QuickSidebar from '../components/QuickSidebar'
import AdvancedFilter from '../components/AdvancedFilter'
import DataTable from '../components/DataTable'

import '../App.css'

class Pendentes extends React.Component {

  constructor() {
    super();
    this.state = {color: "red"};
  }

  render() {
    return (
      <div className="App">
        <MainMenu/>
        <SideBar page="pendentes"/>
        <div className="main-panel">
          <div className="content">
            <div className="container-fluid">
              <div className="page-header">
                <h3 className="py-0 my-0">Pendentes</h3>
                <div className="btn-group btn-group-page-header ml-auto">
                  <button type="button" className="btn btn-default btn-border btn-round btn-lg" data-toggle="modal" data-target="#filter">
                    FILTRO AVAÇADO &nbsp;&nbsp;
                    <i className="fa fa-filter"></i>
                  </button>
                </div>
              </div>
              <div className="row row-card-no-pd">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-head-row">
                        <h4 className="card-title">Registros Importados</h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <DataTable/>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-head-row">
                        <h4 className="card-title">Indicadores</h4>
                      </div>
                      <p className="card-category">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error assumenda perferendis.
                      </p>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 mb-2">
                          <div class="card card-stats card-success card-round">
                            <div class="card-body">
                                <div class="numbers text-center">
                                  <h3 class="card-category">Total Dentro do Prazo</h3>
                                  <h4 class="card-title">1</h4>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 mb-2">
                          <div class="card card-stats card-warning card-round">
                            <div class="card-body">
                                <div class="numbers text-center">
                                  <h3 class="card-category">Total Perto do Prazo</h3>
                                  <h4 class="card-title">4</h4>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 mb-2">
                          <div class="card card-stats card-danger card-round">
                            <div class="card-body">
                                <div class="numbers text-center">
                                  <h3 class="card-category">Total Fora do Prazo</h3>
                                  <h4 class="card-title">5</h4>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 mb-2">
                          <div class="card card-stats card-default card-round">
                            <div class="card-body">
                                <div class="numbers text-center">
                                  <h3 class="card-category">Total em Espera</h3>
                                  <h4 class="card-title">10</h4>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 mb-2">
                          <div class="card card-stats card-primary card-round">
                            <div class="card-body">
                                <div class="numbers text-center">
                                  <h3 class="card-category">Total Geral</h3>
                                  <h4 class="card-title">20</h4>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div id="table" className="col-md-12 row-card-no-pd">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Registros</h4>
                  </div>
                  <div className="card-body">


                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Digite sua busca</label>
                            <input type="text" className="form-control py-5" placeholder="Ex.: Lorem ipsum dolor..."/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Relatório</label>
                            <select className="form-control">
                              <option>Escolha uma opção de relatório</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="button" onClick={this.toggle} className="btn btn-primary btn-lg ml-2">BUSCAR &nbsp;&nbsp;<i className="fa fa-search"></i></button>
                        </div>
                      </div>
                    </form>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <QuickSidebar/>
        <AdvancedFilter/>
      </div>
    );
  }
}
export default Pendentes;