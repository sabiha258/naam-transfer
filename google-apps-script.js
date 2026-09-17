/**
 * GOOGLE APPS SCRIPT FOR NAAM TRANSFER FORM SUBMISSIONS
 * Sheet Link: https://docs.google.com/spreadsheets/d/1dz0ORwcDn5hDKhsYoau9wocjd36F9YoP8rYRTVgqcK0/edit
 *
 * HOW TO SETUP (Takes 1 minute):
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1dz0ORwcDn5hDKhsYoau9wocjd36F9YoP8rYRTVgqcK0/edit
 * 2. Click "Extensions" -> "Apps Script" in the top menu.
 * 3. Delete any existing code in the editor, and paste this ENTIRE script.
 * 4. Click "Deploy" (top right) -> "New deployment".
 * 5. Click the gear icon next to "Select type" -> choose "Web app".
 * 6. Set Description: "Naam Transfer Form Webhook"
 * 7. Set Execute as: "Me"
 * 8. Set Who has access: "Anyone" (CRITICAL step!)
 * 9. Click "Deploy", grant permissions if asked, and COPY the Web App URL.
 * 10. Paste that Web App URL in your .env.local file as:
 *     GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create headers if sheet is brand new / empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Submitted At",
        "Full Name",
        "Mobile Number",
        "Email",
        "City",
        "Services Required",
        "Electricity Provider",
        "Gas Provider"
      ]);
      // Format Header Row
      var headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#F3F4F6");
    }

    var contents = JSON.parse(e.postData.contents || "{}");

    var submittedAt = contents.submittedAt || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    var name = contents.name || "";
    var phone = contents.phone || "";
    var email = contents.email || "";
    var city = contents.city || "";
    var services = Array.isArray(contents.services) ? contents.services.join(", ") : (contents.services || "");
    var electricityProvider = contents.electricityProvider || "N/A";
    var gasProvider = contents.gasProvider || "N/A";

    sheet.appendRow([
      submittedAt,
      name,
      phone,
      email,
      city,
      services,
      electricityProvider,
      gasProvider
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "Data logged successfully" })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "online", service: "Naam Transfer Sheet API" })
  ).setMimeType(ContentService.MimeType.JSON);
}
