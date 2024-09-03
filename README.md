# LottiePlayer

A simple and easy-to-use React component for integrating Lottie animations into your React projects. This wrapper abstracts away the complexity of using Lottie animations, allowing you to quickly and efficiently add animations to your web applications.

## Features

- Supports easy integration of Lottie animations in React projects.
- Simple API for configuration.
- Supports looping, autoplay, and custom styling.
- Lightweight and optimized for performance.

## Installation

To use the `@bytec.in/lottie-player` package in your project, you can install it via npm:

```bash
npm install @bytec.in/lottie-player
```


## Usage

Here's a basic example of how to use the `LottiePlayer` in your React project:

1. **Import the Component**: First, import the `LottiePlayer` component into your React component.

2. **Pass the Required Props**: Use the component and pass the Lottie animation JSON file as a prop.

```jsx
import React from "react";
import LottiePlayer from "@bytec.in/lottie-player";
import animationData from "./path/to/your/animation.json"; // Adjust the path to your animation JSON file

const App = () => (
	<div>
		<h1>Lottie Animation Example</h1>
		<LottiePlayer animationData={animationData} loop={true} autoplay={true} style={{ width: 300, height: 300 }} />
	</div>
);

export default App;
```

### Props

- `animationData` (required): The Lottie animation data in JSON format. This is required for the component to render the animation.
- `loop` (optional): A boolean value that specifies whether the animation should loop. Default is `true`.
- `autoplay` (optional): A boolean value that specifies whether the animation should start playing automatically. Default is `true`.
- `style` (optional): An object specifying custom CSS styles to apply to the animation container. Default is `{}`.

### Example

```jsx
import React from "react";
import LottiePlayer from "@bytec.in/lottie-player";
import animationData from "./animations/sample-animation.json";

const App = () => (
	<div>
		<h1>My Lottie Animation</h1>
		<LottiePlayer animationData={animationData} loop={false} autoplay={true} style={{ width: "100%", maxWidth: 500, height: 400 }} />
	</div>
);

export default App;
```

## Development

If you want to contribute or modify this package, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/bytecrafters-in/lottie-player.git
   cd lottie-player
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Build the package:

   ```bash
   npm run build
   ```

4. Link the package to use it locally in another project:

   ```bash
   npm link
   ```

   Then in your project:

   ```bash
   npm link @bytec.in/lottie-player
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributions

Contributions are welcome! Feel free to open issues or submit pull requests to improve the package.

## Acknowledgements

- [Lottie](https://airbnb.io/lottie/) for providing the animations framework.
- [Lottie-React](https://www.npmjs.com/package/lottie-react) for seamless integration of Lottie animations in React applications.

## Support

If you encounter any issues or have questions, please open an issue on GitHub or contact me directly.


