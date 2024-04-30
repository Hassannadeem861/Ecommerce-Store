const { z } = require("zod");

// Creating an object Validation
const signupValidation = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at lest of 3 charactors.." })
        .max(20, { message: "Name must be at lest of 20 charactors.." }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(10, { message: "Email must be at lest of 10 charactors.." })
        .max(30, { message: "Email must be at lest of 30 charactors.." }),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        // .email({ message: "Invalid email address" })
        .min(6, { message: "Password must be at lest of 6 charactors.." })
        .max(30, { message: "Password must be at lest of 30 charactors.." }),

    // phonenumber: z
    //     .string({ required_error: "PhoneNumber is required" })
    //     .trim()
    //     // .email({ message: "Invalid email address" })
    //     .min(11, { message: "PhoneNumber must be at lest of 11 charactors.." })
    //     .max(30, { message: "PhoneNumber must be at lest of 30 charactors.." }),
});
// console.log("signupValidation: ", signupValidation);

const loginValidation = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(10, { message: "Email must be at lest of 10 charactors.." })
        .max(30, { message: "Email must be at lest of 30 charactors.." }),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        // .email({ message: "Invalid email address" })
        .min(6, { message: "Password must be at lest of 6 charactors.." })
        .max(30, { message: "Password must be at lest of 30 charactors.." }),
});

// export  default signupValidation;
module.exports = { signupValidation, loginValidation }