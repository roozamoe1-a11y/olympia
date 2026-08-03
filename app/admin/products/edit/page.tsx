import ProductTable from "@/app/components/admin/ProductTable";
import SearchBar from "@/app/components/admin/SearchBar";
import Pagination from "@/app/components/admin/Pagination";

async function getProducts() {
  const res = await fetch(
    ${process.env.NEXT_PUBLIC_URL}/api/products,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return [];
  }

  return res.json();
}


export default async function AdminProductsPage() {

  const products = await getProducts();


  return (

    <section className="space-y-8">


      <div>
        <h1 className="
          text-3xl
          font-bold
          text-yellow-400
        ">
          مدیریت محصولات
        </h1>

        <p className="text-gray-400 mt-2">
          افزودن، ویرایش و حذف محصولات فروشگاه
        </p>

      </div>



      <SearchBar />



      <ProductTable
        products={products}
      />



      <Pagination />


    </section>

  );

}