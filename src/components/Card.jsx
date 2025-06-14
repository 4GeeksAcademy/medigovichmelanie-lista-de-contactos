import { useState } from 'react';
import { ConfirmationModal } from './ConfirmationModal';

export const Card = ({ contact, deleteContact, editContact }) => {
    const [showModal, setShowModal] = useState(false);
    const { name, address, phone, email, id } = contact;
    
    const handleConfirmDelete = () => {
        deleteContact(id);
        setShowModal(false);
    };

    return (
        <>
            <div className="card mb-3 w-100">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><i className="fas fa-map-marker-alt me-2"></i>{address}</p>
                    <p className="card-text"><i className="fas fa-phone me-2"></i>{phone}</p>
                    <p className="card-text"><i className="fas fa-envelope me-2"></i>{email}</p>
                    <div className="d-flex justify-content-end">
                        <button 
                            onClick={() => editContact(contact)} 
                            className="btn btn-sm btn-outline-primary me-2"
                        >
                            <i className="fas fa-edit"></i> Edit
                        </button>
                        <button 
                            onClick={() => setShowModal(true)} 
                            className="btn btn-sm btn-outline-danger"
                        >
                            <i className="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
            
            <ConfirmationModal 
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleConfirmDelete}
                contactName={name}
            />
        </>
    );
};