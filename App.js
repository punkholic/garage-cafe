import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";
import AppNavigation from './app/navigation/appNavigation';

const App = () => {
  return (
    <AppNavigation />
  );
};

export default App;

const styles = StyleSheet.create({});
