import { View, Text, Modal, Button, TouchableOpacity } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function ErrorModal({ message, open, onCancel }) {
  return (
    <Modal
        visible={open}
        onRequestClose={onCancel}
        animationType="slide"
        presentationStyle="pageSheet"
        style={{flex: 1, backgroundColor: "rgba(14, 116, 144, 0.4)"}}
        className="flex-1 h-screen bg-cyan-700"
    >
        <TouchableOpacity 
          className="bg-primary w-11 rounded-md mt-4 ml-4"
          onPress={() => onCancel()}
        >
          <AntDesign 
            name="arrowleft" 
            size={28}  
            style={{padding: 6, fontWeight: 700}}
            color="#ebebeb" 
          />
        </TouchableOpacity>
        <View className="flex-1 h-full flex items-center justify-center">
            <Text className="text-4xl text-primary italic font-bold text-center mb-4">{message}</Text>
            <TouchableOpacity
                onPress={() => onCancel()}
                className="bg-primary rounded-lg"
            >
                <Text className="text-secondary font-bold p-4">Go Back</Text>
            </TouchableOpacity>
        </View>
    </Modal>
  )
}