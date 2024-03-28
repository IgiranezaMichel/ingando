/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {UpliftingProvider} from './src/typeDef/demo/provider';
import {useUpliftingMessage} from './src/typeDef/demo/context';

const UpliftingMessageDisplay: React.FC = () => {
  const {message,updateMessage} = useUpliftingMessage();
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (text: string) => {
    setInputMessage(text);
  };

  const handleUpdateClick = () => {
    updateMessage(inputMessage);
    setInputMessage('');
  };

  return (
    <View>
      <Text>{message}</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginVertical: 10,
          paddingHorizontal: 10,
        }}
        value={inputMessage}
        onChangeText={handleInputChange}
      />
      <Button title="Change Message" onPress={handleUpdateClick} />
    </View>
  );
};

// Main component to render the provider and the message display
const Forms: React.FC = () => {
  return (
    <UpliftingProvider>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24, marginBottom: 20}}>Uplifting Message</Text>
        <UpliftingMessageDisplay />
      </View>
    </UpliftingProvider>
  );
};

export default Forms;
