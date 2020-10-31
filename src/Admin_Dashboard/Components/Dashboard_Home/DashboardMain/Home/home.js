import React from 'react'
import DashboardTopNav from '../../dashboardtopnav'
import FifthSectionHome from './fifthsectionhome'
import FirstSectionHome from './firstsectionhome'
import FourthSectionHome from './fourthsectionhome'
import SecondSectionHome from './secondsectionhome'
import SixthSectionHome from './sixthsectionhome'
import ThirdSectionHome from './thirdsectionhome'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home(){


    return(
        <div>
            <DashboardTopNav />
            <div className="main-content">
                <div className="dashboard_home">
                    <div className="dashboard_home_text">
                        <h2>Ecommerce Dashboard</h2>
                        <small>Dashboard  Ecommerce Dashboard</small><hr/>
                    </div>
                    <FirstSectionHome />
                    <Row className="margin-top">
                        <Col className="dashboard_home_second">
                            <SecondSectionHome />
                        </Col>
                        <Col className="dashboard_home_third margin-left">
                            <ThirdSectionHome />
                        </Col>
                    </Row>

                    <Row className="margin-top">
                        <Col className="dashboard_home_fourth">
                            <FourthSectionHome />
                        </Col>
                        <Col className="dashboard_home_fifth">
                            <FifthSectionHome />
                        </Col>
                        <Col className="dashboard_home_sixth">
                            <SixthSectionHome />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Home