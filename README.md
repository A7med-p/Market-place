# Market-place


| **URL** | **HTTP Verb** |  **Action**| **Used For**| **Mongoose Method** | **View** |
|------------|-------------|------------|-------------------------------| ---------------------| ------------- |
| /marketplace/         | GET       | index  | Displaying a list of all items | Item.find | Index.jsx |
| /marketplace/new         | GET       | new | Display HTML form for creating a new item | none | New.jsx |
| /marketplace/:id      | DELETE    | destroy | Delete a specific photo  | Item.findByIdAndRemove or Item.findByIdAndDelete | none |
| /marketplace/:id      | PATCH/PUT | update | Update a specific item   | Item.findByIdAndUpdate or Item.findOneAndUpdate | none |
| /marketplace          | POST      | create | Create a new item | Item.create | none |
| /marketplace/:id/edit | GET       | edit   | Return an HTML form for editing an item | Item.findOne or Item.findById | Edit.jsx |
| /marketplace/:id      | GET       | show   | Display a specific item | Item.findOne or Item.findById | Show.jsx |     


### **Web Routes (Views)**
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