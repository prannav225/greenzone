import { useMemo } from "react";
import {
  DESTINATION_COLLECTIONS,
  JOURNEY_METADATA,
} from "../data/destinationsData";

export function useDestinationFilter(activeFilter) {
  return useMemo(() => {
    if (activeFilter === "All") return DESTINATION_COLLECTIONS;

    return DESTINATION_COLLECTIONS.map((collection) => ({
      ...collection,
      destinations: collection.destinations.filter((dest) => {
        const meta = JOURNEY_METADATA[dest.id] || {};
        const tags = meta.tags || [];
        const isOneDay =
          meta.duration?.includes("1 Day") ||
          meta.duration?.includes("1–2 Days");

        if (activeFilter === "Heritage")
          return collection.category.includes("Heritage");
        if (activeFilter === "Trekking")
          return collection.category.includes("Mountain");
        if (activeFilter === "Coastal")
          return collection.category.includes("Coastal");
        if (activeFilter === "Spiritual")
          return collection.category.includes("Spiritual");
        if (activeFilter === "1-Day Circuits") return isOneDay;
        return tags.includes(activeFilter);
      }),
    })).filter((collection) => collection.destinations.length > 0);
  }, [activeFilter]);
}
