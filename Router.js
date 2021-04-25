import React,{Component} from 'react';
import { StackNavigator } from 'react-navigation'
import detailsPage from './detailsPage'
// 初始化StackNavigator
export const  Routers = StackNavigator({
    // 将TabNavigator包裹在StackNavigator里面可以保证跳转页面的时候隐藏tabbar
    App:{
        screen:App,
    },
    detailsPage:{
        screen:detailsPage,
    }
  },{
  
  });