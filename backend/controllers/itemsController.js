// List collection items
export const listItems = async (req, res) => {
  try {
    const data = await req.webflow.collections.items.listItems(
      req.params.collectionId
    );
    res.json(data.items);
  } catch (error) {
    console.error("Error fetching collection items:", error);
    res.status(500).send("Failed to fetch collection items");
  }
};
