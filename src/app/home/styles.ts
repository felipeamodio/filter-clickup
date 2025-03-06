import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 72
    },
    listContent: {
        gap: 16,
        paddingHorizontal: 24
    },
    list: {
        maxHeight: 80
    },
    content: {
        backgroundColor: "#CECECE",
        flex: 1,
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32
    },
    gradient: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 200
    }
})