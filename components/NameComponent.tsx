import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

interface NameComponentProps {
    flex: number,
}

const NameComponent: React.FC<NameComponentProps> = ( props ) => {
    const {
        colors: { accent }
     } = useTheme();
     console.log(accent);
     const { flex } = props;
    return (
        <View style={[styles.container, { flex }]}>
            <Text style={styles.title}>Lukas Helper</Text>
            {/* <View style={[styles.coloredLine, { color: accent }]} /> */}
            <View style={styles.lineStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
    },
    title:{
        fontSize: 20,
    },
    coloredLine:{
        height: 1,
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
   }
});

export default NameComponent;