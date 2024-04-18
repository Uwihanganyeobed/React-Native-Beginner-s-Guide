import React from 'react';
import { ProductsRentalCartoon, ProductsRentalMan, ProductsRentalWomen, youngAfrican , closedCouple, coupleDecorate, couplePlan, loanMortgage, newHouse} from './imports';
import './products.css';

const Products = () => (

<div>
      <div className='container pb-5'> 
  <h1 className='my'>Exciting deals 
  </h1>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
      <h2>Cartoons</h2>
       <div className="product-deals">
       <img src={youngAfrican} alt="" />
       <img src={closedCouple} alt="" />
       <img src={youngAfrican} alt="" />
        </div> 
      </div>
      <div className="carousel-item">
      <h2>Rental-Man</h2>
      <div className="product-deals">
       <img src={couplePlan} alt="" />
       <img src={couplePlan} alt="" />
       <img src={couplePlan} alt="" />
        </div> 
      </div>
      <div className="carousel-item">
      <h2>Rental-Woman</h2>
      <div className="product-deals">
       <img src={loanMortgage} alt="" />
       <img src={loanMortgage} alt="" />
       <img src={newHouse} alt="" />
        </div> 
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>













    {/* <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div> */}
  </div>
);

export default Products;
