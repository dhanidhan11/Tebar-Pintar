
declare var THREE: any;

(window as any).threeState = {
  model: 'Pro',
  exploded: false,
  dispensing: false,
  wireframe: false,
  autoRotate: true,
  targetSpherical: { radius: 5.0, phi: 1.22, theta: 0.65 },
  currentSpherical: { radius: 5.0, phi: 1.22, theta: 0.65 },
  cameraLookAtTarget: new THREE.Vector3(0, 0.15, 0),
  cameraLookAtCurrent: new THREE.Vector3(0, 0.15, 0),
};

function init3D() {
  const container = document.getElementById("canvas-container");
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      });
    } catch {
      console.error("WebGL Error");
      return;
    }

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 560;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const canvas = renderer.domElement;
    const onContextLost = (e: Event) => {
      e.preventDefault();
      console.error("WebGL Error");
    };
    const onContextRestored = () => {
      
    };
    canvas.addEventListener('webglcontextlost', onContextLost);
    canvas.addEventListener('webglcontextrestored', onContextRestored);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0E1518');
    scene.fog = new THREE.FogExp2('#0E1518', 0.045);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);

    // Three-Point Studio Lighting + Pond Water Up-bounce
    const ambientLight = new THREE.AmbientLight('#BFD8E5', 0.75);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight('#FFF7E8', 2.4);
    keyLight.position.set(5, 8, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight('#67B7D1', 1.1);
    fillLight.position.set(-6, 3, 4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight('#10B981', 1.6);
    rimLight.position.set(0, 5, -6);
    scene.add(rimLight);

    const waterBounceLight = new THREE.PointLight('#0EA5E9', 1.2, 8);
    waterBounceLight.position.set(0, -1.5, 1.5);
    scene.add(waterBounceLight);

    // Root Assembly
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Materials Catalog
    const materials: THREE.Material[] = [];
    const registerMat = <T extends THREE.Material>(m: T): T => {
      materials.push(m);
      return m;
    };

    const hopperProMat = registerMat(
      new THREE.MeshPhysicalMaterial({
        color: '#E7E9E4',
        roughness: 0.32,
        metalness: 0.05,
        clearcoat: 0.25,
        clearcoatRoughness: 0.3,
      })
    );

    const hopperLiteMat = registerMat(
      new THREE.MeshPhysicalMaterial({
        color: '#1C242B',
        roughness: 0.2,
        metalness: 0.2,
        clearcoat: 0.6,
      })
    );

    const tealAccentMat = registerMat(
      new THREE.MeshStandardMaterial({
        color: '#0D6E52',
        roughness: 0.28,
        metalness: 0.25,
      })
    );

    const darkSteelMat = registerMat(
      new THREE.MeshStandardMaterial({
        color: '#252F38',
        roughness: 0.35,
        metalness: 0.82,
      })
    );

    const brushedSteelMat = registerMat(
      new THREE.MeshStandardMaterial({
        color: '#B8C4CC',
        roughness: 0.22,
        metalness: 0.9,
      })
    );

    const solarCellMat = registerMat(
      new THREE.MeshPhysicalMaterial({
        color: '#0B2545',
        roughness: 0.15,
        metalness: 0.65,
        clearcoat: 0.9,
        clearcoatRoughness: 0.1,
      })
    );

    const amberSensorMat = registerMat(
      new THREE.MeshStandardMaterial({
        color: '#F59E0B',
        roughness: 0.25,
        metalness: 0.4,
        emissive: '#78350F',
        emissiveIntensity: 0.35,
      })
    );

    const pelletMat = registerMat(
      new THREE.MeshStandardMaterial({
        color: '#8C5828',
        roughness: 0.75,
        metalness: 0.05,
      })
    );

    const glassSightMat = registerMat(
      new THREE.MeshPhysicalMaterial({
        color: '#FFFFFF',
        transparent: true,
        opacity: 0.38,
        roughness: 0.08,
        metalness: 0.1,
      })
    );

    // 1. HOPPER GROUP (MOD-02)
    const hopperGroup = new THREE.Group();
    rootGroup.add(hopperGroup);

    // Main Cylindrical Body
    const cylinderGeo = new THREE.CylinderGeometry(0.68, 0.68, 1.05, 40);
    const cylinderMesh = new THREE.Mesh(cylinderGeo, hopperProMat);
    cylinderMesh.castShadow = true;
    cylinderMesh.receiveShadow = true;
    cylinderMesh.position.y = 0.55;
    hopperGroup.add(cylinderMesh);

    // Brand Ring Band around Hopper
    const bandGeo = new THREE.CylinderGeometry(0.692, 0.692, 0.16, 40);
    const bandMesh = new THREE.Mesh(bandGeo, tealAccentMat);
    bandMesh.position.y = 0.72;
    hopperGroup.add(bandMesh);

    // Conical Funnel Base (62-degree slope)
    const coneGeo = new THREE.CylinderGeometry(0.68, 0.18, 0.58, 40);
    const coneMesh = new THREE.Mesh(coneGeo, hopperProMat);
    coneMesh.position.y = -0.26;
    coneMesh.castShadow = true;
    hopperGroup.add(coneMesh);

    // Top Airtight Lid + Handle
    const lidGeo = new THREE.CylinderGeometry(0.71, 0.71, 0.08, 40);
    const lidMesh = new THREE.Mesh(lidGeo, darkSteelMat);
    lidMesh.position.y = 1.11;
    hopperGroup.add(lidMesh);

    const lidCapGeo = new THREE.CylinderGeometry(0.16, 0.18, 0.07, 24);
    const lidCapMesh = new THREE.Mesh(lidCapGeo, tealAccentMat);
    lidCapMesh.position.y = 1.18;
    hopperGroup.add(lidCapMesh);

    // Sight Glass Window + Internal Pellet Column
    const sightFrameGeo = new THREE.BoxGeometry(0.12, 0.76, 0.06);
    const sightFrameMesh = new THREE.Mesh(sightFrameGeo, glassSightMat);
    sightFrameMesh.position.set(0, 0.52, 0.67);
    hopperGroup.add(sightFrameMesh);

    const internalPelletGeo = new THREE.BoxGeometry(0.08, 0.62, 0.04);
    const internalPelletMesh = new THREE.Mesh(internalPelletGeo, pelletMat);
    internalPelletMesh.position.set(0, 0.45, 0.66);
    hopperGroup.add(internalPelletMesh);

    // 2. SOLAR MODULE GROUP (MOD-01)
    const solarGroup = new THREE.Group();
    rootGroup.add(solarGroup);

    const mastGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.65, 16);
    const mastMesh = new THREE.Mesh(mastGeo, brushedSteelMat);
    mastMesh.position.set(0, 1.38, -0.38);
    solarGroup.add(mastMesh);

    const solarPanelPivot = new THREE.Group();
    solarPanelPivot.position.set(0, 1.68, -0.32);
    solarPanelPivot.rotation.x = 0.42; // Tilted toward equatorial sun
    solarGroup.add(solarPanelPivot);

    const panelFrameGeo = new THREE.BoxGeometry(1.18, 0.045, 0.78);
    const panelFrameMesh = new THREE.Mesh(panelFrameGeo, brushedSteelMat);
    panelFrameMesh.castShadow = true;
    solarPanelPivot.add(panelFrameMesh);

    const panelCellsGeo = new THREE.BoxGeometry(1.12, 0.015, 0.72);
    const panelCellsMesh = new THREE.Mesh(panelCellsGeo, solarCellMat);
    panelCellsMesh.position.y = 0.022;
    solarPanelPivot.add(panelCellsMesh);

    // Silver busbars on solar panel
    for (let i = -2; i <= 2; i++) {
      const stripGeo = new THREE.BoxGeometry(0.008, 0.018, 0.7);
      const stripMesh = new THREE.Mesh(stripGeo, brushedSteelMat);
      stripMesh.position.set(i * 0.22, 0.024, 0);
      solarPanelPivot.add(stripMesh);
    }

    // 3. AUGER & CENTRIFUGAL SPINNER GROUP (MOD-03)
    const spinnerGroup = new THREE.Group();
    rootGroup.add(spinnerGroup);

    const throatGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.16, 28);
    const throatMesh = new THREE.Mesh(throatGeo, brushedSteelMat);
    throatMesh.position.y = -0.62;
    spinnerGroup.add(throatMesh);

    // Rotating Centrifugal Thrower Disc + 4 Vanes
    const rotorAssembly = new THREE.Group();
    rotorAssembly.position.y = -0.78;
    spinnerGroup.add(rotorAssembly);

    const discGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.025, 32);
    const discMesh = new THREE.Mesh(discGeo, brushedSteelMat);
    rotorAssembly.add(discMesh);

    for (let i = 0; i < 4; i++) {
      const vaneGeo = new THREE.BoxGeometry(0.22, 0.055, 0.018);
      const vaneMesh = new THREE.Mesh(vaneGeo, amberSensorMat);
      const angle = (i * Math.PI) / 2;
      vaneMesh.position.set(Math.cos(angle) * 0.11, 0.03, Math.sin(angle) * 0.11);
      vaneMesh.rotation.y = -angle;
      rotorAssembly.add(vaneMesh);
    }

    // Brushless Motor Core underneath disc
    const motorCanGeo = new THREE.CylinderGeometry(0.14, 0.12, 0.22, 24);
    const motorCanMesh = new THREE.Mesh(motorCanGeo, darkSteelMat);
    motorCanMesh.position.y = -0.94;
    spinnerGroup.add(motorCanMesh);

    // 4. MCU CONTROL & LORA TELEMETRY GROUP (MOD-04)
    const mcuGroup = new THREE.Group();
    rootGroup.add(mcuGroup);

    const mcuBoxGeo = new THREE.BoxGeometry(0.32, 0.44, 0.24);
    const mcuBoxMesh = new THREE.Mesh(mcuBoxGeo, darkSteelMat);
    mcuBoxMesh.position.set(-0.72, 0.42, 0);
    mcuBoxMesh.castShadow = true;
    mcuGroup.add(mcuBoxMesh);

    const oledGeo = new THREE.BoxGeometry(0.02, 0.16, 0.14);
    const oledMat = registerMat(
      new THREE.MeshBasicMaterial({ color: '#10B981' })
    );
    const oledMesh = new THREE.Mesh(oledGeo, oledMat);
    oledMesh.position.set(-0.885, 0.48, 0);
    mcuGroup.add(oledMesh);

    // High-gain LoRa Antenna
    const antennaBaseGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.08, 12);
    const antennaBaseMesh = new THREE.Mesh(antennaBaseGeo, brushedSteelMat);
    antennaBaseMesh.position.set(-0.72, 0.68, 0.05);
    mcuGroup.add(antennaBaseMesh);

    const antennaWhipGeo = new THREE.CylinderGeometry(0.01, 0.016, 0.55, 12);
    const antennaWhipMesh = new THREE.Mesh(antennaWhipGeo, darkSteelMat);
    antennaWhipMesh.position.set(-0.72, 0.96, 0.05);
    mcuGroup.add(antennaWhipMesh);

    // 5. SUBMERGED WATER QUALITY PROBE & FRAME GROUP (MOD-05)
    const probeGroup = new THREE.Group();
    rootGroup.add(probeGroup);

    // Tripod Galvanized Legs
    const legAngles = [0.55, 2.59, 4.71];
    legAngles.forEach((ang) => {
      const legGeo = new THREE.CylinderGeometry(0.032, 0.032, 1.55, 16);
      const legMesh = new THREE.Mesh(legGeo, brushedSteelMat);
      legMesh.position.set(
        Math.cos(ang) * 0.66,
        -0.62,
        Math.sin(ang) * 0.66
      );
      legMesh.rotation.z = -Math.cos(ang) * 0.22;
      legMesh.rotation.x = Math.sin(ang) * 0.22;
      probeGroup.add(legMesh);
    });

    // Submerged Titanium DO/pH/Temp Probe + Armored Cable
    const probeBodyGeo = new THREE.CylinderGeometry(0.055, 0.055, 0.46, 24);
    const probeBodyMesh = new THREE.Mesh(probeBodyGeo, brushedSteelMat);
    probeBodyMesh.position.set(0.95, -1.12, 0.35);
    probeGroup.add(probeBodyMesh);

    const probeTipGeo = new THREE.CylinderGeometry(0.055, 0.04, 0.12, 24);
    const probeTipMesh = new THREE.Mesh(probeTipGeo, amberSensorMat);
    probeTipMesh.position.set(0.95, -1.4, 0.35);
    probeGroup.add(probeTipMesh);

    // Curved Cable from MCU to Submerged Probe
    const cableCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.72, 0.2, 0.05),
      new THREE.Vector3(-0.3, -0.35, 0.45),
      new THREE.Vector3(0.45, -0.65, 0.45),
      new THREE.Vector3(0.95, -0.88, 0.35),
    ]);
    const cableGeo = new THREE.TubeGeometry(cableCurve, 28, 0.016, 8, false);
    const cableMesh = new THREE.Mesh(cableGeo, darkSteelMat);
    probeGroup.add(cableMesh);

    // POND WATER SURFACE & RIPPLE RINGS
    const waterGeo = new THREE.CylinderGeometry(2.6, 2.6, 0.08, 64);
    const waterMat = new THREE.MeshPhysicalMaterial({
      color: '#083344',
      roughness: 0.15,
      metalness: 0.1,
      transparent: true,
      opacity: 0.72,
      clearcoat: 0.9,
    });
    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.position.y = -1.35;
    waterMesh.receiveShadow = true;
    scene.add(waterMesh);

    const rippleRingGeo = new THREE.RingGeometry(0.85, 0.89, 64);
    const rippleRingMat = new THREE.MeshBasicMaterial({
      color: '#38BDF8',
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const rippleRingMesh = new THREE.Mesh(rippleRingGeo, rippleRingMat);
    rippleRingMesh.rotation.x = -Math.PI / 2;
    rippleRingMesh.position.y = -1.3;
    scene.add(rippleRingMesh);

    // PELLET PARTICLE POOL FOR LIVE FEEDING SIMULATION
    const pelletParticles: PelletParticle[] = [];
    const singlePelletGeo = new THREE.SphereGeometry(0.026, 8, 8);
    for (let i = 0; i < 70; i++) {
      const pMesh = new THREE.Mesh(singlePelletGeo, pelletMat);
      pMesh.visible = false;
      scene.add(pMesh);
      pelletParticles.push({
        mesh: pMesh,
        velocity: new THREE.Vector3(),
        age: 0,
        maxAge: 1.2 + Math.random() * 0.6,
        active: false,
      });
    }

    // Pointer Orbit & Zoom Controls
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
      setAutoRotate(false);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;

      window.threeState.targetSpherical.theta -= dx * 0.008;
      window.threeState.targetSpherical.phi = Math.max(
        0.35,
        Math.min(1.52, window.threeState.targetSpherical.phi - dy * 0.006)
      );
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      window.threeState.targetSpherical.radius = Math.max(
        3.0,
        Math.min(7.5, window.threeState.targetSpherical.radius + e.deltaY * 0.003)
      );
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('wheel', onWheel, { passive: false });

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || 800;
      const h = container.clientHeight || 560;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.getElapsedTime();
      const s = window.threeState;

      // Apply Wireframe Mode
      materials.forEach((m) => {
        if ('wireframe' in m) {
          (m as THREE.MeshStandardMaterial).wireframe = s.wireframe;
        }
      });

      // Switch between TebarPintar Pro and TebarPintar Lite geometry proportions
      const isLite = s.model === 'Lite';
      cylinderMesh.material = isLite ? hopperLiteMat : hopperProMat;
      coneMesh.material = isLite ? hopperLiteMat : hopperProMat;

      const targetScale = isLite ? 0.68 : 1.0;
      hopperGroup.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.08
      );
      solarGroup.visible = !isLite;
      probeGroup.visible = !isLite;

      // Exploded View Interpolation
      const expOffset = s.exploded ? 1 : 0;
      solarGroup.position.y = THREE.MathUtils.lerp(
        solarGroup.position.y,
        expOffset * 0.65,
        0.08
      );
      lidMesh.position.y = THREE.MathUtils.lerp(
        lidMesh.position.y,
        1.11 + expOffset * 0.38,
        0.08
      );
      lidCapMesh.position.y = THREE.MathUtils.lerp(
        lidCapMesh.position.y,
        1.18 + expOffset * 0.42,
        0.08
      );
      spinnerGroup.position.y = THREE.MathUtils.lerp(
        spinnerGroup.position.y,
        -expOffset * 0.45,
        0.08
      );
      mcuGroup.position.x = THREE.MathUtils.lerp(
        mcuGroup.position.x,
        -expOffset * 0.42,
        0.08
      );
      probeGroup.position.y = THREE.MathUtils.lerp(
        probeGroup.position.y,
        -expOffset * 0.25,
        0.08
      );

      // Rotor Spin & Pellet Dispensing Simulation
      const spinSpeed = s.dispensing ? 18.0 : 0.8;
      rotorAssembly.rotation.y += dt * spinSpeed;

      // Ripple ring animation
      const rippleScale = 1 + ((elapsed * (s.dispensing ? 1.2 : 0.35)) % 1.4);
      rippleRingMesh.scale.set(rippleScale, rippleScale, 1);
      rippleRingMat.opacity = Math.max(
        0,
        (1.4 - (rippleScale - 1)) * (s.dispensing ? 0.45 : 0.2)
      );

      if (s.dispensing) {
        // Spawn active pellets
        for (let i = 0; i < pelletParticles.length; i++) {
          const p = pelletParticles[i];
          if (!p.active && Math.random() < 0.32) {
            p.active = true;
            p.age = 0;
            p.mesh.visible = true;
            const launchAngle = Math.random() * Math.PI * 2;
            const speed = (isLite ? 1.4 : 2.5) + Math.random() * 0.9;
            p.mesh.position.set(
              Math.cos(launchAngle) * 0.2,
              rotorAssembly.position.y + spinnerGroup.position.y,
              Math.sin(launchAngle) * 0.2
            );
            p.velocity.set(
              Math.cos(launchAngle) * speed,
              0.35 + Math.random() * 0.3,
              Math.sin(launchAngle) * speed
            );
            break;
          }
        }
      }

      // Update active pellets physics
      for (let i = 0; i < pelletParticles.length; i++) {
        const p = pelletParticles[i];
        if (!p.active) continue;
        p.age += dt;
        p.velocity.y -= 3.8 * dt; // Gravity
        p.mesh.position.addScaledVector(p.velocity, dt);

        // Hit water plane
        if (p.mesh.position.y <= -1.3) {
          p.mesh.position.y = -1.3;
          p.velocity.set(0, 0, 0);
        }

        if (p.age >= p.maxAge) {
          p.active = false;
          p.mesh.visible = false;
        }
      }

      // Smooth Camera Orbit
      if (s.autoRotate && !isDragging) {
        s.targetSpherical.theta += dt * 0.28;
      }

      s.currentSpherical.radius = THREE.MathUtils.lerp(
        s.currentSpherical.radius,
        s.targetSpherical.radius,
        0.08
      );
      s.currentSpherical.phi = THREE.MathUtils.lerp(
        s.currentSpherical.phi,
        s.targetSpherical.phi,
        0.08
      );
      s.currentSpherical.theta = THREE.MathUtils.lerp(
        s.currentSpherical.theta,
        s.targetSpherical.theta,
        0.08
      );

      s.cameraLookAtCurrent.lerp(s.cameraLookAtTarget, 0.08);

      const r = s.currentSpherical.radius;
      const phi = s.currentSpherical.phi;
      const theta = s.currentSpherical.theta;

      camera.position.set(
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.cos(theta)
      );
      camera.lookAt(s.cameraLookAtCurrent);

      renderer.render(scene, camera);
    };

    animate();
  
  window.addEventListener('resize', onResize);
}

