import { heightPercentage, theme, widthPercentage } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: { flex: 1 },
   contentContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#35478c",
      position: "relative",
   },
   heroContainer: {
      width: widthPercentage(100),
      height: heightPercentage(80),
      justifyContent: "center",
      alignItems: "center",
   },
   logo: {
      height: heightPercentage(60),
      width: widthPercentage(100),
      marginTop: heightPercentage(10),
   },
   title: {
      textAlign: "center",
      fontFamily: "Inter",
      fontWeight: "700",
      fontSize: theme.font.xl,
      color: theme.colors.white,
   },
   subTitle: {
      textAlign: "center",
      marginTop: 10,
      fontSize: theme.font.sm,
      color: theme.colors.white,
   },
   btnContainer: {
      width: widthPercentage(100),
      height: heightPercentage(20),
      alignItems: "center",
      position: "absolute",
      bottom: 110,

   },
});
