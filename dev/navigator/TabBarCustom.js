import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";

export default function TabBarCustom({ state, descriptors, navigation }) {
  return (
    <LinearGradient colors={['#50bffe', '#f6f']} style={styles.container} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
      <View style={styles.tabWrapper}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabButtonWrapper}
            >
              {isFocused ? <View style={styles.focusedBar}></View> : null}
              <Text style={styles.labelText}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: 80,
  },
  tabWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
  },
  focusedBar: {
    width: 50,
    height: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 3,
    position: 'absolute'
  },
  labelText: {
    marginVertical: 23,
    color: '#fff',
    textAlign: 'center',
    width: 50,
    fontSize:18
  },
  tabButtonWrapper: {
    flex: 1
  }
});
