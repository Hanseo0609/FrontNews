import React, { useState } from "react";
import styled from "styled-components";

const PageUl = styled.ul`
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  background-color: ${(props) => (props.isActive ? "#263a6c" : "transparent")};
  color: ${(props) => (props.isActive ? "white" : "inherit")};
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const [currPageCheck, setCurrPageCheck] = useState(1);
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    setCurrPageCheck(number);
    paginate(number);
    console.log(currPageCheck);
  }

  console.log();
  return (
    <div>
      <nav>
        <PageUl>
          {pageNumbers.map((number) => (
            <PageLi key={number} onClick={() => handleClick(number)} isActive={currPageCheck === number} >
              <PageSpan>
                {number}
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  );
};

export default Pagination;