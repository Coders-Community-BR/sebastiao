declare namespace NodeJS {
  export interface ProcessEnv {
    CLIENT_ID?: string
    CLIENT_SECRET?: string
    DATABASE_URL?: string
    DISCORD_TOKEN?: string
    DONATE_LINK?: string
    ERROR_WEBHOOK?: string
    GUILD_ID?: string
    GUILD_INVITE?: string
    OWNER_ID?: string
    PAYPAL_DONATE_LINK?: string
  }
}