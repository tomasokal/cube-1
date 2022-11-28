import { createRoot } from 'react-dom/client'

import Experience from './Experience.js'

const root = createRoot(document.querySelector('#root'))

root.render(

        <Canvas>
            <Experience />      
        </Canvas>

)