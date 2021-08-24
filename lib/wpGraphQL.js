const API_URL = process.env.WP_API_URL;

async function fetchAPI(query, { variables } = {}) {
	// Set up some headers to tell the fetch call
	// that this is an application/json type
	const headers = { "Content-Type": "application/json" };

	// build out the fetch() call using the API_URL
	// environment variable pulled in at the start
	// Note the merging of the query and variables
	const res = await fetch(API_URL, {
		method: "POST",
		headers,
		body: JSON.stringify({ query, variables }),
	});

	// error handling work
	const json = await res.json();
	if (json.errors) {
		console.log(json.errors);
		console.log("error details", query, variables);
		throw new Error("Failed to fetch API");
	}
	return json.data;
}

// Notice the 'export' keyword here. We'll be calling this function
// directly in our blog/index.js page, so it needs to be exported

export async function getAllArticles(num = 1000) {
	const data = await fetchAPI(
		`
    query AllPosts {
      posts(where: {categoryName: "articles", orderby: {field: DATE, order: DESC}}, first: ${num}) {
        edges {
          node {
            id
            date
            slug
            title
            uri
            extraPostInfo {
              authorExcerpt
              mainCategory
              subCategory
              thumbImage {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `
	);

	return data?.posts;
}

export async function getFeaturedArticle(preview) {
	const data = await fetchAPI(
		`
    query FeaturedArticle{
      posts(where: {categoryName: "Featured Article"}, last: 1) {
        edges {
          node {
            id
            date
            slug
            title
            uri
            extraPostInfo {
              authorExcerpt
              thumbImage {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `
	);

	return data?.posts;
}

export async function getAllWorkouts(num = 1000) {
	const data = await fetchAPI(
		`
    query AllPosts {
      posts(where: {categoryName: "workouts", orderby: {field: DATE, order: DESC}}, first: ${num}) {
        edges {
          node {
            id
            date
            slug
            title
            uri
            extraPostInfo {
              authorExcerpt
              mainCategory
              subCategory
              thumbImage {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `
	);

	return data?.posts;
}

export async function getFeaturedWorkout(preview) {
	const data = await fetchAPI(
		`
    query FeaturedWorkout{
      posts(where: {categoryName: "Featured Workout"}, last: 1) {
        edges {
          node {
            id
            date
            slug
            title
            uri
            extraPostInfo {
              authorExcerpt
              thumbImage {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `
	);

	return data?.posts;
}

export async function getLatestCoreArticle(preview) {
	const data = await fetchAPI(
		`
    query LatestCoreArticle{
      posts(where: {categoryName: "Core"}, last: 1) {
        edges {
          node {
            id
            date
            slug
            title
            uri
            extraPostInfo {
              authorExcerpt
              thumbImage {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `
	);

	return data?.posts;
}

export async function getLatestFatBurnerArticle(preview) {
	const data = await fetchAPI(
		`
    query LatestFatBurnerArticle{
      posts(where: {categoryName: "Fat Burner"}, last: 1) {
        edges {
          node {
            id
            date
            slug
            title
            uri
            extraPostInfo {
              authorExcerpt
              thumbImage {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `
	);

	return data?.posts;
}

export async function getAllPostsWithSlug() {
	const data = await fetchAPI(
		`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `
	);
	return data?.posts;
}

export async function getPost(slug) {
	const data = await fetchAPI(
		`
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
      }
    }
  `,
		{
			variables: {
				id: slug,
				idType: "SLUG",
			},
		}
	);

	return data;
}
