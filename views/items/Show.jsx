const React = require('react')

function Show(props){
    return(
        <div item={props.item}>
            <div>
                <h2>${item.title}</h2>
                <p>$${item.price} - ${item.location}</p>
            </div>
            <img src={`${item.image}`}></img>
            <div>
                <div>
                    <div>Category:</div>
                    <div>{item.category}</div>
                </div>
                <div>
                    <div>Price:</div>
                    <div>${item.price}</div>
                </div>
                <div>
                    <div>Location:</div>
                    <div>{item.location}</div>
                </div>
                <div>
                    <div>Description:</div>
                    <div>{item.description}</div>
                </div>
                <form action={`/items/${props.item._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete this ${props.item.name}`}/>
            </form>
            <div>
            <a href={`/items/${props.item._id}/edit`}><button>{`Edit this ${props.item.name}`}</button></a>
            </div>
            </div>
        </div>
    )
}

module.exports = Show