import {useState}from 'react'
interface ListProps
{
    items : string[],
    heading : string,
    onSelect : (items:string)=>void,
    onStyle : string;
}
function List({items,heading,onSelect,onStyle}:ListProps){
    const [select,setSelect] = useState(-1)
    return (
        <>
        <h2>This is a List Group </h2>
        <ul className={"list-group"+onStyle}>
            <li className="list-group-item">Data 1</li>
            <li className="list-group-item">Data 2</li>
            <li className="list-group-item">Data 3</li>
            <li className="list-group-item">Data 4</li>
            <li className="list-group-item">Data 5</li>
        </ul>
        <h2>{heading}</h2>
        <ul className="list-group">
            {items.map((items,index)=><li className={(select === index ) ? "list-group-item active":"list-group-item" } key={items} onClick={()=>{setSelect(index);onSelect(items)} } >{items} </li>)}
        </ul>
        </>
    );
}
export default List;