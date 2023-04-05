// testing type module in script tag
// import file from "./file-1";
// console.log(file);

import styles from "./style.module.css";

console.log(styles);
document.querySelector("h1").className = styles.title;

console.log("Hello World!");
