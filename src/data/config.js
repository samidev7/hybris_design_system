let config = {
  REDIRECT_URL_LABEL: "redirect",
  SCOPE: "openid",
  RESPONSE_TYPE: "code",
  MAX_FILE_SIZE: 1 * 1024 * 1024,
  WEBSITE_NAME: "Journey Bridge",
  SUPPORT_LINK: "https://support.journeybridge.io",
};

if (process.env.NODE_ENV === "development") {
  config = {
    ...config,
    API_BASE_URL: "http://10.101.12.201:8002/api/v1/",
    BLOCKCHAINID_BASE_URL: "http://localhost:3001",
    DEBUG_MODE: true,
    CLIENT_ID: "BlTedSSngehqw1CZGzfJEz4Xr4Vl9W0LGFOVLee5",
    REDIRECT_URI: "http://localhost:3000/redirect",
  };
} else {
  const requiredEnvVars = [
    "REACT_APP_API_BASE_URL",
    "REACT_APP_BLOCKCHAINID_BASE_URL",
    "REACT_APP_DEBUG_MODE",
    "REACT_APP_CLIENT_ID",
    "REACT_APP_REDIRECT_URI",
  ];

  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable ${envVar}`);
    }
  });

  config = {
    ...config,
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
    BLOCKCHAINID_BASE_URL: process.env.REACT_APP_BLOCKCHAINID_BASE_URL,
    DEBUG_MODE: ["true", "1"].includes(
      process.env.REACT_APP_DEBUG_MODE.toLowerCase()
    ),
    CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
    REDIRECT_URI: process.env.REACT_APP_REDIRECT_URI,
  };
}

export default config;
