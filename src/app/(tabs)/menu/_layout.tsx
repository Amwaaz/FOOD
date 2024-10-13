//layout is the component that will wrap around others in this grp(id and index)

//2 headers cz aik tabs k layout se arha hai the one with i symbol other form this layout
//yahan se hm main screen pe jo index aur detail pe jo id arha hai wo change krden ge
//aik tareeqa to ye hai k hmne yahan aa k naam btaya k konsi screen ka badalna tha(screen name by default ajata hai on top.)
//aik ye k hm direct uss screen pe jaa k stackscreen use kren
import { Stack } from "expo-router";

export default function MenuStack(){
    return ( 
    <Stack>
        <Stack.Screen 
        name="index" 
        options={{
        title:'MENU',
        headerTitleAlign: 'center',
        headerTitleStyle:{
            fontWeight:'bold',
            fontSize:24,
        }
        }} />
    </Stack>)
}