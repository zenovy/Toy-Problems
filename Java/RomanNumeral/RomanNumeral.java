/*
* Given a roman numeral as input, write a function that converts the roman
* numeral to a number and outputs it.
*
* Ex:
* translateRomanNumeral("LX") // 60
*
* When a smaller numeral appears before a larger one, it becomes
* a subtractive operation. You can assume only one smaller numeral
* may appear in front of larger one.
*
* Ex:
* translateRomanNumeral("IV") // 4
*
* You should return `null` on invalid input.
*
*/

import java.util.Map;
import java.util.HashMap;

public class RomanNumeral {
  public static final Map<String, Integer> DIGIT_VALUES = new HashMap<>();
  static {
    DIGIT_VALUES.put("I", 1);
    DIGIT_VALUES.put("V", 5);
    DIGIT_VALUES.put("X", 10);
    DIGIT_VALUES.put("L", 50);
    DIGIT_VALUES.put("C", 100);
    DIGIT_VALUES.put("D", 500);
    DIGIT_VALUES.put("M", 1000);
  }
  public static void main(String[] args) {
    String romanNumeral = args[0];
    System.out.println(getSubNumber(romanNumeral));
  }
  public static int getSubNumber(String subSeq) {
    if (subSeq.length() == 0) {
      return 0;
    }
    if (DIGIT_VALUES.get(subSeq) != null) {
      return DIGIT_VALUES.get(subSeq);
    } else {
      int numerical = 0;
      int largestValPos = findLargestValPos(subSeq);
      String largestNumeral = String.valueOf(subSeq.charAt(largestValPos));
      int largestValue = DIGIT_VALUES.get(largestNumeral);
      String beforeNumeral = subSeq.substring(0, largestValPos);
      int beforeValue = getSubNumber(beforeNumeral);
      int afterValue = 0;
      // If there's nothing to the right of the largest, this would cause NPE.
      if (largestValPos != subSeq.length() - 1) {
        String afterNumeral = subSeq.substring(largestValPos + 1);
        afterValue = getSubNumber(afterNumeral);
      }
      return largestValue + afterValue - beforeValue;
    }
  }
  public static int findLargestValPos(final String subSeq) {
    int largestVal = 0;
    int largestValPos = 0;
    for (int i = 0; i < subSeq.length(); i++) {
      int currentVal = DIGIT_VALUES.get(String.valueOf(subSeq.charAt(i)));
      if (currentVal > largestVal) {
        largestVal = currentVal;
        largestValPos = i;
      }
    }
    return largestValPos;
  }
}

