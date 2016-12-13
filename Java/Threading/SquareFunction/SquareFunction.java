import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

public class SquareFunction {
  private Map<Integer, Double> functionTable;
  private List<Thread> threadList;
  public SquareFunction() {
    functionTable = new HashMap<>();
    threadList = new ArrayList<>();
  }
  public static void main(String[] args) {
    SquareFunction sqFunc = new SquareFunction();
    sqFunc.doWork();
  }
  public synchronized void addToTable(final int key, final double value) {
    functionTable.put(key, value);
  }
  public void doWork() {
    for (int i = 0; i < 100; i++) {
      Thread newThread = new SquareThread(i);
      threadList.add(newThread);
      newThread.start();
    }
    try {
      threadList.get(99).join();
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    for (int i = 0; i < 100; i++) {
      System.out.println(i + " " + functionTable.get(i));
    }
  }
  class SquareThread extends Thread {
    final private int inputVal;
    public SquareThread(final int inputVal) {
      this.inputVal = inputVal;
    }
    public void run() {
      functionTable.put(inputVal, Math.pow(inputVal, 2));
      if (inputVal > 0) {
        try {
          threadList.get(inputVal - 1).join();
        } catch (InterruptedException e) {
          e.printStackTrace();
        }
      }
    }
  }
}
