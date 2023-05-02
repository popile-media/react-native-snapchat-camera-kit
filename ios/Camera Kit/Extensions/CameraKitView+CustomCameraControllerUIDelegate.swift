//
//  CameraKitView+CustomCameraControllerUIDelegate.swift
//  DemoApp
//
//  Created by Rıdvan Altun on 8.04.2023.
//

// MARK: CustomCameraControllerUIDelegate

import SCSDKCameraKit

extension CameraKitView {
  public func lensPrefetcherObserver(_ controller: CustomCameraController, lens: Lens, status: LensFetchStatus) {
    // todo
    print()
    print("LensPrefetcherObserver")
    print("Lens -> \(String(describing: lens.debugDescription))")
    print("Status -> \(status)")
    print()
  }
  
  public func lensRepositoryGroupObserver(_ controller: CustomCameraController, updatedLenses lenses: [Lens], groupID: String) {
    print()
    print("LensRepositoryGroupObserver")
    print("Lenses -> \(String(describing: lenses.debugDescription))")
    print("Group ID -> \(groupID)")
    print()
    
    if (self.initialLens != nil) {
      self.applyInitialLens()
    }
    
    self.invokeOnInitialized()
  }
  
  public func lensHintDelegate(_ controller: CustomCameraController, requestedHintDisplay hint: String, for lens: Lens, autohide: Bool) {
    // todo
    print()
    print("LensHintDelegate - (Show Hint)")
    print("Lens -> \(String(describing: lens.debugDescription))")
    print("Hint -> \(hint)")
    print("Auto Hide -> \(autohide.description)")
    print()
  }
  
  public func lensHintDelegate(_ controller: CustomCameraController, requestedHintHideFor lens: Lens) {
    // todo
    print()
    print("LensHintDelegate - (Hide Hint)")
    print("Lens -> \(String(describing: lens.debugDescription))")
    print()
  }
}
