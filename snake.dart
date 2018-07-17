
import "dart:html";
import "dart:math";

import "snake_point.dart";

class Snake {

  static final Random randomGenerator = new Random();

  static const oscillationRate = const Point(0.0023, 0.0015);
  static const thicknessProportion = 0.022;
  static const randomizedTimeRange = 100000.0;
  static const slitherRadius = 0.35;
  static const pointTimeOffsets = [
    0,
    120.0,
    230.0,
    300.0
  ];

  double _canvasSize;
  double _thickness;

  List<SnakePoint> _points;
  SnakePoint _headPoint;
  SnakePoint _controlPointA;
  SnakePoint _controlPointB;
  SnakePoint _tailPoint;

  Snake(this._canvasSize) {

    _thickness = _canvasSize * thicknessProportion;

    var leadingTimeOffset = randomGenerator.nextDouble() * randomizedTimeRange;

    _points = pointTimeOffsets.map((pointOffset) =>
      new SnakePoint(
          oscillationRate,
          leadingTimeOffset - pointOffset,
          _canvasSize,
          slitherRadius
      )).toList(growable:false);

    _headPoint = _points[0];
    _controlPointA = _points[1];
    _controlPointB = _points[2];
    _tailPoint = _points[3];

  }

  void draw(CanvasRenderingContext2D context, double time) {

    _points.forEach((point) => point.updateLocation(time));

    context.setStrokeColorRgb(0, 255, 120);
    context.lineWidth = _thickness;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(_headPoint.x, _headPoint.y);
    context.bezierCurveTo(
        _controlPointA.x, _controlPointA.y,
        _controlPointB.x, _controlPointB.y,
        _tailPoint.x, _tailPoint.y
    );
    context.stroke();

  }

}