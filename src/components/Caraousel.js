import React from "react";

export default function Caraousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ marginTop: "2rem" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://files.porsche.com/filestore/image/middle-east/none/homepage-banner-india/normal/c2e54b1f-9285-11e9-80c4-005056bbdc38;sM;twebp/porsche-normal.webp"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Porsche India.</h2>
              <p>Know of our Porsche Centre network in India.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/rd-2018-homepage-banner-ww-992carrera-kw48/normal/7981cd01-f250-11e8-bec8-0019999cd470;sM;twebp/porsche-normal.webp"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Timeless Machine.</h2>
              <p>The 911 Carrera S.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/RD-2023-Homepage-Banner-WW-E3II-%C2%B520KW16/normal/55695a7a-d991-11ed-80ff-005056bbdc38;sM;twebp/porsche-normal.webp"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Further together.</h2>
              <p>The new Cayenne.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/rd-2020-homepage-banner-ww-g2iigts-kw39/normal/2e45657a-f83b-11ea-80ce-005056bbdc38;sM;twebp/porsche-normal.webp"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Drive defines us.</h2>
              <p>The Panamera GTS.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
