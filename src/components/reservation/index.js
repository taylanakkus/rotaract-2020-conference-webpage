import React, { Component } from 'react'
import Banner from '../banner'

class Reservation extends Component {
    render() {
        return (

            <React.Fragment>
                <Banner size={'hero-banner-sm'} />
                <section className="section-margin--large">
                    <div className="container">
                        <div className="d-none d-sm-block mb-5 pb-4">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="contact-title">Get in Touch</h2>
                                </div>
                                <div className="col-lg-8">
                                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScUx4_3EytgS8OcZ589m5C0kFP-g--gzCiBcEbl2GVPuiIPJw/viewform?embedded=true"
                                        width="600" height="1000" frameborder="0" marginheight="0" marginwidth="0">Yükleniyor…</iframe>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>

        )
    }
}

export default Reservation