/* eslint-disable no-undef */
const fs = require("fs");

const packageJsonPath = "./package.json";

// Read package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// Get the current version
const currentVersion = packageJson.version;

// Get the argument for version increment type
const incrementType = process.argv[2]; // Example: node versionIncrement.js minor

if (!["major", "minor", "patch"]?.includes(incrementType)) {
	console.error("Invalid increment type. Please provide one of the following: major, minor, patch");
	process.exit(1);
}

// Get the optional argument for the new version
const newVersionArg = process.argv[3]; // Example: node versionIncrement.js minor 1.1.0

let newVersion;
if (newVersionArg) {
	newVersion = newVersionArg;
} else {
	newVersion = upver(currentVersion, incrementType);
}

// Find and increment the version number in manifest.json
const manifestJson = JSON.parse(manifestJsonContent);
if (manifestJson.version) {
	manifestJson.version = newVersion;
	fs.writeFileSync(manifestJsonPath, JSON.stringify(manifestJson, null, 2));

	console.log("Version upgraded in manifest.json successfully!");
	console.log(`Old Version: ${currentVersion}`);
	console.log(`New Version: ${newVersion}`);
} else {
	console.error("Failed to find the version number in manifest.json");
}

// Update package.json
packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log("Version upgraded in package.json successfully!");
console.log(`Old Version: ${currentVersion}`);
console.log(`New Version: ${newVersion}`);

// Function to increment the version number
function upver(version, type) {
	const parts = version.split(".");
	if (type === "major") {
		parts[0] = parseInt(parts[0]) + 1;
		parts[1] = 0;
		parts[2] = 0;
	} else if (type === "minor") {
		parts[1] = parseInt(parts[1]) + 1;
		parts[2] = 0;
	} else if (type === "patch") {
		parts[2] = parseInt(parts[2]) + 1;
	}
	return parts.join(".");
}
