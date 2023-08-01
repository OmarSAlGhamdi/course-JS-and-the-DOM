// document.addEventListener('keypress', function(){
//     console.log("removing first child");
//     // const mainHeading = document.querySelector('h1');

//     document.querySelector('#contain-all').firstElementChild.remove();
// });




 /* ❌ Next Code is Not a Good One ❌ : 
 ⬇︎ There are 200 functions with 200 listeners ⬇︎
That will consume the memory and make the code longer */

/*const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

              ⬇︎ 200 listeners ⬇︎                  ⬇︎ 200 functions ⬇︎
    newElement.addEventListener('click', function respondToTheClick(evt) {
        console.log('A paragraph was clicked.');
    });

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

*/












// Event Delegation : 
// ✅ Next code is the best way in efficiency in Memoney and Code ✅


const myCustomDiv = document.createElement('div');

//  ⬇︎ one function ⬇︎
function respondToTheClick(evt) {
    console.log('A paragraph was clicked: ' + evt.target.textContent);
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);


//  ⬇︎ One listener ⬇︎
myCustomDiv.addEventListener('click', respondToTheClick); 



