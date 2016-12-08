import java.util.ArrayList;
import java.util.List;

public class Paperboy implements Subject {
  private String name;
  private List<Observer> routes;

  @Override
  public void registerObserver(Observer o) {
    routes.add(o);
  }
  @Override
  public void removeObserver(Observer o) {
    routes.remove(o);
  }
  @Override
  public void notifyObservers() {
    for (int i = 0; i < this.routes.size(); i++) {
      this.routes.get(i).update();
    }
  }

  public Paperboy(final String name) {
    this.name = name;
    this.routes = new ArrayList<>();
  }

  public static void main(String[] args) {
    Paperboy paperboy = new Paperboy("Johnny");
    new Route("Johnson St.", paperboy);
    new Route("Albert Dr.", paperboy);
    new Route("Lily Ave.", paperboy);

    paperboy.notifyObservers();
  }

  public String getName() {
    return this.name;
  }
}

