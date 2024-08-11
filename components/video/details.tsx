import { fetchDetails } from "@/lib/data";
import React, { useEffect, useState } from "react";

interface DetailsProps {
  id: number;
  type: string;
}

interface SearchResult {
  original_title?: any;
  original_name?: any;
  release_date?: any;
  first_air_date?: any;
  overview: any;
  production_companies: any;
}

const Details: React.FC<DetailsProps> = ({ id, type }) => {
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null);
  useEffect(() => {
    fetchDetails(id, type)
      .then((response) => {
        setSearchResults(response);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }, [id, type]);

  return (
    <div>
      {searchResults && (
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <div className="rounded bg-slate-500 p-2">
            {searchResults.original_title || searchResults.original_name}
          </div>
          <div className="rounded bg-slate-500 p-2">
            {searchResults.release_date || searchResults.first_air_date}
          </div>
          <div className="text-center">{searchResults.overview}</div>
          <div>
            {searchResults.production_companies.map((item: any) => (
              <div key={item.id}>
                <div className="text-center">
                  {item.name}-{item.origin_country}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
