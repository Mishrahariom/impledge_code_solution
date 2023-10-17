| Name |     Hariom Mishra   |
|--|--|
| Email  |  hariom.cs2020@mpgi.edu.in |
|Roll no |2003490100010|
|College  |Maharana Pratap group of institutions |
|Number  |6392560293|


**Overview:** This JavaScript program reads an input file containing a list of alphabetically sorted words, identifies the longest compounded word and the second longest compounded word, and measures the time taken to process the input file. A compounded word is a word that can be constructed by concatenating shorter words also found in the same file.

**Execution Steps:**

1.  Place the `compoundedWords.js` file in the same directory as the input files (`Input_01.txt` and `Input_02.txt`).
2.  Open your terminal or command prompt and navigate to the directory where the files are located.
3.  Run the program by entering the following command:
**node compoundedWords.js**


**Approach:**

-   The program uses a depth-first search (DFS) approach to find compounded words in the word list. It starts with each word and tries to split it into two parts. If both parts are valid words, it considers the word to be a compounded word.
-   The program reads the input file line by line using the  *readline* module to avoid memory issues with large files.
-   The identified compounded words are stored in an array, sorted by length to find the longest and second longest compounded words.