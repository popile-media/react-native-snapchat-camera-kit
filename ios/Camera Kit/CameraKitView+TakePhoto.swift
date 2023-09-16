//
//  CameraKitView+TakePhoto.swift
//  DemoApp
//
//  Created by Rıdvan Altun on 3.04.2023.
//

extension CameraKitView {
    func takePhoto(options _: NSDictionary, promise: Promise) {
        withPromise(promise) {
            self.cameraController?.takePhoto { image, error in

                if image != nil {
                    let url = URL(fileURLWithPath: "\(NSTemporaryDirectory())\(UUID().uuidString).png")

                    if let data = image!.pngData() {
                        try? data.write(to: url)
                        self.invokeOnPhotoTaken(path: url.path)
                    } else {
                        // TODO
                    }
                }

                if error != nil {
                    // TODO
                }
            }
        }
    }

    // Events

    final func invokeOnPhotoTaken(path: String) {
        guard let onPhotoTaken = onPhotoTaken else { return }

        let photoFile = PhotoFileModel(path: path)

        onPhotoTaken(photoFile.toBridge())
    }
}
