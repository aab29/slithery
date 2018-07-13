
import "dart:math";

class SnakeSpot {

  final Point<double> oscillationRate;
  final double timeOffset;
  final double canvasSize;
  final double slitherRadius;

  SnakeSpot(this.oscillationRate, this.timeOffset, this.canvasSize, this.slitherRadius);

  Point<double> locationAtTime(double time) {
    var adjustedTime = time + timeOffset;
    return new Point(
        canvasSize * (0.5 + cos(oscillationRate.x * adjustedTime) * slitherRadius),
        canvasSize * (0.5 + sin(oscillationRate.y * adjustedTime) * slitherRadius)
    );
  }

}