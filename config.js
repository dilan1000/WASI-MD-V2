//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "999999@gmail.com";
global.location = "SriLanka.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94722946249@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "https://whatsapp.com";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94722946249";
global.sudo = process.env.SUDO || "94722946249";
global.owner = process.env.OWNER_NUMBER || "94722946249";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0dNbHlqMDlvelZ4Zjk0bHVKMzJIT1gydkRQc3RBL0FGRlZpcVAzQzhucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTZCeTJnUEl1Z2oxOEdVa1dRdWUrL0lJYWVxTHg1SGU0SXVKb0pCMjN6VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRi8xOXpRMUJ0T2U0bHNwdUxueXFqVXB6cWZ0azB1OGRvWkxCb0VMVkg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHWUhKS0sySEZyL3dUaTBQdXpFTUpwSkcyUmpOVlArd1c3SjE0aksyQm0wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNPdGczclpyZndSUVBra3Z2c1RaanBqSlhIK3hxTXFYbUl3cU9Rd2UyMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYxWWxST2NsbHJjdk12NEVmRVhpa2JFSDg0Z2x3Nnh2UTFZOW4xWTBZQjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BpL1M5dDJiaXVLdzRYallUaEpiS0tCZjJaNUdabHdMMzREY2cydFIxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTJlViszdlFLRUtCV21Hd0FkWnR5eTZ0eDFLWTRLdXJwaGVwVDBXdTgyQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVkckU3aHpIVldDa0RkYy91QWI3cGpEeHVWUWRSc3hxRExUcnM2MERFb0VzR3dUdDNzMWhJNkFZejl2N1JnbGVoemtOL1AwdGFFampLZ0gxbU1PQ0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6IitYTGNmZ0hiY2k5cTBqMlkxUzJSaFk1cG1JcXowSEhlRXB0Y3Q5YzI2SmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjI5NDYyNDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEFENUQ0OTM2RkI1QTMzRDYzOEE2MDVFQUYyMjk5NkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjQ0MzYzOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjI5NDYyNDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOUU5QTAzRDY5N0M2RDc2MjJCMTJENzdDODQzOTMxOTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjQ0MzYzOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoid2NrTlNtdFhUVGVFM1hlZXRoMFhKUSIsInBob25lSWQiOiI0Yjc0NWRkOC03OTk2LTQxYjQtYTQ4ZS0yMWZkMDQwMzNiNzQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkRRWFYrYURyMDg4SFdmcUtXUTg1dENGVXZFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhPZ091VDZOS1JpK0p2cGpVbHk2YW5Xd3NMRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNQVBUOEQ0RSIsIm1lIjp7ImlkIjoiOTQ3MjI5NDYyNDk6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oiCzrnihJPOsc63X+KckyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTURzajRvRkVPZk9xYlVHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiME9mSTlTazJucCt4MHpTZFVuQnVodXpvSVQvamUySW93bWQ0R1VyWnhFMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUzdjQXhoQjNFdG8yMWdnV1Z3blprSk42SG5CeG1US0J1c09QeC9lUXdlYUtKSjBWckJjRDE1OTMvd0JnckJkakgxcHcrcDFRSTlWMEtuQktyazdRQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IkFKVzF6QmtnUEtiNEJRTHExQVB4WkN1bWJxeE83ZmY4c1hoRnA0ZUN3ei9vQWNDY2VidGNGS3R3WHpDMmN1QTRkM0NGYUFXYWZ0R3VKUTI1WlJwTENBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjI5NDYyNDk6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZERueVBVcE5wNmZzZE0wblZKd2JvYnM2Q0UvNDN0aUtNSm5lQmxLMmNSTiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjQ0MzYzNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKUmMifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐃𝐈𝐋𝐀𝐍-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "𝐃𝐈𝐋",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐃𝐈𝐋𝐀𝐍-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "DILAN",
  errorChat: process.env.ERROR_CHAT || "94722946249",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "𝐃𝐈𝐋𝐀𝐍").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
