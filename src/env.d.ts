declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
    USER_PREF_KEY: string;
    TOKEN_PREF_KEY: string;
    AUTH_URL: string;
    AUTH_ENDPOINT: string;
    IV_KEY: string;
    ENCRYPTION_KEY: string;
  }
}
