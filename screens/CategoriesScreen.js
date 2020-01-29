import React from "react";
import {
  View,
  Text,
  Container,
  Content,
  Thumbnail,
  Card,
  H1,
  Button
} from "native-base";
import MainHeader from "../components/MainHeader";
import { productCategories } from "../constants/Categories";
import { TouchableOpacity } from "react-native-gesture-handler";

const CategoriesScreen = ({ navigation }) => {
  return (
    <Container style={styles.container}>
      <MainHeader
        height={100}
        showBack={false}
        showCart={true}
        title="Categories"
      />
      <Content contentContainerStyle={styles.content}>
        {productCategories.map((category, index) => {
          return (
            <Button bordered dark style={styles.invisibleButton}>
              <Thumbnail large source={{ uri: category.imgUrl }} />
              <Text style={styles.textCenter}>{category.name}</Text>
            </Button>
          );
        })}
      </Content>
    </Container>
  );
};

const styles = {
  container: {
    backgroundColor: "rgb(145, 208, 91)"
  },
  content: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    flexGrow: 1
  },
  card: {
    width: "30%",
    height: "20%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  invisibleButton: {
    height: 125,
    margin: 10,
    padding: 10,
    justifyContent: "space-between"
  },
  textCenter: {
    textAlign: "center"
  }
};

export default CategoriesScreen;
