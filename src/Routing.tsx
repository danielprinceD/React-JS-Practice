import App from './App.tsx'
import {Routes,Route } from 'react-router-dom'
import SecondApp from './secondApp'
import Navigation from './Navigation.tsx' 


const Routing = () => {
  return (
    <>
    <Navigation / >
    <Routes>
        <Route path='React-JS-Practice' element = {<App/>}/>
        <Route path='React-JS-Practice/secondApp'  element={<SecondApp/>}/>
    </Routes>
    </>

  )
}

export default Routing
