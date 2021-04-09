import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Canvas } from '@react-three/fiber';
import App from './App';
import CameraControls from './components/CameraControls';

ReactDOM.render(
    <Canvas gl={{ antialias: true }}>
        <CameraControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <App />
    </Canvas>,
    document.getElementById('root'),
);
