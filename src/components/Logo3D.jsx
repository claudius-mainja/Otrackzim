import { useEffect, useRef } from "react";

export default function Logo3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    let animationId;

    const initThree = async () => {
      try {
        const THREE = await import("three");
        if (!mounted || !containerRef.current) return;

        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const geometry = new THREE.TorusKnotGeometry(0.8, 0.3, 100, 16);
        const material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color("#06B6D4"),
          metalness: 0.7,
          roughness: 0.2,
          transparent: true,
          opacity: 0.6,
          wireframe: false,
          emissive: new THREE.Color("#06B6D4"),
          emissiveIntensity: 0.1,
        });
        const torusKnot = new THREE.Mesh(geometry, material);
        scene.add(torusKnot);

        const wireframeGeo = new THREE.TorusKnotGeometry(0.82, 0.32, 100, 16);
        const wireframeMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color("#0EA5E9"),
          wireframe: true,
          transparent: true,
          opacity: 0.15,
        });
        const wireframe = new THREE.Mesh(wireframeGeo, wireframeMat);
        scene.add(wireframe);

        const particlesGeo = new THREE.BufferGeometry();
        const particlesCount = 200;
        const posArray = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 10;
        }
        particlesGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
        const particlesMat = new THREE.PointsMaterial({
          size: 0.02,
          color: new THREE.Color("#06B6D4"),
          transparent: true,
          opacity: 0.4,
        });
        const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
        scene.add(particlesMesh);

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e) => {
          const rect = container.getBoundingClientRect();
          mouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
          mouseY = ((e.clientY - rect.top) / height - 0.5) * -2;
        };

        container.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
          if (!mounted) return;
          animationId = requestAnimationFrame(animate);

          torusKnot.rotation.x += 0.005;
          torusKnot.rotation.y += 0.01;
          wireframe.rotation.x += 0.005;
          wireframe.rotation.y += 0.01;
          particlesMesh.rotation.y -= 0.001;

          torusKnot.rotation.x += mouseY * 0.01;
          torusKnot.rotation.y += mouseX * 0.01;
          wireframe.rotation.x += mouseY * 0.01;
          wireframe.rotation.y += mouseX * 0.01;

          renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
          if (!containerRef.current) return;
          const w = containerRef.current.clientWidth;
          const h = containerRef.current.clientHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        };

        window.addEventListener("resize", handleResize);

        return () => {
          container.removeEventListener("mousemove", handleMouseMove);
          window.removeEventListener("resize", handleResize);
          cancelAnimationFrame(animationId);
          if (container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
          geometry.dispose();
          material.dispose();
          renderer.dispose();
        };
      } catch (e) {
        return;
      }
    };

    initThree();
    return () => { mounted = false; cancelAnimationFrame(animationId); };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[300px]"
      style={{ background: "transparent" }}
    />
  );
}
