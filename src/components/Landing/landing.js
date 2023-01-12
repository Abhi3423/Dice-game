import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./landing.css";

export var name1value , gender1value ,age1value, name2value, gender2value, age2value = ""

function submitplayer1()
{
    document.getElementById("player1").style.display = "none";
    const form1 = document.getElementById("form1")
    const name1 = document.getElementById("name1")
    const gender1 = document.getElementById("gender1")
    const age1 = document.getElementById("age1")

    form1.addEventListener('submit', function(e){
        e.preventDefault();

        name1value = name1.value;
        gender1value = gender1.value;
        age1value =  age1.value;

        sessionStorage.setItem('player1obj',JSON.stringify({n1: name1value, g1: gender1value, a1: age1value}))
    })

    console.log(JSON.parse(sessionStorage.getItem('player1obj')))

}



function submitplayer2()
{
    document.getElementById("player1").style.display = "none";
    const form2 = document.getElementById("form2")
    const name2 = document.getElementById("name2")
    const gender2 = document.getElementById("gender2")
    const age2 = document.getElementById("age2")

    form2.addEventListener('submit', function(e2) {
        e2.preventDefault();

        name2value = name2.value;
        gender2value = gender2.value;
        age2value =  age2.value;

        sessionStorage.setItem('player2obj',JSON.stringify({n2: name2value, g2: gender2value, a2: age2value}))
    })

    console.log(JSON.parse(sessionStorage.getItem('player2obj')))

}



function Landing() {

    const navigate = useNavigate();

    const navigateTohome = () => {

       setTimeout(() => {
        navigate('/home');
       }, 100);
    };

    const [isOpenPlayer1, setOpenPlayer1] = useState(false);
    const [isOpenPlayer2, setOpenPlayer2] = useState(false);
    // let savePlayer1 = () => {
    //     setOpenPlayer2(true)
    // }


    function set() {

        document.getElementById("play").style.display = "none";
    }

    return (
        <div className='flex items-center justify-center' style={{ "height": "100vh" }}>

            <div>
                <button id="play" onClick={() => { set(); setOpenPlayer1(true); }} className=' block text-white bg-black rounded-lg w-32 h-20'>PLAY NOW!!!</button>
            </div>

            {isOpenPlayer1 && (
                <div id="player1" className='text-xl text-black font-bold border-4 border-white rounded-lg items-center justify-center bg-white'>
                    <h1 className='ml-16 mt-4'> PLAYER 1 DETAILS </h1>
                    <form className='ml-16' id="form1">
                        <label>
                            <br></br>
                            Full Name
                            <br></br>
                            <input id="name1" className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{ "height": "4vh" }} type="text" placeholder='Your Name' name="name" autoComplete="off" required />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            Gender
                            <br></br>
                            <input id="gender1" className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{ "height": "4vh" }} type="gender" placeholder='Enter gender' name="name" autoComplete="off" required />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            Age
                            <br></br>
                            <input id="age1" className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{ "height": "4vh" }} type="number" placeholder='Enter age' name="Number" autoComplete="off" required />
                        </label>
                        <br></br><br></br>
                        <button className='bg-black text-white rounded-lg w-2/5 h-12 ml-8' onClick={() => { submitplayer1(); setOpenPlayer2(true); }}><input type="submit" value="Submit" /></button>
                        <br></br><br></br>
                    </form>
                </div>)}

            {isOpenPlayer2 && (
                <div id="player2" className='text-xl text-black font-bold border-4 border-white rounded-lg items-center justify-center bg-white'>
                    <h1 className='ml-16 mt-4'> PLAYER 2 DETAILS </h1>
                    <form className='ml-16' id="form2">
                        <label>
                            <br></br>
                            Full Name
                            <br></br>
                            <input id="name2" className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{ "height": "4vh" }} type="text" placeholder='Your Name' name="name" autoComplete="off" required />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            Gender
                            <br></br>
                            <input id="gender2" className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{ "height": "4vh" }} type="gender" placeholder='Enter gender' name="name" autoComplete="off" required />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            Age
                            <br></br>
                            <input id="age2" className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{ "height": "4vh" }} type="number" placeholder='Enter age' name="Number" autoComplete="off" required />
                        </label>
                        <br></br><br></br>
                        <button className='bg-black text-white rounded-lg w-2/5 h-12 ml-8' onClick={() => { submitplayer2(); navigateTohome();}}><input type="submit" value="Submit" /></button>
                        <br></br><br></br>
                    </form>
                </div>)}

        </div>

    )
}

export default Landing