const React = require('react')

function Edit (props) {
    const { name, _id, image, price, category, location, description } = props.item

    return(
        <div item={props.item}>
            <h1>{name} Edit Page</h1>
            <a href='/items'>Go back to Index Page</a>
            <form action={`/items/${_id}?_method=PUT&token=${props.token}`} method="POST">
                Name: <input type="text" name="name" defaultValue={name}/><br/>
                Image: <input type="url" name="image" defaultValue={image}/><br/>
                Prise in $: <input type="number" name="price" defaultValue={price}/><br/>
                category: <input type="text" name="category" defaultValue={category}/><br/>
                location: <input type="text" name="location" defaultValue={location}/><br/>
                description: <textarea name="description" defaultValue={description}></textarea><br/>
                <input type="submit" value="Update Item" />
            </form>
        </div>
    )
}

module.exports = Edit