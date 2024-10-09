// \const arr = ["ID,Name,Occupation,Age,\n42,Bruce,Knight,41,\n57,Bob,Fry Cook,19,\n63,Blaine,Quiz Master,58,\n98,Bill,Doctor’s Assistant,26"]
// let cell = "";
// let row = [];
// function sectionArr(){
//     for(let i = 0; i < arr.length; i++){
//         let c = arr[i];
//         if(c === ","){
//             row.push(cell)
//             cell = "";
//         } else if (c === "\n"){
//             row.push(cell)
//             console.log(...row)
//             cell = "";
//             row = [];
//         } else {
//             cell += c;
//         }
//     }
//     if (cell.length > 0) {
//         row.push(cell);
//         console.log(...row);
//     }
// }

// sectionArr()

//  let newArr = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//      { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//      { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//      { id: "98", name: "Bill", occupation: "Doctor's Assistant", age: "26" }]

// function popArray(){
//     newArr.pop()
//     console.log(newArr)
// }


// popArray()

// let addedObj = { id: "48", name: "Barry", occupation: "Runner", age: "25" }

// let addedObj2 = { id: "7", name: "Bilbo", occupation: "None", age: "111" }


// function addObjs(){
//     newArr.unshift(addedObj)
//     newArr.push(addedObj2)
//     console.log(newArr)
// }

// addObjs()

// function calcAvgAge(){
//     console.log(newArr.age)
// }

// calcAvgAge()


//couldnt get this to translate back to CSV however will return to this concept
// function condense(param){
//    console.log(param.map(row => row(",")).join("\n"))
// }

// condense(newArr)