import React, { Component } from 'react';
import THREE from 'three';

class RotatingCube extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        var scene = new THREE.Scene();
        var renderer = new THREE.WebGLRenderer();
        var camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            10000);

        renderer.setSize(window.innerWidth, window.innerHeight);
        this.refs.rotatingCube.appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry(
            500,
            500,
            500,
            10,
            10,
            10);
        var material = new THREE.MeshBasicMaterial({
            color: 0xfffff,
            wireframe: true
        });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 1000;

        function render() {
            requestAnimationFrame(render);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        render();
    }

    render() {
        return (<div ref="rotatingCube"></div>);
    }
}

export default RotatingCube;
