## v2.4.0

**NEW FEATURES:**

* Added `/feedback/` and `/feedback/:id` endpoints. They currently only work on jobs created via `/detect`. `/ask` and `/match` coming in the future version.

## v2.3.0

**BACKWARDS INCOMPATIBILITIES / NOTES:**

* Removed `/video` endpoint. We've temporarily disable all video support in our API. We will be adding this back (but in a different format) in the future.

## v2.2.0

**NEW FEATURES:**

* `/detect`, `/match`, and `/ask` can now accept image blobs (base64-encoded binary data) in the requests.

## v2.1.1

**BUG FIX:**

* Removed `boundingBox` in `DetectJobRequest` and `DetectJobResponse`. This feature has been disabled temporarily.

## v2.1.0

**NEW FEATURES:**

* Added the `/video` endpoint. Video allows you to specify a URL of a video file and a set of classes you want to search for in the video. 

*NOTE* - This endpoint is currently in BETA. The API will likely change. 

## v2.0.0

**NEW FEATURES:**

* Added `boundingBox` option in the `DetectJobRequest`. If this is set to `true`, the response will include `boundingBox` coordinates of the detected object. Note that this is only applicable to `person` class currently. 
* Added `confidence` for each image item in the `DetectJobResponse`.

## v2.0.0-rc18 (Unreleased)

**IMPROVEMENTS:**

* In `DetectJobResponse`, `verdict` is no longer optional. The response will now include verdict for all images processed by AI and HITL.

## v2.0.0-rc17 (Unreleased)

**BACKWARDS INCOMPATIBILITIES / NOTES:**

* `hitl` has been changed to `verify` in `DetectJobRequest`
* `verify` now accepts just two values - `AUTO` and `NEVER`. `ALWAYS` has been removed. 

## v2.0.0-rc16 (Unreleased)

**BACKWARDS INCOMPATIBILITIES / NOTES:**

* Endpoints have been renamed to reflect the new products.
  *  `/find-object` is now `/detect`
  *  `/find-target` is now `/match`
  *  `/answer` is now `/ask`

## v2.0.0-rc15 (Unreleased)

**BUG FIXES:**

* `imageResults` in `FindTargetJobResponse` and `AnswerJobResponse` should be marked as required

## v2.0.0-rc14 (Unreleased)

**NEW FEATURES:**

* `imageResults` has been added to `FindTargetJobResponse` and `AnswerJobResponse`
* `examples` has been added to `AnswerJobResponse`

## v2.0.0-rc13 (Unreleased)

**BUG FIXES:**

* API file missing `AnswerJobRequest` and `AnswerJobResponse` definition references

## v2.0.0-rc12 (Unreleased)

**NEW FEATURES:**

* Added the `/answer` endpoint. You give a Yes/No question you want to be answered for a list of images (image urls). If the answer is true for that list of images, the image chosen will be returned.
* We can now adjust throttling on a per organizaton basis.
* `ImageStatus` now has more possible values:
  ```
  'COMPLETED_SUCCESSFULLY',
  'IN_PROGRESS',
  'UNKNOWN_ERROR',
  'JOB_ERROR',
  'IMAGE_DOWNLOAD_ERROR',
  'INVALID_IMAGE_FORMAT_ERROR',
  'SPIDERWEBS_ERROR',
  'DETECTION_ENGINE_ERROR',
  'MODEL_SERVICE_ERROR',
  'MALFORMED_MESSAGE_ERROR'
  ```
* `ImageResponseItem` now includes `id` property

## v2.0.0-rc11 (Unreleased)

**BUG FIXES:**

* Array types in definitions should have `maxItems` and `minItems` attributes instead of `maxLength` and `minLength`.

## v2.0.0-rc10 (Unreleased)

**BUG FIXES:**

* All `customId`, `webhookUrl`, `feedId` and `Image.url` now have a `maxLength` attribute.

## v2.0.0-rc9 (Unreleased)

**BUG FIXES:**

* The example response in `FindObjectJobResponse` for the `hitl` now correctly reflects the type in the schema above.

**IMPROVEMENTS:**

* Improved attr documentation for `customId` across all areas definitions.

## v2.0.0-rc8 (Unreleased)

**BUG FIXES:**

* `imageResults` in `FindObjectJobResponse` is now an array of images.

## v2.0.0-rc7 (Unreleased)

**BACKWARDS INCOMPATIBILITIES / NOTES:**

* Breaking changes to `FindObjectJobResponse`, in particular `imageResults[i].verdict` and `jobResults[i].image` (commit: 55c0b092b757044a6e81bfdf912fbc41216b7bb7)

## v2.0.0-rc6 (Unreleased)

**BUG FIXES:**

* `classes` on `FindObjectJobRequest` is now a required field. In addition, the schema has also been change to be an array of class objects (from a single object).

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
