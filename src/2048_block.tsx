function Block() {
    let ran = Math.floor(Math.random() * Math.floor(2048));
    return (
<div>{ran}</div>
    )
}


export default Block;