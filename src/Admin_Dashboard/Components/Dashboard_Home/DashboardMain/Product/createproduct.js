import React, { useState } from 'react'
import CreateProductModal from './createproductmodal';
import Button from 'react-bootstrap/Button'

function CreateProduct(props){
    const [modalShow, setModalShow] = useState(false);
    const data = props.data

    return(
        <div>
            <Button variant="secondary" onClick={() => setModalShow(true)} style={{float: "right", marginTop:"10px", marginBottom:"20px", marginRight:"30px"}}>Add Product</Button>
            <CreateProductModal data={data} show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

export default CreateProduct