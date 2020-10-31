import React from 'react'
import {NavLink} from 'react-router-dom'
import img from '../../images/user.png'

function DashboardLinks(){
// const currentRoute = useHistory().location.pathname.toLocaleLowerCase()

    return(
        <div>
            <div className="dashboard_links">
                <li className="flex space-btw flex-direction-column"><img src={img} alt="img2" width="100" style={{paddingLeft:"20px"}} /> <span style={{paddingLeft:"30px", paddingTop: "10px", paddingBottom: '40px'}}>Admin</span></li>
                <NavLink activeStyle={{textTransform: "uppercase", fontWeight: "bolder",}}   to="/dashboard">
                <li>Dashboard</li>
                </NavLink>
                <NavLink activeStyle={{ textTransform: "uppercase", fontWeight: "bolder",}}  to="/sales">
                <li>Sales</li>
                </NavLink>
                <NavLink activeStyle={{ textTransform: "uppercase", fontWeight: "bolder", }}  to="/products">
                <li>Product</li>
                </NavLink>
                <NavLink activeStyle={{ textTransform: "uppercase", fontWeight: "bolder", }}  to="/users">
                <li>Users</li>
                </NavLink>
            </div>
            
        </div>
    )
}

export default DashboardLinks