/* eslint-disable no-mixed-operators */
import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

const Egg = (props) => {
    const mesh = useRef();

    const [outline, setOutline] = useState(null);
    const [hovered, setHover] = useState(false);

    useEffect(() => {
        if (mesh && mesh.current) {
            setOutline(mesh);
        }
    }, []);

    const points = [];
    for (let deg = 0; deg <= 180; deg += 6) {
        const rad = Math.PI * deg / 180;
        const point = new THREE.Vector2((0.72 + 0.08 * Math.cos(rad)) * Math.sin(rad), -Math.cos(rad));
        points.push(point);
    }

    return (
        <>
            <mesh
                {...props}
                ref={mesh}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <latheBufferGeometry args={[points, 30]} />
                <meshPhongMaterial color={hovered ? 0xcccccc : 0xaaaaaa} />
            </mesh>

            {outline && (
                <mesh {...props} scale={1.006} geometry={mesh.current.geometry}>
                    <meshBasicMaterial color={0x000000} side={THREE.BackSide} />
                </mesh>
            )}
        </>
    );
};

export default Egg;
