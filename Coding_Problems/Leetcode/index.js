// var countOdds = function(low, high) {
//         let newArr = [];
//     for (let i=low; i<=high; i++) {
//         if (i%2 !=0) {
//             newArr.push(i);
//         }
//     }
//         console.log(newArr.length)
//         return newArr.length;
// };

// countOdds(3,7)

/*You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.*/


// var average = function(salary) {
//     let sortedSalary = salary.sort((a,b) => { return a-b});
//   console.log(sortedSalary);
//     sortedSalary.pop();
//     sortedSalary.shift();
//   let averageSum=0;
//     for (let i=0 ; i<sortedSalary.length; i++) {
//        averageSum =  averageSum + Number.parseInt(sortedSalary[i]);
//     }
//   console.log(averageSum/sortedSalary.length);
// };

// average([10000,85,75,145,100])

/*Given an integer number n, return the difference between the product of its digits and the sum of its digits.*/


/*var subtractProductAndSum = function(n) {
   let newStr = String(n);
    newStr = Array.from(newStr);
    let product = 1;
    let sum=0
    for (let i=0; i<newStr.length; i++) {
      product *= Number.parseInt(newStr[i]);
      sum += Number.parseInt(newStr[i]);
    }
  // console.log(product);
  // console.log(sum);
  // console.log(product-sum);
  return product-sum;
};

subtractProductAndSum(234); */