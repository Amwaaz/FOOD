//this is the default file
//index ye main file hai jb main aayi gi tb hm menu main redirect hojaien ge

//If your tabs folder contains a _layout.tsx file, this file likely sets up the tab navigation structure. It may automatically treat any index.tsx file as a new tab and display it at the bottom of the screen.

//When users open the main tabs route (e.g., they click on the tab or the app starts), this index.tsx file acts as the default screen.
// Instead of showing content or UI, it immediately redirects users to the /menu/ route.
//Keeping an index.tsx in tabs (for main tab layout) and another index.tsx in menu (for menu-related content) helps maintain a clean, modular structure.

import { Redirect } from "expo-router"

export default function TabIndex(){
    return <Redirect href={'/menu/'}/>
}