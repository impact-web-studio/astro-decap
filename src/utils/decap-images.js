// src/utils/blog-images.js
// This file will create a mapping of all blog images during build time

// Use import.meta.glob to get all blog images
const imageModules = import.meta.glob('../assets/images/blog/**/*.{png,jpg,jpeg,gif,webp,svg}', { eager: true });

// Create a mapping from filename to optimized image
const imageMap = {};

// Process each imported image
for (const path in imageModules) {
  const fileName = path.split('/').pop();
  imageMap[fileName] = imageModules[path].default;
}

export function getBlogImage(imagePath) {
  if (!imagePath || typeof imagePath !== 'string') return null;

  // If it's a full URL or absolute path without the blog path, return as is
  if (!imagePath.includes('/assets/images/blog/')) return imagePath;

  // Extract the filename
  const fileName = imagePath.split('/').pop();

  // Return the pre-imported image or fallback to the original path
  return imageMap[fileName] || imagePath;
}
