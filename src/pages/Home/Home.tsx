import { useState } from "react";
import { CBtn } from "../../components/CBtn.tsx/Ctbn";
import { AddOrEdit } from "../../components/AddOrEdit/AddOrEdit";
import { Header } from "../../components/Header/Header";
import { Products } from "../../components/Products/Products";
import "./style.css";
import { IProduct } from "../../types/IProduct.interfcae";
import { Search } from "../../components/Search/Search";
import { SortBy } from "../../components/SortBy/SortBy";
const items = [
  { name: "Product 1", description: "good product", id: 1, price: 100, creationDate: new Date("Mon Sep 02 2024 21:32:42 GMT+0300 (שעון ישראל (קיץ))") },
  { name: "Product 3", description: "good product", id: 3, price: 120, creationDate: new Date("Mon Sep 02 2024 21:29:42 GMT+0300 (שעון ישראל (קיץ))") },
  { name: "Product 4", description: "good product", id: 4, price: 32, creationDate: new Date("Mon Sep 02 2024 21:17:42 GMT+0300 (שעון ישראל (קיץ))") },
  { name: "Product 2", description: "eliyahu", id: 2, price: 35, creationDate: new Date("Mon Sep 02 2024 21:30:42 GMT+0300 (שעון ישראל (קיץ))") },
];

export const Home = () => {
  const [productList, setProductList] = useState<IProduct[]>(items);
  const [tmpProductList, setTmpProductList] = useState<IProduct[]>(items);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>(items[0]);

  const onClickAdd = () => {
    setSelectedProduct({
      name: "",
      description: "",
      id: productList[productList.length - 1].id + 1,
      price: 0,
      creationDate: new Date(),
    });
  };

  return (
    <div className="home-main">
      <Header />
      <div className="body-main">
        <div className="top">
          <CBtn onClick={onClickAdd} type="add" />
          <Search products={productList} setTmpProductList={setTmpProductList} />
          <SortBy productList={productList} setProductList={setProductList} />
        </div>

        <div className="grid">
          <Products productList={tmpProductList} setProductList={setProductList} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
          <AddOrEdit selectedItem={selectedProduct} setProductList={setProductList} />
        </div>
      </div>
    </div>
  );
};
