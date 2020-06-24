# Quick Sort Algorithm
----------------------
#### How it Works
    The Quick Sort takes in an array of numbers and returns the array back sorted in asending order.
    The quicksort function also takes in the index of the start and end of a list, labeled low and high.
    These indexes are used to recursively sort the array, along with a helper function called partition.
    
    This specific iteration of the Quick Sort method uses the end of the array as the pivot value. The
    pivot determines whether two numbers in the list need to be swapped, labeled as i and j. Both i and j
    are incremented by a for loop. While j is incremented by each iteration of the for loop, i is only
    incremented when the value of index j is less than the pivot. 
    
    When this condition is met, the values stored in index i and j swap places as well. When the whole list is
    compared to the pivot by the for loop, i is still used to swap the value of index after i (i+1) with the
    pivot's value. We do this so that all values before the pivot will be less than the pivot and all values
    after will be greater. The partitian function then returns the index of i+1 which now holds the value of pivot.

    When quicksort receives the return value of partition, it calls itself twice with new low and high values.
    The two calls will essentially split the list into two sections to sort again, the first including all indexes
    before the pivot and the second including all indexes after the pivot. Each sub list will recursively
    call partition until each list diminishes to a size of one or less, putting the list in order along the way.

#### Big O notation
    This adaptation of Quick Sort uses the end of the list as the first pivot. The efficiency of Quick Sort heavily
    relies on the pivot to be a specific value. Ironically, the worst case senario of this method's efficiency is when
    the list is already perfectly sorted in increasing or decreasing order. This is because the pivot would split the 
    list with one element in one sub list and the rest of the elements in the other. As long as the list isn't already
    sorted, this method can be quite efficient. The best case senario is when each pivot splits the list evenly in half
    each time.

    Time Taken by QuickSort: T(n) = T(k) + T(n-k-1) + O(n)
    
    The first two terms represent the two recursive calls while the last refers to the partition process. k is the number
    of elements smaller than the pivot.
    Worse Case Scenario: T(n) = T(0) + T(n-1) + O(n) => O(n^2)
    Best Case Senario: T(n) = 2T(n/2) + O(n) => O(nLogn)

    The average case also leads towards O(nLogn) since the odds of each pivot being decent is about 50% (a pefect pivot splits the
    list in half while a terrible one splits the list lopsided).