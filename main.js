class Game{
  constructor() {
    this.createDisplay()
    this.countLevel=0

    
}
createDisplay() {
  // step1: create the element
  const displayElm = document.createElement("div");
  // step2: add content (ex. innerText) and/or modify attributes
  displayElm.setAttribute("id","newKeys")
  //step3: append to the dom
  const boardElm = document.getElementById("board");
  boardElm.appendChild(displayElm);
}

countLevel(){
  this.countLevel++
  console.log("level" + this.countLevel)
}

}


class Keys {
  constructor() {
    this.newArr = [];
    this.newSequenceArr = [];
    this.keysPressed = [];
    this.keys= [
      {name: "ArrowLeft", image:"<"},
      {name: "ArrowRight", image: ">"},
      {name: "ArrowUp", image: "^"},
      {name: "ArrowDown", image: "v"}
    ]

    
    this.createNewSequence();
    
  }
  createNewSequence() {
    
    for (let i = 0; i < 5; i++) {
      let random=(Math.floor(Math.random()*4))
      this.newSequenceArr.push(this.keys[random])
  }
        this.newArr= this.newSequenceArr.map(key => key.name)
        console.log (this.newArr)
        this.showNewSequence()
        return this.newArr
}

    
  

  showNewSequence(){
    let showElm= document.getElementById("newKeys");
    
    for(let i=0;i<this.newArr.length;i++){ 
      setTimeout(()=>{showElm.innerHTML=this.newArr[i]
      setTimeout(()=>{showElm.innerHTML=""},850)},i*1000)
      }
      {this.attachEventListener()}
    }
    /*this.newSequenceArr.forEach((elm, index)=>{
      setTimeout(()=>{showElm.innerHTML=elm}
      ,index*1000)
  
    })*/
    
  

  attachEventListener(){
    document.addEventListener("keydown", (event) => {
    this.keysPressed.push(event.key);
    console.log(this.keysPressed);
    this.compareInputAndArr();
    return this.keysPressed
    })
}

compareInputAndArr() {
  setTimeout(() => {
    if (this.keysPressed.toString() === this.newArr.toString()) {
      console.log("good job");
      
      this.newArr.splice(0,this.newArr.length)
      this.newSequenceArr.splice(0,this.newSequenceArr.length)
      this.createNewSequence()
    } else console.log("game over");
    //console.log(newSequenceArr);
    //console.log(keysPressed);
  }, 10 * 1000);
}


}





const newGame = new Game()
const newKeys = new Keys()





//console.log(newSequenceArr)

;

/*setInterval(() => {
    createNewSequence()
},5000);
//setTimeout(() => {
//    }, timeout);


function showNewArr(){
        // step1: create the element
    keysElm = document.createElement("div p");
        // step2: add content (ex. innerText) and/or modify attributes
    keysElm.className = "newSequenceArr";
    keysElm.innerText= newSequenceArr
        //step3: append to the dom
        const boardElm = document.getElementById("board");
        boardElm.appendChild(keysElm);
      }
*/
