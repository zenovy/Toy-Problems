public class LegacyRectangle {
  final double x0;
  final double x1;
  final double y0;
  final double y1;
  public LegacyRectangle(final double x0, final double x1, final double y0, final double y1){
    this.x0 = x0;
    this.x1 = x1;
    this.y0 = y0;
    this.y1 = y1;
  }
  public double getWidth() {
    return Math.abs(x1 - x0);
  }
  public double getHeight() {
    return Math.abs(y1 - y0);
  }
  public double getArea() {
    return this.getWidth() * this.getHeight();
  }
}

