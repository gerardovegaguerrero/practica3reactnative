import React, { useContext } from 'react';
import { Text, View } from 'react-native'
import { Badge, Icon, withBadge } from 'react-native-elements'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Homescreens';
import Wishlist from '../screens/Listadoscreens';
import Carrito from '../screens/Carritoscreens';
import { Context } from '../context/LibreriaContext';
 

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
   const {contando} = useContext(Context);
  return(
    <Tab.Navigator
      initialRouteName="Libreria"
      tabBarOptions={{
        activeTintColor:"#2291b3",
        inactiveTintColor:"#060606",
        showLabel:true,
        labelStyle:{
            fontSize:12
        },
        style:{
            paddingBottom:5,
            backgroundColor:"#f3f3f1"
        }
      }}
    >   
    
    <Tab.Screen
      name = "Libreria"
      component={HomeScreen}
      options={{
          tabBarLabel:"Inicio",
          tabBarIcon:({color})=>(
          <Ionicons name={"home"} size={20} color={color}/>
          )
      }}
    />

    <Tab.Screen
      name = "Whishlist"
      component={Wishlist}
      options={{
          tabBarLabel:"Wishlist",
          tabBarIcon:({color})=>(
          <View>
          <Ionicons name={"heart-circle-outline"} size={25} color={color}/>
          </View>
          )
      }}
    />

    <Tab.Screen
      name = "Carrito"
      component={Carrito}
      options={{
          tabBarLabel:"Carrito",
          tabBarIcon:({color})=>(<View>
          <Ionicons name={"cart"} size={20} color={color}/> 
           <Badge 
              status="error"
              value={contando}
              containerStyle={{ position: 'absolute', top: 0, left: 20 }}
            />
          </View>
          )
      }}
    />


    </Tab.Navigator>
  )
}