import { FormikProps } from "formik";
import "./style.css";
interface Props<T> {
  children: JSX.Element;
  label?: string;
  formikKey: keyof T;
  formikProps: FormikProps<T>;
}

export const FieldWrapper = <T,>({ children, label, formikKey, formikProps }: Props<T>) => {
  return (
    <div className="main-wrapper">
      {label && <div className="textFields">{label}</div>}
      {children}
      {formikProps.errors[formikKey] && <div className="error-text">{formikProps.errors[formikKey]?.toString()}</div>}
    </div>
  );
};
