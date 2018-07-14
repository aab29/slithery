
import "dart:math";

class SnakeSpot {

  final Point<double> oscillationRate;
  final double timeOffset;
  final double canvasSize;
  final double slitherRadius;

  double x;
  double y;

  SnakeSpot(this.oscillationRate, this.timeOffset, this.canvasSize, this.slitherRadius);

  void updateLocation(double time) {
    var adjustedTime = time + timeOffset;

    x = canvasSize * (0.5 + cos(oscillationRate.x * adjustedTime) * slitherRadius);
    y = canvasSize * (0.5 + sin(oscillationRate.y * adjustedTime) * slitherRadius);
  }

}