import React from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

export const Paginator = ({ page, setPage, prevPage, nextPage, pageArray }) => {
  return (
    <>
      {pageArray.length > 1 && (
        <ul className="pagination flex mx-auto justify-center gap-4 mt-6">
          <li
            className={page > 0 ? `page cursor-pointer` : `text-transparent`}
            onClick={() => {
              prevPage();
            }}
          >
            <ArrowLeftIcon />
          </li>

          {pageArray.map((n, index) => (
            <li
              className={`page ${index === page && "page-active"} cursor-pointer`}
              onClick={() => setPage(index)}
              key={index}
            >
              {index + 1}
            </li>
          ))}

          <li
            className={page < pageArray.length - 1 ? `page cursor-pointer` : `text-transparent`}
            onClick={() => {
              nextPage();
            }}
          >
            <ArrowRightIcon />
          </li>
        </ul>
      )}
    </>
  );
};
