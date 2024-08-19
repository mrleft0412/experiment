// src/navigation/AppNavigator.js
import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import i18n from '../i18n';  // Import i18n configuration
import Coupons_Screen from '../screens/ScreenOne';
import Cards_Screen from '../screens/ScreenTwo';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const switchLanguage = (lang) => {
    i18n.locale = lang;
    // To trigger re-render if necessary, you might need to use a state variable or force a re-render by some other means.
  };

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName="ScreenOne"
      screenOptions={{
        headerRight: () => (
          <Button
            onPress={() => switchLanguage(i18n.locale === 'en' ? 'es' : 'en')}
            title={i18n.locale === 'en' ? 'ES' : 'EN'}
          />
        ),
      }}      
      >
        <Tab.Screen name="My Coupons" component={Coupons_Screen} />
        <Tab.Screen name="My Cards" component={Cards_Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
