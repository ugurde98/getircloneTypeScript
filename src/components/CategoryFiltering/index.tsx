import React,{useState} from "react";
import { TouchableOpacity, View, Text, StyleSheet,Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models";


const{height,width}=Dimensions.get('window')

const CategoryBox= ({item,active}:{item:Category,active:Category})=>{
    return(
        <View style={[{paddingHorizontal:9 ,alignItems:'center',flexDirection:'row'},item.name==active.name && {borderBottomColor:'#ffd00c',borderBottomWidth:2.5}]}>
            <Text style={{fontSize:14,color:'white',fontWeight:'600'}}>{item.name}</Text>
        </View>
    )
}

function index({category}:{category:Category}) {
    const[categories,setCategories]=useState<Category[]>(categoriesGetir)
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      style={{width:'100%',backgroundColor:'#7849f7',height:height*0.065 ,}}
    >
        {categories.map((item)=>(
            <CategoryBox key={item.id} item={item} active={category}/>
        ))}
    </ScrollView>
  );
}

export default index;
