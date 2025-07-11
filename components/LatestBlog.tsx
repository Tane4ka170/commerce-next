import React from "react";

import dayjs from "dayjs";
import { Calendar } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { getLatestBlogs } from "@/sanity/queries";

import { Title } from "./ui/text";

const LatestBlog = async () => {
  const blogs = await getLatestBlogs();
  return (
    <div className="mb-10 lg:mb-20">
      <Title className="text-2xl">Latest Blog</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-5">
        {blogs?.map((blog) => (
          <div key={blog?._id} className="rounded-lg overflow-hidden">
            {blog?.mainImage && (
              <Link href={`/blog/${blog?.slug?.current}`}>
                <div className="overflow-hidden rounded-md">
                  <div className="relative w-full aspect-[5/3]">
                    <Image
                      src={urlFor(blog?.mainImage).url()}
                      alt="blog image"
                      fill
                      className="w-full max-h-80 object-cover"
                    />
                  </div>
                  <div className="bg-shop_light_bg p-5">
                    <div className="text-xs flex items-center gap-5">
                      <div className="flex items-center relative group cursor-pointer">
                        {blog?.blogcategories?.map((item, index) => (
                          <p
                            key={index}
                            className="font-semibold text-shop_dark_blue tracking-wider"
                          >
                            {item?.title}
                          </p>
                        ))}
                        <span className="absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-[2px] group-hover:bg-shop_dark_blue hover:cursor-pointer hoverEffect"></span>
                      </div>
                      <p className="flex items-center gap-1 text-lightColor relative group hover:cursor-pointer hover:text-shop_dark_blue hoverEffect">
                        <Calendar size={15} />
                        {dayjs(blog.publishedAt).format("DD MMM YYYY")}
                        <span className="absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-[2px] group-hover:bg-shop_dark_blue hover:cursor-pointer hoverEffect" />
                      </p>
                    </div>
                    <Link
                      href={`/blog/${blog?.slug?.current}`}
                      className="text-base font-semibold tracking-wide mt-5 line-clamp-2 hover:text-shop_dark_blue hoverEffect"
                    >
                      {blog?.title}
                    </Link>
                  </div>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
