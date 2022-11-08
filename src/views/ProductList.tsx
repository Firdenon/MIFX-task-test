import { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  Alert,
} from "react-native";
import ProductItem from "../components/ProductItem";
import CategoryItem from "../components/CategoryItem";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Product } from "../shared/model/productModel";
import { Category } from "../shared/model/categoryModel";
import { fetchCategory, fetchProducts } from "../service/https";

const ProductList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    onFetch();
  }, []);

  const onFetch = useCallback(() => {
    setLoading(true);
    setError("");
    Promise.all([fetchCategory(), fetchProducts()])
      .then((values) => {
        setCategory(values[0].data);
        setProducts(values[1].data);
      })
      .catch((err) => {
        console.error(err);
        setError("Oops.. Something Went wrong, Please pull to refresh");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const renderError = () => {
    if (error.length === 0) return null;
    return (
      <View style={{ justifyContent: "center", marginTop: 40 }}>
        <Text
          style={{
            textAlign: "center",
          }}
        >
          {error}
        </Text>
      </View>
    );
  };

  return (
    <View style={{ height: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
          marginTop: 10,
        }}
      >
        <View
          style={{
            flex: 4,
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15,
          }}
        >
          <View style={style.icon}>
            <MaterialCommunityIcons
              name="arrow-left-thin"
              size={25}
              color="black"
            />
          </View>
          <Text style={{ fontSize: 30, fontWeight: "bold", marginLeft: 20 }}>
            Shoes
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
          }}
        >
          <View style={style.icon}>
            <MaterialCommunityIcons name="tune" size={25} color="black" />
          </View>
        </View>
      </View>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="grey"
          style={{ height: "80%" }}
        />
      ) : (
        <View style={{ flex: 1 }}>
          <View>
            {category && error.length === 0 ? (
              <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                style={{ marginVertical: 10 }}
                horizontal
                data={category}
                keyExtractor={(item) => item.id}
                renderItem={(item) => <CategoryItem category={item.item} />}
              />
            ) : (
              ""
            )}
          </View>
          {products ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              style={{ paddingHorizontal: 10 }}
              data={products}
              renderItem={(item) => <ProductItem product={item.item} />}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              keyExtractor={(item) => item.id}
              numColumns={2}
              horizontal={false}
              ListEmptyComponent={renderError}
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={onFetch} />
              }
            />
          ) : (
            ""
          )}
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  icon: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default ProductList;
