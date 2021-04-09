import React from 'react';
import * as THREE from 'three';
import { primitive } from '@react-three/fiber';

const Grid = () => {
    const box = new THREE.Box3();
    box.setFromCenterAndSize(new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 1, 1));
    const helper = new THREE.Box3Helper(box, 0xaaaaaa);

    return (
        <primitive object={helper} position={[0, 0, 0]} />
    );
};

export default Grid;
