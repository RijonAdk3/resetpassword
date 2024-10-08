// import db from "../db.js";
// import bcrypt from "bcrypt"; // If using bcrypt


// export const CreateUser = (req,res) =>{
//     const {name, email, password} = req.body
//     bcrypt.hash(password,10,(err,hash)=>{
//         if(err){
//             res.send(err)
//         }else{
//             const RegisterUser = `INSERT INTO user(name, email, password) VALUES (?,?,?)`;
//             const values = [name, email, hash];

//             db.query(RegisterUser, values, (err,result)=>{
//                 if(err){
//                     return res.send(err)
//                 }
//                 res.send({
//                     statusCode: 200,
//                     message: "User created successfully"
//                 })
//             })

//         }

//     } )



// }

// userController.js
import db from '../db.js';

// Function to create a user
export const createUser = (req, res) => {
    const { name, email, password } = req.body;

    const query = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
    db.query(query, [name, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting user: ', err);
            return res.status(500).json({ message: 'Failed to create user' });
        }else{
            res.send({statusCode:200, message:"succesfully added"})

        }
        
    });
};






