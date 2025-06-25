import { connectDB } from "@/lib/connectDB";
import User from "@/models/userModel";

export const GET = async () => {
    await connectDB();

    const user = await User.find();
    return Response.json(user);
}

export const POST = async (request) => {
    await connectDB();

    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
        return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        return Response.json(newUser, { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
        return Response.json({ error: "Failed to create user" }, { status: 500 });
    }
};