# Notes on Stacks and Queues

## Stacks

Stacks use the **LIFO** approach: **L**ast **I**n, **F**irst **O**ut.When we just need to add data to our collection and to take data out, the last data inserted is the first data we can get out. Examples of usage: Undo/Redo, pagination, etc.

- We could use an array (quick way) or a linked list (optimized way) for a Stack.
- If we are using an array:
  - _unshift_ to put in, and _shift_ to get out can be used, but the re-indexation of the data consumes more computational time.
  - _push_ to put in, and _pop_ to get out is better, since we are adding to the last index without re-indexing the data.
- If we are using a linked list:
  - This approach is better since we just need to keep track of the _tail_ and the _head_, not at indexes.
- Big O of Stacks
  - Insertion O(1)
  - Removal O(1)
  - Searching O(N)
  - Accessing O(N)
- Arrays are not constant computational time O(1) because they have to re-index the elements by using shift or unshift
- Linked Lists are constant computational time O(1) because they DO NOT re-index the elements, just do LIFO

## Queues

Queues use the **FIFO** approach: **F**irst **I**n, **F**irst **O**ut. When we just need to add data to our collection and to take data out, the first data inserted is the first data we can get out. Examples of usage: Joining a multiplayer game, downloading/uploading files (if the size is the same), printing, task processing, etc.

- We could use an array (quick way) or a linked list (optimized way) for a Queue.
- If we are using an array:
  - _push_ to put in, and _pop_ to get out can be used, but it would do a LIFO, and that's not what we want!!
  - _unshift_ to put in, and _pop_ to get out can be used, so we can do it a FIFO way (add to the beginning, remove at the first item inserted which is at the end).
  - _push_ to put in, and _shift_ to get out can be used, it also does a FIFO by pushing the value to the end of the array _but_ removing the first item in the array which was the first item pushed at the beginning.
  - The problem with arrays is the re-indexing because of the unshift and shift methods!
- If we are using a linked list:
  - If you _add to the beginning_ then _remove at the end_.
  - If you _add to the end_ then _remove at the beginning_.
  - The methods are called _enqueue to add_ and _dequeue to remove_.
- Big O of Stacks
  - Insertion O(1)
  - Removal O(1)
  - Searching O(N)
  - Accessing O(N)
- Arrays are not constant computational time O(1) because they have to re-index the elements by using shift or unshift
- Linked Lists are constant computational time O(1) because they DO NOT re-index the elements, just do FIFO