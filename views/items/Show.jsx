const React = require('react')
const Layout = require('../layouts/Layout')

function Show(props){
 return(
   <Layout item={props.item}>
       <div class="component-header">
        <a href={`/items?token=${props.token}`}>Go back to Index Page</a>
         <h2>{props.item.name}</h2>
         <p>${props.item.price} - ${props.item.location}</p>
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
       <form action={`/items/${props.item._id}?_method=DELETE&token=${props.token}`} method="POST">
        <input type="submit" value={`Delete this ${props.item.name}`}/>
       </form>
       <div>
         <a href={`/items/${props.item._id}/edit?token=${props.token}`}><button>{`Edit this ${props.item.name}`}</button></a>
       </div>
     </div>
   </Layout>
    )
}

module.exports = Show