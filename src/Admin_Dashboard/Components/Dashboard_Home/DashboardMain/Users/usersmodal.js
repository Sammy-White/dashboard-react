import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

function UsersModal(props){
    const editData = props.editdata
    const id = editData._id
    let name = editData.name
    let email = editData.email
    let phone = editData.phone

    let [password, setPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: name,
            email: email,
            phone: phone,
            password: password
        }
        fetch('http://206.189.124.254:9000/user/'+id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }).then(res => {
            console.log(res)
            return res.json()
        }).then(res => {
            console.log(res)

        }).then(err => {
            console.log(err)
        })
    }




    


    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Form className="sales_form" onSubmit={onSubmit} >
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Name</b></label>
                            <input type="text" name="name"  defaultValue={name} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Email</b></label>
                            <input type="text" name="email" defaultValue={email} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Phone</b></label>
                            <input type="text" name="phone" defaultValue={phone} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Password</b></label>
                            <input type="text" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={props.onHide} >Submit</Button>
                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UsersModal