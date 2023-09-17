// tasks/scheduledTask.js
const cron = require('node-cron');

const logMessage = () => {
  console.log('This message is logged every minute.');
};

// Schedule the task to run every minute
cron.schedule('* * * * *', logMessage);
