import React from 'react';
import people from '../../assets/Home-Images/people.png';
import motivePic from '../../assets/Home-Images/main_Image.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Unlock the door to your dream Items – Trade with free <i>Commission</i>!</h1>
      <p>Embark on a Trade-free journey with our platform, where finding your ideal home is not just a dream but a reality. Discover the joy of hassle-free living, as we bring you exclusive offers on affordable luxury spaces. Your perfect space awaits – experience the freedom of living without the burden of monthly Trade payments</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt='' />
        <p>1.5K people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={motivePic} alt='' />
    </div>
  </div>
);

export default Header;
