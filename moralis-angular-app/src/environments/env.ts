export interface Env {
  production: boolean;
  env: 'dev' | 'prod';

  moralis: {
    /** Moralis Application ID */
    appId: string;
    /** Moralis Server URL */
    serverUrl: string;
  };
}

export const defaultEnv: Env = {
  production: false,
  env: 'dev',
  moralis: {
    appId: 'InlkEbBPbwe3X3GUhteBUX1wI4VkLVSWkdMa9OGJ',
    serverUrl: 'https://yagkgdwk1moq.usemoralis.com:2053/server'
  }
};
