const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = db.users;

// const register = async (req, res) => {
//     try {
//         const { name, email, password } = req.body
//         console.log("name, email, password :", req.body);

//         if (
//             !name || !email || !password
//         ) {
//             res.status(403);
//             res.send(`required parameters missing,
//             example request body:
//         {
//             name: "abc name",
//             email: "abc email"
//             password: "abc password"
//         } `);
//             return;
//         }

//         req.body.email = req.body.email.toLowerCase();

//         const userEmail = await User.findOne({ where: { email: email } })
//         console.log("userEmail :", userEmail);

//         if (userEmail) {
//             return res.status(403).json({ message: "user email already exist please try a different email" })
//         }

//         const saltRounds = 10;
//         const passwordConvertToHash = await bcrypt.hash(password, saltRounds)
//         console.log("passwordConvertToHash :", passwordConvertToHash);

//         var userCreated;
//         if (isAdmin) { // Check if user is to be created as an admin
//             userCreated = await User.create({
//                 name,
//                 email,
//                 password: passwordConvertToHash,
//                 isAdmin: true // Set isAdmin to true if user is to be created as an admin
//             });
//         } else {
//             userCreated = await User.create({
//                 name,
//                 email,
//                 password: passwordConvertToHash
//             });
//         }
//         console.log("create data in database :", userCreated);

//         // const token = jwt.sign({ userId: userCreated.id, email: userCreated.email }, "Hassan_Nadeem", { expiresIn: "1h" });
//         // console.log("register token :", token);
//         res.status(201).json({
//             message: "registration successfully", userId: userCreated.id, isAdmin: userCreated.isAdmin, userCreated

//         })
//     } catch (error) {
//         console.log("register error :", error);
//         res.status(500).json({ message: "internal server" })
//     }
// }

// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body
//         console.log("email, password :", req.body);

//         if (
//             !email || !password
//         ) {
//             res.status(403);
//             res.send(`Email and password are required,
//             example request body:
//         {
//             email: "abc email"
//             password: "abc password"

//         }
//         `);
//             return;
//         }

//         req.body.email = req.body.email.toLowerCase();

//         const user = await User.findOne({ where: { email: email } });
//         console.log("login user :", user);

//         if (!user) {
//             return res.status(404).json({ message: "invalid name and password" });
//         }

//         console.log("user.password type:", typeof user.password); // Check type of user.password
//         // console.log("password type:", typeof password); // Check type of password

//         const comparePassword = await bcrypt.compare(password, user.password)
//         console.log("comparePassword :", comparePassword);

//         if (!comparePassword) {
//             return res.status(404).json({ message: "invalid name and password" });
//         }

//         const token = jwt.sign({ userId: user.id, email: user.email, }, "Hassan_Nadeem", { expiresIn: "1h" });
//         console.log("login token :", token);
//         res.status(201).json({
//             message: "Login successful",
//             userId: user.id,
//             token,
//             isAdmin: user.isAdmin
//         })
//     } catch (error) {
//         console.log("login error :", error);
//         res.status(500).json({ message: "internal server" })
//     }
// }

// const register = async (req, res) => {
//     try {
//         const { name, email, password, role  } = req.body; // isAdmin ko bhi request body se extract karna hoga
//         console.log("name, email, password, role  :", name, email, password, role );

//         if (!name || !email || !password) {
//             res.status(403);
//             res.send(`Required parameters missing.`);
//             return;
//         }

//         req.body.email = req.body.email.toLowerCase();

//         const userEmail = await User.findOne({ where: { email: email } });
//         console.log("userEmail :", userEmail);

//         if (userEmail) {
//             return res.status(403).json({ message: "Wrong Email and Passsword :" });
//         }

//         var saltRounds = 10;
//         var passwordConvertToHash = await bcrypt.hash(password, saltRounds);
//         console.log("passwordConvertToHash :", passwordConvertToHash);

