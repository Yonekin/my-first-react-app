import './landing-imgcss.css';
import React, { useEffect, useRef } from 'react';

function Landingimg() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const COLOR_BG = "white";
        const COLOR_CUBE = "black";
        const ANGLE_INCREMENT = 0.05;

        // Define a Point in 3D space
        const Point3D = function (x, y, z) {
            this.x = x; this.y = y; this.z = z;
        };

        // Define a Cube in 3D space
        const Cube = function (x, y, z, size) {
            size *= 0.5;
            this.points2D = new Array(7);
            this.centerPoint = new Point3D(x, y, z);
            Point3D.call(this, x, y, z);
            this.vertices = [
                new Point3D(x - size, y - size, z - size),
                new Point3D(x + size, y - size, z - size),
                new Point3D(x + size, y + size, z - size),
                new Point3D(x - size, y + size, z - size),
                new Point3D(x - size, y - size, z + size),
                new Point3D(x + size, y - size, z + size),
                new Point3D(x + size, y + size, z + size),
                new Point3D(x - size, y + size, z + size)
            ];
            this.edges = [
                [0, 1], [1, 2], [2, 3], [3, 0],
                [4, 5], [5, 6], [6, 7], [7, 4],
                [0, 4], [1, 5], [2, 6], [3, 7]
            ];

            // Functions to rotate the Cube around X, Y, and Z axes
            this.rotX = function (angle) {
                this.vertices.forEach(point => {
                    const px = point.x - this.centerPoint.x;
                    const py = point.y - this.centerPoint.y;
                    const pz = point.z;
                    point.x = px + this.centerPoint.x;
                    point.y = py * Math.cos(angle) + pz * Math.sin(-angle) + this.centerPoint.y;
                    point.z = py * Math.sin(angle) + pz * Math.cos(angle);
                });
            }

            this.rotY = function (angle) {
                this.vertices.forEach(point => {
                    const px = point.x - this.centerPoint.x;
                    const py = point.y - this.centerPoint.y;
                    const pz = point.z;
                    point.x = px * Math.cos(angle) + pz * Math.sin(angle) + this.centerPoint.x;
                    point.y = py + this.centerPoint.y;
                    point.z = px * Math.sin(-angle) + pz * Math.cos(angle);
                });
            }

            this.rotZ = function (angle) {
                this.vertices.forEach(point => {
                    const px = point.x - this.centerPoint.x;
                    const py = point.y - this.centerPoint.y;
                    const pz = point.z;
                    point.x = px * Math.cos(angle) + py * Math.sin(-angle) + this.centerPoint.x;
                    point.y = px * Math.sin(angle) + py * Math.cos(angle) + this.centerPoint.y;
                    point.z = pz;
                });
            }
        }

        let cube;
        //define the angle variable to 
        let angle = 0;


        function loop() {
            //get the display dimensions
            let height = document.documentElement.clientHeight;
            let width = document.documentElement.clientWidth;

            // Set background color
            context.fillStyle = COLOR_BG;
            context.fillRect(0, 0, width, height);

            // Set canvas dimensions
            context.height = height / 2;
            context.width = width / 2;

            // Set cube color
            context.strokeStyle = COLOR_CUBE;

            // Get canvas element
            const canvas = document.querySelector("canvas");
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const canvasMiddleX = canvasWidth / 2;
            const canvasMiddleY = canvasHeight / 2;

            // Create a new Cube
            cube = new Cube(canvasMiddleX, canvasMiddleY, 0, canvasHeight / 1.75);

            // Rotate the cube in X, Y, and Z axes
            cube.rotX(1);
            cube.rotY(angle / 8);
            cube.rotZ(angle / 4);

            // Increment the angle for the next frame
            if (angle < 16 * Math.PI) {
                angle += ANGLE_INCREMENT;
            } else {
                angle = 0;
            }

            // Draw all edges of the cube
            for (let edge of cube.edges) {
                context.beginPath();
                context.moveTo(cube.vertices[edge[0]].x, cube.vertices[edge[0]].y);
                context.lineTo(cube.vertices[edge[1]].x, cube.vertices[edge[1]].y);
                context.stroke();
            }

            // Request the next animation frame
            window.requestAnimationFrame(loop);
        }

        // Start the loop
        loop();
    }, []);

    return (
        <div className="landing-img">
            <canvas className="img-mock" ref={canvasRef}></canvas>
        </div>
    );
}

export default Landingimg;
