const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

const credential = new DefaultAzureCredential();
const keyVaultName = "oguzakkus-keys";
const url = "https://" + keyVaultName + ".vault.azure.net";
const client = new SecretClient(url, credential);

async function getSecrets() {
  const googleClientID = (await client.getSecret('GOOGLE-CLIENT-ID')).value;
  const googleClientSecret = (await client.getSecret('GOOGLE-CLIENT-SECRET')).value;
  const mongoURI = (await client.getSecret('MONGO-URI')).value;
  const cookieKey = (await client.getSecret('COOKIE-KEY')).value;
  const certKeyName = (await client.getSecret('CERTIFICATE-KEY')).value;
  const certName = (await client.getSecret('CERTIFICATE')).value;
  const PORT = '443';

  return { googleClientID,googleClientSecret, mongoURI, cookieKey, certKeyName, certName, PORT };
}

module.exports = { getSecrets };