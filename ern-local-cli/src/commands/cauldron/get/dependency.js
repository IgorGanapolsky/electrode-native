// @flow

import {
  NativeApplicationDescriptor
} from 'ern-util'
import {
  cauldron
} from 'ern-core'
import utils from '../../../lib/utils'

exports.command = 'dependency <descriptor>'
exports.desc = 'Get all the native dependencies of a given native application'

exports.builder = function (yargs:any) {
  return yargs.epilog(utils.epilog(exports))
}

exports.handler = async function ({
  descriptor
} : {
  descriptor: string
}) {
  await utils.logErrorAndExitIfNotSatisfied({
    isCompleteNapDescriptorString: descriptor,
    napDescriptorExistInCauldron: descriptor
  })

  const napDescriptor = NativeApplicationDescriptor.fromString(descriptor)
  const dependencies = await cauldron.getNativeDependencies(napDescriptor)
  for (const dependency of dependencies) {
    log.info(dependency.toString())
  }
}