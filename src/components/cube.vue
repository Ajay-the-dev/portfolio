<template>
    <div ref="threeContainer" class=" bg-gray-100"></div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import * as THREE from 'three'
  
  export default {
    name: 'CubeScene',
    setup() {
      const threeContainer = ref(null)
  
      onMounted(() => {
        const container = threeContainer.value;
        //var height = container.getBoundingClientRect().height;
        //var width = container.getBoundingClientRect().width;
        var height = 300;
        var width = container.getBoundingClientRect().width;
         

  
        // Scene setup
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
        camera.position.z = 5
  
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setSize(width, height)
        container.appendChild(renderer.domElement)
  
        const geometry = new THREE.BoxGeometry(2,2,2)
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)
  
        const animate = () => {
          requestAnimationFrame(animate)
          cube.rotation.x += 0.01
          cube.rotation.y += 0.01
          renderer.render(scene, camera)
        }
  
        animate();
  
        // Handle window resize based on container
        window.addEventListener('resize', () => {
          

          camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        })
      })

      
  
      return {
        threeContainer
      }
    }
  }
  </script>
  
  <style scoped>
  /* Optional for visual debugging */
  div {
    border-right: 2px solid #ccc;
  }
  </style>
  