import { FormEvent } from "react";
import { IProduct } from "../../types/IProduct.interfcae";
import "./style.css";

interface Props {
  productList: IProduct[];
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
export const SortBy = ({ productList, setProductList }: Props) => {
  const sort = (key: keyof IProduct) => {
    const sortedProducts = [...productList].sort((a: IProduct, b: IProduct) => {
      if (typeof a[key] === "object" && typeof b[key] === "object") {
        return new Date(a[key]).getTime() - new Date(b[key]).getTime();
      } else if (typeof a[key] === "string" && typeof b[key] === "string") {
        if (a[key] < b[key]) {
          return -1;
        } else {
          return 1;
        }
      }
      return 1;
    });
    setProductList(sortedProducts);
  };

  const onChange = (e: FormEvent<HTMLSelectElement>) => {
    const sortyBy = e.currentTarget.value;
    sort(sortyBy as keyof IProduct);
  };
  return (
    <div className="main-sort">
      <div>Sort by</div>
      <select defaultValue="" onChange={onChange}>
        <option value="" disabled>
          בחר מיון
        </option>
        <option value="name">Name</option>
        <option value="creationDate">Created Date</option>
      </select>
    </div>
  );
};
