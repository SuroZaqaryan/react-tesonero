import { ReactNode } from 'react';
import Header from '../components/header/Header';
import PropTypes from 'prop-types';
import './DefaultLayout.scss';

interface Props {
  children: ReactNode | ReactNode[];
}

const DefaultLayout = ({ children }: Props): JSX.Element => {
  return (
    <div id="app">
      <Header />
      {children}
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default DefaultLayout;
