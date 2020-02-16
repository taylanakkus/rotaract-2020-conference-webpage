import React, { Component } from 'react'

class Banner extends Component {
    render() {
        const { size } = this.props;
        return (
            <section className={"hero-banner " + size}>
                <div className="container text-center">
                    <span className="hero-banner-icon"><i className="flaticon-sing" /></span>
                    <p>20 - 22 January, 2019, Buffelo City</p>
                    <h1>UX CONFERENCE 2019</h1>

                    <a className="button button-header" href="https://docs.google.com/forms/d/e/1FAIpQLSf2VyA_f9QuGhFVCugh58_jxszZ0-_3by03FWsxDwwZA929VA/viewform" rel="external" target="_blank">Kayıt</a>


                </div>
            </section>
        )
    }
}


export default Banner;