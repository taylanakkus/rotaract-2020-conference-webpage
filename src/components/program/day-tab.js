import React, { Component } from 'react'

class DayTab extends Component {
    render() {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item text-center">
                    <a className="active" data-toggle="tab" href="#day1">
                        <h4>Day 1</h4>
                        <p>23 jan, 2019</p>
                    </a>
                </li>
                <li className="nav-item text-center">
                    <a data-toggle="tab" href="#day2">
                        <h4>Day 2</h4>
                        <p>23 jan, 2019</p>
                    </a>
                </li>
                <li className="nav-item text-center">
                    <a data-toggle="tab" href="#day3">
                        <h4>Day 2</h4>
                        <p>23 jan, 2019</p>
                    </a>
                </li>
                <li className="nav-item text-center">
                    <a data-toggle="tab" href="#day4">
                        <h4>Day 2</h4>
                        <p>23 jan, 2019</p>
                    </a>
                </li>
            </ul>
        )
    }
}

export default DayTab;