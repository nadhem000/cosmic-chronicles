exports.handler = async function(event, context) {
    const path = event.path;
    const query = event.queryStringParameters;
    
    // Handle lowercase an_news
    if (path.toLowerCase().includes('an_news')) {
        return {
            statusCode: 301,
            headers: {
                'Location': `/AN_news.html${query.article ? `?article=${query.article}` : ''}`,
                'Cache-Control': 'no-cache'
            }
        };
    }
    
    // Default response
    return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Not found' })
    };
};