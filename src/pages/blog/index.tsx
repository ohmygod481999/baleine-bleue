import Layout from "@modules/layout/templates"
import { Entry, Asset } from "contentful"
import Link from "next/link"
import React, { ReactElement, useEffect, useState } from "react"
import { Blog, BlogPage } from "types/contentful"
import { beautifyDate } from "utils"
import { contentfulClient } from "utils/contenful"
import LoadScripts from "utils/LoadScripts"

function BlogNextPage() {
  const [blogs, setBlogs] = useState<Entry<Blog>[]>([])
  const [blogPage, setBlogPage] = useState<Entry<BlogPage> | null>(null)
  useEffect(() => {
    contentfulClient
      .getEntries<Blog>({
        content_type: "blog",
      })
      .then((res) => {
        setBlogs(res.items)
      })

    contentfulClient.getEntry<BlogPage>("aukXbexcB87WiUjxw3pFy").then((res) => {
      setBlogPage(res)
    })
  }, [])

  return (
    <>
      <LoadScripts
        srcs={[
          "/assets/scripts/plugins.min.js",
          "/assets/scripts/script.js",
          // "/assets/scripts/pages/index.js",
        ]}
      />
      {blogPage && (
        <div
          className="vlt-hero-title-holder jarallax"
          style={{
            backgroundImage: `url("${
              blogPage?.fields.thumbnail.fields.file.url ||
              "/assets/img/index.jpg"
            }")`,
          }}
        >
          <div className="vlt-hero-title-inner">
            <h1 className="vlt-hero-title">{blogPage?.fields.pageTitle}</h1>
            <p className="vlt-hero-subtitle">
              Read the latest news and stories.
            </p>
          </div>
        </div>
      )}
      {/* /.vlt-hero-title-holder */}
      <main className="vlt-main-holder vlt-main-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="vlt-postlist-holder">
                <div
                  className="vlt-postlist  cubeportfolio clearfix row"
                  //   id="cubeportfolio"
                >
                  {blogs.map((blog, i) => (
                    <article
                      key={i}
                      className="vlt-post-masonry cbp-item col-md-4 mb-5"
                    >
                      <div className="vlt-post-inner">
                        <div className="vlt-post-thumbnail">
                          <a href="#">
                            <img
                              src={blog.fields.thumbnail.fields.file.url}
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="vlt-post-content">
                          <div className="vlt-post-meta">
                            <span className="vlt-post-author">
                              <i className="fa fa-fw fa-user" />
                              <a href="#">VLThemes</a>
                            </span>
                            <span className="vlt-post-date">
                              <i className="fa fa-fw fa-clock-o" />
                              {beautifyDate(blog.sys.createdAt)}
                            </span>
                          </div>
                          <h3 className="vlt-post-title">
                            <Link href={`/blog/${blog.fields.slug}`}>
                              <a>{blog.fields.title}</a>
                            </Link>
                          </h3>
                          <div className="vlt-post-excerpt">
                            Illum quando primis mel at. Ea vel melius utamur, te
                            vel debet dolorem. Quo amet senserit mnesarchum an.
                            Legere consequuntur ...
                          </div>
                          <div className="vlt-post-footer">
                            <Link href={`/blog/${blog.fields.slug}`}>
                              <a className="vlt-link reverse">Read More</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                {/*/.vlt-postlist .vlt-postlist-standard .cubeportfolio .clearfix*/}
                <nav className="vlt-pagination-numeric">
                  <span className="page-numbers current">1</span>
                  <a className="page-numbers" href="#">
                    2
                  </a>
                  <a className="next page-numbers" href="#">
                    Next
                  </a>
                </nav>
                {/* /.vlt-pagination-numeric */}
              </div>
              {/* /.vlt-postlist-holder */}
              <div className="vlt-postlist-recent-popular">
                <hr />
                <div className="vlt-postlist-recent-popular-title">
                  <h5>Popular News</h5>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <article className="vlt-post-recent-popular">
                      <div className="vlt-post-inner">
                        <span className="vlt-post-reading-time">
                          1 min read
                        </span>
                        <h3 className="vlt-post-title">
                          <a href="blog-post-single.html">
                            Oddly Satisfying Isometric Art
                          </a>
                        </h3>
                        <div className="vlt-post-meta">
                          <a href="#">News</a>
                        </div>
                      </div>
                    </article>
                    {/* /.vlt-post-recent-popular */}
                  </div>
                  <div className="col-md-3">
                    <article className="vlt-post-recent-popular">
                      <div className="vlt-post-inner">
                        <span className="vlt-post-reading-time">
                          1 min read
                        </span>
                        <h3 className="vlt-post-title">
                          <a href="blog-post-single.html">
                            Courtyard House on a River
                          </a>
                        </h3>
                        <div className="vlt-post-meta">
                          <a href="#">Design</a>
                        </div>
                      </div>
                    </article>
                    {/* /.vlt-post-recent-popular */}
                  </div>
                  <div className="col-md-3">
                    <article className="vlt-post-recent-popular">
                      <div className="vlt-post-inner">
                        <span className="vlt-post-reading-time">
                          1 min read
                        </span>
                        <h3 className="vlt-post-title">
                          <a href="blog-post-single.html">
                            Illusion Alphabet Bookmarks
                          </a>
                        </h3>
                        <div className="vlt-post-meta">
                          <a href="#">Branding</a>
                        </div>
                      </div>
                    </article>
                    {/* /.vlt-post-recent-popular */}
                  </div>
                  <div className="col-md-3">
                    <article className="vlt-post-recent-popular">
                      <div className="vlt-post-inner">
                        <span className="vlt-post-reading-time">
                          1 min read
                        </span>
                        <h3 className="vlt-post-title">
                          <a href="blog-post-single.html">
                            Cool Down in Cabo at the Drift San Jose
                          </a>
                        </h3>
                        <div className="vlt-post-meta">
                          <a href="#">News</a>
                        </div>
                      </div>
                    </article>
                    {/* /.vlt-post-recent-popular */}
                  </div>
                </div>
              </div>
              {/* /.vlt-postlist-recent-popular */}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

BlogNextPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default BlogNextPage
