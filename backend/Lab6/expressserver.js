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

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

// Data
const userData = [
    {
        id: "1",
        name: "amish_waqar",
        phone: "7827536087",
        email: "amish.waqar@example.com"
    },
    {
        id: "2",
        name: "john_doe",
        phone: "7827536088",
        email: "john.doe@example.com"
    }
];

const registerData = [
     {
         id: "1",
         name: "amish_waqar",
         phone: "7827536087",
         email: "amish.waqar@example.com"
     },
    {   id: "2",
        name: "john_doe",
        phone: "7827536088",
        email: "john.doe@example.com"
     }
 ];

// GET
// app.get('/msg', (req, res) => {
//     res.status(200).send("Welcome to express server");
// });

app.get('/', (req, res) => {
    res.status(200).send("Welcome to express server");
});

app.get('/user', (req, res) => {
   // res.status(200).send("User data");
   try{
    res.status(200).json(userData);
   }
    catch(error){
        console.error("Error fetching user data:", error);
        res.status(500).send("Error fetching user data");
    }
});


// POST
// app.post('/register', (req, res) => {
//     try {
//         const {name, phone, email} = req.body;
//         const newUser = {
//             id: (userData.length + 1).toString(),
//             name,
//             phone,
//             email
//         };
//         userData.push(newUser);
//         res.status(201).json({message: "user created successfully",newUser});
//     } catch (error) {
//        // res.status(500).send("Error creating user");
//        console.error("Error creating user:", error);
//     }
//     const newUser = req.body;
//     userData.push(newUser);
//     res.status(201).send("User created successfully");
// });
// // PUT
// app.put('/update', (req, res) => {
//     res.status(200).send("User updated successfully");
// });

// // DELETE
// app.delete('/delete', (req, res) => {
//     res.status(200).send("User deleted successfully");
// });
app.get('/user/:id', (req, res) => {
    try {
        const userId = req.params.id;
        const user = userData.find(u => u.id === userId);
        if(!user) {
            res.status(404).send("User not found");
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).send("Error fetching user data");
    }
});
app.post('/create', (req, res) => {
    try {
        const { name, phone, email } = req.body;
        const newUser = {
            id: (userData.length + 1).toString(),
            name,
            phone,
            email
        };
        userData.push(newUser);
        res.status(201).json({message: "user created successfully", newUser});
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Error creating user");
    }
});
app.put('/edit/:id', (req, res) => {
    const userId = req.params.id;
    const { name, phone, email } = req.body;
    const userIndex = userData.findIndex(u => u.id === userId);
    if(userIndex === -1) {
        res.status(404).send("User not found");
    } else {
        userData[userIndex] = { id: userId, name, phone, email };
        res.status(200).json({message: "User updated successfully", user: userData[userIndex]});
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

