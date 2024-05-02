import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { useColor } from '../provider/color';

const ThreeJsScene = () => {
    const containerRef = useRef(null);
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const windowHalfX = useRef(window.innerWidth / 2);
    const windowHalfY = useRef(window.innerHeight / 2);
    const cameraZ = useRef(1000);
    const scene = useRef(null);
    const camera = useRef(null);
    const renderer = useRef(null);
    const geometry = useRef(null);
    const materials = useRef([]);
    const particles = useRef([]);
    const stats = useRef(null);
    const parameterCount = useRef(0);
    const parameters = useRef([]);
    const { setTextColor } = useColor();




    // Sahifani yuklaganda va o'lcham o'zgarishida WebGL sahifasini boshlash
    useEffect(() => {
        init();
        animate();

        return () => {
            init();
        };
    }, []);

    function hslToRgb(h, s, l) {
        s /= 100;
        l /= 100;
        let c = (1 - Math.abs(2 * l - 1)) * s;
        let x = c * (1 - Math.abs((h / 60) % 2 - 1));
        let m = l - c / 2;
        let r = 0;
        let g = 0;
        let b = 0;

        if (0 <= h && h < 60) {
            r = c; g = x; b = 0;
        } else if (60 <= h && h < 120) {
            r = x; g = c; b = 0;
        } else if (120 <= h && h < 180) {
            r = 0; g = c; b = x;
        } else if (180 <= h && h < 240) {
            r = 0; g = x; b = c;
        } else if (240 <= h && h < 300) {
            r = x; g = 0; b = c;
        } else if (300 <= h && h < 360) {
            r = c; g = 0; b = x;
        }
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);

        return [r, g, b];
    }

    function rgbToHex(r, g, b) {
        const toHex = x => x.toString(16).padStart(2, '0');
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    function hslToHex(h, s, l) {
        const [r, g, b] = hslToRgb(h, s, l);
        return rgbToHex(r, g, b);
    }


    // WebGL sahifasini boshlash funksiyasi
    function init() {
        scene.current = new THREE.Scene();
        camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 2, 3000);
        camera.current.position.z = cameraZ.current;

        renderer.current = new THREE.WebGLRenderer();
        renderer.current.setPixelRatio(window.devicePixelRatio);
        renderer.current.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.current.domElement);

        geometry.current = new THREE.BufferGeometry();
        const particleCount = 2000;
        const positions = [];
        for (let i = 0; i < particleCount; i++) {
            positions.push(Math.random() * 2000 - 1000);
            positions.push(Math.random() * 2000 - 1000);
            positions.push(Math.random() * 2000 - 1000);
        }
        geometry.current.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

        parameterCount.current = 5;
        parameters.current = [
            [[1, 1, 0.5], 5],
            [[0.95, 1, 0.5], 4],
            [[0.9, 1, 0.5], 3],
            [[0.85, 1, 0.5], 2],
            [[0.8, 1, 0.5], 1]
        ];

        for (let i = 0; i < parameterCount.current; i++) {
            const color = parameters.current[i][0];
            const size = parameters.current[i][1];

            materials.current[i] = new THREE.PointsMaterial({ size: size, color: new THREE.Color(color[0], color[1], color[2]) });
            particles.current[i] = new THREE.Points(geometry.current, materials.current[i]);
            particles.current[i].rotation.x = Math.random() * 6;
            particles.current[i].rotation.y = Math.random() * 6;
            particles.current[i].rotation.z = Math.random() * 6;
            console.log(materials.current[i]);
            console.log(color[0], color[1], color[2]);
            console.log(parameters.current[i][0]);
            scene.current.add(particles.current[i]);



        }


        stats.current = new Stats();
        containerRef.current.appendChild(stats.current.domElement);

        window.addEventListener("resize", onWindowResize, false);
        document.addEventListener("mousemove", onDocumentMouseMove, false);
    }

    // Animatsiyani boshlash funksiyasi
    function animate() {
        requestAnimationFrame(animate);
        render();
        stats.current.update();
    }

    // Sahifani qayta tarqatish funksiyasi
    function render() {
        const time = Date.now() * 0.00005;
    
        camera.current.position.x += (mouseX.current - camera.current.position.x) * 1.5;
        camera.current.position.y += (-mouseY.current - camera.current.position.y) * 0.05;
        camera.current.lookAt(scene.current.position);
    
        for (let i = 0; i < scene.current.children.length; i++) {
            const object = scene.current.children[i];
            if (object instanceof THREE.Points) {
                object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
            }
        }
    
        for (let i = 0; i < materials.current.length; i++) {
            const color = parameters.current[i][0];
            let h = ((360 * (color[0] + time)) % 360) / 360;
            materials.current[i].color.setHSL(h, color[1], color[2]);
    
            // Rangni HSL dan HEX ga o'tkazish
            const hexColor = hslToHex(h * 360, color[1] * 100, color[2] * 100);
            setTextColor(hexColor);
        }
    
        renderer.current.render(scene.current, camera.current);
    }

    // Maus koordinatalarini o'zgartirish funksiyasi
    function onDocumentMouseMove(event) {
        mouseX.current = (event.clientX - windowHalfX.current) / 2;
        mouseY.current = (event.clientY - windowHalfY.current) / 2;
    }

    // Oyna o'lchamini o'zgartirish funksiyasi
    function onWindowResize() {
        windowHalfX.current = window.innerWidth / 2;
        windowHalfY.current = window.innerHeight / 2;
        camera.current.aspect = window.innerWidth / window.innerHeight;
        camera.current.updateProjectionMatrix();
        renderer.current.setSize(window.innerWidth, window.innerHeight);
    }

    return <div ref={containerRef} className={`w-full fixed top-0 left-0 -z-10`} />;
};

export default ThreeJsScene;
