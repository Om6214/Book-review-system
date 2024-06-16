const { z } = require("zod");

const signupSchema = z.object({
  Name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(15, { message: "Name cannot be greater than 15 characters" }),
  Email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }),
  Password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be at least 6 characters" }) // Adjust the minimum password length as needed
    .max(20, { message: "Password cannot be greater than 20 characters" }), // Adjust the maximum password length as needed
});

const loginSchema = z.object({
  Email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }),
  Password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be at least 6 characters" }) // Adjust the minimum password length as needed
    .max(20, { message: "Password cannot be greater than 20 characters" }), // Adjust the maximum password length as needed
})

module.exports = {signupSchema,loginSchema};
