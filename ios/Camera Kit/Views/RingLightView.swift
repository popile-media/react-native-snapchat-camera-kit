//  Copyright Snap Inc. All rights reserved.
//  SCSDKCameraKitReferenceUI

import UIKit

public class RingLightView: UIView {
    // MARK: Views

    /// The top border of the ring light effect. This top border is unaffected by changes to the ring light gradient intensity.
    /// - Note: This top border is unaffected by changes to the ring light gradient intensity.
    public let topBorder: UIView = {
        let view = UIView()
        view.backgroundColor = .white
        view.translatesAutoresizingMaskIntoConstraints = false

        return view
    }()

    /// The bottom border of the ring light effect.
    /// - Note: This bottom border is unaffected by changes to the ring light gradient intensity.
    public let bottomBorder: UIView = {
        let view = UIView()
        view.backgroundColor = .white
        view.translatesAutoresizingMaskIntoConstraints = false

        return view
    }()

    /// The gradient portion of the ring light effect.
    /// Update the intensity of the ring light effect by calling the `updateIntensity` method of `RingLightGradientView`.
    public let ringLightGradient: RingLightGradientView = {
        let view = RingLightGradientView()
        view.changeColor(to: .white)
        view.translatesAutoresizingMaskIntoConstraints = false

        return view
    }()

    // MARK: Modification

    /// Changes the color of the ring light effect to the specified color.
    /// - Parameter color: The color to set the ring light effect to.
    public func changeColor(to color: UIColor) {
        ringLightGradient.changeColor(to: color)
        UIView.animate(
            withDuration: 0.15,
            animations: { [weak self] in
                self?.topBorder.backgroundColor = color
                self?.bottomBorder.backgroundColor = color
            }
        )
    }

    // MARK: Init

    override public init(frame: CGRect) {
        super.init(frame: frame)
        setup()
    }

    public required init?(coder: NSCoder) {
        super.init(coder: coder)
        setup()
    }

    private func setup() {
        isUserInteractionEnabled = false
        setupTopBorder()
        setupBottomBorder()
        setupRingLightGradient()
    }
}

// MARK: Top and Bottom Borders

extension RingLightView {
    private func setupTopBorder() {
        addSubview(topBorder)
        NSLayoutConstraint.activate([
            topBorder.leadingAnchor.constraint(equalTo: leadingAnchor),
            topBorder.trailingAnchor.constraint(equalTo: trailingAnchor),
            topBorder.topAnchor.constraint(equalTo: topAnchor),
            topBorder.bottomAnchor.constraint(equalTo: safeAreaLayoutGuide.topAnchor),
        ])
    }

    private func setupBottomBorder() {
        addSubview(bottomBorder)
        NSLayoutConstraint.activate([
            bottomBorder.leadingAnchor.constraint(equalTo: leadingAnchor),
            bottomBorder.trailingAnchor.constraint(equalTo: trailingAnchor),
            bottomBorder.topAnchor.constraint(equalTo: safeAreaLayoutGuide.bottomAnchor),
            bottomBorder.bottomAnchor.constraint(equalTo: bottomAnchor),
        ])
    }
}

// MARK: Ring Light Gradient

extension RingLightView {
    private func setupRingLightGradient() {
        addSubview(ringLightGradient)
        NSLayoutConstraint.activate([
            ringLightGradient.leadingAnchor.constraint(equalTo: leadingAnchor),
            ringLightGradient.trailingAnchor.constraint(equalTo: trailingAnchor),
            ringLightGradient.topAnchor.constraint(equalTo: safeAreaLayoutGuide.topAnchor),
            ringLightGradient.bottomAnchor.constraint(equalTo: safeAreaLayoutGuide.bottomAnchor),
        ])
    }
}
