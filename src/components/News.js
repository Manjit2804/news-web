import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Chinese Fighter Jet Flew Close To LAC In Ladakh, India Responded: Report - NDTV",
      description:
        "A Chinese Air Force aircraft flew very close to a friction point in the eastern Ladakh sector on the Line of Actual Control in the last week of June, after which the Indian Air Force responded swiftly as per standard operating procedures.",
      url: "https://www.ndtv.com/india-news/chinese-fighter-jet-flew-close-to-lac-in-ladakh-india-responded-report-3139299",
      urlToImage:
        "https://c.ndtvimg.com/2020-06/a02v33fo_air-force-jet-over-leh-650_625x300_19_June_20.jpg",
      publishedAt: "2022-07-09T03:57:49Z",
      content:
        "Indian Air Force responded swiftly as per standard operating procedures. (Representational)\r\nNew Delhi: A Chinese Air Force aircraft flew very close to a friction point in the eastern Ladakh sector o… [+3361 chars]",
    },
    {
      source: {
        id: null,
        name: "Cricketaddictor.com",
      },
      author: "More by Vicky Singh",
      title:
        "IND vs ENG Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- India Tour of England, 2nd T20I - Cricket Addictor",
      description:
        "IND vs ENG Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- India Tour of England, 2nd T20I",
      url: "https://cricketaddictor.com/fantasy-cricket/ind-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-india-tour-of-england-2nd-t20i/",
      urlToImage:
        "https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/07/Rohit-Sharma-India-T20I-Team.png",
      publishedAt: "2022-07-09T03:50:05Z",
      content:
        "IND vs ENG Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of the match between India and England. They will play against each other for the second tim… [+4600 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Elon Musk Pulls Out Of $44 Billion Twitter Deal, Now Faces A Legal Threat - NDTV",
      description:
        'Billionaire Elon Musk pulled the plug on his $44 billion deal to buy Twitter, accusing the company of "misleading" statements about the number of fake accounts.',
      url: "https://www.ndtv.com/world-news/twitter-deal-elon-musk-abandons-deal-to-buy-twitter-sets-stage-for-court-battle-3141794",
      urlToImage:
        "https://c.ndtvimg.com/2022-07/bvmvvus8_elon-musk_625x300_09_July_22.jpg",
      publishedAt: "2022-07-09T03:48:00Z",
      content:
        "<li>In a regulatory filing, Elon Musk's lawyers said Twitter had failed to respond to multiple requests for information on fake or spam accounts on the platform, which is fundamental to the company's… [+1914 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Hina Rohtaki",
      title:
        "Chandigarh Carmel Convent accident: Who is responsible for this loss of life? - The Indian Express",
      description:
        "Chandigarh school accident: The least school authorities could have done was warning its students not to sit under trees that are diseased, old or perilous.",
      url: "https://indianexpress.com/article/cities/chandigarh/chandigarh-carmel-convent-tree-accident-death-students-news-8018251/",
      urlToImage:
        "https://images.indianexpress.com/2022/07/chandigarh-carmel.jpg",
      publishedAt: "2022-07-09T03:13:01Z",
      content:
        "Broken tiffin boxes and smashed spoons it was the death of a thousand dreams as a 70 feet tall heritage tree, protected by the Chandigarh administration, claimed an innocent young life and injured se… [+6048 chars]",
    },
    {
      source: {
        id: null,
        name: "Northeast Now",
      },
      author: "NE NOW NEWS",
      title:
        "Garena Free Fire Redeem Codes For Today 9 July 2022 : FF Rewards and steps to redeem - Northeast Now",
      description:
        "Garena Free Fire is the most exciting battle royale game, which gained a lot of popularity in India during the last few weeks, especially in absence of Pubg Mobile India.",
      url: "http://nenow.in/free-fire/garena-free-fire-redeem-codes-for-today-9-july-2022.html",
      urlToImage:
        "https://nenow.in/wp-content/uploads/2022/04/free-fire-2-747x420-1.jpg",
      publishedAt: "2022-07-09T02:29:33Z",
      content:
        "Garena Free Fire is the most exciting battle royale game, which gained a lot of popularity in India during the last few weeks, especially in absence of Pubg Mobile India.\r\nNow it is becoming one of t… [+2714 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT News Desk",
      title:
        "Russia's Lavrov on stalled Ukraine talks: ‘We don’t run after anyone...' - Hindustan Times",
      description:
        "Lavrov made the statement on the sidelines of the G20 meet, the first time Russia had a face-to-face meeting with its fiercest critics from the West like US Secretary of State Antony Blinken. | World News",
      url: "https://www.hindustantimes.com/world-news/we-don-t-run-after-anyone-russia-s-lavrov-on-stalled-ukraine-talks-with-west-101657328522455.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/07/09/1600x900/INDONESIA-G20--176_1657331553975_1657331574959.JPG",
      publishedAt: "2022-07-09T02:21:48Z",
      content:
        "Amid an ongoing war with Ukraine, Russian foreign minister Sergey Lavrov on Friday expressed hope to resolve issues with the West to resume supply of Ukrainian grain at Black Sea ports, but asserted … [+2433 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Video: Moment When Japan Ex PM Shinzo Abe Was Shot On Stage - NDTV",
      description:
        "Japanese former Prime Minister Shinzo Abe has died. Abe, 67, was on stage, delivering a speech at Nara when he was shot in the chest.",
      url: "https://www.ndtv.com/world-news/video-moment-when-japan-ex-pm-shinzo-abe-collapsed-after-shooting-3138491",
      urlToImage:
        "https://c.ndtvimg.com/2022-07/rap642_shinzo-abe_625x300_08_July_22.jpg",
      publishedAt: "2022-07-09T02:12:00Z",
      content:
        "Shinzo Abe collapsed after a second shot was fired\r\nNew Delhi: Japanese former Prime Minister Shinzo Abe died after being shot while campaigning. Abe, 67, was on stage, delivering a speech at Nara wh… [+1387 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "AP",
      title:
        "Biden signs order on abortion access after high court ruling - The Indian Express",
      description:
        "President Biden's executive order directs agencies to work to educate medical providers and insurers about how and when they are required to share privileged patient information with authorities — an effort to protect women who seek or utilize abortion servic…",
      url: "https://indianexpress.com/article/world/biden-to-sign-executive-order-to-help-safeguard-access-to-abortion-contraception-8017703/",
      urlToImage: "https://images.indianexpress.com/2022/06/biden-nato.jpg",
      publishedAt: "2022-07-09T01:40:01Z",
      content:
        "The actions he outlined are intended to mitigate some potential penalties women seeking abortion may face after the ruling but are limited in their ability to safeguard access to abortion nationwide.… [+6253 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "Kapil Dev explains why Virat Kohli could lose his spot in India's T20I squad - Hindustan Times",
      description:
        "Virat Kohli's alarming drop in form this year and his lack of appearances in T20 internationals has led to questions about his place in the Indian team that could play in the T20 World Cup later this year.",
      url: "https://www.hindustantimes.com/cricket/kapil-dev-explains-why-virat-kohli-could-lose-his-spot-in-india-s-t20i-squad-if-you-can-drop-ashwin-from-tests-101657302494594.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/07/08/1600x900/CRICKET-ODI-ZAF-IND-0_1657309401723_1657309424931.JPG",
      publishedAt: "2022-07-09T01:34:28Z",
      content:
        "Dropping Virat Kohli from the Indian team in any format may have been unthinkable even about a year ago but it is something that is looking like a possibility at least in T20 internationals. The form… [+2268 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Express Web Desk",
      title:
        "Watch video: Cloudburst wreaks havoc near Amarnath shrine - The Indian Express",
      description:
        "A number of Twitter users shared videos of the same on their handles that reflected the devastation caused by the cloudburst at the pilgrimage site.",
      url: "https://indianexpress.com/article/india/amarnath-cloudburst-watch-video-8017900/",
      urlToImage: "https://images.indianexpress.com/2022/07/amarnath-1.jpg",
      publishedAt: "2022-07-09T00:52:58Z",
      content:
        "As a cloudburst near Amarnath shrine Friday claimed at least 12 lives, videos of the incident and the subsequent rescue operations went viral on social media.A number of Twitter users shared videos o… [+1359 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "ET HealthWorld",
      title:
        "National Institute for Research in Tuberculosis developing sputum-free tests for diagnosing TB - ETHealthWorld",
      description:
        "The ICMR's top tuberculosis research institute NIRT is in the process of developing and validating sputum-free tests using blood, stool, urine and saliva samples for diagnosing the disease.",
      url: "https://health.economictimes.indiatimes.com/news/industry/national-institute-for-research-in-tuberculosis-developing-sputum-free-tests-for-diagnosing-tb/92758922",
      urlToImage:
        "https://etimg.etb2bimg.com/thumb/msid-92758922,imgsize-77684,width-1200,height-628,overlay-ethealthworld/national-institute-for-research-in-tuberculosis-developing-sputum-free-tests-for-diagnosing-tb.jpg",
      publishedAt: "2022-07-08T23:42:00Z",
      content:
        "Chennai: The ICMR's top tuberculosis research institute NIRT is in the process of developing and validating sputum-free tests using blood, stool, urine and saliva samples for diagnosing the disease. … [+3232 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TNN",
      title:
        "Two call centres busted in Bengaluru, 11 arrested - Times of India",
      description:
        "Two illegal call centres allegedly duping US citizens have been busted in Bengaluru. The centres would ask them to buy fake gift cards of e-commerce",
      url: "https://timesofindia.indiatimes.com/city/bengaluru/two-call-centres-busted-in-bengaluru-11-arrested/articleshow/92758045.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-92758778,width-1070,height-580,imgsize-934842,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-07-08T21:40:00Z",
      content: "",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Raj Shekhar",
      title:
        "CBI books Mumbai ex-top cop & NSE ex-chiefs for phone taps - Times of India",
      description:
        "India News: CBI has filed an FIR against ex-Mumbai police commissioner Sanjay Pandey and former National Stock Exchange (NSE) bosses Chitra Ramkrishna and Ravi Na",
      url: "https://timesofindia.indiatimes.com/india/cbi-books-mumbai-ex-top-cop-nse-ex-chiefs-for-phone-taps/articleshow/92757674.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-92757677,width-1070,height-580,imgsize-42980,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-07-08T20:57:00Z",
      content: "",
    },
    {
      source: {
        id: null,
        name: "GameSpot",
      },
      author: "Darryn Bonthuys",
      title: "Best Prime Day Gaming Accessory Deals Available Now - GameSpot",
      description:
        "From pro-style controllers to luxurious headsets, Amazon has some impressive discounts on right now for gaming accessories.",
      url: "https://www.gamespot.com/gallery/best-prime-day-gaming-accessory-deals-available-now/2900-4204/",
      urlToImage:
        "https://www.gamespot.com/a/uploads/screen_kubrick/1595/15950357/4002269-primedayaccessories.jpeg",
      publishedAt: "2022-07-08T19:59:43Z",
      content:
        "The products discussed here were independently chosen by our editors.\r\n GameSpot may get a share of the revenue if you buy anything featured on our site.",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Ready for the Webb Space Telescope's First Full-Color Images on This Week @NASA – July 8, 2022 - NASA",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DidL-_uWJC00",
      urlToImage: null,
      publishedAt: "2022-07-08T19:44:40Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Novak Djokovic Relishing Chance To Make History At Wimbledon - ATP Tour",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiSmh0dHBzOi8vd3d3LmF0cHRvdXIuY29tL2VuL25ld3MvZGpva292aWMtcmVhY3Rpb24td2ltYmxlZG9uLTIwMjItZnJpZGF5LXNm0gEA?oc=5",
      urlToImage: null,
      publishedAt: "2022-07-08T19:18:35Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "GSMArena.com",
      },
      author: null,
      title:
        "Infinix Note 12 Pro 5G announced with Dimensity 810 and 108MP camera, Note 12 5G tags along - comments - GSMArena.com",
      description: null,
      url: "https://www.gsmarena.com/newscomm-54982.php",
      urlToImage: null,
      publishedAt: "2022-07-08T18:42:38Z",
      content:
        "Hemedans, 13 hours agoDimensity 810, sd 480, sd 720G, dimensity 700, Helio G96, G95 etc they are of same tier, all h... moreHow about Helio G99?\r\nyou have to suffer, 18 hours agofinally.\r\ndimensity o… [+4864 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Gulveen Aulakh",
      title: "Adani Group in race to acquire 5G spectrum | Mint - Mint",
      description:
        "According to a person aware of the development, the group is learnt to have submitted its interest on 8 July, the last date that the telecom department kept for receiving applications from potential bidders.",
      url: "https://www.livemint.com/companies/news/adani-group-in-race-to-acquire-5g-spectrum-11657301994611.html",
      urlToImage:
        "https://images.livemint.com/img/2022/07/08/600x338/Adani_1652781101937_1657302069949.JPG",
      publishedAt: "2022-07-08T18:34:15Z",
      content:
        "NEW DELHI : Adani Group is learnt to have applied to participate in the upcoming 5G spectrum auctions to be held later this month, a move that may mark its entry into the telecom industry. According … [+1728 chars]",
    },
    {
      source: {
        id: null,
        name: "Space Ref",
      },
      author: null,
      title:
        "NASA Space Station Update 8 July, 2022 - Artificial Intelligence, Hearing Tests - Space Ref",
      description: null,
      url: "http://spaceref.com/international-space-station/nasa-space-station-update-8-july-2022---artificial-intelligence-hearing-tests.html",
      urlToImage: null,
      publishedAt: "2022-07-08T18:23:34Z",
      content:
        "Artificial intelligence, hearing tests, and a microscope setup topped the research agenda aboard the International Space Station on Friday. \r\nThe seven Expedition 67 crew members also divided their d… [+2739 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Express News Service",
      title:
        "Rafael Nadal says he 'can't be competitive over two matches', adds he had to withdraw from Wimbledon out of respect for himself - The Indian Express",
      description:
        "The Spaniard' was forced to retire from the event after suffering an abdominal tear during his five-set win over Taylor Fritz in the quarterfinal.",
      url: "https://indianexpress.com/article/sports/tennis/rafael-nadal-says-he-cant-be-competitive-over-two-matches-adds-he-had-to-withdraw-from-wimbledon-out-of-respect-for-himself-8015919/",
      urlToImage:
        "https://images.indianexpress.com/2022/07/Nadal-withdrawal.jpg",
      publishedAt: "2022-07-08T18:20:48Z",
      content:
        "Rafael Nadal was forced to withdraw from his Wimbledon semifinal due to the abdominal injury he sustained in the quarterfinal. Australia’s Nick Kyrgios is through to the maiden Grand Slam final of hi… [+2246 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    {this.state.articles.map((element) => {
                      return (
                        <div className="col-md-4">
                          <div className="single-box">
                            <div className="img-area">
                              {/* <img src={gardeningImg} alt="..." /> */}
                            </div>
                            <div className="img-text">
                              <NewsItem
                                title={element.title}
                                description={element.description}
                                imageUrl={element.urlToImage}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    {this.state.articles.map((element) => {
                      return (
                        <div className="col-md-4">
                          <div className="single-box">
                            <div className="img-area">
                              {/* <img src={gardeningImg} alt="..." /> */}
                            </div>
                            <div className="img-text">
                              <NewsItem
                                title={element.title}
                                description={element.description}
                                imageUrl={element.urlToImage}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    {this.state.articles.map((element) => {
                      return (
                        <div className="col-md-4">
                          <div className="single-box">
                            <div className="img-area">
                              {/* <img src={gardeningImg} alt="..." /> */}
                            </div>
                            <div className="img-text">
                              <NewsItem
                                title={element.title}
                                description={element.description}
                                imageUrl={element.urlToImage}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      //   <div className="container my-3">
      //     <h2>NewsWeb - Top Headlines</h2>
      //     <div className="row">
      //       <div className="col-md-4">
      //         <NewsItem
      //           title="myTitle"
      //           description="myDesc"
      //           imageUrl="https://gfx.nrk.no/7kT5zGoE2E-GnUKLojH1PQ0I1Nze4Ypu8lxM-oBjubQw.jpg"
      //         />
      //       </div>
      //       <div className="col-md-4">
      //         <NewsItem
      //           title="myTitle"
      //           description="myDesc"
      //           imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"
      //         />
      //       </div>
      //       <div className="col-md-4">
      //         <NewsItem
      //           title="myTitle"
      //           description="myDesc"
      //           imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"
      //         />
      //       </div>
      //     </div>
      //   </div>
    );
  }
}

export default News;
