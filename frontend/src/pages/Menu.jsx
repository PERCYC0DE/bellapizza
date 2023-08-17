import Layout from "../routes/Layout";
import "../styles/Menu.css";
import MenuCard from "../components/MenuCard";
import { VideoLoop } from "../videos/VideoLoop";
import Resume from "../components/Resume";

function Menu() {
  const productos = [
    {
      id: 1,
      categoria: "pizzas",
      titulo: "Pizza de mozzarella",
      descripcion:
        "Pizza de mozzarella al molde con salsa de tomate, mozzarella fresca derretida y un toque de orégano, ¡una combinación irresistible de sabores en cada bocado!",
      precio: "2200",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908563/productos%20Bella%20pizza/muzzarella1_nrjkfq.png",
    },
    {
      id: 2,
      categoria: "pizzas",
      titulo: "Pizza napolitana",
      descripcion:
        "Pizza napolitana hecha al molde salsa de tomate, mozzarella fresca, albahaca fresca y un toque de aceite de oliva, ¡una auténtica delicia italiana lista para deleitar tus sentidos!",
      precio: "2500",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908563/productos%20Bella%20pizza/napolitana_1_tarpdk.png",
    },
    {
      id: 3,
      categoria: "pizzas",
      titulo: "Pizza de jamón y morrón",
      descripcion:
        "Pizza de mozzarella fresca  de búfala con jamón y morrón hecha al horno, ¡una explosión de sabores mediterráneos que te cautivarán!",
      precio: "2900",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908563/productos%20Bella%20pizza/jamonymorron_1_btz4si.png",
    },
    {
      id: 4,
      categoria: "empanadas",
      titulo: "Empanada de carne",
      descripcion: "Empanada de carne cortada a cuchillo - Precio x Unidad.",
      precio: "300",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908562/productos%20Bella%20pizza/empanada_carne_1_actncy.png",
    },
    {
      id: 5,
      categoria: "empanadas",
      titulo: "Empanada de JyQ",
      descripcion: "Empanada de jamón y queso",
      precio: "300",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908562/productos%20Bella%20pizza/empanada_jamonyqueso_2_wysyp1.png",
    },
    {
      id: 6,
      categoria: "empanadas",
      titulo: "Empanada de atún",
      descripcion: "Precio x Unidad.",
      precio: "300",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908562/productos%20Bella%20pizza/empanada_atun_1_wieons.png",
    },
    {
      id: 7,
      categoria: "empanadas",
      titulo: "Media docena empanadas",
      descripcion: "Media docena a eleccion ",
      precio: "1700",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908562/productos%20Bella%20pizza/empanada_jamonyqueso_2_wysyp1.png",
    },
    {
      id: 8,
      categoria: "empanadas",
      titulo: "Una docena - empanadas",
      descripcion: "Una docena a elección",
      precio: "3400",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908562/productos%20Bella%20pizza/empanada_jamonyqueso_2_wysyp1.png",
    },
    {
      id: 9,
      categoria: "postres",
      titulo: "Bombones 9 unidades",
      descripcion: "9 bombones de chocolate negro.",
      precio: "2000",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908562/productos%20Bella%20pizza/bombones_1_xg2wek.png",
    },
    {
      id: 10,
      categoria: "postres",
      titulo: "Palito bombón",
      descripcion: "Hecho con crema americana y chocolate.",
      precio: "600",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908563/productos%20Bella%20pizza/helado_1_tnrjau.png",
    },
    {
      id: 11,
      categoria: "postres",
      titulo: "Almendrado",
      descripcion: "Postre de helado con almendras.",
      precio: "1600",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908562/productos%20Bella%20pizza/almendrado_1_pvseno.png",
    },
    {
      id: 12,
      categoria: "bebidas",
      titulo: "Pepsi cola",
      descripcion: "Pepsi cola de 450cc",
      precio: "500",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908563/productos%20Bella%20pizza/gaseosa_1_yonp64.png",
    },
    {
      id: 13,
      categoria: "bebidas",
      titulo: "Agua mineral Nestle",
      descripcion: "Agua mineral de 500cc",
      precio: "300",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908562/productos%20Bella%20pizza/agua_1_ryoyep.png",
    },
    {
      id: 14,
      categoria: "bebidas",
      titulo: "Brahma",
      descripcion: "Lata de cerveza Brahma de 470cc",
      precio: "600",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908562/productos%20Bella%20pizza/cerveza_1_kfjihf.png",
    },
    {
      id: 15,
      categoria: "promocion",
      titulo: "6 empanadas + 2 Muzza",
      descripcion: "2 pizzas de muzzarella + 6 empanadas a elección",
      precio: "5000",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908449/ofertas_rkodnt.png",
    },
    {
      id: 16,
      categoria: "promocion",
      titulo: "1 Muzza + 1 JyM + 1 Napo",
      descripcion:
        "1 pizza de Muza + 1 pizza de jamón y morrón + 1 pizza Napolitana",
      precio: "7000",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908449/ofertas_rkodnt.png",
    },
    {
      id: 17,
      categoria: "promocion",
      titulo: "1 Pizza JyM + 2 Pepsi cola",
      descripcion: "1 pizza de jamón y morrón + 2 pepsi cola de 450cc  ",
      precio: "3500",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908449/ofertas_rkodnt.png",
    },
    {
      id: 18,
      categoria: "promocion",
      titulo: "1 Pizza JyM + 2 Brahma",
      descripcion: "1 pizza de jamón y morrón + 2 latas de Brahma 470cc  ",
      precio: "3900",
      imagen:
        "https://res.cloudinary.com/do5fnhctm/image/upload/v1687908449/ofertas_rkodnt.png",
    },
  ];

  return (
    <>
      <Layout>
        <div className="menu-page-container">
          <div className="side-menu-banner">
            <div className="menu-banner">
              <VideoLoop />
            </div>
          </div>

          <div className="menu-list">

            <div className="product-section">
              <span className="section-title">Promociones</span>
              <div className="section-columns">
                {productos
                  .filter((producto) => producto.categoria == "promocion")
                  .map((promo, i) => (
                    <div className="product-card" key={i}>
                      <MenuCard producto={promo} />
                    </div>
                  ))}
              </div>
            </div>

            <div className="product-section">
              <span className="section-title">Pizzas de la casa</span>
              <div className="section-columns">
                {productos
                  .filter((producto) => producto.categoria === "pizzas")
                  .map((pizza, i) => (
                    <div className="product-card" key={i}>
                      <MenuCard producto={pizza} />
                    </div>
                  ))}
              </div>
            </div>

            <div className="product-section">
              <span className="section-title">Empanadas</span>
              <div className="section-columns">
                {productos
                  .filter((producto) => producto.categoria === "empanadas")
                  .map((empanada, i) => (
                    <div className="product-card" key={i}>
                      <MenuCard producto={empanada} />
                    </div>
                  ))}
              </div>
            </div>

            <div className="product-section">
              <span className="section-title">Postres</span>
              <div className="section-columns">
                {productos
                  .filter((producto) => producto.categoria === "postres")
                  .map((postre, i) => (
                    <div className="product-card" key={i}>
                      <MenuCard producto={postre} />
                    </div>
                  ))}
              </div>
            </div>

            <div className="product-section">
              <span className="section-title">Bebidas</span>
              <div className="section-columns">
                {productos
                  .filter((producto) => producto.categoria === "bebidas")
                  .map((bebida, i) => (
                    <div className="product-card" key={i}>
                      <MenuCard producto={bebida} />
                    </div>
                  ))}
              </div>
            </div>

          </div>

          <div className="resume-container-x">
            <div className="resume"><Resume /></div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Menu;
