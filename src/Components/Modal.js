import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Login from './Login'
import Button from 'react-bootstrap/esm/Button'
function Example() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div variant="primary" onClick={handleShow} >
      <Button className='mx-2 fw-bold navButton1'>Login</Button>
      </div>

      <Modal show={show} onHide={handleClose} animation={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Body>
          <Modal.Header style={{ paddingTop: '12px', border: 'none' }} closeButton>
          </Modal.Header>
              < Login />
           </Modal.Body>
      </Modal>

    </>
  );
}

export default Example;