import React, { Component, useNavigate } from 'react'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

import './RollDice.css'
import Die from './Die.js'
import { CgProfile } from "react-icons/cg"
import { name1value, gender1value, age1value, name2value, gender2value, age2value } from './../Landing/landing'


console.log(name2value, gender2value, age2value)
var diev, player1 = 0, player2 = 0;
var w1 = 0, w2 = 0;
var count = 0, change = 0;
var won = ""

function check(p1, p2) {

  if (p1 >= 20) {

    player1 = player2 = 0
    w1 += 1
    won = name1value
    document.getElementById("main1").style.filter = "opacity(0.4)"
    document.getElementById("main1").style.display = "none"
    document.getElementById("main2").style.filter = "opacity(0.4)"
    document.getElementById("main2").style.display = "none"
    document.getElementById("winpage").style.display = "grid"
    window.alert("player1 wins!!")
  }

  if (p2 >= 20) {

    player1 = player2 = 0
    w2 += 1
    won = name2value
    document.getElementById("main1").style.filter = "opacity(0.4)"
    document.getElementById("main1").style.display = "none"
    document.getElementById("main2").style.filter = "opacity(0.4)"
    document.getElementById("main2").style.display = "none"
    document.getElementById("winpage").style.display = "grid"
    window.alert("player2 wins!")
  }
}



function again() {

  document.getElementById("main1").style.display = "grid"
  document.getElementById("main2").style.display = "grid"
  document.getElementById("winpage").style.display = "none"
  console.log("chutiya")

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
      if (change == 1) {
        document.getElementById("box2").style.borderColor = "green"
        document.getElementById("box1").style.borderColor = "white"
        document.getElementById("profile2").style.backgroundColor = "green"
        document.getElementById("profile1").style.backgroundColor = "red"
      }
      else {
        document.getElementById("box1").style.borderColor = "green"
        document.getElementById("box2").style.borderColor = "white"
        document.getElementById("profile1").style.backgroundColor = "green"
        document.getElementById("profile2").style.backgroundColor = "red"
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
      document.getElementById("profile2").style.backgroundColor = "green"
      change = 2
      this.roll();
      this.player2_total(diev + 1);

    }
    else {
      document.getElementById("box1").style.borderColor = "green"
      document.getElementById("profile1").style.backgroundColor = "green"
      change = 1
      this.roll();
      this.player1_total(diev + 1);
    }

  }

  render() {


    const handleBtn = this.state.rolling ? 'bg-gray-400 rounded-lg text-white text-2xl w-9/12 h-20 cursor-pointer justify-self-center self-center -mt-24 ml-4 cursor-none' : 'bg-black rounded-lg text-white text-2xl w-9/12 h-20 cursor-pointer justify-self-center self-center -mt-24 ml-4'
    const { die, rolling } = this.state


    return (
      <div className=''>
        <div className='RollDice grid grid-rows-2 lg:hidden' id="main1">

          <div className=' grid grid-cols-2 items-start mt-12 h-96 font-sans'>

            <div id="box1" className='grid grid-rows-3 gap-4 items-center border-green-700 border-4'>
              <h1 className='text-black font-bold text-4xl justify-self-center'>PLAYER 1</h1>
              <div className='grid grid-cols-2 gap-4 justify-self-center text-xl'>
                <div className='border-black border-2 bg-green-600' id="profile1">
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

            <div id="box2" className='grid grid-rows-3 gap-4 items-center border-white border-4'>
              <h1 className='text-black font-bold text-4xl justify-self-center'>PLAYER 2</h1>
              <div className='grid grid-cols-2 gap-4 justify-self-center text-xl'>
                <div className='border-black border-2 bg-red-500' id="profile2">
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

          <div className='RollDice-container grid grid-rows-2 -mt-24'>
            <Die face={die} rolling={rolling} />
            <button className={handleBtn}
              disabled={this.state.rolling}
              onClick={this.roll1}>
              {this.state.rolling ? 'Rolling' : 'Roll IT!'}
            </button>
          </div>


        </div>

        <div className='hidden RollDice lg:grid grid-cols-3 gap-10 justify-items-stretch ' id="main2">
          <div className='grid grid-rows-2 items-center border-black border-8 w-4/5'>

            <div className='grid grid-rows-3 gap-4 justify-self-center mt-8 text-xl'>
              <h1 className='text-black font-bold text-4xl'>PLAYER 1</h1>
              <div id="profile1" className='border-black border-2 bg-green-700 -mt-12'>
                <CgProfile size={140} className="ml-2"></CgProfile>
              </div>
              <div className='grid grid-rows-3 font-semibold'>
                <span>NAME: {name1value}</span>
                <span>GENDER: {gender1value}</span>
                <span>AGE: {age1value}</span>
              </div>
            </div>

            <div className='grid grid-cols-2 justify-self-center text-lg gap-6 -mt-28'>
              <div className='flex flex-col'>
                <h1 className='font-bold self-center'>POINTS</h1>
                <span className='font-semibold ml-3 self-center text-7xl'>{player1}</span>
              </div>
              <div className='flex flex-col self-center'>
                <h1 className='font-bold text-lg self-center'>TOTAL WINS</h1>
                <span className='text-7xl font-semibold ml-3 whitespace-nowrap self-center'>{w1}</span>
              </div>
            </div>
          </div>

          <div className='RollDice-container grid grid-rows-2 mt-28 justify-self-center'>
            <Die face={die} rolling={rolling} />
            <button className={handleBtn}
              disabled={this.state.rolling}
              onClick={this.roll1}>
              {this.state.rolling ? 'Rolling' : 'Roll IT!'}
            </button>
          </div>


          <div className='grid grid-rows-2 items-center border-black border-8 w-4/5 justify-self-end'>

            <div className='grid grid-rows-3 gap-4 justify-self-center mt-8 text-xl'>
              <h1 className='text-black font-bold text-4xl'>PLAYER 2</h1>
              <div id="profile2" className='border-black border-2 bg-red-500 -mt-12'>
                <CgProfile size={140} className="ml-2"></CgProfile>
              </div>
              <div className='grid grid-rows-3 font-semibold'>
                <span>NAME: {name2value}</span>
                <span>GENDER: {gender2value}</span>
                <span>AGE: {age2value}</span>
              </div>
            </div>

            <div className='grid grid-cols-2 justify-self-center text-xl gap-8 -mt-28'>
              <div className='flex flex-col'>
                <h1 className='font-bold self-center'>POINTS</h1>
                <span className='font-semibold ml-3 self-center text-7xl'>{player2}</span>
              </div>
              <div className='flex flex-col self-center'>
                <h1 className='font-bold text-xl self-center'>TOTAL WINS</h1>
                <span className='text-7xl font-semibold ml-3 whitespace-nowrap self-center'>{w2}</span>
              </div>
            </div>
          </div>

        </div>

        <div className='hidden lg:hidden grid-rows-2 inset-2/4 items-center justify-center RollDice' id="winpage">
          <Confetti
            width={1024}
            height={1024}
          />
          <div className='w-full h-32 self-end flex flex-row gap-10'>
            <CgProfile size={120}></CgProfile>
            <span className='text-3xl self-center'>{won} Wins !!</span>
          </div>
          <div className='grid grid-rows-2 sm:grid-cols-2 gap-11 self-start mt-8'>
            <button className='bg-blue-500 hover:bg-green-600 text-white rounded-md w-40 h-12'>PLAY AGAIN!!</button>
            <button className='bg-blue-500 hover:bg-green-600 text-white rounded-md'>NEW GAME</button>
          </div>
        
        </div>

      </div>
    )
  }
}

export default RollDice
