import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const FetchProduct = () => {
  // const url = import.meta.env.VITE_BACKEND_URL;
  const url = 'http://localhost:3000/product/getproduct'
  console.log(url, "djd");
  const [products, setproducts] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [isError, setisError] = useState(false);
  useEffect(() => {
    getData() ;
  }, []);

  async function getData() {
    setisloading(true);
    try {
      const res = await fetch(url);
     
      const data = await res.json();
      if (!data) {
        setisError(true);
      }
      setproducts(data.product);
      console.log(data);
    } catch (error) {
      console.log(error);
      setisError(true);
    } finally {
      setisloading(false);
    }
  }

  if (isloading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Something Went Wrong</h1>;
  }
  return (
    <div className="flex gap-3 flex-wrap">
      {products && products?.map((prod, i) => (
        <div
          key={i + prod._id}
          className="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <img
            className="w-[250px]"
            src={prod?.image}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{prod.title}</div>
            <p className="text-gray-700 text-base">{prod.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {prod.category}
            </span> 
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
            <Button className="bg-red-700">Add To Cart</Button>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default FetchProduct;