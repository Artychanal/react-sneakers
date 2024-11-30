import React from 'react';
import styles from './Card.module.scss';

function Card({ onPlus, onFavorite, title, imageUrl, price }){
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
      onPlus({title, imageUrl, price});
      setIsAdded(!isAdded);
    }
    return (
        <div className={styles.card}>
        <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" onClick={onFavorite} />
        </div>
        <img width={133} height={112} src={imageUrl} alt="Sneakers" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Ціна:</span>
            <b>{price} грн.</b>
          </div>
            <img className={styles.plus} onClick={onClickPlus} width={isAdded ? 32 : 20}  height={isAdded ? 32 : 20} src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"} alt="Plus"/>
        </div>
      </div>
    );
}

export default Card;