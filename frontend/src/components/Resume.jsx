import '../styles/Resume.css'


function Resume() {
  return (
    <div className="resume-container">
        <span className="resume-title">
            Resumen del pedido
        </span>
        {/* Here is where the map should be put in */}
        <div className="product-columns">
            <span className="product-title">Titulo del producto x Cantidad</span>
            <span className="product-total-prize">$8000</span>
        </div>

        <div className="product-columns">
            <span className="product-title">Titulo del producto x Cantidad</span>
            <span className="product-total-prize">$8000</span>
        </div>

        <span className='total-resume'>Total: $TOTAL</span>
    </div>
  )
}

export default Resume