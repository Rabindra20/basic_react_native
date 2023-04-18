import {
    Text,
    View,
    StyleSheet
} from 'react-native';
const Stylesheet = () => {
    return (
        <View>
            <Text style={styles.textbox}>Test style</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    textbox: {
        marginTop: 32,
        paddingHorizontal: 24,
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10
    }
})
export default Stylesheet