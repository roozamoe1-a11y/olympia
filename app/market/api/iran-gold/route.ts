export async function GET() {
  return Response.json({
    success: true,
    name: "Iran Gold",
    price: 0,
    updatedAt: new Date().toISOString(),
  });
}