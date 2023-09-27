import { MeshProps, MeshStandardMaterialProps, PlaneGeometryProps, useThree } from "@react-three/fiber";

export interface PlaneProps extends PlaneGeometryProps {
    meshProps?: MeshProps;
    materialProps?: MeshStandardMaterialProps
}

export default function Plane({meshProps, materialProps, ...props}: PlaneProps) {

    return <mesh {...meshProps}>
        <planeGeometry {...props} />
        <meshBasicMaterial {...materialProps}/>
    </mesh>
}