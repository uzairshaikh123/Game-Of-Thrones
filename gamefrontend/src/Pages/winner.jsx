import React from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import ending from "../Sound/ending.wav"

const Winner = () => {
    const {number,count,finalplayer,setcount} = React.useContext(AuthContext)
    const navigate = useNavigate()

   const sound = new Audio(ending)
   
   React.useEffect(()=>{
     sound.play()
   },[])

    let max = 0
    let index ;

     for(let i=0;i<number.length;i++){
        if(max<number[i]){
            max=number[i]
            index = i
        }
     }

     console.log(max,index)

     let name ;

     if(index==0){
        name=finalplayer.player1
     }else if(index==1){
        name=finalplayer.player2
     }else if(index==2){
        name=finalplayer.player3
     }else if(index==3){
        name=finalplayer.player4
     }

    console.log(name)

    const handleclick=()=>{
        sound.pause()
        navigate("/")
    }

  return (
    <div className='winner-cont' style={{height:"100vh"}}>
        {/* <h1 style={{textAlign:"center",fontSize:"40px",color:"red"}}>Results</h1> */}

<div style={{height:"auto",width:"50%",margin:"auto",position:"absolute",top:"16%",left:"25%",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
    <h3  className='lasth3' >{name} is Winner </h3>
<img width={"100%"} style={{height:"350px"}} src="https://i.pinimg.com/originals/e3/09/e7/e309e77ff7f18cf61b67c2cd2f247dfe.gif" alt="" />
 
<button  className='button3' onClick={handleclick} >New Game</button> 
 </div>


                  
    </div>

  )
}

export default Winner