import { useEffect } from "react";
import {
  ArrowRight,
  Compass,
  MapPin,
  Calendar,
  Clock,
  Map as MapIcon,
} from "lucide-react";
import Section from "../components/layout/Section";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

/**
 * DESTINATIONS DATA
 * Grouped into curated collections for a premium, transformational journey.
 */
const DESTINATION_COLLECTIONS = [
  {
    category: "Heritage Circuits",
    destinations: [
      {
        id: "adiyogi-temple-circuit",
        name: "Adiyogi Temple Circuit",
        subtitle: "Where ancient devotion meets monumental stillness.",
        desc: "A carefully curated route through sacred geometry and living traditions, culminating at the 112-foot Adiyogi. From temple architecture to immersive light meditation, this circuit recalibrates your sense of scale and spiritual inquiry.",
        images: [
          "https://images.unsplash.com/photo-1609609830354-8f615d61b9c8?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://www.vikipandit.com/wp-content/uploads/Bhoga-Nandeshwara-Temple-Nandi-Hills-Bangalore-1024x664.jpg",
          "https://www.explorebees.com/uploads/sir%20m%20visvesvaraya%20memorial%20muddenahalli%20(1).jpg",
          "https://kannada.karnatakaexplore.com/wp-content/uploads/2025/02/Sri-Ranganatha-Swamy-Temple-Rangasthala-Images.webp",
        ],
        highlights: [
          "Bee Hivery",
          "Bhoga Nandeeshwara Temple",
          "Kallu Basava Temple",
          "Sir M. Visvesvaraya Memorial Museum",
          "Rangasthala Temple",
          "Jalari Narasimha Swamy Temple",
          "Adiyogi Light Show",
          "Isha Foundation, Chikkaballapur",
          "Kalyani dinner experience",
        ],
      },
      {
        id: "belur-halebeedu",
        name: "Belur & Halebeedu",
        subtitle: "Architectural poetry written in the language of soapstone.",
        desc: "Witness the mathematical precision of the Hoysala dynasty, where every frieze tells a story of devotion and master craftsmanship. These temples are conduits for absolute structural integrity and artistic focus.",
        images: [
          "https://images.unsplash.com/photo-1702970091346-8e4e72427691?q=80&w=1507&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1767766790950-31aeeae43111?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerG_KWtBGbpxQvkBbITlYKa3zBuYZLEfo1SND7ymUdoL1MKW0slHj1WCEn0hekFP5u66Vaai5H32eQNndUj3s7HSZJ16Jc784XIyD3ayGFPqe0IS0kwE3NGOKJhafuq4P0lNn4478WQp5M-=s680-w680-h510-rw",
          "https://templeinkarnataka.com/wp-content/uploads/2024/08/Sri-Veera-Narayana-Temple-scaled.jpg",
          "https://media.assettype.com/deccanherald%2F2024-10-31%2Fsxmvema6%2Ffile7q1ieb3onqcwt7o0j22.jpg?w=undefined&auto=format%2Ccompress&fit=max",
        ],
        highlights: [
          "Belur Temple (Chennakesava Temple)",
          "Halebeedu Temple (Hoysaleswara Temple)",
          "Archaeological Museum",
          "Belavadi Temple",
          "Shettihalli Church",
        ],
      },
      {
        id: "hampi",
        name: "Hampi",
        subtitle: "The geometry of silence etched in timeless stone.",
        desc: "Walk through a city carved in granite, where sunrise lights ancient pillars and silence echoes through forgotten bazaars. The boulder-strewn landscape forces a shift in scale, revealing the monumental resilience of human legacy.",
        images: [
          "https://images.unsplash.com/photo-1651569213711-b29d1fc3f995?q=80&w=1470&auto=format&fit=crop",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Anjanadri_Hill_in_Hampi_%2801%29.jpg/1280px-Anjanadri_Hill_in_Hampi_%2801%29.jpg",
          "https://desh.tourism.gov.in/admin/uploads/Attraction/1640690009_Coracle-Boat-to-fishing-from-Tungabhadra-River-Hampi-Edit-1024x582.jpg",
          "https://images.unsplash.com/photo-1721195807515-70bcc589bb08?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://hampitourism.co.in/images/places-to-visit/headers/monolithic-bull-hampi-tourism-entry-fee-timings-holidays-reviews-header.jpg",
          "https://plus.unsplash.com/premium_photo-1697730504977-26847b1f1f91?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://d35xcwcl37xo08.cloudfront.net/current-affairs-wp-uploads/2025/04/tungabhadra_dam.webp",
          "https://images.unsplash.com/photo-1694859109259-9ec519a2d37a?q=80&w=1419&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://orias.berkeley.edu/sites/default/files/general/day2-2g-with_people_for_scale.jpeg?timestamp=1683330542",
          "https://images.unsplash.com/photo-1663816658827-62f2ac01c0e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1606141836992-bfcb00c776c2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        highlights: [
          "Anjanadri Hills",
          "Coracle Ride",
          "Hampi Bazaar",
          "Virupaksha Temple",
          "Monolithic Basava",
          "Stone Chariot",
          "Vittala Temple",
          "TB Dam",
          "Lotus Mahal",
          "Mahanavami Dibba",
          "Queen's Bath",
          "Chitradurga Fort",
        ],
      },
      {
        id: "lepakshi-penukonda",
        name: "Lepakshi & Penukonda",
        subtitle: "The mystery of the hanging pillar and the kings' retreat.",
        desc: "Explore where mythology and engineering converge at the feet of the monolithic Nandi. Penukonda's fort provides a strategic vantage point, bridging the gap between historical weight and spatial clarity.",
        images: [
          "https://www.topplacesindia.com/img/attractions/andhra-pradesh/gooty-fort/gooty-fort-hero.jpg",
          "https://s7ap1.scene7.com/is/image/incredibleindia/lepakshi-anantapur-ap-1-attr-hero?qlt=82&ts=1726743954484",
          "https://www.vikipandit.com/wp-content/uploads/Veerabhadra-Temple-Lepakshi.jpg",
          "https://static.sadhguru.org/d/46272/1687922104-image-3.jpg",
        ],
        highlights: [
          "Gaddim Temple",
          "Penukonda Fort",
          "Lepakshi Temple",
          "Adiyogi",
        ],
      },
      {
        id: "mysuru",
        name: "Mysuru",
        subtitle: "The fragrance of sandalwood and the weight of heritage.",
        desc: "Beyond the palace gates lies a city of slow rhythms and aristocratic grace. The sandalwood air invites deep sensory groundedness, asking you to reconsider the weight of lineage and leadership.",
        images: [
          "https://plus.unsplash.com/premium_photo-1697729434815-40ab4970ebc1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://www.sandeshtheprince.com/wp-content/uploads/2020/07/chamundihills.jpg",
          "https://images.unsplash.com/photo-1585167716034-5d7f10f162b9?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://d34vm3j4h7f97z.cloudfront.net/original/4X/6/a/9/6a91d2858ffeeed36ebf3809f30a4c9453d7ec7d.jpeg",
          "https://images.unsplash.com/photo-1570553181537-8fdcef2f6f9f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://d35xcwcl37xo08.cloudfront.net/current-affairs-wp-uploads/2025/04/krishnaraja_sagar_krs_dam.webp",
          "https://www.architectandinteriorsindia.com/cloud/2024/04/05/Payana_Kshemavana-4-scaled.jpg",
        ],
        highlights: [
          "Bidadi (Thatte Idly breakfast experience)",
          "Mysore Palace",
          "Chamundi Hills",
          "Lalitha Mahal",
          "Mysore Zoo",
          "Philomena Church",
          "KRS Dam",
          "Payana Car Museum",
        ],
      },
    ],
  },
  {
    category: "Mountain & Trekking Escapes",
    destinations: [
      {
        id: "chikkamagaluru",
        name: "Chikkamagaluru",
        subtitle: "The cradle of coffee and the height of Karnataka.",
        desc: "Summit Mullayanagiri to stand above the clouds, where thin air clarifies intent and rugged terrain tests your grit. The rolling shola forests and cascading waterfalls provide a rhythmic backdrop for psychological resets.",
        images: [
          "https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1717659216101_Jari_falls.jpeg&w=1920&q=75",
          "https://images.unsplash.com/photo-1739038034791-a60471396db0?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1605105777592-c3430a67d033?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1739038034774-3ba7ba964f01?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://tastyworld.in/wp-content/uploads/2022/11/3a.jpg",
          "https://i0.wp.com/aravindgundumane.com/wp-content/uploads/2018/08/DSC_8567.jpg?fit=2048%2C1367&ssl=1",
          "https://riverwoods.in/wp-content/uploads/2024/11/mullayanagiri-karnataka-scaled.jpg",
          "https://www.mekanagadde.com/wp-content/uploads/2015/09/Baba-Budangiri.jpg",
        ],
        highlights: [
          "Jhari Falls",
          "Manikyadara Temple",
          "Bancdehalli Gudda",
          "Zipline experience",
          "Chips Factory",
          "Coffee Estate Walk",
          "Rani Jari",
          "Z Point",
          "Datta Peetha",
          "Baba Budan Giri",
          "Mullayanagiri",
        ],
      },
      {
        id: "madikeri",
        name: "Madikeri",
        subtitle: "The mist-laden heart of Coorg's wild interior.",
        desc: "Navigate the dense coffee estates and roaring waterfalls of Madikeri, where the landscape demands presence and the terrain reshapes perspective. This is a space of elemental immersion and cultural depth.",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/7/7a/Abbey_Falls_New.jpg",
          "https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1721471615474_Raja%27s%20Seat%20Garden%205%20.jpg&w=1920&q=75",
          "https://mandalpattijeepsafari.org/wp-content/uploads/2025/10/M-P-2-1.png",
          "https://upload.wikimedia.org/wikipedia/commons/c/c8/Madikeri_Palace_now_used_as_district_administration_seat.jpg",
          "https://images.unsplash.com/photo-1709730705114-74080546e165?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        highlights: [
          "Abbe Falls",
          "Raja Seat",
          "Madalapati Jeep Ride",
          "Madikeri Fort",
          "Dubare Elephant Camp",
          "Golden Temple",
          "Monastery",
        ],
      },
      {
        id: "sringeri",
        name: "Sringeri",
        subtitle: "The confluence of wisdom and the Tunga river.",
        desc: "Retreat to the serene banks of the Tunga, where ancient Vedic traditions meet the raw stillness of the Western Ghats. This is a space of intellectual clarity, deep reflection, and elemental trekking.",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/2/2a/Vidyashankara_Temple_at_Shringeri.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/4/45/Srimane_Falls%2C_Sringeri.jpg",
          "https://live.staticflickr.com/5772/22125991625_d550873412_o.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/2/26/Valparai_GhatRoad.JPG",
        ],
        highlights: [
          "Sri Sharada Peetham",
          "Vidyashankara Temple",
          "Sirimane Falls",
          "Tunga River",
          "Western Ghats trekking experience",
        ],
      },
      {
        id: "kolluru-kodachadri",
        name: "Kolluru & Kodachadri",
        subtitle: "The mystical heights and the Mookambika essence.",
        desc: "Traverse dense jungles to reach the windswept Sarvajna Peetha. The landscape is a masterclass in elemental intelligence, forcing navigation through fog, forest, and steep ascents.",
        images: [
          "https://pbs.twimg.com/media/GtVdDykbMAIIuhu.jpg",
          "https://api.avathi.com/images/2e4bf0e1-7856-4393-bf9f-fc3a06fe724b_1748003048.jpg",
          "https://api.avathi.com/images/2e4bf0e1-7856-4393-bf9f-fc3a06fe724b_1748003048.jpg",
          "https://static2.tripoto.com/media/filter/tst/img/7680/TripDocument/1549303247_img_20190106_140625.jpg.webp",
          "https://mindtrip.ai/attractions/0ae9/619d/80e5/035d/b125/e90b/9d40/9106",
          "https://cdn.tripuntold.com/media/photos/location/2018/09/24/73822d86-930b-410c-861a-0b59e47278b1.jpg",
        ],
        highlights: [
          "Mookambika Temple",
          "Mookambika Wildlife Sanctuary",
          "Arishina Gundi Falls",
          "Kodachadri Trek",
          "Sarvajna Peetha",
          "Hidlumane Waterfalls",
        ],
      },
    ],
  },
  {
    category: "Coastal & Island Retreats",
    destinations: [
      {
        id: "gokarna",
        name: "Gokarna",
        subtitle: "Where the Western Ghats meet the Arabian Sea.",
        desc: "Trace the rugged coastal cliffs where the mountains take a final dive into the ocean. Ancient caves, forgotten forts, and sacred temples punctuate a landscape engineered for coastal grounding and spiritual clarity.",
        images: [
          "https://images.unsplash.com/photo-1641192936002-80e89555786f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1634303771727-cf3db81e56fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGgmNFjKYNiYhUVS_zBX4o1HsTgIITwXs2rkkyrBiZNAeLS3w6qBymcLPnNns1oRTUsE1H03RC11UcGpyrHAH0rhgj5SLlqV76EpCIpa7Rk9P_mKlBAgJcaakVOrS_0W2SXlM7SMVsJw-b/s2699/Mirjan+Fort-Karnataka+Forts-Pepper+Queen-History-Archaeology-Mirjan-Uttara+Kannada-Karnataka-India-Travel.JPG",
          "https://kalavadyfarmstay.com/wp-content/uploads/2023/02/img_20170501_070530_0031.jpg",
          "https://images.unsplash.com/photo-1693205118032-9382f7267f55?q=80&w=1464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1693206657625-43c508182c6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://kalavadyfarmstay.com/wp-content/uploads/2023/02/Gogarbha-cave.jpg",
        ],
        highlights: [
          "Gokarna Beach",
          "Yana Caves",
          "Mirjan Fort",
          "Gokarna Temple",
          "Gogarbha Cave",
        ],
      },
      {
        id: "netrani-island",
        name: "Netrani Island",
        subtitle: "The heart of the ocean's silent interior.",
        desc: "Submerge into crystalline waters to discover a hidden world of coral reefs and marine life. This is a destination of absolute sensory isolation, designed to expand awareness beyond the terrestrial.",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/f/ff/Netrani_Island_Arial_View.jpg",
          "https://kalavadyfarmstay.com/wp-content/uploads/2022/05/scuba-diving-in-netrani-island.jpg",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ac/cc/46/img-20191228-wa0049-largejpg.jpg?w=1100&h=1100&s=1",
        ],
        highlights: ["Netrani Island", "Scuba / marine exploration experience"],
      },
      {
        id: "udupi-stmarys",
        name: "Udupi & St. Mary's Island",
        subtitle: "The geometry of salt and the columns of time.",
        desc: "Walk among the hexagonal basaltic columns of St. Mary's Island, a geological oddity pondering the scale of time. The coastal rhythm of Udupi provides a sanctuary for cultural and spiritual integration.",
        images: [
          "https://images.unsplash.com/photo-1595931320730-c4589902db9a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1587138187146-476bff7ca631?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://s7ap1.scene7.com/is/image/incredibleindia/sri-krishna-temple-udupi-mangalore-karnataka-3-attr-hero?qlt=82&ts=1726722435769",
          "https://upload.wikimedia.org/wikipedia/commons/3/3f/DR0085DSC_1767.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCN_q8JshYhKfZAgjaI2oZpc0Rzy-A5XZ3Iw&s",
        ],
        highlights: ["Udupi Krishna Temple", "St. Mary's Island"],
      },
    ],
  },
  {
    category: "Spiritual & Cultural Immersions",
    destinations: [
      {
        id: "dakshina-kashi",
        name: "Dakshina Kashi Circuit",
        subtitle: "The sacred path through the southern soul.",
        desc: "Journey through ancient spiritual hubs where geography is mapped by devotion. From temple rituals to offroad adventures and sunset meditations, this circuit is a narrative of continuity and transformation.",
        images: [
          "https://horanadu-web-img.s3.ap-south-1.amazonaws.com/website-main-images/About+(1).webp",
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqlV_kfaut3ECr7Ganwf-ZAPH4mlFi1AKlKMSEFjVvEnmyW_UOrO4eTAK-hm0tDSIuCfF7p527ImcNAkmfE7uWJVRzqxDSOsO5dMa4AZuqwgJqv9FTB0M0ScM5EtnpYubooRwwu=s680-w680-h510-rw",
          "https://images.jdmagicbox.com/comp/horanadu/z2/9999p8263.8263.220322232743.f8z2/catalogue/hanging-bridge-kalasa-horanadu-AeDyA5Gm15.jpg",
          "https://cdn.tripuntold.com/media/photos/location/2021/07/29/39ba89e1-a2e5-4194-8462-226e8a2cf65a.jpg",
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcqd45MgD43YzD2KZcRC5Lg4cj_yAxZbYVqUaMULBpqYcQDYWLEdhPRj-CQfqn7_tpigcxx28dYHmdUbTlNeWBIZmHztACSHDxjQHI0jU5DZ36l5FTQpGIKYNbhvBIqixAs6UESmzNOUI/s1600/Panchamikallu+-Shringeri+(14).jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbsMDZhuJoFuK3_SM8uv0jK-LELjMPVOxeZQ&s",
          "https://i.redd.it/qmphktyc4wyb1.jpg",
          "https://www.mekanagadde.com/wp-content/uploads/2015/09/Mekanagadde-Homestay-Jeep.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMD5-tsOO3xQ6ewR3YvuJGnzy1T47zjsy1zw&s",
        ],
        highlights: [
          "Horanadu Annapoorneshwari Temple",
          "Dakshina Kaashi Temple",
          "Kalasa Hanging Bridge",
          "Soormane Waterfalls",
          "Panchami Kallu",
          "Kyathanamakki sunset point",
          "Offroad Jeep Ride",
          "Jain Temple",
          "Samse Estate Ganapathi Temple",
        ],
      },
    ],
  },
];

