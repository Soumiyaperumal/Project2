import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Signup from './Signup'
import Button from 'react-bootstrap/esm/Button'
function Example2() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div variant="primary" onClick={handleShow} >
      <Button className='mx-2 fw-bold navButton2'>Create Account</Button>
      </div>
      <Modal show={show} onHide={handleClose} animation={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Modal.Header style={{ paddingTop: '12px', border: 'none' }} closeButton>
          </Modal.Header>
              < Signup />
           </Modal.Body>
      </Modal>

    </>
  );
}

export default Example2;