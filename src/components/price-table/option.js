import React, { Component } from 'react'

class Option extends Component {

    render() {
        const { programDetail } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-4">
                <div className="text-center card-priceTable">
                    <div className="priceTable-header">
                        <h3>{programDetail.title}</h3>
                        <p>Attend only first day</p>
                        <h1 className="priceTable-price"><span>$</span> 60.00</h1>
                    </div>
                    <ul className="priceTable-list">
                        <li>
                            <span className="position"><i className="ti-check" /></span> Unlimited Entrance
                      </li>
                        <li>
                            <span className="position"><i className="ti-check" /></span> Comfortable Seat
                      </li>
                        <li>
                            <span className="position"><i className="ti-check" /></span> Paid Certificate
                      </li>
                        <li>
                            <span className="negative"><i className="ti-close" /></span> Day One Workshop
                      </li>
                        <li>
                            <span className="negative"><i className="ti-close" /></span> One Certificate
                      </li>
                    </ul>
                    <div className="priceTable-footer">
                        <a className="button" href="#">Kayıt</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default Option;