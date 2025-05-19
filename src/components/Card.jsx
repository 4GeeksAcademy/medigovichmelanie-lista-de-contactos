export const Card = ({ contact, deleteContact, editContact }) => {
    const { name, address, phone, email, id } = contact;
    return (
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
                        onClick={() => deleteContact(id)} 
                        className="btn btn-sm btn-outline-danger"
                    >
                        <i className="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    )
}