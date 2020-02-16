import React, { Component } from 'react'
import DayItemCard from './day-item-card'

class ProgramDay extends Component {
    render() {
        const { day, isActive, items } = this.props;

        const myList = items;

        if (isActive) console.log('asdasdas');
        return (
            <div id={day} className={"tab-pane " + isActive}>
                {
                    items && items.map(item => (
                        <DayItemCard />
                    ))

                }



            </div>
        )
    }
}

export default ProgramDay;