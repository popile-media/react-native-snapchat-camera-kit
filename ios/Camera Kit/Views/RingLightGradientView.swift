//  Copyright Snap Inc. All rights reserved.
//  SCSDKCameraKitReferenceUI

import UIKit

public class RingLightGradientView: UIView {
    // MARK: - Public

    // MARK: Ring Light Modification

    /// Updates the intensity of the ring light effect to the specified intensity.
    /// - Parameters:
    ///    - intensity: The intensity to set the ring light effect to. Value should be between 0.0 and 1.0.
    ///    - animated: Whether or not the change in intensity is animated.
    public func updateIntensity(to intensity: CGFloat, animated: Bool) {
        let minCornerRadius = Constants.ringLightGradientMinCorderRadius
        let maxCornerRadius = (bounds.width / 2) / Constants.ringLightGradientMultiplier
        let cornerRadius =
            min(maxCornerRadius, (maxCornerRadius - minCornerRadius) * intensity + minCornerRadius)
                * Constants.ringLightGradientMultiplier
        let horizontalGradientWidth = bounds.width - 2 * cornerRadius
        let verticalGradientHeight = bounds.height - 2 * cornerRadius
        let horizontalGradientHeight = cornerRadius
        let verticalGradientWidth = cornerRadius

        CATransaction.begin()
        CATransaction.setDisableActions(!animated)

        linearGradientLayers[.top]?.frame = CGRect(
            x: verticalGradientWidth, y: 0, width: horizontalGradientWidth, height: horizontalGradientHeight
        )
        linearGradientLayers[.left]?.frame = CGRect(
            x: 0, y: horizontalGradientHeight, width: verticalGradientWidth, height: verticalGradientHeight
        )
        linearGradientLayers[.bottom]?.frame = CGRect(
            x: verticalGradientWidth, y: bounds.height - horizontalGradientHeight, width: horizontalGradientWidth,
            height: horizontalGradientHeight
        )
        linearGradientLayers[.right]?.frame = CGRect(
            x: bounds.width - verticalGradientWidth, y: horizontalGradientHeight, width: verticalGradientWidth,
            height: verticalGradientHeight
        )

        radialGradientLayers[.topLeft]?.frame = CGRect(
            x: 0, y: 0, width: verticalGradientWidth, height: horizontalGradientHeight
        )
        radialGradientLayers[.topRight]?.frame = CGRect(
            x: horizontalGradientWidth + verticalGradientWidth, y: 0, width: verticalGradientWidth,
            height: horizontalGradientHeight
        )
        radialGradientLayers[.bottomLeft]?.frame = CGRect(
            x: 0, y: verticalGradientHeight + horizontalGradientHeight, width: verticalGradientWidth,
            height: horizontalGradientHeight
        )
        radialGradientLayers[.bottomRight]?.frame = CGRect(
            x: horizontalGradientWidth + verticalGradientWidth, y: verticalGradientHeight + horizontalGradientHeight,
            width: verticalGradientWidth, height: horizontalGradientHeight
        )

        CATransaction.commit()
    }

    /// Changes the color of the ring light gradient to the specified color.
    /// - Parameter color: The color to set the ring light gradient to.
    public func changeColor(to color: UIColor) {
        let startColor = color
        let midColor = color.withAlphaComponent(0.1)
        let endColor = color.withAlphaComponent(0)

        let gradientColors = [endColor.cgColor, midColor.cgColor, startColor.cgColor, startColor.cgColor]

        linearGradientLayers.values.forEach {
            $0.colors = gradientColors
        }

        radialGradientLayers.values.forEach {
            $0.colors = gradientColors
        }
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

    // MARK: - Private

    private func setup() {
        backgroundColor = .clear

        ([CAGradientLayer](linearGradientLayers.values)).forEach(layer.addSublayer)
        [CAGradientLayer](radialGradientLayers.values).forEach(layer.addSublayer)
    }

    private enum Constants {
        static let ringLightGradientMultiplier: CGFloat = 1.5
        static let ringLightGradientMinCorderRadius: CGFloat = 22
    }

    private let gradientLocations: [NSNumber] = [0, 0.5, 0.9, 1]

    // MARK: Layers

    private enum LinearGradientPosition: CaseIterable {
        case top
        case left
        case bottom
        case right

        func layer(with gradientLocations: [NSNumber]) -> CAGradientLayer {
            let layer = CAGradientLayer()
            layer.locations = gradientLocations

            switch self {
            case .top:
                layer.startPoint = CGPoint(x: 0, y: 1)
                layer.endPoint = CGPoint(x: 0, y: 0)
            case .left:
                layer.startPoint = CGPoint(x: 1, y: 0)
                layer.endPoint = CGPoint(x: 0, y: 0)
            case .bottom:
                layer.startPoint = CGPoint(x: 0, y: 0)
                layer.endPoint = CGPoint(x: 0, y: 1)
            case .right:
                layer.startPoint = CGPoint(x: 0, y: 0)
                layer.endPoint = CGPoint(x: 1, y: 0)
            }

            return layer
        }
    }

    private enum RadialGradientPosition: CaseIterable {
        case topLeft
        case bottomLeft
        case bottomRight
        case topRight

        func layer(with gradientLocations: [NSNumber]) -> CAGradientLayer {
            let layer = CAGradientLayer()
            layer.type = .radial
            layer.locations = gradientLocations

            switch self {
            case .topLeft:
                layer.startPoint = CGPoint(x: 1, y: 1)
                layer.endPoint = CGPoint(x: 0, y: 0)
            case .bottomLeft:
                layer.startPoint = CGPoint(x: 1, y: 0)
                layer.endPoint = CGPoint(x: 0, y: 1)
            case .bottomRight:
                layer.startPoint = CGPoint(x: 0, y: 0)
                layer.endPoint = CGPoint(x: 1, y: 1)
            case .topRight:
                layer.startPoint = CGPoint(x: 0, y: 1)
                layer.endPoint = CGPoint(x: 1, y: 0)
            }

            return layer
        }
    }

    private lazy var linearGradientLayers: [LinearGradientPosition: CAGradientLayer] = {
        var layers = [LinearGradientPosition: CAGradientLayer]()

        for position in LinearGradientPosition.allCases {
            layers[position] = position.layer(with: gradientLocations)
        }

        return layers
    }()

    private lazy var radialGradientLayers: [RadialGradientPosition: CAGradientLayer] = {
        var layers = [RadialGradientPosition: CAGradientLayer]()

        for position in RadialGradientPosition.allCases {
            layers[position] = position.layer(with: gradientLocations)
        }

        return layers
    }()
}
