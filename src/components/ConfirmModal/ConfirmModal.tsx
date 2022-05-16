import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ConfirmModal.scss';

const ConfirmModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
      <Modal show={show} size="sm" onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Dot even try to press escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ConfirmModal;
