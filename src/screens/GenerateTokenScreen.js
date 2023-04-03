import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import FileUpload from "../components/FileUpload";
import { Formik } from "formik";
import Dropdown from "../components/Dropdown";
import {
  COLORS,
  ADHAAR_CARD_LENGTH,
  LICENSE_CARD_LENGTH,
  MOBILE_NUMBER_LENGTH,
  VOTER_ID_CARD_LENGTH,
  PAN_CARD_LENGTH,
} from "../constants/constants";
import * as Yup from "yup";

const GenerateTokenScreen = ({ navigation }) => {
  const [selectedState, setSelectedState] = React.useState("");
  const [selectedCity, setSelectedCity] = React.useState("");
  const [selectedIdType, setSelectedIdtype] = React.useState("Id");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState(null);

  const getIdLength = () => {
    switch (selectedIdType) {
      case "Adhaar Card":
        return ADHAAR_CARD_LENGTH;
      case "Voter Id":
        return VOTER_ID_CARD_LENGTH;
      case "Pan Card":
        return PAN_CARD_LENGTH;
      case "License":
        return LICENSE_CARD_LENGTH;
      default:
        return ADHAAR_CARD_LENGTH;
    }
  };

  const GenerateTokenSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required."),
    address: Yup.string().required("Address is required."),
    state: Yup.string().required("State is required."),
    city: Yup.string().required("City is required."),
    mobile: Yup.string()
      .required("Mobile number is required.")
      .min(10, "Invalid mobile number"),
    idType: Yup.string().required("Id type is required."),
    id: Yup.string()
      .required("Id is required.")
      .min(getIdLength(), `Invalid ${selectedIdType}`),
    vehicleNumber: Yup.string()
      .required("Vehicle number is required.")
      .min(10, "Invalid vehicle number"),
  });

  const initialValues = () => {
    return {
      fullName: "",
      address: "",
      state: "",
      city: "",
      mobile: "",
      idType: "",
      id: "",
      uploadFiles: "",
      vehicleNumber: "",
    };
  };

  const onSubmithandler = (values) => {
    console.log(values);
  };

  const handleKeyPress = (event) => {
    const numericRegex = /^[0-9]*$/;
    if (!numericRegex.test(event.nativeEvent.key)) {
      event.preventDefault();
    }
  };

  const handleMobileNumberChange = (value, setFieldValue) => {
    const formattedMobileNumber = value.replace(/[^0-9]/g, "");
    setMobileNumber(formattedMobileNumber);
    setFieldValue("mobile", formattedMobileNumber);
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 20 }}
      >
        <View style={{ marginVertical: 20 }}>
          <Formik
            initialValues={initialValues()}
            onSubmit={onSubmithandler}
            validationSchema={GenerateTokenSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              setFieldValue,
            }) => (
              <>
                <Input
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  value={values.fullName}
                  iconName="account-outline"
                  label="Full Name"
                  placeholder="Enter your full name"
                  error={errors.fullName}
                  maxLength={50}
                />
                <Input
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                  value={values.address}
                  iconName="routes"
                  label="Address"
                  placeholder="Enter your address"
                  error={errors.address}
                  height={100}
                />
                <Dropdown
                  selected={selectedState}
                  setSelected={setSelectedState}
                  onSelect={() => setFieldValue("state", selectedState)}
                  value={values.state}
                  iconName="map-marker-radius-outline"
                  label="State"
                  placeholder="Select State"
                  data={["Maharashtra", "MadhyaPradesh"]}
                  error={errors.state}
                ></Dropdown>
                <Dropdown
                  value={values.city}
                  selected={selectedCity}
                  setSelected={setSelectedCity}
                  onSelect={() => setFieldValue("city", selectedCity)}
                  iconName="office-building-marker-outline"
                  label="City"
                  placeholder="Select City"
                  data={["Pune", "Indore"]}
                  error={errors.city}
                ></Dropdown>
                <Input
                  onChangeText={(event) => {
                    handleMobileNumberChange(event, setFieldValue);
                  }}
                  onBlur={handleBlur("mobile")}
                  value={mobileNumber}
                  iconName="phone"
                  label="Mobile Number"
                  placeholder="Enter your mobile number"
                  error={errors.mobile}
                  keyboardType="numeric"
                  maxLength={MOBILE_NUMBER_LENGTH}
                  onKeyPress={handleKeyPress}
                />
                <Dropdown
                  value={values.idType}
                  selected={selectedIdType}
                  setSelected={setSelectedIdtype}
                  onSelect={() => setFieldValue("idType", selectedIdType)}
                  iconName="contacts-outline"
                  label="ID Proof Type"
                  data={["Adhaar Card", "Voter Id", "Pan Card", "License"]}
                  placeholder="Select Id type"
                  error={errors.idType}
                ></Dropdown>
                <Input
                  onChangeText={handleChange("id")}
                  onBlur={handleBlur("id")}
                  value={values.id}
                  iconName="file-account-outline"
                  label="ID"
                  placeholder="Enter your ID"
                  error={errors.id}
                  maxLength={getIdLength()}
                />
                <Input
                  onChangeText={handleChange("vehicleNumber")}
                  onBlur={handleBlur("vehicleNumber")}
                  value={values.vehicleNumber}
                  iconName="truck-outline"
                  label="Vehicle Number"
                  placeholder="Enter your Vehicle Number"
                  error={errors.vehicleNumber}
                  maxLength={10}
                />
                <FileUpload
                  selectedFile={selectedFile}
                  setSelectedFile={setSelectedFile}
                />
                <Button title="Generate Token" onPress={handleSubmit} />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GenerateTokenScreen;
