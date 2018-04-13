function myFunction() {
  var sheet = SpreadsheetApp.getActive().getActiveSheet();
  var values = sheet.getDataRange().getValues();
  var headers = sheet.getRange("1:1").getValues();
  var seasonLengths = getSeasonSize(headers[0]).slice(0,3);
  var seasonStarts = getSeasonSize(headers[0]).slice(3,6);
  var studentNum = getStudentNum(sheet);
  //console.log(studentNum);
  var seasonTotals = [[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0]]];//[[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]]]; //Seasontotals = [grade totals[gender totals[boy and girl]]]
  
  
  
  var fallRange = sheet.getRange(4, seasonStarts[0],studentNum, seasonLengths[0]).getDisplayValues();
  var winterRange = sheet.getRange(4, seasonStarts[1],studentNum, seasonLengths[1]).getDisplayValues();
  var springRange = sheet.getRange(4, seasonStarts[2],studentNum, seasonLengths[2]).getDisplayValues();
  
 
  
  for(var i = 0; i<fallRange.length; i++){
    for(var j = 0; j<fallRange[i].length; j++){
                  console.log(fallRange[i][j]);

      if(fallRange[i][j] == "1.0"){
        switch(values[0][i]){
          case "Grade 12":
            console.log(values[4][i]);
            if(values[4][i] == "Female"){
              seasonTotals[0][0][0]++;
            }
            else{
              seasonTotals[0][0][1]++;
            }
            break;
          case "Grade 11":
            if(values[4][i] == "Female"){
              seasonTotals[0][1][0]++;
            }
            else{
              seasonTotals[0][1][1]++;
            }
            break;
          case "Grade 10":
            if(values[4][i] == "Female"){
              seasonTotals[0][2][0]++;
            }
            else{
              seasonTotals[0][2][1]++;
            }
            break;
          case "Grade 9":
            if(values[4][i] == "Female"){
              seasonTotals[0][3][0]++;
            }
            else{
              seasonTotals[0][3][1]++;
            }
            break;
          case "Grade 8":
            if(values[4][i] == "Female"){
              seasonTotals[0][4][0]++;
            }
            else{
              seasonTotals[0][4][1]++;
            }
            break;
          case "Grade 7":
            if(values[4][i] == "Female"){
              seasonTotals[0][5][0]++;
            }
            else{
              seasonTotals[0][5][1]++;
            }
            break;
          default:
            break;
        }
      }
    }
  }
  for(var i = 0; i<winterRange.length; i++){
    for(var j = 0; j<winterRange[i].length; j++){
      if(winterRange[i][j] == "1.0"){
        switch(values[0][i]){
          case "Grade 12":
            if(values[4][i] == "Female"){
              seasonTotals[1][0][0]++;
            }
            else{
              seasonTotals[1][0][1]++;
            }
            break;
          case "Grade 11":
            if(values[4][i] == "Female"){
              seasonTotals[1][1][0]++;
            }
            else{
              seasonTotals[1][1][1]++;
            }
            break;
          case "Grade 10":
            if(values[4][i] == "Female"){
              seasonTotals[1][2][0]++;
            }
            else{
              seasonTotals[1][2][1]++;
            }
            break;
          case "Grade 9":
            if(values[4][i] == "Female"){
              seasonTotals[1][3][0]++;
            }
            else{
              seasonTotals[1][3][1]++;
            }
            break;
          case "Grade 8":
            if(values[4][i] == "Female"){
              seasonTotals[1][4][0]++;
            }
            else{
              seasonTotals[1][4][1]++;
            }
            break;
          case "Grade 7":
            if(values[4][i] == "Female"){
              seasonTotals[1][5][0]++;
            }
            else{
              seasonTotals[1][5][1]++;
            }
            break;
          default:
            break;
        }
      }
    }
  }
  console.log(values);
  for(var i = 0; i<springRange.length; i++){
    for(var j = 0; j<springRange[i].length; j++){
      if(springRange[i][j] == 1.0){
        //console.log(values[0][i]);
        switch(values[0][i]){
          case "Grade 12":
            if(values[4][i] == "Female"){
              seasonTotals[2][0][0]++;
            }
            else{
              seasonTotals[2][0][1]++;
            }
            break;
          case "Grade 11":
            if(values[4][i] == "Female"){
              seasonTotals[2][1][0]++;
            }
            else{
              seasonTotals[2][1][1]++;
            }
            break;
          case "Grade 10":
            if(values[4][i] == "Female"){
              seasonTotals[2][2][0]++;
            }
            else{
              seasonTotals[2][2][1]++;
            }
            break;
          case "Grade 9":
            if(values[4][i] == "Female"){
              seasonTotals[2][3][0]++;
            }
            else{
              seasonTotals[2][3][1]++;
            }
            break;
          case "Grade 8":
            if(values[4][i] == "Female"){
              seasonTotals[2][4][0]++;
            }
            else{
              seasonTotals[2][4][1]++;
            }
            break;
          case "Grade 7":
            if(values[4][i] == "Female"){
              seasonTotals[2][5][0]++;
            }
            else{
              seasonTotals[2][5][1]++;
            }
            break;
          default:
            break;
        }
      }
    }
  }
  console.log(seasonTotals);
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
  //console.log(check);
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
