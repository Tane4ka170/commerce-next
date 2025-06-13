import { sanityFetch } from "../lib/live";
import { BRANDS_QUERY, LATEST_BLOG_QUERY } from "./query";

const getCategories = async (quantity?: number) => {
  try {
    const query = quantity
      ? `*[_type == 'category'] | order(name asc) [0...$quantity] {
          ...,
          "productCount": count(*[_type == "product" && references(^._id)])
        }`
      : `*[_type == 'category'] | order(name asc) {
          ...,
          "productCount": count(*[_type == "product" && references(^._id)])
        }`;
    const { data } = await sanityFetch({
      query,
      params: quantity ? { quantity } : {},
    });
    return data;
  } catch (error) {
    console.log("Couldn't load categories", error);
    return [];
  }
};

const getAllBrands = async () => {
  try {
    const { data } = await sanityFetch({
      query: BRANDS_QUERY,
    });
    return data ?? [];
  } catch (error) {
    console.log("Failed to retrieve brand list", error);
    return [];
  }
};

const getLatestBlogs = async () => {
  try {
    const { data } = await sanityFetch({
      query: LATEST_BLOG_QUERY,
    });
    return data ?? [];
  } catch (error) {
    console.log("Error loading latest blog posts", error);
    return [];
  }
};

export { getCategories, getAllBrands, getLatestBlogs };
