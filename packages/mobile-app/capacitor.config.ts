import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  
  "appId": "com.capacitorjs.example.remote",
  "appName": "capacitor-remote-offline-example",
  "bundledWebRuntime": false,
  "webDir": "dist",
  "server": {
    "url": process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : "https://capacitor-remote-offline-example-web-app.vercel.app/"
  },
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0
    }
  },
  ios: {
    limitsNavigationsToAppBoundDomains: true
  }
};

export default config;