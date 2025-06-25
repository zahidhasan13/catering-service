import { connectDB } from "@/lib/connectDB";
import Chef from "@/models/chefsModel";

export const GET = async () => {
    await connectDB();

    const chef = await Chef.find();
    return Response.json(chef);
}

export const POST = async (request) => {
    await connectDB();

    const { name, phone, workZone, experience, available, rating } = await request.json();

    if (!name || !phone || !workZone) {
        return Response.json({ error: "Name, phone, and work zone are required" }, { status: 400 });
    }

    try {
        const newChef = new Chef({ name, phone, workZone, experience, available, rating });
        await newChef.save();
        return Response.json(newChef, { status: 201 });
    } catch (error) {
        console.error("Error creating chef:", error);
        return Response.json({ error: "Failed to create chef" }, { status: 500 });
    }
};