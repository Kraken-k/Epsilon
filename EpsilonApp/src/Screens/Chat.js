import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ChatScreen = ({}) => {
  const [message, setMessage] = useState('');
  const route = useRoute();
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(`ws://10.0.2.2:8000/ws/chat/Piyush`);
    ws.onopen = () => console.log('WebSocket connection established.');
    ws.onclose = () => console.log('WebSocket connection closed.');
    ws.onmessage = (event) => setReceivedMessages([...receivedMessages, event.data]);
    return () => ws.close();
  }, []);

  const sendMessage = () => {
    const ws = new WebSocket(`ws://10.0.2.2:8000/ws/chat/Piyush/`);
    if(ws){
    if (!message.trim()) return;
    setReceivedMessages([...receivedMessages, `You: ${message}`]);
    let send = {
      "message" : message
    }
    data = JSON.stringify(send)
    ws.onopen = () => ws.send(data);
    ws.onclose = () => console.log('WebSocket connection closed.');
    }
    setMessage('');
  };

  return (
    <View>
      <Text>Chat Room: {"Piyush"}</Text>
      <View>
        {receivedMessages.map((msg, idx) => <Text key={idx}>{msg}</Text>)}
      </View>
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Type your message here..."
      />
      <Button onPress={sendMessage} title="Send" />
    </View>
  );
};

export default ChatScreen;
