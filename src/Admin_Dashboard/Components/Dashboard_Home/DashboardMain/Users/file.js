import React from 'react'
import { useGetusers } from '../../../Data/UsersData/getuser'
import DashboardTopNav from '../../dashboardtopnav'


function Users() {
    const { data } = useGetusers()
    console.log(data)

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

                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Password</td>
                                <td><button >Edit</button></td>
                                <td><button >Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}



export default Users