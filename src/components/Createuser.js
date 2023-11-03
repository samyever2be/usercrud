import {useState} from  'react';
import axios from 'axios';
function Createuser(){

    const [inputs, setInputs]  = useState({});

    const handleChange = (event)=>{
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values, [name]: value}));
    }


    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post('http://localhost/api/user/save', inputs)
        console.log(inputs)
       
    }

    
    return(
        <div>
        <h2>Create User</h2>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" onChange={handleChange}/>
            <br/>
            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange}/>
            <br/>
            <label>Mobile:</label>
            <input type="text" name="mobile" onChange={handleChange}/>
            <br/>
            <button>Save</button>
        </form>
        </div>
    )

}
export default Createuser;