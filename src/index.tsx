import React, { useEffect, useRef } from "react";
import lottie from "lottie-web"; // Move import to the top

interface LottiePlayerProps {
	animationData: object;
	loop?: boolean;
	autoplay?: boolean;
	height?: string;
	width?: string;
	className?: string;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ animationData, loop = true, autoplay = true, height = "100%", width = "100%", className = "" }) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let animationInstance: any;

		if (containerRef.current) {
			animationInstance = lottie.loadAnimation({
				container: containerRef.current!,
				renderer: "svg",
				loop,
				autoplay,
				animationData
			});
		}

		return () => {
			if (animationInstance) {
				animationInstance.destroy(); // Clean up on unmount
			}
		};
	}, [animationData, loop, autoplay]);

	return <div ref={containerRef} style={{ width, height }} className={className} />;
};

export default LottiePlayer;
