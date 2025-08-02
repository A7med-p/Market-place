const React = require('react')
const Layout = require('../layouts/Layout')

function Index(props) {
    const items = props.items
    return (
        <Layout item={props.item}>
            <h1>items Index Page</h1>
            <a href={`/items/new?token=${props.token}`}>Post new item</a>
            
                {items.map((item) => {
                    return (
                        
                        <div class="item">
                            <img src={`${item.image}`}></img>
                            <h3>{`${item.name}`}</h3>
                            <p>{`$${item.price} - ${item.location}`}</p>
                            <p><small>{`${item.category}`}</small></p>
                            <a href = {`/items/${item.id}?token=${props.token}`}><button>View Details</button></a>
                        </div>
                        
                    )
                }
                
                )}
            
        </Layout>
    )
}

module.exports = Index