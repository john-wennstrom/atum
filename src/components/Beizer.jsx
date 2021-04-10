import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { primitive } from '@react-three/fiber';

const Beizer = ({ points, color, steps }) => {
    const geometry = useRef([]);
    const material = useRef();
    const curve = useRef();

    // eslint-disable-next-line no-unused-vars
    const [reload, setReload] = useState();
    const [buffer, setBuffer] = useState();

    useEffect(() => {
        setBuffer(new THREE.BufferGeometry().setFromPoints(curve.current.getPoints(50)));
    }, [curve]);

    console.log(points);

    return (
        <>
            <cubicBezierCurve3 v0={points[0]} v1={points[1]} v2={points[2]} v3={points[3]} ref={curve} curveType="catmullrom" />
            {curve && curve.current && (
                <line name="Beizer.Line" ref={geometry} geometry={buffer}>
                    <primitive object={buffer} />
                    <lineBasicMaterial name="Beizer.LineBasicMaterial" ref={material} color={0xff0000} opacity={0.45} />
                </line>
            )}
        </>
    );
};

export default Beizer;
