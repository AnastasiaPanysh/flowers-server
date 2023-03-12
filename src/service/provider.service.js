const { getProviderDB, getProviderByIdDB, createProviderDB, updateProviderDB } = require('../repository/provider.repository')

async function getProvider() {
    const provider = await getProviderDB()
    if (!provider.length) throw new Error('provider DB is empty')
    return provider
}

async function getProviderById(id) {
    const provider = await getProviderByIdDB(id)
    if (!provider.length) throw new Error('provider DB is empty')
    return provider
}

async function createProvider(name) {
    const provider = await createProviderDB(name)
    if (!provider.length) throw new Error('provider DB is empty')
    return provider
}

async function updateProvider(id, name) {
    const provider = await updateProviderDB(id, name)
    if (!provider.length) throw new Error('provider DB is empty')
    return provider
}

module.exports = { getProvider, getProviderById, createProvider, updateProvider }