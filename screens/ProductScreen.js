import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-web";

export default function ProductScreen() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log("Fetched data:", data);
      setProducts(data.products); // Extract the 'products' array from the fetched data
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError('Error occurred while fetching products.');
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const renderProduct = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <Text>{item.title}</Text>
      <Text>Price: ${item.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleEdit(item)}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleDelete(item.id)}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  
  const handleEdit = (item) => {
    // Logic for handling the edit action for the product
    console.log("Edit product:", item);
  };

  const handleDelete = (productId) => {
    // Logic for handling the delete action for the product
    console.log("Delete product:", productId);
  };

  console.log("Rendered products:", products);

  return (
    <ScrollView>
      {loading ? (
        <View>
          <Text>Loading....</Text>
        </View>
      ) : error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : products.length > 0 ? (
        <View>
          <Text>Product List</Text>
          <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      ) : (
        <View>
          <Text>No products found.</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    button: {
      width: "90%",
      height: 50,
      backgroundColor: "#008080",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      borderRadius: 5,
      marginTop: 10,
      alignSelf: "center",
      marginBottom: 40,
    },
    buttonText:{
        color:'white'
    }
  });
  