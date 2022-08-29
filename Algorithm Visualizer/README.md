# Visualizer

Visualizer is a react web-app where you can visualize various algorithms.  
[Visualizer](https://prakashaditya369.github.io/visualizer)

## Algorithm Implemented:

1. Tower of Hanoi: Tower of Hanoi is a mathematical puzzle where we have three rods and n disks. The objective of the puzzle is to move the entire stack to another rod, obeying certain rules. I have implemented it using Recursion. To learn more about the problem, visit [GeeksforGeeks](https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/).

2. Backtracking: Backtracking is an algorithm that considers searching every possible combination in order to solve a problem. I have implemented a Sudoku Solver based on this algorithm. Read more about Backtracking at [GeeksforGeeks](https://www.geeksforgeeks.org/backtracking-introduction/).

3. Bubble Sort: Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order. Read more about Bubble Sort at [GeeksforGeeks](https://www.geeksforgeeks.org/bubble-sort/).

4. Insertion Sort: Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part. Read more about Insertion Sort at [GeeksforGeeks](https://www.geeksforgeeks.org/insertion-sort/).

5. Selection Sort: The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.  Read more about Selection Sort at [GeeksforGeeks](https://www.geeksforgeeks.org/selection-sort/).

6. Merge Sort: Merge sort is a sorting algorithm based on Divide and Conquer. It divides an array into two halves. Then further divide them into two halves. Then  finally merges the two sorted halves. Read more about Merge Sort at [GeeksforGeeks](https://www.geeksforgeeks.org/merge-sort/).

7. Quick Sort: Quick sort is also a sorting algorithm based on Divide and Conquer. It picks an element as pivot and paritions the given array around the picked pivot. Read more about Quick Sort at [GeeksforGeeks](https://www.geeksforgeeks.org/quick-sort/).

8. Heap Sort: Heap sort is a comparison based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end. Read more about Heap Sort at [GeeksforGeeks](https://www.geeksforgeeks.org/heap-sort/).

9. Depth First Search: This is an algorithm for searching and traversing tree or graphs. The algorithm starts at the root node and explores as far as possible along each branch bfore backtracking. I have implemented this algorithm to find path between starting and end point in a maze. Read more about DFS at [GeeksforGeeks](https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/).

10. Breadth First Search: This is an algorithm for searching and traversing tree or graphs. The algorithm first go through all parent nodes then go for child nodes. I have implemented this algorithm to find path between starting and end point in a maze. Read more about Breadth First Search at [GeeksforGeeks](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/).

11. Dijkstra's Algorithm: Dijkstra's Algorithm is a greedy algorithm used to find shortest paths from source to all vertices in the given graph. I have implemented this algorithm to find the minimum distance between starting and end point in a maze.  Read more about DIjkstra's Algorithm at [GeeksforGeeks](https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/).

12. A* Algorithm: A* Search Algorithm is similar to Dijkstra's Algorithm. It takes into account the distance between current position and destination which makes it fast. It finds the shortest path in shortest time span. I have implemented this algorithm to find shortest path between starting and end point in a maze. Read more about A* Algorithm at [GeeksforGeeks](https://www.geeksforgeeks.org/a-search-algorithm/). 

## Source Code:

The raw ReactJS code for the algorithm is in [SourceCode](/SourceCode) folder. It has normal React Framework like struture.

## Additional Scripts:

- [compile.sh](/compile.sh): Shell Script to build the react code. Copy the compiled code into the folder to be pushed and source code in SourceCode folder. Then pushes the entire code to Github.

- [check_for_algo.py](/check_for_algo.py): If a new algorithm folder is added in src folder. It imports the corresponding React Component into App.js.

##### It you have any suggestions or want to add any algo. Ping me.
##### Thanks.
