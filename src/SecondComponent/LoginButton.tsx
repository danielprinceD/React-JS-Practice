interface ButtonProps
{
    children:string,
    color:"success"|"danger",
    onClick : ()=>void;
}

const LoginButton = ({children,color,onClick}:ButtonProps )=> {
    return (
    <div>   
        <button className={"btn btn-"+color} onClick={onClick}>{children} </button>
    </div>
  )
}

export default LoginButton
