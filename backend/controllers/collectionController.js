// List Collections
export const listCollections = async (req, res) => {
  try {
    const data = await req.webflow.collections.list(req.params.siteId);
    res.json(data.collections);
  } catch (error) {
    console.error("Error fetching collections:", error);
    res.status(500).send("Failed to fetch collections");
  }
};

// Get Collection Details
export const getCollection = async (req, res) => {
  try {
    const data = await req.webflow.collections.get(req.params.collectionId);
    res.json(data);
  } catch (error) {
    console.error("Error fetching collection details:", error);
    res.status(500).send("Failed to fetch collection");
  }
};
