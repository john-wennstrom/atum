import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { primitive } from '@react-three/fiber';

const Sphere = (props) => {
    const mesh = useRef();

    // eslint-disable-next-line no-unused-vars
    const [reload, setReload] = useState();
    const [outline, setOutline] = useState(null);
    const [scale, setScale] = useState(null);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (mesh && mesh.current) {
            setOutline(mesh);
        }
    }, []);

    const handleClick = () => {
        setActive(!active);
        setScale(active ? 1.5 : null);
    };

    return (
        <>
            <mesh
                {...props}
                ref={mesh}
                scale={scale || 1}
                onClick={handleClick}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <sphereGeometry args={[0.25, 25, 25]} />
                <meshBasicMaterial color={hovered ? 0xcccccc : 0xaaaaaa} />
            </mesh>

            {outline && (
                <mesh {...props} scale={scale ? scale + 0.01 : 1.01} geometry={mesh.current.geometry}>
                    <meshBasicMaterial color={0x000000} side={THREE.BackSide} />
                </mesh>
            )}
        </>
    );
};

export default Sphere;
