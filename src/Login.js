import React,{useState}from "react";
import Props from "./Props";

function Login() {
    const [count,setCount]=useState(0);
    const [dateCount,setdateCount]=useState(5)
    const[user,setUser]= useState("");
    const[password,setPassword]=useState("");
    const[useErr,setuseError]=useState(false);
    // here I set status false to show validate on click
    const[pasErr,setpassError]=useState(false);



   
function formHandle(e){
    if(user.length<3 && password.length<3){
        alert("pleace enter character more then 3 words");
    }else{
       alert("valdate")
    }

    e.preventDefault();
    
}
function userHandler(e){
   let item= e.target.value
//    here we get value as well as lenth also of input
   if(item.length<4){
    setuseError(true);
   }else{
    setuseError(false);
   }
   setUser(item);
}
function passHandler(e){
    let item= e.target.value
 //    here we get value as well as lenth also of input
    if(item.length<4){
     setpassError(true);
    }else{
     setpassError(false);
    }
    setPassword(item)
}  
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <form onSubmit={formHandle}>
                    <h1>Login</h1>
                    <input type="text" name="fname" onChange={userHandler}/><br/>
                        {useErr?<span >Not Valid</span>:""}
                    <br/>
                    <input type="text" name="password" onChange={passHandler}/><br/> 
                    {pasErr?<span >Not Valid</span>:""}
                    <br/>
                    <button type="submit">Login</button>
                </form>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row pt-5">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <Props count={count} dateCount={dateCount}/>
                {/* props always pass create custom atribute */}
                <button className="btn btn-primary p-3" onClick={()=>setCount(count+1)}>Click</button>
              
                <button className="btn btn-primary p-3" onClick={()=>setdateCount(count+1)}>Click</button>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>

    </>);
}
export default Login;