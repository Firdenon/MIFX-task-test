import { View, Text, FlatList, StyleSheet } from "react-native";
import ProductItem from "../components/ProductItem";
import CategoryItem from "../components/CategoryItem";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Product } from "../shared/model/productModel";
import { Category } from "../shared/model/categoryModel";
import DATA_PRODUCT from "../data/product";
import DATA_CATEGORY from "../data/category";

const ProductList = () => {
  const dataProduct: Product[] = DATA_PRODUCT;
  const dataCategory: Category[] = DATA_CATEGORY;
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
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          style={{ marginVertical: 10 }}
          horizontal
          data={dataCategory}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <CategoryItem category={item.item} />}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ height: "100%", paddingHorizontal: 10 }}
        data={dataProduct}
        renderItem={(item) => <ProductItem product={item.item} />}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => item.id}
        numColumns={2}
        horizontal={false}
      />
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
