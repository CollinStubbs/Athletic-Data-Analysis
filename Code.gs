function myFunction() {
  var sheet = SpreadsheetApp.getActive().getActiveSheet();
  var values = sheet.getActiveRange().getValues();
  var headers = sheet.getRange("1:1").getValues();
  var seasonLengths = getSeasonSize(headers[0]).slice(0,3);
  var seasonStarts = getSeasonSize(headers[0]).slice(3,6);
  var studentNum = getStudentNum(sheet);
  console.log(studentNum);
  var seasonTotals = [[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0]]];//[[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]]]; //Seasontotals = [grade totals[gender totals[boy and girl]]]
  
  
  
 // var fallRange = sheet.getRange(4, seasonStarts[0], ).getValues();
  
  
  //Logger.log(seasonLengths);
  
  
  
}

function getStudentNum(sheet){
  var a = sheet.getRange("A:A").getValues();
  var i = 0;
  for(i = 0; i< a.length; i++){
    if(a[i] == "Total Enrolment"){
      break;
    }
  }
  var check = i+8;
  console.log(check);
  return sheet.getRange(check, 2).getValue();
}


function getSeasonSize(season){
  var fall = 0;
  var fstart = 0;
  var wstart = 0;
  var sstart = 0;
  var winter = 0;
  var spring = 0;
  var checkpoint = 0;
  for(var i = 0; i<season.length; i++){
    switch(season[i]){
      case "FALL SEASON":
        fstart = i;
        checkpoint = i;
        break;
      case "WINTER SEASON":
        wstart = i;
        fall = i - checkpoint;
        checkpoint = i;
        break;
      case "SPRING SEASON":
        sstart = i;
        winter = i - checkpoint;
        spring = season.length-i;
        break;
      default:
        break;
    }
  }
  
 return [fall, winter, spring, fstart, wstart, sstart]; 
}
