/**
 *
 * @param {float} a Angular frequency
 * @param {float} t Z-coordinate
 * @param {float} r Radius
 * @returns [x, y, z]
 */
export const conicalSpiralPoint2 = (t) => {
    const x = 0.1 * t * Math.cos(8 * t);
    const y = 0.1 * t * Math.sin(8 * t);
    const z = 0.1 * t;

    return [x, y, z];
};

export const conicalSpiralPoint = (t, r, rev, h) => {
    const x = r * Math.cos(t * 2 * Math.PI * rev);
    const y = r * Math.sin(t * 2 * Math.PI * rev);
    const z = h * t;

    return [x, y, z];
};
