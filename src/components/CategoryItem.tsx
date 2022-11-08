import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Category } from "../shared/model/categoryModel";

interface CategoryProps {
  category: Category;
}

const CategoryItem: FC<CategoryProps> = (props) => {
  return (
    <View style={style.card}>
      <Text style={style.text}>{props.category.name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "white",
    marginHorizontal: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default CategoryItem;
