import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import StorageScreen from "../screens/StorageScreen";
import MypageScreen from '../screens/MypageScreen';
import MapScreen from '../screens/MapScreen';
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";
import { useState } from "react";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableHighlight
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            width:80,
            height:80,
            borderRadius: 40,
            backgroundColor: 'skyblue',
            zIndex:1,
            ...styles.shadow
        }}
        underlayColor='blue'
        onPress={onPress}
    >
        {children}
    </TouchableHighlight>
);

const Tabs = ({navigation}) => {
    const MapScreen2 = () => {
        return <MapScreen stackNavigation={navigation}/>
    }

    return(
        <Tab.Navigator
            initialRouteName="Map"
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    opacity: 100,
                    zIndex:1,
                    ...styles.shadow
                }  
            }}
        >   
            <Tab.Screen name="Storage" component={StorageScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image                    
                            source={require('../assets/icons/bookmark.png')}
                            resizeMode='contain'
                            style={{
                                width: 37,
                                height: 37,
                                tintColor: focused? 'black' : 'grey',
                                zIndex:1,
                            }}
                        />
                        <Text
                            style={{color: focused ? 'black' : 'grey', fontSize: 12,zIndex:1,}}
                        >
                        ?????????
                        </Text>

                    </View>
                )
            }}/>
            <Tab.Screen name="Map" component={MapScreen2} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={focused? require('../assets/icons/locationplus.png') : require('../assets/icons/location.png')}
                            resizeMode='contain'
                            style={{
                                width: 40,
                                height: 40,
                                tintColor: '#fff',
                                zIndex:1,
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
            />
            <Tab.Screen name="Mypage" component={MypageScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/icons/profile.png')}
                            resizeMode='contain'
                            style={{
                                width:37,
                                height: 37,
                                tintColor: focused? 'black' : 'grey',
                                zIndex:1,
                            }}
                        />
                        <Text
                            style={{color: focused ? 'black' : 'grey', fontSize: 12, zIndex:1}}
                        >
                        ???
                        </Text>

                    </View>
                )
            }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "7F5DF",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5 ,
        elevation: 5,           //only for ios
    },
})
export default Tabs;