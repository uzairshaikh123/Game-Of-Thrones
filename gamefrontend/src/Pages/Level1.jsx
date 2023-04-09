import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Level1 = () => {


    const [finalarr,setfinalarr] = React.useState([4,4,4,4])
    const[ result,setresult] = React.useState("")
 

        const {number,change,finalplayer} = React.useContext(AuthContext)
      
       const navigate = useNavigate()
       console.log(finalplayer)
      
       let sarr= [0,1,2,3]
      
        const suffle=()=>{
      
        let cIndex = sarr.length
      
        while(cIndex!=0){
      
          let rIndex = Math.floor(Math.random()*cIndex)
          cIndex--
      
          [sarr[cIndex],sarr[rIndex]] = [sarr[rIndex],sarr[cIndex]]
      
        }
         setfinalarr(sarr)
         setresult("Game Starts, You have to find Which one is Thief in remaining two options")
         change([100,60,50,40])
        }
      
          const choose=(i)=>{
           
          if(finalarr[i]==3){
           change([100,80,50,20])
           setresult("Vazir win, but Queen loves Vazir and want divorce to King and dont want this King will remain King,So she use her power and orgainse Level2")
          }else{
            setresult("Vazir lose, but Queen loves Vazir and want divorce to King and dont want this King will remain King,So she use her power and orgainse Level2")
           change([100,20,50,80])
          }
      
          }
          console.log(finalarr)
          console.log(result)
    
    
    
       const gofun=()=>{
        navigate("/level2")
       }
    
     
       let img=["http://localhost:3000/static/media/King.05fb62231c55d84459e3.png",
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
        <div className='bigcont' style={{ overflowX: "hidden" }}>

            <div >
                <div className="navbar" style={{ height: "50px", width: "100%", display: "flex", justifyItems: "center", justifyContent: "center" }}>
                    <h2 style={{ fontSize: "25px" }}>Raja mantri chor sipahi</h2>
                </div>
                <h2 style={{ textAlign: "center", color: "red" }}>Level 1</h2>
                <h2  style={{ textAlign: "end", color: "green" ,marginRight:"15px"}}>Queen : 90 Points</h2>
                <div style={{ display: "flex",justifyContent: "end" ,marginRight:"15px" }}>
                    <img width={"120px"} src="https://cdn.pixabay.com/photo/2023/02/16/19/41/princess-7794649_960_720.jfif" alt="" />
                </div>
                <div id="cont" style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", marginTop: "50px" }}>

                    <div className="avatars" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", width: "75%" }}>
                        {arr.map((el)=>{
                            return <div key={el.id} className='card' >
                            <img width={"160px"} style={{height:"200px"}} src={img[`${el.num}`]} alt="pic" />
                            <div className='user' onClick={()=>choose(el.id)} style={{cursor:"pointer"}} >{el.player}</div>

                        </div>
                        })}

                    </div>

                    <div className="leaderboard" style={{ width: "15%", height: "auto", padding: "20px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }}>
                        <span>LeaderBoard</span>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                            <span style={{ fontSize: "20px", textDecoration: "bold" }}> <u>Players</u>  </span>
                            <span style={{ fontSize: "20px", textDecoration: "bold" }}> <u>Score</u> </span>

                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px"}}>
                            <span>Raja</span>
                            <span>{number[0]}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px" }}>
                            <span>Mantri</span>
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

            <div className='cont' style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", marginTop: "50px" }} >

                <div className="cont2" style={{}}>

                    <button onClick={suffle} className='button2'>Start</button>
                    <Link to="/level2">
                        <button className="button"><span>Level 2 </span></button>
                    </Link>

                </div>



            </div>



        </div>
    )
}

export default Level1