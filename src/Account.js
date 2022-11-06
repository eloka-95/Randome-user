import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';


const Account = () => {
    
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('https://randomuser.me/api/?results=100');
        setPosts(res.data.results);
        setLoading(false);
      };
      fetchPosts();
    }, []);
  
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

        const increament= () =>{
            setCurrentPage(
                currentPage + 1
            )
        }
        const decreament= () =>{
            setCurrentPage(
                currentPage - 1
            )
        }
    return (
        <div className='account'>
            <Posts posts={currentPosts} loading={loading} />
            <div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                current={currentPage}
            />
            <div className='acct-button'>
                <button disabled ={currentPage === 1} onClick={decreament}>prev</button>
                <button disabled ={currentPage === 10} onClick={increament}>next</button>
            </div>
            </div>
            
        </div>
    );
};

export default Account;