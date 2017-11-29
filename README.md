# api-specifications

[![Build Status](https://travis-ci.org/ImageIntelligence/api-specification.svg?branch=master)](https://travis-ci.org/ImageIntelligence/api-specification)

**Welcome to API Specifications!**

This project contains [OpenAPI](https://www.openapis.org/) specifications for the Image Intelligence API. There are currently two versions of our API ([api-v1.json](./v1/api.json) and [api-v2.json](./v2/api.js)).

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

When editing the schema, perhaps you want a preview of your changes. The [Swagger Editor](https://swagger.io/swagger-editor/) can be useful here.

**Not sure what Swagger or OpenAPI is?** Check out this [article](https://swagger.io/difference-between-swagger-and-openapi/).

## Deployment

To publish a new version of api-specifications, update `"version"` in `package.json`, `"info.version"` in the OpenAPI specification and then create a GitHub Release.
