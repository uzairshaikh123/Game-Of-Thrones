import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Level1 from '../Pages/Level1'
import Level2 from '../Pages/Level2'
const Routesfun = () => {
  return (
    <Routes>
        <Route path={"/level1"} element={<Level1 />} />
        <Route path={"/level2"} element={<Level2 />} />
    </Routes>
  )
}

export default Routesfun