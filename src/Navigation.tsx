import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='position-sticky'>

    <nav className='nav pt-3 pb-3  navbar-dark bg-primary'>
        <Link to='React-JS-Practice'><h4 className='mx-5  text-dark'>First App</h4></Link> 
        <Link to='React-JS-Practice/secondApp'><h4 className='mx-5 text-dark'> Second App</h4></Link>
    </nav>
    </div>
  )
}



export default Navigation
