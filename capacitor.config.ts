
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nilesh.seeds.billing',
  appName: 'Nilesh Seeds Billing',
  webDir: 'web',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  }
};

export default config;
