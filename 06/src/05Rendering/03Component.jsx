

const Component_03 = ({items})=>{
    console.log('item.length ? ',items.length);
    return (
        <ul>
        {items.length>0 && items.map((item,index)=>{
            return (
                <li key={index}>{item}</li>
            )
        })}
        </ul>
    )

}

export default Component_03;