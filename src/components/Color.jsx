import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

function ColorChangingMaterials() {
    const [time, setTime] = useState(0);

    const parameters = [
        [[1, 1, 0.5], 5],
        [[0.95, 1, 0.5], 4],
        [[0.9, 1, 0.5], 3],
        [[0.85, 1, 0.5], 2],
        [[0.8, 1, 0.5], 1]
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Canvas>
            <Particles parameters={parameters} time={time} />
        </Canvas>
    );
}

function Particles({ parameters, time }) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const particles = [];
    for (let i = 0; i < parameters.length; i++) {
        const [color, size] = parameters[i];
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];

        const h = ((360 * (color[0] + time)) % 360) / 360;

        const material = new THREE.PointsMaterial({ size: size / 10, color: new THREE.Color().setHSL(h, color[1], color[2]) });

        for (let j = 0; j < 100; j++) {
            const x = Math.random() * 200 - 100;
            const y = Math.random() * 200 - 100;
            const z = Math.random() * 200 - 100;

            positions.push(x, y, z);

            const r = Math.random();
            const g = Math.random();
            const b = Math.random();
            colors.push(r, g, b);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        const particleSystem = new THREE.Points(geometry, material);
        scene.add(particleSystem);
        particles.push(particleSystem);
    }

    camera.position.z = 5;

    return null;
}

export default ColorChangingMaterials;
