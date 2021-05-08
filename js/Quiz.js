class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()
Contestant.getPlayerInfo()
background(backgroundImage)
textSize(18)
text("result of the quiz",320,50)
if(allContestants!==undefined){
var display=230
fill("white")
textSize(19)
text("CONTESTANTS WHO ANSWERED CORRECT ARE HILIGHTED IN YELLOW",130,230)
for(var plr in allContestants){
  var correct="3"
  if(correct===allContestants[plr].answer){
    fill('yellow')
  }
  else {
    fill('gold')
  }
  display+=30
  textSize(20)
  text(allContestants[plr].name+":"+allContestants[plr].answer,250,display)
}
}
   
    
  }

}
