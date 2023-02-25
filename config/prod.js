// keys.js - figure out what set credentials to return
const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

const credential = new DefaultAzureCredential();
const keyVaultName = "oguzakkus-keys";
const url = "https://" + keyVaultName + ".vault.azure.net";
const client = new SecretClient(url, credential);


module.exports = {
    googleClientID: await client.getSecret('GOOGLE-CLIENT-ID'),
    googleClientSecret: await client.getSecret('GOOGLE-CLIENT-SECRET'),
    mongoURI: await client.getSecret('MONGO-URI'),
    cookieKey: await client.getSecret('COOKIE-KEY'),
    certKeyName: await client.getSecret('CERTIFICATE-KEY'),
    certName: await client.getSecret('CERTIFICATE'),
    PORT: '443'
};
