import { PropsWithChildren } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { CameraControls, TransformControls  } from "@react-three/drei";

export interface SceneProps extends PropsWithChildren {
    intensity?: number;
    position?: number[];
}

const defaultPosition = [0, 0, 1]


export default function Scene({intensity = 1, position = [1, 1, 1], children}: SceneProps) {

    return <Canvas camera={{ position: defaultPosition, fov: 45 }}>
        <axesHelper />
        <CameraControls  makeDefault />
        <TransformControls makeDefault />
        {children}
    </Canvas>
}