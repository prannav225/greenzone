/**
 * IMAGE OPTIMIZATION UTILITY
 * Standardizes cloud image transformations across the project.
 */

export const optimizeImage = (url, width = 1200, quality = 75) => {
  if (!url) return url;
  if (typeof url !== "string") return url;

  // Unsplash Optimization
  if (url.includes("images.unsplash.com")) {
    if (url.includes("?")) {
      // Replace existing parameters or append new ones
      return url
        .replace(/w=\d+/, `w=${width}`)
        .replace(/q=\d+/, `q=${quality}`)
        .replace(/auto=[^&]+/, "auto=format");
    }
    return `${url}?auto=format&fit=crop&q=${quality}&w=${width}`;
  }

  return url;
};
