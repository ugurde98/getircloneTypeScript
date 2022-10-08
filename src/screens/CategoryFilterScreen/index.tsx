import React,{useState} from 'react'
import {  Text, View,ScrollView } from "react-native";
import CategoryFiltering from '../../components/CategoryFiltering'
import TypeFiltering from '../../components/TypeFiltering'
import { Category } from '../../models';

 
function index(props) {
  console.log('props: ', props);
  const [category,setCategory] = useState<Category>(props.route.params.category)
  return (
    <ScrollView>
    <CategoryFiltering  category={category}/>
    <TypeFiltering/>
    </ScrollView>

  )
}

export default index