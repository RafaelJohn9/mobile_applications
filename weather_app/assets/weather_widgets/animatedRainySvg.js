import React from 'react';
import Svg, { G, Circle, Line, Defs, AnimateTransform } from 'react-native-svg';

const AnimatedRainySvg = () => (
    <Svg width="200" height="200" viewBox="0 0 200 200">
        {/* Cloud */}
        <G id="cloud" fill="#B0C4DE">
            <Circle cx="70" cy="70" r="20" />
            <Circle cx="90" cy="70" r="20" />
            <Circle cx="110" cy="70" r="20" />
            <Circle cx="85" cy="85" r="25" />
            <Circle cx="105" cy="85" r="25" />
            <Circle cx="95" cy="100" r="30" />
        </G>

        {/* Raindrops */}
        <G id="raindrops" fill="#1E90FF">
            <Line x1="85" y1="120" x2="85" y2="150" stroke="#1E90FF" strokeWidth="2">
                <AnimateTransform attributeName="transform" type="translate" values="0 0; 0 10; 0 0" dur="0.5s" repeatCount="indefinite" begin="0s" />
            </Line>
            <Line x1="100" y1="120" x2="100" y2="150" stroke="#1E90FF" strokeWidth="2">
                <AnimateTransform attributeName="transform" type="translate" values="0 0; 0 10; 0 0" dur="0.5s" repeatCount="indefinite" begin="0.2s" />
            </Line>
            <Line x1="115" y1="120" x2="115" y2="150" stroke="#1E90FF" strokeWidth="2">
                <AnimateTransform attributeName="transform" type="translate" values="0 0; 0 10; 0 0" dur="0.5s" repeatCount="indefinite" begin="0.4s" />
            </Line>
        </G>
    </Svg>
);

export default AnimatedRainySvg;
