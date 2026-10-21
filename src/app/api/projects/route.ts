import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Project from "@/lib/models/Project";

// Helper to verify admin auth
function verifyAdmin(request: NextRequest): boolean {
  const token = request.cookies.get("admin_token")?.value;
  if (!token) return false;
  try {
    const decoded = JSON.parse(Buffer.from(token, "base64").toString());
    return decoded.exp > Date.now();
  } catch {
    return false;
  }
}

// GET - Fetch all projects (public)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: any = {};
    if (category) filter.category = category;
    if (featured === "true") filter.featured = true;

    const projects = await Project.find(filter).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, projects }, { status: 200 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

// POST - Create a new project (admin only)
export async function POST(request: NextRequest) {
  if (!verifyAdmin(request)) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    await connectDB();

    const body = await request.json();
    const { title, description, category, location, year, client, images, featured } = body;

    const project = await Project.create({
      title,
      description,
      category,
      location: location || "",
      year: year || "",
      client: client || "",
      images: images || [],
      featured: featured || false,
    });

    return NextResponse.json(
      { success: true, project, message: "Project created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create project" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a project (admin only)
export async function DELETE(request: NextRequest) {
  if (!verifyAdmin(request)) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Project ID is required" },
        { status: 400 }
      );
    }

    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete project" },
      { status: 500 }
    );
  }
}

// PUT - Update a project (admin only)
export async function PUT(request: NextRequest) {
  if (!verifyAdmin(request)) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    await connectDB();

    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Project ID is required" },
        { status: 400 }
      );
    }

    const project = await Project.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!project) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, project, message: "Project updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update project" },
      { status: 500 }
    );
  }
}
