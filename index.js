if (!process.env.OTP_URI) {
	process.stderr.write('OTP_URI not set.');
	process.exit(1);
}
const uri = process.env.OTP_URI;

const otp = require('otpauth');
const parsed = otp.URI.parse(uri);

const generated = parsed.generate();
if (!generated) {
	process.exit(1);
}
let output = generated;
if (!output || typeof output !== 'string' || output.length === 0) {
	process.exit(1);
}
if (process.env.OTP_PREFIX) {
	output = process.env.OTP_PREFIX + output;
}
if (process.env.OTP_SUFFIX) {
	output = output + process.env.OTP_SUFFIX;
}
process.stdout.write(output);
