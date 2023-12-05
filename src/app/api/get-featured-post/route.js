import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET A POST IS FEATURED
export const GET = async (req) => {
  try {
    const postWithMostViews = await prisma.post.findFirst({
      orderBy: {
        views: "desc",
      },
      include: {
        user: true,
      },
    });
    return new NextResponse(JSON.stringify(postWithMostViews, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
