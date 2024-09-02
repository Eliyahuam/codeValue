import { useState } from "react";
import { IProduct } from "../../types/IProduct.interfcae";
import { Pagination } from "../Pagination/Pagination";
import { Product } from "../Product/Product";
import "./style.css";

interface Props {
  productList: IProduct[];
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>;
  selectedProduct: IProduct;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProduct>>;
}
export const Products = ({ productList, setProductList, selectedProduct, setSelectedProduct }: Props) => {
  const [page, setPage] = useState({ from: 0, to: 5 });
  const onDelete = (id: number) => {
    const filtered = [...productList].filter((product) => product.id !== id);
    setProductList(filtered);
  };

  return (
    <div className="products-main">
      {productList.slice(page.from, page.to).map((item, index) => (
        <Product key={`product-${index}`} setSelectedProduct={setSelectedProduct} isSelcted={item.id === selectedProduct.id} item={item} onDelete={() => onDelete(item.id)} />
      ))}
      <Pagination numOfItemsPerPage={5} setPage={setPage} page={page} length={productList.length} />
    </div>
  );
};
