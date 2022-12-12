import React from 'react'
import { getListClients, removeClient } from './LocalStorage';
import { useNavigate } from 'react-router-dom';

 const ClientItem = ({ client, setClients }) => {
    const { id, name, email, address, phone } = client;
    const navigate = useNavigate();

    const deleteClient = () => {
        removeClient(id);
        setClients(getListClients());
    }

    return (
        <tr className="table-primasry">
            <th>{name}</th>
            <td>{email}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>
                <div className="d-flex gap-3">
                    <span type="button" style={{backgroundColor: "lightblue"}} onClick={() => navigate(`/edit-client/${id}`)}>Update</span>
                    <span type="button" style={{backgroundColor: "lightblue"}} onClick={() => deleteClient()}>DeleteClient</span>
                </div>
            </td>
        </tr>
    )
}

export default ClientItem;