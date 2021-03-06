/* eslint-disable no-plusplus */
import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { primitive } from '@react-three/fiber';
import { conicalSpiralPoint } from '../utils/algorithms';

const ConicalCurve = ({
    axis, color, inverted, visible,
}) => {
    const geometry = useRef([]);
    const material = useRef();
    const curve = useRef();

    // eslint-disable-next-line no-unused-vars
    const [reload, setReload] = useState();
    const [buffer, setBuffer] = useState();

    const points = [];
    const rev = 10;
    const radius = 0.5;
    const height = 0.5;

    const getFlippedPoint = (point) => {
        if (axis === 'x') {
            return [point[2], point[1], point[0]];
        }

        if (axis === 'y') {
            return [point[0], point[2], point[1]];
        }

        return point;
    };

    for (let i = 0; i < 200; i++) {
        const t = i / 200;
        const r = i / 200 * radius * (inverted ? -1 : 1);
        const point = conicalSpiralPoint(t, r, rev, height * (inverted ? -1 : 1));
        points.push(new THREE.Vector3(...getFlippedPoint(point)));
    }

    useEffect(() => {
        const geo = new THREE.BufferGeometry().setFromPoints(curve.current.getPoints(200));
        geo.computeVertexNormals(true);
        setBuffer(geo);
    }, [curve]);

    return (
        <>
            {points && (
                <catmullRomCurve3 points={points} ref={curve} curveType="catmullrom" tension={1} />
            )}
            {curve && curve.current && (
                <line name="ConicalCurve.Line" ref={geometry} geometry={buffer} visible={visible}>
                    <primitive object={buffer} />
                    <lineBasicMaterial name="ConicalCurve.LineBasicMaterial" ref={material} color={color} opacity={0.45} />
                </line>
            )}
        </>
    );
};

export default ConicalCurve;
