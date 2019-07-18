import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import PropTypes from 'prop-types';

export class AroundMarker extends React.Component {
  static propTypes = {
    position: PropTypes.object.isRequired,
  }

  state = {
    isOpen: false,
  }

  handleMarkerClick = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { position } = this.props;
    return (
      <Marker
        position={position}
        onClick={this.handleMarkerClick}
      >
        {this.state.isOpen ? (
          <InfoWindow>
            <div>say something!</div>
          </InfoWindow>
        ) : null}
      </Marker>
    );
  }
}
