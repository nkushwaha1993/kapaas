import React from "react";
import { View, SafeAreaView, ScrollView, Text } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { Formik } from "formik";
import Dropdown from "../components/Dropdown";
import { COLORS } from "../constants/constants";

const GenerateTokenScreen = ({ navigation }) => {
  const [selectedState, setSelectedState] = React.useState("");
  const [selectedCity, setSelectedCity] = React.useState("");
  const [selectedIdType, setSelectedIdtype] = React.useState("");
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
    console.log("hiii", values);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.fullName) {
      errors.fullName = "Full name is required";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }
    if (!selectedState) {
      errors.state = "State is required";
    }
    if (!selectedCity) {
      errors.city = "City is required";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile is required";
    }
    if (!selectedIdType) {
      errors.idType = "Id Type is required";
    }
    if (!values.id) {
      errors.id = "Id is required";
    }
    if (!values.uploadFiles) {
      errors.uploadFiles = "Upload files is required";
    }
    if (!values.vehicleNumber) {
      errors.vehicleNumber = "Vehicle number is required";
    }
    return errors;
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
            validate={validate}
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
                />
                <Input
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                  value={values.address}
                  iconName="routes"
                  label="Address"
                  placeholder="Enter your address"
                  error={errors.address}
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
                  onChangeText={handleChange("mobile")}
                  onBlur={handleBlur("mobile")}
                  value={values.mobile}
                  iconName="phone"
                  label="Mobile Number"
                  placeholder="Enter your mobile number"
                  error={errors.mobile}
                />
                <Dropdown
                  value={values.idType}
                  selected={selectedIdType}
                  setSelected={setSelectedIdtype}
                  onSelect={() => setFieldValue("idType", selectedIdType)}
                  iconName="contacts-outline"
                  label="ID Proof Type"
                  data={["Adhaar Card", "Voter Id", "Pan Card"]}
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
                />
                <Input
                  onChangeText={handleChange("uploadFiles")}
                  onBlur={handleBlur("uploadFiles")}
                  value={values.uploadFiles}
                  iconName="upload-outline"
                  label="Upload files"
                  placeholder="Upload files"
                  error={errors.uploadFiles}
                />
                <Input
                  onChangeText={handleChange("vehicleNumber")}
                  onBlur={handleBlur("vehicleNumber")}
                  value={values.vehicleNumber}
                  iconName="truck-outline"
                  label="Vehicle Number"
                  placeholder="Enter your Vehicle Number"
                  error={errors.vehicleNumber}
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
