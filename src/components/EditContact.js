import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch as dispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useHistory as history } from 'react-router-dom';

const EditContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const {id} = useParams();
    const contacts = useSelector(state=>state);
    const currentContact = contacts.find(contact=> contact.id === parseInt(id));

    
    useEffect(()=> {
        if(currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    },[currentContact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail = contacts.find(contacts=> contacts.id !== parseInt(id) && contacts.email === email && email );
        const checkNumber = contacts.find(contacts=> contacts.id !== parseInt(id) && contacts.number === parseInt(number) && parseInt(number) );
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
            id: parseInt(id),
            name,
            email,
            number
        }
        // console.log(data);

        dispatch({type: "Update_CONTACT", payload: data});
        toast.success("Contact updated successfully");
        history.push("/")
    }
    return (
        <div className="container">
            {currentContact ? (
                <>
                <h1 className="display-3 my-5 text-center">Edit Contact {id}</h1>
                <div className="row">
                        <div className="col-md-6 shadow mx-auto p-5">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                  <input type="text" placeholder="Name"
                                  className="form-control" value={name} 
                                  onChange={(e)=> setName(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                  <input type="email" placeholder="Email"
                                  className="form-control" value={email} 
                                  onChange={(e)=> setEmail(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                  <input type="number" placeholder="Phone Number"
                                  className="form-control" value={number} 
                                  onChange={(e)=> setNumber(e.target.value)} />
                                  <div className="form-group">
                                  <input type="submit" value="Update Contact"
                                  className="btn btn-dark" />
                                  <Link to="/"
                                  className="btn btn-danger ml-3">Cancel</Link>
                                </div>
                                </div>
                            </form>
                        </div>
                </div>   
                </>

            ) : (
                <h1 className="dispaly-3 my-5 text-center">
                    Student contact with id {id} does not exit.</h1>
            )}
        
   </div>
    )
}

export default EditContact
