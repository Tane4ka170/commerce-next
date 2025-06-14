import React from "react";
import { Title } from "./ui/text";
import { getLatestBlogs } from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const LatestBlog = async () => {
  const blogs = await getLatestBlogs();
  return (
    <div className="mb-10 lg:mb-20">
      <Title className="text-2xl">Latest Blog</Title>
      <div>
        {blogs?.map((blog) => (
          <div key={blog?._id}>
            {blog?.mainImage && (
              <Image
                src={urlFor(blog?.mainImage).url()}
                alt="blog image"
                width={500}
                height={300}
                className="w-full max-h-80 object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
