// // "generate-mock-data": "babel-node buildScripts/mockApi/generateMockData",
// // "prestart-mock-api": "npm run generate-mock-data",
// // "start-mock-api": "json-server --watch buildScripts/mockApi/db.json --port 3001",

// // File to generate fake data

// // Example
// // // index.js
// // module.exports = () => {
// //   const data = { users: [] }
// //   // Create 1000 users
// //   for (let i = 0; i < 1000; i++) {
// //     data.users.push({ id: i, name: `user${i}` })
// //   }
// //   return data
// // }

// import { jsfAPI } from "json-schema-faker";
// import { red, green } from "chalk";
// import schema from "./dataSchema";
// import { writeFile } from "fs";

// const value = await jsf.resolve(schema);
// const something = jsfAPI(schema);

console.log("hi");

// const json = JSON.stringify(value);

// writeFile(".db.json", json, (err) => {
//   if (err) {
//     return console.log(red(err.message));
//   } else {
//     console.log(green("Mock data generated."));
//   }
// });
