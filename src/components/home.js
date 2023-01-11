import React, { Component } from 'react'

import './RollDice.css'
import Die from './Die.js'

var die1v, die2v, player1 = 0, player2 = 0;

class RollDice extends Component {

  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  constructor(props) {
    super(props)

    // States
    this.state = {
      die1: 'one',
      die2: 'one',
      rolling: false
    }
    this.roll = this.roll.bind(this)
  }

  roll() {
    const sid = this.props.sides
    die1v = Math.floor(Math.random() * sid.length)
    die2v = Math.floor(Math.random() * sid.length)
    this.setState({

      // Changing state upon click
      die1: sid[die1v],
      die2: sid[die2v],
      rolling: true

    })

    // var ok = [0];


    function player1_total(values) {

      player1 += values;
      // ok.push(values)


      console.log(player1)
      // Save data to sessionStorage
      // localStorage.setItem("key", JSON.stringify(ok));

      // var storedArray = JSON.parse(localStorage.getItem("key"));

      // console.log(ok)

      // // for (var i = 0; i < storedArray.length; i++) {
      // //   alert(storedArray[i]);
      // // }
      // // Get saved data from sessionStorage
      // let data = localStorage.getItem("key");

      // console.log(data)

      // // Remove saved data from sessionStorage
      // localStorage.removeItem("key");

      // // Remove all saved data from sessionStorage
      // localStorage.clear();
    }

    function player2_total(values){
          
      player2  += values;

      console.log(player2)
    }

    function check(p1 , p2){
      
      if(p1 >= 20){

        player1 = player2 =  0
        console.log("player1 wins!!")
      }

      if(p2 >= 20){

        player1 = player2 = 0
        console.log("player2 wins!!")
      }
    }

    player1_total(die1v + 1)
    player2_total(die2v + 1)
    check(player1,player2)

    // console.log(die1v + 1)
    setTimeout(() => {

      // Set rolling to false again when time over
      this.setState({ rolling: false })
    }, 1000)
  }

  render() {


    const handleBtn = this.state.rolling ? 'RollDice-rolling' : ''
    const { die1, die2, rolling } = this.state



    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Die face={die1} rolling={rolling} />
          <Die face={die2} rolling={rolling} />
        </div>
        <button className={handleBtn}
          disabled={this.state.rolling}
          onClick={this.roll}>
          {this.state.rolling ? 'Rolling' : 'Roll Dice!'}
        </button>
      </div>
    )
  }
}

export default RollDice
