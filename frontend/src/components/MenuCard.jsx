import "../styles/MenuCard.css";

function MenuCard({ producto }) {
  return (
    <>
      <div className="product-card-menu-container">
        <div className="product-card-title-description">
          <div className="product-card-title">{producto.titulo}</div>
          <div className="product-card-description">{producto.descripcion.length <= 48 ? producto.descripcion : producto.descripcion.slice(0,51) + "..."}</div>
          <div className="product-card-price">${producto.precio}</div>
        </div>

        <div className="img-container">
          <img className="img-menu" src={producto.imagen} alt="product-photo" />
        </div>
      </div>
    </>
  );
}

export default MenuCard;
