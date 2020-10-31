import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import CreateProduct from './createproduct';
import ProductModal from './productmodal';



function Product() {
    const [state, setState] = useState({ data: [] })
    const [modalShow, setModalShow] = useState(false);
    const [id, setId] = useState("")
    const [edit, setEdit] = useState({ data: [] })
    const getData = state.data



    useEffect(() => {
        fetch('http://206.189.124.254:9000/products')
            .then(res => {
                return res.json()
            }).then(res => {
                // console.log(res)
                setState({ data: res })
            })
    }, [])

    const onEdit = (e) => {
        const id = e.target.value
        // console.log(id)
        setId(id)
    }


    const onDelete = (e) => {
        const id = e.target.value
        fetch('http://206.189.124.254:9000/product/' + id, {
            method: 'DELETE',
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(res => {
                console.log(res)
                if (res['success'] === 'operation successful') {
                    setState({ data: state.data.filter(data => data._id !== id) })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetch('http://206.189.124.254:9000/product/' + id)
            .then(res => {
                return res.json()
            }).then(res => {
                // console.log(res)
                setEdit({ data: res })
            })
    }, [id])


    return (
        <div>
            <CreateProduct data={state.data} />
            <div className="margin-top">
                <div className="main-content">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getData.map((data, i) => {
                                    if (data.category === "Shop page"){
                                        const imgUrl = 'http://206.189.124.254:9000' + data.image
                                        return (
                                            <tr key={data._id}>
                                                <td>{data.name}</td>
                                                <td>{data.price}</td>
                                                <td>{data.quantity}</td>
                                                <td><img src={imgUrl} alt="img" width="50" height="50" /></td>
                                                <td>{data.description}</td>
                                                <td>{data.category}</td>
                                                <td><Button variant="primary" onClick={() => setModalShow(true)}><button value={data._id} onClick={e => onEdit(e)} >Edit</button></Button></td>
                                                <td><button value={data._id} onClick={e => onDelete(e)} >Delete</button></td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <ProductModal editdata={edit.data} show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}


export default Product