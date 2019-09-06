import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

export default class Square extends React.Component {
    state = {
        color: this.props.color,
        colorIndex: this.props.colorIndex,
        id: this.props.cellId,
    }
    nextColor = () => {
        const { colors } = this.props;
        const { colorIndex } = this.state;
        const nextColorIndex = colorIndex == (colors.length - 1) ? 0 : colorIndex + 1;
        this.setState({ colorIndex: nextColorIndex, color: colors[nextColorIndex] });
    }
    render () {
        const { color, id } = this.state;
        return (
            <TouchableHighlight
             onPress={() => this.nextColor()} 
             style={{ height: 50, width: 50, borderColor: '#CC532B', borderWidth: 2, backgroundColor: color }}>
                 <Text style={{ color }}> {id} </Text>
            </TouchableHighlight>
        );
    }
}
