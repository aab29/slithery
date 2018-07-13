
import "dart:html";
import "dart:async";

import "snake.dart";

class Simulation {
  CanvasElement _canvas;
  CanvasRenderingContext2D _context;

  double _canvasSize;

  Snake _snake;

  Simulation(this._canvas, this._context) {

    _canvasSize = _canvas.width.toDouble();

    _snake = new Snake(_canvasSize);

    _startAnimating();
  }

  void _startAnimating() {
    window.requestAnimationFrame(_update);
  }

  void _update(num time) {
//    print("The timestamp is: $timestamp");

    _context.clearRect(0.0, 0.0, _canvasSize, _canvasSize);

//    _snake.update(time);
    _snake.draw(_context, time);

    if (time < 8000) {
      window.requestAnimationFrame(_update);
    }
  }

//  void _update(num time) {
//    _timer.cancel();
//    if (lifeTime > 0) {
//      var duration = new Duration(
//          milliseconds: max(0, lifeTime - (time.toInt() % lifeTime)));
//      _timer = new Timer(duration, () {
//        _board.step();
//        _board.draw(_context);
//
//        animate();
//      });
//    }
//  }
}
