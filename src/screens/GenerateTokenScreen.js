import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { Formik } from "formik";
import Dropdown from "../components/Dropdown";
import { COLORS } from "../constants/constants";

const GenerateTokenScreen = ({ navigation }) => {
  const initialValues = () => {
    return {
      fullname: "hh",
      address: "ssss",
      state: "",
      city: "",
      mobile: "",
      idType: "",
      id: "",
      uploadFiles: "",
      vehicleNumber: "",
    };
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 20 }}
      >
        <View style={{ marginVertical: 20 }}>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => console.log("ggg",values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <Input
                  onChangeText={handleChange}
                  onBlur={handleBlur("fullname")}
                  value={values.fullName}
                  iconName="account-outline"
                  label="Full Name"
                  placeholder="Enter your full name"
                />
                <Input
                  onChangeText={handleChange}
                  onBlur={handleBlur("address")}
                  value={values.address}
                  iconName="routes"
                  label="Address"
                  placeholder="Enter your address"
                />
                <Dropdown
                  value={values.state}
                  onChangeText={handleChange}
                  onBlur={handleBlur("state")}
                  iconName="map-marker-radius-outline"
                  label="State"
                  placeholder="Select State"
                  data={["Maharashtra", "MadhyaPradesh"]}
                ></Dropdown>
                <Dropdown
                  value={values.city}
                  onChangeText={handleChange}
                  onBlur={handleBlur("city")}
                  iconName="office-building-marker-outline"
                  label="City"
                  placeholder="Select City"
                  data={["Pune", "Indore"]}
                ></Dropdown>
                <Input
                  onChangeText={handleChange}
                  onBlur={handleBlur("mobile")}
                  value={values.mobile}
                  iconName="phone"
                  label="Mobile Number"
                  placeholder="Enter your mobile number"
                />
                <Dropdown
                  value={values.idType}
                  iconName="contacts-outline"
                  label="ID Proof Type"
                  data={["Adhaar Card", "Voter Id", "Pan Card"]}
                  placeholder="Select Id type"
                ></Dropdown>
                <Input
                  onChangeText={handleChange}
                  onBlur={handleBlur("id")}
                  value={values.id}
                  iconName="file-account-outline"
                  label="ID"
                  placeholder="Enter your ID"
                />

                <Input
                  onChangeText={handleChange}
                  onBlur={handleBlur("uploadFiles")}
                  value={values.uploadFiles}
                  iconName="upload-outline"
                  label="Upload files"
                  placeholder="Upload files"
                />
                <Input
                  onChangeText={handleChange}
                  onBlur={handleBlur("vehicleNumber")}
                  value={values.vehicleNumber}
                  iconName="truck-outline"
                  label="Vehicle Number"
                  placeholder="Enter your Vehicle Number"
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
