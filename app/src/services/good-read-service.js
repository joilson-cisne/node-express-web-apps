const goodReadService = () => {
    const getBookById = (id, cb) => {
        cb(null, {description: 'Our description!'});
    };

    return {
        getBookById: getBookById,
    };
};

export default goodReadService;

