
import "dart:html";
import "dart:math";

import "snake_spot.dart";

class Snake {

  static const oscillationRate = const Point(0.0023, 0.0015);
  static const slitherRadius = 0.35;

  static final Random randomGenerator = new Random();


  double _canvasSize;
  double _thickness;

  List<SnakeSpot> _spots = [];

  Snake(this._canvasSize) {

    _thickness = _canvasSize * 0.032;

    var leadingTimeOffset = randomGenerator.nextDouble() * 100000.0;

    for (int spotIndex = 0; spotIndex < 4; spotIndex++) {
      var timeOffset = leadingTimeOffset - 100.0 * spotIndex;
      var snakeSpot = new SnakeSpot(oscillationRate, timeOffset, _canvasSize, slitherRadius);
      _spots.add(snakeSpot);
    }

  }

  void draw(CanvasRenderingContext2D context, double time) {

    context.setStrokeColorRgb(0, 0, 255);
    context.lineWidth = 1.0;
    context.beginPath();

    var locations = _spots.map((spot) => spot.locationAtTime(time)).toList(growable: false);

//    for (var location in locations) {
//      context.moveTo(location.x + _thickness, location.y);
//      context.arc(location.x, location.y, _thickness, 0.0, 2.0 * pi);
//      context.stroke();
//    }

    context.setStrokeColorRgb(0, 255, 120);
    context.lineWidth = _thickness;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(locations[0].x, locations[0].y);
    context.bezierCurveTo(
        locations[1].x, locations[1].y,
        locations[2].x, locations[2].y,
        locations[3].x, locations[3].y
    );
    context.stroke();

  }

//
//  static const tailTrailTime = 482.0;
//  static final centerOffset = new Vector2(0.5, 0.5);
//
//  double _canvasSize;
//  double _thickness;
//
//  double _headTimeOffset;
//
//  Vector2 _headLocation = new Vector2.zero();
//  Vector2 _tailLocation = new Vector2.zero();
//
//  Snake(this._canvasSize) {
//
//    this._thickness = _canvasSize * 0.015;
//
//    _headTimeOffset = randomGenerator.nextDouble() * 10000.0;
//  }

//  void update(double time) {
////    float ball1x = sin(iTime * 2.1) * 0.5 + 0.5;
////    float ball1y = cos(iTime * 1.0) * 0.5 + 0.5;
////    float ball1z = sin(iTime * 2.0) * 0.1 + 0.2;
//
////    _headLocation.setValues(
////        sin(time * 2.1) * 0.5 + 0.5,
////        cos(time * 1.0) * 0.5 + 0.5
////    );
//
//    var headTime = time + _headTimeOffset;
//
//    _headLocation.setValues(
//        sin(headTime * 0.0021) * 0.35,
//        cos(headTime * 0.0015) * 0.35
//    );
//
//    var tailTime = headTime - tailTrailTime;
//
//    _tailLocation.setValues(
//        sin(tailTime * 0.0021) * 0.35,
//        cos(tailTime * 0.0015) * 0.35
//    );
//
//
//  }

//  void draw(CanvasRenderingContext2D context) {
//
//    context.setStrokeColorRgb(0, 0, 255);
//    context.beginPath();
//    context.arc((_tailLocation.x + 0.5) * _canvasSize, (_tailLocation.y + 0.5) * _canvasSize, _thickness, 0.0, 2.0 * pi);
//    context.moveTo((_headLocation.x + 0.5) * _canvasSize + _thickness, (_headLocation.y + 0.5) * _canvasSize);
////    context.stroke();
////    context.beginPath();
//    context.arc((_headLocation.x + 0.5) * _canvasSize, (_headLocation.y + 0.5) * _canvasSize, _thickness, 0.0, 2.0 * pi);
//    context.stroke();
//  }

}