import http from 'http';
import {Parser} from 'xml2js';

let parser = new Parser({explicitArray: false});

const goodReadService = () => {
    const getBookById = (id, cb) => {
        const options = {
            host: 'www.goodreads.com',
            path: `/book/show/${id}?format=xml&key=<GOODREADS_API_KEY>`,
        };

        const callback = (response) => {
            let output = '';

            response.on('data', (chunk) => {
                output += chunk;
            });

            response.on('end', () => {
                parser.parseString(output, (err, result) => {
                    cb(null, result.GoodreadsResponse.book);
                });
            });
        };

        http.request(options, callback).end();
    };

    return {
        getBookById: getBookById,
    };
};

export default goodReadService;

