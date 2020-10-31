import React from 'react'
import { Link } from 'react-router-dom'

function DashboardTopNav(){

    return(
        <div className="flex space-btw">
            <div></div>
                <div className="dropdown">
                    <div className="dropdown-btn"><img src={require("../../images/power.png")} alt="" width='30' /></div>
                    <div className="dropdown-content">
                    <Link to="/"> <span>Logut</span></Link>
                    </div>
                </div>
        </div>
    )
}

export default DashboardTopNav