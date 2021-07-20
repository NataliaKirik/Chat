import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const Screen = Dimensions.get("window");
const AVATAR_SIZE = Screen.width * 0.2;


export const Message = ({ date, like, name, photo, replies, title }) => {

  return (
    <View style={styles.row}>
      <View>
        <Image source={photo} style={styles.avatar} />
      </View>

      <View>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={2}
                  ellipsizeMode="tail">{title}
            </Text>
          </View>
        </View>
        <Text style={styles.replies}>{`${replies} Replies`}</Text>
        <Text style={styles.textDate}>
          {date.slice(0, 10)}
        </Text>
        {like ?
          (<Image style={styles.heartFilled}
                  resizeMode={"contain"}
                  source={require("../assets/SeekPng.com_heart-png-transparent_155396.png")} />)
          :
          (<Image style={styles.heart} resizeMode={"contain"} source={require("../assets/unnamed.png")} />)
        }
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    borderWidth: 1,
    backgroundColor: "white",
    marginVertical: 10,
    flexDirection: "row",
    padding: 10,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginRight: 10,
    borderWidth: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#222222",
  },
  titleContainer: {
    width: "90%",
    justifyContent: "center",
  },
  title: {
    width: "67%",
    paddingRight: 5,
    fontSize: 15,
    color: "#4f5153",
    textAlign: "left",
  },
  replies: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#222222",
  },
  heart: {
    width: 20,
    height: 20,
    tintColor: "#6e7f8d",
  },
  heartFilled: {
    width: 20,
    height: 20,
    tintColor: "#df245e",
  },
  textDate: {
    color: "#6e7f8d",
    fontSize: 14,
  },

});
