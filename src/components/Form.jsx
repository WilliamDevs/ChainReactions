import { useState } from "react";

export default function Form(){
    const [name,setName] = useState({firstName:"",lastName:""});

    // function captureInput(e){
    //     console.log(e.target.value);
    //     console.log("Should be able to capture event ");
    //     setFirstName(e.target.value);
        
    // }

    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <div>
            {name.firstName} - {name.lastName}
           <form>
            <input onChange={(e) => setName({...name,firstName:e.target.value})} type="text" value={name.firstName}/>
            <input onChange={(e) => setName({...name,lastName:e.target.value})} type="text" value={name.lastName}/>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
           </form>
        </div>
    )
}