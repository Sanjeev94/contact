import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch as dispatch } from 'react-redux';
import { toast } from 'react-toastify';

export const Home = () => {
    const contacts = useSelector(state=>state);

    const deleteContact = (id) =>{
        dispatch({type: "DELTE_CONTACT", payload:id});
        toast.success("Contacts deleted successfully!!");

    }
    return (
        <div className="container">
         <div className="row">
             <div className="col-md-12 text-right">
                 <Link to="/" className="btn btn-outline-dark">
                     Add Contacts</Link>
                 <div className="col-md-10 mx-auto">
                     <table className="table table-hover">
                         <thead className="text-white bg-dark text-center">
                             <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">Name</th>
                                 <th scope="col">Email</th>
                                 <th scope="col">Number</th>
                                 <th scope="col">Action</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 contacts.map((contact, id) =>(
                                     <tr key={id}>
                                         <td>{id+1}</td>
                                         <td>{contact.name}</td>
                                         <td>{contact.email}</td>
                                         <td>{contact.number}</td>
                                         <td>
                                             <Link to={`/edit/${contact.id}`} 
                                             className="btn btn-small btn-primary mr-2">
                                                 Edit</Link>
                                                 <button type="button" onClick={()=> deleteContact(contact.id)}
                                                 className="btn btn-small btn-danger">Delete</button>
                                         </td>
                                     </tr>
                                 )) 
                             }
                         </tbody>
                     </table>
                 </div>

             </div>
         </div>   
        </div>
    )
}
