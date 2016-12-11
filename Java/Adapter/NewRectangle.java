public class NewRectangle {
  final LegacyRectangle oldRect;
  public NewRectangle(final double x0, final double y0, final double width, final double height) {
    double x1 = x0 + width;
    double y1 = y0 + height;
    this.oldRect = new LegacyRectangle(x0, x1, y0 y1);
  } 
  public double getWidth() {
    return this.oldRect.getWidth();
  }
  public double getHeight() {
    return this.oldRect.getHeight();
  }
  public double getArea() {
    return this.oldRect.getArea();
  }
}

