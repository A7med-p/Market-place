const React = require('react')

function New (props) {
    return(
        <div item={props.item}>
            <h1>New Item Page</h1>
            <a href={`/items?token=${props.token}`}>Go back to Index Page</a>
            <form action={`/items?token=${props.token}`} method="POST">
                Name: <input type="text" name="name" /><br/>
                Image: <input type="url" name="image" /><br/>
                Prise ($): <input type="number" name="price" /><br/>
                category: <input type="text" name="category" /><br/>
                location: <input type="text" name="location" /><br/>
                description: <textarea name="description"></textarea><br/>
                stock: <input type="number" name="stock" /><br/>
                <input type="submit" value="Post Item" />
            </form>
        </div>
    )
}

module.exports = New