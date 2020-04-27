async function fetchData(endpoint, opt) {
    const params = {
        api_key: "c68370905690482373cffe0f8a2c046a",
        language: "en-US",
        page: 1,
        ...opt
    }
    const getParams = Object.keys(params).map(param => `${param}=${params[param]}`).join("&")

    const res = await fetch(`https://api.themoviedb.org/3/${endpoint}?${getParams}`);
        return res
            .json()
            .then(res => ({status: true, data: res}))
            .catch(err => ({status: false, data: err}))
    }

    export default fetchData;