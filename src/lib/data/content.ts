import { config } from "config"
import {
  Ambassador,
  Blog,
  BlogPage,
  Branding,
  HomePage,
} from "types/contentful"
import { contentfulClient } from "utils/contenful"

export const getBrandings = () => {
  return contentfulClient
    .getEntries<Branding>({
      content_type: "branding",
    })
    .then((res) => {
      return res.items
    })
}

export const getAmbassadors = () => {
  return contentfulClient
    .getEntries<Ambassador>({
      content_type: "ambassador",
    })
    .then((res) => {
      return res.items
    })
}
export const getHomePage = () => {
  return contentfulClient.getEntry<HomePage>(config.NEXT_PUBLIC_HOME_PAGE_ENTRY_ID)
}

export const getBlogs = () => {
  return contentfulClient
    .getEntries<Blog>({
      content_type: "blog",
    })
    .then((res) => {
      return res.items
    })
}

export const getBlogPage = () => {
  console.log(config)
  return contentfulClient.getEntry<BlogPage>(config.NEXT_PUBLIC_BLOG_PAGE_ENTRY_ID)
}
