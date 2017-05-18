
import React, { PropTypes } from 'react';

import styles from '../../style.scss';

import Loader from '../../components/loader/loader';

const Grid = ({ data }) => {

  // map data items
  const items = data.items.map((item, index) => {
    return (
      <div className={styles['grid-item']} key={index}>
        <img src={item.media.m} className={styles['image']} alt={item.title} />
      </div>
    );
  });

  // show loader while waiting data
  if (!items.length) {
    return <Loader size="1" />;
  }

  return (
    <div className={styles['grid']}>
      {items}
    </div>
  );
};

Grid.propTypes = {
  data: PropTypes.object,
};

export default Grid;
