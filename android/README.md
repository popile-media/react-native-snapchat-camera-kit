## Prerequesites

1. Install ktlint
   ```sh
   brew install ktlint
   ```

## Committing

Before committing, make sure that you're not violating the Kotlin codestyles. To do that, run the following command:

```bash
yarn check:android
```

This will also try to automatically fix any errors by re-formatting the Kotlin code.
