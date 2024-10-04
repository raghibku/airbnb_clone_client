const exampleProperty = [
    {
        property_name: "Cate's Villa",  //random name  
        property_images: ["/public/images/CatesVilla1.jpg", "/public/images/CatesVilla2.jpg"],
        country_location: "USA",  // can be between options->[USA,Canada,UK]
        property_location: "132/5 Cloverfield Lane, Texas", //random location of country location
        vacancy_start: "10/22/2024", // starting from october,5,2024
        vacancy_end: "10/29/2024", //later than free to chekin
        max_adult: 10, //int in range 2-20
        max_baby: 5,//int in range 0-10
        max_pet: 1,//int in range 0-5
        tags: ["country_side", "lake_front", "amazing_views"], //can have multiple tags from options->[top_cities,country_side ,top_of_the_world ,omg ,amazing_views ,bed_n_breakfast ,caves ,rooms ,islands , beach_front , lake_front]
        type_of_place: "room", //can be between options->[room,entire_home]
        price: 1700, //can be in range of (100-10000)
        property_type: "house", // can be between[ house,apartment, guest_house, hotel]
    }
]
const examplePropertyQueryConstraints = [
    {
        country_location: country_location,  //by default , all
        vacancy_start: vacancy_start <= chekin_date, //by default checkin date 10/5/24
        vacancy_end: vacancy_end >= checkout_date, //by default checkout date 10/6/25
        no_of_adult: 1 < no_of_adult <= max_adult, //by default max_adult =20
        no_of_baby: no_of_baby <= max_baby, //by default max_baby =10
        no_of_pet: no_of_pet <= max_pet, //by default max_pets 5
        search_tag: tags.include(search_tag),//by default search tag is none
        search_type_of_place: type_of_place.include(search_type_of_place),//by default all
        price: min_price <= price <= max_price, // by default min price 1000 max_price10000
        search_property_type: property_type.include(search_property_type), //by default return all
    }
]

const examplePropertyQuery = [
    {

    }
]
// [top_cities,country_side ,top_of_the_world ,omg ,amazing_views ,bed_n_breakfast ,caves ,rooms ,islands , beach_front , lake_front]


const allTags = [
    {
        "title": "Top Cities",
        "title_tag": "top_cities",
        "image_src": "/public/icons/top_cities.jpg"
    },
    {
        "title": "Countryside",
        "title_tag": "country_side",
        "image_src": "/public/icons/country_side.jpg"
    },
    {
        "title": "Top of the World",
        "title_tag": "top_of_the_world",
        "image_src": "/public/icons/top_of_the_world.jpg"
    },
    {
        "title": "OMG",
        "title_tag": "omg",
        "image_src": "/public/icons/omg.jpg"
    },
    {
        "title": "Amazing Views",
        "title_tag": "amazing_views",
        "image_src": "/public/icons/amazing_views.jpg"
    },
    {
        "title": "Bed & Breakfast",
        "title_tag": "bed_n_breakfast",
        "image_src": "/public/icons/bed_n_breakfast.jpg"
    },
    {
        "title": "Caves",
        "title_tag": "caves",
        "image_src": "/public/icons/caves.jpg"
    },
    {
        "title": "Rooms",
        "title_tag": "rooms",
        "image_src": "/public/icons/rooms.jpg"
    },
    {
        "title": "Islands",
        "title_tag": "islands",
        "image_src": "/public/icons/islands.jpg"
    },
    {
        "title": "Beachfront",
        "title_tag": "beach_front",
        "image_src": "/public/icons/beach_front.jpg"
    },
    {
        "title": "Lakefront",
        "title_tag": "lake_front",
        "image_src": "/public/icons/lake_front.jpg"
    }
]
