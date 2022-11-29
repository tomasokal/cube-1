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

        const t = state.clock.getElapsedTime() 

        cubeOne.current.position.y = Math.sin(t) / 2 + 0.5
        cubeTwo.current.position.y = Math.sin(t + Math.PI / 2) / 2 + 0.5
        cubeThree.current.position.y = Math.sin(t + Math.PI) / 2 + 0.5
        cubeFour.current.position.y = Math.sin(t + 3 * Math.PI / 2) / 2 + 0.5

        ball.current.position.x = Math.sin(t) / 2 + 0.5
        ball.current.position.z = Math.cos(t) / 2 + 0.5

    })

    return <>   

        <color args={ [ '#f20f16' ] } attach="background" />  

        <OrbitControls />

        <Stage>

            {/* <mesh position={ [0, 0, -1] } >
                <planeGeometry args={ [ 5, 5 ] } />
                <meshBasicMaterial 
                    color={'#F8D628'}    
                />
            </mesh> */}

            <mesh position={ [0, 0, 0] } ref={ cubeOne } >
                <boxGeometry args={ [ 1, 1, 1 ] } />
                <meshPhysicalMaterial 
                    metalness={ 0 }
                    roughness={ 0.75 }
                    transmission={ 1 }
                    thickness={ 2 }
                />
            </mesh>

            <mesh position={ [1, 0, 0] } ref={ cubeTwo } >
                <boxGeometry args={ [ 1, 1, 1 ] } />
                <meshPhysicalMaterial 
                    metalness={ 0 }
                    roughness={ 0.75 }
                    transmission={ 1 }
                    thickness={ 2 }
                />
            </mesh>

            <mesh position={ [ 1, 0, 1] } ref={ cubeThree } >
                <boxGeometry args={ [ 1, 1, 1 ] } />
                <meshPhysicalMaterial 
                    metalness={ 0 }
                    roughness={ 0.75 }
                    transmission={ 1 }
                    thickness={ 2 }
                />
            </mesh>

            <mesh position={ [0, 0, 1] } ref={ cubeFour } >
                <boxGeometry args={ [ 1, 1, 1 ] } />
                <meshPhysicalMaterial 
                    metalness={ 0 }
                    roughness={ 0.75 }
                    transmission={ 1 }
                    thickness={ 2 }
                />
            </mesh>

            <mesh position={ [0, 2, 0] }  ref={ ball }>
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