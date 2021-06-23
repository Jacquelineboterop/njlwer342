import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(){
    super()
    this.state={html : [], text : ""}
   }
   handleSubmit = (event) => {
  //console.log(event)
  event.preventDefault()
  let html = this.state.html
  html.push(this.state.text)
  //console.log(html)

  this.setState({html,text:""})
   }
   handleChange = (event) => {
   this.setState({text: event.target.value})
     }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {this.state.html.map(( element) => <li>{element}</li>)}
          </ul>
           <form onSubmit={this.handleSubmit}>
             <input type="text"  id="new-task" value={this.state.text} onChange={this.handleChange} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
