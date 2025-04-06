//TODO
//REMOVE EXISTING EDITORS AND UPDATE 'USERS' LIST WITH FINAL VOLUNTEERS

var ss = SpreadsheetApp.getActiveSpreadsheet();
var UserList = ss.getSheetByName('ADMIN').getRange("AA3:AB21").getValues()    //Volunteers
var Users = {}
for (let i = 0; i < UserList.length; ++i)
  Users[UserList[i][0]] = UserList[i][1]


function updateProtect() {
  const adminUsers = ['4nm21cs146@nmamit.in', '4nm20ai033@nmamit.in'];
  //REMOVE THESE USERS USING REMOVE_EDITOR BEFORE UPDATING LIST

  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var protection = ss.getSheetByName('ADMIN').protect().setDescription('Admin protected range');
  protection.removeEditors(protection.getEditors());
  protection.addEditors(adminUsers)
  if (protection.canDomainEdit()) {
    protection.setDomainEdit(false);
  }
  let badEmails = [];
  for (var obj in Users) {
    try {
      ss.addEditor(obj);
      // ss.removeEditor(obj);
      // continue
    } catch (err) {
      console.warn("Error caught:" + String(err))
      badEmails.push(obj)
      continue
    }

    var my_sheet = "TEAM ".concat(String(Users[obj]))
    var protection = ss.getSheetByName(my_sheet).protect().setDescription(obj.concat(' User protected range'));
    var me = obj;
    console.log(me)
    protection.removeEditors(protection.getEditors());
    protection.addEditors(adminUsers)
    protection.addEditor(me);
    if (protection.canDomainEdit()) {
      protection.setDomainEdit(false);
    }
  }
  message = `The following users could not be added as editors due to errors: \n${badEmails.join(" \n")}`;
  console.info(message)
}

function sendLinkToSheetVolunteer() {
  for (var obj in Users) {
    console.log(obj)
    var my_sheet = "TEAM ".concat(String(Users[obj]))
    var gid = ss.getSheetByName(my_sheet).getSheetId();
    var link = ss.getUrl() + '#gid=' + gid
    var subject = "Reminder! FOP ATTENDANCE SHEET - " + obj
    var body = "Dear team lead,\nYou have been assigned to TEAM " + String(Users[obj]) + ".\n\nPlease access your team's sheet with the following link:\n" + link + "\nKeep this mail starred or save the link in notes for easy access.\nDo not share this link with anyone.\n\n*This is a computer generated email.";
    MailApp.sendEmail(obj, subject, body)
  }
}

function sendTeamNameParticipant() {
  var team_names = {}
  let badEmails = []
  var team_list = ss.getSheetByName("ADMIN").getRange("J3:21").getValues()
  for(let i=0; i<team_list.length; ++i){
    team_names[team_list[i][0]] = team_list[i][1]
  }
  for(let i=1; i<=19; ++i){
    var participants = {}
    var sheet_name = "TEAM "+String(i)
    console.log(sheet_name+" "+team_names[sheet_name])
    var sheet = ss.getSheetByName(sheet_name).getRange("A2:G10").getValues()
    var absent_sheet = ss.getSheetByName("PRESENT")
    for(let j=0; j<sheet.length; ++j){
      // if(sheet[j][6] == "PRESENT")
      if(sheet[j][0]!=="")
        absent_sheet.appendRow([String(i),sheet[j][0],sheet[j][1],sheet[j][0].toLowerCase().concat("@nmamit.in"),sheet[j][2],sheet[j][3], sheet[j][4]])
        // participants[sheet[j][0]] = sheet[j][1]
      // else if(sheet[j][6] == "ABSENT")
      //   absent_sheet.appendRow([sheet[j][0],sheet[j][1],"FULLY ABSENT"])
      // else if(sheet[j][4] == "ABSENT")
      //   absent_sheet.appendRow([sheet[j][0],sheet[j][1],"S3"])
    }
    for (var obj in participants){
      var subject = "FOP FEEDBACK - "+obj
      var body = "Dear "+participants[obj]+",\n\nYou have been alloted to TEAM \""+team_names[sheet_name]+"\"\nPlease make sure to report at SADANANDA OPEN AIR AUDITORIUM on/before 9:00AM\n\n*This is a computer generated email, please do not reply.\n\nFor any queries, send mail to placement.nmamit@nitte.edu.in"
      try{
        console.log(obj)
        var recep = obj.toLowerCase().concat("@nmamit.in")
        // MailApp.sendEmail((obj.toLowerCase().concat("@nmamit.in")), subject, body);
      }catch(err){
        console.warn(err)
        badEmails.push(obj)
      }
    }
  }
  message = `The following users could not be added as editors due to errors: \n${badEmails.join(" \n")}`;
  console.info(message)
}
