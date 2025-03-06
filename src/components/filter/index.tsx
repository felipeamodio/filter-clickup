import {
  ColorValue,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

export type FilterProps = {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap; //extraindo os ícones
  colors: ColorValue[];
  isSelected?: boolean;
};

type Props = TouchableOpacityProps & FilterProps;

export function Filter({
  name,
  icon,
  colors,
  isSelected = false,
  ...rest
}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialIcons
        name={icon}
        size={24}
        color={isSelected ? colors[0] : "#000000"}
      />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}
