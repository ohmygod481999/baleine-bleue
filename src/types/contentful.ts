import { Asset, EntryFields, RichTextContent } from "contentful"
import { Document } from "@contentful/rich-text-types"

export interface Blog {
  title: string
  thumbnail: Asset
  description: Document
  slug: string
}

export interface BlogPage {
  pageTitle: string
  thumbnail: Asset
}

export interface Collection {
  id: string
  description: Document
}

export interface Branding {
  name: string
  image: Asset
}
export interface Ambassador {
  name: string
  image: Asset
}

export interface HomePage {
  title: string
  name: string
  description: string
  banner: Asset
}
