//GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --label-color: rgba(29, 30, 33, 0.4); 
  --border-color: rgba(29, 30, 33, 0.1); 
  --background-dark: #1D1E21; // Dark background color
  --background-menu: rgba(29, 30, 33, 0.3); // Dark background menu
  --accent-green: #59B17A; // Green accent color
  --accent-btn: #3F945F; //Green button accent
  --background-light: #F7F8FA; // Light background
  --background-white: #FFFFFF; // White background
  --background-gray: #DCDDDF; // Gray background
  --background-accent-light: rgba(89, 177, 122, 0.1); // Light green accent
  --background-accent-red: rgba(232, 80, 80, 0.1); // Light red accent
  --accent-red: #E85050; // Red accent
  --accent-blue: #70A6E8; // Blue accent
  --accent-orange: #F79042; // Orange accent
  --accent-purple: #8059E4; // Purple accent
  --btn--accent-red: rgba(232, 80, 80, 0.5);
  --btn--accent-green: rgba(89, 177, 122, 0.5);
}

body {
  font-family: 'Inter', sans-serif;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-dark);
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

`;

export default GlobalStyles;
