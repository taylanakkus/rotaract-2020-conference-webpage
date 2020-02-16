import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
class Footer extends Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>About Umeet</h6>
                                <p>
                                    The world has become so fast paced that people don’t want to stand by reading a page of information to be
                                    they would much rather look at a presentation and understand the message. It has come to a point where
                                    images and videos are used more to
                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>Navigation Links</h6>
                                <div className="row">
                                    <div className="col">
                                        <ul>
                                            <li className="nav-item active">
                                                <Link to='/'>Anasayfa</Link>
                                            </li>
                                            <li>
                                                <Link to='/otel'>Otel</Link>
                                            </li>
                                            <li>
                                                <Link smooth to={{ pathname: '/', hash: '#paketler' }}>Paketler</Link>
                                            </li>
                                            <li>
                                                <Link to='/katilim'>Katılımcı Listesi</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul>
                                            <li>
                                                <Link smooth to={{ pathname: '/', hash: '#program' }}>
                                                    Program
                                        </Link>
                                            </li>
                                            <li>
                                                <Link to='/iletisim'>İletişim</Link>
                                            </li>
                                            <li>
                                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2VyA_f9QuGhFVCugh58_jxszZ0-_3by03FWsxDwwZA929VA/viewform" rel="external" target="_blank">Kayıt</a>

                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>Newsletter</h6>
                                <p>
                                    For business professionals caught between high OEM price and mediocre print and graphic output.
                </p>
                                <div id="mc_embed_signup">
                                    <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscription relative">
                                        <div className="input-group d-flex flex-row">
                                            <input name="EMAIL" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '" required type="email" />
                                            <button className="btn bb-btn"><span className="lnr lnr-location" /></button>
                                        </div>
                                        <div className="mt-10 info" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3  col-md-6 col-sm-6">
                            <div className="single-footer-widget mail-chimp">
                                <h6 className="mb-20">InstaFeed</h6>
                                <ul className="instafeed d-flex flex-wrap">
                                    <li><img src="img/instagram/i1.jpg" alt="" /></li>
                                    <li><img src="img/instagram/i2.jpg" alt="" /></li>
                                    <li><img src="img/instagram/i3.jpg" alt="" /></li>
                                    <li><img src="img/instagram/i4.jpg" alt="" /></li>
                                    <li><img src="img/instagram/i5.jpg" alt="" /></li>
                                    <li><img src="img/instagram/i6.jpg" alt="" /></li>
                                    <li><img src="img/instagram/i7.jpg" alt="" /></li>
                                    <li><img src="img/instagram/i8.jpg" alt="" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <p className="col-lg-8 col-sm-12 footer-text m-0 text-center text-lg-left">
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright ©
                                All rights reserved | This template is made with
                <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </p>
                            <div className="col-lg-4 col-sm-12 footer-social text-center text-lg-right">
                                <a href="#"><i className="fab fa-facebook-f" /></a>
                                <a href="#"><i className="fab fa-twitter" /></a>
                                <a href="#"><i className="fab fa-dribbble" /></a>
                                <a href="#"><i className="fab fa-behance" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}


export default Footer;