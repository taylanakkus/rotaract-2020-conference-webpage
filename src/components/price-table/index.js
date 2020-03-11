import React, { Component } from 'react'
import Option from './option'




class PriceTable extends Component {


    render() {
        const programDetails = [{
            'title': 'Veruca',
            'dayStay': '1',
            'personCount': '1',
            'earlyPrice': '520',
            'normalPrice': '560',
            'description': ' 1 gece - 1 kişi',
            'backgroundImagePath': '/img/price-table/veruca.jpg'
        },
        {
            'title': 'Violet',
            'dayStay': '1',
            'personCount': '2',
            'earlyPrice': '355',
            'normalPrice': '395',
            'description': ' 1 gece - 2 kişi',
            'backgroundImagePath': '/img/price-table/violet.jpg'
        },
        {
            'title': 'Charlie',
            'dayStay': '1',
            'personCount': '3',
            'earlyPrice': '330',
            'normalPrice': '370',
            'description': ' 1 gece - 3 kişi',
            'backgroundImagePath': '/img/price-table/charlie.jpg'
        },
        {
            'title': 'Willy Wonka',
            'dayStay': '2',
            'personCount': '1',
            'earlyPrice': '960',
            'normalPrice': '1000',
            'description': ' 2 gece - 1 kişi',
            'backgroundImagePath': '/img/price-table/wonka.jpg'
        },
        {
            'title': 'Mike Teeve',
            'dayStay': '2',
            'personCount': '2',
            'earlyPrice': '630',
            'normalPrice': '670',
            'description': ' 2 gece - 2 kişi',
            'backgroundImagePath': '/img/price-table/miketv.jpg'
        },
        {
            'title': 'Agustus',
            'dayStay': '2',
            'personCount': '3',
            'earlyPrice': '580',
            'normalPrice': '620',
            'description': ' 2 gece - 3 kişi',
            'backgroundImagePath': '/img/price-table/agustus.jpg'
        },
        {
            'title': 'Grandpa Joe',
            'description': ' Günübirlik Toplantı',
            'earlyPrice': '',
            'normalPrice': '170',
            'backgroundImagePath': '/img/price-table/grandpa.jpg'
        },
        {
            'title': 'UmpaLumpa',
            'description': ' Günübirlik - Gala ',
            'earlyPrice': '',
            'normalPrice': '370',
            'backgroundImagePath': '/img/price-table/umpa.jpg'
        },
        {
            'title': 'Golden Ticket',
            'description': ' Gala',
            'earlyPrice': '',
            'normalPrice': '',
            'backgroundImagePath': '/img/price-table/goldenticket.jpg'
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
                    <div className="row" style={{ fontWeight: '500', fontSize: '15px', textAlign: 'left', marginBottom: '40px' }}>
                        <div className="col-lg-8" style={{ marginBottom: '30px' }}>
                            <p>- *İndirimli kayıtlardan faydalanmak isteyen katılımcılarımız, 31 Ocak 2020 tarihine kadar paket ücretinin yarısını yatırmalıdır. Kalan ücreti ise 8 Mart 2020 tarihine kadar göndermelidir.</p>
                            <p>- *1 Şubat 2020 ve sonrasında ödeme yapan katılımcılarımız, normal kayıt ücretlerinden faydalanacaktır. Katılımcılar paket ücretinin yarısını 20 Şubat 2020 tarihine kadar yatırmalıdır. Kalan ücreti ise 8 Mart 2020 tarihine kadar göndermelidir.</p>
                            <p>- *Son kayıt tarihi 20 Şubat 2020’dir. Kaydınızın onaylanması için en geç 20 Şubat 2020 tarihine kadar kaydınızı yaptırıp, katılım ücretinizi ödemiş olmanız gerekmektedir.</p>
                            <p>- <b>*Dekontunuzu katılımcı ve paket ismi belirterek asamble2020@gmail adresine göndermeyi unutmayın.</b></p>
                            <p>- <b>*Otelde ödeme kabul edilmemektedir.</b></p>

                        </div>
                        <div className="col-lg-4">
                            <h2 style={{ textAlign: 'center', marginTop: '0' }}>Banka Bilgileri</h2>
                            <p>QNB Finansbank<br />
                                IBAN : TR14 0011 1000 0000 0089 6536 70<br />
                                Hesap Sahibi : Buket Soyer<br />
                                Hesap Numarası : 89653670<br />
                                Şube Kodu : 03663</p>
                        </div>
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