import { useState } from "react";
import { View, FlatList, useWindowDimensions } from "react-native";
import { styles } from "./styles";
import { Filter, FilterProps } from "@/components/filter";
import Svg, {RadialGradient, Stop, Rect} from "react-native-svg"

const FILTERS: FilterProps[] = [
  { name: "My Work", icon: "schedule", colors: ["#FF8C00", "#FF0080"] },
  { name: "Recent", icon: "history", colors: ["#6A5ACD", "#00FFFF"] },
  { name: "Favorites", icon: "star", colors: ["#FF4500", "#FFD700"] },
  { name: "Spaces", icon: "splitscreen", colors: ["#32CD32", "#008080"] },
  { name: "Docs", icon: "description", colors: ["#FF1493", "#9400D3"] },
  { name: "Dashboard", icon: "dashboard", colors: ["#1E90FF", "#00FA9A"] },
];

export function Home() {
    const [filter, setFilter] = useState(FILTERS[0])
    const [centerX, setCenterX] = useState("11.35%")
    const dimensions = useWindowDimensions()

    function handleItemPress(item: FilterProps, event: any){
        console.log("event", event.nativeEvent.pageX) //getting the item position in X
        const locationX = event.nativeEvent.pageX

        //transform in percentage getting the window width
        const percentage = (locationX / dimensions.width) * 100
        console.log("percentage", percentage)
        setCenterX(`${percentage}%`)

        setFilter(item)
    }

  return (
    <View style={styles.container}>
        <Svg height="100%" width="100%" style={styles.gradient}>
            <RadialGradient id="gradient" cx={centerX} cy="50%" rx="60%" ry="60%">
                <Stop offset="70%" stopColor={filter.colors[0]} stopOpacity={0.3} />
                <Stop offset="100%" stopColor="transparent" stopOpacity={0.1} />
            </RadialGradient>

            <Rect width="100%" height="100%" fill="url(#gradient)" />
        </Svg>
      <FlatList
        data={FILTERS}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => 
            <Filter 
                name={item.name}
                colors={item.colors}
                icon={item.icon}
                isSelected={filter.name === item.name}
                onPress={(event) => handleItemPress(item, event)}
            />
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.content} />
    </View>
  );
}
