// Rectangle Area
function rectangleArea(width, height) {
    if (width <= 0 || height <= 0) {
        throw new Error("Width and height must be greater than 0.");
    }
    return width * height;
}

// Circle Area
function circleArea(radius) {
    if (radius <= 0) {
        throw new Error("Radius must be greater than 0.");
    }
    return Math.PI * Math.pow(radius, 2);
}

// Triangle Area
function triangleArea(base, height) {
    if (base <= 0 || height <= 0) {
        throw new Error("Base and height must be greater than 0.");
    }
    return 0.5 * base * height;
}

module.exports = {
    rectangleArea,
    circleArea,
    triangleArea,
};
