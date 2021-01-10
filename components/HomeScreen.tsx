import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme, Button} from 'react-native-paper';
import NameComponent from './NameComponent';

const HomeScreen = (props) => {
    const {
        colors: { background },
      } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: background }]}>
            <NameComponent flex={3} />
            <View style={styles.buttonList}>
            <Button mode='contained' onPress={() => console.log('Pressed')}>
                Enter Weight
            </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonList: {
        flex: 14,
        justifyContent: 'center',
    }
});

export default HomeScreen;