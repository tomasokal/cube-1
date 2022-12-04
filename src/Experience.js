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

        const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

        // console.log(Math.cos(2 * Math.PI / 3))

        ball.current.position.y = Math.abs( Math.cos(2 * t) ) + 1

        // ball.current.position.x = Math.cos(t) / 2 + 0.5
        // ball.current.position.z = Math.cos(t) / 2 + 0.5

        // cubeOne.current.scale.y = Math.cos(t / 2) * 2
        // cubeTwo.current.scale.y = Math.sin(t * 2 + Math.PI / 2) / 2 + 1.5
        // cubeThree.current.scale.y = Math.sin(t * 2 + Math.PI) / 2 + 1.5
        // cubeFour.current.scale.y = Math.sin(t * 2 + 3 * Math.PI / 2) / 2 + 1.5

        ball.current.position.x = clamp( Math.sin(t), -2 / 3, 2 / 3 )
        ball.current.position.z = clamp( Math.sin(t + Math.PI / 2), -2 / 3, 2 / 3 )
        // ball.current.position.x = Math.sin(t)
        // console.log(ball.current.position.x)
        // ball.current.position.x = Math.cos(t) + 0.5
        // ball.current.position.z = Math.cos(t) / 2 + 0.5
        // console.log(Math.cos(t) + 0.5)
        // console.log(Math.cos( Math.PI / 3 ))
        // console.log(Math.cos( 2 * Math.PI / 3 ))
        // ball.current.position.z = clamp(Math.sin(t) + 0.5, 0, 1)

        // ball.current.position.y = ( Math.cos(t * 2) ) + 2
        // ball.current.position.z = Math.sin(t) / 2 + 0.5
        // ball.current.position.y = Math.sin(t * 4) / 2 + 2

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

            <mesh position={ [-0.5, 0, -0.5] } ref={ cubeOne } >
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