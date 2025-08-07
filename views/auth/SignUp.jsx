const React = require('react')
const Layout = require('../layouts/Layout')

function SignUp(props) {
    return (
        <Layout>
            <div class="card">
                <div class="card-header">
                    <h1>Sign Up</h1>
                </div>
                <div class="card-body">
                    <form action="/users" method="POST" class="add-form">
                        <label>Name:</label>
                        <input type="text" name="name" class="write" />
                        <label>Email:</label>
                        <input type="email" name="email" class="write" />
                        <label>Password:</label>
                        <input type="password" name="password" class="write" />
                        <input type="submit" value="Sign Up" class="buy" />
                        <a href="/users/login">i have an account</a>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

module.exports = SignUp