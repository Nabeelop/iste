"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Vector3, MathUtils } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend, useFrame } from "@react-three/fiber"; 
import { OrbitControls } from "@react-three/drei";

extend({ ThreeGlobe });

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: any; 
  }
}

export type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: { lat: number; lng: number };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
  isScrolled?: boolean; 
  allowInteraction?: boolean;
  showMangaloreRing?: boolean;
  rotationTrigger?: number;
}

export function Globe({ globeConfig, data, isScrolled, showMangaloreRing = false }: WorldProps) {
  const [globeData, setGlobeData] = useState<any | null>(null);
  const globeRef = useRef<ThreeGlobe | null>(null);

  const indiaNorthernBorder = [
    [77.52, 35.49], [77.56, 35.49], [77.62, 35.47], [77.65, 35.48], [77.69, 35.45],
    [77.73, 35.48], [77.77, 35.5], [77.81, 35.52], [77.82, 35.51], [77.84, 35.5],
    [77.89, 35.48], [77.93, 35.54], [77.99, 35.56], [78.05, 35.58], [78.11, 35.56],
    [78.18, 35.62], [78.24, 35.72], [78.41, 35.73], [78.57, 35.78], [78.78, 35.87],
    [78.95, 35.94], [79.09, 35.95], [79.31, 35.96], [79.45, 35.93], [79.52, 35.86],
    [79.57, 35.85], [79.63, 35.76], [79.68, 35.68], [79.78, 35.62], [79.88, 35.6],
    [79.96, 35.61], [80, 35.52], [80.1, 35.46], [80.21, 35.57], [80.33, 35.53],
    [80.33, 35.38], [80.22, 35.16], [80.19, 34.96], [80.11, 34.81], [80.02, 34.69],
    [79.86, 34.68], [79.81, 34.52], [79.59, 34.46], [79.57, 34.33], [79.5, 34.2],
    [79.43, 34.06], [79.29, 34.01], [79.02, 34.02], [79, 33.77], [78.93, 33.48],
    [78.96, 33.36], [78.98, 33.33], [79.02, 33.32], [79.03, 33.29], [79.05, 33.26],
    [79.07, 33.23], [79.11, 33.2], [79.15, 33.18], [79.18, 33.22], [79.22, 33.24],
    [79.27, 33.21], [79.33, 33.2], [79.38, 33.2], [79.4, 33.17], [79.37, 33.11],
    [79.34, 33.03], [79.36, 32.96], [79.39, 32.94], [79.41, 32.91], [79.45, 32.89],
    [79.46, 32.84], [79.49, 32.8], [79.54, 32.77], [79.55, 32.72], [79.54, 32.68],
    [79.49, 32.63], [79.44, 32.58], [79.43, 32.54], [79.39, 32.52], [79.35, 32.53],
    [79.33, 32.56], [79.28, 32.55], [79.25, 32.52], [79.21, 32.51], [79.16, 32.49],
    [79.13, 32.47], [79.12, 32.43], [79.1, 32.4], [79.08, 32.38], [78.99, 32.37],
    [78.95, 32.35], [78.9, 32.39], [78.87, 32.41], [78.83, 32.42], [78.8, 32.46],
    [78.78, 32.5], [78.77, 32.54], [78.77, 32.59], [78.77, 32.63], [78.75, 32.65],
    [78.75, 32.68], [78.73, 32.68], [78.67, 32.66], [78.64, 32.61], [78.59, 32.6],
    [78.55, 32.62], [78.52, 32.6], [78.47, 32.58], [78.44, 32.57], [78.4, 32.55],
    [78.41, 32.52], [78.44, 32.48], [78.46, 32.46], [78.47, 32.42], [78.46, 32.38],
    [78.48, 32.35], [78.49, 32.32], [78.5, 32.29], [78.52, 32.26], [78.54, 32.23],
    [78.58, 32.2], [78.6, 32.17], [78.61, 32.15], [78.63, 32.13], [78.68, 32.11],
    [78.69, 32.09], [78.71, 32.05], [78.73, 32.01], [78.78, 31.97], [78.74, 31.9],
    [74.67, 31.92], [74.72, 31.93], [74.76, 31.94], [74.82, 31.96], [74.88, 32.03],
    [74.91, 32.05], [74.95, 32.06], [75.01, 32.04], [75.05, 32.05], [75.08, 32.06],
    [75.15, 32.08], [75.2, 32.09], [75.21, 32.12], [75.26, 32.1], [75.28, 32.14],
    [75.32, 32.18], [75.35, 32.22], [75.37, 32.24], [75.37, 32.28], [75.33, 32.29],
    [75.33, 32.33], [75.3, 32.35], [75.29, 32.36], [75.28, 32.37], [75.25, 32.38],
    [75.2, 32.41], [75.16, 32.42], [75.13, 32.44], [75.09, 32.47], [75.02, 32.48],
    [74.99, 32.45], [74.95, 32.45], [74.92, 32.46], [74.88, 32.48], [74.87, 32.49],
    [74.85, 32.49], [74.84, 32.49], [74.83, 32.5], [74.81, 32.48], [74.75, 32.48],
    [74.72, 32.48], [74.7, 32.49], [74.69, 32.5], [74.69, 32.53], [74.67, 32.55],
    [74.67, 32.57], [74.66, 32.57], [74.65, 32.57], [74.65, 32.6], [74.65, 32.61],
    [74.67, 32.64], [74.7, 32.66], [74.66, 32.71], [74.67, 32.75], [74.68, 32.78],
    [74.71, 32.82], [74.67, 32.83], [74.63, 32.81], [74.64, 32.78], [74.64, 32.75],
    [74.61, 32.76], [74.58, 32.75], [74.55, 32.75], [74.52, 32.75], [74.5, 32.77],
    [74.39, 32.77], [74.12, 32.91], [73.82, 33.01], [73.64, 33.14], [73.63, 33.47],
    [73.6, 33.72], [73.57, 33.81], [73.59, 33.86], [73.54, 33.95], [73.45, 34.3],
    [73.47, 34.57], [73.67, 34.68], [74.02, 34.87], [73.98, 35.17], [73.7, 35.35],
    [73.55, 35.54], [73.32, 35.66], [73.18, 35.78], [72.95, 35.85], [72.71, 35.83],
    [72.53, 35.95], [72.62, 36.27], [72.97, 36.51], [73.7, 36.72], [73.88, 36.89],
    [74.73, 37.04], [75.24, 36.97], [75.7, 36.76], [77.52, 35.49],
  ];

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  useEffect(() => {
    async function loadGlobeData() {
      try {
        const res = await fetch("/data/globe.json");
        if (!res.ok) throw new Error("Failed to load globe.json");
        const json = await res.json();

        const northernTerritory = {
          type: "Feature",
          properties: { name: "IndiaBorderOverlay" },
          geometry: {
            type: "Polygon",
            coordinates: [indiaNorthernBorder],
          }
        };

        json.features.push(northernTerritory);
        setGlobeData(json.features);
      } catch (e) {
        console.error("Please ensure globe.json is inside the public/data folder!", e);
      }
    }
    loadGlobeData();
  }, []);

  const buildMaterial = () => {
    if (!globeRef.current) return;
    const globeMaterial = globeRef.current.globeMaterial() as any;
    globeMaterial.color = new Color(defaultProps.globeColor);
    globeMaterial.emissive = new Color(defaultProps.emissive);
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity || 0.1;
    globeMaterial.shininess = defaultProps.shininess || 0.9;
  };

  const isIndia = (e: any) => 
    e.properties && (
      e.properties.name === "India" || 
      e.properties.ADMIN === "India" || 
      e.properties.ISO_A3 === "IND" ||
      e.properties.name === "IndiaBorderOverlay"
    );

  useEffect(() => {
    if (globeRef.current && globeData) {
      globeRef.current
        .hexPolygonsData(globeData)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonColor((e: any) => {
          if (isIndia(e)) return "#14f1d9"; 
          return defaultProps.polygonColor;
        })
        .hexPolygonAltitude((e: any) => {
          if (isIndia(e)) return 0.05; 
          return 0.01;
        });
      buildMaterial();
    }
  }, [globeData, defaultProps]);

  useEffect(() => {
    if (globeRef.current && data) {
      globeRef.current
        .arcsData(data)
        .arcStartLat((d) => (d as { startLat: number }).startLat)
        .arcStartLng((d) => (d as { startLng: number }).startLng)
        .arcEndLat((d) => (d as { endLat: number }).endLat)
        .arcEndLng((d) => (d as { endLng: number }).endLng)
        .arcColor((e: any) => e.color)
        .arcAltitude((e: any) => e.arcAlt)
        .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
        .arcDashLength(defaultProps.arcLength)
        .arcDashInitialGap((e) => (e as { order: number }).order * 1)
        .arcDashGap(15)
        .arcDashAnimateTime(() => defaultProps.arcTime);

      globeRef.current
        .ringsData(
          (isScrolled || showMangaloreRing)
            ? [{ lat: 13.0108, lng: 74.7943, color: (t: any) => `rgba(20, 241, 217, ${1 - t})` }]
            : []
        )
        .ringColor((e: any) => (t: any) => e.color(t))
        .ringMaxRadius(defaultProps.maxRings)
        .ringPropagationSpeed(5)
        .ringRepeatPeriod(
          (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
        );
    }
  }, [data, defaultProps, isScrolled, showMangaloreRing]);

  return <threeGlobe ref={globeRef} />;
}

// ... rest of the gimbal/camera code remains identical ...
function SpinGroup({ isScrolled, rotationTrigger, controlsRef, children }: { isScrolled: boolean, rotationTrigger: number, controlsRef: any, children: React.ReactNode }) {
  const spinRef = useRef<any>(null); 
  const tiltRef = useRef<any>(null); 
  const targetY = useRef<number | null>(null);

  useEffect(() => {
    if (isScrolled && spinRef.current) {
      const INDIA_Y = -1.305; 
      const currentY = spinRef.current.rotation.y;
      
      const revolutions = Math.floor(currentY / (Math.PI * 2));
      let target = INDIA_Y + (revolutions * Math.PI * 2);
      
      while (target <= currentY + 0.1) {
        target += Math.PI * 2;
      }
      
      target += Math.PI * 2; 
      targetY.current = target;
    } else {
      targetY.current = null;
    }
  }, [isScrolled, rotationTrigger]);

  useFrame((state, delta) => {
    if (!spinRef.current || !tiltRef.current) return;

    if (!isScrolled) {
      spinRef.current.rotation.y += delta * 0.15;
      tiltRef.current.rotation.x = MathUtils.lerp(tiltRef.current.rotation.x, 0, 0.04);
    } else if (targetY.current !== null) {
      spinRef.current.rotation.y = MathUtils.lerp(spinRef.current.rotation.y, targetY.current, 0.02);
      tiltRef.current.rotation.x = MathUtils.lerp(tiltRef.current.rotation.x, 0.227, 0.035);

      if (Math.abs(spinRef.current.rotation.y - targetY.current) > 0.05) {
        state.camera.position.lerp(new Vector3(0, 0, 300), 0.05);
        if (controlsRef.current) {
            controlsRef.current.target.lerp(new Vector3(0, 0, 0), 0.05);
            controlsRef.current.update();
        }
      }
    }
  });

  return (
    <group ref={tiltRef}>
      <group ref={spinRef} rotation={[0, -2.5, 0]}>
        {children}
      </group>
    </group>
  );
}

export function WebGLRendererConfig() {
  const { gl } = useThree();
  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  }, [gl]);
  return null;
}

