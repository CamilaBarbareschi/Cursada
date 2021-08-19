import React from 'react'
import Characters from './Characters'

export default function Group() {

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <Characters title="Ahsoka" img="ahsoka.jpg" />
                </div>
                <div className="col">
                    <Characters title="Anakin" img="anakin.jpg" />
                </div>
                <div className="col">
                    <Characters title="Batman" img="batman.jpg" />
                </div>
                <div className="col">
                    <Characters title="Hulk" img="hulkSmall.jpg"/>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col">
                    <Characters title="Kylo Ren" img="kyloRen.jpg" />
                </div>
                <div className="col">
                    <Characters title="Luke" img="luke.jpg" />
                </div>
                <div className="col">
                    <Characters title="Obi Wan" img="obiWan.jpg"/>
                </div>
                <div className="col">
                    <Characters title="Dr Strange" img="strange.jpg"/>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col">
                    <Characters title="Superman" img="superman.jpg" />
                </div>
                <div className="col">
                    <Characters title="Yoda" img="yoda.jpg" />
                </div>
                <div className="col">
                    <Characters title="Vegetta" img="vegetta.jpg"/>
                </div>
                <div className="col">
                    <Characters title="Capitan America" img="capAmerica.jpg"/>
                </div>
            </div>
      </React.Fragment>
    )
}
