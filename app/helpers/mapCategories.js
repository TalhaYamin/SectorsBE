// Helper function to map the categories recursively
const mapCategories = (categories) => {
    return categories?.map((category) => {
        return {
            sectorName: category.sectorName,
            value: category.value,
            categories: category.categories ? mapCategories(category.categories) : undefined,
        };
    });
};

module.exports = {
    mapCategories
};
