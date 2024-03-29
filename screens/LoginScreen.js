import { View, Text, TouchableOpacity, ScrollView, StatusBar, Image, TextInput } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-secondary">
        <StatusBar />
        <TouchableOpacity 
          className="bg-primary w-11 mb-8 rounded-md mt-4 ml-4"
          onPress={() => navigation.goBack()}
        >
          <AntDesign 
            name="arrowleft" 
            size={28}  
            style={{padding: 6, fontWeight: 700}}
            color="#ebebeb" 
          />
        </TouchableOpacity>

        <View style={{height: 300}} className="flex-1 flex items-center justify-center">
          <Image 
            source={require("../assets/Mobile-login.jpg")}
            alt="login image"
            className="h-4/5 w-4/5"
          />
        </View>

        <View className="flex-1 flex flex-col px-4 py-2 bg-primary rounded-t-3xl pt-12 h-full">
          <Text 
            className="text-secondary text-4xl font-bold text-center pb-4 mb-2"
          >
              Login 
          </Text>
          <TextInput 
            className="bg-gray-400 p-3 rounded-lg mb-4"
            placeholder="Email"
            placeholderTextColor="#2A5276"
          />
          
          <TextInput 
            className="bg-gray-400 p-3 rounded-lg"
            placeholder="Password"
            placeholderTextColor="#2A5276"
            secureTextEntry
            // passwordRules={true}
          />
          <TouchableOpacity className="py-2" onPress={() => navigation.navigate("Forgot")}>
            <Text className="text-lg text-secondary text-right">Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-secondary py-4 flex items-center justify-center rounded-xl mb-2"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-primary text-xl font-semibold">Login</Text>
          </TouchableOpacity>
          <View className="flex flex-row justify-end gap-1">
            <Text className="text-lg text-secondary">Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Signup")}
              className="pb-4"
            >
              <Text className="text-lg text-gray-400">Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  ) 
}