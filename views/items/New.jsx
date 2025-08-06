const React = require('react')
const Layout = require('../layouts/Layout')

function New (props) {
    return(
        <Layout item={props.item}>
            <div class="component-header">
            <h1>create new item</h1>
            <a href={`/items?token=${props.token}`}><button title="Back to My Listings">⬅️</button></a>
            </div>
            
            <form action={`/items?token=${props.token}`} method="POST" class="add-form" >
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" name="name" class="write" placeholder="Enter item name" required />
                </div>
                <div class="form-group">
                    <label>Image URL</label>
                    <input type="text" name="image" class="write" placeholder="Enter image URL" required />
                </div>
                <div class="form-group">
                    <label>Price ($)</label>
                    <input type="number" name="price" class="write" placeholder="Enter the price in $" min="0" step="0.01" required />
                </div>
                <div class="form-group">
                    <label>Category</label>
                    <input type="text" name="category" class="write" placeholder="Enter item category" required />
                </div>
                <div class="form-group">
                    <label>Location</label>
                    <input type="text" name="location" class="write" placeholder="Enter location" required />
                </div>
                <div class="form-group">
                        <label>Description</label>
                        <textarea name="description" class="write" rows="3" placeholder="Enter description" required></textarea>
                </div>
                <div class="form-group">
                    <label>Stock</label>
                    <input type="number" name="stock" class="write" placeholder="Enter the stock" min="0" required />
                </div>
                <input type="submit" class="buy" value="Post Item" />
            </form>
        </Layout>
    )
}

module.exports = New