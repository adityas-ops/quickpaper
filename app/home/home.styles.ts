import { theme, widthPercentage } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
   },
   header: {
      paddingHorizontal: widthPercentage(4),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10,
   },
   title: {
      textAlign: "center",
      fontFamily: "Skatone",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: 28,
      color: theme.colors.primary,
   },
   searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.colors.backgroundMuted,
      borderRadius: 10,
      paddingHorizontal: 10,
      marginHorizontal: widthPercentage(4),
      marginTop: 20,
   },
   input: {
      flex: 1,
      color: theme.colors.textMuted,
      paddingLeft: 10,
      fontSize: theme.font.md,
   },
   icon: {
      padding: 10,
   },
   indicator: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: theme.colors.accent,
      zIndex:800
   },
});
