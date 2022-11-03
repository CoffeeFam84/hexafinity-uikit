import { DefaultTheme } from "styled-components";
declare const getThemeValue: (path: string, fallback?: any) => (theme: DefaultTheme) => string;
export default getThemeValue;
