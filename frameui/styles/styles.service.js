const SYMBOL_REFERENCE = '$';

export function getThemeValue(name, theme, fallback) {
    if (isReferenceKey(name)) {
        const themeKey = toThemeKey(name);
        return findThemeValue(themeKey, theme) || fallback;
    }
    return findThemeValue(name, theme) || fallback;
}

function findThemeValue(name, theme) {
    const value = theme[name];
    if (isReferenceKey(value)) {
        const themeKey = toThemeKey(value);
        return findThemeValue(themeKey, theme);
    }
    return value;
}

function isReferenceKey(value) {
    return `${value}`.startsWith(SYMBOL_REFERENCE);
}

function toThemeKey(value) {
    return `${value}`.substring(1);
}