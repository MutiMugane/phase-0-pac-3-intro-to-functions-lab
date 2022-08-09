function shout(string) {}

function shout(string) {
    return string;
  }

  function shout(string) {
    return string.toUpperCase();
  }
    
  function whisper(string) {}

  function whisper(string) {
    return string.toLowerCase();
  }

  function logShout(string){}

  function logShout(string){
    return string;
  }

  function logShout(string){
    console.log(string);
    console.log(string.toUpperCase());
  }  


function logWhisper(string){}

  function logWhisper(string){
    return string;
  }

  function logWhisper(string){
    console.log(string);
    console.log(string.toLowerCase());
  }  

  function sayHiToHeadphonedRoommate(string){
    console.log (string);
  }

  function sayHiToHeadphonedRoommate(string){
    return string;
  }

  var canthear = "I can't hear you!"
  var yes = "YES INDEED!"
  var love = "I would love to!"
 
    function sayHiToHeadphonedRoommate(string) {
        if (string === string.toLowerCase()) {
            return canthear;
        }
        else if (string === string.toUpperCase()) {
            return yes ;
        }
     
        return love ;

       
    }
  

 
