import { useState } from "react";
import * as styleD from '../styles/Pagination';

const Pagination = ({ total, limit, page, setPage }) => {
  const [btnActive, setBtnActive] = useState("");
  const numPages = Math.ceil(total / limit);

  const handlePageBtn = (e, i) => {
    setPage(i + 1);
    setBtnActive(e.target.value);
  };

  return (
    <>
      <styleD.PageWrap>
        <styleD.PageBtn onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </styleD.PageBtn>
        {Array(numPages).fill().map((_, i) => (
          <styleD.PageBtn
            value={i}
            key={i + 1}
            className={i === btnActive ? "active" : ""}
            onClick={(e) => handlePageBtn(e, i)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </styleD.PageBtn>
        ))}
        <styleD.PageBtn onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </styleD.PageBtn>
      </styleD.PageWrap> 
    </>
  );
};

export default Pagination;