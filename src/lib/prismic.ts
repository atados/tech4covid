import Prismic from 'prismic-javascript'

const REPOSITORY = process.env.CMS_PRISMIC_REPOSITORY_NAME
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.CMS_PRISMIC_API_TOKEN
export const API_LOCALE = process.env.CMS_PRISMIC_REPOSITORY_LOCALE

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

interface FetchAPIOptions {
  previewData?: any
  variables?: any
}

async function fetchAPI(
  query,
  { previewData, variables }: FetchAPIOptions = {},
) {
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    },
  )

  if (res.status !== 200) {
    const text = await res.text()
    console.error(text)
    throw new Error(`Failed to fetch API: ${text}`)
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllProjectsWithSlug() {
  const data = await fetchAPI(`
    {
      allProjects {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `)
  return data?.allProjects?.edges
}

export async function getAllProjectsForHome(previewData) {
  const data = await fetchAPI(
    `
    query {
      allProjetos(sortBy: meta_firstPublicationDate_DESC) {
        edges {
          node {
            name
            description
            _meta {
              uid
            }
          }
        }
      }
    }
  `,
    { previewData },
  )

  return data.allProjetos.edges
}

export async function getHome(previewData) {
  const data = await fetchAPI(
    `
    query {
      allHomes (lang: "pt-br", first: 1) {
        edges {
          node {
            title
            subtitle
            projects_title
            subtitulo_dos_projetos
            manifesto
            manifesto_title
            _meta {
              id
            }
            button_link {
              ...on _ExternalLink {
                url
              }
              _linkType
            }
          }
        }
      }
      allProjetos(sortBy: meta_firstPublicationDate_DESC) {
        edges {
          node {
            name
            description
            _meta {
              uid
            }
          }
        }
      }
    }
  `,
    { previewData },
  )

  return {
    projects: data.allProjetos.edges.map((edge) => edge.node),
    page: data.allHomes.edges[0].node,
  }
}

export const getPaths = async (): Promise<string[]> => {
  const data = await fetchAPI(
    `
    query {
      page: allText_pages {
        edges {
          node {
            slug
          }
        }
      }
    }
  `,
  )

  return data.page.edges.map((edge) => edge.node.slug)
}

export const getPage = async (slug: string) => {
  const data = await fetchAPI(
    `
    query ($slug: String!) {
      page: allText_pages (where: { slug: $slug }) {
        edges {
          node {
            slug
            title
            content
            _linkType
          }
        }
      }
      home: allHomes (lang: "pt-br", first: 1) {
        edges {
          node {
            button_link {
              ...on _ExternalLink {
                url
              }
              _linkType
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        slug,
      },
    },
  )

  return {
    page: data.page.edges[0].node,
    joinLink: data.home.edges[0].node.button_link.url,
  }
}

export interface HomePageData {
  title: {}
  subtitle: {}
  projects_title: {}
  subtitulo_dos_projetos: {}
  manifesto_title: {}
  manifesto: {}
  _meta: {
    id: string
  }
  button_link: {
    url: string
    _linkType: string
  }
}

export interface TextPageData {
  title: {}
  content: {}
  slug: string
}

export interface ProjectData {
  name: {}
  description: {}
  _meta: {
    uid: string
  }
}
