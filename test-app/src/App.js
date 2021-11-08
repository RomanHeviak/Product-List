import React, { useEffect, useState } from "react";
import Products from "./Products/Produsts";
import Context from "./Products/context";
import AddProduct from "../src/addProduct";

function App() {
  const [activeForm, SetActiveForm] = useState(false);

  const [products, setProducts] = React.useState([
    {
      id: 1,
      imageUrl: "https://images.drive.ru/i/0/5f6c5369ec05c4fe2700000f.jpg",
      name: "tesla",
      count: "100",
      size: {
        width: 200,
        heigth: 200,
      },
      weigth: "200g",
      comment: ["good"],
    },
  ]);

  useEffect(() => {
    setProducts(
      JSON.parse(localStorage.getItem("products")).length !== 0
        ? JSON.parse(localStorage.getItem("products"))
        : []
    );
  }, []);

  function removeProduct(id) {
    if (window.confirm("Would you reallu delete?")) {
      let items = JSON.parse(localStorage.getItem("products"));
      items = items.filter((el) => el.id !== id);
      localStorage.setItem("products", JSON.stringify(items));
      setProducts(JSON.parse(localStorage.getItem("products")));
    }
  }

  function addProduct(product) {
    setProducts(
      products.push({
        id: Date.now(),
        imageUrl: product.imageUrl,
        name: product.name,
        count: product.count,
        size: {
          width: product.width,
          heigth: product.heigth,
        },
        weigth: product.weigth,
      })
    );
    localStorage.setItem("products", JSON.stringify(products));
    setProducts(JSON.parse(localStorage.getItem("products")));
  }

  function updateProduct(item) {
    console.log(item);
  }

  return (
    <Context.Provider value={{ removeProduct, SetActiveForm, updateProduct }}>
      <div className="wrapper">
        <h1>Product List</h1>
        {activeForm ? (
          <AddProduct onCreate={addProduct} />
        ) : (
          <button
            style={{ marginBottom: "15px" }}
            onClick={() => SetActiveForm(true)}
          >
            Create product
          </button>
        )}
        {products.length ? (
          <Products products={products} />
        ) : (
          <p>No products!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
