class Game {
  constructor() {
    this.createStartButton();
    
    
  }

 

  createStartButton() {
    const startButton = document.createElement("div");

    startButton.setAttribute("id", "startButton");
    startButton.className = "center";
    startButton.innerText = "Start";

    const boardElm = document.getElementById("board");
    boardElm.appendChild(startButton);
    this.attachEventListenerButton();
  }

  createScoreboard() {
    const scoreboard = document.createElement("span");

    scoreboard.setAttribute("id", "scoreboard");
    scoreboard.className = "style";

    scoreboard.innerHTML = "<span> Points: 0 </span>";

    const boardElm = document.getElementById("board");
    boardElm.appendChild(scoreboard);
  }

  createLevelCounter() {
    const levelCount = document.createElement("span");

    levelCount.setAttribute("id", "level");
    levelCount.className = "style";

    levelCount.innerHTML = "<span> Level: 1</span> <br>";

    const boardElm = document.getElementById("board");
    boardElm.appendChild(levelCount);
    
  }
 
  

  attachEventListenerButton() {
    startButton.addEventListener("click", () => {
      const newKeys = new Keys();
      
      this.createLevelCounter();
      this.createScoreboard();
      
      startButton.remove();
      console.log("click");
    });
  }
}

class Keys {
  constructor() {
    this.newArr = [];
    this.newSequenceArr = [];
    this.keysPressed = [];
    this.boundPressKeys = this.pressKeys.bind(this);
    this.imageArr = [];
    this.keys = [
      { name: "ArrowUp", image: "./images/arrowup.png" },
      { name: "ArrowLeft", image: "./images/arrowleft.png" },
      { name: "ArrowRight", image: "./images/arrowright.png" },
      { name: "ArrowDown", image: "./images/arrowdown.png" },
    ];

    this.level = 1;
    
    this.createNewSequence();
  }

  countLevel() {
    this.level++;
    let levelElm = document.querySelector("#level span");
    let pointsElm = document.querySelector("#scoreboard span");

    levelElm.innerHTML = "Level: " + this.level;
    pointsElm.innerHTML = "Points: " + this.level * (this.level * 123);
  }
  createNewSequence() {
    for (let i = 0; i < this.level; i++) {
      let random = Math.floor(Math.random() * 4);
      this.newSequenceArr.push(this.keys[random]);
    }
    this.newArr = this.newSequenceArr.map((key) => key.name);
    this.imageArr = this.newSequenceArr.map((key) => key.image);
    console.log("computer in createnewSequence", this.newSequenceArr);
    console.log("comparison in imageArr", this.imageArr);
    this.showNewSequence();
    
  }


  showNewSequence() {
    let index = 0;

    console.log("computer in interval", this.newArr);
    const interval = setInterval(() => {
      const image = document.createElement("img");
      image.className = "center";
      image.setAttribute("id", "image");
      image.src = this.imageArr[index];
      document.getElementById("arrow-display").appendChild(image);
      index++;

      setTimeout(() => {
        image.remove();
      }, 2100);

      if (index === this.imageArr.length) {
        console.log("clear interval");
        setTimeout(() => {
        this.attachEventListenerKeys()

        
        const showGo = document.createElement("div");
        showGo.className = "center";
        showGo.setAttribute("id", "showGo");
        showGo.innerHTML="GO"
        document.getElementById("board").appendChild(showGo);
        
        setTimeout(() => {
          showGo.remove()
        }, 500);
  
      }
        ,2400)
        clearInterval(interval);
      }
    }, 2500);
  }

  pressKeys(event) {
    console.log(this);
    console.log("event.key" + event.key);
    this.keysPressed.push(event.key);
  }

  attachEventListenerKeys() {
    console.log("eventlistener");
    document.addEventListener("keydown", this.boundPressKeys);
    console.log("player", this.keysPressed);

    setTimeout(() => {
      this.compareInputAndArr();
    }, this.level * 1250);
  }

  removeEventListenerKeys() {
    document.removeEventListener("keydown", this.boundPressKeys);
  }

