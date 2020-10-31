import React from 'react'


function FourthSectionHome(){

    return(
        <div>
            <div className="header flex space-btw align-item">
                <div><h3>Order Activity</h3></div>
                <div></div>
            </div><hr />
            <div className="items">
                <div className="flex space-btw align-item">
                    <div><h3>Delivered</h3></div>
                    <div className="items-text-one">
                        <li style={{paddingBottom: "5px", listStyle: "none", opacity:"0.9" }}><small>25 mins ago</small></li>
                    </div>
                    <div className="items-text-two">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthSectionHome