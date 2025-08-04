const React = require('react')
const Layout = require('../layouts/Layout')

function Buy(props){
 return(
   <Layout item={props.item}>
    <div class="component">
    <div class="item-detail">
       <div class="component-header">
        <a href={`/items/home?token=${props.token}`}>Go back to home Page</a>
         <h2>{props.item.name}</h2>
         <p>${props.item.price} - {props.item.location}</p>
       </div>
         <img src={`${props.item.image}`}></img>
     <div class="details-content">
       <div class="detail-item">
        <div class="detail-label">Category:</div>
        <div class="detail-value">{props.item.category}</div>
       </div>
       <div class="detail-item">
        <div class="detail-label">Price:</div>
        <div class="detail-value">${props.item.price}</div>
       </div>
       <div class="detail-item">
        <div class="detail-label">Location:</div>
        <div class="detail-value">{props.item.location}</div>
       </div>
       <div class="detail-item">
        <div class="detail-label">Description:</div>
        <div class="detail-value">{props.item.description}</div>
       </div>
       <div class="detail-item">
        <div class="detail-label">Stock:</div>
        <div class="detail-value">{props.item.stock}</div>
       </div>
       <form action={`/items/cart/add?token=${props.token}`} method="POST">
         <input type="hidden" name="itemId" value={props.item._id} />
         <input type="submit" class="buy" value={`Add ${props.item.name} to Cart`} />
       </form>
    </div>
    </div>
    </div>
   </Layout>
    )
}

module.exports = Buy