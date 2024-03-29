import { View, Text, SafeAreaView, StatusBar, Image, TextInput, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <StatusBar />
      <View className="flex-1">  
        <View className="flex flex-col gap-6 mt-4 items-center" style={{height: 460}}>
          <Text className="text-center text-4xl font-bold text-primary pt-4">
            Hi there, welcome!
          </Text>
          <Image 
            source={require("../assets/hanging.jpg")}
            alt='Welcome Image'
            className="h-3/5 w-4/5"
          />
        </View>
        <View className="flex-1 flex flex-col p-4 bg-primary rounded-t-3xl pt-12">
          <Text 
            className="text-secondary text-4xl font-bold text-center pb-4 mb-2"
          >
              Ready to continue? 
          </Text>
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
            >
              <Text className="text-lg text-gray-400">Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    </SafeAreaView>
)}