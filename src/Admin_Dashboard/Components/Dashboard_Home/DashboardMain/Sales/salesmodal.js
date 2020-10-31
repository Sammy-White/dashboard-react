import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

function SalesModal(props) {
    const id = props.id
    const userId = '5f898eb5e9a0f010733cfb91'
    let [date, setDate] = useState("")
    let [unit_price, setUnit] = useState("")
    let [quantity, setQty] = useState("")

    let currentDate = new Date(date).getTime()
    let unit = parseFloat(unit_price)
    let qty = parseFloat(quantity)
    const total = unit * qty
   

    const onSubmit = (e) => {
        e.preventDefault()
        const data ={
            product_id: id,
            date: currentDate,
            unit_price: unit,
            quantity: qty,
            total_price: total,
            user_id: userId
        }
        fetch('http://206.189.124.254:9000/create/sales', {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(data)
            
        }).then(res => {
            console.log(res)
            return res.json()
        }).then(res => {
            console.log(res)
            if(res){
               setDate("")
               setUnit("")
               setQty("")
            }
           
        }).then(err => {
            console.log(err)
        })
    }



    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Make Sale for this product</Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Form className="sales_form" onSubmit={onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Product ID</b></label>
                            <input type="text" name="product_id" defaultValue={id} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Date</b></label>
                            <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Unit Price</b></label>
                            <input type="text" name="unit_price" value={unit_price} onChange={e => setUnit(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Quantity</b></label>
                            <input type="text" name="quantity" value={quantity} onChange={e => setQty(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>Total Price</b></label>
                            <input type="text" name="total_price" value={total} readOnly />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <label><b>User ID</b></label>
                            <input type="text" name="user_id" defaultValue={userId} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={props.onHide} >Submit</Button>
                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SalesModal


