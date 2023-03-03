class Keys {
  constructor() {
    this.newSequenceArr = [];
    this.keysPressed = [];
    this.keys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    createNewSequence();
  }
  createNewSequence() {
    keys.forEach((element) => {
      newSequenceArr.push(element);
      console.log(newSequenceArr)
    });
  }

  attachEventListener(){
    document.addEventListener("keydown", (event) => {
  keysPressed.push(event.key);
  console.log(keysPressed);
    })
}

compareInputAndArr() {
  setTimeout(() => {
    if (keysPressed.toString() === newSequenceArr.toString()) {
      console.log("good job");
    } else console.log("game over");
    //console.log(newSequenceArr);
    //console.log(keysPressed);
  }, 5000);
}

}


compareInputAndArr();

const newKeys = new Keys()





//console.log(newSequenceArr)

;

/*setInterval(() => {
    createNewSequence()
},5000);
//setTimeout(() => {
//    }, timeout);

function createNewSequence() {
  // step1: create the element
  this.keysElm = document.createElement("div p");
  // step2: add content (ex. innerText) and/or modify attributes
  this.keysElm.className = "newKeys";
  this.keysElm.innerText = "<=";
  //step3: append to the dom
  const boardElm = document.getElementById("board");
  boardElm.appendChild(this.keysElm);
}*/
