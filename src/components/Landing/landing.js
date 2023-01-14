import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./landing.css";

function submitplayer1() {

    document.getElementById("player1").style.display = "none";

    const name1 = document.getElementById("name1")
    const gender1 = document.getElementById("gender1")
    const age1 = document.getElementById("age1")

    var isValidForm1 = document.forms['form1'].checkValidity();
    console.log(isValidForm1)
    if (isValidForm1) {

        sessionStorage.setItem('player1obj', JSON.stringify({ n1: name1.value, g1: gender1.value, a1: age1.value }))
        console.log(JSON.parse(sessionStorage.getItem('player1obj')))
    }
    else {

        console.log("false")
        return false;
    }

}



function submitplayer2() {

    document.getElementById("player2").style.display = "none";

    const name2 = document.getElementById("name2")
    const gender2 = document.getElementById("gender2")
    const age2 = document.getElementById("age2")

    var isValidForm2 = document.forms['form2'].checkValidity();
    console.log(isValidForm2)
    if (isValidForm2) {

        sessionStorage.setItem('player2obj', JSON.stringify({ n2: name2.value, g2: gender2.value, a2: age2.value }))
        console.log(JSON.parse(sessionStorage.getItem('player2obj')))
    }
    else {

        console.log("false")
        return false;
    }
}



function Landing() {

    const navigate = useNavigate();

    const navigateTohome = () => {

        setTimeout(() => {
            navigate('/home');
        }, 100);
    };

    const submit1 = (e) => { e.preventDefault(); submitplayer1(); setOpenPlayer2(true); }
    const submit2 = (e) => {e.preventDefault(); submitplayer2(); navigateTohome(); }

    const [isOpenPlayer1, setOpenPlayer1] = useState(false);
    const [isOpenPlayer2, setOpenPlayer2] = useState(false);

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
                    <form className='ml-16' id="form1" onSubmit={submit1}>
                        <label>
                            <br></br>
                            Name
                            <br></br>
                            <input id="name1" className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{ "height": "4vh" }} type="text" placeholder='Your Name' autoComplete="off" pattern=".{3,11}" required />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            Gender
                            <br></br>
                            <input id="gender1" className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{ "height": "4vh" }} type="gender" placeholder='Enter gender' autoComplete="off" pattern=".{4,6}" required />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            Age
                            <br></br>
                            <input id="age1" className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{ "height": "4vh" }} type="number" placeholder='Enter age' autoComplete="off" max="99" min="8" required />
                        </label>
                        <br></br><br></br>
                        <button className='bg-black text-white rounded-lg w-2/5 h-12 ml-8' type="button"><input className='cursor-pointer' type="submit" value="Submit" /></button>
                        <br></br><br></br>
                    </form>
                </div>)}

            {isOpenPlayer2 && (
                <div id="player2" className='text-xl text-black font-bold border-4 border-white rounded-lg items-center justify-center bg-white'>
                    <h1 className='ml-16 mt-4'> PLAYER 2 DETAILS </h1>
                    <form className='ml-16' id="form2" onSubmit={submit2}>
                        <label>
                            <br></br>
                            Name
                            <br></br>
                            <input id="name2" className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{ "height": "4vh" }} type="text" placeholder='Your Name' name="name" autoComplete="off" pattern=".{3,11}" required />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            Gender
                            <br></br>
                            <input id="gender2" className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{ "height": "4vh" }} type="gender" placeholder='Enter gender' name="name" autoComplete="off" pattern=".{4,6}" required />
                        </label>
                        <br></br>
                        <label>
                            <br></br>
                            Age
                            <br></br>
                            <input id="age2" className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{ "height": "4vh" }} type="number" placeholder='Enter age' name="Number" autoComplete="off" max="99" min="8" required />
                        </label>
                        <br></br><br></br>
                        <button className='bg-black text-white rounded-lg w-2/5 h-12 ml-8' type="submit"><input className='cursor-pointer' type="submit" value="Submit" /></button>
                        <br></br><br></br>
                    </form>
                </div>)}

        </div>

    )
}

export default Landing
