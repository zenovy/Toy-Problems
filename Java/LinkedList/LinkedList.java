public class LinkedList<T> {
  private Node<T> root;

  public static void main (String[] args)
  {
    LinkedList<Integer> list = new LinkedList<>(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(4);
    System.out.println(list.getRoot().getNextNode().getNextNode().getNextNode().getValue());
    System.out.println(list.removeFromHead().getValue());
    System.out.println(list.getRoot().getValue());
    LinkedList<String> stringList = new LinkedList<>("Hello");
    stringList.addToTail("World");
    System.out.println(stringList.getRoot().getValue() + " " +stringList.getRoot().getNextNode().getValue());
  };

  public LinkedList (T value) {
    root = new Node<T>(value);
  };

  public Node<T> getRoot () {
    return root;
  };

  public void addToTail (T newValue)
  {
    Node<T> newNode = new Node<T>(newValue);
    Node<T> currentNode = root;
    while (currentNode.getNextNode() != null)
    {
      currentNode = currentNode.getNextNode();
    }
    currentNode.setNextNode(newNode);
  };

  public Node removeFromHead ()
  {
    Node<T> head = root;
    root = root.getNextNode();
    return head;
  };
}

class Node<T> {
  private T value;
  private Node<T> next;

  public Node(T value)
  {
    this.value = value;
  };

  public T getValue ()
  {
    return value;
  };

  public Node<T> getNextNode ()
  {
    return next;
  };

  public void setValue (T newValue)
  {
    value = newValue;
  };

  public void setNextNode (Node<T> newNextNode)
  {
    next = newNextNode;
  };
}
