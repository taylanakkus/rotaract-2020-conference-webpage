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
                    <a className="button button-header" href="#">Buy Ticket</a>
                </div>
            </section>
        )
    }
}


export default Banner;