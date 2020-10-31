import React from 'react'

function ThirdSectionHome(){

    return(
        <div>
            <div className="header flex space-btw align-item">
                <div><h3>Top Selling Products</h3></div>
                <div></div>
            </div><hr />
            <div className="items">
                <div className="flex space-btw align-item">
                    <div><img src={require('../../../../images/img1.jpeg')} alt="" width="50" /></div>
                    <div className="items-text-one">
                        <li style={{fontWeight:"bold", fontSize:"larger", paddingBottom:"5px"}}>Google Home</li>
                        <li style={{opacity:"0.5", fontSize:"14px"}}>USB Wireless</li>
                    </div>
                    <div className="items-text-two">
                        <li style={{ fontWeight: "bold", fontSize: "larger", paddingBottom: "5px" }}>₦ 129.00</li>
                        <li style={{opacity:"0.5"}}>Sales</li>
                    </div>
                </div>
            <hr/>

                <div className="flex space-btw align-item">
                    <div><img src={require('../../../../images/img2.jpeg')} alt="" width="50" /></div>
                    <div className="items-text-one">
                        <li style={{ fontWeight: "bold", fontSize: "larger", paddingBottom: "5px" }}>Google Home</li>
                        <li style={{ opacity: "0.5", fontSize: "14px" }}>USB Wireless</li>
                    </div>
                    <div className="items-text-two">
                        <li style={{ fontWeight: "bold", fontSize: "larger", paddingBottom: "5px" }}>₦ 129.00</li>
                        <li style={{ opacity: "0.5" }}>Sales</li>
                    </div>
                </div>
                <hr />

                <div className="flex space-btw align-item">
                    <div><img src={require('../../../../images/img3.jpeg')} alt="" width="50" /></div>
                    <div className="items-text-one">
                        <li style={{ fontWeight: "bold", fontSize: "larger", paddingBottom: "5px" }}>Google Home</li>
                        <li style={{ opacity: "0.5", fontSize: "14px" }}>USB Wireless</li>
                    </div>
                    <div className="items-text-two">
                        <li style={{ fontWeight: "bold", fontSize: "larger", paddingBottom: "5px" }}>₦ 129.00</li>
                        <li style={{ opacity: "0.5" }}>Sales</li>
                    </div>
                </div>
                <hr />
            </div>

        </div>
    )
}

export default ThirdSectionHome