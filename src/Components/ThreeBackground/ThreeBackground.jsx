


import { useEffect, useRef } from "react";
import * as THREE from "three";
import htmlLogo from "../../assets/icons/html-5.svg";
import cssLogo from "../../assets/icons/css-3.svg";
import tailwindCssLogo from "../../assets/icons/tailwind.svg";
import jsLogo from "../../assets/icons/js.svg";
import reactLogo from "../../assets/icons/react.svg";
import mongoLogo from "../../assets/icons/mongodb.svg";
import firebaseLogo from "../../assets/icons/firebase.svg";


const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Black background

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Check if mountRef exists before appending
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    camera.position.z = 10;

    const textureLoader = new THREE.TextureLoader();

    // Load icons
    const icons = [
      textureLoader.load(htmlLogo),
      textureLoader.load(tailwindCssLogo),
      textureLoader.load(cssLogo),
      textureLoader.load(jsLogo),
      textureLoader.load(reactLogo),
      textureLoader.load(mongoLogo),
      textureLoader.load(firebaseLogo),
    ];

    const iconCount = 15; // Number of icons
    const meshes = [];

    // Function to generate random positions
    const randomPosition = (min, max) => Math.random() * (max - min) + min;

    // Screen boundaries for dynamic resizing
    let bounds = {
      xMin: -window.innerWidth / 100,
      xMax: window.innerWidth / 100,
      yMin: -window.innerHeight / 100,
      yMax: window.innerHeight / 100,
    };

    // Generate icons with random positions and directions
    for (let i = 0; i < iconCount; i++) {
      const texture = icons[i % icons.length];

      // Smaller icon size
      const geometry = new THREE.PlaneGeometry(0.8, 0.8);
      const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
      const mesh = new THREE.Mesh(geometry, material);

      // Random initial positions
      const x = randomPosition(bounds.xMin, bounds.xMax);
      const y = randomPosition(bounds.yMin, bounds.yMax);
      const z = randomPosition(-2, 2); // Z-depth

      mesh.position.set(x, y, z);
      scene.add(mesh);

      // Assign random directions and slower speeds
      const direction = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.005,
      };

      meshes.push({ mesh, direction });
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      meshes.forEach((item) => {
        const { mesh, direction } = item;

        // Update positions
        mesh.position.x += direction.x;
        mesh.position.y += direction.y;
        mesh.position.z += direction.z;

        // Reverse direction when hitting screen bounds
        if (mesh.position.x > bounds.xMax || mesh.position.x < bounds.xMin) direction.x *= -1;
        if (mesh.position.y > bounds.yMax || mesh.position.y < bounds.yMin) direction.y *= -1;
        if (mesh.position.z > 2 || mesh.position.z < -2) direction.z *= -1;

        // Add slight rotation for effect
        mesh.rotation.z += 0.005;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Update bounds on resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      bounds = {
        xMin: -window.innerWidth / 100,
        xMax: window.innerWidth / 100,
        yMin: -window.innerHeight / 100,
        yMax: window.innerHeight / 100,
      };
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      // Ensure mountRef.current exists before removing children
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // Dispose of resources to prevent memory leaks
      meshes.forEach((item) => {
        scene.remove(item.mesh);
        item.mesh.geometry.dispose();
        item.mesh.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-1 w-full h-full" />;
};



export default ThreeBackground;



// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import htmlLogo from "../../assets/icons/html-5.svg";
// import cssLogo from "../../assets/icons/css-3.svg";
// import tailwindCssLogo from "../../assets/icons/tailwind.svg";
// import jsLogo from "../../assets/icons/js.svg";
// import reactLogo from "../../assets/icons/react.svg";
// import mongoLogo from "../../assets/icons/mongodb.svg";
// import firebaseLogo from "../../assets/icons/firebase.svg";
// import backgroundImg from "../../assets/icons/Black Minimalist Linktree Background.png";

// const ThreeBackground = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();

//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // Check if mountRef exists before appending
//     if (mountRef.current) {
//       mountRef.current.appendChild(renderer.domElement);
//     }
//     camera.position.z = 10;

//     const textureLoader = new THREE.TextureLoader();

//     // Add full-screen background image
//     const backgroundTexture = textureLoader.load(backgroundImg);
//     const backgroundGeometry = new THREE.PlaneGeometry(120, 50); // Large enough to cover the viewport
//     const backgroundMaterial = new THREE.MeshBasicMaterial({
//       map: backgroundTexture,
//       side: THREE.DoubleSide,
//     });
//     const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
//     backgroundMesh.position.z = -20; // Position it far behind other elements
//     scene.add(backgroundMesh);

//     // Load icons
//     const icons = [
//       textureLoader.load(htmlLogo),
//       textureLoader.load(tailwindCssLogo),
//       textureLoader.load(cssLogo),
//       textureLoader.load(jsLogo),
//       textureLoader.load(reactLogo),
//       textureLoader.load(mongoLogo),
//       textureLoader.load(firebaseLogo),
//     ];

//     const iconCount = 15; // Number of icons
//     const meshes = [];

//     // Function to generate random positions
//     const randomPosition = (min, max) => Math.random() * (max - min) + min;

//     // Screen boundaries for dynamic resizing
//     let bounds = {
//       xMin: -window.innerWidth / 100,
//       xMax: window.innerWidth / 100,
//       yMin: -window.innerHeight / 100,
//       yMax: window.innerHeight / 100,
//     };

//     // Generate icons with random positions and directions
//     for (let i = 0; i < iconCount; i++) {
//       const texture = icons[i % icons.length];

//       // Smaller icon size
//       const geometry = new THREE.PlaneGeometry(0.8, 0.8);
//       const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
//       const mesh = new THREE.Mesh(geometry, material);

//       // Random initial positions
//       const x = randomPosition(bounds.xMin, bounds.xMax);
//       const y = randomPosition(bounds.yMin, bounds.yMax);
//       const z = randomPosition(-2, 2); // Z-depth

//       mesh.position.set(x, y, z);
//       scene.add(mesh);

//       // Assign random directions and slower speeds
//       const direction = {
//         x: (Math.random() - 0.5) * 0.02,
//         y: (Math.random() - 0.5) * 0.02,
//         z: (Math.random() - 0.5) * 0.005,
//       };

//       meshes.push({ mesh, direction });
//     }

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       meshes.forEach((item) => {
//         const { mesh, direction } = item;

//         // Update positions
//         mesh.position.x += direction.x;
//         mesh.position.y += direction.y;
//         mesh.position.z += direction.z;

//         // Reverse direction when hitting screen bounds
//         if (mesh.position.x > bounds.xMax || mesh.position.x < bounds.xMin) direction.x *= -1;
//         if (mesh.position.y > bounds.yMax || mesh.position.y < bounds.yMin) direction.y *= -1;
//         if (mesh.position.z > 2 || mesh.position.z < -2) direction.z *= -1;

//         // Add slight rotation for effect
//         mesh.rotation.z += 0.005;
//       });

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Update bounds on resize
//     const handleResize = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();

//       bounds = {
//         xMin: -window.innerWidth / 100,
//         xMax: window.innerWidth / 100,
//         yMin: -window.innerHeight / 100,
//         yMax: window.innerHeight / 100,
//       };
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);

//       // Ensure mountRef.current exists before removing children
//       if (mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       // Dispose of resources to prevent memory leaks
//       meshes.forEach((item) => {
//         scene.remove(item.mesh);
//         item.mesh.geometry.dispose();
//         item.mesh.material.dispose();
//       });
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={mountRef} className="fixed inset-0 -z-1 w-full h-full" />;
// };

// export default ThreeBackground;



