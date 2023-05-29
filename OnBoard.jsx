import * as React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "react-native-paper";
import { appNavigator } from "../navigation/appNavigator";
import { Button } from "../components/button";
import { HomeScreen } from "./HomeScreen";

const onSubmitPress = () => {
  navigation.navigate(HomeScreen);
};

const OnBoardScreen = (navigation) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View>
        <View style={{ marginTop: 40 }}>
          <Image
            source={require("../../assets/seeks.png")}
            style={{
              height: 250,
              width: "100%",
              resizeMode: "contain",
              alignSelf: "center",
            }}
          />
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              marginTop: 10,
              alignSelf: "center",
            }}
          >
            Welcome to The Seeks Academy
          </Text>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Fortabas
          </Text>
          <Card
            style={{
              alignContent: "center",
              margin: 15,
              padding: 10,
              shadowColor: "red",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              Do you want your son/daughter to give full attention to education?
              Fulfill your dreams? Surely your answer will be yes. So why late?
              Enroll in "Seeks Academy" today and ensure your success.
            </Text>
          </Card>
        </View>
        <Button title="Get Started" onPress={appNavigator} />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardScreen;
