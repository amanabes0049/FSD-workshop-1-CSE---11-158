// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';

// dotenv.config();
// const part=process.env.PORT || 3000;

// const app = express();
// const port = part;
// app.get('/msg', (req, res) => {
//     res.status(200).send("Welcome to express server");
// });
// app.post('/register', (req, res) => {
//     res.status(200).send("User registered successfully");
// });
// app.put('/update', (req, res) => {
//     res.status(200).send("User updated successfully");
// });
// app.delete('/delete', (req, res) => {
//     res.status(200).send("User deleted successfully");
// });
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
// const userData = [
//     {   id: "1",
//         name: "amish_waqar",
//         phone: "7827536087",
//         email: "amish.waqar@example.com"
//     },
//     {   id: "2",
//         name: "john_doe",
//         phone: "7827536088",
//         email: "john.doe@example.com"
//     }
// ];
// const registerData = [
//     {   id: "1",
//         name: "amish_waqar",
//         phone: "7827536087",
//         email: "amish.waqar@example.com"
//     },
//     {   id: "2",
//         name: "john_doe",
//         phone: "7827536088",
//         email: "john.doe@example.com"
//     }
// ];

// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;
// app.use(express.urlencoded({ extended: true }));

// app.use(cors());
// app.use(express.json());

// // Data
// const userData = [
//     {
//         id: "1",
//         name: "amish_waqar",
//         phone: "7827536087",
//         email: "amish.waqar@example.com"
//     },
//     {
//         id: "2",
//         name: "john_doe",
//         phone: "7827536088",
//         email: "john.doe@example.com"
//     }
// ];

// const registerData = [
//      {
//          id: "1",
//          name: "amish_waqar",
//          phone: "7827536087",
//          email: "amish.waqar@example.com"
//      },
//     {   id: "2",
//         name: "john_doe",
//         phone: "7827536088",
//         email: "john.doe@example.com"
//      }
//  ];

// // GET
// // app.get('/msg', (req, res) => {
// //     res.status(200).send("Welcome to express server");
// // });

// app.get('/', (req, res) => {
//     res.status(200).send("Welcome to express server");
// });

// app.get('/user', (req, res) => {
//    // res.status(200).send("User data");
//    try{
//     res.status(200).json(userData);
//    }
//     catch(error){
//         console.error("Error fetching user data:", error);
//         res.status(500).send("Error fetching user data");
//     }
// });


// // POST
// // app.post('/register', (req, res) => {
// //     try {
// //         const {name, phone, email} = req.body;
// //         const newUser = {
// //             id: (userData.length + 1).toString(),
// //             name,
// //             phone,
// //             email
// //         };
// //         userData.push(newUser);
// //         res.status(201).json({message: "user created successfully",newUser});
// //     } catch (error) {
// //        // res.status(500).send("Error creating user");
// //        console.error("Error creating user:", error);
// //     }
// //     const newUser = req.body;
// //     userData.push(newUser);
// //     res.status(201).send("User created successfully");
// // });
// // // PUT
// // app.put('/update', (req, res) => {
// //     res.status(200).send("User updated successfully");
// // });

// // // DELETE
// // app.delete('/delete', (req, res) => {
// //     res.status(200).send("User deleted successfully");
// // });
// app.get('/user/:id', (req, res) => {
//     try {
//         const userId = req.params.id;
//         const user = userData.find(u => u.id === userId);
//         if(!user) {
//             res.status(404).send("User not found");
//         } else {
//             res.status(200).json(user);
//         }
//     } catch (error) {
//         console.error("Error fetching user data:", error);
//         res.status(500).send("Error fetching user data");
//     }
// });
// app.post('/create', (req, res) => {
//     try {
//         const { name, phone, email } = req.body;
//         const newUser = {
//             id: (userData.length + 1).toString(),
//             name,
//             phone,
//             email
//         };
//         userData.push(newUser);
//         res.status(201).json({message: "user created successfully", newUser});
//     } catch (error) {
//         console.error("Error creating user:", error);
//         res.status(500).send("Error creating user");
//     }
// });
// app.put('/edit/:id', (req, res) => {
//     const userId = req.params.id;
//     const { name, phone, email } = req.body;
//     const userIndex = userData.findIndex(u => u.id === userId);
//     if(userIndex === -1) {
//         res.status(404).send("User not found");
//     } else {
//         userData[userIndex] = { id: userId, name, phone, email };
//         res.status(200).json({message: "User updated successfully", user: userData[userIndex]});
//     }
// });
// app.delete('/delete/:id', (req, res) => {
//     const userId = req.params.id;

//     const userIndex = userData.findIndex(u => u.id === userId);

//     if (userIndex === -1) {
//         return res.status(404).send("User not found");
//     }

//     userData.splice(userIndex, 1);

//     res.status(200).send("User deleted successfully");
// });
// // Start server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const port = 3000

const app = express()
app.use(express.json())
app.use(cors())
const array = [
    {
        id: 1,
        name: "Akarsh",
        age: 20
    },
    {
        id: 2,
        name: "Akshat",
        age: 21
    },
    {
        id: 3,
        name: "Ansh",
        age: 17
    }
]

app.get("/", (req, res) => {
    res.status(200).send(`listening on port ${port}`)
})

app.get("/msg", (req, res) => {
    res.status(200).json({
        message : "Welcome to express server"
    })
})


app.get("/user", (req, res) => {
    try {
        res.status(200).json({
            message: "data recieved",
            userData: array
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).json({
            message: "Internal server error"
        })
    }
})

app.get("/user/:id", (req, res) => {
    try {
        const id = req.params.id ;
        const user = array.find((u)=> u.id == id);
        if(!user){
            return res.status(400).json({message: "user not found"})
        }
        res.status(200).json({message : "user found" , 
            user
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).json({
            message: "Internal server error"
        })
    }
})

app.post("/create" , (req,res)=>{
    try{
        const {name , age} = req.body ;
        const newUser = {
            id: array.length+1,
            name,
            age,
        };
        array.push(newUser);
        console.log("User added successfully")
        console.log(array)
        res.status(201).json({
            message: "User created successfully",
            userData: newUser
        })
    }
    catch(err){
        console.error(err.message)
        res.status(500).json({
            message: "Internal server error"
        })
    }
})

app.put("/user/:id", (req, res) => {
    try {
        const id = req.params.id
        const { name, age } = req.body

        const user = array.find((u) => u.id == id)

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        user.name = name
        user.age = age

        res.status(200).json({
            message: "User updated successfully",
            userData: user
        })
    }
    catch (err) {
        console.error(err.message)
        res.status(500).json({
            message: "Internal server error"
        })
    }
})

app.delete("/user/:id", (req, res) => {
    try {
        const id = req.params.id

        const index = array.findIndex((u) => u.id == id)

        if (index === -1) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const deletedUser = array.splice(index, 1)

        res.status(200).json({
            message: "User deleted successfully",
            userData: deletedUser[0]
        })
    }
    catch (err) {
        console.error(err.message)
        res.status(500).json({
            message: "Internal server error"
        })
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})