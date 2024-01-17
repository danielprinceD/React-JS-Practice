import {ReactNode} from 'react'
interface AlertProps
{
    children:ReactNode
}
function Alert({children}:AlertProps)
{
    return <div className='alert alert-info'>{children}</div> 
}
export default Alert