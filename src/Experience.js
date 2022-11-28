import { OrbitControls, Stage } from '@react-three/drei'

export default function Experience()
{

    return <>   

        <OrbitControls />

        <Stage>

            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
            
        </Stage>

    </>

}