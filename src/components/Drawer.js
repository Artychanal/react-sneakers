function Drawer(){
    return(
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">Кошик <img className="cu-p" src="/img/btn-remove.svg" alt="Remove"/></h2>

          <div className="items">
          <div className="cartItem d-flex align-center mb-20" >
          
          <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
          <div className="mr-20 flex">
            <p className="mb-5">Чоловічі Кросівки Nike Blazer Mid Suede</p>
            <b>5000 грн.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
        </div>

        <div className="cartItem d-flex align-center" >
          
          <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
          <div className="mr-20 flex">
            <p className="mb-5">Чоловічі Кросівки Nike Blazer Mid Suede</p>
            <b>5000 грн.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
        </div>
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
      </div>
    );
}

export default Drawer; 