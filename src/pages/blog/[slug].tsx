import { Entry } from "contentful"
import { useRouter } from "next/router"
import React, { ReactElement, useEffect, useState } from "react"
import { Blog } from "types/contentful"
import { beautifyDate } from "utils"
import { contentfulClient } from "utils/contenful"
import LoadScripts from "utils/LoadScripts"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import Layout from "@modules/layout/templates"

function BlogSingle() {
  const { query } = useRouter()
  const { slug } = query
  const [blog, setBlog] = useState<Entry<Blog> | null>(null)
  
  useEffect(() => {
    if (slug) {
      contentfulClient
        .getEntries<Blog>({
          content_type: "blog",
          "fields.slug": slug,
        })
        .then((res) => {
          console.log(res.items)
          if (res.items.length > 0) {
            const _blog = res.items[0]
            setBlog(_blog)
          }
        })
    }
  }, [slug])

  return (
    <>
      <LoadScripts
        srcs={[
          "/assets/scripts/plugins.min.js",
          "/assets/scripts/script.js",
          // "/assets/scripts/pages/index.js",
        ]}
      />
      {blog && (
        <div
          className="vlt-hero-title-holder jarallax"
          style={{
            backgroundImage: `url("${
              blog
                ? blog.fields.thumbnail.fields.file.url
                : "/assets/img/blog/1.jpg"
            }")`,
          }}
        >
          <div className="vlt-hero-title-inner">
            <h1 className="vlt-hero-title">{blog && blog.fields.title}</h1>
            <div className="vlt-hero-meta">
              <div className="vlt-post-meta">
                <span className="vlt-post-author">
                  <i className="fa fa-fw fa-user" />
                  <a href="#">VLThemes</a>
                </span>
                <span className="vlt-post-date">
                  <i className="fa fa-fw fa-clock-o" />
                  {blog && beautifyDate(blog.sys.createdAt)}
                </span>
                <span className="vlt-post-comments">
                  <i className="fa fa-fw fa-comment-o" />
                  <a className="no-anims" href="#">
                    2 Comments
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* /.vlt-hero-title-holder */}
      <main className="vlt-main-holder vlt-main-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <div className="vlt-post-content vlt-post-single">
                {blog && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: documentToHtmlString(blog.fields.description),
                    }}
                  ></div>
                )}
                <div className="vlt-post-footer">
                  <div className="vlt-post-share">
                    <a className="twitter" target="_blank" href="#">
                      <i className="fa fa-fw fa-twitter" />
                    </a>
                    <a className="facebook" target="_blank" href="#">
                      <i className="fa fa-fw fa-facebook" />
                    </a>
                    <a className="linkedin" target="_blank" href="#">
                      <i className="fa fa-fw fa-linkedin" />
                    </a>
                    <a className="pinterest" target="_blank" href="#">
                      <i className="fa fa-fw fa-pinterest" />
                    </a>
                  </div>
                  <div className="vlt-post-tags">
                    <a href="#" rel="tag">
                      Architect
                    </a>
                    <a href="#" rel="tag">
                      Design
                    </a>
                    <a href="#" rel="tag">
                      News
                    </a>
                  </div>
                </div>
                {/* /.vlt-post-footer */}
              </div>
              {/* /.vlt-post-content vlt-post-single */}
              <hr />
              <div className="vlt-comments" id="comments">
                <div className="row">
                  <div className="col-md-6">
                    <div className="vlt-comments-holder">
                      <h5 className="vlt-comment-title">Comments</h5>
                      <p className="vlt-comments-number">2 Comments</p>
                      <ul className="vlt-comments-list">
                        <li className="vlt-comment-item">
                          <div className="comment">
                            <div className="vlt-comment-left">
                              <div className="vlt-comment-avatar">
                                <img
                                  alt=""
                                  src="/assets/img/blog/avatar-1.gif"
                                />
                              </div>
                            </div>
                            <div className="vlt-comment-content">
                              <div className="vlt-comment-header-holder">
                                <div className="vlt-comment-header">
                                  <h6 className="vlt-comment-author comment-author">
                                    Minh Jayden
                                  </h6>
                                  <div className="vlt-comment-date">
                                    July 21, 2017
                                  </div>
                                </div>
                              </div>
                              <div className="vlt-comment-text">
                                <p>Really thought out! This is new school.</p>
                                <a className="comment-reply-link" href="#">
                                  Reply
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* /.comment */}
                          <ul className="children">
                            <li className="vlt-comment-item">
                              <div className="comment">
                                <div className="vlt-comment-left">
                                  <div className="vlt-comment-avatar">
                                    <img
                                      alt=""
                                      src="/assets/img/blog/avatar-2.jpg"
                                    />
                                  </div>
                                </div>
                                <div className="vlt-comment-content">
                                  <div className="vlt-comment-header-holder">
                                    <div className="vlt-comment-header">
                                      <h6 className="vlt-comment-author">
                                        Veles Ludwig
                                      </h6>
                                      <div className="vlt-comment-date">
                                        July 22, 2017
                                      </div>
                                    </div>
                                  </div>
                                  <div className="vlt-comment-text">
                                    <p>How do you make this? Photoshop?</p>
                                    <a className="comment-reply-link" href="#">
                                      Reply
                                    </a>
                                  </div>
                                </div>
                              </div>
                              {/* /.comment */}
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/*/.vlt-comments-holder*/}
                  </div>
                  <div className="col-md-6">
                    <div className="vlt-comment-form-holder">
                      <div className="comment-respond">
                        <h5
                          className="vlt-comment-reply-title"
                          id="reply-title"
                        >
                          Leave a comment
                        </h5>
                        <form className="vlt-comment-form">
                          <p className="logged-in-as">
                            <a href="#">Logged in as VLThemes</a>.{" "}
                            <a href="#">Log out?</a>
                          </p>
                          <div className="vlt-form-group">
                            <textarea
                              id="comment"
                              name="comment"
                              rows={8}
                              className="vlt-form-control"
                              placeholder="Comment"
                              defaultValue={""}
                            />
                          </div>
                          <p className="form-submit">
                            <button
                              type="submit"
                              className="vlt-btn vlt-btn-primary"
                            >
                              Post Comment
                            </button>
                          </p>
                        </form>
                      </div>
                      {/* /.comment-respond */}
                    </div>
                    {/* /.vlt-comments-form-holder */}
                  </div>
                </div>
              </div>
              {/* /.vlt-comments */}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

BlogSingle.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default BlogSingle
