import React from "react"
import { Helmet } from "react-helmet"

// update this once we have custom URL configured
const BASE_URL = "http://localhost:3000" 
// const BASE_URL = "https://storysquad.app"

export const SEO = ({
    title = "",
    description = "Where your story comes alive, a story writing contest website for everyone.",
    path = "",
    meta = [],
    }) => {
    return (
        <Helmet>
            <title>{title ? `${title} | Story Squad Mini` : "Story Squad Mini"}</title>
            <meta property="og:title" content={title} />
            <meta name="twitter:title" content={title} />

            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta name="twitter:description" content={description} />

            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary" />

            <meta name="twitter:creator" content="@story_hq" />

            <meta property="og:image" content={BASE_URL + "/logo512.png"} />
            <meta name="twitter:image" content={BASE_URL + "/logo512.png"} />

            {meta.map((props, i) => <meta key={i} {...props} />)}

            <link rel="canonical" href={BASE_URL + path} />
        </Helmet>
    )
}