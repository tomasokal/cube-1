import { OrbitControls, RoundedBox, Stage } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function Experience()
{

    const cubeOne = useRef()
    const cubeTwo = useRef()
    const cubeThree = useRef()
    const cubeFour = useRef()

    const ball = useRef()

    useFrame((state, delta) =>
    {
        
        // Get time variable.
        const t = state.clock.getElapsedTime() 

        // Set up a clamp function.
        const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

        // Change position of ball along x, y, z axes.
        ball.current.position.y = Math.abs( Math.cos(2 * t) ) + 1
        ball.current.position.x = clamp( Math.sin(t), -2 / 3, 2 / 3 )
        ball.current.position.z = clamp( Math.sin(t + Math.PI / 2), -2 / 3, 2 / 3 )

        // Ball bounces every pi / 2
            // First bounce is at pi / 4
            // Second bounce is at 3 * pi / 4
            // Third bounce is at 5 * pi / 4
            // Fourth bounce is at 7 * pi / 4

        cubeOne.current.scale.y = clamp( Math.cos(t + 3 * Math.PI / 4), 0.5, 1 )
        cubeOne.current.position.y = cubeOne.current.scale.y / 2 - 0.5

        cubeTwo.current.scale.y = clamp( Math.cos(t + 5 * Math.PI / 4), 0.5, 1 )
        cubeTwo.current.position.y = cubeTwo.current.scale.y / 2 - 0.5

        cubeThree.current.scale.y = clamp( Math.cos(t + 7 * Math.PI / 4), 0.5, 1 )
        cubeThree.current.position.y = cubeThree.current.scale.y / 2 - 0.5

        cubeFour.current.scale.y = clamp( Math.cos(t + 9 * Math.PI / 4), 0.5, 1 )
        cubeFour.current.position.y = cubeFour.current.scale.y / 2 - 0.5

    })

    return <>   

        <color args={ [ '#f20f16' ] } attach="background" />  

        <OrbitControls />

        <Stage>

            <mesh position={ [ -0.5, 0, -0.5 ] } ref={ cubeOne } >
                <boxGeometry args={ [ 1, 1, 1 ] } />
                <meshPhysicalMaterial 
                    metalness={ 0 }
                    roughness={ 0.75 }
                    transmission={ 1 }
                    thickness={ 2 }
                />
            </mesh>

            <mesh position={ [0.5, 0, -0.5] } ref={ cubeTwo } >
                <boxGeometry args={ [ 1, 1, 1 ] } />
                <meshPhysicalMaterial 
                    metalness={ 0 }
                    roughness={ 0.75 }
                    transmission={ 1 }
                    thickness={ 2 }
                />
            </mesh>

            <mesh position={ [ 0.5, 0, 0.5] } ref={ cubeThree } >
                <boxGeometry args={ [ 1, 1, 1 ] } />
                <meshPhysicalMaterial 
                    metalness={ 0 }
                    roughness={ 0.75 }
                    transmission={ 1 }
                    thickness={ 2 }
                />
            </mesh>

            <mesh position={ [-0.5, 0, 0.5] } ref={ cubeFour } >
                <boxGeometry args={ [ 1, 1, 1 ] } />
                <meshPhysicalMaterial 
                    metalness={ 0 }
                    roughness={ 0.75 }
                    transmission={ 1 }
                    thickness={ 2 }
                />
            </mesh>

            <mesh position={ [0, 1, 0] }  ref={ ball }>
                <sphereGeometry args = { [ 0.5, 64 ] } />
                <meshPhysicalMaterial 
                    metalness={ 0 }
                    roughness={ 0.75 }
                    transmission={ 1 }
                    thickness={ 2 }
                />
            </mesh>
            
        </Stage>

    </>

}