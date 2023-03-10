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
    
    this.showNewSequence();
    
  }


  showNewSequence() {
    let index = 0;

   
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
    
    this.keysPressed.push(event.key);
  }

  attachEventListenerKeys() {
    
    document.addEventListener("keydown", this.boundPressKeys);
    

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
      
      
    }
  }
}



const newGame = new Game();



