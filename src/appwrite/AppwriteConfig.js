// ProjectID: 640f8e595b78601fbaca
// DatabaseID: 640f8ef53582ddb83f54
// API Endpoint: http://localhost/v1

import {Client,Account,Databases} from 'appwrite'

const client = new Client();
client.setEndpoint('http://localhost/v1').setProject('640f8e595b78601fbaca');

export const account = new Account(client)

//*Databases

export const databases = new Databases(client,'640f8ef53582ddb83f54')
