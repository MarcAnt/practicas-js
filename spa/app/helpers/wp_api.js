//Est archivo permite cargar variables para poder consultar en la api de wordpress


const NAME = "malvestida",
DOMAIN = `https://${NAME}.com`,
SITE = `${DOMAIN}/wp-json`, 
API_WP = `${SITE}/wp/v2`,
PER_PAGE = 9,
POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`, //Cuando tiene ?_embed trae más información
POST = `${API_WP}/posts`, //Cuando tiene ?_embed trae más información
SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`, 
PAGES = `${API_WP}/pages`;  

let page = 1; 	

export default { 

	NAME,
	DOMAIN,
	SITE,
	API_WP,
	PER_PAGE,
	POSTS, 
	POST,
	SEARCH,
	PAGES,
	page

}