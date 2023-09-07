let id = 1;
const getId = () => id++;

const BoldFont = (keyword: string, sickNm: string) => {
  return sickNm.split('').map((chunk) =>
    keyword.includes(chunk) ? (
      <span key={getId()} className="keyword--bold">
        {chunk}
      </span>
    ) : (
      chunk
    )
  );
};

export default BoldFont;
