---
id: "ErrorWithCause"
title: "Interface: ErrorWithCause"
sidebar_label: "ErrorWithCause"
sidebar_position: 0
custom_edit_url: null
---

Represents a JSON-style error cause. This contains native `NSError`/`Throwable` information, and can have recursive [`.cause`](ErrorWithCause.md#cause) properties until the ultimate cause has been found.

## Properties

### cause

• `Optional` **cause**: [`ErrorWithCause`](ErrorWithCause.md)

Optional additional cause for nested errors

* iOS: N/A
* Android: `Throwable.cause`

#### Defined in

[CameraKitModule/CameraError.ts:101](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L101)

___

### code

• `Optional` **code**: `number`

The native error's code.

* iOS: `NSError.code`
* Android: N/A

#### Defined in

[CameraKitModule/CameraError.ts:66](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L66)

___

### details

• `Optional` **details**: `Record`<`string`, `unknown`\>

Optional additional details

* iOS: `NSError.userInfo`
* Android: N/A

#### Defined in

[CameraKitModule/CameraError.ts:87](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L87)

___

### domain

• `Optional` **domain**: `string`

The native error's domain.

* iOS: `NSError.domain`
* Android: N/A

#### Defined in

[CameraKitModule/CameraError.ts:73](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L73)

___

### message

• **message**: `string`

The native error description

* iOS: `NSError.message`
* Android: `Throwable.message`

#### Defined in

[CameraKitModule/CameraError.ts:80](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L80)

___

### stacktrace

• `Optional` **stacktrace**: `string`

Optional Java stacktrace

* iOS: N/A
* Android: `Throwable.stacktrace.toString()`

#### Defined in

[CameraKitModule/CameraError.ts:94](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/CameraError.ts#L94)
