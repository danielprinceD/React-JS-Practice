import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='nav navbar-dark bg-primary'>
        <Link to='React-JS-Practice'><h4 className='mx-5 text-dark'>First App</h4></Link> 
        <Link to='React-JS-Practice/secondApp'><h4 className='mx-5 text-dark'> Second App</h4></Link>
    </nav>
  )
}



export default Navigation
