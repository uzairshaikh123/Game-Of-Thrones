import Background from "../Assets/Background.png";
import King from "../Assets/King.png";
import Queen from "../Assets/Queen.png";

const Homepage = () => {
    return (
        <>
            <div>
                <img className="w-screen h-screen" src={Background} alt="Background" />
                <img className="w-68 rounded-full absolute inset-y-1 inset-x-1" src={King} alt="Background" />
                <img className="w-68 rounded-full absolute inset-y-1 right-1" src={Queen} alt="Background" />
                <div className="absolute text-7xl text-rose-950 font-bold top-40 inset-x-1/3 font-mono backdrop-blur-sm px-2.5 py-2.5">
                    <h1 className="drop-shadow-[0_200px_100px_100px_rgba(80,4,21,255)]">Chor Sipayi Raja Mantri</h1>
                    {/* <h1>Raja Mantri</h1> */}
                </div>
                <div className="w-screen flex justify-center absolute text-5xl text-rose-950 font-bold bottom-16 font-mono">
                    <a href="/players"><button className="bg-red-300 px-5 rounded-full animate-bounce hover:text-6xl duration-300">PLAY</button></a>
                </div>
            </div>
        </>
    )
};

export default Homepage;