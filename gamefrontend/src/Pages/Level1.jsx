import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import s1 from "../Sound/s1.mp3"
import s2 from "../Sound/s2.mp3"
import s4 from "../Sound/s4.mp3"
import suffle from "../Sound/suffle.mp3"
import King from "../Assets/King.png";

const Level1 = () => {


    const [finalarr,setfinalarr] = React.useState([4,4,4,4])
    const[ result,setresult] = React.useState("To Start the Game scroll down and Click On Start Button")
    const ref = React.useRef([])
    const SoundS1 = new Audio(s1)
    const SoundS2 = new Audio(s2)
    const SoundS4 = new Audio(s4)
    const SoundS5 = new Audio(suffle)

    React.useEffect(()=>{
        SoundS4.play()
    },[])

        const {number,change,finalplayer} = React.useContext(AuthContext)
      
       const navigate = useNavigate()
       console.log(finalplayer)
      
       let sarr= [0,1,2,3]
      
        const suffleCard=()=>{
         SoundS5.play()
        let cIndex = sarr.length
      
        while(cIndex!=0){
      
          let rIndex = Math.floor(Math.random()*cIndex)
          cIndex--
      
          [sarr[cIndex],sarr[rIndex]] = [sarr[rIndex],sarr[cIndex]]
      
        }
         setfinalarr(sarr)
         setresult("Game Starts, You have to find Which one is Thief in remaining two players")
         change([100,60,50,40])
        }
      
         const choose=(i)=>{
            SoundS5.pause()
          if(finalarr[i]==3){
            SoundS2.play()
           ref.current[i].classList.add("winborder");
           change([100,80,50,20])
           setresult("Wazir win, Queen loves Wazir and don't want this King will remain King,So she use her power and orgainse Level2")
          }else{
            SoundS1.play()
            ref.current[i].classList.add("loseborder");
            setresult("Wazir lose, but Queen loves Wazir and don't want this King to be winner,So she use her power and orgainse Level2")
           change([100,20,50,80])
          }
      
          }
          console.log(finalarr)
          console.log(result)
    
    
    
       const gofun=()=>{
        navigate("/level2")
       }
    
     


       let img=[King,
                "https://thumbs.dreamstime.com/z/basic-rgb-224500167.jpg",
                "https://thumbs.dreamstime.com/b/d-render-funny-cartoon-burglar-thief-character-holding-question-mark-symbol-d-funny-cartoon-burglar-thief-character-holding-117212723.jpg",
                "https://thumbs.dreamstime.com/b/d-render-funny-cartoon-burglar-thief-character-holding-question-mark-symbol-d-funny-cartoon-burglar-thief-character-holding-117212723.jpg"
               ,"https://www.dibustock.com/wp-content/uploads/2022/05/Afro-boy-illustration-with-question-mark-symbol.jpg"]


   
    let arr = [
        {
            id:0,
            num:finalarr[0],
            player:finalplayer.player1
        }, {
            id:1,
            num:finalarr[1],
            player:finalplayer.player2

        }, {
            id:2,
            num:finalarr[2],
            player:finalplayer.player3
        }, {
            id:3,
            num:finalarr[3],
            player:finalplayer.player4
        }
    ]

    


    return (
        <div className='bigcont' style={{ overflowX: "hidden"}} >

            <div >
                <div className="navbar" style={{ height: "60px", width: "100%", display: "flex", justifyItems: "center", justifyContent: "center" }}>
                    <h2 style={{ fontSize: "30px",fontWeight:"700" }}>Battle For Throne</h2>
                </div>
                <h2 style={{ textAlign: "center", color: "red", fontSize:"30px", fontWeight:"700" }}> <ul style={{color:"rgb(244,87,73)"}}>Level - 1</ul>  </h2>
                <h2  style={{ textAlign: "end", color: "green" ,fontWeight:"700", marginRight:"15px"}}>Queen : 90 Points</h2>
                <div style={{ display: "flex",justifyContent: "space-between" ,marginRight:"15px" }}>
                    <div></div>
                    <div className='message' style={{width:"45%",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                        {/* <h3 style={{textAlign:"center",width:"90%",margin:"auto"}}></h3> */}
                        <h4 style={{textAlign:"center",fontSize:"23px",fontWeight:"700", marginTop:"20px"}}>{result}</h4>
                    </div>
                    <img width={"120px"} style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} src="https://cdn.pixabay.com/photo/2023/02/16/19/41/princess-7794649_960_720.jfif" alt="" />
                </div>
                <div id="cont" style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", marginTop: "50px" }}>

                    <div className="avatars" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", width: "75%" }}>
                        {arr.map((el,i)=>{
                            return <div key={el.id} onClick={()=>choose(el.id)} style={{cursor:"pointer"}} className='card' >
                            <img width={"160px"} style={{height:"200px", borderRadius:"7px"}} ref={(el)=>{ref.current[i]=el}} src={img[`${el.num}`]} alt="pic" />
                            <div className='user' style={{cursor:"pointer", color:"rgb(234,87,83)", fontSize:"20px",fontWeight:"700"  }} >{el.player}</div>

                        </div>
                        })}

                    </div>

                    <div className="leaderboard" style={{ width: "15%", height: "auto", padding: "20px",color:"white", backgroundColor:"rgb(239, 129, 125)", fontWeight:"700",borderRadius:"5px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                        <span  style={{color:"white", fontSize:"27px"}} >ScoreBoard</span>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                            <span style={{ fontSize: "19px", textDecoration: "bold" }}> <u>Players</u>  </span>
                            <span style={{ fontSize: "19px", textDecoration: "bold" }}> <u>Score</u> </span>

                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px"}}>
                            <span>Raja</span>
                            <span>{number[0]}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px" }}>
                            <span>Wazir</span>
                            <span>{number[1]}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px" }}>
                            <span>Sipahi</span>
                            <span>{number[2]}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px" }}>
                            <span>Chor</span>
                            <span>{number[3]}</span>
                        </div>


                    </div>




                </div>


            </div>

            <div className='cont' style={{  display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", marginTop: "50px" }} >

                <div className="cont2" style={{}}>

                    <button onClick={suffleCard} className='button2'>START</button>
                    <Link to="/level2">
                        <button className="button"><span>Level 2 </span></button>
                    </Link>

                </div>



            </div>



        </div>
    )
}

export default Level1