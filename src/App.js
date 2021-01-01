import React, { Component } from 'react'
import './App.css';

class App extends Component {

  state = {
    lifeTotal : 40,
    spellsThisTurn : 0,
  }

  addSpell = () => {
    var spells = this.state.spellsThisTurn
    spells = spells + 1
    this.setState({
      spellsThisTurn: spells
    })
    this.updateLife(spells, "add")
  }

  updateLife = (number, change) => {
    // change should be only "add" to increase the life total, or something else to decrease the life total
    var temp = this.state.lifeTotal
    if(change === "add") temp = temp + number
    else temp = temp - number
    this.setState({
      lifeTotal : temp
    })
  }

  resetSpellCount = () => {
    this.setState({
      spellsThisTurn: 0
    })

  }

  deathRay = () => {
    // Grand Moff Tarkin would be proud of what we have built here....
    if(this.state.lifeTotal > 50) {
      var newLife = this.state.lifeTotal
      newLife = newLife - 50
      this.setState({
        lifeTotal: newLife
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Aetherflux Reservoir Counter
        </header>
        <div className="container">

          {/* HEADER ROW */}
          <div className="row">
            <div className="col-6">
              SPELLS CAST
            </div>
            <div className="col-6">
              LIFE TOTAL
            </div>
          </div>

          {/* Data Row */}
          <div className="row">
            <div className="col-6">
              {this.state.spellsThisTurn}
            </div>
            <div className="col-6">
              {this.state.lifeTotal}
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <button className="btn btn-danger"
                      onClick={() => this.updateLife(5, "lose")}>
                -5
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-danger"
                      onClick={() => this.updateLife(1, "lose")}>

                -1
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-danger"
                      onClick={() => this.updateLife(1, "add")}>

                +1
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-danger"
                      onClick={() => this.updateLife(5, "add")}>

                +5
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <button className="btn btn-dark"
                      onClick={() => this.addSpell()}>
                CAST A SPELL
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-warning"
                      onClick={() => this.deathRay()}>
                FIRE DEATH RAY
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <button className="btn btn-primary"
                      onClick={() => this.resetSpellCount()}>
                END TURN
              </button>
            </div>
          </div>




        </div>
      </div>
    );
  }
}

export default App;
