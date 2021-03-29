import React from 'react'
// import ReactDOM from 'react-dom'
import MainMenu from './components/MainMenu'
import SideBar from './components/SideBar'
import QuickSidebar from './components/QuickSidebar'
import NewReport from './components/NewReport'

import './App.css'

class Sobre extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return (
      <div className="App">
        <MainMenu/>
        <SideBar/>
        <div className="main-panel">
          <div className="content">
            <div className="container-fluid">
              <div className="page-header">
                <h3 className="py-0 my-0">Sobre</h3>
                <div className="btn-group btn-group-page-header ml-auto">
                  <button type="button" className="btn btn-default btn-border btn-round btn-lg" data-toggle="modal" data-target="#new-report">
                    NOVO RELATÓRIO &nbsp;&nbsp;
                    <i className="fa fa-plus"></i>
                  </button>
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
export default Sobre;