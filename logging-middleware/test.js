const { Log } = require('./index');

// Test the logger
async function testLog() {
    console.log("Testing logger...");
    await Log("frontend", "info", "utils", "This is a test log from VS Code!");
}

testLog();