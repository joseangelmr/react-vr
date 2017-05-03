import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Model,
  PointLight,
} from 'react-vr';

export default class reactVR extends React.Component {
  render() {
    return (
      <View>
        <PointLight
          style={{ color: 'white', transform: [{ translate: [0, 400, 700] }] }}
        />
        <Pano source={asset('chess-world.jpg')}/>
        <Model
          style={{
            transform: [
              { translate: [0, -5, -20] },
              { rotateY: -30 },
              { rotateX: -40 },
            ],
          }}
          source={{ obj: asset('box.obj'), mtl: asset('box.mtl') }}
          lit
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('reactVR', () => reactVR);
