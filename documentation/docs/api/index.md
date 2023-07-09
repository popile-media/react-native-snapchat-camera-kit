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

## Interfaces

- [ErrorWithCause](interfaces/ErrorWithCause.md)

## Type Aliases

### CameraKitError

Ƭ **CameraKitError**: ``"camera-kit/core"`` \| ``"camera-kit/lens-not-found"``

#### Defined in

[CameraKitModule/CameraError.ts:53](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/51f1638/src/CameraKitModule/CameraError.ts#L53)

___

### CaptureError

Ƭ **CaptureError**: ``"capture/invalid-photo-format"`` \| ``"capture/encoder-error"`` \| ``"capture/muxer-error"`` \| ``"capture/recording-in-progress"`` \| ``"capture/no-recording-in-progress"`` \| ``"capture/file-io-error"`` \| ``"capture/create-temp-file-error"`` \| ``"capture/invalid-video-options"`` \| ``"capture/create-recorder-error"`` \| ``"capture/recorder-error"`` \| ``"capture/no-valid-data"`` \| ``"capture/inactive-source"`` \| ``"capture/insufficient-storage"`` \| ``"capture/file-size-limit-reached"`` \| ``"capture/invalid-photo-codec"`` \| ``"capture/not-bound-error"`` \| ``"capture/capture-type-not-supported"`` \| ``"capture/video-not-enabled"`` \| ``"capture/photo-not-enabled"`` \| ``"capture/aborted"`` \| ``"capture/unknown"``

#### Defined in

[CameraKitModule/CameraError.ts:30](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/51f1638/src/CameraKitModule/CameraError.ts#L30)

___

### DeviceError

Ƭ **DeviceError**: ``"device/configuration-error"`` \| ``"device/no-device"`` \| ``"device/invalid-device"`` \| ``"device/torch-unavailable"`` \| ``"device/microphone-unavailable"`` \| ``"device/low-light-boost-not-supported"`` \| ``"device/focus-not-supported"`` \| ``"device/camera-not-available-on-simulator"``

#### Defined in

[CameraKitModule/CameraError.ts:10](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/51f1638/src/CameraKitModule/CameraError.ts#L10)

___

### FormatError

Ƭ **FormatError**: ``"format/invalid-fps"`` \| ``"format/invalid-hdr"`` \| ``"format/invalid-format"`` \| ``"format/invalid-preset"``

#### Defined in

[CameraKitModule/CameraError.ts:20](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/51f1638/src/CameraKitModule/CameraError.ts#L20)

___

### FrameProcessorError

Ƭ **FrameProcessorError**: ``"frame-processor/unavailable"``

#### Defined in

[CameraKitModule/CameraError.ts:19](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/51f1638/src/CameraKitModule/CameraError.ts#L19)

___

### ParameterError

Ƭ **ParameterError**: ``"parameter/invalid-parameter"`` \| ``"parameter/unsupported-os"`` \| ``"parameter/unsupported-output"`` \| ``"parameter/unsupported-input"`` \| ``"parameter/invalid-combination"``

#### Defined in

[CameraKitModule/CameraError.ts:4](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/51f1638/src/CameraKitModule/CameraError.ts#L4)

___

### PermissionError

Ƭ **PermissionError**: ``"permission/microphone-permission-denied"`` \| ``"permission/camera-permission-denied"``

#### Defined in

[CameraKitModule/CameraError.ts:1](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/51f1638/src/CameraKitModule/CameraError.ts#L1)

___

### SessionError

Ƭ **SessionError**: ``"session/camera-not-ready"`` \| ``"session/audio-session-setup-failed"`` \| ``"session/audio-in-use-by-other-app"`` \| ``"session/audio-session-failed-to-activate"``

#### Defined in

[CameraKitModule/CameraError.ts:25](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/51f1638/src/CameraKitModule/CameraError.ts#L25)

___

### SystemError

Ƭ **SystemError**: ``"system/no-camera-manager"`` \| ``"system/view-not-found"``

#### Defined in

[CameraKitModule/CameraError.ts:52](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/51f1638/src/CameraKitModule/CameraError.ts#L52)

___

### UnknownError

Ƭ **UnknownError**: ``"unknown/unknown"``

#### Defined in

[CameraKitModule/CameraError.ts:54](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/51f1638/src/CameraKitModule/CameraError.ts#L54)

## Functions

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

[CameraKitModule/CameraError.ts:182](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/51f1638/src/CameraKitModule/CameraError.ts#L182)

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

[CameraKitModule/CameraError.ts:210](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/51f1638/src/CameraKitModule/CameraError.ts#L210)
