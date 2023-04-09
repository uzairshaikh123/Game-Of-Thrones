import React from 'react'
import { Link } from 'react-router-dom'

const Level1 = () => {

    let arr = [
        {
            id:1,
            img: "https://img.freepik.com/premium-vector/king-head-vector-logo-icon_43623-454.jpg?w=2000"
        }, {
            id:2,
            img: "https://images.gr-assets.com/hostedimages/1477774625ra/20991777.gif"
        }, {
            id:3,
            img:"https://us.123rf.com/450wm/kritchanut/kritchanut1410/kritchanut141000122/32814149-businessman-icon-with-question-mark-on-the-face-suspect-concept.jpg?ver=6",
            //  "https://media2.giphy.com/media/U4w2ZeC6U7cKflZmKf/giphy.gif?cid=6c09b9526db71e99e73e2d548dc8022cbdf9c460ba1b8565&rid=giphy.gif&ct=s"
        }, {
            id:4,
            img: "https://us.123rf.com/450wm/kritchanut/kritchanut1410/kritchanut141000122/32814149-businessman-icon-with-question-mark-on-the-face-suspect-concept.jpg?ver=6"
        }
    ]

    const handlestart = () => {

    }



    return (
        <div className='bigcont' style={{ overflowX: "hidden"}} >

            <div >
                <div className="navbar" style={{ height: "50px", width: "100%", display: "flex", justifyItems: "center", justifyContent: "center" }}>
                    <h2 style={{ fontSize: "25px" }}>Raja mantri chor sipahi</h2>
                </div>
                <h2 style={{ textAlign: "center", color: "red" }}>Level 1</h2>
                <h2  style={{ textAlign: "end", color: "green" ,marginRight:"15px"}}>Queen : 90 Points</h2>
                <div style={{ display: "flex",justifyContent: "space-between" ,marginRight:"15px" }}>
                    <div></div>
                    <div style={{border:"1px solid red",width:"40%",height:"100px"}}>
                        <h3 style={{textAlign:"center"}}>Result</h3>
                    </div>
                    <img width={"120px"} src="https://cdn.pixabay.com/photo/2023/02/16/19/41/princess-7794649_960_720.jfif" alt="" />
                </div>
                <div id="cont" style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", marginTop: "50px" }}>

                    <div className="avatars" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", width: "75%" }}>
                        {arr.map((el)=>{
                            return <div key={el.id} className='card' >
                            <img width={"150px"} style={{height:"200px"}} src={el.img} alt="" />
                            <div className='user'>User{el.id}</div>

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

            <div className='cont' style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", marginTop: "50px" }} >

                <div className="cont2" style={{}}>

                    <button onClick={handlestart} className='button2'>Start</button>
                    <Link to="/level2">
                        <button className="button"><span>Level 2 </span></button>
                    </Link>

                </div>



            </div>



        </div>
    )
}

export default Level1