import { createTheme, Theme } from '@mui/material/styles';
import { IThemeColors, themeMode } from '@models';
import colors from '@styles/colors.module.scss';

export function getTheme(mode: themeMode) : Theme {
    const themeColor = getThemeColors(mode);

    const theme = createTheme({
        palette: {
            mode: mode,
            primary: {
                main: themeColor.primary
            },
            secondary: {
                main: themeColor.secondary
            },
            background: {
                default: themeColor.background,
                paper: themeColor.background
            },
            text: {
                primary: themeColor.text,
                secondary: themeColor.accent
            }
        }
    });

    return theme;
}

function getThemeColors(mode: themeMode): IThemeColors {
    return {
        primary: mode === themeMode.LIGHT ? colors.primaryLight : colors.primaryDark,
        secondary: mode === themeMode.LIGHT ? colors.secondaryLight : colors.secondaryDark,
        background: mode === themeMode.LIGHT ? colors.backgroundLight : colors.backgroundDark,
        text: mode === themeMode.LIGHT ? colors.textLight : colors.textDark,
        accent: mode === themeMode.LIGHT ? colors.accentLight : colors.accentDark,
    }
}