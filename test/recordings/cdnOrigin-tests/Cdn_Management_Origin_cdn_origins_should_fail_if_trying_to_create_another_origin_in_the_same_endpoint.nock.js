// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4182/providers/Microsoft.Cdn/profiles/cdnTestProfile8537/endpoints/cdnTestEndpoint5782/origins/anotherName?api-version=2016-04-02', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"The number of profiles, endpoints or origins created exceeds quota. Please contact support to increase quota.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '178',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '50d9518f-c25c-4221-bcc3-2d8d27132815',
  'x-ms-client-request-id': 'ebe57cf9-b314-4d7a-9ba7-3476d385b263',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '8ad64255-4491-4b9b-9889-6d1412226613',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T225148Z:8ad64255-4491-4b9b-9889-6d1412226613',
  date: 'Wed, 11 May 2016 22:51:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4182/providers/Microsoft.Cdn/profiles/cdnTestProfile8537/endpoints/cdnTestEndpoint5782/origins/anotherName?api-version=2016-04-02', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"The number of profiles, endpoints or origins created exceeds quota. Please contact support to increase quota.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '178',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '50d9518f-c25c-4221-bcc3-2d8d27132815',
  'x-ms-client-request-id': 'ebe57cf9-b314-4d7a-9ba7-3476d385b263',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '8ad64255-4491-4b9b-9889-6d1412226613',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T225148Z:8ad64255-4491-4b9b-9889-6d1412226613',
  date: 'Wed, 11 May 2016 22:51:47 GMT',
  connection: 'close' });
 return result; }]];