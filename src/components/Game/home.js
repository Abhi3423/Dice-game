import React, { Component } from 'react'

import './RollDice.css'
import Die from './Die.js'
import { CgProfile } from "react-icons/cg"
import {name1value,gender1value,age1value,name2value,gender2value,age2value} from './../Landing/landing'


console.log(name2value,gender2value,age2value)
var diev, player1 = 0, player2 = 0;
var w1 = 0, w2 = 0, l1 = 0, l2 = 0;
var count = 0 , change = 0;

function check(p1, p2) {

  if (p1 >= 20) {

    player1 = player2 = 0
    w1 += 1
    l2 += 1
    window.alert("player1 wins!!")
  }

  if (p2 >= 20) {

    player1 = player2 = 0
    w2 += 1
    l1 += 1
    window.alert("player2 wins!")
  }
}


class RollDice extends Component {

  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  constructor(props) {
    super(props)

    // States
    this.state = {
      die: 'one',
      rolling: false
    }
    this.roll = this.roll.bind(this)
    this.roll1 = this.roll1.bind(this)
    this.player1_total = this.player1_total.bind(this)
    this.player2_total = this.player2_total.bind(this)
  }

  roll() {
    const sid = this.props.sides
    diev = Math.floor(Math.random() * sid.length)

    this.setState({
      die: sid[diev],
      rolling: true

    })

    setTimeout(() => {
      this.setState({ rolling: false })
      if(change == 1){
        document.getElementById("box2").style.borderColor = "green"
        document.getElementById("box1").style.borderColor = "white"
      }
      else{
        document.getElementById("box1").style.borderColor = "green"
        document.getElementById("box2").style.borderColor = "white"
      }
    }, 1000)

  }

  player1_total(values) {

    player1 += values;

    check(player1, player2)

    console.log(player1)
  }



  player2_total(values) {

    player2 += values;

    check(player1, player2)

    console.log(player2)
  }



  roll1() {

    count += 1

    if (count % 2 == 0) {
      document.getElementById("box2").style.borderColor = "green"
      change  = 2
      this.roll();
      this.player2_total(diev + 1);

    }
    else {
      document.getElementById("box1").style.borderColor = "green"
      change = 1
      this.roll();
      this.player1_total(diev + 1);
    }

  }

  render() {


    const handleBtn = this.state.rolling ? 'bg-gray-400 rounded-lg text-white text-2xl w-9/12 h-20 cursor-pointer justify-self-center self-center -mt-24 ml-8' : 'bg-black rounded-lg text-white text-2xl w-9/12 h-20 cursor-pointer justify-self-center self-center -mt-24 ml-8'
    const { die, rolling } = this.state

    return (
      <div className='RollDice grid grid-rows-2'>

        <div className=' grid grid-cols-2 items-start mt-12 h-96 font-sans'>

          <div id="box1" className='grid grid-rows-2 gap-4 items-center border-green-700 border-4'>

            <div className='grid grid-cols-2 gap-4 justify-self-center mt-8 text-xl'>
              <div className=''>
                <CgProfile size={90}></CgProfile>
              </div>
              <div className='grid grid-rows-3 font-semibold'>
                <span>{name1value}</span>
                <span>{gender1value}</span>
                <span>{age1value}</span>
              </div>
            </div>

            <div className='grid grid-rows-2 justify-self-center text-xl'>
              <div className='flex flex-row'>
                <h1 className='font-bold'>POINTS :</h1>
                <span className='font-semibold ml-3'>{player1}</span>
              </div>
              <div className='flex flex-row'>
                <h1 className='font-bold'>TOTAL WINS: </h1>
                <span className='text-lg font-semibold ml-3 whitespace-nowrap'>{w1}</span>
              </div>
            </div>
          </div>

          <div id="box2" className='grid grid-rows-2 gap-4 items-center border-white border-4'>

            <div className='grid grid-cols-2 gap-4 justify-self-center mt-8 text-xl'>
              <div className=''>
                <CgProfile size={90}></CgProfile>
              </div>
              <div className='grid grid-rows-3 font-semibold'>
                <span>{name2value}</span>
                <span>{gender2value}</span>
                <span>{age2value}</span>
              </div>
            </div>

            <div className='grid grid-rows-2 justify-self-center text-xl'>
              <div className='flex flex-row'>
                <h1 className='font-bold'>POINTS :</h1>
                <span className='font-semibold ml-3'>{player2}</span>
              </div>
              <div className='flex flex-row'>
                <h1 className='font-bold'>TOTAL WINS: </h1>
                <span className='text-lg font-semibold ml-3 whitespace-nowrap'>{w2}</span>
              </div>
            </div>
          </div>

        </div>

        <div className='RollDice-container grid grid-rows-2 -mt-28'>
          <Die face={die} rolling={rolling} />
          <button className={handleBtn}
            disabled={this.state.rolling}
            onClick={this.roll1}>
            {this.state.rolling ? 'Rolling' : 'Roll IT!'}
          </button>
        </div>
        

      </div>
    )
  }
}

export default RollDice
