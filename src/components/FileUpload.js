import React, { useState } from "react";
import { View, Button, Image, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";

const FileUpload = ({ setSelectedFile }) => {
  const [imageSource, setImageSource] = useState(null);
  const [fileSource, setFileSource] = useState(null);

  const handleImagePicker = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageSource(result.assets[0].uri).then(() => {
        handleUpload();
      });
    }
  };

  const handleFilePicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
    });

    if (result.type === "success") {
      setFileSource(result.uri).then(() => {
        handleUpload();
      });
    }
  };

  const handleUpload = () => {
    const formData = new FormData();
    if (imageSource) {
      const uriParts = imageSource.split(".");
      const fileType = uriParts[uriParts.length - 1];
      formData.append("image", {
        uri: imageSource,
        name: `image.${fileType}`,
        type: `image/${fileType}`,
      });
    }
    if (fileSource) {
      const uriParts = fileSource.split("/");
      const fileName = uriParts[uriParts.length - 1];
      formData.append("file", {
        uri: fileSource,
        name: fileName,
        type: "*/*",
      });
    }
    setSelectedFile(formData);
  };

  return (
    <View>
      <Button title="Upload" onPress={handleImagePicker} />
      {imageSource && (
        <Image
          source={{ uri: imageSource }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <Button title="Select File" onPress={handleFilePicker} />
      {fileSource && <Text>{fileSource}</Text>}
      {/* <Button
        title="Upload"
        onPress={handleUpload}
        disabled={!imageSource && !fileSource}
      /> */}
    </View>
  );
};

export default FileUpload;
