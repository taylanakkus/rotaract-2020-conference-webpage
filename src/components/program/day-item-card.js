import React, { Component } from 'react'

class DayItemCard extends Component {
    render() {
        return (
            <div className="schedule-card">
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <div className="card-identity">
                            <img src="img/testimonial/testimonial3.png" alt="" />
                            <h3>Adam Jamsmith</h3>
                            <p>UX/UI Designer</p>
                        </div>
                    </div>
                    <div className="col-md-9 align-self-center">
                        <div className="schedule-content">
                            <p className="schedule-date">9.00 AM - 10.30 AM</p>
                            <a className="schedule-title">
                                <h3>Previous Year achivement</h3>
                            </a>
                            <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DayItemCard;