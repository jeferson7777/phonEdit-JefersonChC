import React, { useState, useEffect } from 'react';

  const Blog = () => {


  return (
    <main className="container-blog">
    </main>
  );
};

export default Blog;

/*       <div className="left">
        <h3>USER:</h3>
        <h4>Username</h4>
      </div>
      <section className="wrapper-collection">
        <div className="title">
          <h3>ALBUM</h3>
          <h3>YEAR</h3>
          <h3>DURATION</h3>
          <h3>PREVIEW</h3>
        </div>
        {albums.map((album) => {
          return (
            <article
              key={album._id}
              onClick={handleClick}
              className="album-row"
            >
              <h3>{album.name}</h3>
              <h3>{album.year}</h3>
              <h3>{album.className}</h3>
              <button type="submit" className="favorite">
                EDIT
              </button>
              <button type="submit" className="favorite">
                DELETE
              </button>
            </article>
          );
        })}
      </section>
 */