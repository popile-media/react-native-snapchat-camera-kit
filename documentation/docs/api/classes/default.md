---
id: "default"
title: "Class: default"
sidebar_label: "default"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `PureComponent`<`CameraKitProps`\>

  ↳ **`default`**

## Constructors

### constructor

• **new default**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `CameraKitProps` |

#### Overrides

React.PureComponent&lt;CameraKitProps\&gt;.constructor

#### Defined in

[CameraKitModule/index.tsx:145](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L145)

## Properties

### defaultProps

▪ `Static` **defaultProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `initialCameraFacing` | `string` |
| `initialLens` | ``null`` |
| `isActive` | `boolean` |
| `lensGroups` | ``null`` |

#### Defined in

[CameraKitModule/index.tsx:136](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L136)

## Methods

### adjustBlur

▸ **adjustBlur**(`amount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`void`

#### Defined in

[CameraKitModule/index.tsx:250](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L250)

___

### adjustLensesVolume

▸ **adjustLensesVolume**(`mute`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mute` | `Boolean` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[CameraKitModule/index.tsx:357](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L357)

___

### adjustTone

▸ **adjustTone**(`amount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`void`

#### Defined in

[CameraKitModule/index.tsx:254](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L254)

___

### cancelRecording

▸ **cancelRecording**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[CameraKitModule/index.tsx:399](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L399)

___

### changeLensById

▸ **changeLensById**(`lensId`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lensId` | `string` |
| `options?` | `ChangeLensByIdOptions` |

#### Returns

`Promise`<`void`\>

#### Defined in

[CameraKitModule/index.tsx:290](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L290)

___

### checkBlurSupporting

▸ **checkBlurSupporting**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[CameraKitModule/index.tsx:233](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L233)

___

### checkToneModeSupporting

▸ **checkToneModeSupporting**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[CameraKitModule/index.tsx:216](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L216)

___

### clearLenses

▸ **clearLenses**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[CameraKitModule/index.tsx:340](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L340)

___

### flipCamera

▸ **flipCamera**(): `Promise`<`CameraPosition`\>

#### Returns

`Promise`<`CameraPosition`\>

#### Defined in

[CameraKitModule/index.tsx:266](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L266)

___

### focus

▸ **focus**(`point`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`Promise`<`void`\>

#### Defined in

[CameraKitModule/index.tsx:282](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L282)

___

### getLenses

▸ **getLenses**(`lensGroup?`): `Promise`<[`Lens`](../interfaces/Lens.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lensGroup?` | `string` |

#### Returns

`Promise`<[`Lens`](../interfaces/Lens.md)[]\>

#### Defined in

[CameraKitModule/index.tsx:315](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L315)

___

### pauseRecording

▸ **pauseRecording**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[CameraKitModule/index.tsx:383](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L383)

___

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

React.PureComponent.render

#### Defined in

[CameraKitModule/index.tsx:415](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L415)

___

### resumeRecording

▸ **resumeRecording**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[CameraKitModule/index.tsx:391](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L391)

___

### startRecording

▸ **startRecording**(`options`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RecordVideoOptions` |

#### Returns

`Promise`<`void`\>

#### Defined in

[CameraKitModule/index.tsx:375](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L375)

___

### stopRecording

▸ **stopRecording**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[CameraKitModule/index.tsx:407](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L407)

___

### takePhoto

▸ **takePhoto**(`options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `TakePhotoOptions` |

#### Returns

`Promise`<`void`\>

#### Defined in

[CameraKitModule/index.tsx:258](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L258)

___

### zoom

▸ **zoom**(`factor`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[CameraKitModule/index.tsx:274](https://github.com/popile-media/react-native-snapchat-camera-kit/blob/970158e/src/CameraKitModule/index.tsx#L274)
