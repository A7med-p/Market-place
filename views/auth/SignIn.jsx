const React = require('react')
const Layout = require('../layouts/Layout')

function SignIn (props) {
    return(
        <Layout>
            <div class="card">
                <div class="card-header">
                    <h1>Sign In</h1>
                </div>
                <div class="card-body">
                   <form action="/users/login" method="POST" class="add-form">
                     <label>Email:</label>
                     <input type="email" name="email" class="write"/>
                     <label>Password:</label>
                     <input type="password" name="password" class="write"/>
                     <input type="submit" value="Sign In" class="buy"/>
                   </form> 
                </div>
            </div>  
        </Layout>
    )
}

module.exports = SignIn