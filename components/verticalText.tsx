import React from 'react';
import { Text, View, StyleProp, TextStyle, ViewStyle } from 'react-native';

interface VerticalTextProps {
    text: string;
    textStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    charHeight?: number;
    charWidth?: number;
}

const VerticalText: React.FC<VerticalTextProps> = ({
    text,
    textStyle,
    containerStyle,
    charHeight = 30,
    charWidth = 30
}) => {
    return (
        <View
            style={[
                {
                    flexDirection: 'column',
                    width: charWidth,
                    height: charHeight * text.length,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                containerStyle
            ]}
        >
            {text.split('').map((char, index) => (
                <Text
                    key={index}
                    style={[
                        {
                            textAlign: 'center',
                            includeFontPadding: false,
                            position: 'absolute',
                            width: charWidth,
                            height: charHeight,
                            top: index * charHeight,
                            transform: [{ rotate: '0deg' }]
                        },
                        textStyle
                    ]}
                >
                    {char}
                </Text>
            ))}
        </View>
    );
};

export default VerticalText;