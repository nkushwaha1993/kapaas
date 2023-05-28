import React, { useState } from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import FileUpload from '../components/FileUpload'
import { Formik } from 'formik'
import {
  ADHAAR_CARD_LENGTH,
  LICENSE_CARD_LENGTH,
  MOBILE_NUMBER_LENGTH,
  VOTER_ID_CARD_LENGTH,
  PAN_CARD_LENGTH
} from '../constants/constants'
import * as Yup from 'yup'
import StateDropdown from '../components/common/StateDropdown'
import CityDropdown from '../components/common/CityDropdown'
import CustomDropdown from '../components/CustomDropdown'
import { useRoute } from '@react-navigation/native'

const GenerateTokenScreen = () => {
  const route = useRoute()
  const [selectedIdType, setSelectedIdType] = useState('')
  const getIdLength = () => {
    switch (selectedIdType) {
      case 'Adhaar Card':
        return ADHAAR_CARD_LENGTH
      case 'Voter Id':
        return VOTER_ID_CARD_LENGTH
      case 'Pan Card':
        return PAN_CARD_LENGTH
      case 'License':
        return LICENSE_CARD_LENGTH
      default:
        return ADHAAR_CARD_LENGTH
    }
  }

  const GenerateTokenSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required.'),
    lastName: Yup.string().required('Last name is required.'),
    address: Yup.string().required('Address is required.'),
    state: Yup.string().required('State is required.'),
    city: Yup.string().required('City is required.'),
    mobile: Yup.string()
      .required('Mobile number is required.')
      .min(10, 'Invalid mobile number'),
    idType: Yup.string().required('Id type is required.'),
    idNumber: Yup.string()
      .required('Id is required.')
      .min(getIdLength(), `Invalid ${selectedIdType}`),
    vehicleNumber: Yup.string()
      .required('Vehicle number is required.')
      .min(10, 'Invalid vehicle number')
  })

  const initialValues = () => {
    const vendorDetails = route?.params?.vendorDetails
    return {
      firstName: vendorDetails?.firstName,
      lastName: vendorDetails?.lastName,
      address: vendorDetails?.address,
      state: vendorDetails?.state,
      city: vendorDetails?.city,
      mobile: vendorDetails?.mobile,
      idType: vendorDetails?.idType,
      idNumber: vendorDetails?.idNumber,
      uploadFiles: '',
      vehicleNumber: vendorDetails?.vehicleNumber
    }
  }

  const onSubmithandler = (values) => {
    console.log(values)
  }

  const handleKeyPress = (event) => {
    const numericRegex = /^[0-9]*$/
    if (!numericRegex.test(event.nativeEvent.key)) {
      event.preventDefault()
    }
  }

  const handleMobileNumberChange = (value, setFieldValue) => {
    const formattedMobileNumber = value.replace(/[^0-9]/g, '')
    setFieldValue('mobile', formattedMobileNumber)
  }

  const onSelectIdChange = (selectedId, setFieldValue) => {
    setSelectedIdType(selectedId.value)
    setFieldValue('idType', selectedId.value)
  }

  const handleState = (selectedItems, setFieldValue) => {
    setFieldValue('state', selectedItems.value)
  }

  const handleCity = (selectedItems, setFieldValue) => {
    setFieldValue('city', selectedItems.value)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flexGrow: 1 }}
        contentContainerStyle={{
          paddingTop: 10,
          paddingHorizontal: 20,
          paddingBottom: 20
        }}
        showsVerticalScrollIndicator={true}
      >
        <View style={{ marginVertical: 20, flex: 1 }}>
          <Formik
            initialValues={initialValues()}
            enableReinitialize={true}
            onSubmit={onSubmithandler}
            validationSchema={GenerateTokenSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              setFieldValue
            }) => (
              <>
                <Input
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                  label={'First Name'}
                  placeholder="Enter your first name"
                  error={errors.firstName}
                  maxLength={50}
                  width={0.95}
                />
                <Input
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                  label={'Last Name'}
                  placeholder="Enter your last name"
                  error={errors.lastName}
                  maxLength={50}
                  width={0.95}
                />
                <Input
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.address}
                  label="Address"
                  placeholder="Enter your address"
                  error={errors.address}
                  height={100}
                  width={0.95}
                />
                <StateDropdown
                  onChange={(event) => handleState(event, setFieldValue)}
                  value={values.state}
                  error={errors.state}
                />
                <CityDropdown
                  onChange={(event) => handleCity(event, setFieldValue)}
                  value={values.city}
                  error={errors.city}
                />
                <Input
                  onChangeText={(event) => {
                    handleMobileNumberChange(event, setFieldValue)
                  }}
                  onBlur={handleBlur('mobile')}
                  value={values.mobile}
                  label="Mobile Number"
                  placeholder="Enter your mobile number"
                  error={errors.mobile}
                  keyboardType="numeric"
                  maxLength={MOBILE_NUMBER_LENGTH}
                  onKeyPress={handleKeyPress}
                  width={0.95}
                />
                <CustomDropdown
                  data={[
                    {
                      value: 'Adhaar Card',
                      label: 'Adhaar Card'
                    },
                    {
                      value: 'Voter Id',
                      label: 'Voter Id'
                    },
                    {
                      value: 'Pan Card',
                      label: 'Pan Card'
                    },
                    {
                      value: 'License',
                      label: 'License'
                    }
                  ]}
                  search={false}
                  placeholder="Select Id type"
                  value={values.idType}
                  onChange={(event) => {
                    onSelectIdChange(event, setFieldValue)
                  }}
                  error={errors.idType}
                ></CustomDropdown>
                <Input
                  onChangeText={handleChange('idNumber')}
                  onBlur={handleBlur('idNumber')}
                  value={values.idNumber}
                  label="ID"
                  placeholder="Enter your ID"
                  error={errors.id}
                  maxLength={getIdLength()}
                  width={0.95}
                />
                <Input
                  onChangeText={handleChange('vehicleNumber')}
                  onBlur={handleBlur('vehicleNumber')}
                  value={values.vehicleNumber}
                  label="Vehicle Number"
                  placeholder="Enter your Vehicle Number"
                  error={errors.vehicleNumber}
                  maxLength={10}
                  width={0.95}
                />
                <FileUpload setFieldValue={setFieldValue} />
                <Button
                  title="Generate Token"
                  onPress={handleSubmit}
                  width={0.95}
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default GenerateTokenScreen
