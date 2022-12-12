import { useNavigate, useParams } from 'react-router-dom';
import ClientItem from './ClientItem';
import { useEffect, useState } from 'react';
import { getListClients } from './LocalStorage';
import Header from './Header';

 const ViewClientList = () => {
    const [clients, setClients] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
      setClients(getListClients());
    }, []);

    return (
        <div>
            <Header />
            <button type="button" onClick={() => navigate("/dashboard")}>Previous</button>
            <h1 className="my-5 text-center">All Registered Clients</h1>

            {
                clients.length > 0 ? (
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col" style={{color:'orange'}}>Name</th>
                                    <th scope="col" style={{color:'orange'}}>Email</th>
                                    <th scope="col"style={{color:'orange'}}>Address</th>
                                    <th scope="col"style={{color:'orange'}}>Phone</th>
                                    <th scope="col"style={{color:'orange'}}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    clients.map(client =><ClientItem 
                                         key={client.id} 
                                         client={client}
                                        setClients={setClients} />)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="text-center">No clients registered yet</h3>
                )
            }
            <br></br>
              
        </div>
    )
}
export default ViewClientList;