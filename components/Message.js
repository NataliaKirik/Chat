import React, {useEffect, useState} from "react";
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";


export const Message = ({date, like, name, photo, replies, title}) => {
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get("window").width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get("window").height);

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get("window").width);
            setAvailableDeviceHeight(Dimensions.get("window").height);
        };

        Dimensions.addEventListener("change", updateLayout);
        return () => {
            Dimensions.removeEventListener("change", updateLayout);
        };
    });

    return (
        <View style={{...styles.row, padding: availableDeviceWidth < 400 ? 10 : 30,}}>
            <View>
                <Image source={photo} style={{
                    ...styles.avatar,
                    ...{
                        width: availableDeviceWidth * 0.24,
                        height: availableDeviceWidth * 0.24,
                        borderRadius: (availableDeviceWidth * 0.24) / 2,
                        marginRight: availableDeviceWidth * 0.07
                    },
                }}/>
            </View>

            <View style={{...styles.mainTitleContainer, width: availableDeviceWidth / 2}}>

                <Text numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{
                          ...styles.title,
                          fontSize: availableDeviceWidth < 400 ? 18 : 28,
                      }}>{title}</Text>
                <Text style={{...styles.name, fontSize: availableDeviceWidth < 400 ? 15 : 25}}
                >{name}
                </Text>
                <Text
                    style={{...styles.replies, fontSize: availableDeviceWidth < 400 ? 14 : 24}}>
                    {`${replies} Replies`}
                </Text>

            </View>

            <View style={styles.heartAndDateContainer}>
                {
                    like ?
                        (<Image
                            style={{
                                ...styles.heartFilled,
                                width: availableDeviceWidth * 0.06,
                                height: availableDeviceWidth * 0.05
                            }}
                            resizeMode={"contain"}
                            source={require("../assets/SeekPng.com_heart-png-transparent_155396.png")}/>)
                        :
                        (<Image
                            style={{
                                ...styles.heart,
                                width: availableDeviceWidth * 0.05,
                                height: availableDeviceWidth * 0.05
                            }}
                            resizeMode={"stretch"}
                            source={require("../assets/unnamed.png")}/>)
                }
                <Text style={{...styles.textDate, fontSize: availableDeviceWidth < 400 ? 14 : 24}}>
                    {date.slice(0, 10)}
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        backgroundColor: "white",
        marginVertical: 7,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        borderRadius: 10,
    },
    avatar: {},
    mainTitleContainer: {
        justifyContent: "space-between",
    },
    title: {
        fontWeight: "bold",
        color: "#222222",
    },
    name: {
        paddingRight: 5,
        color: "#4f5153",
        textAlign: "left",
    },
    replies: {
        fontWeight: "bold",
        color: "#222222",
        marginVertical: 5,
    },
    heart: {
        tintColor: "#6e7f8d",
    },
    heartFilled: {
        width: 20,
        height: 20,
        tintColor: "#df245e",
    },
    textDate: {
        color: "#6e7f8d",

    },
    heartAndDateContainer: {
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginVertical: 5,
    },
});
