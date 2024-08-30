import React from "react";
interface LottiePlayerProps {
    animationData: object;
    loop?: boolean;
    autoplay?: boolean;
    height?: string;
    width?: string;
}
declare const LottiePlayer: React.FC<LottiePlayerProps>;
export default LottiePlayer;
