# Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
#
# Example 1:
#
# Input: "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.
# Example 2:
#
# Input: "cbbd"
# Output: "bb"

def longest_palindrome(s)
  max_len = 0
  start_pos = 0

  s.chars.each_index do |i|
   odd_len = extendPal(i, i, s)
   even_len = extendPal(i, i+1, s)
   current_len = [odd_len, even_len].max

    if current_len > max_len
      start_pos = current_len.odd? ? (i - current_len/2) : (i - current_len/2 + 1)
      max_len = current_len
   end
  end

  s[start_pos...start_pos + max_len]
end

def extendPal(front, back, s)
  while front >= 0 && back < s.length
    break if s[front] != s[back]
    front -= 1
    back += 1
  end

  back - front - 1
end
