
import React from 'react'



// interface Num {
//   number:number[],
//   setnumber: (number:number[]) => void
// }
 
// type Numprops = {
//     children:React.ReactNode
// }


export const AuthContext = React.createContext()


const AuthContextProvider = ({children}) => {

    const [number,setnumber] = React.useState([100,60,50,40])
    const [finalplayer,setfinalplayer] = React.useState({})
    const [count,setcount] = React.useState(0)
  

    const change =(i)=>{
      setnumber(i)
    }

    const handle=(obj)=>{
          console.log(obj)
        setfinalplayer(obj)
    }


  return (
    <AuthContext.Provider value={{number,change,count,finalplayer,handle,setcount}}  >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider