// constants:
const translations = {
    ru: {
        leadTitle: "Путешествия по России",
        leadSubtitle: "Настоящая страна не в выпусках новостей, а здесь.",
        leadImageAlt: "девушка в працкарте у окна",
        leadCaption: "ваша полка - верхняя",
        introTitle: "Чего мы там не видели?",
        introText: "По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36% планируют провести отпуск в родной стране. Мол, чего мы тут, дома, не видели? На самом деле, Россия — это целая вселенная с ласковым морем юга, густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть все эти красоты можно без миллионов на счету, загранпаспорта и многочасовых перелетов. Как, например, Вера Башмакова — смелая молодая мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и проехала 20 тысяч километров по родной стране. Мы выбрали и описали некоторые интересные места, достойные вашего отпуска.",
        introListOne: "Часовых поясов ",
        introListOneSpan: "11",
        introListTwo: "Объектов природного наследия ЮНЕСКО ",
        introListTwoSpan: "12",
        introListThree: "Объектов культурного наследия ЮНЕСКО ",
        introListThreeSpan: "16",
        introListFour: "Природных заповедников ",
        introListFourSpan: "105",
        introListFive: "Аэропортов ",
        introListFiveSpan: "241",
        photogrid1: "поезд",
        photogrid2: "снежные горы",
        photogrid3: "овчарка на стоге сена в тумане",
        photogrid4: "елки в тумане",
        photogrid5: "колеса на льду",
        photogrid6: "побережье байкала",
        photogrid7: "эльбрус",
        photogrid8: "пешеходный переход",
        photogrid9: "камчатка в тумане",
        photogrid10: "камчатка пейзаж",
        photogrid11: "байкал гора",
        photogrid12: "ергаки",
        placeTitle1: "Куршская коса",
        placeImageAlt1: "Куршская коса",
        placeText1: "Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных горизонта — спокойного Куршского залива с одной стороны и подёрнутого рябью волн Балтийского моря с другой. Уникальная природная зона на краю российского анклава.",
        placeMoreText1: "На этом Калининградская область не заканчивается. Для путешественника и исследователя там же по соседству — самая западная точка России, Балтийская коса, — и немецкое наследие россыпи небольших приморских городов. Атмосфера здешних мест исключает суету, окуная в спокойствие природы и запах стального, прохладного моря.",
        placeTitle2: "Кольский",
        placeImageAlt2: "Кольский п-ов",
        placeText2: "Почти весь полуостров находится за Полярным кругом. Саамская тундра, от которой на юг — тайга, а на север — Ледовитый океан, прикидывающийся Баренцевым морем.",
        placeMoreText2: "Возможно, вы смотрели Звягинцева и даже слышали историю арктического фестиваля в Териберке. Возможно, слово «Хибины» не осталось под снегом школьных воспоминаний об уроках географии. Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а от апатитов вас давно накрывает апатия. Но ваша мечта увидеть северное сияние начинает сбываться с билетом в Мурманск.",
        placeTitle3: "Алтай",
        placeImageAlt3: "Алтай",
        placeText3: "Алтай — одно из красивейших мест в России. В первую очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные соснами, горные реки и озёра. А если вы откроете в автомобиле окна, сможете познакомиться с невидимым чудом здешних мест — горным воздухом.",
        placeMoreText3: "Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы увидите всё разнообразие местной флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают орлы, а на равнинах пасутся косули. И знаменитые манулы — тоже обитатели Алтайского края.",
        placeTitle4: "Зимний Байкал",
        placeImageAlt4: "Зимний Байкал",
        placeText4: "Всем известен Байкал как крупнейшее озеро в мире. Многие также знают, что это самый большой источник пресной воды и одно из красивейших мест в России.",
        placeMoreText4: "Конечно, это всё так. Но Байкал ещё идеальное место для соревнований по скийорингу. Это такой вид спорта, когда лыжник привязывает себя к мотоциклу, и тандем старается развить как можно бóльшую скорость на льду. В марте 2019 года на фестивале «Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч.",
        placeTitle5: "Карелия",
        placeImageAlt5: "Карелия",
        placeText5: "Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу сибирская лиственница не растёт западнее Водлозера. Зато здесь она вымахивает на 30 метров — леса карельских национальных парков из-за непроходимых болот никогда не знали топора. Некоторым соснам уже больше чем полтысячелетия. Прикоснитесь к живому существу, видевшему солнце раньше, чем увидал его Иван Грозный. В девственном лесу на сотню километров не встретишь тропы. А на редких тропинках деревья в паре метров от земли помечены медвежьими когтями. Чтобы все знали, кто тут хозяин.",
        coverTitle: "До Байкала «на&nbsp;собаках»",
        coverSubtitle: "По мотивам учебной темы о Транссибе — путешествие от столицы до Байкала на электричках.",
        footerLinkMap: "Карты",
        footerLinkWeather: "Погода",
        footerLinkSchedule: "Расписание",
        footerLinkCalendar: "Календарь",
        footerLinkTrips: "Путешествия",

    },
    en: {
        leadTitle: "Travelling across Russia",
        leadSubtitle: "The real country is here, not in the news.",
        leadImageAlt: "a girl in the train",
        leadCaption: "your shelf is - above",
        introTitle: "What on earth haven't we seen there?",
        introText: "According to polls, 95% of Russians dream of going somewhere, but only 36% plan to spend their vacation in their native country. What haven't we seen here at home? In fact, Russia is a whole universe with the gentle sea of the south, the dense forests of the Sayan Mountains and the harsh ice of the Putorana Plateau. And you can see all these beauties without millions in your account, passports and hours-long flights. Like, for example, Vera Bashmakova - a brave young mother who took three children in a handful, put them in her Lada and drove 20 thousand kilometers across her homeland. We have selected and described some interesting places worthy of your vacation.",
        introListOne: "Time zones ",
        introListOneSpan: "11",
        introListTwo: "Natural heritage properties UNESCO ",
        introListTwoSpan: "12",
        introListThree: "Cultural heritage properties UNESCO ",
        introListThreeSpan: "16",
        introListFour: "Natural reserves ",
        introListFourSpan: "105",
        introListFive: "Airports ",
        introListFiveSpan: "241",
        photogrid1: "Train",
        photogrid2: "Snowy mointains",
        photogrid3: "Sheepdog on a haystack in the fog",
        photogrid4: "Fur-trees in the fog",
        photogrid5: "Wheels on the ice",
        photogrid6: "Baikal's shore",
        photogrid7: "Mount Elbrus",
        photogrid8: "Crosswalk",
        photogrid9: "Kamchatka in the fog",
        photogrid10: "Kamchatka landscape",
        photogrid11: "Baikal mountain",
        photogrid12: "Ergaki Nature Park",
        placeTitle1: "The Curonian (Courish) Spit",
        placeImageAlt1: "The Curonian (Courish) Spit",
        placeText1: "Here, amidst forests and sand dunes, you can see two water horizons - the calm Gulf of Kursh on one side and the rippling Baltic Sea on the other. A unique natural zone on the edge of the Russian enclave.",
        placeMoreText1: "The Kaliningrad region does not end there. For the traveler and explorer, there is also the westernmost point of Russia, the Baltic Spit, and the German heritage of a scattering of small seaside towns in the neighborhood. The atmosphere of the area eliminates the hustle and bustle, plunging you into the tranquility of nature and the smell of the steely, cool sea.",
        placeTitle2: "The Kola Peninsula",
        placeImageAlt2: "The Kola Peninsula",
        placeText2: "Almost the entire peninsula lies above the Arctic Circle. The Saami tundra, from which to the south is taiga and to the north is the Arctic Ocean pretending to be the Barents Sea.",
        placeMoreText2: "Perhaps you have watched Zvyagintsev and even heard the story of the Arctic festival in Teriberka. Perhaps the word Khibiny has not remained under the snow of your school memories of geography lessons. Perhaps you were not interested in the super-deep well penetrating the Earth's crust, and apatites have long covered you with apathy. But your dream to see the northern lights starts to come true with a ticket to Murmansk.",
        placeTitle3: "The Altai Mountains",
        placeImageAlt3: "The Altai Mountains",
        placeText3: "Altai is one of the most beautiful places in Russia. First of all because of the mountains: if you drive along the ridge, you will see slopes covered with pine trees, mountain rivers and lakes. And if you open the windows in the car, you can get acquainted with the invisible miracle of these places - the mountain air.",
        placeMoreText3: "The climate in Altai is moderate, so it is best to come here in summer. This way you will see all the variety of local flora and fauna. Elk roam the Altai forests, eagles fly over the ridges, and roe deer graze on the plains. And the famous manulas are also inhabitants of the Altai region.",
        placeTitle4: "Winter on Lake Baikal",
        placeImageAlt4: "Winter on Lake Baikal",
        placeText4: "Everyone knows Baikal as the largest lake in the world. Many people also know that it is the largest source of fresh water and one of the most beautiful places in Russia.",
        placeMoreText4: "Of course, that's all true. But Baikal is also an ideal place for skijoring competitions. This is a sport where a skier ties himself to a motorcycle, and the tandem tries to develop as much speed as possible on the ice. In March 2019, a world record of 197.011 km/h was set at the Baikal Mile festival.",
        placeTitle5: "The Republic of Karelia",
        placeImageAlt5: "The Republic of Karelia",
        placeText5: "Siberia ends not in the Urals, but in Karelia: the Siberian larch that forms the taiga does not grow west of Vodlozero. But here it grows up to 30 meters - the forests of Karelian national parks have never known an axe because of impassable bogs. Some pine trees are more than half a millennium old. Touch a living creature that saw the sun before Ivan the Terrible saw it. In a virgin forest, you won't find a trail for a hundred kilometers. And on the rare paths, trees a couple of meters off the ground are marked with bear claws. So that everyone knows who is the boss.",
        coverTitle: "To Baikal using trains",
        coverSubtitle: "Based on the educational topic about the Trans-Siberian Railway - traveling from the capital to Baikal by electric trains.",
        footerLinkMap: "Maps",
        footerLinkWeather: "Weather",
        footerLinkSchedule: "Timetable",
        footerLinkCalendar: "Calendar",
        footerLinkTrips: "Trips",
    }
}