export function World(props: WorldProps) {
  const { globeConfig, isScrolled, allowInteraction = true, rotationTrigger = 0 } = props;
  const scene = new Scene();
  const controlsRef = useRef<any>(null); 

  return (
    <Canvas
      scene={scene}
      gl={{ alpha: true, antialias: true }}
      camera={{ fov: 45, position: [0, 0, 370] }}
      style={{ touchAction: allowInteraction ? "none" : "pan-y", cursor: allowInteraction ? "pointer" : "default" }}
    >
      <WebGLRendererConfig />
      
      <ambientLight color={globeConfig.ambientLight} intensity={1.2} />
      <directionalLight color={globeConfig.directionalLeftLight} position={new Vector3(-400, 100, 400)} intensity={1.5} />
      <directionalLight color={globeConfig.directionalTopLight} position={new Vector3(-200, 500, 200)} intensity={1.5} />
      <pointLight color={globeConfig.pointLight} position={new Vector3(0, 0, 400)} intensity={2} />
      
      <SpinGroup isScrolled={isScrolled || false} rotationTrigger={rotationTrigger} controlsRef={controlsRef}>
        <Globe {...props} />
      </SpinGroup>

      <OrbitControls
        ref={controlsRef}
        enabled={allowInteraction}
        enablePan={false}
        enableZoom={false}
        enableRotate={allowInteraction}
        minDistance={370} 
        maxDistance={370}
        autoRotate={false} 
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}