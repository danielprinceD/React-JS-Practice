import Hello from './HelloMessage';
import List from './components/ListGroup';
const list = ["One","Two","Three","Four"]
function App()

{
    return <div><Hello/><List items={list} heading="Numbers"/></div> ;
}
export default App;