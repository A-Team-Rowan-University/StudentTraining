
var spreadsheet_id = "1ja48mRFRDrBiL1amElMVK7WrMhEb0csI_9bAibWpA3I";
var spreadsheet = SpreadsheetApp.openById(spreadsheet_id);
var trainingSheet = spreadsheet.getSheetByName("Training");


function myFunction() {
  
}




function updateTraining(personEmail, isTrained){

  var user = PersonLookup.lookupPerson("Email", personEmail);
  
  //TODOD: Make sure 'Banner ID' is correct
  var bannerID = user["Banner ID"];
  
  
  var numEntries = spreadsheet.getLastRow();
  
  
  for(var i = 1; i<=numEntries; i++){
    var idRange = trainingSheet.getRange(i, 1);
    var idEntry = idRange.getValues()[0][0];
    
    if(idEntry == bannerID){
      
      var trainRange = trainingSheet.getRange(2, i);
      trainRange.setValue(isTrained);
    }
  
  }
  
}




function getTraining(personEmail){
  
  
  var user = PersonLookup.lookupPerson("Email", personEmail);
  
  //TODOD: Make sure 'Banner ID' is correct
  var bannerID = user["Banner ID"];
  
  
  var numEntries = spreadsheet.getLastRow();
   
  
  for(var i = 1; i<=numEntries; i++){
    var idRange = trainingSheet.getRange(i, 1);
    var idEntry = idRange.getValues()[0][0];
    
    if(idEntry == bannerID){
      
      return trainingSheet.getRange(i, 2).getValues()[0][0];
      
      
      }
    
   }
}


function test(){
  
  updateTraining("test@rowan.edu", false);
  Logger.log(getTraining("test@rowan.edu"));
  
}
  
  



