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

// Calculate area from latitude and longitude
function areaFromLatLon(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Earth's radius in meters
    const toRadians = (degrees) => degrees * (Math.PI / 180);

    const φ1 = toRadians(lat1);
    const φ2 = toRadians(lat2);
    const Δφ = toRadians(lat2 - lat1);
    const Δλ = toRadians(lon2 - lon1);

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance between two points

    // Assuming a rectangular area for simplicity
    const width = distance * Math.cos((φ1 + φ2) / 2);
    const height = distance * Math.sin((φ1 + φ2) / 2);

    return rectangleArea(width, height);
}

// Calculate area from an array of latitude and longitude
function areaFromLatLonArray(coords) {
    if (!Array.isArray(coords) || coords.length < 3) {
        throw new Error("At least three coordinates are required.");
    }

    const R = 6371e3; // Earth's radius in meters
    const toRadians = (degrees) => degrees * (Math.PI / 180);

    let area = 0;
    for (let i = 0; i < coords.length; i++) {
        const [lat1, lon1] = coords[i];
        const [lat2, lon2] = coords[(i + 1) % coords.length];

        const φ1 = toRadians(lat1);
        const φ2 = toRadians(lat2);
        const Δλ = toRadians(lon2 - lon1);

        // Using the spherical excess formula
        area += Δλ * (2 + Math.sin(φ1) + Math.sin(φ2));
    }

    area = Math.abs(area * R * R / 2);
    return area;
}

module.exports = {
    rectangleArea,
    circleArea,
    triangleArea,
    areaFromLatLon,
    areaFromLatLonArray,
};
