import "dart:html";

import "canvas_tools.dart";
import "simulation.dart";

void main() {
  var canvas = CanvasTools.configureSquareCanvas();
  var context = canvas.getContext("2d") as CanvasRenderingContext2D;

  new Simulation(canvas, context);

//  var canvasSize = canvas.width;
//
//  context.beginPath();
//  context.moveTo(canvasSize * 0.5, canvasSize * 0.5);
//  context.lineTo(canvasSize * 0.4, canvasSize * 0.8);
//  context.stroke();

}
