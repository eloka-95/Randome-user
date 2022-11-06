import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, current }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
 

  return (
    <nav>
      <div className='pagination'>

        {pageNumbers.map(number => (
          <div key={number} className='page-item'>
            <button onClick={() => paginate(number)} >
              {number}
            </button>
          </div>
        ))}

      </div>
    </nav>
  );
};

export default Pagination;