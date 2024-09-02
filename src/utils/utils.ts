import { IProduct } from "../types/IProduct.interfcae";

export function searchProduct(array: IProduct[], searchTerm: string): IProduct[] {
  return array.filter((item) => {
    const values = Object.values(item);

    const hasMatchingText = values.some((value) => {
      return value?.toString().toLowerCase().includes(searchTerm.toLowerCase());
    });

    return hasMatchingText;
  });
}
