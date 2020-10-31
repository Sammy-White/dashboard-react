import React from 'react'



function FifthSectionHome(){

    return(
        <div>
            <div className="header flex space-btw align-item">
                <div><h3>Recent Products</h3></div>
                <div></div>
            </div><hr />
            <div className="items">
                <div className="flex space-btw align-item">
                    <div><img src={require('../../../../images/img4.jpeg')} alt="" width="50" /></div>
                    <div className="items-text-one">
                        <li style={{ fontWeight: "bold", fontSize: "larger", paddingBottom: "5px", listStyle:"none" }}>Google Home</li>
                        <li style={{ opacity: "0.5", fontSize: "14px", listStyle:"none" }}>USB Wireless</li>
                    </div>
                    <div className="items-text-two">
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default FifthSectionHome