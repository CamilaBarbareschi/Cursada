import React from 'react'

export default function Characters(props) {
    let {title:title, img:img} = props
    return (
        <div className="card h-100">
            <img src={`assets/images/${img}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
    )
}
