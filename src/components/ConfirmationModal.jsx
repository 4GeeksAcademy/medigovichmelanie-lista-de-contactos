import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const ConfirmationModal = ({ show, onClose, onConfirm, contactName }) => {
    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <i className="fas fa-exclamation-triangle text-warning me-2"></i>
                    Confirm Delete
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete <strong>{contactName}</strong>?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    <i className="fas fa-trash me-2"></i> Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};