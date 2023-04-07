import React from 'react'
import { Link } from 'react-router-dom'

const Level1 = () => {

    let arr = [
        {
            id:1,
            img: "https://media.tenor.com/Ggb25MyFi5kAAAAC/crown-royalty.gif"
        }, {
            id:2,
            img: "https://images.gr-assets.com/hostedimages/1477774625ra/20991777.gif"
        }, {
            id:3,
            img: "https://media2.giphy.com/media/U4w2ZeC6U7cKflZmKf/giphy.gif?cid=6c09b9526db71e99e73e2d548dc8022cbdf9c460ba1b8565&rid=giphy.gif&ct=s"
        }, {
            id:4,
            img: "https://media2.giphy.com/media/U4w2ZeC6U7cKflZmKf/giphy.gif?cid=6c09b9526db71e99e73e2d548dc8022cbdf9c460ba1b8565&rid=giphy.gif&ct=s"
        }
    ]

    const handlestart = () => {

    }



    return (
        <div className='bigcont' style={{ overflowX: "hidden" }}>

            <div >
                <div className="navbar" style={{ height: "50px", width: "100%", display: "flex", justifyItems: "center", justifyContent: "center" }}>
                    <marquee width="600" style={{ fontSize: "40px" }}>Raja mantri chor sipahi</marquee>
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

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" ,marginTop:"20px"}}>
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
                        <button class="button"><span>Level 2 </span></button>
                    </Link>

                </div>



            </div>



        </div>
    )
}

export default Level1