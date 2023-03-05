import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import ImagePicker from 'react-native-image-picker';

const App = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const uploadImages = async () => {
    // Check if any file is selected or not
    if (selectedImages.length > 0) {
      const data = new FormData();
      data.append('name', 'Image Upload');

      selectedImages.forEach((image) => {
        data.append('file_attachment[]', {
          name: image.fileName,
          type: image.type,
          uri:
            Platform.OS === 'android'
              ? image.uri
              : image.uri.replace('file://', ''),
        });
      });

      // Please change file upload URL
      let res = await fetch('http://localhost/upload.php', {
        method: 'post',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data; ',
        },
      });
      let responseJson = await res.json();
      if (responseJson.status == 1) {
        alert('Upload Successful');
      }
    } else {
      // If no file selected the show alert
      alert('Please Select File first');
    }
  };

  const selectImages = () => {
    const options = {
      noData: true,
      mediaType: 'photo',
      quality: 1,
      maxWidth: 300,
      maxHeight: 300,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        setSelectedImages((prevSelectedImages) => [
          ...prevSelectedImages,
          response,
        ]);
      }
    });
  };

  const removeImage = (index) => {
    setSelectedImages((prevSelectedImages) =>
      prevSelectedImages.filter((_, i) => i !== index)
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>
          React Native File Upload Example
        </Text>
        <Text style={{ fontSize: 25, marginTop: 20, textAlign: 'center' }}>
          www.aboutreact.com
        </Text>
      </View>
      <ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {selectedImages.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={{ padding: 5 }}
              onPress={() => removeImage(index)}
            >
              <Image
                source={{ uri: image.uri }}
                style={{ width: 100, height: 100 }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={{ alignItems: 'center', padding: 10 }}
          activeOpacity={0.5}
          onPress={selectImages}
        >
          <Text style={{ fontSize: 20 }}>Select Images</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center', padding: 10 }}
          activeOpacity={0.5}
          onPress={uploadImages}
        >
          <Text style={{ fontSize: 20 }}>Upload Images</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default App;
