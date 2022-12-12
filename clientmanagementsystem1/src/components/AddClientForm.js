import { useNavigate, useParams } from 'react-router-dom';
import { addClient, getClientById } from './LocalStorage';
import { useForm } from './useForm';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { editClient } from './LocalStorage';
import Header from './Header';

 const AddClientForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        name: '',
        email: '',
        address: '',
        phone: ''
    });

    useEffect(() => {
        if (id) {
            const client = getClientById(id);
            setForm(client);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editClient(id, inputValues) : addClient({ id: uuid(), ...inputValues });
        resetForm();
        setshowAlert(true);
        setTimeout(() => {
            setshowAlert(false);
        }, 2000);
        
    };

    return (
        <div>
            <Header />
{
                showAlert && (
                    <div className="px-5">
                        <div className="alert alert-success">
                            <strong>Success</strong> {id ? "edit" : "Added a New"} Client
                        </div>
                    </div>
                )
            }
            <div className="d-flex my-2 justify-content-between">
            <button type="button"onClick={() => navigate("/dashboard")}>Back</button> 
                <h1 className="text-center" >{id ? "Edit" : "Add New"} Client</h1>
                <div />
            </div>

            <div className="card border-primary p-3 m-3">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Name</label>
                        <input
                            name="name"
                            type="text"
                            value={inputValues.name}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Email</label>
                        <input
                            name="email"
                            type="email"
                            value={inputValues.email}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={inputValues.address}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Mobile No</label>
                        <input
                            name="phone"
                            type="text"
                            value={inputValues.phone}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="d-grid gap-2 mt-3">
                        <button type="submit">{id ? "Edit" : "Add"} Client</button>
                    </div>
                </form>
                
            </div>

            

        </div >
        
    )
}

export default AddClientForm;