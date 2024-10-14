import React from "react";

const Posts = ({ posts, loading }) => {
  return (
    <>
      {loading && <div> loading... </div>}
      <ul>
        {posts.map((post) => (
          <li style={{listStyleType: 'none', border: '1px solid black', padding: '20px', marginBottom: '20px'}} key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};
export default Posts;