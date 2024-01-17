import Hello from './HelloMessage';
import Alert from './components/Alert';
import List from './components/ListGroup';
const list = ["One","Two","Three","Four"]
function App()

{
    return (<div><Hello/><List items={list} heading="Numbers" onSelect={(items:string)=>{console.log(items);
    }}/> <Alert> Hello World </Alert>
         </div> ) ;
}
export default App;