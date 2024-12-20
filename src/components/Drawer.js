function Drawer({ onClose, onRemove, items = []}){
    return(
        <div className="overlay">
        <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">Кошик <img className="cu-p" src="/img/btn-remove.svg" alt="Close" onClick={onClose}/></h2>
        {
          items.length > 0 ? (
            <div>
          <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20" >
          
            <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">{obj.title}</p>
              <b>{obj.price} грн.</b>
            </div>
            <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
          </div>
          ))}
          </div>
          <div className="cartTotalBlock">
          <ul>
          <li>
              <span>Всього:</span>
              <div></div>
              <b>10000 грн. </b>
            </li>
            <li>
              <span>Податок 5%:</span>
              <div></div>
              <b>500 грн. </b>
            </li>
            
          </ul>
          <button className="greenButton">Зробити замовлення <img src="img/arrow.svg" alt="Arrow"/></button>
          </div>
          </div>
          ) : 
                  <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                  <img className="mb-20" width={120} height={120} src="/img/empty-cart.jpg" alt="Empty cart" />
                  <h2>Кошик порожній</h2>
                  <p className="opacity-6">Додайте хоча б одну пару кросівок, щоб зробити замовлення.</p>
                  <button onClick={onClose} className="greenButton">
                    <img src="/img/arrow.svg" alt="Arrow"/>Повернутися назад
                  </button>
                </div>
        
        } 
          
      </div>
      </div>
    );
}

export default Drawer; 