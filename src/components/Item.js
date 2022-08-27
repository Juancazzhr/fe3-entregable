// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { useState } from "react";

export default function Item({ img, nombre, descripcion, stock, action }) {

  const [itemStock, setItemStock] = useState(stock);
  const sinStock = itemStock <= 0;

  const styleImgSinStock = sinStock ? `prodcuto-img-sinStock` : ``;
  const styleH5SpanSinStock = sinStock ? `producto-sinStock` : `producto-stock`;

  const h5SpanContent = sinStock ? `agotado` : itemStock;
  const btnAgregarContent = sinStock ? `Sin stock` : `Agregar al carrito`;

  const agregarItem = () => {
    action(1);
    setItemStock(itemStock - 1);
  }

  const quitarItem = () => {
    action(-1);
    setItemStock(itemStock + 1);
  }

  return (
    <div className={`producto`}>
      <h3>{nombre}</h3>
      <img className={styleImgSinStock} src={img} alt={nombre} />
      <p>{descripcion}</p>
      <h5>Stock <span className={styleH5SpanSinStock}>{h5SpanContent}</span></h5>

      <button className='producto-btn agregar' disabled={sinStock} onClick={agregarItem}>{btnAgregarContent}</button>

      {itemStock !== stock && <button className='producto-btn quitar' onClick={quitarItem}>Quitar del carrito</button>}
    </div>
  )
}
