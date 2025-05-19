import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from 'react-router-dom';
import { Card } from '../components/Card.jsx';
import { getContactList, deleteContactById } from '../services/contact.js';

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate();
	const getContacts = async () => {
		const data = await getContactList();
		if (data) {
			dispatch({ type: 'addContacts', payload: data })
		}

	}

	useEffect(() => {
		getContacts();
	}, []);

	const deleteContact = async (id) => {
		console.log(id);
		const isDelete = await deleteContactById(id);
		if (isDelete) {
			getContacts();
		}
	}

	const editContact = (contact) => {
		dispatch({ type: 'edit', payload: contact });
		navigate('/edit-contact')
	}

  return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Contacts</h1>
                <Link to="/add-contact" className="btn btn-success">
                    <i className="fas fa-plus me-2"></i>Add Contact
                </Link>
            </div>
            <div className="row">
                {store.contacts.map((contact, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-4">
                        <Card 
                            contact={contact} 
                            deleteContact={deleteContact} 
                            editContact={editContact} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};