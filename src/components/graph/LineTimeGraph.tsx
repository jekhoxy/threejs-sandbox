import { ReactNode, useEffect, useState } from "react";
import Scene from "../Scene";
import Plane from "../geometry/Plane";
import * as THREE from "three";


const ROW_LENGTH = 120;
const MAX_ROWS = 120;

function createRow(row = 0): ReactNode[] {
  const rowBuilder: ReactNode[] = []
  for (let i = 0; i < ROW_LENGTH; i++) {
    const toss = THREE.MathUtils.randInt(0, 1);
    rowBuilder[i] = (
      <Plane
        key={"plane" + row + i}
        args={[0.01, 0.01]}
        meshProps={{ position: [(i - ROW_LENGTH / 2) / 100, -row / 100, 0] }}
        materialProps={{ color: toss ? "yellow" : "green" }}
      />
    );
  }

  return rowBuilder
}

export default function LineTimeGraph() {
    
  const [currentRows, setCurrentRows] = useState([createRow()])
  

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentRows(current => {
        let tmpRows = current
        if (current.length > MAX_ROWS) {
          tmpRows = current.slice(1, MAX_ROWS)
        }
        return [...tmpRows, createRow(current.length)]
      })
    }, 5000)

    return () => clearInterval(id);
  }, [])


    return <Scene>{currentRows.map(dotsRow => dotsRow)}</Scene>
}