interface BtnProps
{
    children : string,
    color : 'primary' | 'secondary',
    click: ()=>void
}
function Button({children,color,click}:BtnProps)
{
    return(
        <button className={"btn btn-"+color} onClick={click}>{children}</button>
    );
}
export default Button