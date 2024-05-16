#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
const completedUsers = {};

request(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  } else {
    const users = JSON.parse(response.body);
    users.forEach((user) => {
      const userId = user.userId;
      const taskDone = user.completed;
      if (userId in completedUsers && taskDone === true) {
        completedUsers[`${userId}`] += 1;
      } else {
        if (taskDone === true) {
          completedUsers[`${userId}`] = 1;
        }
      }
    });
    console.log(completedUsers);
  }
});
