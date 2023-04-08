import { useState } from "react";
import Background from "../Assets/Background.png";
import King from "../Assets/King.png";
import Queen from "../Assets/Queen.png";

interface playerType  {
    player1: string,
    player2: string,
    player3: string,
    player4: string
}

const Players = () => {
    const [player, setPlayer] = useState<playerType>({
        player1: "",
        player2: "",
        player3: "",
        player4: "",
    });

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
                            <input className="px-5 py-2.5 rounded-full shadow-2xl" type="text" placeholder="Player 1" onChange={(e) => setPlayer({...player, player1: e.target.value})} />
                        </div>
                        <div className="text-2xl">
                            <span className="text-black font-bold">Player 2 : </span>
                            <input className="px-5 py-2.5 rounded-full shadow-2xl" type="text" placeholder="Player 2" onChange={(e) => setPlayer({...player, player2: e.target.value})}/>
                        </div>
                        <div className="text-2xl">
                            <span className="text-black font-bold">Player 3 : </span>
                            <input className="px-5 py-2.5 rounded-full shadow-2xl" type="text" placeholder="Player 3" onChange={(e) => setPlayer({...player, player3: e.target.value})} />
                        </div>
                        <div className="text-2xl">
                            <span className="text-black font-bold">Player 4 : </span>
                            <input className="px-5 py-2.5 rounded-full shadow-2xl" type="text" placeholder="Player 4" onChange={(e) => setPlayer({...player, player4: e.target.value})}/>
                        </div>
                    </div>
                </div>
                <div className="w-screen flex justify-center absolute text-4xl text-rose-950 font-bold bottom-12 font-mono ">
                    <a href="/level1"><button className="bg-red-300 px-5 rounded-full animate-bounce hover:text-5xl duration-300">Start Game</button></a>
                </div>
            </div>
        </>
    )
};

export default Players;