import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import DashboardTopNav from '../../dashboardtopnav'
import UsersModal from './usersmodal'


class UsersMain extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            datas: [], 
            modalShow: false
        }

        this.onDelete = this.onDelete.bind(this)
        this.allEdit = this.allEdit.bind(this)

    }

   async componentWillMount(){
        let url = await fetch('http://206.189.124.254:9000/users')
        let data = await url.json()
        this.setState({data})
    }


    allEdit(e){
        const editData = e.target.value
        let datas = []
        datas.push(editData)
        console.log(datas)
        let modalShow = true
        this.setState({modalShow})
        console.log(this.state.modalShow)
    }

    //Delete User
    onDelete(e){
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
                if (res['success'] === 'operation successful'){
                    this.setState({data: this.state.data.filter(data => data._id !== id)})
                }
            })
            .catch(err => {
                console.log(err)
            })

    }


    render() {
        const getData = this.state.data
        
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
                                        return(
                                            <tr key={data._id}>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.phone}</td>
                                                <td>{data.password}</td>
                                                <td><Button variant="primary"><button value={[data._id, data.name, data.email, data.phone, data.password]} onClick={e => this.allEdit(e)}>Edit</button></Button></td>
                                                <td><button value={data._id} onClick={e => this.onDelete(e)}>Delete</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <UsersModal id={this.state.datas}  onHide={this.state.modalShow} />
            </div>
        )
    }
}

export default UsersMain