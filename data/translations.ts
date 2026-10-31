
export type QuestionTranslation = {
  question: string;
  a: {
    name: string;
    description: string;
  };
  b: {
    name: string;
    description: string;
  };
  headline: string;
  statistic: string;
  explanation: string;
};

export const translations: Record<string, QuestionTranslation> = {
  "mosquito-vs-shark": {
    question: "Hangisi daha fazla insanın ölümüne neden olur?",
    a: {
      name: "Köpek balığı",
      description: "Okyanusların yırtıcısı",
    },
    b: {
      name: "Sivrisinek",
      description: "Küçük ama ölümcül",
    },
    headline: "Küçücük bir böcek, devasa bir etki.",
    statistic: "610.000",
    explanation:
      "Sıtma tek başına 2024 yılında dünya genelinde tahminen 610.000 kişinin ölümüne neden oldu. Sivrisinekler bu hastalığa yol açan paraziti taşır.",
  },

  "jupiter-vs-planets": {
    question: "Hangisinin kütlesi daha fazladır?",
    a: {
      name: "Jüpiter",
      description: "Dev gezegen",
    },
    b: {
      name: "Diğer tüm gezegenler",
      description: "Geriye kalan yedi gezegen",
    },
    headline: "Tek bir gezegen hepsinden daha ağır.",
    statistic: "2 kattan fazla",
    explanation:
      "Jüpiter'in kütlesi, Güneş Sistemi'ndeki diğer tüm gezegenlerin toplam kütlesinin iki katından fazladır.",
  },

  "venus-vs-mercury-day": {
    question: "Hangisinin kendi ekseni etrafında dönmesi daha uzun sürer?",
    a: {
      name: "Merkür",
      description: "Güneş'e en yakın gezegen",
    },
    b: {
      name: "Venüs",
      description: "Parlak komşumuz",
    },
    headline: "Bir günü, bir yılından bile uzun!",
    statistic: "243 Dünya günü",
    explanation:
      "Venüs'ün kendi ekseni etrafında bir kez dönmesi yaklaşık 243 Dünya günü sürer. Güneş etrafındaki bir turu ise yaklaşık 225 Dünya günüdür.",
  },

  "nintendo-vs-eiffel-tower": {
    question: "Hangisi önce tamamlandı veya kuruldu?",
    a: {
      name: "Nintendo",
      description: "Oyun şirketi",
    },
    b: {
      name: "Eyfel Kulesi",
      description: "Paris'in simgesi",
    },
    headline: "Kule daha önce geldi.",
    statistic: "Mart ve Eylül 1889",
    explanation:
      "Eyfel Kulesi Mart 1889'da tamamlandı. Nintendo ise Eylül 1889'da, başlangıçta Japon oyun kartları üreten bir şirket olarak kuruldu.",
  },

  "oxford-vs-tenochtitlan": {
    question: "Hangisi daha önce var oldu?",
    a: {
      name: "Oxford Üniversitesi",
      description: "Tarihi üniversite",
    },
    b: {
      name: "Tenochtitlan",
      description: "Aztek başkenti",
    },
    headline: "Bir imparatorluğun başkentinden daha eski bir üniversite.",
    statistic: "1096 ve 1325",
    explanation:
      "Oxford'da eğitimin 1096 yılında başladığı biliniyor. Aztek başkenti Tenochtitlan ise 1325 yılında kuruldu.",
  },

  

  "roman-empire-vs-coca-cola": {
    question: "Hangisi daha eski?",
    a: { name: "Roma İmparatorluğu", description: "Antik çağın büyük gücü" },
    b: { name: "Coca-Cola", description: "Ünlü gazlı içecek" },
    headline: "Antik Roma, modern içeceği geride bırakıyor.",
    statistic: "MÖ 27 ve 1886",
    explanation: "Roma İmparatorluğu MÖ 27 yılında başladı. Coca-Cola ise ilk kez 1886 yılında servis edildi.",
  },

  "lightning-vs-sun": {
    question: "Hangisi daha yüksek sıcaklığa ulaşabilir?",
    a: { name: "Yıldırım", description: "Güçlü bir elektrik boşalması" },
    b: { name: "Güneş'in yüzeyi", description: "Yıldızımızın görünen yüzeyi" },
    headline: "Yıldırım, Güneş'ten daha sıcak olabilir.",
    statistic: "Yaklaşık 30.000 K",
    explanation: "Yıldırım kanalı yaklaşık 30.000 Kelvin sıcaklığa ulaşabilir. Bu, Güneş'in yaklaşık 5.500 Kelvin olan görünen yüzeyinden birkaç kat daha sıcaktır.",
  },

  "sharks-vs-trees": {
    question: "Hangisinin evrimsel geçmişi daha eskidir?",
    a: { name: "Köpek balıkları", description: "Antik okyanus avcıları" },
    b: { name: "Ağaçlar", description: "Bitki dünyasının devleri" },
    headline: "Köpek balıkları ağaçlardan önce vardı.",
    statistic: "Yaklaşık 400 milyon yıl",
    explanation: "Erken köpek balığı akrabalarının fosil kayıtları, bilinen en eski ağaçlardan daha eskiye uzanır. Kesin tarihler, erken köpek balıklarının nasıl tanımlandığına bağlıdır.",
  },

  "black-death-vs-road-deaths": {
    question: "Hangisi daha fazla ölüme neden oldu?",
    a: { name: "Kara Ölüm", description: "Orta Çağ'daki veba salgını" },
    b: { name: "Bir yıldaki trafik kazaları", description: "Dünya genelindeki trafik ölümleri" },
    headline: "Orta Çağ'dan akıl almaz büyüklükte bir salgın.",
    statistic: "On milyonlarca insan",
    explanation: "Kara Ölüm, Avrupa, Asya ve Kuzey Afrika'da on milyonlarca insanın ölümüne neden oldu. Buna karşılık günümüzde trafik kazalarında yılda yaklaşık 1,19 milyon kişi hayatını kaybediyor.",
  },

  "saturn-vs-water": {
    question: "Hangisinin ortalama yoğunluğu daha düşüktür?",
    a: { name: "Satürn", description: "Halkalı gezegen" },
    b: { name: "Su", description: "Sıvı su" },
    headline: "Satürn sudan daha az yoğundur.",
    statistic: "0,687 g/cm³",
    explanation: "Satürn'ün ortalama yoğunluğu santimetreküp başına yaklaşık 0,687 gramdır. Sıvı suyun yoğunluğu ise yaklaşık 1 gramdır.",
  },

  "venus-vs-mercury-temperature": {
    question: "Ortalama sıcaklığı hangisi daha yüksektir?",
    a: { name: "Venüs", description: "Güneş'e ikinci en yakın gezegen" },
    b: { name: "Merkür", description: "Güneş'e en yakın gezegen" },
    headline: "Güneş'e en yakın gezegen en sıcak olan değil.",
    statistic: "Yaklaşık 464°C",
    explanation: "Venüs'ün kalın atmosferi aşırı sera etkisiyle ısıyı hapseder. Bu nedenle ortalama sıcaklığı yaklaşık 464°C'ye ulaşır ve Merkür'den daha sıcaktır.",
  },

  "moon-vs-pluto": {
    question: "Hangisinin çapı daha büyüktür?",
    a: { name: "Dünya'nın Ay'ı", description: "Doğal uydumuz" },
    b: { name: "Plüton", description: "Cüce gezegen" },
    headline: "Ay, Plüton'dan daha büyüktür.",
    statistic: "3.474 km ve 2.377 km",
    explanation: "Ay'ın çapı yaklaşık 3.474 kilometre, Plüton'un çapı ise yaklaşık 2.377 kilometredir.",
  },

  "peregrine-vs-cheetah": {
    question: "Hangisi daha yüksek hıza ulaşabilir?",
    a: { name: "Gök doğanı", description: "Dalış hızı şampiyonu" },
    b: { name: "Çita", description: "Karadaki en hızlı hayvan" },
    headline: "Gökyüzü, savanayı geride bırakıyor.",
    statistic: "Saatte 320 km'ye kadar",
    explanation: "Gök doğanı avlanırken dalışta yaklaşık 320 km/sa hıza ulaşabilir. Çita ise karada kısa mesafeli koşularda yaklaşık 100–103 km/sa hıza çıkabilir.",
  },

  "mariana-trench-vs-everest": {
    question: "Deniz seviyesine göre hangisi daha uzak mesafededir?",
    a: { name: "Everest Dağı", description: "Dünyanın en yüksek dağı" },
    b: { name: "Challenger Deep", description: "Bilinen en derin okyanus noktası" },
    headline: "Okyanusun derinliği Everest'in yüksekliğini aşıyor.",
    statistic: "Yaklaşık 11.000 metre",
    explanation: "Mariana Çukuru'ndaki Challenger Deep, deniz seviyesinin yaklaşık 11.000 metre altındadır. Everest ise deniz seviyesinden yaklaşık 8.849 metre yükselir.",
  },

  "statue-of-liberty-vs-eiffel-tower": {
    question: "Hangisi daha ağırdır?",
    a: { name: "Özgürlük Heykeli", description: "New York'un ünlü anıtı" },
    b: { name: "Eyfel Kulesi", description: "Paris'in demir simgesi" },
    headline: "Kule, heykelden çok daha ağır.",
    statistic: "Yaklaşık 10.100 ton",
    explanation: "Özgürlük Heykeli'nin kendisi yaklaşık 254 ton ağırlığındadır. Eyfel Kulesi'nin metal yapısı ise yaklaşık 10.100 tondur.",
  },

  "human-brain-vs-lightbulb": {
    question: "Hangisi daha fazla güç tüketir?",
    a: { name: "İnsan beyni", description: "Vücudunun kontrol merkezi" },
    b: { name: "60 watt ampul", description: "Geleneksel ev ampulü" },
    headline: "Bir ampul beyninden daha fazla enerji kullanabilir.",
    statistic: "60 watt ve yaklaşık 20 watt",
    explanation: "İnsan beyni yaklaşık 20 watt güç kullanır. Geleneksel 60 watt akkor ampul bunun yaklaşık üç katını tüketir.",
  },

  "human-cells-vs-bacteria": {
    question: "Vücudunda hangisinin daha fazla olduğu tahmin ediliyor?",
    a: { name: "İnsan hücreleri", description: "Seni oluşturan hücreler" },
    b: { name: "Bakteriler", description: "Vücudunda ve üzerinde yaşayan mikroplar" },
    headline: "Yalnızca insan hücrelerinden oluşmuyorsun.",
    statistic: "Yaklaşık 38 trilyon ve 30 trilyon",
    explanation: "Etkili bir bilimsel tahmine göre ortalama insan vücudunda yaklaşık 38 trilyon bakteri hücresi ve 30 trilyon insan hücresi bulunur. Bunlar kesin sayımlar değil, tahminlerdir.",
  },

  "sahara-vs-australia": {
    question: "Hangisinin yüzölçümü daha büyüktür?",
    a: { name: "Sahra Çölü", description: "Dünyanın en büyük sıcak çölü" },
    b: { name: "Avustralya", description: "Ada kıtası" },
    headline: "Bir çöl, koca bir ülkeden daha büyük.",
    statistic: "Yaklaşık 9,2 ve 7,7 milyon km²",
    explanation: "Sahra Çölü yaklaşık 9,2 milyon kilometrekare alan kaplar. Avustralya'nın toplam yüzölçümü ise yaklaşık 7,7 milyon kilometrekaredir.",
  },

  "great-wall-vs-earth-circumference": {
    question: "Hangisi daha uzundur?",
    a: { name: "Çin Seddi", description: "Tarihi sur sistemi" },
    b: { name: "Dünya'nın çevresi", description: "Ekvator boyunca gezegenimizin çevresi" },
    headline: "Çin Seddi, Dünya'nın çevresini dolaşmaya yetmez.",
    statistic: "21.196 km ve 40.075 km",
    explanation: "Çin Seddi sisteminin toplam uzunluğu yaklaşık 21.196 kilometredir. Dünya'nın ekvator çevresi ise yaklaşık 40.075 kilometredir.",
  },

  "cleopatra-vs-moon-landing": {
    question: "Hangisi günümüze daha yakındır?",
    a: { name: "Kleopatra'nın hükümdarlığı", description: "Ptolemaios Mısır'ının son etkin hükümdarı" },
    b: { name: "İlk Ay'a iniş", description: "İnsanlığın Ay'a ilk yolculuğu" },
    headline: "Ay'a iniş, Kleopatra'dan çok daha yakın bir tarihte gerçekleşti.",
    statistic: "MÖ 30 ve 1969",
    explanation: "Kleopatra MÖ 30 yılında öldü. İlk insanlı Ay yolculuğu ise 1969 yılında gerçekleşti. Aralarında yaklaşık iki bin yıl vardır.",
  },

  "pluto-vs-russia": {
    question: "Hangisinin yüzey alanı daha büyüktür?",
    a: { name: "Plüton", description: "Cüce gezegen" },
    b: { name: "Rusya", description: "Dünyanın en büyük ülkesi" },
    headline: "Plüton'un yüzey alanı Rusya'dan daha büyük.",
    statistic: "Plüton: 17,8 milyon km². Rusya: 17,1 milyon km².",
    explanation: "Güneş Sistemi'nin dışındaki küçük bir dünya olmasına rağmen Plüton'un toplam yüzey alanı, Rusya'nın kara alanından biraz daha büyüktür.",
  },

  "trees-vs-milky-way-stars": {
    question: "Hangisinin sayısı daha fazladır?",
    a: { name: "Dünya'daki ağaçlar", description: "Gezegenimizdeki tüm ağaçlar" },
    b: { name: "Samanyolu'ndaki yıldızlar", description: "İçinde yaşadığımız galaksi" },
    headline: "Dünya'da Samanyolu'ndaki yıldızlardan daha fazla ağaç var.",
    statistic: "Yaklaşık 3 trilyon ağaç ve 100–400 milyar yıldız.",
    explanation: "Bilim insanları Dünya'da yaklaşık 3 trilyon ağaç bulunduğunu tahmin ediyor. Samanyolu'nun ise yaklaşık 100–400 milyar yıldız içerdiği düşünülüyor.",
  },

  "methuselah-vs-great-pyramid": {
    question: "Hangisi daha eskidir?",
    a: { name: "Methuselah Ağacı", description: "Antik bir uzun ömürlü çam ağacı" },
    b: { name: "Büyük Piramit", description: "Gize Piramidi" },
    headline: "Yaşayan bir ağaç, Büyük Piramit'ten daha yaşlı.",
    statistic: "Methuselah 4.800 yıldan daha yaşlı.",
    explanation: "Methuselah adı verilen antik çam ağacı, Gize'deki Büyük Piramit inşa edilmeden önce büyümeye başlamıştı.",
  },

  "moon-vs-africa": {
    question: "Hangisinin yüzey alanı daha büyüktür?",
    a: { name: "Ay", description: "Dünya'nın doğal uydusu" },
    b: { name: "Afrika", description: "Dünyanın en büyük ikinci kıtası" },
    headline: "Ay'ın yüzey alanı Afrika'dan daha büyük.",
    statistic: "Ay: 37,9 milyon km². Afrika: 30,4 milyon km².",
    explanation: "Ay'ın toplam yüzey alanı, Afrika kıtasının yüzölçümünden yaklaşık yüzde 25 daha büyüktür.",
  },

  "humans-vs-wild-mammals-biomass": {
    question: "Karbon kütlesine göre hangisinin toplam biyokütlesi daha fazladır?",
    a: { name: "Tüm insanlar", description: "Dünya üzerindeki insan nüfusu" },
    b: { name: "Vahşi memeliler", description: "Tüm yabani memeli türleri" },
    headline: "İnsanların biyokütlesi tüm vahşi memelilerinkinden daha fazla.",
    statistic: "İnsanlar: 0,06 gigaton. Vahşi memeliler: 0,007 gigaton karbon.",
    explanation: "Karbon kütlesiyle ölçüldüğünde insanların biyokütlesi, tüm vahşi memelilerin toplam biyokütlesinin yaklaşık dokuz katıdır. Bu karşılaştırmaya çiftlik hayvanları dahil değildir.",
  },

  "earth-equator-vs-sound": {
    question: "Hangisi daha hızlı hareket eder?",
    a: { name: "Dünya'nın ekvatoru", description: "Dünya'nın dönüşü nedeniyle hareket eden yüzey" },
    b: { name: "Ses hızı", description: "Deniz seviyesinde, 20°C havadaki ses hızı" },
    headline: "Ayaklarının altındaki zemin sesten hızlı hareket ediyor.",
    statistic: "Yaklaşık 1.670 km/sa ve 1.235 km/sa.",
    explanation: "Dünya döndüğü için ekvatordaki bir nokta gezegenin çevresinde saatte yaklaşık 1.670 kilometre hızla hareket eder. Bu, belirtilen koşullarda havadaki ses hızından daha fazladır.",
  },

  "lightning-vs-sun-surface": {
    question: "Hangisi daha yüksek sıcaklığa ulaşır?",
    a: { name: "Yıldırım", description: "Yıldırım kanalındaki hava" },
    b: { name: "Güneş'in yüzeyi", description: "Güneş'in görünen fotosfer tabakası" },
    headline: "Yıldırım, Güneş'in yüzeyinden daha sıcak olabilir.",
    statistic: "Yıldırım: yaklaşık 30.000 K. Güneş: yaklaşık 5.778 K.",
    explanation: "Yıldırım kanalı çevresindeki havayı yaklaşık 30.000 Kelvin sıcaklığa kadar ısıtabilir. Bu, Güneş'in görünen yüzeyinin sıcaklığının yaklaşık beş katıdır.",
  },

  "last-mammoths-vs-great-pyramid": {
    question: "Hangisi daha sonra gerçekleşti?",
    a: { name: "Büyük Piramit", description: "Antik Mısır anıtı" },
    b: { name: "Son yünlü mamutlar", description: "Wrangel Adası'nda yaşayan son topluluk" },
    headline: "Yünlü mamutlar, Büyük Piramit inşa edildikten sonra da yaşadı.",
    statistic: "Son mamutlar yaklaşık 4.000 yıl öncesine kadar yaşadı.",
    explanation: "Yünlü mamutların küçük bir topluluğu, Büyük Piramit'in inşa edilmesinden binlerce yıl sonra Wrangel Adası'nda yaşamaya devam etti.",
  },

  "tokyo-vs-australia-population": {
    question: "Hangisinin nüfusu daha fazladır?",
    a: { name: "Tokyo", description: "Metropol kentsel yerleşim alanı" },
    b: { name: "Avustralya", description: "Ülkenin tamamı" },
    headline: "Tokyo'nun nüfusu tüm Avustralya'dan daha fazla.",
    statistic: "Tokyo: 33,4 milyon. Avustralya: 27,8 milyon.",
    explanation: "Bu karşılaştırmada Tokyo'nun 2025 yılı kentsel yerleşim nüfusu tahmini ile Avustralya'nın 2025 yılı sonundaki nüfusu kullanılmıştır.",
  },

  "baikal-vs-great-lakes": {
    question: "Hangisi daha fazla su barındırır?",
    a: { name: "Baykal Gölü", description: "Dünyanın en derin tatlı su gölü" },
    b: { name: "Beş Büyük Göl", description: "Kuzey Amerika'nın ünlü göl sistemi" },
    headline: "Baykal Gölü, beş Büyük Göl'ün toplamından biraz daha fazla su barındırıyor.",
    statistic: "Baykal: 23.000 km³. Büyük Göller: 22.684 km³.",
    explanation: "Sibirya'daki Baykal Gölü, Kuzey Amerika'daki beş Büyük Göl'ün toplam su hacmini az farkla aşan devasa miktarda tatlı su barındırır.",
  },

  "eiffel-vs-hitler": {
    question: "Hangisi daha önce gerçekleşti?",
    a: { name: "Eyfel Kulesi", description: "Paris'in ikonik simgesi" },
    b: { name: "Hitler'in doğumu", description: "Adolf Hitler'in dünyaya gelişi" },
    headline: "Eyfel Kulesi, Hitler'den daha yaşlı.",
    statistic: "31 Mart 1889 — Hitler'in doğumundan 20 gün önce.",
    explanation: "Eyfel Kulesi 31 Mart 1889'da açıldı. Adolf Hitler ise 20 Nisan 1889'da doğdu. Dünyanın en tanınmış yapılarından biri, tarihin en kötü şöhretli diktatörlerinden birinden biraz daha eskidir.",
  },

};
