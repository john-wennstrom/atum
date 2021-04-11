import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera, GizmoViewcube } from '@react-three/drei';
import App from './App';

ReactDOM.render(
    <Canvas gl={{ antialias: true }}>
        <OrthographicCamera position={[0, 0, 5]} zoom={170} makeDefault />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <App />
    </Canvas>,
    document.getElementById('root'),
);
