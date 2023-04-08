import React from 'react'

const Level2 = () => {
  return (
    <div style={{overflowX:"hidden"}}>
<div className="navbar" style={{ height: "50px", width: "100%", display: "flex", justifyItems: "center", justifyContent: "center" }}>
                    <h2 style={{ fontSize: "25px" }}>Raja mantri chor sipahi</h2>
                </div>

<div className="cont-level-2" style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>
  <div  style={{border:"1px solid red"}}>
    <img width={"150px"} src="https://cdn.pixabay.com/photo/2023/02/16/19/41/princess-7794649_960_720.jfif" alt="" />
  </div>
  <div  style={{border:"1px solid red"}}>
    <img width={"150px"} src="https://media.tenor.com/Ggb25MyFi5kAAAAC/crown-royalty.gif" alt="" />
  </div>
</div>

<div className="second-cont" style={{display:"flex",justifyContent:"space-evenly",marginTop:"60px"}}>
  <div>
    <img  width={"150px"} src="https://images.gr-assets.com/hostedimages/1477774625ra/20991777.gif" alt="" />
    <button>1</button>
    <button>2</button>
    <button>3</button>
  </div>
  <div>
  <img  width={"150px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUalxyL8HmLn7D2e6WDwVteUSi3cXOPtZOw&usqp=CAU" alt="" />
    <button>1</button>
    <button>2</button>
    <button>3</button>
  </div>
  <div>
<h2>Message</h2>

  </div>
  <div>
  <div className="leaderboard" style={{ width: "100%", height: "auto", padding: "20px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }}>
                        <span>ScoreBoard</span>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                            <span style={{ fontSize: "20px", textDecoration: "bold" }}> <u>Players</u>  </span>
                            <span style={{ fontSize: "20px", textDecoration: "bold" }}> <u>Score</u> </span>

                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px"}}>
                            <span>Raja</span>
                            <span>100</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px" }}>
                            <span>Mantri</span>
                            <span>60</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px" }}>
                            <span>Chor</span>
                            <span>30</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px" }}>
                            <span>Sipahi</span>
                            <span>40</span>
                        </div>


                    </div>


  </div>
</div>

    </div>
  )
}

export default Level2