import slugify from 'slugify'

function postTimestamp(item) {
  const d = item.date
  return d instanceof Date && !Number.isNaN(d.getTime()) ? d.getTime() : 0
}

function sortPostsByDateDesc(posts) {
  return [...posts].sort((a, b) => postTimestamp(b) - postTimestamp(a))
}

/* Creating a collection containing all blogposts by filtering based on folder and filetype */
const getAllPosts = (collectionApi) => {
  return sortPostsByDateDesc(collectionApi.getFilteredByGlob('./src/blog/*.md'))
}

// Helper function to handle both single strings and arrays of categories
const getCategories = (item) => {
  const cat = item.data.category;
  if (!cat) return [];
  return Array.isArray(cat) ? cat : [cat];
};

const getCategoryList = (collectionApi) => {
  const catPages = []
  let categories = []
  const blogPosts = collectionApi.getFilteredByGlob('./src/blog/*.md')

  blogPosts.forEach((item) => {
    const itemCategories = getCategories(item);
    categories.push(...itemCategories);
  })

  categories = categories.sort(sortAlphabetically)
  const uniqueCategories = [...new Set(categories)]

  uniqueCategories.forEach((category) => {
    const slug = strToSlug(category);
    
    catPages.push({
      'key': slug,
      'name': category 
    })
  })

  return catPages
}

const getCategorisedPosts = (collectionApi) => {
  const categorisedPosts = {}

  collectionApi.getFilteredByGlob('./src/blog/*.md').forEach(item => {
    const itemCategories = getCategories(item);
      
    itemCategories.forEach(category => {
      if (typeof category !== 'string') return;

      const slug = strToSlug(category)

      if (Array.isArray(categorisedPosts[slug])) {
        categorisedPosts[slug].push(item)
      } else {
        categorisedPosts[slug] = [item]
      }
    })
  })

  for (const slug of Object.keys(categorisedPosts)) {
    categorisedPosts[slug].sort((a, b) => postTimestamp(b) - postTimestamp(a))
  }

  return categorisedPosts
}

/* Creating a collection containing all projects by filtering based on folder and filetype */
const getProject = (collectionApi) => {
  return sortPostsByDateDesc(collectionApi.getFilteredByGlob('./src/project/*.md'))
}

export {
  getAllPosts,
  getCategoryList,
  getCategorisedPosts,
  getProject
}


function strToSlug(str) {
  const options = {
      replacement: "-",
      remove: /[&,+()$~%.'":*?<>{}]/g,
      lower: true,
  }
  
  return slugify(str, options)
}


function sortAlphabetically(a, b) {
  return a.localeCompare(b, "en", { sensitivity: "base" })
}