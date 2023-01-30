import React,{useEffect} from "react";

function Props(props){
    console.log(props.count)
    useEffect(()=>{
        console.log("callonce_________");
    },[props.count,props.dateCount])
    return(<>
        <h1>Count:{props.count}</h1>
        <h1>Date:{props.dateCount}</h1>
    </>);
}

export default Props;