import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import DashboardTopNav from '../../dashboardtopnav'
import UsersModal from './usersmodal';


function Users() {
    const [state, setState] = useState({ data: [] })
    const [modalShow, setModalShow] = useState(false);
    const [id, setId] = useState("")
    const [edit, setEdit] = useState({data:[]})
    const getData = state.data

    useEffect(() => {
        fetch('http://206.189.124.254:9000/users')
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
        fetch('http://206.189.124.254:9000/user/' + id, {
            method: 'DELETE',
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(res => {
                console.log(res)
                if (res['success'] === 'operation successful') {
                   setState({data: state.data.filter(data => data._id !== id)})
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetch('http://206.189.124.254:9000/user/' + id)
            .then(res => {
                return res.json()
            }).then(res => {
                // console.log(res)
                setEdit({data:res})
            })
    }, [id])

    // console.log(edit)
    return (
        <div>
            <DashboardTopNav />
            <div className="margin-top">
                <div className="main-content">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Password</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getData.map(data => {
                                    return (
                                        <tr key={data._id}>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.phone}</td>
                                            <td>{data.password}</td>
                                            <td><Button variant="primary" onClick={() => setModalShow(true)}><button value={data._id}   onClick={e => onEdit(e)} >Edit</button></Button></td>
                                            <td><button value={data._id} onClick={e => onDelete(e)} >Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <UsersModal editdata={edit.data} show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}



export default Users