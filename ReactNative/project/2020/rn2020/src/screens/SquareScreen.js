//import liraries
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 50;
// create a component
const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}></ColorCounter>
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() =>
          setColor('green', -1 * COLOR_INCREMENT)
        }></ColorCounter>
      <ColorCounter
        color="Green"
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() =>
          setColor('blue', -1 * COLOR_INCREMENT)
        }></ColorCounter>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}></View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default SquareScreen;
