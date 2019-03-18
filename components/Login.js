import React, { Component } from 'react'
import { Text, View , TextInput , TouchableOpacity , StyleSheet} from 'react-native'

export default class Login extends Component {
    render() {
        return (
        <View style={{flex : 1 , backgroundColor : "#7828AD" }}>
            <View  style={{marginTop : 20, alignItems : 'center' , justifyContent : 'center'}}>
                <Text style={{color : 'white' , fontSize : 40 , color : 'yellow' }}>
                    Login User
                </Text>                
            </View> 
            <View style={{marginTop : 100, alignItems : 'stretch' , justifyContent : 'center' , marginHorizontal : 10}}>
                <TextInput
                    style={{backgroundColor : 'white' , height : 50 , padding : 10 , borderRadius : 5}}
                    placeholder="Input your email"
                />
                <TextInput
                    style={{backgroundColor : 'white' , height : 50 , padding : 10 , marginTop : 50 , borderRadius : 5}}
                    placeholder="Input your password"
                />
            </View>
            <View style={{alignItems : 'center' , justifyContent : 'center' , marginTop : 100}}>
                <TouchableOpacity style={{backgroundColor : '#DDDDDD' , padding : 20 , borderRadius : 5}}>
                    <Text style={{fontWeight : 'bold' , fontSize : 20 , color : 'red'}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}
