

export const EMPTY_ROUTE = '/';
export const BASE_URL = '/v1/';
//export const ID_ROUTE = '/:id'

export const BASE_ROUTES = {
    HEALTH_CHECK: `${BASE_URL  }healthcheck`,
    AUTH: `${BASE_URL  }auth`,
    USERS: `${BASE_URL  }users`,
    ADMIN:`${BASE_URL}admin`,
};
 
export const ROUTES = {
    PING: '/ping',
    TOKEN: '/token',
    OTP_INIT: '/otp/init',
    OTP_VERIFY: '/otp/verify',
    TOKEN_REFRESH: '/token/refresh',
   ADD_VEGETABLE:'/add/vegetable',
    //GET_VEGETABLES:'/vegetables/getAll',
   /* // GET_VEGETABLESBYID:'/vegetables/',
   
 
    GETBY_ID:'/getRegister/:id',
    UPDATE_REGISTER:'/updateRegister',*/
    ADD_MYCART:'/vegetables/addcart',
    GET_MYCART:'/vegetables/getcart',
    CREATE_REGISTER:'/createRegister',
    GET_REGISTER:'/getRegister',
    ADD_PROFILE:'/add-profile',
    GET_PROFILE:'/get-profile',

    CREATE_PRODUCT:'/create',
    GET_ALL_PRODUCTS:'/all',
    GET_CATEGORY_PRODUCTS:'/all/:categoryId',
    SEARCH_PRODUCTS:'/search/:keyword',
    FILTER_PRODUCTS:'/filter-products'
};
