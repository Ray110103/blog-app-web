import { axiosInstance } from "@/lib/axios";
import { Blog } from "@/types/blog";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getBlog = cache(async (slug: string) => {
  const { data } = await axiosInstance.get<Blog>(`/blogs/${slug}`);

  if(!data) return notFound()
    
  return data;
});
