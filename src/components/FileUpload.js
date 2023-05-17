import React, { useState, useEffect } from "react";
import { View, Button, Image, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";

const FileUpload = ({ setFieldValue }) => {
  const [imageSource, setImageSource] = useState(null);
  const [fileSource, setFileSource] = useState(null);

  useEffect(() => {
    (imageSource || fileSource) && handleUpload();
  }, [imageSource, fileSource]);

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
      console.log(result.assets[0].uri);
      setImageSource(result.assets[0].uri);
    }
  };

  const handleFilePicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
    });

    if (result.type === "success") {
      setFileSource(result.uri);
    }
  };

  const handleUpload = () => {
    const formData = new FormData();
    console.log(imageSource);
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
    setFieldValue("uploadFiles", formData);
    console.log(formData);
  };

  return (
    <View>
      <Button title="Upload" onPress={handleImagePicker} />
      {imageSource && (
        <View style={{ marginVertical: 10, alignItems: "center" }}>
          <Image
            source={{ uri: imageSource }}
            style={{ width: 200, height: 200 }}
          />
        </View>
      )}
      <View style={{ marginVertical: 20 }}>
        <Button title="Select File" onPress={handleFilePicker} />
        {fileSource && <Text>{fileSource}</Text>}
      </View>
    </View>
  );
};

export default FileUpload;
