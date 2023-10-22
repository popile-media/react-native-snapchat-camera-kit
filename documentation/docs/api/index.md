---
id: "index"
title: "CameraKit"
sidebar_label: "Overview"
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [CameraCaptureError](classes/CameraCaptureError.md)
- [CameraRuntimeError](classes/CameraRuntimeError.md)
- [default](classes/default.md)

## Interfaces

- [ErrorWithCause](interfaces/ErrorWithCause.md)
- [Lens](interfaces/Lens.md)
- [VideoMetadata](interfaces/VideoMetadata.md)

## Type Aliases

### CameraKitError

Ƭ **CameraKitError**: ``"camera-kit/core"`` \| ``"camera-kit/lens-not-found"``

#### Defined in

[CameraKitModule/CameraError.ts:53](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L53)

___

### CameraPermissionRequestStatus

Ƭ **CameraPermissionRequestStatus**: ``"authorized"`` \| ``"denied"``

#### Defined in

[CameraPermissionsModule/index.ts:15](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraPermissionsModule/index.ts#L15)

___

### CameraPermissionStatus

Ƭ **CameraPermissionStatus**: ``"authorized"`` \| ``"not-determined"`` \| ``"denied"`` \| ``"restricted"``

#### Defined in

[CameraPermissionsModule/index.ts:17](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraPermissionsModule/index.ts#L17)

___

### CameraPreset

Ƭ **CameraPreset**: ``"cif-352x288"`` \| ``"hd-1280x720"`` \| ``"hd-1920x1080"`` \| ``"hd-3840x2160"`` \| ``"high"`` \| ``"iframe-1280x720"`` \| ``"iframe-960x540"`` \| ``"input-priority"`` \| ``"low"`` \| ``"medium"`` \| ``"photo"`` \| ``"vga-640x480"``

Indicates the quality level or bit rate of the output.

* `"cif-352x288"`: Specifies capture settings suitable for CIF quality (352 x 288 pixel) video output
* `"hd-1280x720"`: Specifies capture settings suitable for 720p quality (1280 x 720 pixel) video output.
* `"hd-1920x1080"`: Capture settings suitable for 1080p-quality (1920 x 1080 pixels) video output.
* `"hd-3840x2160"`: Capture settings suitable for 2160p-quality (3840 x 2160 pixels, "4k") video output.
* `"high"`: Specifies capture settings suitable for high-quality video and audio output.
* `"iframe-1280x720"`: Specifies capture settings to achieve 1280 x 720 quality iFrame H.264 video at about 40 Mbits/sec with AAC audio.
* `"iframe-960x540"`: Specifies capture settings to achieve 960 x 540 quality iFrame H.264 video at about 30 Mbits/sec with AAC audio.
* `"input-priority"`: Specifies that the capture session does not control audio and video output settings.
* `"low"`: Specifies capture settings suitable for output video and audio bit rates suitable for sharing over 3G.
* `"medium"`: Specifies capture settings suitable for output video and audio bit rates suitable for sharing over WiFi.
* `"photo"`: Specifies capture settings suitable for high-resolution photo quality output.
* `"vga-640x480"`: Specifies capture settings suitable for VGA quality (640 x 480 pixel) video output.

#### Defined in

[CameraKitModule/index.tsx:69](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L69)

___

### CaptureError

Ƭ **CaptureError**: ``"capture/invalid-photo-format"`` \| ``"capture/encoder-error"`` \| ``"capture/muxer-error"`` \| ``"capture/recording-in-progress"`` \| ``"capture/no-recording-in-progress"`` \| ``"capture/file-io-error"`` \| ``"capture/create-temp-file-error"`` \| ``"capture/invalid-video-options"`` \| ``"capture/create-recorder-error"`` \| ``"capture/recorder-error"`` \| ``"capture/no-valid-data"`` \| ``"capture/inactive-source"`` \| ``"capture/insufficient-storage"`` \| ``"capture/file-size-limit-reached"`` \| ``"capture/invalid-photo-codec"`` \| ``"capture/not-bound-error"`` \| ``"capture/capture-type-not-supported"`` \| ``"capture/video-not-enabled"`` \| ``"capture/photo-not-enabled"`` \| ``"capture/aborted"`` \| ``"capture/unknown"``

#### Defined in

[CameraKitModule/CameraError.ts:30](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L30)

___

### DeviceError

Ƭ **DeviceError**: ``"device/configuration-error"`` \| ``"device/no-device"`` \| ``"device/invalid-device"`` \| ``"device/torch-unavailable"`` \| ``"device/microphone-unavailable"`` \| ``"device/low-light-boost-not-supported"`` \| ``"device/focus-not-supported"`` \| ``"device/camera-not-available-on-simulator"``

#### Defined in

[CameraKitModule/CameraError.ts:10](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L10)

___

### FormatError

Ƭ **FormatError**: ``"format/invalid-fps"`` \| ``"format/invalid-hdr"`` \| ``"format/invalid-format"`` \| ``"format/invalid-preset"``

#### Defined in

[CameraKitModule/CameraError.ts:20](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L20)

___

### FrameProcessorError

Ƭ **FrameProcessorError**: ``"frame-processor/unavailable"``

#### Defined in

[CameraKitModule/CameraError.ts:19](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L19)

___

### ParameterError

Ƭ **ParameterError**: ``"parameter/invalid-parameter"`` \| ``"parameter/unsupported-os"`` \| ``"parameter/unsupported-output"`` \| ``"parameter/unsupported-input"`` \| ``"parameter/invalid-combination"``

#### Defined in

[CameraKitModule/CameraError.ts:4](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L4)

___

### PermissionError

Ƭ **PermissionError**: ``"permission/microphone-permission-denied"`` \| ``"permission/camera-permission-denied"``

#### Defined in

[CameraKitModule/CameraError.ts:1](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L1)

___

### SessionError

Ƭ **SessionError**: ``"session/camera-not-ready"`` \| ``"session/audio-session-setup-failed"`` \| ``"session/audio-in-use-by-other-app"`` \| ``"session/audio-session-failed-to-activate"``

#### Defined in

[CameraKitModule/CameraError.ts:25](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L25)

___

### SystemError

Ƭ **SystemError**: ``"system/no-camera-manager"`` \| ``"system/view-not-found"``

#### Defined in

[CameraKitModule/CameraError.ts:52](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L52)

___

### UnknownError

Ƭ **UnknownError**: ``"unknown/unknown"``

#### Defined in

[CameraKitModule/CameraError.ts:54](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L54)

## Variables

### CameraPermissionManager

• **CameraPermissionManager**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getCameraPermissionStatus` | () => `Promise`<[`CameraPermissionStatus`](#camerapermissionstatus)\> |
| `getMicrophonePermissionStatus` | () => `Promise`<[`CameraPermissionStatus`](#camerapermissionstatus)\> |
| `requestCameraPermission` | () => `Promise`<[`CameraPermissionRequestStatus`](#camerapermissionrequeststatus)\> |
| `requestMicrophonePermission` | () => `Promise`<[`CameraPermissionRequestStatus`](#camerapermissionrequeststatus)\> |

#### Defined in

[CameraPermissionsModule/index.ts:23](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraPermissionsModule/index.ts#L23)

___

### VideoUtils

• **VideoUtils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getMetadata` | (`path`: `String`) => `Promise`<[`VideoMetadata`](interfaces/VideoMetadata.md)\> |

#### Defined in

[VideoUtilsModule/index.ts:61](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/VideoUtilsModule/index.ts#L61)

## Functions

### getMetadata

▸ **getMetadata**(): `Promise`<`Meta`\>

#### Returns

`Promise`<`Meta`\>

#### Defined in

[CameraKitModule/index.tsx:454](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L454)

___

### init

▸ **init**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `InitOptions` |

#### Returns

`void`

#### Defined in

[CameraKitModule/index.tsx:450](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L450)

___

### isErrorWithCause

▸ **isErrorWithCause**(`error`): error is ErrorWithCause

Checks if the given `error` is of type [`ErrorWithCause`](interfaces/ErrorWithCause.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `unknown` | Any unknown object to validate |

#### Returns

error is ErrorWithCause

`true` if the given `error` is of type [`ErrorWithCause`](interfaces/ErrorWithCause.md)

#### Defined in

[CameraKitModule/CameraError.ts:182](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L182)

___

### tryParseNativeCameraError

▸ **tryParseNativeCameraError**<`T`\>(`nativeError`): [`CameraCaptureError`](classes/CameraCaptureError.md) \| [`CameraRuntimeError`](classes/CameraRuntimeError.md) \| `T`

Tries to parse an error coming from native to a typed JS camera error.

**`Method`**

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nativeError` | `T` | The native error instance. This is a JSON in the legacy native module architecture. |

#### Returns

[`CameraCaptureError`](classes/CameraCaptureError.md) \| [`CameraRuntimeError`](classes/CameraRuntimeError.md) \| `T`

A [`CameraRuntimeError`](classes/CameraRuntimeError.md) or [`CameraCaptureError`](classes/CameraCaptureError.md), or the `nativeError` itself if it's not parsable

#### Defined in

[CameraKitModule/CameraError.ts:210](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L210)
