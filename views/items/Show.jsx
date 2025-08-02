const React = require('react')

function Show(props){
 return(
   <div item={props.item}>
       <div>
        <a href={`/fruits?token=${props.token}`}>Go back to Index Page</a>
         <h2>{props.item.name}</h2>
         <p>${props.item.price} - ${props.item.location}</p>
       </div>
         <img src={`${props.item.image}`}></img>
     <div>
       <div>
         <div>Category: {props.item.category}</div>
       </div>
       <div>
         <div>Price: ${props.item.price}</div>
       </div>
       <div>
         <div>Location: {props.item.location}</div>
       </div>
       <div>
         <div>Description: {props.item.description}</div>
       </div>
       <form action={`/items/${props.item._id}?_method=DELETE&token=${props.token}`} method="POST">
        <input type="submit" value={`Delete this ${props.item.name}`}/>
       </form>
       <div>
         <a href={`/items/${props.item._id}/edit?token=${props.token}`}><button>{`Edit this ${props.item.name}`}</button></a>
       </div>
     </div>
   </div>
    )
}

module.exports = Show