document.addEventListener('DOMContentLoaded', () => {
  init3D();
  
  document.getElementById('btn-model-pro')!.onclick = () => {
    (window as any).threeState.model = 'Pro';
    document.getElementById('hud-title')!.innerText = 'TebarPintar Pro';
    document.getElementById('btn-model-pro')!.classList.replace('text-slate-300', 'text-white');
    document.getElementById('btn-model-pro')!.classList.add('bg-[#0D6E52]');
    document.getElementById('btn-model-lite')!.classList.remove('bg-[#0D6E52]');
    document.getElementById('btn-model-lite')!.classList.replace('text-white', 'text-slate-300');
  };
  
  document.getElementById('btn-model-lite')!.onclick = () => {
    (window as any).threeState.model = 'Lite';
    document.getElementById('hud-title')!.innerText = 'TebarPintar Lite';
    document.getElementById('btn-model-lite')!.classList.replace('text-slate-300', 'text-white');
    document.getElementById('btn-model-lite')!.classList.add('bg-[#0D6E52]');
    document.getElementById('btn-model-pro')!.classList.remove('bg-[#0D6E52]');
    document.getElementById('btn-model-pro')!.classList.replace('text-white', 'text-slate-300');
  };

  document.getElementById('btn-explode')!.onclick = () => {
    (window as any).threeState.exploded = !(window as any).threeState.exploded;
  };
  
  document.getElementById('btn-feed')!.onclick = () => {
    (window as any).threeState.dispensing = !(window as any).threeState.dispensing;
  };
});