const React = require('react')

function New (props) {
    return(
        <div item={props.item}>
            <h1>New Item Page</h1>
            <a href={`/items?token=${props.token}`}>Go back to Index Page</a>
            <form action={`/items?token=${props.token}`} method="POST">
                Name: <input type="text" name="name" /><br/>
                Image: <input type="url" name="image" /><br/>
                Prise in $: <input type="number" name="name" /><br/>
                category: <input type="text" name="name" /><br/>
                location: <input type="text" name="name" /><br/>
                description: <textarea></textarea><br/>
                <input type="submit" value="Post Item" />
            </form>
        </div>
    )
}

module.exports = New