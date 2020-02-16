import React, { Component } from 'react'
import Banner from '../banner';
import PriceTable from '../price-table';
import Program from '../program';
class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner />
                <PriceTable />
                <Program />
            </React.Fragment>
        )
    }
}

export default HomePage
