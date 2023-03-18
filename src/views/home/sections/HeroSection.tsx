import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

import MainImage from '../../../assets/images/home-images/cherry.png';
import Service from '../../../assets/images/home-images/service.svg';
import Contact from '../../../assets/images/home-images/contact.svg';
import Game from '../../../assets/images/home-images/game.svg';
import Info from '../../../assets/images/home-images/info.svg';
import Network from '../../../assets/images/home-images/network.svg';
import Chat from '../../../assets/images/home-images/chat.svg';
import Pattern1 from '../../../assets/images/home-images/pattern-1.png';
import Pattern2 from '../../../assets/images/home-images/pattern-2.png';

import './HeroSection.scss';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__patterns">
        <img className="hero__pattern-1" src={Pattern1} alt="Service" />
        <img className="hero__pattern-2" src={Pattern2} alt="Service" />
      </div>

      <div className="hero__container">
        <div className="hero-mobile__main-image">
          <img src={MainImage} alt="mainImage" />
        </div>

        <div className="hero__title">
          <hr />
          <h1>Lorem ipsum, dolor sit amet consectetur</h1>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="hero__mobile-slider"
        >
          <SwiperSlide>
            <div className="hero__mobile-slider-group">
              <img src={Service} alt="Service" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__mobile-slider-group">
              <img src={Service} alt="Service" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__mobile-slider-group">
              <img src={Service} alt="Service" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__mobile-slider-group">
              <img src={Service} alt="Service" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="hero__content">
          <div className="hero__content-group service">
            <img src={Service} alt="Service" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="hero__content-group contact">
            <img src={Contact} alt="Contact" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="hero__content-group network">
            <img src={Network} alt="Network" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="hero__content-main-image">
            <img src={MainImage} alt="mainImage" />
          </div>

          <div className="hero__content-group chat">
            <img src={Chat} alt="Chat" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="hero__content-group game">
            <img src={Game} alt="Game" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="hero__content-group info">
            <img src={Info} alt="Info" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
