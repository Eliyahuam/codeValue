import { IProduct } from "../../types/IProduct.interfcae";
import { CBtn } from "../CBtn.tsx/Ctbn";
import "./style.css";
import image from "../../assets/images/preview-icon.png";
interface Props {
  item: IProduct;
  onDelete: () => void;
  isSelcted: boolean;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProduct>>;
}
export const Product = ({ item, onDelete, isSelcted, setSelectedProduct }: Props) => {
  const onClick = () => {
    setSelectedProduct(item);
  };
  return (
    <div onClick={onClick} className="box" style={isSelcted ? { backgroundColor: "#9FC5F8" } : { backgroundColor: "white" }}>
      <div className="image-and-details-container">
        <img src={image} alt="preview" />
        <div className="text-container">
          <div className="bold-18">{item.name}</div>
          <div className="reg-14">{item.description}</div>
        </div>
      </div>
      <CBtn onClick={onDelete} type="delete" />
    </div>
  );
};
