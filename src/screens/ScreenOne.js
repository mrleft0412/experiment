// src/screens/ScreenOne.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet} from 'react-native';
import Card from '../components/Card';
import i18n from '../i18n';

const Coupons_Screen = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    handleSearch(query);
  }, [query, data]);

  const fetchData = () => {
    const newData = Array.from({ length: 20 }, (_, i) => ({
      id: `${(page - 1) * 20 + i + 1}`,
      title: `${i18n.t('screen_one_title')} ${(page - 1) * 20 + i + 1}`,
    }));
    setData(prevData => [...prevData, ...newData]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSearch = (text) => {
    setQuery(text);
    const filtered = data.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => <Card title={item.title} />;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder={i18n.t('search_placeholder')}
        value={query}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData.length > 0 ? filteredData : data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
});

export default Coupons_Screen;
