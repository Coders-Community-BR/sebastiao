import { Client } from 'discord.js';

const client = new Client({ intents: 0 });

client.once('ready', () => console.log('Ready!'));

client.login();