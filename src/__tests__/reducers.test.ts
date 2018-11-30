import reducer from "../reducers/bookmarksReducer";

const mockTopic = {
  title: "General",
  guid: "IFI70vGC7Rlz",
  parent: "talks to watch",
  children: [
    {
      guid: "b98dms6IKL5o",
      title: "Awesome Talks",
      index: 0,
      dateAdded: 1528148439910000,
      lastModified: 1542725709314000,
      id: 5855,
      typeCode: 1,
      type: "text/x-moz-place",
      uri: "https://awesometalks.party/"
    },
    {
      guid: "6PTEz1FaMr45",
      title:
        "AllThingsSmitty/must-watch-javascript: A useful list of must-watch talks about JavaScript",
      index: 1,
      dateAdded: 1518626661197000,
      lastModified: 1542725709322000,
      id: 353,
      typeCode: 1,
      type: "text/x-moz-place",
      uri: "https://github.com/AllThingsSmitty/must-watch-javascript"
    },
    {
      guid: "Wys04xymtDQf",
      title:
        "GitHub - AllThingsSmitty/must-watch-css: A useful list of must-watch talks about CSS",
      index: 2,
      dateAdded: 1518895554637000,
      lastModified: 1542725709329000,
      id: 418,
      typeCode: 1,
      type: "text/x-moz-place",
      uri: "https://github.com/AllThingsSmitty/must-watch-css"
    },
    {
      guid: "fbQgOaCq_no-",
      title: "bolshchikov/js-must-watch: Must-watch videos about javascript",
      index: 3,
      dateAdded: 1518626666132000,
      lastModified: 1542725709334000,
      id: 435,
      typeCode: 1,
      type: "text/x-moz-place",
      uri: "https://github.com/bolshchikov/js-must-watch"
    },
    {
      guid: "PxPBbgV-qRE_",
      title:
        "hellerve/programming-talks: Awesome & Interesting Talks concerning Programming",
      index: 4,
      dateAdded: 1518626671750000,
      lastModified: 1542725709340000,
      id: 494,
      typeCode: 1,
      type: "text/x-moz-place",
      uri: "https://github.com/hellerve/programming-talks"
    },
    {
      guid: "U1Q_Bck5dTfS",
      title:
        "You canât go wrong watching JavaScript talks - Mozilla Hacks - the Web developer blog",
      index: 5,
      dateAdded: 1518626676449000,
      lastModified: 1542725709390000,
      id: 495,
      typeCode: 1,
      type: "text/x-moz-place",
      uri:
        "https://hacks.mozilla.org/2014/12/you-cant-go-wrong-watching-javascript-talks/"
    },
    {
      guid: "PtGhul3JwU_P",
      title: "Great programming talks to watch on your lunch break",
      index: 6,
      dateAdded: 1518626681751000,
      lastModified: 1542725709419000,
      id: 1083,
      typeCode: 1,
      type: "text/x-moz-place",
      uri:
        "https://medium.com/statuscode/great-programming-talks-to-watch-on-your-lunch-break-8b13e139929e"
    },
    {
      guid: "r3g553S7Fx7t",
      title:
        "LĂŠonie Watson | On CSS accessibility and drinking tea | CSS Day 2016 on Vimeo",
      index: 7,
      dateAdded: 1518902491390000,
      lastModified: 1542725709434000,
      id: 896,
      typeCode: 1,
      type: "text/x-moz-place",
      uri: "https://vimeo.com/180566024"
    },
    {
      guid: "H58plR9acv-4",
      title:
        "(1) Bartek Szopka: Everything you never wanted to know about JavaScript numbers -- JSConf EU 2013 - YouTube",
      index: 8,
      dateAdded: 1523666903920000,
      lastModified: 1542725709443000,
      id: 946,
      typeCode: 1,
      type: "text/x-moz-place",
      uri: "https://www.youtube.com/watch?v=MqHDDtVYJRI"
    },
    {
      guid: "pyvcAXa033hP",
      title: "Videos - WeAreDevelopers Events",
      index: 9,
      dateAdded: 1534426157441000,
      lastModified: 1542725709452000,
      id: 6006,
      typeCode: 1,
      type: "text/x-moz-place",
      uri: "https://www.wearedevelopers.com/videos/"
    },
    {
      guid: "VN_E0gT5xjN6",
      title: "Past Talks - Deconstruct",
      index: 10,
      dateAdded: 1528148433290000,
      lastModified: 1542725709460000,
      id: 5845,
      typeCode: 1,
      iconuri: "https://www.deconstructconf.com/favicon-96x96.png",
      type: "text/x-moz-place",
      uri: "https://www.deconstructconf.com/2017"
    },
    {
      guid: "ClYvX60dzGLt",
      title:
        "Keep Betting on JavaScript by Kyle Simpson - JSCamp Barcelona 2018 - YouTube",
      index: 11,
      dateAdded: 1535112683140000,
      lastModified: 1542725709465000,
      id: 6102,
      typeCode: 1,
      type: "text/x-moz-place",
      uri: "https://www.youtube.com/watch?v=lDLQA6lQSFg"
    },
    {
      guid: "Eknuls6E3KGG",
      title: "(8) CSS Grid in 45 Minutes! - YouTube",
      index: 12,
      dateAdded: 1535112690673000,
      lastModified: 1542725709469000,
      id: 6103,
      typeCode: 1,
      type: "text/x-moz-place",
      uri:
        "https://www.youtube.com/watch?v=DCZdCKjnBCs&__s=qkfef9as73eevst9dudk&utm_source=drip&utm_medium=email&utm_campaign=CSS+Grid+in+45+Minutes%21+"
    },
    {
      guid: "o-Xlnw3Mtmc5",
      title:
        "The Modern Command-Line Tool Stack: Pipenv, Click, and Friends : Matt Behrens : Free Download, Borrow, and Streaming : Internet Archive",
      index: 13,
      dateAdded: 1535160243021000,
      lastModified: 1542725709498000,
      id: 6111,
      typeCode: 1,
      type: "text/x-moz-place",
      uri:
        "https://archive.org/details/pyohio_2018-The_Modern_CommandLine_Tool_Stack_Pipenv_Click_and_Friends"
    }
  ]
};

const initialState = {
  children: [],
  dateAdded: "",
  folder: "",
  guid: "",
  id: "",
  index: "",
  lastModified: "",
  title: "",
  topic: {},
  type: "",
  typeCode: ""
};

const expectedState = {
  children: [],
  dateAdded: "",
  folder: "",
  guid: "",
  id: "",
  index: "",
  lastModified: "",
  title: "",
  topic: mockTopic,
  type: "",
  typeCode: ""
};
describe("bookmarks reducer", () => {
  it("should return the initial state", () => {
    const action = { type: "dummy_action" };
    expect(reducer(undefined, action)).toEqual(initialState);
  });
  it("should handle FILTER_LINKS", () => {
    const action = { type: "FILTER_LINKS", payload: mockTopic };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
