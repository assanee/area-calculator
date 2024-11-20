// test.js
const { rectangleArea, circleArea, triangleArea } = require('./index');

try {
    // Rectangle Area
    console.log("Rectangle Area (5x10):", rectangleArea(5, 10)); // 50

    // Circle Area
    console.log("Circle Area (radius 7):", circleArea(7)); // 153.93804002589985

    // Triangle Area
    console.log("Triangle Area (base 6, height 8):", triangleArea(6, 8)); // 24
} catch (error) {
    console.error(error.message);
}
