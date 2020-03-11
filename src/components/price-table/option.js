import React, { Component } from 'react'

class Option extends Component {

    render() {
        const { programDetail } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-4">
                <div className="text-center card-priceTable" style={{ background: "url(" + programDetail.backgroundImagePath + ")" }}>
                    <div className="priceTable-header">
                        <h3>{programDetail.title}</h3>
                        <p>{programDetail.description}</p>

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