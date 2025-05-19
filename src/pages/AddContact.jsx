import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import useGlobalReducer from '../hooks/useGlobalReducer';
import { addContact, putContact } from '../services/contact.js'

const INITIAL_STATE = {
    name: '',
    address: '',
    phone: '',
    email: ''
}

export const AddContact = ({ type }) => {
    const { store } = useGlobalReducer();
    const isEdit = type === 'edit';

    const [contact, setContact] = useState(INITIAL_STATE);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();

    useEffect(() => {
        const contactState = isEdit ? store.contact : INITIAL_STATE;
        setContact(contactState);
    }, [])

    const onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContact({ ...contact, [name]: value });
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        if (isEdit) {
            await editContact();
            setLoading(false);
            return;
        }
        await createContact();
        setLoading(false);
        return;
    }

    const createContact = async () => {
        const addContactResponse = await addContact(contact);
        if (addContactResponse) {
            setMessage(addContactResponse);
        }
    }

    const editContact = async () => {
        const editContactResponse = await putContact(contact);
        if (editContactResponse) {
            setMessage(editContactResponse);
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <h2 className="mb-4 text-center">
                        {isEdit ? 'Edit Contact' : 'Add New Contact'}
                    </h2>
                    
                    <form onSubmit={onSubmit} className="border p-4 rounded-3 shadow-sm bg-white">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={contact.name}
                                onChange={onChange}
                                required
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                value={contact.address}
                                onChange={onChange}
                                required
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={contact.phone}
                                onChange={onChange}
                                required
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={contact.email}
                                onChange={onChange}
                                required
                            />
                        </div>

                        <div className="d-flex justify-content-between mt-4 mb-3">
                            <Link to="/" className="btn btn-outline-secondary">
                                <i className="fas fa-arrow-left me-2"></i>Back to contacts
                            </Link>
                            
                            {loading ? (
                                <button className="btn btn-primary" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                    Saving...
                                </button>
                            ) : (
                                <button type="submit" className="btn btn-primary">
                                    <i className="fas fa-save me-2"></i>Save
                                </button>
                            )}
                        </div>
                    </form>

                    {message && (
                        <div className="mt-3">
                            <div className="alert alert-success d-flex justify-content-between align-items-center">
                                <span>{message}</span>
                                <Link className="btn btn-sm btn-outline-dark" to='/'>
                                    <i className="fas fa-home me-2"></i>Go to home
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}