function testing(e) {
  var sheet = e.range.getSheet();
  var range = e.range;
  
  // Check if the edited sheet is 'ADMIN' and the edited cell is in column B (column 2)
  if (sheet.getName() == 'ADMIN' && range.getColumn() == 2) {
    var sessionValue = sheet.getRange('B1').getValue();
    
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet(); // Get the active spreadsheet
    var sheetsToProcess = ["TEAM 1"];
    
    for (var i = 0; i < sheetsToProcess.length; i++) {
      var targetSheet = spreadsheet.getSheetByName(sheetsToProcess[i]); // Use getSheetByName on the spreadsheet object
      
      // Unhide all columns first
      targetSheet.showColumns(1, targetSheet.getMaxColumns());
      
      // Determine which columns to hide and unprotect based on the session value
      var columnsToHide = [];
      var columnsToUnprotect = [];
      
      if (sessionValue == 'SESSION 1') {
        columnsToHide.push(4, 5, 6); // Hide columns D, E, F
        columnsToUnprotect.push(targetSheet.getRange('C:C'));
      } else if (sessionValue == 'SESSION 2') {
        columnsToHide.push(3, 5, 6); // Hide columns C, E, F
        columnsToUnprotect.push(targetSheet.getRange('D:D'));
      } else if (sessionValue == 'SESSION 3') {
        columnsToHide.push(3, 4, 6); // Hide columns C, D, F
        columnsToUnprotect.push(targetSheet.getRange('E:E'));
      } else if (sessionValue == 'SESSION 4') {
        columnsToHide.push(3, 4, 5); // Hide columns C, D, E
        columnsToUnprotect.push(targetSheet.getRange('F:F'));
      }
      
      // Hide the specific columns one by one
      for (var j = 0; j < columnsToHide.length; j++) {
        targetSheet.hideColumns(columnsToHide[j]);
      }
      
      // Unprotect the specific columns based on the session and set edit perms to the owner
      for (var k = 0; k < columnsToUnprotect.length; k++) {
        var protection = columnsToUnprotect[k].protect();
        protection.removeEditors(protection.getEditors());
        protection.addEditor(Session.getActiveUser()); // Add the owner as the only editor
      }
    }
  }
}
