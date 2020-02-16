import React, { Component } from 'react'
import ProgramDay from './program-day'
import DayTab from './day-tab'
import DayItemCard from './day-item-card'

class Program extends Component {




    render() {
        const day1Items = [1, 2, 3]
        const day2Items = [1, 2, 3, 4, 5]
        const day3Items = [1, 2, 3, 2, 2, 4, 5]
        const day4Items = [1]
        return (
            <section id='program' className="section-margin--large mb-5 pb-5">
                <div className="container">
                    <div className="section-intro text-center pb-98px">
                        <p className="section-intro__title">Join the event</p>
                        <h2 className="primary-text">Conference Schedule</h2>
                        <img src="img/home/section-style.png" alt="" />
                    </div>
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="scheduleTab">
                                <DayTab />
                                {/* Tab panes */}
                                <div className="tab-content">
                                    <ProgramDay day={"day1"} items={day1Items} isActive='active' />
                                    <ProgramDay day={"day2"} items={day2Items} />
                                    <ProgramDay day={"day3"} items={day3Items} />
                                    <ProgramDay day={"day4"} items={day4Items} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Program