public class LinkedList<T> {
  class Node<T> {
    private T value;
    private Node<T> nextNode;
    public Node(final T value, final Node<T> nextNode) {
      this.value = value;
      this.nextNode = nextNode;
    }
    public void setNextNode(final Node<T> nextNode) {
      this.nextNode = nextNode;
    }
    public T getValue() {
      return this.value;
    }
  }
  private Node<T> startNode;
  public Node<T> getStartNode() {
    return this.startNode;
  }
  public LinkedList(final T value) {
    this.startNode = new Node<T>(value, null);
  }
  public static void main(String[] args) {
    LinkedList list = new LinkedList<Integer>(3);
    System.out.println(list.getStartNode().getValue());
  }
}

