interface MessageProps
{
    msg : string,
    style : string,
    onClick : ()=>void;
}
const LoginMessage = ({msg,style,onClick }:MessageProps) => {
    return (
      <div className={style + " alert-dismissible"}> 
        {msg} 
        <button className="btn btn-close" onClick={onClick}></button>
      </div>
    )
  }
  
  export default LoginMessage
  