const ruLang = document.querySelector(".header__lang-link-RU");
const engLang = document.querySelector(".header__lang-link-EN");

// functions:

function updateText(language) {
    const elements = document.querySelectorAll("[data-i18n]");
    const altElements = document.querySelectorAll("[data-i18n-alt]");

    elements.forEach((element) => {
        const key = element.getAttribute("data-i18n");
        element.textContent = translations[language][key];
    });

    altElements.forEach((element) => {
        const key = element.getAttribute("data-i18n-alt");
        element.setAttribute("alt", translations[language][key]);
    });
}

// addEventListeners:

document.addEventListener("DOMContentLoaded", function() {
    const footerCopyright = document.getElementsByClassName("footer__copyright")[0];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear()
    const creator = 'Helga Ish';
    footerCopyright.innerHTML = `© ${currentYear}. ${creator}`;
    updateText("ru");
    ruLang.classList.add("header__lang-link_active");
    engLang.classList.remove("header__lang-link_active")
});

ruLang.addEventListener("click", function() {
    updateText("ru");
    ruLang.classList.add("header__lang-link_active");
    engLang.classList.remove("header__lang-link_active")
});
engLang.addEventListener("click", function() {
    updateText("en");
    ruLang.classList.remove("header__lang-link_active");
    engLang.classList.add("header__lang-link_active")
});