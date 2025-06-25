import Chef from "@/models/chefsModel";

export const GET = async (request, { params }) => {
    const { id } = params;

    if (!id) {
        return Response.json({ error: "Chef ID is required" }, { status: 400 });
    }

    try {
        const chef = await Chef.findById(id);
        if (!chef) {
            return Response.json({ error: "Chef not found" }, { status: 404 });
        }
        return Response.json(chef);
    } catch (error) {
        console.error("Error fetching user:", error);
        return Response.json({ error: "Failed to fetch chef" }, { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { id } = params;

    if (!id) {
        return Response.json({ error: "Chef ID is required" }, { status: 400 });
    }

    const { name, phone, workZone, experience, available, rating } = await request.json();

    try {
        const chef = await Chef.findByIdAndUpdate(
            id,
            { name, phone, workZone, experience, available, rating },
            { new: true }
        );

        if (!chef) {
            return Response.json({ error: "Chef not found" }, { status: 404 });
        }

        return Response.json(chef);
    } catch (error) {
        console.error("Error updating chef:", error);
        return Response.json({ error: "Failed to update chef" }, { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    const { id } = params;

    if (!id) {
        return Response.json({ error: "Chef ID is required" }, { status: 400 });
    }

    try {
        const chef = await Chef.findByIdAndDelete(id);
        if (!chef) {
            return Response.json({ error: "Chef not found" }, { status: 404 });
        }
        return Response.json({ message: "Chef deleted successfully" });
    } catch (error) {
        console.error("Error deleting chef:", error);
        return Response.json({ error: "Failed to delete chef" }, { status: 500 });
    }
};