import React from 'react'
import axios from 'axios'
import MainMenu from './components/MainMenu'
import SideBar from './components/SideBar'

import './App.css'

class App extends React.Component {
  constructor() {
    super()

    this.handleRecipient = this.handleRecipient.bind(this)
    this.handleSubject = this.handleSubject.bind(this)
    this.handleSender = this.handleSender.bind(this)
    this.handleMessage = this.handleMessage.bind(this)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      persons: [],
      recipient: '',
      subject: '',
      sender: '',
      message: ''
    }
  }

  componentDidMount() {

    const headers = {
      'Token': '&*IUHK!@#$%&*45()ihjkhiuiuiIUY6JE45H@*&*&*764587yiu5jhkj',
      'Content-Type': 'application/json'
    }

    axios.get('http://teclabs.com.br/html/microservices/users.php', { headers })
    .then(res => {
      const persons = res.data;
      this.setState({ persons })
    })

    document.getElementById('selectUsers').addEventListener('change', function() {
      this.recipient = this.value
    });
  }

  handleRecipient(event) {
    this.setState({recipient: event.target.value})
    console.log(this.state.recipient)
  }

  handleSubject(event) {
    this.setState({subject: event.target.value})
    console.log(this.state.subject)
  }

  handleSender(event) {
    this.setState({sender: event.target.value})
    console.log(this.state.sender)
  }

  handleMessage(event) {
    this.setState({message: event.target.value})
    console.log(this.state.message)
  }

  handleClick() {

    const headers = {
      'Token': '&*IUHK!@#$%&*45()ihjkhiuiuiIUY6JE45H@*&*&*764587yiu5jhkj',
      'Content-Type': 'application/json'
    }

    const data = {
      RECIPIENT:this.state.recipient,
      SUBJECT:this.state.subject,
      SENDER:this.state.sender,
      MESSAGE:this.state.message
    };

    axios.post('http://teclabs.com.br/html/microservices/email.php', data, { headers })
      .then(res => {
        alert(res.data)
    })

    console.log(this.state.recipient)
    console.log(this.state.subject)
    console.log(this.state.sender)
    console.log(this.state.message)
  }

  render() {

    return (
      <div className="App">

        <MainMenu />

        <div className="wrapper">

          <SideBar />

          <div className="main-panel">
            <div className="panel-hedding">

              <div className="row mb-4">
                <div className="col-md-12">
                  <h1>E-Mail Microservice Example</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-title">
                      <div className="card-title-left">
                        <h4 className="card-title-text">This feature illustrates how a React application interacts with a microservice-based backend</h4>
                      </div>
                    </div>
                    <div className="card-body">

                      <div className="row">

                        <div className="col-12 mb-3">
                          <label htmlFor="users">Users</label>
                          <select className="form-control" id="selectUsers" value={this.state.value} onChange={this.handleRecipient}>
                            <option defaultValue="selecione">Selecione um Usuário</option>
                            <optgroup label="Usuários">
                              {
                                this.state.persons.map(person =>
                                  <option key={person.id} value={person.email}>{person.name}</option>
                                )
                              }
                            </optgroup>
                          </select>
                        </div>

                        <div className="col-12 mb-3">
                          <label htmlFor="subject">Subject</label>
                          <input type="text" className="form-control" placeholder="Subject" value={this.state.value} onChange={this.handleSubject} required/>
                        </div>

                        <div className="col-12 mb-3">
                          <label htmlFor="subject">Sender</label>
                          <input type="email" id="subject" className="form-control" placeholder="Your e-mail" value={this.state.value} onChange={this.handleSender} required/>
                        </div>

                        <div className="col-12 mb-3">
                          <label htmlFor="message">Message</label>
                          <textarea id="message" className="form-control" rows="10" value={this.state.value} onChange={this.handleMessage} required></textarea>
                        </div>

                        <div className="col-12 mb-3 text-center">
                          <button className="btn btn-primary pt-1">Enviar <i className="fa fa-envelope-o" onClick={this.handleClick}></i></button>
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
    );
  }
}
export default App;