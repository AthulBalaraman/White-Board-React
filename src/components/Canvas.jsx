import React ,{ useRef, useEffect } from 'react'
import {fabric} from 'fabric'
import './style.css'
const Canvas = () => {
  const canvasRef = useRef(null);
  useEffect(()=>{
    const canvas = new fabric.Canvas(canvasRef.current);
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 2;
    canvas.freeDrawingBrush.color = "blue";
    canvas.freeDrawingCursor = "crosshair"
  },[])
  return (
    <div>
      <canvas id='canvas' ref={canvasRef} width={12000} height={1000}></canvas>
    </div>
  )
}

export default Canvas
