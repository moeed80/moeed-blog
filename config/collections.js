import slugify from 'slugify'

/* Creating a collection containing all blogposts by filtering based on folder and filetype */
const getAllPosts = (collectionApi) => {
  return collectionApi.getFilteredByGlob('./src/blog/*.md')
  .reverse()
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

  return categorisedPosts
}

export {
  getAllPosts,
  getCategoryList,
  getCategorisedPosts
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