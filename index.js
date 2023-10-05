function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {        // ITERATE THROUGH EACH NUMBER IN THE ARRAY
    const complement = target - array [i]         // FOR THE CURRENT NUM, IDENTIFY A COMPLEMENT THAT ADDS TO THE TARGET (COMPLEMENT = TARGET - NUM)
    for (let j = i + 1; j < array.length; j++) {  // ITERATE THROUGH THE REST OF THE ARRAY
      if (array[j] === complement) return true;   // CHECK IF ANY NUMBER IS OUR COMPLEMENT; IF SO, RETURN TRUE.
    }
  }

  return false; 
}

/* 
  Write the Big O time complexity of your function here
  // RUNTIME: 0(n^2)
  // SPACE COMPLEXITY: 0(n)
*/

/* 
  Add your pseudocode here
  I am aware I have a function called hasTargetSum which consists of an array and a target, it should loop through an array to find two complimentary numbers which when summed has a value of the target. 
*/

/*
  Add written explanation of your solution here
  COMPLEMENT = TARGET - NUM
  If there is a complementary number, return true! 
  If there are no complimentary numbers, return false!
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: TRUE");
  console.log("=>", hasTargetSum([4,0], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([100, 200, 600], 500));

  console.log("Expecting: TRUE");
  console.log("=>", hasTargetSum([-10,-20,30,40], 30));

}

module.exports = hasTargetSum;
