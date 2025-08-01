# Market-place

a market place is a market ware the user can download the itms that they want to sell or buy an item if they were intrested by receving the item from a certent place.

## To start:
### Installing the Dependencies
```
npm install express mongoose dotenv jsx-view-engine method-override
npm install morgan bcrypt jsonwebtoken
npm install --save-dev jest supertest mongodb-memory-server artillery@1.7.9

```

### Creating the needed files ang folders
```
Market-place/
├── controllers/
│   ├── auth/
│   │   ├── dataController.js    
│   │   ├── viewController.js    
│   │   ├── apiController.js     
│   │   └── routeController.js   
│   └── items/
│       ├── dataController.js    
│       ├── viewController.js    
│       ├── apiController.js     
│       └── routeController.js   
├── models/
│   ├── db.js    
│   ├── item.js    
│   └── user.js   
├── public/
│   └── styles.css 
├── routes/
│   └── apiRoutes.js
├── views/
│   ├── auth/
│   │   ├── SignIn.jsx     
│   │   └── SignUp.jsx   
│   ├── items/
│   │   ├── Edit.jsx    
│   │   ├── Index.jsx   
│   │   ├── New.jsx     
│   │   └── Show.jsx  
│   └── layouts/
│       └── Layout.jsx
├── tests/
│   └── engineer.test.js
├── app.js
├── server.js
├── .env
├── .gitignore
├── artillery.yml
└── package.json
```


| **URL** | **HTTP Verb** |  **Action**| **Used For**| **Mongoose Method** | **View** |
|------------|-------------|------------|-------------------------------| ---------------------| ------------- |
| /marketplace/         | GET       | index  | Displaying a list of all items | Item.find | Index.jsx |
| /marketplace/new         | GET       | new | Display HTML form for creating a new item | none | New.jsx |
| /marketplace/:id      | DELETE    | destroy | Delete a specific photo  | Item.findByIdAndDelete | none |
| /marketplace/:id      | PATCH/PUT | update | Update a specific item   | Item.findOneAndUpdate | none |
| /marketplace          | POST      | create | Create a new item | Item.create | none |
| /marketplace/:id/edit | GET       | edit   | Return an HTML form for editing an item | Item.findById | Edit.jsx |
| /marketplace/:id      | GET       | show   | Display a specific item | Item.findById | Show.jsx |     

| Method | Route | Purpose | Authentication |
|--------|-------|---------|----------------|
| GET | `/users` | Show signup form | No |
| POST | `/users` | Create user account | No |
| GET | `/users/login` | Show login form | No |
| POST | `/users/login` | Authenticate user | No |
| PUT | `/users/:id` | Update user profile | Yes |
| DELETE | `/users/:id` | Delete user account | Yes |
| GET | `/items` | Show item collection | Yes |
| GET | `/items/new` | Show create form | Yes |
| POST | `/items` | Create new item | Yes |
| GET | `/items/:id` | Show item details | Yes |
| GET | `/items/:id/edit` | Show edit form | Yes |
| PUT | `/items/:id` | Update item | Yes |
| DELETE | `/items/:id` | Delete item | Yes |