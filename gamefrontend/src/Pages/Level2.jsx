import React from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import s1 from "../Sound/s1.mp3"
import s2 from "../Sound/s2.mp3"
import s3 from "../Sound/level2.wav"
import King from "../Assets/King.png";


const Level2 = () => {

  const [ring,setring] = React.useState (Math.floor(Math.random()*4)+2) 
  const ref1 = React.useRef(null)
  const ref2 = React.useRef(null)
  const[ result,setresult] = React.useState("As per Queen commond Wazir got first chance to play. Queen has rings somewhere between 3-5 and she want exact 7 rings guess and choose the correct option which will make number of rings equal to 7 ")
  const SoundS1 = new Audio(s1)
  const SoundS2 = new Audio(s2)
  const SoundS3 = new Audio(s3)

  const navigate = useNavigate()
    const {number,change} = React.useContext(AuthContext)

    React.useEffect(()=>{
      SoundS3.play()
    },[])
 
  let varr = [3,4,5]
    
 
    const select1=(i)=>{
     if(varr[i]+ring==7){
        SoundS2.play()
        ref1.current.classList.add("winborder")
         change([number[0],number[1]+90,number[2],number[3]])
        setresult("Wazir Win this Game , Now Wazir will become new King And Queen will get divorce to previous King and will marry to New King")
     }else{
       SoundS1.play()
      ref1.current.classList.add("loseborder")
       setresult("Total rings is not equal to 7 , Wazir lose this Game Now turn goes to next player ")
     }
   
     setring(Math.floor(Math.random()*4)+2)
    }
    
      const gotowinnerpag=()=>{
        setTimeout(()=>navigate("/winner"), 3000)
      }


    const select2=(i)=>{
      
     if(varr[i]+ring==7){
      SoundS2.play()
      ref2.current.classList.add("winborder")
      change([number[0],number[1],number[2],number[3]+90])
        setresult("Chor Win this Game , Now Chor will become new King And Queen will get divorce to previous King ")
        gotowinnerpag()
     }else{
      SoundS1.play()
      ref2.current.classList.remove("winborder")
      ref2.current.classList.add("loseborder")
       setresult("Chor also lose this Game , Now Previous King will ramain King and getting marry to new Queen")
       gotowinnerpag()
     }
   
     setring(Math.floor(Math.random()*4)+2)
    }
    
  
    console.log(result)


  return (
    <div style={{overflowX:"hidden", backgroundColor: "rgb(207, 204, 204)"}}>
     <div className="navbar" style={{ height: "60px", width: "100%", display: "flex", justifyItems: "center", justifyContent: "center" }}>
                    <h2 style={{ fontSize: "30px",fontWeight:"700" }}>Battle For Throne</h2>
     </div>

  <div className="cont-level-2" style={{display:"flex",justifyContent:"space-around",marginTop:"20px",height:"auto"}}>
  <div  style={{height:"auto"}}>
    <img width={"150px"} style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",height:"180px"}} src="https://cdn.pixabay.com/photo/2023/02/16/19/41/princess-7794649_960_720.jfif" alt="" />
  </div>

  <div className='message' style={{width:"45%",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
  <h1 style={{textAlign:"center",width:"90%",margin:"auto",fontSize:"23px",fontWeight:"600", marginTop:"20px"}}>{result}</h1>

  </div>
  <div  style={{height:"auto"}}>
    <img width={"150px"} style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",height:"180px"}} src={King} alt="" />

  </div>
</div>

<div className="second-cont" style={{display:"flex",justifyContent:"space-evenly",marginTop:"60px",flexWrap:"wrap"}}>
  <div  style={{height:"auto"}}>
    <img ref={ref1}  style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",height:"180px"}}   width={"150px"} src="https://thumbs.dreamstime.com/z/basic-rgb-224500167.jpg" alt="" />

   

     {
      varr.map((el,i)=>{
        return <div key={i} className='numbers' onClick={()=>select1(i)} >{el}</div>
      })
     }

  </div>
  <div  style={{height:"auto"}} >
  <img  ref={ref2} style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",height:"180px"}}  width={"150px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUalxyL8HmLn7D2e6WDwVteUSi3cXOPtZOw&usqp=CAU" alt="" />


     {
      varr.map((el,i)=>{

        return <div key={i} className='numbers2' style={{cursor:"pointer"}} onClick={()=>select2(i)} >{el}</div>

  

      })
     }

  </div>
  <div>
  <div className="leaderboard" style={{width: "150%", height: "auto", padding: "20px",color:"white", backgroundColor:"rgb(239, 129, 125)", fontWeight:"700",borderRadius:"5px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                        <span style={{color:"white", fontSize:"27px"}}  >ScoreBoard</span>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                            <span style={{ fontSize: "20px", textDecoration: "bold" }}> <u>Players</u>  </span>
                            <span style={{ fontSize: "20px", textDecoration: "bold" }}> <u>Score</u> </span>

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
                            <span>sipahi</span>
                            <span>{number[2]}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px" }}>
                            <span>Chor</span>
                            <span>{number[3]}</span>
                        </div>


                    </div>


  </div>
</div>

    </div>

  )
}

export default Level2