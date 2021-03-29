import React from 'react';
// import ReactDOM from 'react-dom';

class AdvancedFilter extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return (
    <div className="modal fade" id="filter">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Filtros Avançados</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">

              <div className="col-12">
                <div className="form-group">
                  <label>Solicitação</label>
                  <select className="form-control">
                    <option>Escolha um tipo de solicitação</option>
                  </select>
                </div>
              </div>


              <div className="col-6">
                <div className="form-group">
                  <label>Região</label>
                  <select className="form-control">
                    <option>Escolha uma região</option>
                  </select>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <label>País</label>
                  <select className="form-control">
                    <option>Escolha um país</option>
                  </select>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <label>Transportadora</label>
                  <select className="form-control">
                    <option>Escolha uma Transportadora</option>
                  </select>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <label>Assignação</label>
                  <select className="form-control">
                    <option>Escolha uma Assignação</option>
                  </select>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <label>Equipe</label>
                  <select className="form-control">
                    <option>Escolha uma Equipe</option>
                  </select>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <label>Status</label>
                  <select className="form-control">
                    <option>Escolha um status</option>
                  </select>
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label>Ticket</label>
                  <div className="input-group">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary btn-lg" data-dismiss="modal">Filtrar Resultados</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default AdvancedFilter;