let userName = "Nastya";

userName === 'Nastya' ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'Is today my lucky day?';
console.log(`Hi Magic Ball, ${userName} is asking: ${userQuestion}`) ;

let ballAnswer = Math.floor(Math.random() * 8);

switch (ballAnswer){
    case 0 :
    console.log('It is definately yes!');
    break;
    case 1 :
    console.log('It is rather yes than no!');
    break;
    case 2 :
    console.log('Try again');
    break;
    case 3:
    console.log('Just go and take it!');
    break;
    case 4:
    console.log('Sure it is');
    break;
    case 5:
    console.log('It is onlyu yours, bruh!');
    break;
    case 6:
    console.log('Yes, take your time');
    break;
    case 7:
    console.log('Yes, do not get worried about anything');
    break;
}