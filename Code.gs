var seasonTotals = [[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]];//[[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]]]; //Seasontotals = [grade totals[gender totals[boy and girl]]]
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Athletics Totals')
  .addItem('Count Totals', 'myFunction')
  .addToUi();
  //console.log("test1");
}
function myFunction() {
  var sheet = SpreadsheetApp.getActive().getActiveSheet();
 // var sheet = SpreadsheetApp.getActive().getSheetByName('Sheet2');
  var values = sheet.getDataRange().getDisplayValues();
  var headers = sheet.getRange("1:1").getDisplayValues();
  var seasonLengths = getSeasonSize(headers[0]).slice(0,3);
  var seasonStarts = getSeasonSize(headers[0]).slice(3,6);
  var studentNum = getStudentNum(sheet);
 // console.log(studentNum);
 // sheet.getRange(1,1).setValue("test");
  
  
  var fallRange = sheet.getRange(4, seasonStarts[0],studentNum, seasonLengths[0]).getDisplayValues();
  var winterRange = sheet.getRange(4, seasonStarts[1],studentNum, seasonLengths[1]).getDisplayValues();
  var springRange = sheet.getRange(4, seasonStarts[2],studentNum, seasonLengths[2]).getDisplayValues();
  
 // console.log(fallRange);
  fillData(fallRange, seasonStarts[0], values, 0);
  fillData(winterRange, seasonStarts[1], values, 1);
  fillData(springRange, seasonStarts[2], values, 2);
  
 console.log( writeData(sheet));
 // console.log(seasonTotals);
}


function writeData(sheet){
  var a = sheet.getRange("A:A").getDisplayValues();
  var i = 0;
  for(i = 0; i< a.length; i++){
    if(a[i] == "Fall"){
      console.log("got here");
      break;
    }
  }
        console.log("got here2"+(i+3));

  var start = i+3;
  var iter = 0
  //up until here gets the spot to write to
  for(var j = 0; j<3; j++){
          console.log("got here77");

    iter = 0;
    for(var k = 5; k>(-1); k--){
      
      console.log(true);
        sheet.getRange(start+iter, 2+(j*2)).setValue(seasonTotals[j][k][0]);
      sheet.getRange(start+9+iter, 2+(j*2)).setValue(seasonTotals[j][k][1]);
      iter++;
    }
  }
  
  return true;
}

function fillData(dataRange, seasonStart, values, p){
  for(var i = 0; i<dataRange.length; i++){
    for(var j = 0; j<dataRange[i].length; j++){
      if(p == 0){
          //console.log(values[i][2]+values[i][3]+values[i][j+seasonStart]+values[i][4]+values[i][0]);
        }
      if(Number(values[i][j+seasonStart]) ==1){
        // console.log(values[i][0]);
        
        switch(values[i][0]){ 
          case "Grade 12":
            if(values[i][4] == "Female"){
              seasonTotals[p][0][0]++;
            }
            else{
              seasonTotals[p][0][1]++;
            }
            break;
          case "Grade 11":
            if(values[i][4] == "Female"){
              seasonTotals[p][1][0]++;
            }
            else{
              seasonTotals[p][1][1]++;
            }
            break;
          case "Grade 10":
            if(values[i][4] == "Female"){
              seasonTotals[p][2][0]++;
            }
            else{
              seasonTotals[p][2][1]++;
            }
            break;
          case "Grade 9":
            if(values[i][4] == "Female"){
              seasonTotals[p][3][0]++;
            }
            else{
              seasonTotals[p][3][1]++;
            }
            break;
          case "Grade 8":
            
            if(values[i][4] == "Female"){
              //   console.log(values[i][2]+values[i][3]+values[i][j+seasonStarts[0]]);
              
              //  console.log(values[i][2]+values[i][3]);
              
              seasonTotals[p][4][0]++;
            }
            else{
              //  console.log(values[i][2]+values[i][3]+values[i][j+seasonStarts[0]]);
              
              // console.log(values[i][2]+values[i][3]);
              
              seasonTotals[p][4][1]++;
            }
            break;
          case "Grade 7":
            
            if(values[i][4] == "Female"){
              //        console.log(values[i][2]+values[i][3]+values[i][j+seasonStarts[0]]);
              
              // console.log(values[i][2]+values[i][3]);
              seasonTotals[p][5][0]++;
            }
            else{
              //  console.log(values[i][2]+values[i][3]+values[i][j+seasonStarts[0]]);
              
              //           console.log(values[i][2]+values[i][3]);
              
              seasonTotals[p][5][1]++;
            }
            break;
          default:
            break;
        }
      }
    }
  }
}

function getStudentNum(sheet){
  var a = sheet.getRange("A:A").getDisplayValues();
  var i = 0;
  var first = 0;
  var last = 0;
  for(i = 0; i< a.length; i++){
    if(a[i] == "Grade 7" && first ==0){
      first = i;
      
    }
    if(a[i] == "Fall"){
      last = i;
    }
  }
  var check = i+8;
  ////console.log(check);
  return (last-first)-3;
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
