import React, {useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'



function CreateProductModal(props){
    let [name, setName] = useState("")
    let [category, setCategory] = useState("")
    let [price, setPrice] = useState("")
    let [quantity, setQty] = useState("")
    let [description, setDesc] = useState("")


    let inputRef = useRef()

    // console.log(props.data)

    const onSubmit = (e) => {
        e.preventDefault()

        let img = inputRef.current.files[0].name

        let data = {
            name: name,
            category: category, 
            price: price, 
            image: img,
            quantity: quantity, 
            description: description
        }
        fetch('http://206.189.124.254:9000/create/product', {
            method: "POST",
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
                <Modal.Title id="contained-modal-title-vcenter">Add new Product</Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Form className="sales_form" onSubmit={onSubmit} >
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Name</b></label>
                            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}  />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Category</b></label>
                            <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
                                <option value="---------"></option>
                                <option value="Shop page">Shop Page</option>
                                <option value="Similar products">Similar products</option>
                                <option value="recent product">Recent Product</option>
                                <option value="popular product">Popular Product</option>
                                <option value="section4">Section Four</option>
                            </select>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Price</b></label>
                            <input type="text" name="price" value={price} onChange={e => setPrice(e.target.value)}  />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Image</b></label>
                            <input type="file" name="image" ref={inputRef} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Quantity</b></label>
                            <input type="text" name="quantity" value={quantity} onChange={e => setQty(e.target.value)}  />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Description</b></label>
                            <input type="text" name="description" value={description} onChange={e => setDesc(e.target.value)}  />
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


export default CreateProductModal