import { useState } from "react";
import React from "react"
import Background from "../Assets/Background.png";
import King from "../Assets/King.png";
import Queen from "../Assets/Queen.png";
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

// interface playerType  {
//     player1: string,
//     player2: string,
//     player3: string,
//     player4: string
// }

const Players = () => {
    const [player, setPlayer] = useState({
        player1: "",
        player2: "",
        player3: "",
        player4: "",
    });

    const navigate = useNavigate()

    const {finalplayer,handle} = React.useContext(AuthContext)

    const handlechange=(e)=>{
       setPlayer({...player,[e.target.name]:e.target.value})
    }

    const handleplayer=(e)=>{
     handle(player)
     navigate("/level1")

    }

    console.log(player)


    return (
        <>
            <div>
                <img className="w-screen h-screen" src={Background} alt="Background" />
                <img className="w-68 rounded-full absolute inset-y-1 inset-x-1" src={King} alt="Background" />
                <img className="w-68 rounded-full absolute inset-y-1 right-1" src={Queen} alt="Background" />
                <div className="absolute text-7xl text-rose-950 font-bold top-32 font-mono">
                    <h1 className="w-screen flex justify-center"><span className="backdrop-blur-sm px-2.5 py-2.5">Player Details</span></h1>
                    {/* <h1>Raja Mantri</h1> */}
                </div>
                <div className="w-screen flex justify-center absolute top-80">
                    <div className="backdrop-blur-md px-5 py-5 grid gap-2.5">
                        <div className="text-2xl">
                            <span className="text-black font-bold">Player 1 : </span>
                            <input className="px-5 py-2.5 rounded-full shadow-2xl" type="text" placeholder="Player 1" name="player1" onChange={handlechange} />
                        </div>
                        <div className="text-2xl">
                            <span className="text-black font-bold">Player 2 : </span>
                            <input className="px-5 py-2.5 rounded-full shadow-2xl" type="text" placeholder="Player 2"  name="player2" onChange={handlechange}/>
                        </div>
                        <div className="text-2xl">
                            <span className="text-black font-bold">Player 3 : </span>
                            <input className="px-5 py-2.5 rounded-full shadow-2xl" type="text" placeholder="Player 3" name="player3" onChange={handlechange} />
                        </div>
                        <div className="text-2xl">
                            <span className="text-black font-bold">Player 4 : </span>
                            <input className="px-5 py-2.5 rounded-full shadow-2xl" type="text" placeholder="Player 4" name="player4" onChange={handlechange}/>
                        </div>
                    </div>
                </div>
                <div className="w-screen flex justify-center absolute text-4xl text-rose-950 font-bold bottom-12 font-mono ">
                   <button className="bg-red-300 px-5 rounded-full animate-bounce hover:text-5xl duration-300"  onClick={handleplayer} >Start Game</button>
                </div>
            </div>
        </>
    )
};

export default Players;