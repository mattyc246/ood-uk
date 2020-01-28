import React from "react";
import { Image } from "react-native";
import {
  View,
  Text,
  Card,
  CardItem,
  Body,
  Left,
  Button,
  Icon
} from "native-base";
import { PRODUCTS } from "../constants/Products";

const ProductScroll = () => {
  return (
    <View style={styles.container}>
      {PRODUCTS.map((product, index) => {
        return (
          <Card transparent key={index}>
            <CardItem>
              <Left>
                <Image
                  source={{ uri: product.imgUrl }}
                  style={styles.productImage}
                />
                <Body>
                  <Text style={styles.textCenter}>{product.productName}</Text>
                  <Text style={styles.textCenter}>{product.weight}</Text>
                  <View style={styles.buttonContainer}>
                    <Button success>
                      <Text>{product.price}</Text>
                    </Button>
                    <Button iconRight warning>
                      <Text>Buy Again</Text>
                      <Icon type="FontAwesome5" name="cart-plus" />
                    </Button>
                  </View>
                </Body>
              </Left>
            </CardItem>
          </Card>
        );
      })}
    </View>
  );
};

const styles = {
  container: {
    width: "100%",
    padding: 10
  },
  textCenter: {
    textAlign: "center"
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 5
  },
  productImage: {
    height: 100,
    width: 100
  }
};

export default ProductScroll;
