import React, { Component } from 'react'
import Banner from '../banner'

class Participant extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner size={'hero-banner-sm'} />
                <section className="section-margin--large">
                    <div className="container">
                        <div className="d-none d-sm-block mb-5 pb-4">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="contact-title">Katilim</h2>
                                </div>
                                <div className="col-lg-8">


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>

        )
    }
}
export default Participant;