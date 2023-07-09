---
id: "CameraRuntimeError"
title: "Class: CameraRuntimeError"
sidebar_label: "CameraRuntimeError"
sidebar_position: 0
custom_edit_url: null
---

Represents any kind of error that occured in the Camera View Module.

## Hierarchy

- `CameraError`<[`PermissionError`](../#permissionerror) \| [`ParameterError`](../#parametererror) \| [`DeviceError`](../#deviceerror) \| [`FormatError`](../#formaterror) \| [`FrameProcessorError`](../#frameprocessorerror) \| [`SessionError`](../#sessionerror) \| [`SystemError`](../#systemerror) \| [`CameraKitError`](../#camerakiterror) \| [`UnknownError`](../#unknownerror)\>

  ↳ **`CameraRuntimeError`**

## Accessors

### cause

• `get` **cause**(): `undefined` \| `Error`

#### Returns

`undefined` \| `Error`

#### Inherited from

CameraError.cause

#### Defined in

[CameraKitModule/CameraError.ts:130](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/51f1638/src/CameraKitModule/CameraError.ts#L130)

___

### code

• `get` **code**(): `TCode`

#### Returns

`TCode`

#### Inherited from

CameraError.code

#### Defined in

[CameraKitModule/CameraError.ts:124](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/51f1638/src/CameraKitModule/CameraError.ts#L124)

___

### message

• `get` **message**(): `string`

#### Returns

`string`

#### Inherited from

CameraError.message

#### Defined in

[CameraKitModule/CameraError.ts:127](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/51f1638/src/CameraKitModule/CameraError.ts#L127)

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

CameraError.toString

#### Defined in

[CameraKitModule/CameraError.ts:152](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/51f1638/src/CameraKitModule/CameraError.ts#L152)
