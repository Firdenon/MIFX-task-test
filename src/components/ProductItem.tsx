import { FC } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Stars from "react-native-stars";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Product } from "../shared/model/productModel";

interface ProductProps {
  product: Product;
}

const ProductItem: FC<ProductProps> = (props) => {
  return (
    <View style={style.card}>
      <ImageBackground
        style={style.image}
        source={{
          uri: props.product.image,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            {props.product.new ? (
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>New</Text>
            ) : props.product.out_of_stock ? (
              <Text style={style.outStock}>Out of stock</Text>
            ) : (
              ""
            )}
          </View>

          {props.product.isFav ? (
            <FontAwesome name="heart" size={16} color={"#ff3333"} />
          ) : (
            <FontAwesome name="heart-o" size={16} color={"#ff3333"} />
          )}
        </View>
      </ImageBackground>
      <View style={{ justifyContent: "space-evenly", flexDirection: "column" }}>
        <View style={{ flexDirection: "row" }}>
          <Stars
            display={props.product.rating}
            count={5}
            half={true}
            spacing={3}
            fullStar={
              <FontAwesome
                style={style.star}
                name="star"
                size={style.star.size}
              />
            }
            emptyStar={
              <FontAwesome
                style={style.star}
                name="star-o"
                size={style.star.size}
              />
            }
            halfStar={
              <FontAwesome
                style={style.star}
                name="star-half-full"
                size={style.star.size}
              />
            }
          />
        </View>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 14,
            color: "#303030",
            fontWeight: "bold",
            marginVertical: 5,
          }}
        >
          {props.product.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {props.product.price}
          </Text>
          <Text style={{ fontSize: 10, fontWeight: "400" }}>
            {props.product.off}
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    flex: 1 / 2,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    margin: 7,
    padding: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  outStock: {
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "red",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
    color: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  star: {
    color: "#ffb752",
    size: 14,
  },
});

export default ProductItem;
