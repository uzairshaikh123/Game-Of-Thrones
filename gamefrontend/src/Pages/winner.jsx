import React from 'react'
import { AuthContext } from '../Context/AuthContext'
const Winner = () => {
    const {number,count,setcount} = React.useContext(AuthContext)
  return (
    <div className='winner-cont' style={{height:"100vh"}}>
        <h1 style={{textAlign:"center",fontSize:"40px",color:"red"}}>Results</h1>

<div style={{height:"auto",width:"50%",margin:"auto",position:"absolute",top:"40%",left:"25%",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
    <h3>Winner To be announced</h3>
<img width={"100%"} style={{height:"450px"}} src="https://i.pinimg.com/originals/e3/09/e7/e309e77ff7f18cf61b67c2cd2f247dfe.gif" alt="" />
</div>
<div className="leaderboard" style={{width:"20%", height: "300px", padding: "20px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",backgroundColor:"white" }}>
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
  )
}

export default Winner