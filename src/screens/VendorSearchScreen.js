import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { vendorSearch as vendorSearchService } from "../services/vendor.service";

const PAGE_SIZE = 10;

const VendorSearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    //handleSearch();
  }, [page]);

  const handleSearch = async () => {
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

  const renderRow = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleRowPress(item)}
      style={styles.rowContainer}
    >
      <View style={styles.row}>
        <Text style={styles.rowTitle}>{item.name}</Text>
        <Text style={styles.rowDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  const render = ({ item }) => ( 
      <TouchableOpacity>
        <Text>
          {item.firstName} , {item.lastName}
        </Text>
      </TouchableOpacity>   
  );
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      
        {searchResults && (
          <FlatList
            data={searchResults}
            renderItem={render}
            keyExtractor={(item) => item.id.toString()}
            style={styles.resultsList}
          />
        )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 24,
    paddingHorizontal: 16,
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
    paddingHorizontal: 8,
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
