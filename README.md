# api-specifications

**Welcome to API Specifications!**

This project contains [OpenAPI](https://www.openapis.org/) specifications for the Image Intelligence API. There are currently two versions of our API ([api-v1.json](./v1/api.json) and [v2/Api.js](./v2/Api.js)). Note that V1 will be marked for deprecation soon after the release of V2. If you've just started out, please build against V2.

## Installation & Usage

```bash
npm install @image-intelligence/api-specification
```

```js
import ApiSpec from '@image-intelligence/api-specification';

console.log(ApiSpec.v1);
console.log(ApiSpec.v2);

console.log(JSON.stringify(ApiSpec.v2, null, 2));
```

## Development & Swagger

```bash
git clone git@github.com:ImageIntelligence/api-specification.git
```

When you're making changes to the API specification, it is often useful to verify the schema is valid:

```bash
npm install -g swagger-cli
```

```bash
swagger-cli help
swagger-cli validate xxx.json
```

Our JSON schema is generated from JavaScript files. To generate the schema:

```bash
node -e "console.log(JSON.stringify(require('./index').v2, null, 2))" | jq .
node -e "console.log(JSON.stringify(require('./index').v2, null, 2))" >! schema.json
node -e "console.log(JSON.stringify(require('./index').v2, null, 2))" | pbcopy
```

When editing the schema, perhaps you want a preview of your changes. The [Swagger Editor](https://swagger.io/swagger-editor/) can be useful here.

**Not sure what Swagger or OpenAPI is?** Check out this [article](https://swagger.io/difference-between-swagger-and-openapi/).

## Deployment

To publish a new version of api-specifications, update `"version"` in `package.json` and then create a GitHub Release.
