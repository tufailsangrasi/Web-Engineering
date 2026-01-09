fetch("https://is.navttc.gov.pk/api/UserAppliedTrade/AddUserAppliedTrade", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6IlR1ZmFpbCBBaG1lZCIsInVfaWQiOiIxMjE3NSIsInJfaWQiOiIxIiwicm9sZSI6IkNhbmRpZGF0ZSIsIm5iZiI6MTc2NTQ0Mjg4OCwiZXhwIjoxNzY1ODc0ODg4LCJpYXQiOjE3NjU0NDI4ODgsImlzcyI6Im5zaXMtYXBpLm5hdnR0Yy5nb3YucGsiLCJhdWQiOiJuc2lzLWFwaS5uYXZ0dGMuZ292LnBrIn0.IXzja-A6JVQOkT-0rauFLwa6S_kIHeTOJgG6mUjmQ8U",
    "content-type": "application/json",
    "priority": "u=1, i",
    "program": "15",
    "sec-ch-ua": "\"Chromium\";v=\"142\", \"Google Chrome\";v=\"142\", \"Not_A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "Referer": "https://nsis.navttc.gov.pk/"
  },
  "body": "{\"instituteTradeID\":143948,\"programId\":73,\"userId\":\"12175\",\"isUnderTaking\":true}",
  "method": "POST"
}).then(res => {
    return res.json();
}).then(res => {
    console.log(res);
}).catch(err => {
    console.error(err);
});