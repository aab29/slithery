
import "dart:html";
import "dart:math";

import "snake_spot.dart";

class Snake {

  static final Random randomGenerator = new Random();

  static const oscillationRate = const Point(0.0023, 0.0015);
  static const slitherRadius = 0.35;
  static const spotTimeOffsets = [
    0,
    120.0,
    230.0,
    300.0
  ];

  double _canvasSize;
  double _thickness;

  List<SnakeSpot> _spots;
  SnakeSpot _headSpot;
  SnakeSpot _controlSpotA;
  SnakeSpot _controlSpotB;
  SnakeSpot _tailSpot;

  Snake(this._canvasSize) {

    _thickness = _canvasSize * 0.022;

    var leadingTimeOffset = randomGenerator.nextDouble() * 100000.0;

    _spots = spotTimeOffsets.map((spotOffset) =>
      new SnakeSpot(
          oscillationRate,
          leadingTimeOffset - spotOffset,
          _canvasSize,
          slitherRadius
      )).toList(growable:false);

    _headSpot = _spots[0];
    _controlSpotA = _spots[1];
    _controlSpotB = _spots[2];
    _tailSpot = _spots[3];

  }

  void draw(CanvasRenderingContext2D context, double time) {

    _spots.forEach((spot) => spot.updateLocation(time));

    context.setStrokeColorRgb(0, 255, 120);
    context.lineWidth = _thickness;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(_headSpot.x, _headSpot.y);
    context.bezierCurveTo(
        _controlSpotA.x, _controlSpotA.y,
        _controlSpotB.x, _controlSpotB.y,
        _tailSpot.x, _tailSpot.y
    );
    context.stroke();

  }

}