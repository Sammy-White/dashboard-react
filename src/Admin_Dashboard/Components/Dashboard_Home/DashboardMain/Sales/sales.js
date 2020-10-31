import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import DashboardTopNav from '../../dashboardtopnav'
import FirstSales from './firstsales';
import SecondSales from './secondsales';



function Sales() {


    return (
        <div>
            <DashboardTopNav />
                <div className="margin-top">
                    <div className="main-content">
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Create Sales">
                            <FirstSales />
                        </Tab>
                        <Tab eventKey="profile" title="Sales">
                            <SecondSales />
                        </Tab>
                    </Tabs>   
                    </div>
                </div>
        </div>
    )
}

export default Sales