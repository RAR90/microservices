import React from 'react';
// import ReactDOM from 'react-dom';

class NewReport extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return (
    <div className="modal fade" id="new-report">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Gerar relatório</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">

              <div className="col-12">
                <div className="form-group">
                  <label>Relatório</label>
                  <select className="form-control">
                    <option>Escolha uma opção de relatório</option>
                  </select>
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label>Transportadora</label>
                  <select className="form-control">
                    <option>Escolha uma Transportadora</option>
                  </select>
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label>Equipe</label>
                  <select className="form-control">
                    <option>Escolha uma equipe</option>
                  </select>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <label>Data Inicial</label>
                  <div className="input-group">
                    <input type="date" className="form-control" id="datepicker" name="datepicker" />
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <label>Data Final</label>
                  <div className="input-group">
                    <input type="date" className="form-control" id="datepicker" name="datepicker" />
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary btn-lg">Gerar Relatório <i className="fa fa-file-pdf-o"></i></button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default NewReport;