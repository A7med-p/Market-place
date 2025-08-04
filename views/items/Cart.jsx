const React = require('react')
const Layout = require('../layouts/Layout')

function Cart(props) {
    const carts = props.carts
    return (
        <Layout cart={props.cart}>
            <h1>🛒 Cart</h1><a href={`/items/home?token=${props.token}`}>Go back to home Page</a>
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
        </Layout>
    )
}

module.exports = Cart