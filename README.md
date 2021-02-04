# totp-magic
## Usage
```shell
npx totp-magic
```
The tool is configured via environment variables.

name | description
--- | ---
OTP_URI | **required** - URI according to [RFC 4226](https://tools.ietf.org/html/rfc4226)
OTP_PREFIX | **optional** - output before the code
OTP_SUFFIX | **optional** - output after the code

If an error occurs the tool exits with status code 1.

## Output
The following info is written to stdout without a new line separator:
```
{prefix}{code}{suffix}
```

## History
### 0.1.0 - initial release
* basic functionality established
