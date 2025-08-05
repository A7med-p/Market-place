const React = require('react')
const Layout = require('../layouts/Layout')

function Edit (props) {
    const { name, _id, image, price, category, location, description,stock } = props.item

    return(
        <Layout item={props.item}>
            <div class="component-header">
                <h1>{name} Edit Page</h1>
            <a href={`/items/${_id}?token=${props.token}`}><button>Home page</button></a>
            </div>
            
            <form action={`/items/${_id}?_method=PUT&token=${props.token}`} method="POST" class="add-form">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" name="name" class="write" placeholder="Enter item name" defaultValue={name} required />
                </div>
                <div class="form-group">
                    <label>Image URL</label>
                    <input type="text" name="image" class="write" placeholder="Enter image URL" defaultValue={image} required />
                </div>
                <div class="form-group">
                    <label>Price ($)</label>
                    <input type="number" name="price" class="write" placeholder="Enter the price in $" min="0" step="0.01" defaultValue={price} required />
                </div>
                <div class="form-group">
                    <label>Category</label>
                    <input type="text" name="category" class="write" placeholder="Enter item category" defaultValue={category} required />
                </div>
                <div class="form-group">
                    <label>Location</label>
                    <input type="text" name="location" class="write" placeholder="Enter location" defaultValue={location} required />
                </div>
                <div class="form-group">
                        <label>Description</label>
                        <textarea name="description" class="write" rows="3" placeholder="Enter description" defaultValue={description} required></textarea>
                </div>
                <div class="form-group">
                    <label>Stock</label>
                    <input type="number" name="stock" class="write" placeholder="Enter the stock" min="0" defaultValue={stock} required />
                </div>
                <input type="submit" class="buy" value="Update Item" />
            </form>
            
        </Layout>
    )
}

module.exports = Edit