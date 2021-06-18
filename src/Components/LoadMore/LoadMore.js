const LoadMore = ({ onChange }) => {
  return (
    <button className={"Button"} onClick={onChange} type="button">
      load more
    </button>
  );
};
export default LoadMore;
