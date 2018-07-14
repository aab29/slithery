
import "dart:html";
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
    _context.clearRect(0.0, 0.0, _canvasSize, _canvasSize);
    _snake.draw(_context, time);
    window.requestAnimationFrame(_update);
  }

}
