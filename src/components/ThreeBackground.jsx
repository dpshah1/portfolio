import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './ThreeBackground.css'

function ThreeBackground() {
  const mountRef = useRef(null)
  const sceneRef = useRef(null)
  const animationFrameRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 8

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Subtle color palette - soft, muted tones
    const color1 = new THREE.Color(0x64748b) // Slate gray
    const color2 = new THREE.Color(0x94a3b8) // Light slate
    const color3 = new THREE.Color(0xcbd5e1) // Very light slate

    // Create subtle particle field
    const particleCount = 1500
    const particles = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      
      // Spread particles wider
      positions[i3] = (Math.random() - 0.5) * 30
      positions[i3 + 1] = (Math.random() - 0.5) * 30
      positions[i3 + 2] = (Math.random() - 0.5) * 20

      // Subtle colors
      const colorChoice = Math.random()
      let color
      if (colorChoice < 0.4) {
        color = color1
      } else if (colorChoice < 0.7) {
        color = color2
      } else {
        color = color3
      }

      colors[i3] = color.r * 0.6
      colors[i3 + 1] = color.g * 0.6
      colors[i3 + 2] = color.b * 0.6

      sizes[i] = Math.random() * 0.03 + 0.01
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    // Subtle particle material
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      sizeAttenuation: true
    })

    const particleSystem = new THREE.Points(particles, particleMaterial)
    scene.add(particleSystem)

    // Single subtle wireframe sphere
    const geometry = new THREE.IcosahedronGeometry(3, 0)
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x94a3b8,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    })
    const wireframe = new THREE.Mesh(geometry, wireframeMaterial)
    scene.add(wireframe)

    // Add one more subtle layer
    const wireframe2 = wireframe.clone()
    wireframe2.scale.set(1.8, 1.8, 1.8)
    wireframe2.material = wireframeMaterial.clone()
    wireframe2.material.color = new THREE.Color(0xcbd5e1)
    wireframe2.material.opacity = 0.1
    scene.add(wireframe2)

    // Store original colors for scroll-based transitions
    const originalColor1 = new THREE.Color(0x94a3b8)
    const originalColor2 = new THREE.Color(0xcbd5e1)
    const accentColor = new THREE.Color(0x3b82f6)

    // Create vibrant orange stars (spheres)
    const orangeStars = []
    const starCount = 30
    const orangeColor = new THREE.Color(0xff6b35) // Vibrant orange
    const orangeColorBright = new THREE.Color(0xff8c42) // Brighter orange
    
    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 0.15 + 0.08 // Random size between 0.08 and 0.23
      const starGeometry = new THREE.SphereGeometry(size, 16, 16)
      
      // Create glowing material
      const starMaterial = new THREE.MeshBasicMaterial({
        color: orangeColor,
        transparent: true,
        opacity: 0.8,
        emissive: orangeColorBright,
        emissiveIntensity: 0.5
      })
      
      const star = new THREE.Mesh(starGeometry, starMaterial)
      
      // Random positions spread across the scene
      star.position.x = (Math.random() - 0.5) * 25
      star.position.y = (Math.random() - 0.5) * 30
      star.position.z = (Math.random() - 0.5) * 15 - 5 // Keep them in background
      
      // Store initial positions for scroll-based movement
      star.userData = {
        initialX: star.position.x,
        initialY: star.position.y,
        initialZ: star.position.z,
        speedX: (Math.random() - 0.5) * 0.002,
        speedY: (Math.random() - 0.5) * 0.002,
        speedZ: (Math.random() - 0.5) * 0.001,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      }
      
      scene.add(star)
      orangeStars.push(star)
    }

    // Scroll handler
    let scrollY = 0
    let targetScrollY = 0
    const handleScroll = () => {
      targetScrollY = window.scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)

      // Smooth scroll interpolation
      scrollY += (targetScrollY - scrollY) * 0.1
      
      const time = Date.now() * 0.0005
      const scrollFactor = scrollY * 0.001
      const scrollNormalized = Math.min(scrollY / 1000, 1) // Normalize to 0-1

      // Dynamic rotation based on scroll - more pronounced
      wireframe.rotation.x = scrollFactor * 0.8 + time * 0.1
      wireframe.rotation.y = scrollFactor * 0.6 + time * 0.15
      wireframe.rotation.z = scrollFactor * 0.3
      
      wireframe2.rotation.x = -scrollFactor * 0.6 - time * 0.08
      wireframe2.rotation.y = -scrollFactor * 0.5 - time * 0.12
      wireframe2.rotation.z = -scrollFactor * 0.2

      // Scale wireframes based on scroll for depth effect
      const scale1 = 1 + scrollNormalized * 0.2
      const scale2 = 1 + scrollNormalized * 0.15
      wireframe.scale.set(scale1, scale1, scale1)
      wireframe2.scale.set(scale2 * 1.8, scale2 * 1.8, scale2 * 1.8)

      // Color transition based on scroll
      const colorMix = Math.min(scrollNormalized * 0.5, 0.3)
      wireframe.material.color.lerpColors(originalColor1, accentColor, colorMix)
      wireframe2.material.color.lerpColors(originalColor2, accentColor, colorMix * 0.5)
      
      // Opacity changes with scroll
      wireframe.material.opacity = 0.15 + scrollNormalized * 0.1
      wireframe2.material.opacity = 0.1 + scrollNormalized * 0.05

      // Dynamic particle movement based on scroll
      const positions = particleSystem.geometry.attributes.position.array
      const scrollVelocity = scrollFactor * 2
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        
        // Particles flow upward as you scroll down (parallax effect)
        positions[i3 + 1] += Math.sin(time * 0.5 + i * 0.01) * 0.0002 + scrollVelocity * 0.01
        positions[i3] += Math.cos(time * 0.3 + i * 0.015) * 0.0001 + scrollVelocity * 0.005
        positions[i3 + 2] += Math.sin(time * 0.4 + i * 0.02) * 0.0001
        
        // Reset particles that drift too far
        if (Math.abs(positions[i3 + 1]) > 20) {
          positions[i3 + 1] = (Math.random() - 0.5) * 30
        }
        if (Math.abs(positions[i3]) > 20) {
          positions[i3] = (Math.random() - 0.5) * 30
        }
        if (Math.abs(positions[i3 + 2]) > 15) {
          positions[i3 + 2] = (Math.random() - 0.5) * 20
        }
      }
      particleSystem.geometry.attributes.position.needsUpdate = true

      // Dynamic camera movement - more pronounced parallax
      camera.position.y = scrollY * 0.002
      camera.position.x = Math.sin(scrollFactor * 0.5) * 0.5
      camera.rotation.z = scrollY * 0.0001
      
      // Camera zoom based on scroll
      const zoom = 8 - scrollNormalized * 2
      camera.position.z = Math.max(zoom, 5)

      // Particle system rotation for dynamic effect
      particleSystem.rotation.y = scrollFactor * 0.2

      // Animate orange stars based on scroll
      orangeStars.forEach((star, index) => {
        const userData = star.userData
        
        // Move stars based on scroll - parallax effect
        star.position.x = userData.initialX + scrollFactor * 2 + Math.sin(time + index) * 0.5
        star.position.y = userData.initialY - scrollY * 0.003 + Math.cos(time * 0.7 + index) * 0.5
        star.position.z = userData.initialZ + scrollFactor * 1.5 + Math.sin(time * 0.5 + index) * 0.3
        
        // Rotate stars
        star.rotation.x += userData.rotationSpeed
        star.rotation.y += userData.rotationSpeed * 0.7
        
        // Pulsing effect
        const pulse = Math.sin(time * 2 + index) * 0.1 + 1
        star.scale.set(pulse, pulse, pulse)
        
        // Brightness variation based on scroll
        const brightness = 0.5 + scrollNormalized * 0.3 + Math.sin(time + index) * 0.2
        star.material.emissiveIntensity = Math.max(0.3, Math.min(1, brightness))
        
        // Opacity variation
        star.material.opacity = 0.7 + scrollNormalized * 0.2 + Math.sin(time * 0.5 + index) * 0.1
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      particles.dispose()
      particleMaterial.dispose()
      wireframeMaterial.dispose()
      orangeStars.forEach(star => {
        star.geometry.dispose()
        star.material.dispose()
      })
    }
  }, [])

  return <div ref={mountRef} className="three-background" />
}

export default ThreeBackground

