## Prerequesites

1. Install Xcode tools
   ```sh
   xcode-select --install
   ```
2. Install need [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) and [SwiftLint](https://github.com/realm/SwiftLint)
   ```sh
   brew install swiftformat swiftlint
   ```

## Committing

Before committing, make sure that you're not violating the Swift codestyles. To do that, run the following command:

```bash
yarn check:ios
```

This will also try to automatically fix any errors by re-formatting the Swift code.
