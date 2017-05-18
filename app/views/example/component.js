
import React, { PropTypes, Component } from 'react';

import styles from '../../style.scss';

import Grid from '../../components/grid/grid';

class Example extends Component {

  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }

  // get data

  componentDidMount() {

    const { getData } = this.props.actions;

    getData();
  }

  // handle input event to update data

  handleEvent(event) {

    const { getData } = this.props.actions;
    const { value } = event.target;

    getData(value);
  }

  render() {

    const { example } = this.props;

    return (
      <section>

        <header role="banner">
          <h1>Flickr API</h1>
          <p>Search Flickr API by tags</p>
          <a className={styles['logo']} href="/" alt="Flickr API">Flickr API</a>
        </header>

        <main>
          <input type="text" onChange={this.handleEvent} placeholder="Search tags..." />
          <Grid data={example} action={this.handleEvent} />
        </main>

      </section>
    );
  }
}

Example.propTypes = {
  example: PropTypes.object,
  actions: PropTypes.object,
};

export default Example;
