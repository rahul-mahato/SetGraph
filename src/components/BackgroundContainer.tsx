import React from 'react';
import { StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

type Props = {
  children: React.ReactNode;
};

const BG_COLORS = ['#151922', '#000f1c', '#151922'];
const BG_LOCATIONS = [0.1, 0.3, 0.8];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 16,
  },
});

const BackgroundContainer: React.FC<Props> = ({ children }) => {
  return (
    <LinearGradient
      colors={BG_COLORS}
      useAngle
      angle={-25}
      locations={BG_LOCATIONS}
      style={styles.container}>
      {children}
    </LinearGradient>
  );
};

export default BackgroundContainer;
