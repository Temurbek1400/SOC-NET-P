import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersCSS from "./Users.module.css";
// import userImgPng from "./../../userImage.png";
// import { NavLink } from 'react-router-dom';
// import MiniPreloader from './../common/MiniPreloader/MiniPreloader';


let PagesCountBlock = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [ portionNumber, setPortionNumber ] = useState(1);  
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


  return (
    <div>
        <ul className={UsersCSS.pageCountBlock}>
            {
              portionNumber !== 1 ? <button onClick={() =>{ setPortionNumber(portionNumber - 1)}} className="btn btn-primary">{"<<"}Previous</button> : <button disabled className="btn btn-primary">Previous</button>
            }
            {
              pages.filter((page) => leftPortionPageNumber <= page && page <= rightPortionPageNumber )
                   .map((page, ind) => <li 
                                           key={ind} 
                                           className={currentPage === page ? UsersCSS.userSelected : ""} 
                                           onClick={() => onPageChange(page)}>
                                           {page} 
                                       </li>
              )
            }
            {
              portionNumber < portionCount ? <button onClick={() =>{ setPortionNumber(portionNumber + 1)}} className="btn btn-primary">Next{">>"}</button> : <button disabled className="btn btn-info">Next</button>
            }
        </ul>
    </div>
  )
}

export default PagesCountBlock;