import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import HeaderMain from '../../components/HeaderMain'
import BannerCarousel from '../../components/BannerCarousel'
import CategoryItem from '../../components/CategoryItem'
import MainCategories from '../../components/MainCategories'

function index() {
  return (
    <ScrollView  stickyHeaderIndices={[0]} style={{flex:1,backgroundColor:'#f5f5f5'}}>
        <HeaderMain/>
        <BannerCarousel/>
        <MainCategories/>
    </ScrollView>
  );
}

export default index;
