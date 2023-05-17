import * as React from "react";
import { Searchbar } from "react-native-paper";
import { View, Text } from "react-native";

const SearchbarComponent = ({
  placeholder,
  onSearchChange,
  id,
  searchResults,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    onSearchChange(query, id);
  };

  return (
    <View>
      <Searchbar
        placeholder={placeholder}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {searchResults.map((result) => (
        <Text key={result.id}>{result.value}</Text>
      ))}
    </View>
  );
};

export default SearchbarComponent;
