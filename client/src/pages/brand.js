import React, { useEffect, useState } from 'react';
import { getAllAlbums } from '../lib/fetch-albums.js';
import logo from '../assets/logos/samsung.png';

const Brand = () => {
  const [albums, setAlbums] = useState([]);

  const fetchAllAlbums = async () => {
    const albumsData = await getAllAlbums();
    setAlbums(albumsData);
  };

  useEffect(() => {
    fetchAllAlbums();
  }, []);

  return (
    <>
    <main className="container-brand">
    <section className="left">
      <div className="wrapper-one">
        <article>
          <div className="brand">
            <h4>SAMSUNG</h4>
            <p>1262 devices</p>
          </div>
          <img src={logo} alt="brand logo" className="logos" />
        </article>
      </div>
    </section>
    <section class="right">
      <div class="wrapper-two">
       <h3>SELECT YOUR PHONE AND CHECK INFORMATION</h3>
       <p class="line">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquid obcaecati repudiandae assumenda, ipsam ipsum illum, vel sapiente non perspiciatis dolorum numquam magni earum veniam eligendi quis ipsa, quod accusamus!
       </p> 
      </div>
    </section>
  </main>

    </>
  );
};
export default Brand;

{/*       <main className="container-home">
        <div className="left">
          <h4>CHOOSE ALBUMS TO START YOUR FAVOURITE COLLECTION:</h4>
        </div>
        <div className="wrapper-album">
          <AlbumContainer albums={albums} />
        </div>
        <div className="right">
          <h4>GO TO COLLECTION</h4>
          <a href="/collection" className="go">
            &gt;
          </a>
        </div>
      </main>;
 */}
 