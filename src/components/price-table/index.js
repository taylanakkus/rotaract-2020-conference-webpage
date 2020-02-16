import React, { Component } from 'react'
import Option from './option'

class PriceTable extends Component {
    render() {

        return (
            <section id='paketler' className="section-padding bg-gray">
                <div className="container">
                    <div className="section-intro text-center pb-98px">
                        <p className="section-intro__title">Join the event</p>
                        <h2 className="primary-text">Choose Your Ticket</h2>
                        <img src="img/home/section-style.png" alt="" />
                    </div>
                    <div className="row">
                        <Option />
                        <Option />
                        <Option />
                    </div>

                    <div className="row">
                        <Option />
                        <Option />
                        <Option />
                    </div>

                </div>
            </section>
        )
    }
}

export default PriceTable;