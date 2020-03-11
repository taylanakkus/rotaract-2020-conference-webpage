import React, { Component } from 'react';
import './banner.css'
export default class Banner2 extends Component {
    render() {
        return (
            <section className={"hero-banner"} style={{ padding: 0, position: 'relative' }}>
                <div className="container text-center">
                    {/* <p>20 - 22 January, 2019, Buffelo City</p>
                <h1>UX CONFERENCE 2019</h1> */}

                    <h1>Mesajlar</h1>
                    {/* <a className="button button-header" href="https://docs.google.com/forms/d/e/1FAIpQLSf2VyA_f9QuGhFVCugh58_jxszZ0-_3by03FWsxDwwZA929VA/viewform" rel="external" target="_blank">Kayıt</a> */}


                </div>

                <video id="videoBG" poster="poster.JPG" autoPlay muted loop>
                    <source src="img/banner/banner-video.mp4" type="video/mp4" />
                </video>
            </section>
        )
    }
}
