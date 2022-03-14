import {
    IAppContext,
    IAppState,
    IAppStateAction,
    ActionType,
    themeMode,
    IAppContextProps
} from "@models";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useReducer } from "react"
import { getTheme } from "./theme";

const initialState: IAppState =  {
    theme: getTheme(themeMode.LIGHT),
    switchTheme: () => {}
}


const appStateReducer = (state: IAppState, action: IAppStateAction): IAppState => {
    switch (action.type) {
        case ActionType.THEME_SWITCH:
            return {...state, theme: getTheme(action.data)};
        default: 
            return state;
    }
}
    
export const AppContext = createContext<IAppState>(initialState);

export const AppContextProvider = ({ children }: IAppContextProps) => {
    const [appState, dispatch] = useReducer(appStateReducer, initialState);

    const switchTheme = (mode: themeMode) => {
        dispatch({type: ActionType.THEME_SWITCH, data: mode});
    }

    appState.switchTheme = switchTheme;

    return (
        <AppContext.Provider value={appState}>
            <ThemeProvider theme={appState.theme}>
                <CssBaseline />
                { children }
            </ThemeProvider>
        </AppContext.Provider>
    )
}