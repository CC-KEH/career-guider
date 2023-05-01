
import {Client,Account,Databases} from 'appwrite'

const client = new Client();
client.setEndpoint('http://localhost/v1').setProject('tokenID');

export const account = new Account(client)

//*Databases

export const databases = new Databases(client,'tokenID')
    