import { FormEvent, useEffect, useState } from "react";
import { IProduct } from "../../types/IProduct.interfcae";
import { searchProduct } from "../../utils/utils";
import "./style.css";
import { useDebounce } from "../../hooks/useDebounce";
interface Props {
  products: IProduct[];
  setTmpProductList: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
export const Search = ({ products, setTmpProductList }: Props) => {
  const [term, setTerm] = useState<string>("");
  const debounce = useDebounce(term);

  useEffect(() => {
    const results = searchProduct(products, debounce);
    setTmpProductList(results);
  }, [debounce, products, setTmpProductList]);

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setTerm(e.currentTarget.value);
  };
  return (
    <div className="main-search">
      <div>Search</div>
      <input type="text" onChange={onChange} />
    </div>
  );
};
