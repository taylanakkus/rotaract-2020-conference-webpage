import React, { Component } from 'react'
import Banner from '../banner'


class Messages extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner size={'hero-banner-sm'} />
                <section className="section-margin--large">
                    <div className="container">
                        <div className="d-none d-sm-block mb-5 pb-4">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="contact-title">Messages</h2>
                                </div>

                                <div className="col-lg-12">
                                    <div className="feature-img">
                                        <img src="/img/messages/asu.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <p>Hep beraber emek verip yorulduğumuz ama yorulmaktan da mutlu olduğumuz bir dönemi geride bırakmak üzereyiz. Bostanlı Rotaract Kulübü olarak; dönemimizin bitişini kutlayacağımız UR. 2440. Bölge 26. Rotaract Konferansı’na ev sahipliği yapıyor olmanın heyecanı içindeyiz.</p>
                                    <p>Başta bizi birbirimize bağlayan değerlerimizden; sonrasında da çikolatanın mutluluk veren birleştirici gücünden ilham alarak hazırlandığımız “Charlie’nin Çikolata Fabrikası” konseptli konferansımızda sizlere bol eğlenceli ve unutulmaz bir konferans deneyimi yaşatabilmek için ilk günden beri büyük bir heyecan içinde çalışmalarımızı yürütüyoruz.</p>
                                    <p>Titizlik ile hazırlandığımız bu süreçte bir aile olduğumuzu bana bir kez daha hissettiren ve birlikte çalışmaktan mutluluk ve gurur duyduğum 2019-2020 Dönemi Bölge Rotaract Temsilcim Burak Terlemez’e, 2014-2015 Bölge Rotaract Temsilcim Can Sezici’ye ve desteğini ve emeğini kulübümüzden hiçbir zaman eksik etmeyen 2015-2016 Bölge Rotaract Temsilcim Yağmur Lena Sezici’ye, Bölgesel Projeler ve Rotary Vakfı Sekreterim İrem Yılmaz’a, Kurumsal Tanıtım ve İletişim Hizmetleri Projeleri Koordinatörüm Gizem Aykut’a, Dönem Başkanım Buket Soyer’e, Geçmiş Dönem Başkanım Simin Sayılır Çuhadaroğlu’na, değerli Bostanlı Rotary ailemize ve canım kulübüm Bostanlı Rotaract Aileme teşekkür ederim.</p>
                                    <p>Siz değerli Rotaractörlerimizi ve Rotaryen büyüklerimizi 8-10 Mayıs 2020 tarihleri arasında Kuşadası Otium Sealight Beach Resort Otel’de ‘ÇİKOLATA tadında’ unutulmaz bir konferans deneyimi yaşamaya davet ediyoruz!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>

        )
    }
}

export default Messages
