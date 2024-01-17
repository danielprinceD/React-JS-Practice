import { useState } from "react"
import LoginButton from "./SecondComponent/LoginButton"
import LoginMessage from "./SecondComponent/LoginMessage"
const SecondApp = () => {
    let success = "Log In Successfull"
    let outSuccess = "Log Out Successfull"
    let login_style = "alert alert-success"
    let logout_style = "alert alert-danger"
    const [visible,setVisible] = useState(false);
    const [outVisible,setOutVisible] = useState(false);
  return (
    <div>
        This is Second App
        { visible && <LoginMessage msg={success} style={login_style}  onClick={()=>setVisible(false)}></LoginMessage> }
        <LoginButton color="success" children="Log In" onClick={()=>setVisible(true)}/>
        <br></br>
        { outVisible && <LoginMessage msg={outSuccess} style={logout_style} onClick={()=>setOutVisible(false)}></LoginMessage> }
        <LoginButton color="danger" children="Log Out" onClick={()=>setOutVisible(true)}></LoginButton>
    </div>
  )
}

export default SecondApp
