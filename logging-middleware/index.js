const axios = require('axios');

// Your authentication token from Step 3
let AUTH_TOKEN = "PASTE_YOUR_LONG_ACCESS_TOKEN_HERE";

function setAuthToken(token) {
  AUTH_TOKEN = token;
}

// The main logging function
async function Log(stack, level, package, message) {
  // 1. Define allowed values (from your screenshots)
  const allowedStacks = ['backend', 'frontend'];
  const allowedLevels = ['debug', 'info', 'warn', 'error', 'fatal'];
  // Add other packages from the list as needed
  const allowedPackages = ['cache', 'controller', 'db', 'handler', 'component', 'hook', 'page', 'utils']; 

  // 2. Validate input
  if (!allowedStacks.includes(stack)) {
    console.error(`Invalid stack: ${stack}. Must be one of: ${allowedStacks.join(', ')}`);
    return;
  }
  if (!allowedLevels.includes(level)) {
    console.error(`Invalid level: ${level}. Must be one of: ${allowedLevels.join(', ')}`);
    return;
  }
  if (!allowedPackages.includes(package)) {
    console.error(`Invalid package: ${package}. Must be one of: ${allowedPackages.join(', ')}`);
    return;
  }
  if (!AUTH_TOKEN) {
    console.error('Authentication token not set. Call setAuthToken() first.');
    return;
  }

  // 3. Prepare the request
  const logData = { stack, level, package, message };
  const config = {
    headers: {
      'Authorization': `Bearer ${AUTH_TOKEN}`,
      'Content-Type': 'application/json'
    }
  };

  try {
    // 4. Make the API call
    const response = await axios.post('http://20.244.56.144/evaluation-service/logs', logData, config);
    console.log('Log successful:', response.data.logID);
  } catch (error) {
    console.error('Failed to send log:', error.message);
  }
}

// Export the functions so other projects can use them
module.exports = { Log, setAuthToken };