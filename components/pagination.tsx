import React from 'react';

export interface PaginationProps{
	total: number;
	current: number;
	onPageChange: (value: number) => any; 
}

const Pagination = ({total, current, onPageChange} : PaginationProps) => {
    
  const pageNumbers = [];

  for (let i = 1; i <= total; i++) {
    pageNumbers.push(i);
  }

  return (
      <nav>
        <ul className="flex bg-green-500 p-2 border-2">
          {pageNumbers.map((number, index) =>
            <li key={index} className={`p-2 text-pink-50 border-2 ${number == current ? 'bg-green-800' : 'bg-green-600' }`} onClick={()=>{console.log('object');onPageChange(number);}}>
            {number}
            </li>
          )}
        </ul>
    </nav>
  );
};

export default Pagination;