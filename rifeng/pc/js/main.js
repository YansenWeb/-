requirejs.config({
    baseUrl: 'js',
    paths: {
        "jquery": "base/jquery-1.9.1.min",
        'swiper': 'base/swiper.min',
        'idangerous': 'base/idangerous.swiper.min',
        'bxslider': 'base/jquery.bxslider',
        "scrollnews": 'base/breakingnews',
        "imagezoom": 'base/jquery.imagezoom.min',
        "area": 'base/area'
    },
    shim: {
        "bxslider": {
            deps: ["jquery"],
            exports: "bxslider"
        }
    }
});