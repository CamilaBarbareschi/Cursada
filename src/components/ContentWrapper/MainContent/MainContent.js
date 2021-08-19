import React from 'react'
import Topbar from './Topbar/Topbar'
import LastProduct from './LastProduct/LastProduct'
import Categories from './Categories/Categories'
import TopCard from './TopCard/TopCard'
import Group from './Characters/Group'

let topCard = [
    {title:"Products in Data Base", color:"primary", icon:"clipboard-list", quantity:"135"}, 
    {title:"Amount in products", color:"success", icon:"dollar-sign", quantity:"$546.456"},
    {title:"Users quantity", color:"warning" , icon:"user-check", quantity:"38"},
]

function MainContent() {
    return (
        <div id="content">

            <Topbar />

            <div className="container-fluid">

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>

                <div className="row">
                    <TopCard  topCard={topCard} />
                </div>

                <div className="row">
    
                    <LastProduct />

                    <Categories />
                    
                </div>

                {/* Nueva sección Personajes */}
                <h3 className="h3"> Personajes de películas</h3>

                {/* Aquí van las tarjetas de cada personaje */}
                    <Group/>

                {/* Fin zona de tarjetas de cada personaje */}
                </div>
                {/* Fin nueva sección Personajes */}
                </div>
    )
};

export default MainContent;