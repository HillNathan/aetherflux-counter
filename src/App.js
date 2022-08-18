import React, { Component } from 'react'

import InfoHeader from './components/InfoHeader'
import FauxBatons from './components/FauxBatons'
import FunctionButton from './components/FunctionButton'
import Banner from './components/Banner'

import './App.css';

class App extends Component {

  state = {
    lifeTotal : 40,
    spellsThisTurn : 0,
  }

  adjustSpellCount = async (number, change) => {
    var spells = this.state.spellsThisTurn
    if(change === "add") spells = spells + number
    else spells = spells - number
    this.setState({
      spellsThisTurn: spells
    })
  }

  addSpell = () => {
    this.adjustSpellCount(1 ,"add")
    .then(response => {
      var spells = this.state.spellsThisTurn
      this.updateLife(spells, "add")  
    })
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
    else {
      // pop-up stating you must have at least 50 life to activate the death ray
      alert("You must have at least 50 life to activate the death ray.")
    }
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          Aetherflux Reservoir
          <br/>
          Control Panel
        </header>
        <div className="container">

          <InfoHeader
            info={this.state.spellsThisTurn}
            label={"Spells Cast"} />

          <InfoHeader
            info={this.state.lifeTotal}
            label={"Life Total"} />

          <div className= "life-support">     
            <Banner 
              bannerInfo="Adjust Life Totals" />

            <div className="row justify-content-center">
              <FauxBatons
                updateLife={this.updateLife}
                colWidth={2}
                adjustment={5}
                operation={"lose"} 
                fauxLabel={"-5"} />
              <FauxBatons
                updateLife={this.updateLife}
                colWidth={3}
                adjustment={1}
                operation={"lose"} 
                fauxLabel={"-1"} />
              <FauxBatons
                updateLife={this.updateLife}
                colWidth={3}
                adjustment={1}
                operation={"add"} 
                fauxLabel={"+1"} />                
              <FauxBatons
                updateLife={this.updateLife}
                colWidth={2}
                adjustment={5}
                operation={"add"} 
                fauxLabel={"+5"} />
            </div>
          </div>

          <div className= "life-support">     
            <Banner 
              bannerInfo="Adjust Spell Count" />

            <div className="row justify-content-center">
              <div className="col-2"></div>
              <FauxBatons
                updateLife={this.adjustSpellCount}
                colWidth={3}
                adjustment={1}
                operation={"lose"} 
                fauxLabel={"-1"} />
              <FauxBatons
                updateLife={this.adjustSpellCount}
                colWidth={3}
                adjustment={1}
                operation={"add"} 
                fauxLabel={"+1"} />
              <div className="col-2"></div>
            </div>
          </div>

          <div className="row justify-content-center">
            <FunctionButton
              myStyle="lg"
              label="Cast a Spell"
              doFunction={this.addSpell} />
            <FunctionButton                 
              myStyle="lg"
              label="Fire Death Ray"
              doFunction={this.deathRay} />
          </div>

          <div className="row justify-content-center">
          <FunctionButton                 
              myStyle="thin"
              label="End Turn"
              doFunction={this.resetSpellCount} />
          <FunctionButton                 
              myStyle="thin"
              label="Reset App"
              doFunction={this.resetApp} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
