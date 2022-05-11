import * as React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Dimensions
} from 'react-native';
import HomeScreen from '../home/HomeContainer';
import SettingScreen from '../settings/SettingContainer';
import CameraScreen from '../camera/CameraContainer';
import DetailPlaceScreen from '../detailPlace/DetailPlaceContainer'
import NotificationScreen from '../notification/NotificationContainer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as Assets from '../../../assets/utils/Assets';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

let clickIcon = Dimensions.get('screen').height / 27
let notIcon = Dimensions.get('screen').height / 31

const Tab = createBottomTabNavigator();
const ItemStack = createStackNavigator();

function HomeStackScreen({ navigation }) {
    return (
        <ItemStack.Navigator>
            <ItemStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <ItemStack.Screen
                name="DetailPlaceScreen"
                component={DetailPlaceScreen}
                options={{ headerShown: false }}
            />
            <ItemStack.Screen
                name="NotificationScreen"
                component={NotificationScreen}
                options={{ headerShown: false }}
            />
        </ItemStack.Navigator>
    );
}
function SettingStackScreen({ navigation }) {
    return (
        <ItemStack.Navigator>
            <ItemStack.Screen
                name="SettingScreen"
                component={SettingScreen}
                options={{ headerShown: false }}
            />

        </ItemStack.Navigator>
    );
}
function CameraStackScreen({ navigation }) {
    return (
        <ItemStack.Navigator>
            <ItemStack.Screen
                name="CameraScreen"
                component={CameraScreen}
                options={{ headerShown: false }}
            />

        </ItemStack.Navigator>
    );
}

export default function App() {
    return (
        <Tab.Navigator
            labeled={false}
            screenOptions={{
                headerShown: false,
                tabBarLabel: ({ focused, color, size }) => (
                    <Text style={{ color: focused ? styles.foucusFont : styles.focusDeslecet }}>Updates</Text>
                ),
                tabBarStyle: {
                    height: Dimensions.get('screen').height / 12,

                },
            }}
            tabBarOptions={{
                style: {
                    // borderTopWidth: 0,
                    // width: '100%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: colors.white,
                    height: '8%',
                }
            }}
        >
            <Tab.Screen
                name={"Home"}
                component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? Assets.homeSelect : Assets.home}
                            style={focused ? { height: clickIcon, width: clickIcon } : { height: notIcon, width: notIcon }}
                        />
                    ),
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text style={{ color: focused ? colors.green : colors.black }}>Home</Text>
                    ),
                }} />
            <Tab.Screen
                name={"Camera"}
                component={CameraStackScreen}
                options={{

                    tabBarIcon: ({ tintColor }) => (
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 30, // space from bottombar
                                height: 58,
                                width: 58,
                                borderRadius: 58,
                                // backgroundColor: '#5a95ff',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Image
                                source={Assets.phogreen}
                                style={{
                                    width: 55,
                                    height: 55,
                                    // tintColor: '#f1f6f9',
                                    alignContent: 'center',
                                }}
                            />
                        </View>
                    ),
                    tabBarShowLabel: false,
                    tabBarLabel: () => null,
                }} />
            <Tab.Screen
                name={"Setting"}
                component={SettingStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? Assets.settingSelect : Assets.setting}
                            style={focused ? { height: clickIcon, width: clickIcon } : { height: notIcon, width: notIcon }}
                        />
                    ),
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text style={{ color: focused ? colors.green : colors.black }}>Settings</Text>
                    ),
                }} />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    foucusFont: {
        fontFamily: fonts.regular,
        fontSize: 14,
        color: colors.green
    },
    focusDeslecet: {
        fontFamily: fonts.regular,
        fontSize: 14,
        color: colors.black
    },
})