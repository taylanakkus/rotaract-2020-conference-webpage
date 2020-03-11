import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
class Header extends Component {
    render() {
        return (
            <header className="header_area">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container box_1620">


                            <Link to='/' className='navbar-brand logo_h'>
                                <img src="img/konferans-logo.png" alt="" width="180" />
                            </Link>


                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav justify-content-end">
                                    <li className="nav-item active">
                                        <Link to='/' className='nav-link'><span>A</span>nasayfa</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/otel' className='nav-link'>Otel</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/mesajlar' className='nav-link'>Mesajlar</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link smooth to={{ pathname: '/', hash: '#paketler' }} className='nav-link'>
                                            Paketler
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/katilim' className='nav-link'>Katılımcı Listesi</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link smooth to={{ pathname: '/', hash: '#program' }} className='nav-link'>
                                            Program
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/iletisim' className='nav-link'>İletişim</Link>
                                    </li>
                                </ul>
                                <ul className="nav-right text-center text-lg-right py-4 py-lg-0">
                                    <li>
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2VyA_f9QuGhFVCugh58_jxszZ0-_3by03FWsxDwwZA929VA/viewform" rel="external" target="_blank">Kayıt</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}


export default Header;
