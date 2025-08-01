const React = require('react')

function Index(props) {
    const items = props.items
    return (
        <div item={props.item}>
            <h1>items Index Page</h1>
            <a href={`/items/new?token=${props.token}`}>Post new item</a>
            <ul>
                {items.map((item) => {
                    return (
                        <li>
                        <div>
                            <img src={`${item.image}`}></img>
                            <h3>{`${item.name}`}</h3>
                            <p>{`$${item.price} - ${item.location}`}</p>
                            <p><small>{`${item.category}`}</small></p>
                            <a href = {`/items/${item.id}?token=${props.token}`} ><button>View Details</button></a>
                        </div>
                        </li>
                    )
                }
                
                )}
            </ul>
        </div>
    )
}

module.exports = Index