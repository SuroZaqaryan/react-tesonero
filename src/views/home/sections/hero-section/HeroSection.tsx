import { Swiper, SwiperSlide } from 'swiper/react';
import SVG from 'react-inlinesvg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

import MainImage from 'assets/images/home-images/hero-section-images/cherry.png';
import Service from 'assets/images/home-images/hero-section-images/service.svg';
import Contact from 'assets/images/home-images/hero-section-images/contact.svg';
import Game from 'assets/images/home-images/hero-section-images/game.svg';
import Info from 'assets/images/home-images/hero-section-images/info.svg';
import Network from 'assets/images/home-images/hero-section-images/network.svg';
import Chat from 'assets/images/home-images/hero-section-images/chat.svg';

import './HeroSection.scss';
// https://www.npmjs.com/package/react-inlinesvg

function HeroSection() {
  return (
    <section className="hero">

        <div className="hero__pattern-1" />
        <div className="hero__pattern-2" />


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
              <SVG src={Service} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero__mobile-slider-group">
              <SVG src={Contact} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero__mobile-slider-group">
              <SVG src={Network} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero__mobile-slider-group">
              <SVG src={Chat} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero__mobile-slider-group">
              <SVG src={Game} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero__mobile-slider-group">
              <SVG src={Info} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="hero__content">
          <div className="hero__content-group service">
            {/*<img src={Service} alt="Service" />*/}
            <SVG src={Service} />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="hero__content-group contact">
            <SVG src={Contact} />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="hero__content-group network">
            <SVG src={Network} />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="hero__content-main-image">
            <div className='main-background' />
          </div>

          <div className="hero__content-group chat">
            <SVG src={Chat} />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="hero__content-group game">
            <SVG src={Game} />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="hero__content-group info">
            <SVG src={Info} />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
