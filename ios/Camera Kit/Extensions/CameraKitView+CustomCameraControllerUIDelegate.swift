//
//  CameraKitView+CustomCameraControllerUIDelegate.swift
//  DemoApp
//
//  Created by Rıdvan Altun on 8.04.2023.
//

// MARK: CustomCameraControllerUIDelegate

import SCSDKCameraKit

public extension CameraKitView {
    func lensPrefetcherObserver(_: CustomCameraController, lens: Lens, status: LensFetchStatus) {
        // todo
        print()
        print("LensPrefetcherObserver")
        print("Lens -> \(String(describing: lens.debugDescription))")
        print("Status -> \(status)")
        print()
    }

    func lensRepositoryGroupObserver(_: CustomCameraController, updatedLenses lenses: [Lens], groupID: String) {
        print()
        print("LensRepositoryGroupObserver")
        print("Lenses -> \(String(describing: lenses.debugDescription))")
        print("Group ID -> \(groupID)")
        print()

        if initialLens != nil {
            applyInitialLens()
        }

        invokeOnInitialized()
    }

    func lensHintDelegate(_: CustomCameraController, requestedHintDisplay hint: String, for lens: Lens, autohide: Bool) {
        // todo
        print()
        print("LensHintDelegate - (Show Hint)")
        print("Lens -> \(String(describing: lens.debugDescription))")
        print("Hint -> \(hint)")
        print("Auto Hide -> \(autohide.description)")
        print()
    }

    func lensHintDelegate(_: CustomCameraController, requestedHintHideFor lens: Lens) {
        // todo
        print()
        print("LensHintDelegate - (Hide Hint)")
        print("Lens -> \(String(describing: lens.debugDescription))")
        print()
    }
}
