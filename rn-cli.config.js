module.exports = {
    getTransformModulePath() {
        return require.resolve("react-native-svg-transformer");
    },
    getSourceExts() {
        return ["js", "svg", "jsx", "svgx"];
    }
};