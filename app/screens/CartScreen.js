import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {themeColors} from '../theme';
import { StatusBar } from 'expo-status-bar';
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import { CheckCircleIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import coffees from "../config/coffees";
import { MapPinIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';


export default function CartScreen() {
    const navigation = useNavigation();
    const [activeCategory, setActiveCategory] = useState(1);
    const [activeCategoryId, setActiveCategoryId] = useState(null);

  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />

      <Image 
        source={require('../../assets/images/beansBackground1.png')} 
        style={{height: height*0.2}} 
        className="w-full absolute -top-5 opacity-10" />
      <SafeAreaView className={ios? '-mb-8': ''}>
        {/* avatar and bell icon */}
        <View className="mx-4 flex-row justify-between items-center">
          <Image source={require('../../assets/images/avatar.png')} 
            className="h-9 w-9 rounded-full" />
          
          <View className="flex-row items-center space-x-2">
            <MapPinIcon size="25" color={themeColors.bgLight} />
            <Text className="font-semibold text-base">
              Damak, Jhapa
            </Text>
          </View>
          <TouchableOpacity 
            onPress={()=> navigation.navigate('table')}
          >
            <CheckCircleIcon size="27" color="black" />
          </TouchableOpacity>
        </View>
     
      
      </SafeAreaView>

      <SafeAreaView>
      <ScrollView
        style={{
          padding: SPACING,
          height: height - 170
        }}
      >

      <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
      {coffees
            .filter((coffee) => {
              if (activeCategoryId === null) {
                return true;
              }
              return coffee.categoryId === activeCategoryId;
            })
            .map((coffee) => (
              <View
                key={coffee.id}
                style={{
                  width: width / 2 - SPACING * 2,
                  marginBottom: SPACING,
                  borderRadius: SPACING * 2,
                  overflow: "hidden",
                }}
              >
                <BlurView
                  tint="dark"
                  intensity={95}
                  style={{
                    padding: SPACING,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      height: 150,
                      width: "100%",
                    }}
                  >
                    <Image
                      source={coffee.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: SPACING * 2,
                      }}
                    />
                    <View
                      style={{
                        position: "absolute",
                        right: 0,
                        borderBottomStartRadius: SPACING * 3,
                        borderTopEndRadius: SPACING * 2,
                        overflow: "hidden",
                      }}
                    >
                      <BlurView
                        tint="dark"
                        intensity={70}
                        style={{
                          flexDirection: "row",
                          padding: SPACING - 2,
                        }}
                      >
                        <Ionicons
                          style={{
                            marginLeft: SPACING / 2,
                          }}
                          name="star"
                          color={colors.primary}
                          size={SPACING * 1.7}
                        />
                        <Text
                          style={{
                            color: colors.white,
                            marginLeft: SPACING / 2,
                          }}
                        >
                          {coffee.rating}
                        </Text>
                      </BlurView>
                    </View>
                  </TouchableOpacity>
                  <Text
                    numberOfLines={2}
                    style={{
                      color: colors.white,
                      fontWeight: "600",
                      fontSize: SPACING * 1.7,
                      marginTop: SPACING,
                      marginBottom: SPACING / 2,
                    }}
                  >
                    {coffee.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{ color: colors.secondary, fontSize: SPACING * 1.2 }}
                  >
                    {coffee.included}
                  </Text>
                  <View
                    style={{
                      marginVertical: SPACING / 2,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          color: colors.primary,
                          marginRight: SPACING / 2,
                          fontSize: SPACING * 1.6,
                        }}
                      >
                        $
                      </Text>
                      <Text
                        style={{ color: colors.white, fontSize: SPACING * 1.6 }}
                      >
                        {coffee.price}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: colors.primary,
                        padding: SPACING / 2,
                        borderRadius: SPACING,
                      }}
                    >
                      <Ionicons
                        name="remove"
                        size={SPACING * 2}
                        color={colors.white}
                      />
                    </TouchableOpacity>
                  </View>
                </BlurView>
              </View>
            ))}
      
        </View>

        </ScrollView>
        </SafeAreaView>
        <Text>
            ABC
        </Text>

    </View>
  )
}
