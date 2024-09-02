import { useFormik } from "formik";
import { IProduct } from "../../types/IProduct.interfcae";
import "./style.css";
import { CBtn } from "../CBtn.tsx/Ctbn";
import { validationSchema } from "../../utils/validations";
import { FieldWrapper } from "../FieldWrapper/FieldWrapper";
import { FormEvent } from "react";
import image from "../../assets/images/preview-icon.png";
interface Props {
  selectedItem: IProduct;
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
export const AddOrEdit = ({ selectedItem, setProductList }: Props) => {
  const formikProps = useFormik({
    initialValues: selectedItem,
    validationSchema: validationSchema,
    enableReinitialize: true,
    validateOnChange: true,
    onSubmit: (values) => {
      setProductList((prev) => {
        const filered = prev.filter((product) => product.id !== values.id);
        return [...filered, values];
      });
    },
  });
  const onClick = () => {
    formikProps.handleSubmit();
  };

  const handleChange = (e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    const { name } = e.currentTarget;
    formikProps.setFieldValue(name, value);
  };

  return (
    <div className="details-main">
      <div className="product-name">{formikProps.values.name}</div>
      <img src={image} alt="preview" />
      <FieldWrapper formikProps={formikProps} formikKey="name" label={"Name"}>
        <input type="text" value={formikProps.values.name} name="name" onChange={handleChange} />
      </FieldWrapper>
      <FieldWrapper formikProps={formikProps} formikKey="description" label={"Description"}>
        <textarea className="textarea" value={formikProps.values.description} name="description" onChange={handleChange} />
      </FieldWrapper>
      <FieldWrapper formikProps={formikProps} formikKey="price" label={"Price"}>
        <div className="price">
          <input type="number" name="price" value={formikProps.values.price} onChange={handleChange} />$
        </div>
      </FieldWrapper>
      <div className="submit-details">
        <CBtn onClick={onClick} type="save" />
      </div>
    </div>
  );
};
