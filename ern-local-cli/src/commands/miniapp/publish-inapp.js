import { compatCheck } from '../../util/compatibility.js'
import explodeNativeAppSelector from '../../util/explodeNapSelector.js';
import { publishInApp } from '../../util/miniapp.js';

exports.command = 'publish-inapp <napSelector>'
exports.desc = 'Publish mini app to given native app'

exports.builder = {}

exports.handler = function (argv) {
  publishInApp(...explodeNativeAppSelector(argv.napSelector));
}