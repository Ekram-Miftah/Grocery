import React from "react";

const FilterPanal = () => {
  const FilterPanel = ({categories, category, minPrice, maxPrice, updateFilter,
    clearFilters, hasFilters} : any) => {
    
      const categoriesWithAll = [{slug: "", name: "All Categories"}, ...categories]
    
      return (
        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-app-green mb-3">Categories</
            h3>
          </div>
        </div>
      )
};

export default FilterPanal;
