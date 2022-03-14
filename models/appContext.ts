import { Theme } from "@mui/material";
import { ReactNode } from "react";
import { themeMode } from "./theme";

export interface IAppState {
    theme: Theme;
    switchTheme: (mode: themeMode) => void;
}

export interface IAppContext extends IAppState {}

export enum ActionType {
    THEME_SWITCH = "THEME_SWITCH",
}

export interface IAppStateAction {
    type: ActionType,
    data: string | number | boolean | any
}

export interface IAppContextProps {
    children: ReactNode;
}
