interface ToggleProps
{
    children : string,
    onClick : ()=>void;
}
function Toggler({children , onClick}:ToggleProps)
{
    return(
        <button className="btn btn-outline-dark" onClick={onClick}>{children}</button>
    );
}

export default Toggler