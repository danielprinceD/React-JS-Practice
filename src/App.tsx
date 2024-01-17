import Hello from './HelloMessage';
import Alert from './components/Alert';
import Button from './components/Button';
import List from './components/ListGroup';
const list = ["One","Two","Three","Four"]
function App()

{
    return (<div><Hello/><List items={list} heading="Numbers" onSelect={(items:string)=>{console.log(items);
    }}/><Button color='primary' children="My Button" click={()=>console.log("Button Clicked")}/><Alert> Hello World </Alert>
         </div> ) ;
}
export default App;