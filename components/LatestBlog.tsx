import React from "react";
import { Title } from "./ui/text";
import { getLatestBlogs } from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const LatestBlog = async () => {
  const blogs = await getLatestBlogs();
  return (
    <div className="mb-10 lg:mb-20">
      <Title className="text-2xl">Latest Blog</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-5">
        {blogs?.map((blog) => (
          <div key={blog?._id}>
            {blog?.mainImage && (
              <Link href={`/blog/${blog?.slug?.current}`}>
                <Image
                  src={urlFor(blog?.mainImage).url()}
                  alt="blog image"
                  width={500}
                  height={300}
                  className="w-full max-h-80 object-cover"
                />
              </Link>
            )}
            <div>
              <div>
                <div>{blog?.blogcategories?.map()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
