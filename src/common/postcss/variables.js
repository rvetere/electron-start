const flatten = variables => {
  const flattened = {}
  Object.keys(variables).forEach(key => {
    const value = variables[key]
    if (typeof value === 'object') {
      Object.keys(value).forEach(valueKey => {
        flattened[key + valueKey.charAt(0).toUpperCase() + valueKey.slice(1)] = value[valueKey]
      })
    }
  })
  return flattened
}

const prefix = (prefix, variables) => {
  const transformed = {}
  Object.keys(variables).forEach(key => {
    transformed[prefix + (key.charAt(0).toUpperCase() + key.slice(1))] = variables[key]
  })
  return transformed
}

const variables = {}

module.exports = variables
