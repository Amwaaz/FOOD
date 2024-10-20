import Colors from "@/src/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function MenuStack() {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="shopping-cart"
                  size={25}
                  color="#00004D"
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "MENU",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 24,
          },
        }}
      />
    </Stack>
  );
}

//layout is the component that will wrap around others in this grp(id and index)

//2 headers cz aik tabs k layout se arha hai the one with i symbol other form this layout
//yahan se hm main screen pe jo index aur detail pe jo id arha hai wo change krden ge
//aik tareeqa to ye hai k hmne yahan aa k naam btaya k konsi screen ka badalna tha(screen name by default ajata hai on top.)
//aik ye k hm direct uss screen pe jaa k stackscreen use kren
