import React, {useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useProduct } from '../../../Data/ProductData/productdata';
import SalesModal from './salesmodal';


function FirstSales(){
    const [modalShow, setModalShow] = useState(false);
    const [state, setState] = useState("")
    let {datap} = useProduct()

    const getId = (e) =>{
      let get = e.target.value
       setState(get)
    }



    return(
        <div>
            <table>
               <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Create Sales</th>
                    </tr>
               </thead>
               <tbody>
                    {
                        datap.map(data => {
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
                                            <td><Button variant="primary" onClick={() => setModalShow(true)}><button onClick={(e) => getId(e)} value={data._id}>Make sales</button></Button></td>
                                        </tr>
                                    )
                            }
                        })
                    }
               </tbody>
            </table>
            <SalesModal id={state}  show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}




export default FirstSales