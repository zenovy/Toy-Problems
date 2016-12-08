public class Route implements Observer {
  private String routeName;
  private Subject paperboy;

  @Override
  public void update() {
    System.out.println("Paper was delivered to " + this.routeName);
  }
  public Route(final String routeName, final Subject paperboy) {
    this.routeName = routeName;
    paperboy.registerObserver(this);
    this.paperboy = paperboy;
  }
}
