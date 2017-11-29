## v2.0.0-rc5 (Unreleased)

**IMPROVEMENTS:**

* `customId` has been added back to the `FindTargetJobResponse`.
* `jobResults` in `FindtargetJobResponse` will always be an array of results however, `jobResults[i].images` can be an empty array (if all images do not contain a target).
* api-specifications has been split up into multiple components.

**BUG FIXES:**

* Fixed various areas where fields should have been marked as `required` but were not.

## v2.0.0-rc3 (Unreleased)

The following lists a summary of changes made from v1.1.0 to v2.0.0-rc3. For specific details, please refer to the api-v1.json and api-v2.json JSON schema.

**BACKWARDS INCOMPATIBILITIES / NOTES:**

The following items gives an overview of the incompatibilities and other noteworthy changes in this release.

* `/find-person` and `/detect` endpoints are now deprecated. Replacing these is a more generic and consolidated endpoint `/find-object` - read more below.
* `items` (array of image URLs) in all request payloads have been renamed to `images`.
* The `/feedback` endpoint has been changed and will no longer include `addClasses` and `removeClasses` fields. In addition, the `id` longer references an `imageId` and will instead refer to a `jobId`. The endpoint is still being developed and in flux, expect changes in future RCs.

**NEW FEATURES:**

* Added the `/find-object` endpoint. This is essentially a rename and an extension on `/find-person` to support multiple classes (e.g. person and car). You specify objects (classes) you want to find in list of images (image urls). All images will be processed by our classification engine and verified if `hitl=ALWAYS` (default AUTO).
* Added the `/find-target` endpoint. Find Target allows you to specify a `target` (class and sample target images) you want to search for in a given list of `images`. For example my target is a `car`. I’ll provided 3 example target images of the same car and a set of images of my driveway. Calling `/find-target` with those params will return first image in my driveway where the target car is found.
* Although not strictly part of the API spec, we are completely redesigning our documentation and improving our developer onboarding (keep and eye on https://docs.imageintelligence.com).

**IMPROVEMENTS:**

* When generating a new access token via `/oauth/token`, the application the `clientId` and `clientSecret` belongs to is also returned in the response payload as `appName`.
