import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardLinks from './Admin_Dashboard/Components/Dashboard_Home/dashboardlinks';
import Home from './Admin_Dashboard/Components/Dashboard_Home/DashboardMain/Home/home';
import ProductMain from './Admin_Dashboard/Components/Dashboard_Home/DashboardMain/Product/productmain';
import Sales from './Admin_Dashboard/Components/Dashboard_Home/DashboardMain/Sales/sales';
import Users from './Admin_Dashboard/Components/Dashboard_Home/DashboardMain/Users/users';
import SignIn from './Admin_Dashboard/Components/UsersAccount/signin';
import SignUp from './Admin_Dashboard/Components/UsersAccount/signup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'








function App(){

	return(
		<Router>
			<div>
				<Switch>
					<Route path="/" exact component={SignUp} />
					<Route path="/signin" component={SignIn} />
					<Row>
						<Col xs lg="2" className="dashboard_links_background">
							<DashboardLinks />
						</Col>
						<Col sm={10} className="dashboard_main">
							<div >
							<Route path="/dashboard" component={Home} />
							<Route path="/products" component={ProductMain} />
							<Route path="/sales" component={Sales} />
							<Route path="/users" component={Users} />
							</div>
						</Col>
					</Row>
				</Switch>
			</div>
		</Router>
	)
}

export default App





