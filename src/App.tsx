import { useState } from 'react';
import Hello from './HelloMessage';
import Toggler from './SecondComponent/ToggleBtn';
import Alert from './components/Alert';
import Button from './components/Button';
import List from './components/ListGroup';


const list = ["One","Two","Three","Four"]
function App()
{
    const [theme,setTheme] = useState(false)
    let theming = ()=> theme ? setTheme(false) : setTheme(true)
    let style =  theme ? "p-3 mb-2 bg-dark text-white" : "p-3 mb-2 bg-light text-dark"
    return (<div><Hello/><List items={list} heading="Numbers" onStyle={style} onSelect={(items:string)=>{console.log(items);
    }}/>
    <Toggler children='Click Me' onClick={theming}></Toggler>
    <Button color='primary' children="Click Me" click={()=>console.log("Button Clicked")}/><Alert> Hello World </Alert>
         </div> ) ;
}
export default App;