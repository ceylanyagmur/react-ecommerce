import React from 'react';
import './cards.css'

const Cards = ({item, handleClick}) => {
    const {title, author, price, img} = item;
    
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" className="img" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>Fiyat - {price}TL</p>
            <button onClick={()=>handleClick(item)} >Sepete ekle</button>
        </div>
    </div>
  )
}

export default Cards