import { createContext,useContext } from "react";


export const ThemeContext = createContext({
    themeMode: "light",
    darkThem:() => {},
    lightThem:() => {}
})



//Now we don't have to create new file for context provider again we can assing same method here too
export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext )
}