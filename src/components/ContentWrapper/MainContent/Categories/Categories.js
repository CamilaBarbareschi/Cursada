import React from 'react'
import CardCaterogry from "./CardCategory"

export default function Categories() {
    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <CardCaterogry number="1"/>
                        <CardCaterogry number="2"/>
                        <CardCaterogry number="3"/>
                        <CardCaterogry number="4"/>
                        <CardCaterogry number="5"/>
                        <CardCaterogry number="6"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
