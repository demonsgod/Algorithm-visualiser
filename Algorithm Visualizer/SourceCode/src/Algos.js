// This is used to create the select option in top right corner.

import Dfsalgorithm from "./components/dfsalgorithm/App";
import Mergesort from "./components/mergesort/App";
import Quicksort from "./components/quicksort/App";
import Backtracking from "./components/backtracking/App";
import Towerofhanoi from "./components/towerofhanoi/App";
import Dijkstraalgorithm from "./components/dijkstraalgorithm/App";
import Bubblesort from "./components/bubblesort/App";
import Insertionsort from "./components/insertionsort/App";
import Bfsalgorithm from "./components/bfsalgorithm/App";
import Selectionsort from "./components/selectionsort/App";
import Heapsort from "./components/heapsort/App";
import Astaralgorithm from "./components/astaralgorithm/App";

const algorithms = [
  {
    value: "dfsalgorithm",
    text: "Depth First Search",
    dom: <Dfsalgorithm />,
  },
  {
    value: "mergesort",
    text: "Merge Sort",
    dom: <Mergesort />,
  },
  {
    value: "quicksort",
    text: "Quick Sort",
    dom: <Quicksort />,
  },
  {
    value: "backtracking",
    text: "Backtracking",
    dom: <Backtracking />,
  },
  {
    value: "towerofhanoi",
    text: "Tower Of Hanoi",
    dom: <Towerofhanoi />,
  },
  {
    value: "dijkstraalgorithm",
    text: "Dijkstra's Algorithm",
    dom: <Dijkstraalgorithm />,
  },
  {
    value: "bubblesort",
    text: "Bubble Sort",
    dom: <Bubblesort />,
  },
  {
    value: "insertionsort",
    text: "Insertion Sort",
    dom: <Insertionsort />,
  },
  {
    value: "bfsalgorithm",
    text: "Breadth First Search",
    dom: <Bfsalgorithm />,
  },
  {
    value: "selectionsort",
    text: "Selection Sort",
    dom: <Selectionsort />,
  },
  {
    value: "heapsort",
    text: "Heap Sort",
    dom: <Heapsort />,
  },
  {
    value: "astaralgorithm",
    text: "A* Algorithm",
    dom: <Astaralgorithm />,
  },
];

export default algorithms;

