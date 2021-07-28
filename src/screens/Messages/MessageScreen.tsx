import React, {FC} from "react";
import {FlatList, SafeAreaView} from "react-native";
import DropShadow from "react-native-drop-shadow";
import {Message} from "../../components/Message/Message";
import {DATA} from "../../users-list";


export const MessageScreen: FC = ({navigation}: any) => {

    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                renderItem={({item}) => (
                    <DropShadow
                        style={{
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 0
                            },
                            shadowOpacity: 1,
                            shadowRadius: 3
                        }}
                    >
                        <Message {...item} navigation={navigation}/>
                    </DropShadow>
                )}
                keyExtractor={(_, index) => "List-" + index}
                CellRendererComponent={DropShadow}
            />
        </SafeAreaView>
    );
};
