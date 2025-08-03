const React = require('react')
const Layout = require('../layouts/Layout')

function Home(props) {
    const items = props.items
    return (
        <Layout item={props.item}>
            
            <h1>Home Page</h1>
            
                {items.map((item) => {
                    return (
                        
                        <div class="item">
                            <img src={`${item.image}`}></img>
                            <h3>{`${item.name}`}</h3>
                            <p>{`$${item.price} - ${item.location}`}</p>
                            <p><small>{`${item.category}`}</small></p>
                            <a href = {`/items/buy/${item._id}`}><button>View Details</button></a>
                        </div>
                        
                    )
                }
                
                )}
            
        </Layout>
    )
}

module.exports = Home