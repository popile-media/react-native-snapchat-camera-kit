//
//  CameraKitView+Events.swift
//  DemoApp
//
//  Created by Rıdvan Altun on 8.04.2023.
//

// MARK: Event Invokers

extension CameraKitView {
    final func invokeOnInitialized() {
        guard let onInitialized = onInitialized else { return }
        onInitialized([String: Any]())
    }

    final func invokeOnError(_ error: CameraError, cause: NSError? = nil) {
        guard let onError = onError else { return }

        var causeDictionary: [String: Any]?
        if let cause = cause {
            causeDictionary = [
                "code": cause.code,
                "domain": cause.domain,
                "message": cause.description,
                "details": cause.userInfo,
            ]
        }
        onError([
            "code": error.code,
            "message": error.message,
            "cause": causeDictionary ?? NSNull(),
        ])
    }
}
