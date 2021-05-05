import React from 'react'
import Membre from './components/Membre/Membre'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "Texte du state"
    }
  }
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: 'orange'}}>
        <div style={{ display: "flex", flexDirection: "column", width: "20%", backgroundColor: "yellow", alignItems: "center"}}>
          <input style={{ display: "flex", borderWidth: 2, borderColor: 'purple', borderRadius: 5, padding: 10, width: "50%"}} type="text" onChange={this.onchange} value={this.state.value}></input>
          <p style={{ textAlign: "justify"}}>{this.state.value}</p>
          <Membre membre="Nassim"/>
          <Membre membre="Lydia"/>
          <Membre membre="Nabil"/>
          <Membre membre="Mohand"/>
          <Membre membre="Zakia"/>
          <Membre membre="Moussa"/>
          <Membre membre="Abdenour"/>
          <Membre membre="Nordine"/>
          <Membre membre="Sara"/>
          <Membre membre="Fares"/>
        </div>
      </div>
    );
  }

  onchange = (event) => {
    const value = event.target.value
    this.setState({
      value
    })
  }
}

export default App;
