import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import { vendorSearch as vendorSearchService } from "../services/vendor.service";
import Input from "../components/Input";
import Button from "../components/Button";
import { COLORS } from "../constants/constants";
import { Dimensions } from "react-native";

const VendorSearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // handleSearch();
  }, [page]);

  const handleSearch = async () => {
    console.log("handlesearch");
    await vendorSearchService(searchText)
      .then((response) => {
        setSearchResults(response);
      })
      .catch((error) => {
        console.log("Exception");
      });
  };

  const handleRowPress = (item) => {
    console.log("Row pressed: ", item);
  };

  // const renderRow = ({ item }) => (
  //   <TouchableOpacity
  //     onPress={() => handleRowPress(item)}
  //     style={styles.rowContainer}
  //   >
  //     <View style={styles.row}>
  //       <Text style={styles.rowTitle}>{item.name}</Text>
  //       <Text style={styles.rowDescription}>{item.description}</Text>
  //     </View>
  //   </TouchableOpacity>
  // );

  // const render = ({ item }) => (
  //   <TouchableOpacity>
  //     <Text>
  //       {item.firstName} , {item.lastName}
  //     </Text>
  //   </TouchableOpacity>
  // );

  return (
    <SafeAreaView style={{  flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingEnd: 40 }}>
        <View
          style={{
            marginVertical: 20,
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Input
            onChangeText={setSearchText}
            value={searchText}
            placeholder="Search"
            width={0.7}
          />
          <View
            style={{
              marginBottom: 12,
              paddingHorizontal: 5,
              borderRadius: 8,
            }}
          >
            <Button
              title=""
              onPress={handleSearch}
              iconName="magnify"
              width={0.2}
              buttonStyle={{ paddingHorizontal: 20, borderRadius: 4 }}
            />
          </View>
        </View>
      </ScrollView>
      {/* {searchResults && (
        <FlatList
          data={searchResults}
          renderItem={render}
          keyExtractor={(item) => item.id.toString()}
          style={styles.resultsList}
        />
      )} */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    width: "100%",
  },
  input: {
    borderColor: COLORS.darkBlue,
    alignItems: "center",
    height: 55,
    width: "100%",
    backgroundColor: COLORS.light,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "top",
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    paddingVertical: 16,
    width: "100%",
  },
  searchButton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginLeft: 16,
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  resultsList: {
    flex: 1,
    marginTop: 16,
  },
  rowContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  row: {
    padding: 16,
  },
  rowTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
    color: "#333",
  },
  rowDescription: {
    fontSize: 16,
    color: "#666",
  },
});

export default VendorSearchScreen;