  compareInputAndArr() {
    if (JSON.stringify(this.keysPressed) === JSON.stringify(this.newArr)) {
      
      const showGo = document.createElement("div");
        showGo.className = "center";
        showGo.setAttribute("id", "showGo");

        showGo.innerHTML="Good Job"
        document.getElementById("board").appendChild(showGo);
        
        setTimeout(() => {
          showGo.remove();
        

      this.newArr = [];
      this.newSequenceArr = [];
      //this.imageArr = [];
      this.keysPressed = [];

      this.countLevel();

      this.removeEventListenerKeys();
      this.createNewSequence();

    }, 2100);
    } else {
      this.newArr = [];
      this.newSequenceArr = [];
      //this.imageArr = [];
      this.keysPressed = [];
      setTimeout(() => {
        window.location.href ="./gameover.html"
      }, 700);
      
      //console.log(newSequenceArr);
      //console.log(keysPressed);
    }
  }
}



const newGame = new Game();



/*  console.log((this.newArr[i]))
      if (this.newArr[i]==="ArrowUp"){
        console.log("up")
        setTimeout(() => {
        this.createImageUp()
        setTimeout(() => {
          const removeImageUp= document.getElementById("imageUp")
        removeImageUp.remove();
        }, 2400);
      }, 2500 * i);
      }
      else if (this.newArr[i]==="ArrowDown"){
        console.log("down")
        setTimeout(() => {
        this.createImageDown()
        setTimeout(() => {
          const removeImageDown= document.getElementById("imageDown")
        removeImageDown.remove();
        }, 2400);
      }, 2500*i);
      }
      else if (this.newArr[i]==="ArrowLeft"){
        console.log("Left")
        setTimeout(() => {
        this.createImageLeft()
        setTimeout(() => {
          const removeImageLeft= document.getElementById("imageLeft")
        removeImageLeft.remove();
        }, 2400* i);
      }, 2500 *i);
      }
      else if(this.newArr[i]==="ArrowRight"){
        console.log("right")
        setTimeout(() => {
          this.createImageRight()
        setTimeout(() => {
          const removeImageRight= document.getElementById("imageRight") 
        removeImageRight.remove()
        }, 2400 )
      },2500 *i);
      }
    }
    if (i === this.newArr.length) {
      console.log('end interval')
      clearInterval(intervalShow);


      setTimeout(() => {
        this.attachEventListenerKeys();

      }, 1900)
    }
       //showElm.innerHTML= this.newArr[index];
      //index++
      
      /*setTimeout(() => {
        const removeImageUp= document.getElementById("imageUp")
        removeImageUp.remove();
        const removeImageDown= document.getElementById("imageDown")
        removeImageDown.remove();
        const removeImageLeft= document.getElementById("imageLeft")
        removeImageLeft.remove();
        const removeImageRight= document.getElementById("imageRight") 
        removeImageRight.remove()
        
      }, 2400);
      */

    //}, 2500);


  /*createImageUp(){
    const imageUp = document.createElement("img")
    imageUp.className= "center"
    imageUp.setAttribute("id", "imageUp")
    imageUp.src= this.imageArr[i] //"./images/arrowup.png"
    document.getElementById("board").appendChild(imageUp)
  }
  createImageDown(){
    const imageDown = document.createElement("img")
    imageDown.className="center"
    imageDown.setAttribute("id", "imageDown")
    imageDown.src= "./images/arrowdown.png"
    document.getElementById("board").appendChild(imageDown)
  }

  createImageLeft(){
    const imageLeft= document.createElement("img")
    imageLeft.className="center"
    imageLeft.setAttribute("id", "imageLeft")
    imageLeft.src="./images/arrowleft.png"
    document.getElementById("board").appendChild(imageLeft)
  }

  createImageRight(){
    const imageRight= document.createElement("img")
    imageRight.className="center"
    imageRight.setAttribute("id", "imageRight")
    imageRight.src="./images/arrowright.png"
    document.getElementById("board").appendChild(imageRight)
  }
  */