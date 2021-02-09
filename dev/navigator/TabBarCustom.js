import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

export default function TabBarCustom({ state, descriptors, navigation }) {
  const window = useSelector((store)=> store.window)
  return (
    <View style={styles.container}>
      <View style={styles.tabWrapper}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          var icon_name = null;
          if(route.name == "MyLeagueScreen"){
            icon_name = "trophy"
          }else if(route.name == "LeagueListScreen"){
            icon_name = "sitemap"
          }else if(route.name == "MyInfo"){
            icon_name = "info-circle"
          }
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
            <View style={[styles.tabButtonView, {height: window.height/12}]}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={[isFocused? styles.button_select : styles.button, ]}
                activeOpacity={1}
              >
                <View style={{width:'100%', alignItems:'center'}}>
                  <Icon name={icon_name} size={30} color={isFocused? 'rgba(86, 133, 255, 255)': "rgba(172, 172, 181, 255)"}></Icon>
                    <Text style={isFocused? styles.labelText_Select: styles.labelText}>
                        {label}
                    </Text>
                </View>
                  
                  
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    flex:0.11,
  },
  tabWrapper: {
    flexDirection: 'row',
    height: '100%',
  },
  labelText: {
    "fontFamily": "Noto Sans CJK KR",
    "fontWeight": "400",
    "color": "rgba(112, 112, 112, 255)",
    textAlign: 'center',
    fontSize:18,
    width:'100%'
  },
  labelText_Select: {
    "fontFamily": "Noto Sans CJK KR",
    "fontWeight": "700",
    "color": "rgba(86, 133, 255, 255)",
    textAlign: 'center',
    fontSize:18,
    width:'100%'
  },
  tabButtonWrapper: {
    flex: 1
  },
  button_select:{
    flexDirection:"row",
    flex:1,
    justifyContent : 'center',
    alignItems:'center',
    "borderColor": "rgba(172, 172, 181, 255)",
    borderTopWidth:1,
  },
  tabButtonView:{
    flex:1,
    flexDirection:'row',
  },
  button:{
    flexDirection:"row",
    flex:1,
    justifyContent : 'center',
    alignItems:'center',
    "borderColor": "rgba(172, 172, 181, 255)",
    "backgroundColor": "#EEEEEE",
    borderTopWidth:1,
  }
  
});
