import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'secure-car-park-frontend',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
