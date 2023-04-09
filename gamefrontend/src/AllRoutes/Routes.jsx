import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Level1 from '../Pages/Level1'
import Level2 from '../Pages/Level2'
import Homepage from '../Pages/Homepage'
import Players from '../Pages/Players'
import Winner from '../Pages/winner'
const Routesfun = () => {
  return (
    <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/players"} element={<Players />} />
        <Route path={"/level1"} element={<Level1 />} />
        <Route path={"/level2"} element={<Level2 />} />
        <Route path={"/winner"} element={<Winner />} />
    </Routes>
  )
}

export default Routesfun