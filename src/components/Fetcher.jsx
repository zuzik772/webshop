import { useState, useEffect } from "react";

function Fetcher() {
  const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    //   setLoading(false);
      console.log(products);
    }
    getData();
  }, []);

  return <div>Fetcher</div>;
}

export default Fetcher;
