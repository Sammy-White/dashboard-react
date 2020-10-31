import React from 'react'


function SixthSectionHome(){

    return(
        <div>
            <div className="header flex space-btw align-item">
                <div><h3>Recent Buyer</h3></div>
                <div></div>
            </div><hr />
            <div className="items">
                <div className="flex space-btw align-item">
                    <div><img src={require('../../../../images/usertwo.png')} alt="" width="50" /></div>
                    <div className="items-text-one">
                        <li style={{ fontWeight: "bold", fontSize: "larger", paddingBottom: "5px", listStyle:"none" }}>Samson Ekene</li>
                    </div>
                    <div className="items-text-two">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SixthSectionHome