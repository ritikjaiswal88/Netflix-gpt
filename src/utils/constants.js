export const LOGO = "https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460";

export const USER_AVETAR = "https://occ-0-2164-395.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXSR25u2XRPTi6AgkfJ4w3FcrNCA316cdzfpppcKJObwDgcSvlN3UJOZ1x-rktlH2aRLsZCgsUwhCso2YeWQDPwDoRFGYsE.png?r=85b";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w300";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_medium.jpg"

export const SUPPORTED_LANGUAGES = [{identifire:"en",name:"english"},
  {identifire:"hindi",name:"Hindi"},{identifire:"spanish",name:"Spanish"}
]

export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

