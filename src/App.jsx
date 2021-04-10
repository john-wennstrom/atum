import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Grid from './components/Grid';
import Beizer from './components/Beizer';
import ConicalCurve from './components/ConicalCurve';
import OutlineEffect from './effects/OutlineEffect';

const settings = {
    outlineEffect: false,
    conicalCurve: true,
    bezier: false,
};

const App = () => {
    const cubeSpheres8 = useRef();
    const egg = useRef();

    // eslint-disable-next-line no-unused-vars
    const [reload, setReload] = useState();

    useEffect(() => {
        setReload(1);
    }, []);

    const points = [
        new THREE.Vector3(0.5, 0.5, 0.5),
        new THREE.Vector3(0, 0.5, 0),
        new THREE.Vector3(0, -0.5, 0),
        new THREE.Vector3(-0.5, -0.5, -0.5),
    ];

    return (
        <>
            {cubeSpheres8.current && settings.outlineEffect && (
                <OutlineEffect objects={cubeSpheres8.current.children} />
            )}

            <Grid />

            {settings.bezier && (
                <Beizer points={points} color={0xff0000} steps={50} />
            )}

            {settings.conicalCurve && (
                <>
                    <ConicalCurve axis="z" color={0x555555} />
                    <ConicalCurve axis="x" color={0x555555} />
                    <ConicalCurve axis="y" color={0x0000ff} />

                    <ConicalCurve axis="z" color={0x555555} inverted />
                    <ConicalCurve axis="x" color={0x555555} inverted />
                    <ConicalCurve axis="y" color={0xff0000} inverted />
                </>
            )}
        </>
    );
};

export default App;

// <CubedSpheres8 ref={cubeSpheres8} position={[0, 0, 0]} />
