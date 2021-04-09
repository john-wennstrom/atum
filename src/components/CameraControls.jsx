import React, { useRef } from 'react';
import { extend, useThree, useFrame } from '@react-three/fiber';

const CameraControls = () => {
    const { OrbitControls } = require('three/examples/jsm/controls/OrbitControls');

    extend({ OrbitControls });

    const {
        camera,
        gl: { domElement },
    } = useThree();

    const controls = useRef();

    useFrame(() => {
        controls.current.update();
    });

    return <orbitControls ref={controls} args={[camera, domElement]} />;
};

export default CameraControls;
