import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    
    <div className='post'>
      {posts.map(post => (
        <div key={post.location.street.number} className='post-wrapper'>
        <div><img src={post.picture.large} alt="users picture"/></div>
          <div>
             <p>Name:{post.name.title}{post.name.first}{post.name.last}</p> 
             <p> Country:{post.location.country}</p> 
             <p> Email: {post.email}</p> 
              <p>Gender:{post.gender}</p>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;