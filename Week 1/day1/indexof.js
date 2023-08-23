/* 
  Given an array and an item to search for,
  return the index where the item is found,

  return -1 to represent not found
  */

  const arr1 = ["a", "b", "c"];
  const searchItem1 = "c";
  const expected1 = 3;
  
  const arr2 = ["a", "b", "c"];
  const searchItem2 = 5;
  const expected2 = -1;
  
  const arr3 = ["c", "a", "b", "c"];
  const searchItem3 = "c";
  const expected3 = 0;
  
  const arr4 = [];
  const searchItem4 = 5;
  const expected4 = -1;
  
  /**
   * Finds the index from the given array where the given item is found.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<any>} items An array of any kind of items.
   * @param {any} searchItem The item to find.
   * @returns {number} The index of found item, or -1 if not found.
   */
  function indexOf(items, searchItem) {
    console.log(1,"should be",3)
    console.log(2,"should be",@returns{-1})
    console.log(3,"should be",@param{<any>})
    console.lod(4,"should be",)
    

      
  }
  
  // Tests
  const result1 = indexOf(arr1, searchItem1);
  console.log(result1, "should be", expected1);
  
  const result2 = indexOf(arr2, searchItem2);
  console.log(result2, "should be", expected2);
  
  const result3 = indexOf(arr3, searchItem3);
  console.log(result3, "should be", expected3);
  
  const result4 = indexOf(arr4, searchItem4);
  console.log(result4, "should be", expected4);
  
  /*****************************************************************************/