import React, { Component } from 'react'
import './pricetable.css'
class Option extends Component {

    render() {
        const { programDetail } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-4">
                <div className="text-center card-priceTable">
                    <div className="priceTable-header">
                        <h3 style={{ backgroundImage: 'url("/img/firca.png")', backgroundPositionX: -10, backgroundPositionY: -25, color: "white", fontFamily: 'willyWonka' }}>{programDetail.title}</h3>
                        <div className='priceTable-image'>
                            <img src={programDetail.backgroundImagePath} width="320"></img>
                        </div>

                        <p style={{ fontSize: '1.5rem', marginTop: '10px' }}>{programDetail.description}</p>

                        {programDetail.earlyPrice ? (
                            <h1 className="priceTable-price" style={{ fontSize: '1.5em' }}>Erken - {programDetail.earlyPrice} ₺</h1>
                        ) : ('')}


                        <h1 className="priceTable-price" style={{ fontSize: '1.5em' }}>Normal - {programDetail.normalPrice} ₺</h1>
                    </div>

                    <div className="priceTable-footer">
                        <a className="button">Kayıt</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default Option;