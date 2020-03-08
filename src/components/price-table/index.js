import React, { Component } from 'react'
import Option from './option'




class PriceTable extends Component {


    render() {
        const programDetails = [{
            'title': 'Veruca',
            'dayStay': '1',
            'personCount': '1',

            'description': ' 1 gece - 1 kişi'
        },
        {
            'title': 'Violet',
            'dayStay': '1',
            'personCount': '2',
            'description': ' 1 gece - 2 kişi'
        },
        {
            'title': 'Charlie',
            'dayStay': '1',
            'personCount': '3',
            'description': ' 1 gece - 3 kişi'
        },
        {
            'title': 'Willy Wonka',
            'dayStay': '2',
            'personCount': '1',
            'description': ' 2 gece - 1 kişi'
        },
        {
            'title': 'Mike TV',
            'dayStay': '2',
            'personCount': '2',
            'description': ' 2 gece - 2 kişi'
        },
        {
            'title': 'Agustus',
            'dayStay': '2',
            'personCount': '3',
            'description': ' 2 gece - 3 kişi'
        },
        {
            'title': 'Grandpa Joe',
            'description': ' Günübirlik'
        },
        {
            'title': 'UmpaLumpa',
            'description': ' Günübirlik - Gala '
        },
        {
            'title': 'Golden Ticket',
            'description': ' Gala'
        },
        ]
        return (
            <section id='paketler' className="section-padding bg-gray">
                <div className="container">
                    <div className="section-intro text-center pb-98px">
                        <p className="section-intro__title">Join the event</p>
                        <h2 className="primary-text">Choose Your Ticket</h2>
                        <img src="img/home/section-style.png" alt="" />
                    </div>
                    <div className="row">
                        <Option programDetail={programDetails[0]} />
                        <Option programDetail={programDetails[1]} />
                        <Option programDetail={programDetails[2]} />
                    </div>

                    <div className="row">
                        <Option programDetail={programDetails[3]} />
                        <Option programDetail={programDetails[4]} />
                        <Option programDetail={programDetails[5]} />
                    </div>
                    <div className="row">
                        <Option programDetail={programDetails[6]} />
                        <Option programDetail={programDetails[7]} />
                        <Option programDetail={programDetails[8]} />
                    </div>

                </div>
            </section>
        )
    }
}
export default PriceTable;