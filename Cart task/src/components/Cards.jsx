import React from 'react'
import '../styles/Card.css'


const Cards = ({item,handleClick}) => {
    const{id,title,description,price,discountPercentage, rating,stock, brand,category,images}=item;
      return (
    <div className='cards'>
        <div className='image_box'>
            <img src={images} alt="Image"/>
        </div>
        <div className='details'>
          <p>{id}</p>
            <p>{title}</p> 
            <p>{description}</p>
            <p>{price}</p>
            <p>{discountPercentage}</p>
            <p>{ rating}</p>
           <p>{stock}</p>
           <p>{ brand}</p>
           <p>{category}</p>
            <button onClick={()=>handleClick(item)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards