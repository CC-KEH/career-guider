//Project ID: 6404462d007d5857a9ff
//API Endpoint: http://localhost/v1

import {Client,Account,Databases} from 'appwrite'

const client = new Client();
client.setEndpoint('http://localhost/v1').setProject('6404462d007d5857a9ff');

export const account = new Account(client)

//*Databases

export const databases = new Databases(client,'6404469f86b58551d21c')
