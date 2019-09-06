import React from 'react';
import { StyleSheet, View } from 'react-native';

import Square from './Square'

const Row = (props) => (
    <View style={{ flexDirection: 'row' }}>
        {/* columns or cells */}
        {props.colors.map((color, ind, arr) => {
            const colId = `${props.rowId}${ind}`;
            return (
                <Square key={colId} colors={arr} cellId={colId} color={color} colorIndex={ind} />
            )
        })}
    </View>
);

export default function Grid(props) {
    const { colors } = props;
    return (
        <View style={styles.container}>
            {/* rows */}
            {colors.map((color, ind, arr) => <Row colors={arr} key={ind} rowId={ind} />)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#982f65',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
