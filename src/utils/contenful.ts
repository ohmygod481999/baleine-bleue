import { config } from "config"
import * as contenful from "contentful"

export const contentfulClient  = contenful.createClient({
    space: config.CONTENTFUL_SPACE_ID || "",
    accessToken: config.CONTENTUL_ACCESS_TOKEN || ""
})