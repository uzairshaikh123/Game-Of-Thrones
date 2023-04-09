import React from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Level2 = () => {

  const [ring,setring] = React.useState (Math.floor(Math.random()*4)+2) 
  const[ result,setresult] = React.useState("As per Queen commond Vazir got first chance to play")
 
    const {number,change} = React.useContext(AuthContext)

   console.log(number)
 
  let varr = [3,4,5]
    
 
    const select1=(i)=>{
     if(varr[i]+ring==7){
         change([number[0],number[1]+90,number[2],number[3]])
        setresult("Vazir Win this Game , Now Vazir will become new King And Queen will get divorce to previous King and will marry to New King")
     }else{
      
       setresult("Total rings is not equal to 7 , vazir lose this Game ")
     }
   
     setring(Math.floor(Math.random()*4)+2)
    }
    
 
    const select2=(i)=>{
     if(varr[i]+ring==7){
      change([number[0],number[1],number[2],number[3]+90])
        setresult("Chor Win this Game , Now Chor will become new King And Queen will get divorce to previous King ")
     }else{
       
       setresult("Chor lose this Game , Now Previous King will ramain King and getting marry to new Queen")
     }
   
     setring(Math.floor(Math.random()*4)+2)
    }
    
  
    console.log(result)


  return (
    <div style={{overflowX:"hidden"}}>
<div className="navbar" style={{ height: "50px", width: "100%", display: "flex", justifyItems: "center", justifyContent: "center" }}>
                    <h2 style={{ fontSize: "25px" }}>Raja mantri chor sipahi</h2>
                </div>

<div className="cont-level-2" style={{display:"flex",justifyContent:"space-around",marginTop:"20px",height:"auto"}}>
  <div  style={{height:"auto"}}>
    <img width={"150px"} style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",height:"180px"}} src="https://cdn.pixabay.com/photo/2023/02/16/19/41/princess-7794649_960_720.jfif" alt="" />
  </div>

  <div  style={{border:"1px solid red"}}>
    <img width={"150px"} src="http://localhost:3000/static/media/King.05fb62231c55d84459e3.png" alt="" />

  <div className='message' style={{width:"35%",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
<h1 style={{textAlign:"center",width:"90%",margin:"auto"}}>Result</h1>
  </div>
  <div  style={{height:"auto"}}>
    <img width={"150px"} style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",height:"180px"}} src="https://img.freepik.com/premium-vector/king-head-vector-logo-icon_43623-454.jpg?w=2000" alt="" />

  </div>
</div>

<div className="second-cont" style={{display:"flex",justifyContent:"space-evenly",marginTop:"60px",flexWrap:"wrap"}}>
  <div style={{height:"auto"}}>
    <img  style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",height:"180px"}}   width={"150px"} src="https://images.gr-assets.com/hostedimages/1477774625ra/20991777.gif" alt="" />

   

     {
      varr.map((el,i)=>{
        return <div key={i} className='numbers' onClick={()=>select1(i)} >{el}</div>
      })
     }

  </div>
  <div style={{height:"auto"}} >
  <img  style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",height:"180px"}}  width={"150px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUalxyL8HmLn7D2e6WDwVteUSi3cXOPtZOw&usqp=CAU" alt="" />


     {
      varr.map((el,i)=>{

        return <div key={i} style={{cursor:"pointer"}} onClick={()=>select2(i)} >{el}</div>

  

      })
     }

  </div>
  <div>
  <div className="leaderboard" style={{width:"150%", height: "300px", padding: "20px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }}>
                        <span>ScoreBoard</span>

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
                            <span>Chor</span>
                            <span>{number[2]}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px" }}>
                            <span>Sipahi</span>
                            <span>{number[3]}</span>
                        </div>


                    </div>


  </div>
</div>

    </div>
    </div>
  )
}

export default Level2