import React, { useState, useEffect } from 'react';
import Article from '../../components/article/Article';
import Home_Products from '../../assets/Home_Products';
import './blog.css';
import { Link } from 'react-router-dom';

function Blog() {
  // Extract unique product images along with their IDs
  const uniqueImages = Array.from(new Set(Home_Products.map(item => ({ prodId: item.prodId, prodImage: item.prodImage }))));

  // Function to shuffle array elements
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // State to store the current random images
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    // Shuffle the array of unique images initially
    let shuffledImages = shuffleArray(uniqueImages);

    // Function to update the random images every 5 seconds in a circular manner
    const updateRandomImages = () => {
      const nextImages = shuffledImages.concat(shuffledImages[0]).slice(1, 5);
      setRandomImages(nextImages);
      shuffledImages = shuffleArray(shuffledImages);
    };

    // Update the random images every 5 seconds
    const intervalId = setInterval(updateRandomImages, 5000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot of New Products are coming for you!</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          {/* Render random images from state */}
          {randomImages.length > 0 &&
            <Link to={`/products/home/${randomImages[0].prodId}`}>
              <Article imgUrl={randomImages[0].prodImage} date="Mar 21, 2024" text="Trading with the new Products. Let's Explore and Buy!" />
            </Link>
          }
        </div>
        <div className="gpt3__blog-container_groupB">
          {/* Render the remaining random images */}
          {randomImages.slice(1).map((image, index) => (
            <Link key={index} to={`/products/home/${image.prodId}`}>
              <Article imgUrl={image.prodImage} date="Mar 21, 2024" text="Trading with the new Products. Let's Explore and Buy!" />
            </Link>
          ))}
          {randomImages.length === 4 &&
            <Link key={4} to={`/products/home/${randomImages[0].prodId}`}>
              <Article imgUrl={randomImages[0].prodImage} date="Mar 21, 2024" text="Trading with the new Products. Let's Explore and Buy!" />
            </Link>
          }
        </div>
      </div>
    </div>
  );
}

export default Blog;
