import React, { Component } from 'react';
import THREE from 'three';

class RotatingCube extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        var scene = new THREE.Scene();
        var renderer = new THREE.WebGLRenderer({antialias:true});
        var camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,1,10000);

        renderer.setSize(200,200);
        renderer.setClearColor( 0xffffff, 1);

        this.refs.rotatingCube.appendChild(renderer.domElement);
        
        var geometry = new THREE.BoxGeometry(400,400,400);
        var texture1 = THREE.ImageUtils.loadTexture('./src/assets/images/1.jpg');
        texture1.anisotropy = renderer.getMaxAnisotropy();
        var texture2 = THREE.ImageUtils.loadTexture('./src/assets/images/2.png');
        texture2.anisotropy = renderer.getMaxAnisotropy();
        var texture3 = THREE.ImageUtils.loadTexture('./src/assets/images/3.jpg');
        texture3.anisotropy = renderer.getMaxAnisotropy();
        var texture4 = THREE.ImageUtils.loadTexture('./src/assets/images/4.jpg');
        texture4.anisotropy = renderer.getMaxAnisotropy();
        var texture5 = THREE.ImageUtils.loadTexture('./src/assets/images/5.jpg');
        texture5.anisotropy = renderer.getMaxAnisotropy();
        var texture6 = THREE.ImageUtils.loadTexture('./src/assets/images/6.jpg');
        texture6.anisotropy = renderer.getMaxAnisotropy();
        
        var material = new THREE.MeshFaceMaterial([
            new THREE.MeshBasicMaterial({
                 map: texture1
            }),
            new THREE.MeshBasicMaterial({
                 map: texture2
            }),
            new THREE.MeshBasicMaterial({
                map: texture3
            }),
            new THREE.MeshBasicMaterial({
                 map: texture4
            }),
            new THREE.MeshBasicMaterial({
                 map: texture5
            }),
            new THREE.MeshBasicMaterial({
                 map: texture6
            })
        ]);
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 1000;

        function render() {
            requestAnimationFrame(render);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.03;
            renderer.render(scene, camera);
        };
        render();
    }

    render() {
        return (<div ref="rotatingCube"></div>);
    }
}

export default RotatingCube;
