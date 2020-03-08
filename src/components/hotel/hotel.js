import React, { Component } from 'react'
import Banner from '../banner'
import Carousel from './carousel'
class Hotel extends Component {
    render() {
        return (

            <React.Fragment>
                <Carousel />
                <section className="section-margin--large">
                    <div className="container">
                        <div className="d-none d-sm-block mb-5 pb-4">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="contact-title">Otel Yer ve İletişim Bilgisi</h2>
                                </div>
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="map">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12604.77329229772!2d27.2406475!3d37.8323598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x43951a7aa4a65c8!2sSealight%20Resort%20Hotel%20KU%C5%9EADASI!5e0!3m2!1str!2str!4v1583417680647!5m2!1str!2str" width={600} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen />

                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            {/* <h2>Otel iletişim:</h2>
                                            <p>Adres: Yavansu Mahallesi, Boyalik Mevkii, 09400
                                                    Kuşadası / Aydın</p>
                                            <span>İletişim: </span>
                                            <p>
                                                İrtibat no: <a href="telno:+90256 622 31 32">0256 622 31 32</a>
                                            </p>
                                            <p>
                                                E-posta Adresi: <a href="mailto:info@sealighthotel.com">info@sealighthotel.com</a>
                                            </p> */}

                                            <div className="row">
                                                <div className="col-4"><i class="fas fa-map-marker-alt" style={{ fontSize: '2em' }}></i></div>
                                                <div className="col-8"><p>Adres: Yavansu Mahallesi, Boyalik Mevkii, 09400
                                                    Kuşadası / Aydın</p></div>
                                                <div className="col-4"><i class="fas fa-phone" style={{ fontSize: '2em' }}></i></div>
                                                <div className="col-8">
                                                    <a href="telno:+90256 622 31 32">0256 622 31 32</a>
                                                    <br />
                                                    <br />
                                                    <br />
                                                </div>
                                                <div className="col-4"><i class="fas fa-envelope" style={{ fontSize: '2em' }}></i></div>
                                                <div className="col-8">
                                                    <a href="telno:+90256 622 31 32"><a href="mailto:info@sealighthotel.com">info@sealighthotel.com</a></a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >

        )
    }
}

export default Hotel