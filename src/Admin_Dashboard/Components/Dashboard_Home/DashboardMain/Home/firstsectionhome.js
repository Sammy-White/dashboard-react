import React from 'react'
import salesImg from  '../../../../images/rb.jpg'
import productImg from '../../../../images/rap.jpg'
import revenueImg from '../../../../images/raggae.jpg'
import usersImg from '../../../../images/soul&funk.jpg'
import { useSales } from '../../../Data/SalesData/salesdata'
import { useProduct } from '../../../Data/ProductData/productdata'
import { useGetusers } from '../../../Data/UsersData/getuser'

function FirstSectionHome(){
    const { data } = useSales()
    const {datap} =  useProduct()
    const {datau} = useGetusers()

    let total = 0
    data.map(data => {
       total += data.total_price
    })
    // console.log(total)
    return(
        <div className="dashboard_home_first">
            <div 
                style={{
                    background: `url(${salesImg})`, 
                    backgroundSize: "cover", 
                    height: '200px'
                }}>
                <div className="sales_box flex space-btw align-item">
                    <div className="sales_text">
                        <li id="name">New Sales</li>
                        <li id="amount">{data.length}</li>
                    </div>
                    <div>
                        <img src={require('../../../../images/sales.png')} alt="" width="50" />
                    </div>
                </div>
            </div>

            <div
                style={{
                    background: `url(${revenueImg})`,
                    backgroundSize: "cover",
                    height: '200px'
                }}>
                <div className="sales_box flex space-btw align-item">
                    <div className="sales_text">
                        <li id="name">Total Revenue</li>
                        <li id="amount">{total}</li>
                    </div>
                    <div>
                        <img src={require('../../../../images/revenueone.png')} alt="" width="50" />
                    </div>
                </div>
            </div>

            <div 
                style={{ 
                    background: `url(${productImg})`, 
                    backgroundSize: "cover", 
                    height: '200px' 
                }}>
                <div className="sales_box flex space-btw align-item">
                    <div className="sales_text">
                        <li id="name">Total Products</li>
                        <li id="amount">{datap.length}</li>
                    </div>
                    <div>
                        <img src={require('../../../../images/product.png')} alt="" width="50" />
                    </div>
                </div>
            </div>

            <div 
                style={{ 
                    background: `url(${usersImg})`, 
                    backgroundSize: "cover", 
                    height: '200px' 
                }}>
                <div className="sales_box flex space-btw align-item">
                    <div className="sales_text">
                        <li id="name">Total Users</li>
                        <li id="amount">{datau.length}</li>
                    </div>
                    <div>
                        <img src={require('../../../../images/userone.png')} alt="" width="50" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FirstSectionHome