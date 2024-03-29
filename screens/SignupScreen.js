import { View, Text, TouchableOpacity, ScrollView, StatusBar, Image, TextInput } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-secondary">
        <StatusBar />
        <TouchableOpacity 
          className="bg-primary w-11 rounded-md mt-4 ml-4"
          onPress={() => navigation.goBack()}
        >
          <AntDesign 
            name="arrowleft" 
            size={28}  
            style={{padding: 6, fontWeight: 700}}
            color="#ebebeb" 
          />
        </TouchableOpacity>

        <View style={{height: 260}} className="flex-1 flex items-center justify-center">
          <Image 
            source={require("../assets/Mobilelogin.jpg")}
            alt="login image"
            className="h-4/5 w-4/5"
          />
        </View>

        <View className="flex-1 flex flex-col px-4 py-2 bg-primary rounded-t-3xl pt-12 h-full">
          <Text 
            className="text-secondary text-4xl font-bold text-center pb-2 mb-2"
          >
              Sign in 
          </Text>
          <TextInput 
            className="bg-gray-400 p-3 rounded-lg mb-4"
            placeholder="Full name"
            placeholderTextColor="#2A5276"
          />

          <TextInput 
            className="bg-gray-400 p-3 rounded-lg mb-4"
            placeholder="Email"
            placeholderTextColor="#2A5276"
          />
          <TextInput 
            className="bg-gray-400 p-3 rounded-lg mb-4"
            placeholder="Phone number"
            placeholderTextColor="#2A5276"
          />

          <TextInput 
            className="bg-gray-400 p-3 rounded-lg mb-4"
            placeholder="Password"
            placeholderTextColor="#2A5276"
            secureTextEntry
          />
          
          <TouchableOpacity
            className="bg-secondary py-4 flex items-center justify-center rounded-xl mb-2"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-primary text-xl font-semibold">Sign up</Text>
          </TouchableOpacity>
          <View className="flex flex-row justify-end gap-1">
            <Text className="text-lg text-secondary">Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              className="pb-4"
            >
              <Text className="text-lg text-gray-400">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  ) 
}