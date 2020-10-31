import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

function ProductModal(props) {
    const editProduct = props.editdata
    // let id = editProduct._id
    let name = editProduct.name
    let price = editProduct.price
    let quantity = editProduct.quantity
    let description = editProduct.description

   let [category, setCategory] = useState("")
 

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(category)
        // const data = {
        //     name: name,
        //     email: email,
        //     phone: phone,
        //     password: password
        // }
        // fetch('http://206.189.124.254:9000/product/' + id, {
        //     method: "PUT",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)

        // }).then(res => {
        //     console.log(res)
        //     return res.json()
        // }).then(res => {
        //     console.log(res)

        // }).then(err => {
        //     console.log(err)
        // })
    }

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Form className="sales_form" onSubmit={onSubmit} >
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Name</b></label>
                            <input type="text" name="name" defaultValue={name}  />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Category</b></label>
                            <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
                                <option value="---------"></option>
                                <option value="shop page">Shop Page</option>
                                <option value="recent product">Recent Product</option>
                                <option value="popular product">Popular Product</option>
                            </select>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Price</b></label>
                            <input type="text" name="price" defaultValue={price} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Image</b></label>
                            <input type="file" name="price"  />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Quantity</b></label>
                            <input type="text" name="quantity" defaultValue={quantity}  />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Description</b></label>
                            <input type="text" name="description" defaultValue={description} />
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

export default ProductModal