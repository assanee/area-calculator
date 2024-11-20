
# Area Calculator

A simple Node.js module for calculating the areas of various geometric shapes including rectangles, circles, and triangles.

## Features
- Calculate the area of a rectangle.
- Calculate the area of a circle.
- Calculate the area of a triangle.
- Lightweight and easy to use.

## Installation

Install the module via npm:

```bash
npm install area-calculator
```

## Usage

Import the module in your Node.js project and start using it:

### Example Code

```javascript
const { rectangleArea, circleArea, triangleArea } = require('area-calculator');

try {
    // Rectangle Area
    console.log("Rectangle Area (5x10):", rectangleArea(5, 10)); // Output: 50

    // Circle Area
    console.log("Circle Area (radius 7):", circleArea(7)); // Output: 153.93804002589985

    // Triangle Area
    console.log("Triangle Area (base 6, height 8):", triangleArea(6, 8)); // Output: 24
} catch (error) {
    console.error("Error:", error.message);
}
```

### Functions

#### `rectangleArea(width, height)`
Calculates the area of a rectangle.

- **Parameters**:
  - `width` (number): The width of the rectangle. Must be greater than 0.
  - `height` (number): The height of the rectangle. Must be greater than 0.
- **Returns**: The area of the rectangle.
- **Throws**: An error if `width` or `height` is less than or equal to 0.

#### `circleArea(radius)`
Calculates the area of a circle.

- **Parameters**:
  - `radius` (number): The radius of the circle. Must be greater than 0.
- **Returns**: The area of the circle.
- **Throws**: An error if `radius` is less than or equal to 0.

#### `triangleArea(base, height)`
Calculates the area of a triangle.

- **Parameters**:
  - `base` (number): The base length of the triangle. Must be greater than 0.
  - `height` (number): The height of the triangle. Must be greater than 0.
- **Returns**: The area of the triangle.
- **Throws**: An error if `base` or `height` is less than or equal to 0.

## Error Handling

If any input parameter is less than or equal to 0, the function will throw an error with a descriptive message.

### Example
```javascript
try {
    console.log(rectangleArea(-5, 10)); // Throws Error
} catch (error) {
    console.error(error.message); // Output: Width and height must be greater than 0.
}
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Happy coding! 🚀
