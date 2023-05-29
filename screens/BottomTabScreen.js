import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function (){
    return(
        <SafeAreaView style={{flex:1 , justifyContent:'center',alignItems:'center'}}>
                <View>
                    <Text>I am From bottom tab</Text>
                </View>
                <TouchableOpacity style={{
                    width:'70%',
                    height: 40,
                    justifyContent:"center",
                    alignItems:"center",
                    alignContent:"center",
                    backgroundColor:'#f56887'
                }}>
                    <Text style={{textAlign:'center',color:'white',fontSize:20}}>got to top tab</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}