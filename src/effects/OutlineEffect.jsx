import React, { useRef } from 'react';
import * as THREE from 'three';
import { extend, useThree, useFrame } from '@react-three/fiber';
import {
    OutlineEffect as PostProcessingOutlineEffect,
    EffectComposer,
    BlendFunction,
    EffectPass,
    RenderPass,
    Selection,
} from 'postprocessing';

extend({ PostProcessingOutlineEffect, EffectComposer });

const OutlineEffect = ({ objects }) => {
    const { scene, gl, camera } = useThree();
    const composer = useRef();

    composer.current = new EffectComposer(gl, {
        frameBufferType: THREE.HalfFloatType,
    });

    if (objects) {
        const renderPass = new RenderPass(scene, camera);

        const selection = new Selection(objects);

        const outlineEffect = new PostProcessingOutlineEffect(scene, camera, {
            blendFunction: BlendFunction.ALPHA,
            edgeStrength: 6,
            pulseSpeed: 0.0,
            visibleEdgeColor: 0x000000,
            hiddenEdgeColor: 0x555555,
            height: 1000,
            width: 1000,
            blur: false,
            xRay: false,
        });

        outlineEffect.selection = selection;
        const outlinePass = new EffectPass(camera, outlineEffect);

        composer.current.addPass(renderPass);
        composer.current.addPass(outlinePass);
    }

    useFrame(() => composer.current.render(), 1);

    return <effectComposer ref={composer} />;
};

export default OutlineEffect;
