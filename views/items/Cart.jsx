const React = require('react')
const Layout = require('../layouts/Layout')

function Cart(props) {
    const carts = props.carts
    const totalPrice = carts.reduce((sum, item) => sum + parseFloat(item.price), 0)

    return (
        <Layout cart={props.cart}>
            <header>
            <span class="spa"><h1>🛒 Cart</h1></span>
            <span class="spa"><a href={`/items/home?token=${props.token}`}><button>Home page</button></a></span>
            </header>
            
            <div class="component">
            <div class="gallery">
            {carts.length === 0 && <p>Your cart is empty.</p>}
            {carts.map((item) => {
                return (
                    <div class="item" key={item._id}>
                        <img src={item.image}></img>
                        <h3>{item.name}</h3>
                        <p>${item.price} - {item.location}</p>
                        <p><small>{item.category}</small></p>
                        <form action={`/items/cart/remove?token=${props.token}`} method="POST">
                            <input type="hidden" name="itemId" value={item._id} />
                            <input type="submit" class="delete" value={`Remove ${item.name} from Cart`} />
                        </form>
                    </div>
                )
            })}
            </div>
            </div>
            {carts.length > 0 && (
              <div>
                <h2>Total: ${totalPrice.toFixed(2)}</h2>
                  <form action={`/items/cart/buy?token=${props.token}`} method="POST">
                   <input type="submit" class="buy" value="Buy" />
                  </form>
              </div>
            )}
        </Layout>
    )
}

module.exports = Cart