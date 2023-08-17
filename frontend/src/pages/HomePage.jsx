import { Link } from "react-router-dom";
import Layout from "../routes/Layout";
import "../styles/HomePage.css";
import { VideoLoop, FirstAdd, SecondAdd, BothAdds } from "../videos/VideoLoop";

function HomePage() {
  return (
    <Layout>
      {/* <p>Children de Layout HomePage</p> */}
      <div className="landing-container">
        <div className="banner-container">
          <div className="banner-text-container">
            <h2 className="banner-text banner-text1">EL SABOR DE ITALIA</h2>
            <h2 className="banner-text banner-text2">EN CADA PORCIÓN</h2>
          </div>
        </div>

        <div className="info-carousel-container">
          <div className="banner-video">
            <VideoLoop />
          </div>

          <div className="info-text-container">
            <span className="promotion-info">
              No te pierdas las promos de la semana en la sección promociones
            </span>
            <div className="column-container">
              <div className="column-info">
                <span className="title-info anton-32">HORARIOS</span>
                <span className="description-info anton-24">
                  martes a domingo desde 18hs hasta 00hs
                </span>
              </div>

              <div className="column-info">
                <span className="title-info anton-32">DIRECCION</span>
                <span className="description-info anton-24">
                  Calle San Martín 1854 Ciudad de La Plata
                </span>
              </div>
            </div>
            <div className="order-section">
              <span className="description-info anton-32">
                Realiza tu pedido
              </span>
              <Link to="/menu" className="link">
                <span className="menu-button anton-32">IR AL MENÚ</span>
              </Link>
            </div>
          </div>
          <div className="banner-delivery">
            <img
              src="https://res.cloudinary.com/do5fnhctm/image/upload/v1687829404/Delivery_z0ebqp.png"
              alt=""
            />
          </div>
        </div>

        <div className="mobile-add-container">
          <div className="first-add">
            <FirstAdd />
          </div>
          <div className="second-add">
            <SecondAdd />
          </div>
          <div className="both-adds">
            <BothAdds />
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default HomePage;
