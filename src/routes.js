import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "./pages/home";
import Passwords from "./pages/passwords";

import {Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

 export default function Routes() {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false, // Desabilitando o Header
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused) {
                            return <Ionicons size={size} color={color} name="home" />
                        }
                        return <Ionicons size={size} color={color} name="home-outline" />
                    }
                }}
            />
            <Tab.Screen
                name="passwords"
                component={Passwords}
                options={{
                    headerShown: false, // Desabilitando o Header
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused) {
                            return <Ionicons size={size} color={color} name="lock-closed" />
                        }
                        return <Ionicons size={size} color={color} name="lock-closed-outline" />
                    }
                }}
            />
        </Tab.Navigator>
    )
 }