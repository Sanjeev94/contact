import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    console.log(contacts);
    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail = contacts.find(contacts=> contacts.email === email && email );
        const checkNumber = contacts.find(contacts=> contacts.number === parseInt(number) && parseInt(number) );
        if(!email || !number || !name){
            return toast.warning("Please fill in all fields!!")
        }
        if(checkEmail){
            return toast.warning("This Email already Exits")
        }
        if(checkNumber){
            return toast.warning("This Phone no already Exits")
        }
        const data ={
            id: contacts[contacts.length -1].id + 1,
            name,
            email,
            number
        }
        // console.log(data);

        dispatch({type: "ADD_CONTACT", payload: data});
        toast.success("Contact added successfully");
        history.push("/")
    }
    return (
        <div className="container">
            <h1 className="display-3 my-5 text-center">Add Contact</h1>
        <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input type="text" placeholder="Name"
                          className="form-control" value={name} 
                          onChange={(e)=> setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                          <input type="email" placeholder="Email"
                          className="form-control" value={email} 
                          onChange={(e)=> setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                          <input type="number" placeholder="Phone Number"
                          className="form-control" value={number} 
                          onChange={(e)=> setNumber(e.target.value)} />
                          <div className="form-group">
                          <input type="submit" value="Add Contact"
                          className="btn btn-block btn-dark" />
                        </div>
                        </div>
                    </form>
                </div>
        </div>   
       </div>
    )
}

export default AddContact
