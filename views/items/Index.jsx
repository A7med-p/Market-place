const React = require('react')
const Layout = require('../layouts/Layout')

function Index(props) {
    const items = props.items
    return (
        <Layout item={props.item}>
            
            <header>
            <span class="spa"><a href={`/items/new?token=${props.token}`}><button title="Add New Item">➕</button></a></span>
            <span class="spa"><h1>My Page</h1></span>
            <span class="spa"><a href={`/items/home?token=${props.token}`}><button title="Marketplace">🏠</button></a></span>
            </header>

            <div class="component">
            <div class="gallery">
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
            </div>
            </div>
            
        </Layout>
    )
}

module.exports = Index