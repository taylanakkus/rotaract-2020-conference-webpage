import React from 'react'

export default function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="/img/hotel/otel.jpg" alt="Otium Sealight Resort Otel - Foto #1" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="/img/hotel/otel2.jpg" alt="Otium Sealight Resort Otel - Foto #2" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="/img/hotel/otel3.jpg" alt="Otium Sealight Resort Otel - Foto #3" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
