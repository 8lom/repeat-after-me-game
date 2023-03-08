class Game{
  constructor() {
    this.createStartButton()
    this.createDisplay()
    this.createScoreboard()
    this.countLevel=5

    
}

createDisplay() {
  // step1: create the element
  const displayElm = document.createElement("div");
  // step2: add content (ex. innerText) and/or modify attributes
  displayElm.setAttribute("id","newKeys")
  displayElm.className="center"
  //step3: append to the dom
  const boardElm = document.getElementById("board");
  boardElm.appendChild(displayElm);
}

createStartButton(){
  const startButton = document.createElement("button");
  // step2: add content (ex. innerText) and/or modify attributes
  startButton.setAttribute("id","startButton")
  startButton.className="center"
  startButton.innerText="Start"
  
  //step3: append to the dom
  const boardElm = document.getElementById("board");
  boardElm.appendChild(startButton);
  this.attachEventListenerButton()
}

createScoreboard(){
  const scoreboard = document.createElement("div");
  // step2: add content (ex. innerText) and/or modify attributes
  scoreboard.setAttribute("id","scoreboard")
  
  scoreboard.innerHTML="<span> level: </span>"
  
  //step3: append to the dom
  const boardElm = document.getElementById("board");
  boardElm.appendChild(scoreboard);
  
}

attachEventListenerButton(){
  startButton.addEventListener('click', ()=>{
    const newKeys = new Keys()
    console.log("click")
  })
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
    this.boundPressKeys=this.pressKeys.bind(this)
    this.keys= [
      {name: "ArrowLeft", image:"<"},
      {name: "ArrowRight", image: ">"},
      {name: "ArrowUp", image: "^"},
      {name: "ArrowDown", image: "v"}
    ]
    
    this.createNewSequence()
  }
  createNewSequence() {
    
    for (let i = 0; i < 3; i++) {
      let random=(Math.floor(Math.random()*4))
      this.newSequenceArr.push(this.keys[random])
  }
        this.newArr= this.newSequenceArr.map(key => key.name)
        console.log('computer in createnewSequence', this.newSequenceArr)
        console.log ('comparison in createnewsequence',this.newArr)
        this.showNewSequence()
        

        
}

  showNewSequence(){
    let showElm= document.getElementById("newKeys");
    let time=0
    let index=0
    console.log("computer in shownewSequence",this.newArr)

    const intervalShow= setInterval(() => {
      console.log("computer in interval",this.newArr)
      showElm.innerHTML=this.newArr[index]
      index++
      
      if (index === this.newArr.length){
        clearInterval(intervalShow)
        showElm.innerHTML="Repeat"
        this.attachEventListenerKeys()
        console.log(index)
      }
      
      setTimeout(() => {
        showElm.innerHTML=""
      }, 1800);
    }, 2000);

    }
    
    pressKeys(event){
      console.log(this)
      console.log("event.key" + event.key)
      this.keysPressed.push(event.key);
    }
    
    attachEventListenerKeys(){
      
      document.addEventListener("keydown", this.boundPressKeys)
      console.log('player',this.keysPressed);
      
      setTimeout(() => {
        this.compareInputAndArr()
      }, 8*1000);  
    }
 
    removeEventListenerKeys(){
      document.removeEventListener("keydown", this.boundPressKeys)
    }


compareInputAndArr() {
  
    if (JSON.stringify(this.keysPressed) === JSON.stringify(this.newArr)) {
      console.log("good job");
      this.newArr=[]
      this.newSequenceArr=[]
      this.keysPressed=[]

      
      this.removeEventListenerKeys()
      this.createNewSequence()
    } else{console.log("game over");
      this.newArr=[]
      this.newSequenceArr=[]
      this.keysPressed=[]
    //console.log(newSequenceArr);
    //console.log(keysPressed);
    }
}
}

const newGame = new Game()






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
