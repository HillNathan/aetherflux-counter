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

  resetApp = () => {
    this.setState({
      lifeTotal : 40,
      spellsThisTurn : 0,
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
        {/* <div className="background-image">
          <img src="./images/Aetherflux2-md.jpg" alt="Aetherflux Reservoir"
              className="the-background"/>
        </div> */}

        <header className="App-header">
          Aetherflux Reservoir
          <br/>
          Control Panel
        </header>
        <div className="container">

          <div className="row">
            <div className="col-1 spacer"></div>  
            <div className="col-10 text-label-1">
              Spells Cast = {this.state.spellsThisTurn}
            </div>
            <div className="col-1 spacer"></div>  
          </div>

          <div className="row">
            <div className="col-1 spacer"></div>
            <div className="col-10 text-label-2">
              Life Total = {this.state.lifeTotal}
            </div>
            <div className="col-1 spacer"></div>  
          </div>
          <div className= "life-support">
            
            <div className="row justify-content-center notation">
              <div className="col-2"></div>
              <div className="col-8">
                Adjust Life Totals
              </div>
              <div className="col-2"></div>
            </div>

            <div className="row justify-content-center">
              <div className="col-2 button-holder">
                <div className="faux-baxton"
                    onClick={() => this.updateLife(5, "lose")}>

                  -5
                </div>
              </div>
              <div className="col-3 button-holder">
                <div className="faux-baxton"
                    onClick={() => this.updateLife(1, "lose")}>
                  -1
                </div>
              </div>
              <div className="col-3 button-holder">
                <div className="faux-baxton"
                    onClick={() => this.updateLife(1, "add")}>
                  +1
                </div>
              </div>
              <div className="col-2 button-holder">
                <div className="faux-baxton" 
                    onClick={() => this.updateLife(5, "add")}>
                  +5
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="vertical-spacer"></div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-5 button-holder">
              <div className="faux-baxton-lg"
                      onClick={() => this.addSpell()}>
                Cast a Spell
              </div>
            </div>
            <div className="col-5 button-holder">
            <div className="faux-baxton-lg"
                      onClick={() => this.deathRay()}>
                Fire Death Ray
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="vertical-spacer"></div>
            </div>
          </div>

          <div className="row justify-content-center">
          <div className="col-8 col-sm-6 button-holder">
              <div className="faux-baxton-thin"
                      onClick={() => this.resetSpellCount()}>
                End Turn
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="vertical-spacer"></div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-8 col-sm-6 button-holder">
              <div className="faux-baxton-thin"
                      onClick={() => this.resetApp()}>
                Reset App
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
