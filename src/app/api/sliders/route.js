import cloudinary from "@/lib/cloudinary";
import { connectDB } from "@/lib/connectDB";
import Slider from "@/models/sliderModel";

export const GET = async () => {
    await connectDB();
    try {
        const sliders = await Slider.find();
        return new Response(JSON.stringify(sliders), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching sliders:', error);
        return new Response('Failed to fetch sliders', {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

export const POST = async (req) => {
  await connectDB();
  
  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!file) {
      return new Response('No file uploaded', { status: 400 });
    }

    // Upload to Cloudinary
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: 'sliders' }, // Optional folder
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    // Save Cloudinary URL to MongoDB
    const newSlider = new Slider({ 
      img: result.secure_url,
      public_id: result.public_id,
    });

    await newSlider.save();

    return new Response(JSON.stringify(newSlider), { 
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error:', error);
    return new Response('Failed to process image', { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};