//         // Create user with role
//         const userCreated = await User.create({
//             name,
//             email,
//             password: hashedPassword,
//             role: role || "user" // Default role to "user" if not provided
//         });

//         console.log("create data in database :", userCreated);

//         res.status(201).json({
//             message: "Registration successful",
//             userId: userCreated.id,
//             role: userCreated.role, // Include role in the response
//             userCreated
//         });
//     } catch (error) {
//         console.log("register error :", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

const protectController = async (req, res) => {
  res.status(200).json({
    message: "Protected Route Successful",
  });
};

const register = async (req, res) => {
  try {
    const { name, email, password, answer, role } = req.body;
    console.log(
      "name, email, password, role, answer =>",
      name,
      email,
      password,
      role
    );

    if (!name || !email || !password || !answer || !role) {
      res.status(403);
      res.send(`required parameters missing, 
                        example request body:
                    {
                        name: "abc name",
                        email: "abc email"
                        password: "abc password"
                        answer: "abc answer"
                        role: "abc role"
                    } `);
      return;
    }

    req.body.email = req.body.email.toLowerCase();

    const userEmail = await User.findOne({ where: { email: email } });
    console.log("userEmail:", userEmail);

    if (userEmail) {
      return res.status(403).json({
        message: "Wrong Email and Passsword :",
      });
    }

    console.log(
      "User email already exists, please try a different email.",
      userEmail
    );

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("hashedPassword:", hashedPassword);

    // Create user with role
    const userCreated = await User.create({
      name,
      email,
      password: hashedPassword,
      answer,
      role,
    });

    console.log("create data in database:", userCreated);

    res.status(201).json({
      message: "Registration successful",
      userCreated,
    });
  } catch (error) {
    console.log("register error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("email, password :", email, password); // Check email and password types

    if (!email || !password) {
      res.status(403);
      res.send(`required parameters missing, 
                    example request body:
                {
                    email: "abc email"
                    password: "abc password"
                } `);
      return;
    }

    req.body.email = req.body.email.toLowerCase();

    const user = await User.findOne({ where: { email: email } });
    console.log("login user :", user); // Check if user object is retrieved

    if (!user) {
      return res.status(404).json({ message: "Invalid email or password" });
    }

    // console.log("user.password type:", typeof user.password); // Check type of user.password
    // console.log("password type:", typeof password); // Check type of password

    // Check if user.password is a valid hash
    const comparePassword = await bcrypt.compare(password, user.password);
    console.log("comparePassword result:", comparePassword); // Check result of comparison

    if (!comparePassword) {
      return res.status(404).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      "Hassan_Nadeem",
      { expiresIn: "1h" }
    );
    console.log("login token :", token);
    res.status(201).json({
      message: "Login successful",
      token,
      user: {
        userId: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("login error :", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// FORGET PASSWORD
const forgetPassword = async (req, res) => {
  try {
    const { email, newPassword, answer } = req.body;
    console.log("email, newPassword, answer :", req.body);

    if (!email || !newPassword || !answer) {
      res.status(403);
      res.send(`required parameters missing, 
                    example request body:
                {
                    email: "abc email"
                    newPassword: "abc newPassword"
                    answer: "abc answer"
                } `);
      return;
    }

    const user = await User.findOne({ where: { email, answer } });
    console.log("user:", user);

    if (!user) {
      return res.status(403).json({
        message: "Wrong Email or Passsword",
      });
    }

    console.log("Wrong Email or Passsword :", user);

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    console.log("hashedPassword:", hashedPassword);

    // Update the user's password
    const udatePassword = await User.update(
      { password: hashedPassword },
      { where: { id: user.id } }
    );
    console.log("udatePassword :", udatePassword);

    return res.status(200).json({
      message: "Password updated successfully",
    });
  } catch (error) {
    console.log("forgetPassword :", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  register,
  login,
  protectController,
  forgetPassword,
};
