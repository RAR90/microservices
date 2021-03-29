import React from 'react'
// import ReactDOM from 'react-dom'
import MainMenu from '../components/MainMenu'
import SideBar from '../components/SideBar'
import QuickSidebar from '../components/QuickSidebar'
import NewReport from '../components/NewReport'
import DataTable from '../components/DataTable'

import '../App.css'

class Busca extends React.Component {

  constructor() {
    super();
    this.state = {color: "red"};
  }

  toggle() {
    document.getElementById('table').style.opacity = 1
  }

  render() {
    return (
      <div className="App">
        <MainMenu/>
        <SideBar page="busca"/>
        <div className="main-panel">
          <div className="content">
            <div className="container-fluid">
              <div className="page-header">
                <h3 className="py-0 my-0">Busca</h3>
              </div>
              <div className="row row-card-no-pd">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-head-row">
                        <h4 className="card-title">Selecione as opções para efetuar uma busca</h4>
                      </div>
                      <p className="card-category">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error assumenda nihil neque! Repellendus amet provident perferendis.
                      </p>
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

              <div id="table" className="col-md-12 row-card-no-pd" style={{opacity:'0'}}>
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Registros</h4>
                  </div>
                  <div className="card-body">
                    <DataTable/>
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
export default Busca;