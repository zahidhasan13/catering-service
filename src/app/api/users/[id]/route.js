import User from "@/models/userModel";

export const GET = async (request, { params }) => {
    const { id } = params;

    if (!id) {
        return Response.json({ error: "User ID is required" }, { status: 400 });
    }

    try {
        const user = await User.findById(id);
        if (!user) {
            return Response.json({ error: "User not found" }, { status: 404 });
        }
        return Response.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        return Response.json({ error: "Failed to fetch user" }, { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { id } = params;

    if (!id) {
        return Response.json({ error: "User ID is required" }, { status: 400 });
    }

    const { name, email, phone, address } = await request.json();

    try {
        const user = await User.findByIdAndUpdate(
            id,
            { name, email, phone, address },
            { new: true }
        );

        if (!user) {
            return Response.json({ error: "User not found" }, { status: 404 });
        }

        return Response.json(user);
    } catch (error) {
        console.error("Error updating user:", error);
        return Response.json({ error: "Failed to update user" }, { status: 500 });
    }
};


export const DELETE = async (request, { params }) => {
    const { id } = params;

    if (!id) {
        return Response.json({ error: "User ID is required" }, { status: 400 });
    }

    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return Response.json({ error: "User not found" }, { status: 404 });
        }
        return Response.json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        return Response.json({ error: "Failed to delete user" }, { status: 500 });
    }
};