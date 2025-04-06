const recep = "councellor@nitte.edu.in"

function sendMail1() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = ss.getSheetByName("ADMIN");
  var data = sheet1.getRangeList(["J2:K56", "L2:L56"]).getRanges()  //TEAM ABSENTEES
  r1 = data[0].getValues()
  r2 = data[1].getValues()
  data = []
  data.push([r1[0][0] + " - " + r1[0][1], r2[0][0]])
  for (let i = 1; i <= 54; ++i) {
    var arr = [r1[i][0] + " - " + r1[i][1] + " (" + (r2[i][0].length ? String(r2[i][0].split(',').length) : "0") + " ABSENTEE/S)", r2[i][0]]
    data.push(arr)
  }
  console.log(data)
  var subject = "Attendance Summary for Session 1"//.concat(sess)
  var body = "* THIS IS A COMPUTER GENERATED EMAIL\n\nPlease find the attendance summary below:\n\n";
  body += data.map(row => row.join('\n')).join('\n---\n\n');
  MailApp.sendEmail(recep, subject, body)
}

function sendMail2() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = ss.getSheetByName("ADMIN");
  var data = sheet1.getRangeList(["J2:K56", "M2:M56"]).getRanges()
  r1 = data[0].getValues()
  r2 = data[1].getValues()
  data = []
  data.push([r1[0][0] + " - " + r1[0][1], r2[0][0]])
  for (let i = 1; i <= 54; ++i) {
    var arr = [r1[i][0] + " - " + r1[i][1] + " (" + (r2[i][0].length ? String(r2[i][0].split(',').length) : "0") + " ABSENTEE/S)", r2[i][0]]
    data.push(arr)
  }
  console.log(data)
  var subject = "Attendance Summary for Session 2"//.concat(sess)
  var body = "* THIS IS A COMPUTER GENERATED EMAIL\n\nPlease find the attendance summary below:\n\n";
  body += data.map(row => row.join('\n')).join('\n---\n\n');
  MailApp.sendEmail(recep, subject, body)
}

function sendMail3() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = ss.getSheetByName("ADMIN");
  var data = sheet1.getRangeList(["J2:K56", "N2:N56"]).getRanges()
  r1 = data[0].getValues()
  r2 = data[1].getValues()
  data = []
  data.push([r1[0][0] + " - " + r1[0][1], r2[0][0]])
  for (let i = 1; i <= 54; ++i) {
    var arr = [r1[i][0] + " - " + r1[i][1] + " (" + (r2[i][0].length ? String(r2[i][0].split(',').length) : "0") + " ABSENTEE/S)", r2[i][0]]
    data.push(arr)
  }
  console.log(data)
  var subject = "Attendance Summary for Session 3"//.concat(sess)
  var body = "* THIS IS A COMPUTER GENERATED EMAIL\n\nPlease find the attendance summary below:\n\n";
  body += data.map(row => row.join('\n')).join('\n---\n\n');
  MailApp.sendEmail(recep, subject, body)
}

function sendMail4() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = ss.getSheetByName("ADMIN");
  var data = sheet1.getRangeList(["J2:K56", "O2:O56"]).getRanges()
  r1 = data[0].getValues()
  r2 = data[1].getValues()
  data = []
  data.push([r1[0][0] + " - " + r1[0][1], r2[0][0]])
  for (let i = 1; i <= 54; ++i) {
    var arr = [r1[i][0] + " - " + r1[i][1] + " (" + (r2[i][0].length ? String(r2[i][0].split(',').length) : "0") + " ABSENTEE/S)", r2[i][0]]
    data.push(arr)
  }
  console.log(data)
  var subject = "Attendance Summary for Session 4"//.concat(sess)
  var body = "* THIS IS A COMPUTER GENERATED EMAIL\n\nPlease find the attendance summary below:\n\n";
  body += data.map(row => row.join('\n')).join('\n---\n\n');
  MailApp.sendEmail(recep, subject, body)
}
