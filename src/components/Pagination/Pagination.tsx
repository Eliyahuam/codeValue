import "./style.css";

interface Props {
  setPage: React.Dispatch<
    React.SetStateAction<{
      from: number;
      to: number;
    }>
  >;
  length: number;
  page: {
    from: number;
    to: number;
  };
  numOfItemsPerPage: number;
}
export const Pagination = ({ setPage, page, length, numOfItemsPerPage }: Props) => {
  const pageNumber = (page.to / numOfItemsPerPage).toFixed();
  const pagesQuantity = Math.ceil(length / numOfItemsPerPage);

  const onPrev = () => {
    setPage((prev) => {
      if (prev.from - numOfItemsPerPage < 0) return prev;
      return { from: prev.from - numOfItemsPerPage, to: prev.to - numOfItemsPerPage };
    });
  };
  const onNext = () => {
    setPage((prev) => {
      if (prev.to > length - 1) return prev;
      return { from: prev.from + numOfItemsPerPage, to: prev.to + numOfItemsPerPage };
    });
  };
  return (
    <div className="pagination-main">
      <div onClick={onPrev} className="btn">
        &#60; Prev Page
      </div>
      <div>
        {pageNumber} of {pagesQuantity}
      </div>
      <div onClick={onNext} className="btn">
        Next Page &#62;
      </div>
    </div>
  );
};
