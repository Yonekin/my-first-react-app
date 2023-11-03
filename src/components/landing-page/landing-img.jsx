import './landing-imgcss.css'
import React, { useEffect, useRef } from 'react';

function Landingimg() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const COLOR_BG = "white";
        const COLOR_CUBE = "black";
        const ANGLE_INCREMENT = 0.05;

        // defining necessary objects
        const Point3D = function (x, y, z) {
            this.x = x; this.y = y; this.z = z;
        };

        const Cube = function (x, y, z, size) {
            size *= 0.5;
            this.points2D = new Array(7);
            this.centerPoint = new Point3D(x,y,z);
            Point3D.call(this, x, y, z);
            this.vertices = [new Point3D(x - size, y - size, z - size),
            new Point3D(x + size, y - size, z - size),
            new Point3D(x + size, y + size, z - size),
            new Point3D(x - size, y + size, z - size),
            new Point3D(x - size, y - size, z + size),
            new Point3D(x + size, y - size, z + size),
            new Point3D(x + size, y + size, z + size),
            new Point3D(x - size, y + size, z + size)];
            this.edges =
                [[0, 1], [1, 2], [2, 3], [3, 0],
                [4, 5], [5, 6], [6, 7], [7, 4],
                [0, 4], [1, 5], [2, 6], [3, 7]]


            //The Following 3 Functions implement methods to Rotate the Cube they update the Position of the Points by Calculating its 
            //position through matrix multiplication with the corresponding rotation Matrix


            /*              
                  const RotationMatrixX = math.matrix([[1, 0, 0],
                                                       [0,(Math.cos(angle)), (Math.sin(-angle))],
                                                       [0,(Math.sin(angle)), (Math.cos(angle))]]);
            */

            this.rotX = function (angle) {
                this.vertices.forEach(point => {
                    const px = point.x-this.centerPoint.x;
                    const py = point.y-this.centerPoint.y;
                    const pz = point.z;
                    point.x = px + this.centerPoint.x;
                    point.y = py * Math.cos(angle) + pz * Math.sin(-angle)+this.centerPoint.y;
                    point.z = py * Math.sin(angle) + pz * Math.cos(angle) ;
                });
            }

            /*          const RotationMatrixY = math.matrix([[(Math.cos(angle)), 0, (Math.sin(angle))],
                                                             [0, 1, 0],
                                                             [(Math.sin(-angle)), 0, (Math.cos(angle))]]);
            */

            this.rotY = function (angle) {
                this.vertices.forEach(point => {
                    const px = point.x-this.centerPoint.x;
                    const py = point.y-this.centerPoint.y;
                    const pz = point.z;
                    point.x = px * Math.cos(angle) + pz * Math.sin(angle)+ this.centerPoint.x;
                    point.y = py+this.centerPoint.y;
                    point.z = px * Math.sin(-angle) + pz * Math.cos(angle);
                });
            }
            /*            const RotationMatrixZ = math.matrix([[(Math.cos(angle/3)), (Math.sin(-angle/3)), 0],
                                                               [(Math.sin(angle/3)), (Math.cos(angle/3)), 0],
                                                               [0, 0, 1]]);
            */
            this.rotZ = function (angle) {
                this.vertices.forEach(point => {
                    const px = point.x-this.centerPoint.x;
                    const py = point.y-this.centerPoint.y;
                    const pz = point.z;
                    point.x = px * Math.cos(angle) + py * Math.sin(-angle)+ this.centerPoint.x;
                    point.y = px * Math.sin(angle) + py * Math.cos(angle)+this.centerPoint.y;
                    point.z = pz;
                });
            }
        }

        let cube;
        let angle;
        function loop() {
            let height = document.documentElement.clientHeight;
            let width = document.documentElement.clientWidth;
            console.log(cube)
            context.fillStyle = COLOR_BG;
            context.fillRect(0, 0, width, height);
            context.height = height / 2;
            context.width = width / 2;
            context.strokeStyle = COLOR_CUBE;
            const canvas = document.querySelector("canvas");
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const canvasMiddleX = canvasWidth / 2;
            const canvasMiddleY = canvasHeight / 2;
            cube = new Cube(canvasMiddleX, canvasMiddleY, 0, canvasHeight / 1.75);
            if(angle < 16* Math.PI){
                angle+=ANGLE_INCREMENT;
            }else{
                angle=0;
            }
            cube.rotX(1);
            cube.rotY(angle/16);
            cube.rotZ(angle/4);
            // cube.rotX(Math.PI/4);
            // cube.rotY(angle/2);
            // cube.rotZ(Math.PI/6);
            //Drawing all Edges of the Cube
            for (let edge of cube.edges) {
                context.beginPath();
                context.moveTo(cube.vertices[edge[0]].x, cube.vertices[edge[0]].y)
                context.lineTo(cube.vertices[edge[1]].x, cube.vertices[edge[1]].y)
                context.stroke();
            }
            window.requestAnimationFrame(loop);
        }
        //Start the loop
        loop();
    }, []);

    return (
        <div className="landing-img">
            <canvas className="img-mock" ref={canvasRef}></canvas>
        </div>
    );
}
export default Landingimg