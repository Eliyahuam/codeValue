import * as yup from "yup";
export const validationSchema = yup.object().shape({
  name: yup.string().test("test1", "חובה למלא שדה זה עד 30 תווים", (value) => {
    if (value) {
      return value?.length > 0 && value?.length <= 30;
    }
  }),
  description: yup.string().test("test2", "שדה זה יכול להכיל עד 200 תווים", (value) => {
    if (value) {
      return value?.length <= 200;
    } else {
      return true;
    }
  }),
  price: yup.number().test("test3", "נדרש למלא שדה זה במספר גדול מ 0", (value) => {
    return !(!value || value <= 0);
  }),
});
