export default async ({ store }) => {
  await store.dispatch('fetchAllProducts')
  await store.dispatch('fetchAllCollections')
}