export default function Destinations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-forest-deep text-earth overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="scroll-snap-section relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1608973557237-4ab537f2cd5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hampi Sunrise"
            className="w-full h-full object-cover scale-110 animate-slow-zoom opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-b from-forest-deep/60 via-transparent to-forest-deep" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up">
            <div className="w-12 h-px bg-accent-gold/40" />
            <span className="text-eyebrow text-accent-gold">
              Selected Geographies
            </span>
            <div className="w-12 h-px bg-accent-gold/40" />
          </div>
          <h1 className="text-hero text-white mb-10 drop-shadow-premium">
            Travel That <br />
            <span
              className="italic animate-text-shimmer"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-accent-gold), white, var(--color-accent-gold))",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Transforms.
            </span>
          </h1>
          <p className="text-description max-w-2xl mx-auto mb-12">
            Every destination is a deliberate choice—an architectural
            masterpiece of geography engineered to shift your perspective and
            reveal your authentic edge.
          </p>
          <div className="flex justify-center animate-fade-in-up animate-delay-300">
            <PrimaryButton to="/contact" size="lg">
              Explore Journeys
            </PrimaryButton>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <Compass className="w-8 h-8 text-accent-gold" />
        </div>
      </section>

      {/* SECTION 1: SIGNATURE DESTINATIONS (STACKED) */}
      <div className="relative z-10 bg-forest-deep">
        {DESTINATION_COLLECTIONS.map((collection) =>
          collection.destinations.map((dest, idx) => (
            <section
              key={dest.id}
              className="scroll-snap-section relative h-screen flex items-end overflow-hidden group"
            >
              <div className="absolute inset-0">
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                >
                  {dest.images.map((imageUrl, imgIdx) => (
                    <SwiperSlide key={imgIdx}>
                      <img
                        src={imageUrl}
                        alt={`${dest.name} - ${imgIdx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Subtle dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/40 pointer-events-none z-5" />
                {/* Gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-forest-deep via-forest-deep/80 to-transparent pointer-events-none z-10" />
              </div>

              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-24 md:pb-32">
                <div className="max-w-4xl space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-eyebrow text-accent-gold">
                      {collection.category}
                    </span>
                    <div className="w-8 h-px bg-accent-gold/30" />
                    <span className="text-eyebrow text-white/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter">
                    {dest.name}
                  </h2>
                  <h3 className="text-xl md:text-2xl font-light italic text-accent-gold/80 max-w-2xl">
                    {dest.subtitle}
                  </h3>
                  <p className="text-description max-w-xl text-white/70">
                    {dest.desc}
                  </p>

                  <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
                    {dest.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-gold/50" />
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/50">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8">
                    <PrimaryButton variant="outline" size="sm">
                      Explore Sector
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </section>
          )),
        )}
      </div>

      {/* SECTION 2: PERSONALISED JOURNEYS */}
      <Section variant="dark" padding="lg">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -left-12 -top-12 text-white/5 text-[15rem] font-black select-none pointer-events-none">
              Art
            </div>
            <h2 className="text-section-title text-white font-serif italic leading-tight relative z-10">
              Your Journey, <br />
              <span className="text-accent-gold font-sans not-italic font-black">
                Architected by Hand.
              </span>
            </h2>
          </div>
          <div className="space-y-10">
            <p className="text-description text-earth/80">
              We do not deal in itineraries. We deal in narratives. Every
              journey we design is a bespoke cultural immersion, tailored to the
              rhythm of your group and the specific outcomes you seek to
              achieve.
              <br />
              <br />
              From special access to heritage sites to private wilderness camps,
              we ensure every mile has an intent, and every moment has a
              purpose.
            </p>
            <PrimaryButton to="/contact" variant="primary" size="md">
              Design My Journey
            </PrimaryButton>
          </div>
        </div>
      </Section>

      {/* CLIMAX CTA */}
      <section className="scroll-snap-section relative min-h-screen flex flex-col items-center justify-center text-center p-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000"
            alt="Dark Forest"
            className="w-full h-full object-cover opacity-20 scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-b from-forest-deep/40 via-forest-deep/90 to-black" />
        </div>

        <div className="relative z-10 space-y-12 max-w-4xl">
          <div className="relative inline-block">
            <div className="absolute -inset-16 bg-accent-gold blur-[100px] opacity-10 animate-pulse" />
            <Compass
              className="w-20 h-20 text-accent-gold relative z-10 mx-auto"
              strokeWidth={1}
            />
          </div>

          <h2 className="text-hero text-white leading-none">
            Your Boundary <br />
            <span className="italic text-accent-gold drop-shadow-glow">
              Awaits.
            </span>
          </h2>

          <p className="text-description max-w-2xl mx-auto">
            The map is not the territory. The only way to understand the edge is
            to stand upon it. Connect with our curators to begin your
            transformation.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center">
            <PrimaryButton to="/contact" size="lg" variant="primary">
              Plan Your Expedition
            </PrimaryButton>
            <PrimaryButton to="/programs" size="lg" variant="secondary">
              Our Methodology
            </PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}
