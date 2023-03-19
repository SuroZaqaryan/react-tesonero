import { useState } from 'react';
import Collapsible from 'react-collapsible';

import userAvatar from 'assets/images/home-images/main-section-images/left-block/user-avatar.png';
import quote from 'assets/images/home-images/main-section-images/left-block/quotes.svg';
import dropdownIcon from 'assets/images/home-images/main-section-images/right-block/dropdown-arrow.svg';

import Connect from 'assets/images/home-images/main-section-images/right-block/connect.svg';
import Flasher from 'assets/images/home-images/main-section-images/right-block/flasher.svg';
import Lamp from 'assets/images/home-images/main-section-images/right-block/lamp.svg';
import Controller from 'assets/images/home-images/main-section-images/right-block/controller.svg';
import Network from 'assets/images/home-images/main-section-images/right-block/network.svg';

import './MainSection.scss';

type ItemsObject = {
  title: string;
  description: string;
  image: string;
  isOpen: boolean;
};

function MainSection() {
  const [items, setItems] = useState<ItemsObject[]>([
    {
      title: 'Lorem ipsum, dolor sit amet adipisicing elit.',
      description: `
          Laboriosam quas, aut consectetur
          animi
          autem aliquid
          consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit
        `,
      image: Controller,
      isOpen: false,
    },
    {
      title: 'Lorem ipsum, dolor sit amet adipisicing elit.',
      description: `
        Laboriosam quas, aut consectetur
        animi
        autem aliquid
        consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit
      `,
      image: Flasher,
      isOpen: false,
    },
    {
      title: 'Lorem ipsum, dolor sit amet adipisicing elit.',
      description: `
        Laboriosam quas, aut consectetur
        animi
        autem aliquid
        consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit
      `,
      image: Lamp,
      isOpen: false,
    },
    {
      title: 'Lorem ipsum, dolor sit amet adipisicing elit.',
      description: `
        Laboriosam quas, aut consectetur
        animi
        autem aliquid
        consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit
      `,
      image: Network,
      isOpen: false,
    },
    {
      title: 'Lorem ipsum, dolor sit amet adipisicing elit.',
      description: `
        Laboriosam quas, aut consectetur
        animi
        autem aliquid
        consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit
      `,
      image: Connect,
      isOpen: false,
    },
  ]);

  const openDropdown = (currentIndex: number): void => {
    const updatedItems = items.map((item, idx) => {
      if (currentIndex === idx) {
        return { ...item, isOpen: !item.isOpen };
      }
      return { ...item, isOpen: false };
    });
    setItems(updatedItems);
  };

  return (
    <section className="main">
      <div className="main__left-block">
        <hr />

        <div className="main__title">
          <h2>
            Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
          </h2>
        </div>

        <div className="main__user-block">
          <div className="main__user-block-image">
            <img src={userAvatar} alt="userAvatar" />
          </div>

          <div className="main__user-block-description">
            <div className="quote-top">
              <img src={quote} alt="quote" />
            </div>
            <div className="main__user-block-text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam quas, aut consectetur animi autem aliquid
                consequuntur suscipit exercitationem laborum cupiditate magnam
                eaque quae deleniti, iste nisi expedita, provident excepturi
                officia! Porro ab rerum omnis magnam eligendi error nobis
                dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?
                Porro ab rerum omnis magnam eligendi error nobis dolore?
                <span className="user-name">Jane Doe</span>
              </p>
            </div>
            <div className="quote-bottom">
              <img src={quote} alt="quote" />
            </div>
          </div>
        </div>

        <div className="main__user-detail">
          <div className="main__user-detail-block">
            <div className="main__user-detail-block-text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam quas, aut consectetur animi autem aliquid
                <span className="user-name">Jane Doe</span>
              </p>
            </div>

            <div className="main__user-detail-block-image">
              <img src={userAvatar} alt="userAvatar" />
            </div>
          </div>

          <div className="main__user-detail-block right">
            <div className="main__user-detail-block-text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam quas, aut consectetur animi autem aliquid
                <span className="user-name">Jane Doe</span>
              </p>
            </div>

            <div className="main__user-detail-block-image">
              <img src={userAvatar} alt="userAvatar" />
            </div>
          </div>
        </div>
      </div>
      <div className="main__right-block">
        <hr />

        <div className="main__title">
          <h2>
            Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
          </h2>
        </div>

        <p className="margin__right-block-text">
          Porro ab rerum omnis magnam eligendi error nobis dolore?
        </p>

        <div className="main__right-block-items">
          {items.map((item, idx) => (
            <div
              className="main__right-block-item"
              onClick={() => openDropdown(idx)}
              key={idx}
            >
              <div
                className={`main__right-block-item-header ${
                  item.isOpen ? 'dropdown-open' : 'dropdown-close'
                }`}
              >

                <div>
                  <div className="main__right-block-item-icon">
                    <img src={item.image} alt="icon" />
                  </div>
                  <h3 className="main__right-block-item-title">{item.title}</h3>
                </div>

                <div className="main__right-block-item-arrow-icon">
                  <img
                    src={dropdownIcon}
                    alt="arrow"
                  />
                </div>
              </div>

              <Collapsible trigger="" open={item.isOpen}>
                <p>{item.description}</p>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MainSection;
