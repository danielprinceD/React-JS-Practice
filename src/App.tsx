import Hello from './HelloMessage';
import List from './components/ListGroup';
const list = ["One","Two","Three","Four"]
function App()

{
    return <div><Hello/><List items={list} heading="Numbers" onSelect={(items:string)=>{console.log(items);
    }}/></div> ;
}
export default App;