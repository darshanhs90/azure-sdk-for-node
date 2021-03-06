// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/poolusagemetrics?api-version=2017-01-01.4.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#poolusagemetrics\",\"value\":[\r\n    {\r\n      \"poolId\":\"nodesdktestpool1\",\"startTime\":\"2017-02-03T18:30:00Z\",\"endTime\":\"2017-02-03T19:00:00Z\",\"vmSize\":\"small\",\"totalCoreHours\":0.51982403347222217,\"dataIngressGiB\":0.0,\"dataEgressGiB\":0.0\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '409053c6-d03c-4b69-bfbf-3485169fe9a1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 21:54:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/poolusagemetrics?api-version=2017-01-01.4.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#poolusagemetrics\",\"value\":[\r\n    {\r\n      \"poolId\":\"nodesdktestpool1\",\"startTime\":\"2017-02-03T18:30:00Z\",\"endTime\":\"2017-02-03T19:00:00Z\",\"vmSize\":\"small\",\"totalCoreHours\":0.51982403347222217,\"dataIngressGiB\":0.0,\"dataEgressGiB\":0.0\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '409053c6-d03c-4b69-bfbf-3485169fe9a1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 21:54:26 GMT',
  connection: 'close' });
 return result; }]];