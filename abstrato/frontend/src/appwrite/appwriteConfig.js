import {Account,Client,Databases} from 'appwrite';

const client = new  Client()
client.setEndpoint("http://localhost/v1").setProject("64e38ad40f53bb35045d")

export const account = new Account(client);

//* Databases

export const databases = new Databases(client, "6547776deaf7ad5d9a30");