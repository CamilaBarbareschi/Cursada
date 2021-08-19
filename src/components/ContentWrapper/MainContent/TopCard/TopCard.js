import React from 'react'
import './topcard.css'

function TopCard(props) {
    return (
        props.topCard.map((card, idx) => {
            return (
                <div className="col-md-4 mb-4" key={idx}> 
                    <div className={`card border-left-${card.color} shadow h-100 py-2`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className={`text-xs font-weight-bold text-${card.color} text-uppercase mb-1`}>{card.title}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{card.quantity}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={`fas fa-${card.icon} fa-2x text-gray-300 topcard-icon`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            )
        })
    )
}

export default TopCard;
