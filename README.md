
# Area Calculator

A Node.js module for calculating areas of various shapes and geographical regions. This module now supports basic geometric shapes as well as areas derived from latitude and longitude.

## Features
- Calculate the area of a rectangle.
- Calculate the area of a circle.
- Calculate the area of a triangle.
- Calculate the approximate area between two geographical points (latitude and longitude).
- Calculate the area of a polygon from an array of geographical coordinates.

## Installation

Install the module via npm:

```bash
npm install area-calculator
```

## Usage

Import the module in your Node.js project and start using it:

### Example Code

```javascript
const {
    rectangleArea,
    circleArea,
    triangleArea,
    areaFromLatLon,
    areaFromLatLonArray
} = require('area-calculator');

try {
    // Rectangle Area
    console.log("Rectangle Area (5x10):", rectangleArea(5, 10)); // Output: 50

    // Circle Area
    console.log("Circle Area (radius 7):", circleArea(7)); // Output: 153.93804002589985

    // Triangle Area
    console.log("Triangle Area (base 6, height 8):", triangleArea(6, 8)); // Output: 24

    // Area from Latitude and Longitude (two points)
    console.log("Area from Lat/Lon:", areaFromLatLon(40.748817, -73.985428, 34.052235, -118.243683)); 

    // Area from Latitude and Longitude Array (polygon)
    const coords = [
        [37.7749, -122.4194],
        [34.0522, -118.2437],
        [36.7783, -119.4179]
    ];
    console.log("Area from Lat/Lon Array:", areaFromLatLonArray(coords));
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

#### `circleArea(radius)`
Calculates the area of a circle.

- **Parameters**:
  - `radius` (number): The radius of the circle. Must be greater than 0.
- **Returns**: The area of the circle.

#### `triangleArea(base, height)`
Calculates the area of a triangle.

- **Parameters**:
  - `base` (number): The base length of the triangle. Must be greater than 0.
  - `height` (number): The height of the triangle. Must be greater than 0.
- **Returns**: The area of the triangle.

#### `areaFromLatLon(lat1, lon1, lat2, lon2)`
Calculates the approximate area between two geographical points using their latitude and longitude.

- **Parameters**:
  - `lat1`, `lon1` (number): Latitude and longitude of the first point.
  - `lat2`, `lon2` (number): Latitude and longitude of the second point.
- **Returns**: The approximate area in square meters.

#### `areaFromLatLonArray(coords)`
Calculates the area of a polygon from an array of geographical coordinates.

- **Parameters**:
  - `coords` (array): An array of `[latitude, longitude]` pairs. Must contain at least 3 coordinates.
- **Returns**: The area in square meters.

## Error Handling

All functions will throw an error if invalid parameters are provided. Examples:
- Negative or zero dimensions for geometric shapes.
- Insufficient coordinates for geographical calculations.

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
