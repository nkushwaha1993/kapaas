import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const VendorSearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [allVendors, setAllVendors] = useState([
    { id: 1, name: 'Vendor 1', address: 'Address 1', phone: '111-111-1111' },
    { id: 2, name: 'Vendor 2', address: 'Address 2', phone: '222-222-2222' },
    { id: 3, name: 'Vendor 3', address: 'Address 3', phone: '333-333-3333' },
    { id: 4, name: 'Vendor 4', address: 'Address 4', phone: '444-444-4444' },
    { id: 5, name: 'Vendor 5', address: 'Address 5', phone: '555-555-5555' },
    { id: 6, name: 'Vendor 6', address: 'Address 6', phone: '666-666-6666' },
    { id: 7, name: 'Vendor 7', address: 'Address 7', phone: '777-777-7777' },
    { id: 8, name: 'Vendor 8', address: 'Address 8', phone: '888-888-8888' },
    { id: 9, name: 'Vendor 9', address: 'Address 9', phone: '999-999-9999' },
    { id: 10, name: 'Vendor 10', address: 'Address 10', phone: '000-000-0000' },
  ]);
  const [vendors, setVendors] = useState(allVendors);

  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);

  const handleSearch = () => {
    // Filter vendors based on the searchText
    const filteredVendors = vendors.filter((vendor) =>
      vendor.name.toLowerCase().includes(searchText.toLowerCase())
    );
    // Update vendors state with filtered vendors
    setVendors(filteredVendors);
    // Reset page to 1
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(vendors.length / pageSize)) {
      setPage(newPage);
    } 
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.column}>{item.name}</Text>
      <Text style={styles.column}>{item.address}</Text>
      <Text style={styles.column}>{item.phone}</Text>
    </View>
  );

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBoxContainer}>
        <TextInput
          placeholder="Search Vendors"
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchBox}
          onSubmitEditing={handleSearch}
        />
      </View>
      <FlatList
        data={vendors.slice((page - 1) * pageSize, page * pageSize)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={renderSeparator}
      />
      <View style={styles.pagination}>
        <TouchableOpacity
          onPress={() => handlePageChange(page - 1)}
          disabled={page === 1}
          style={page === 1 ? styles.disabledButton : styles.button}
        >
        <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpacity>
        <Text style={styles.pageText}>Page {page}</Text>
        <TouchableOpacity
          onPress={() => handlePageChange(page + 1)}
          disabled={page * pageSize >= vendors.length}
          style={page * pageSize >= vendors.length ? styles.disabledButton : styles.button}
        >
        </TouchableOpacity>   
      </View>  
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  searchBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchBox: {
    flex: 1,
    marginRight: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchButton: {
    backgroundColor: '#008CBA',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tableContainer: {
    flex: 1,
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  rowText: {
    flex: 1,
    fontSize: 16,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  paginationButton: {
    backgroundColor: '#008CBA',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  paginationButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default VendorSearchScreen;
