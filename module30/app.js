// task one:Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.

const multiply = (n1, n2, n3) => n1 * n2 * n3;
console.log(multiply(1, 2, 3));

// task one (2): Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani.

const sentence = `I am a web developer.
I love to code.
I love to eat biryani.
`;
console.log(sentence);

// task one (3): Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.
const defaultParamter = (n1, n2 = 7) => n1 + n2;
console.log(defaultParamter(3));

/* task 2
Write an arrow function where it will do the following:
    a) It will take an array where the array elements will be the
    name of your friends
    b) Check if the length of each element is even, push elements
    with even length to a new array and return the result 
*/

const evenFriends = (arrOfFriends) => {
    const filterdFriend = [];
    console.log(arrOfFriends.length);
    for (let i = 0; i < arrOfFriends.length; i++) {
        if (arrOfFriends[i].length % 2 == 0) {
            filterdFriend.push(arrOfFriends[i]);
        }
    }
    return filterdFriend;
};
const friends = ["masum", "akhi", "parvej", "suma"];
console.log(evenFriends(friends));

/*
task three
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.
*/

const multiplyAvarage = (arr) => {
    let sumOfSquare = 0;
    for (i = 0; i < arr.length; i++) {
        let square = arr[i] * arr[i];
        sumOfSquare += square;
    }
    return sumOfSquare / arr.length - 1;
};

const ar = [1, 2, 3];
console.log(multiplyAvarage(ar));

// task four;
/*
Write an arrow function where it will do the following:
    a) It will take two array inputs
    b) Combine the two arrays and assign them in a new array
    c) Find the maximum number from the new array and return the
    result
Print the result. */

const maxInTwoArr = (arr1, arr2) => {
    const singleArray = [...arr1, ...arr2];
    return Math.max(...singleArray);
};

console.log(maxInTwoArr([1, 2, 3, 45], [34, 23, 55]));