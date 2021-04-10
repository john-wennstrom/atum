/* eslint-disable no-plusplus */
import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { primitive } from '@react-three/fiber';
import { conicalSpiralPoint } from '../utils/algorithms';

const ConicalCurve = ({ axis, color, inverted }) => {
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
        const t = i / 200 * (inverted ? -1 : 1);
        const r = i / 200 * radius;
        const point = conicalSpiralPoint(t, r, rev, height);
        points.push(new THREE.Vector3(...getFlippedPoint(point)));
    }

    useEffect(() => {
        setBuffer(new THREE.BufferGeometry().setFromPoints(curve.current.getPoints(200)));
    }, [curve]);

    return (
        <>
            {points && (
                <catmullRomCurve3 points={points} ref={curve} curveType="catmullrom" tension={1} />
            )}
            {curve && curve.current && (
                <line name="ConicalCurve.Line" ref={geometry} geometry={buffer}>
                    <primitive object={buffer} />
                    <lineBasicMaterial name="ConicalCurve.LineBasicMaterial" ref={material} color={color} opacity={0.45} />
                </line>
            )}
        </>
    );
};

export default ConicalCurve;
