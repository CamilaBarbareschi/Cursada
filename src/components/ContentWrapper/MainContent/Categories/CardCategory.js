import React from 'react'

export default function CardCategory(props) {
    let {number:number} = props
    return (
        <div className="col-lg-6 mb-4">
                            <div className="card bg-info text-white shadow">
                                <div className="card-body">
                                  Category {number}
                                </div>
                            </div>
                         </div>
    )
}