import getWebflowSdk from '../utils/getWebflowSdk';

export const SITE_DATE = async () => {
  const wf = await getWebflowSdk();
  if (!wf) return [];

  const sites = await wf.sites.list();
  if (sites && sites.sites?.length) return sites.sites.at(0);
  return [];
};

export const COLLECTIONS_DATE = async (id: string) => {
  const wf = await getWebflowSdk();
  if (!wf) return [];

  const collections = await wf.collections.list(id);
  if (collections && collections.collections?.length) return collections.collections;

  return [];
};

export const COLLECTION_INFO = async (id: string) => {
  const wf = await getWebflowSdk();
  if (!wf) return [];

  const collection = await wf.collections.get(id);
  if (collection) return collection;

  return [];
};

export const COLLECTION_DATE = async (id: string) => {
  const wf = await getWebflowSdk();
  if (!wf) return [];

  const posts = await wf.collections.items.listItems(id);
  if (posts) return posts.items;

  return [];
};

export const COLLECTION_ITEM = async (collection_id: string, item_id: string) => {
  const wf = await getWebflowSdk();
  if (!wf) return [];

  const post = await wf.collections.items.getItem(collection_id, item_id);
  if (post) return post;

  return [];
};
