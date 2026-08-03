import { NextResponse } from "next/server";
import { prisma } from "@/prisma";

// گرفتن همه محصولات
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در دریافت محصولات" },
      { status: 500 }
    );
  }
}


// ساخت محصول جدید
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const product = await prisma.product.create({
      data: {
        name: body.name,
        brand: body.brand,
        image: body.image,
        price: body.price,
        oldPrice: body.oldPrice,
        discount: body.discount,
        stock: body.stock,
        category: body.category,
        description: body.description,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در ساخت محصول" },
      { status: 500 }
    );
  }
}