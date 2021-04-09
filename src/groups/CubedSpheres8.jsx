import React from 'react';
import Sphere from '../components/Sphere';

const CubedSpheres8 = React.forwardRef((props, ref) => (
    <group ref={ref}>
        <Sphere position={[0.25, 0.25, 0.25]} />
        <Sphere position={[-0.25, 0.25, 0.25]} />
        <Sphere position={[0.25, -0.25, 0.25]} />
        <Sphere position={[0.25, 0.25, -0.25]} />

        <Sphere position={[-0.25, -0.25, -0.25]} />
        <Sphere position={[0.25, -0.25, -0.25]} />
        <Sphere position={[-0.25, 0.25, -0.25]} />
        <Sphere position={[-0.25, -0.25, 0.25]} />
    </group>
));

export default CubedSpheres8;
