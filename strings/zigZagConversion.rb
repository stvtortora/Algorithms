# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
#
# P   A   H   N
# A P L S I I G
# Y   I   R
# And then read line by line: "PAHNAPLSIIGYIR"
#
# Write the code that will take a string and make this conversion given a number of rows:
#
# string convert(string s, int numRows);
# Example 1:
#
# Input: s = "PAYPALISHIRING", numRows = 3
# Output: "PAHNAPLSIIGYIR"
# Example 2:
#
# Input: s = "PAYPALISHIRING", numRows = 4
# Output: "PINALSIGYAHRPI"
# Explanation:
#
# P     I    N
# A   L S  I G
# Y A   H R
# P     I

def convert(s, num_rows)
    return s if num_rows == 1
  result = Array.new(num_rows) {Array.new}
  forward = false
  i = 0

  s.chars.each do |el|
    result[i] << el
    forward = !forward if i == num_rows - 1 || i == 0
    i += 1 if forward
    i -= 1 unless forward
  end

  result.flatten.join
end
