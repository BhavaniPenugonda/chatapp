import { TouchableOpacity } from "react-native";

const CustomActions = () => {

  const onActionPress = () => {}

  return (
    <TouchableOpacity style={styles.container} onPress={onActionPress}>
    <View style={[styles.wrapper, wrapperStyle]}>
        <Text style={[styles.iconText, iconTextStyle]}>+</Text>
      </View>
    </TouchableOpacity>
    
  );
}

export default CustomActions;