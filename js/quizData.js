// Quiz-Daten für jedes Buch - Mehrsprachig (DE/AR/EN)
const quizData = {
    1: [ // Prophet Mohammed ﷺ
        {
            question: { de: "In welchem Jahr wurde Prophet Mohammed ﷺ geboren?", ar: "في أي عام وُلد النبي محمد ﷺ؟", en: "In which year was Prophet Mohammed ﷺ born?" },
            options: { de: ["550", "570", "600", "632"], ar: ["550", "570", "600", "632"], en: ["550", "570", "600", "632"] },
            correct: 1
        },
        {
            question: { de: "Wie nannten die Menschen Mohammed ﷺ wegen seiner Ehrlichkeit?", ar: "ماذا سمّى الناس محمداً ﷺ بسبب صدقه؟", en: "What did people call Mohammed ﷺ because of his honesty?" },
            options: { de: ["Al-Karim", "Al-Amin", "Al-Hakim", "Al-Sadiq"], ar: ["الكريم", "الأمين", "الحكيم", "الصادق"], en: ["Al-Karim", "Al-Amin", "Al-Hakim", "Al-Sadiq"] },
            correct: 1
        },
        {
            question: { de: "Wie hieß die Frau, die Mohammed ﷺ heiratete?", ar: "ما اسم المرأة التي تزوجها محمد ﷺ؟", en: "What was the name of the woman Mohammed ﷺ married?" },
            options: { de: ["Fatima", "Aisha", "Khadija", "Maryam"], ar: ["فاطمة", "عائشة", "خديجة", "مريم"], en: ["Fatima", "Aisha", "Khadija", "Maryam"] },
            correct: 2
        },
        {
            question: { de: "In welcher Höhle erhielt Mohammed ﷺ die erste Offenbarung?", ar: "في أي غار نزل الوحي الأول على محمد ﷺ؟", en: "In which cave did Mohammed ﷺ receive the first revelation?" },
            options: { de: ["Höhle Thawr", "Höhle Hira", "Höhle Kahf", "Höhle Nur"], ar: ["غار ثور", "غار حراء", "غار الكهف", "غار النور"], en: ["Cave of Thawr", "Cave of Hira", "Cave of Kahf", "Cave of Nur"] },
            correct: 1
        },
        {
            question: { de: "In welche Stadt wanderte Mohammed ﷺ aus (Hijra)?", ar: "إلى أي مدينة هاجر محمد ﷺ؟", en: "To which city did Mohammed ﷺ migrate (Hijra)?" },
            options: { de: ["Mekka", "Jerusalem", "Medina", "Taif"], ar: ["مكة", "القدس", "المدينة", "الطائف"], en: ["Mecca", "Jerusalem", "Medina", "Taif"] },
            correct: 2
        }
    ],
    2: [ // Die fünf Säulen
        {
            question: { de: "Wie viele Säulen hat der Islam?", ar: "كم عدد أركان الإسلام؟", en: "How many pillars does Islam have?" },
            options: { de: ["3", "4", "5", "6"], ar: ["3", "4", "5", "6"], en: ["3", "4", "5", "6"] },
            correct: 2
        },
        {
            question: { de: "Wie oft am Tag beten Muslime?", ar: "كم مرة يصلي المسلمون في اليوم؟", en: "How many times a day do Muslims pray?" },
            options: { de: ["3 mal", "4 mal", "5 mal", "7 mal"], ar: ["3 مرات", "4 مرات", "5 مرات", "7 مرات"], en: ["3 times", "4 times", "5 times", "7 times"] },
            correct: 2
        },
        {
            question: { de: "Was bedeutet Zakat?", ar: "ما معنى الزكاة؟", en: "What does Zakat mean?" },
            options: { de: ["Beten", "Fasten", "Spenden", "Pilgerfahrt"], ar: ["الصلاة", "الصوم", "الإنفاق", "الحج"], en: ["Prayer", "Fasting", "Charity", "Pilgrimage"] },
            correct: 2
        },
        {
            question: { de: "In welchem Monat fasten Muslime?", ar: "في أي شهر يصوم المسلمون؟", en: "In which month do Muslims fast?" },
            options: { de: ["Shaban", "Ramadan", "Muharram", "Rajab"], ar: ["شعبان", "رمضان", "محرم", "رجب"], en: ["Shaban", "Ramadan", "Muharram", "Rajab"] },
            correct: 1
        },
        {
            question: { de: "Wohin reisen Muslime für die Hajj?", ar: "إلى أين يسافر المسلمون للحج؟", en: "Where do Muslims travel for Hajj?" },
            options: { de: ["Medina", "Jerusalem", "Mekka", "Kairo"], ar: ["المدينة", "القدس", "مكة", "القاهرة"], en: ["Medina", "Jerusalem", "Mecca", "Cairo"] },
            correct: 2
        }
    ],
    3: [ // Prophet Adam
        {
            question: { de: "Woraus erschuf Allah Adam?", ar: "مم خلق الله آدم؟", en: "What did Allah create Adam from?" },
            options: { de: ["Aus Licht", "Aus Wasser", "Aus Erde und Ton", "Aus Feuer"], ar: ["من نور", "من ماء", "من تراب وطين", "من نار"], en: ["From light", "From water", "From earth and clay", "From fire"] },
            correct: 2
        },
        {
            question: { de: "Wie heißt die Gefährtin von Adam?", ar: "ما اسم رفيقة آدم؟", en: "What is the name of Adam's companion?" },
            options: { de: ["Maryam", "Hawa (Eva)", "Khadija", "Sara"], ar: ["مريم", "حواء", "خديجة", "سارة"], en: ["Maryam", "Hawa (Eve)", "Khadija", "Sara"] },
            correct: 1
        },
        {
            question: { de: "Was durften Adam und Hawa im Paradies NICHT tun?", ar: "ما الذي لم يُسمح لآدم وحواء به في الجنة؟", en: "What were Adam and Hawa NOT allowed to do in Paradise?" },
            options: { de: ["Blumen pflücken", "Von einem bestimmten Baum essen", "Spazieren gehen", "Tiere streicheln"], ar: ["قطف الزهور", "الأكل من شجرة معينة", "التنزه", "ملاعبة الحيوانات"], en: ["Pick flowers", "Eat from a certain tree", "Take walks", "Pet animals"] },
            correct: 1
        },
        {
            question: { de: "Was taten Adam und Hawa nach ihrem Fehler?", ar: "ماذا فعل آدم وحواء بعد خطئهما؟", en: "What did Adam and Hawa do after their mistake?" },
            options: { de: ["Sie versteckten sich", "Sie bereuten und baten um Vergebung", "Sie liefen weg", "Sie stritten"], ar: ["اختبأا", "تابا وطلبا المغفرة", "هربا", "تشاجرا"], en: ["They hid", "They repented and asked for forgiveness", "They ran away", "They argued"] },
            correct: 1
        },
        {
            question: { de: "Was war Adam als erster Mensch auch?", ar: "ماذا كان آدم أيضاً كأول إنسان؟", en: "What was Adam also as the first human?" },
            options: { de: ["Ein König", "Ein Engel", "Der erste Prophet", "Ein Gelehrter"], ar: ["ملك", "ملاك", "أول نبي", "عالم"], en: ["A king", "An angel", "The first Prophet", "A scholar"] },
            correct: 2
        }
    ],
    4: [ // Prophet Noah (Nuh)
        {
            question: { de: "Wie viele Jahre hat Noah gepredigt?", ar: "كم سنة دعا نوح قومه؟", en: "How many years did Noah preach?" },
            options: { de: ["100 Jahre", "500 Jahre", "950 Jahre", "200 Jahre"], ar: ["100 سنة", "500 سنة", "950 سنة", "200 سنة"], en: ["100 years", "500 years", "950 years", "200 years"] },
            correct: 2
        },
        {
            question: { de: "Was sollte Noah bauen?", ar: "ماذا أمر الله نوحاً أن يبني؟", en: "What was Noah supposed to build?" },
            options: { de: ["Eine Moschee", "Ein Haus", "Eine Arche", "Eine Brücke"], ar: ["مسجد", "بيت", "سفينة", "جسر"], en: ["A mosque", "A house", "An ark", "A bridge"] },
            correct: 2
        },
        {
            question: { de: "Wie viele Tiere von jeder Art kamen auf die Arche?", ar: "كم حيوان من كل نوع ركب السفينة؟", en: "How many animals of each kind came on the Ark?" },
            options: { de: ["Eins", "Ein Paar (zwei)", "Drei", "Vier"], ar: ["واحد", "زوج (اثنان)", "ثلاثة", "أربعة"], en: ["One", "A pair (two)", "Three", "Four"] },
            correct: 1
        },
        {
            question: { de: "Was passierte, als die Flut vorbei war?", ar: "ماذا حدث عندما انتهى الطوفان؟", en: "What happened when the flood was over?" },
            options: { de: ["Die Arche flog", "Die Arche landete auf einem Berg", "Die Arche sank", "Die Arche verschwand"], ar: ["طارت السفينة", "رست السفينة على جبل", "غرقت السفينة", "اختفت السفينة"], en: ["The Ark flew", "The Ark landed on a mountain", "The Ark sank", "The Ark disappeared"] },
            correct: 1
        },
        {
            question: { de: "Womit kam der Vogel zurück?", ar: "بماذا عاد الطائر؟", en: "What did the bird come back with?" },
            options: { de: ["Mit einem Fisch", "Mit einem Olivenzweig", "Mit einem Stein", "Mit nichts"], ar: ["بسمكة", "بغصن زيتون", "بحجر", "بلا شيء"], en: ["With a fish", "With an olive branch", "With a stone", "With nothing"] },
            correct: 1
        }
    ],
    5: [ // Prophet Ibrahim
        {
            question: { de: "Was fiel Ibrahim auf, als er die Sterne beobachtete?", ar: "ماذا لاحظ إبراهيم عندما راقب النجوم؟", en: "What did Ibrahim notice when observing the stars?" },
            options: { de: ["Sie sind schön", "Sie verschwinden - der wahre Gott geht nie unter", "Sie leuchten hell", "Sie tanzen"], ar: ["إنها جميلة", "تختفي - الإله الحقيقي لا يغيب", "تلمع بشدة", "ترقص"], en: ["They are beautiful", "They disappear - the true God never sets", "They shine bright", "They dance"] },
            correct: 1
        },
        {
            question: { de: "Was machte Ibrahim mit den Götzen?", ar: "ماذا فعل إبراهيم بالأصنام؟", en: "What did Ibrahim do with the idols?" },
            options: { de: ["Er betete sie an", "Er zerstörte sie", "Er malte sie an", "Er verkaufte sie"], ar: ["عبدها", "حطّمها", "لوّنها", "باعها"], en: ["He worshipped them", "He destroyed them", "He painted them", "He sold them"] },
            correct: 1
        },
        {
            question: { de: "Was passierte, als Ibrahim ins Feuer geworfen wurde?", ar: "ماذا حدث عندما أُلقي إبراهيم في النار؟", en: "What happened when Ibrahim was thrown into the fire?" },
            options: { de: ["Er verbrannte", "Das Feuer wurde kühl und friedlich", "Es regnete", "Der Wind löschte es"], ar: ["احترق", "صارت النار برداً وسلاماً", "أمطرت السماء", "أطفأتها الريح"], en: ["He burned", "The fire became cool and peaceful", "It rained", "The wind put it out"] },
            correct: 1
        },
        {
            question: { de: "Was bauten Ibrahim und Ismail zusammen?", ar: "ماذا بنى إبراهيم وإسماعيل معاً؟", en: "What did Ibrahim and Ismail build together?" },
            options: { de: ["Eine Moschee", "Die Kaaba", "Ein Haus", "Eine Schule"], ar: ["مسجد", "الكعبة", "بيت", "مدرسة"], en: ["A mosque", "The Kaaba", "A house", "A school"] },
            correct: 1
        },
        {
            question: { de: "Wie wird Ibrahim im Islam genannt?", ar: "كيف يُسمى إبراهيم في الإسلام؟", en: "What is Ibrahim called in Islam?" },
            options: { de: ["Der Geduldige", "Der Freund Allahs", "Der Weise", "Der Starke"], ar: ["الصبور", "خليل الله", "الحكيم", "القوي"], en: ["The Patient", "The Friend of Allah", "The Wise", "The Strong"] },
            correct: 1
        }
    ],
    6: [ // Prophet Musa
        {
            question: { de: "Wo wurde Baby Musa hingelegt?", ar: "أين وُضع الطفل موسى؟", en: "Where was baby Musa placed?" },
            options: { de: ["In ein Bett", "In einen Korb auf dem Nil", "In eine Höhle", "In einen Garten"], ar: ["في سرير", "في سلة على النيل", "في كهف", "في حديقة"], en: ["In a bed", "In a basket on the Nile", "In a cave", "In a garden"] },
            correct: 1
        },
        {
            question: { de: "Wo wuchs Musa auf?", ar: "أين نشأ موسى؟", en: "Where did Musa grow up?" },
            options: { de: ["In der Wüste", "Im Palast des Pharao", "In Medina", "In einem Dorf"], ar: ["في الصحراء", "في قصر فرعون", "في المدينة", "في قرية"], en: ["In the desert", "In Pharaoh's palace", "In Medina", "In a village"] },
            correct: 1
        },
        {
            question: { de: "Was sah Musa in der Wüste?", ar: "ماذا رأى موسى في الصحراء؟", en: "What did Musa see in the desert?" },
            options: { de: ["Eine Schlange", "Einen brennenden Busch", "Einen Engel", "Einen See"], ar: ["أفعى", "شجرة مشتعلة", "ملاك", "بحيرة"], en: ["A snake", "A burning bush", "An angel", "A lake"] },
            correct: 1
        },
        {
            question: { de: "Was passierte mit Musas Stab?", ar: "ماذا حدث لعصا موسى؟", en: "What happened to Musa's staff?" },
            options: { de: ["Er zerbrach", "Er wurde zu einer Schlange", "Er leuchtete", "Er flog"], ar: ["انكسرت", "تحولت لأفعى", "أضاءت", "طارت"], en: ["It broke", "It became a snake", "It glowed", "It flew"] },
            correct: 1
        },
        {
            question: { de: "Was geschah am Roten Meer?", ar: "ماذا حدث عند البحر الأحمر؟", en: "What happened at the Red Sea?" },
            options: { de: ["Es trocknete aus", "Es teilte sich", "Es wurde zu Eis", "Es verschwand"], ar: ["جف", "انشق", "تجمد", "اختفى"], en: ["It dried up", "It parted", "It froze", "It disappeared"] },
            correct: 1
        }
    ],
    7: [ // Prophet Yusuf
        {
            question: { de: "Was sah Yusuf in seinem Traum?", ar: "ماذا رأى يوسف في حلمه؟", en: "What did Yusuf see in his dream?" },
            options: { de: ["Tiere", "Elf Sterne, die Sonne und der Mond", "Blumen", "Wolken"], ar: ["حيوانات", "أحد عشر كوكباً والشمس والقمر", "زهور", "غيوم"], en: ["Animals", "Eleven stars, the sun and the moon", "Flowers", "Clouds"] },
            correct: 1
        },
        {
            question: { de: "Wohin warfen die Brüder Yusuf?", ar: "أين ألقى الإخوة يوسف؟", en: "Where did the brothers throw Yusuf?" },
            options: { de: ["In einen Fluss", "In einen Brunnen", "In ein Loch", "In den Wald"], ar: ["في نهر", "في بئر", "في حفرة", "في الغابة"], en: ["In a river", "In a well", "In a hole", "In the forest"] },
            correct: 1
        },
        {
            question: { de: "Welche besondere Gabe hatte Yusuf?", ar: "ما الموهبة الخاصة التي أُعطيها يوسف؟", en: "What special gift did Yusuf have?" },
            options: { de: ["Er konnte fliegen", "Er konnte Träume deuten", "Er war unsichtbar", "Er konnte singen"], ar: ["يستطيع الطيران", "يستطيع تفسير الأحلام", "كان خفياً", "يستطيع الغناء"], en: ["He could fly", "He could interpret dreams", "He was invisible", "He could sing"] },
            correct: 1
        },
        {
            question: { de: "Was wurde Yusuf in Ägypten?", ar: "ماذا أصبح يوسف في مصر؟", en: "What did Yusuf become in Egypt?" },
            options: { de: ["König", "Minister", "Soldat", "Priester"], ar: ["ملك", "وزير", "جندي", "كاهن"], en: ["King", "Minister", "Soldier", "Priest"] },
            correct: 1
        },
        {
            question: { de: "Was tat Yusuf, als seine Brüder kamen?", ar: "ماذا فعل يوسف عندما جاء إخوته؟", en: "What did Yusuf do when his brothers came?" },
            options: { de: ["Er bestrafte sie", "Er vergab ihnen", "Er versteckte sich", "Er weinte"], ar: ["عاقبهم", "سامحهم", "اختبأ", "بكى"], en: ["He punished them", "He forgave them", "He hid", "He cried"] },
            correct: 1
        }
    ],
    8: [ // Prophet Isa
        {
            question: { de: "Wer war die Mutter von Isa?", ar: "من كانت أم عيسى؟", en: "Who was the mother of Isa?" },
            options: { de: ["Khadija", "Hawa", "Maryam (Maria)", "Aisha"], ar: ["خديجة", "حواء", "مريم", "عائشة"], en: ["Khadija", "Hawa", "Maryam (Mary)", "Aisha"] },
            correct: 2
        },
        {
            question: { de: "Was tat Baby Isa als Wunder?", ar: "ما المعجزة التي فعلها عيسى وهو رضيع؟", en: "What miracle did baby Isa perform?" },
            options: { de: ["Er lief", "Er sprach und verteidigte seine Mutter", "Er flog", "Er lachte"], ar: ["مشى", "تكلم ودافع عن أمه", "طار", "ضحك"], en: ["He walked", "He spoke and defended his mother", "He flew", "He laughed"] },
            correct: 1
        },
        {
            question: { de: "Was formte Isa aus Ton?", ar: "ماذا صنع عيسى من الطين؟", en: "What did Isa shape from clay?" },
            options: { de: ["Ein Haus", "Einen Vogel", "Eine Blume", "Einen Fisch"], ar: ["بيت", "طائر", "زهرة", "سمكة"], en: ["A house", "A bird", "A flower", "A fish"] },
            correct: 1
        },
        {
            question: { de: "Wie heißt das heilige Buch, das Isa erhielt?", ar: "ما اسم الكتاب المقدس الذي أُنزل على عيسى؟", en: "What is the name of the holy book Isa received?" },
            options: { de: ["Koran", "Tawrat", "Injil (Evangelium)", "Zabur"], ar: ["القرآن", "التوراة", "الإنجيل", "الزبور"], en: ["Quran", "Torah", "Injil (Gospel)", "Psalms"] },
            correct: 2
        },
        {
            question: { de: "Was geschah mit Isa laut Islam?", ar: "ماذا حدث لعيسى حسب الإسلام؟", en: "What happened to Isa according to Islam?" },
            options: { de: ["Er starb", "Allah hob ihn in den Himmel", "Er ging weg", "Er versteckte sich"], ar: ["مات", "رفعه الله إلى السماء", "ذهب بعيداً", "اختبأ"], en: ["He died", "Allah raised him to heaven", "He went away", "He hid"] },
            correct: 1
        }
    ],
    9: [ // Gute Manieren
        {
            question: { de: "Was sagen wir vor dem Essen?", ar: "ماذا نقول قبل الأكل؟", en: "What do we say before eating?" },
            options: { de: ["Alhamdulillah", "Bismillah", "SubhanAllah", "Inshallah"], ar: ["الحمد لله", "بسم الله", "سبحان الله", "إن شاء الله"], en: ["Alhamdulillah", "Bismillah", "SubhanAllah", "Inshallah"] },
            correct: 1
        },
        {
            question: { de: "Was bedeutet 'Lächeln ist Sadaqa'?", ar: "ما معنى 'تبسمك صدقة'؟", en: "What does 'Smiling is Sadaqa' mean?" },
            options: { de: ["Lächeln kostet Geld", "Lächeln ist eine gute Tat", "Lächeln ist verboten", "Lächeln ist schwer"], ar: ["الابتسامة تكلف مالاً", "الابتسامة عمل خير", "الابتسامة محرمة", "الابتسامة صعبة"], en: ["Smiling costs money", "Smiling is a good deed", "Smiling is forbidden", "Smiling is hard"] },
            correct: 1
        },
        {
            question: { de: "Wie nannte man Mohammed ﷺ wegen seiner Ehrlichkeit?", ar: "ماذا سمّوا محمداً ﷺ بسبب صدقه؟", en: "What was Mohammed ﷺ called because of his honesty?" },
            options: { de: ["Al-Amin", "Al-Karim", "Al-Rashid", "Al-Hakim"], ar: ["الأمين", "الكريم", "الرشيد", "الحكيم"], en: ["Al-Amin", "Al-Karim", "Al-Rashid", "Al-Hakim"] },
            correct: 0
        },
        {
            question: { de: "Was sagte der Prophet über Sauberkeit?", ar: "ماذا قال النبي ﷺ عن النظافة؟", en: "What did the Prophet say about cleanliness?" },
            options: { de: ["Sie ist unwichtig", "Sie ist die Hälfte des Glaubens", "Sie ist schwer", "Sie ist nur für Erwachsene"], ar: ["غير مهمة", "شطر الإيمان", "صعبة", "للكبار فقط"], en: ["It's unimportant", "It is half of faith", "It's hard", "It's only for adults"] },
            correct: 1
        },
        {
            question: { de: "Was sollen wir laut Islam mit den Eltern tun?", ar: "ماذا يجب أن نفعل مع والدينا في الإسلام؟", en: "What should we do with our parents according to Islam?" },
            options: { de: ["Ignorieren", "Respektieren und lieben", "Nur manchmal zuhören", "Nur gehorchen wenn wir wollen"], ar: ["تجاهلهم", "احترامهم ومحبتهم", "الاستماع أحياناً فقط", "الطاعة فقط عندما نريد"], en: ["Ignore them", "Respect and love them", "Only listen sometimes", "Only obey when we want"] },
            correct: 1
        }
    ],
    11: [ // Was ist Islam?
        {
            question: { de: "Was bedeutet das Wort 'Islam'?", ar: "ما معنى كلمة 'إسلام'؟", en: "What does the word 'Islam' mean?" },
            options: { de: ["Stärke", "Frieden und Hingabe an Gott", "Wissen", "Reichtum"], ar: ["القوة", "السلام والاستسلام لله", "العلم", "الثروة"], en: ["Strength", "Peace and submission to God", "Knowledge", "Wealth"] },
            correct: 1
        },
        {
            question: { de: "Wie viele Muslime gibt es ungefähr auf der Welt?", ar: "كم عدد المسلمين تقريباً في العالم؟", en: "How many Muslims are there approximately in the world?" },
            options: { de: ["500 Millionen", "1 Milliarde", "Über 1,8 Milliarden", "100 Millionen"], ar: ["500 مليون", "مليار", "أكثر من 1.8 مليار", "100 مليون"], en: ["500 million", "1 billion", "Over 1.8 billion", "100 million"] },
            correct: 2
        },
        {
            question: { de: "Was bedeutet 'Assalamu Alaikum'?", ar: "ما معنى 'السلام عليكم'؟", en: "What does 'Assalamu Alaikum' mean?" },
            options: { de: ["Guten Morgen", "Friede sei mit dir", "Wie geht es dir?", "Auf Wiedersehen"], ar: ["صباح الخير", "السلام عليك", "كيف حالك؟", "مع السلامة"], en: ["Good morning", "Peace be upon you", "How are you?", "Goodbye"] },
            correct: 1
        },
        {
            question: { de: "Wie heißt das große Fest am Ende des Ramadan?", ar: "ما اسم العيد الكبير في نهاية رمضان؟", en: "What is the big celebration at the end of Ramadan called?" },
            options: { de: ["Eid al-Adha", "Eid al-Fitr", "Mawlid", "Isra"], ar: ["عيد الأضحى", "عيد الفطر", "المولد", "الإسراء"], en: ["Eid al-Adha", "Eid al-Fitr", "Mawlid", "Isra"] },
            correct: 1
        },
        {
            question: { de: "Wer brachte den Koran zu Mohammed ﷺ?", ar: "من أنزل القرآن على محمد ﷺ؟", en: "Who brought the Quran to Mohammed ﷺ?" },
            options: { de: ["Engel Mikail", "Engel Israfil", "Engel Gabriel", "Engel Azrael"], ar: ["ميكائيل", "إسرافيل", "جبريل", "عزرائيل"], en: ["Angel Mikail", "Angel Israfil", "Angel Gabriel", "Angel Azrael"] },
            correct: 2
        }
    ],
    12: [ // Arkan Al Iman
        {
            question: { de: "Wie viele Arkan Al Iman gibt es?", ar: "كم عدد أركان الإيمان؟", en: "How many Arkan Al Iman are there?" },
            options: { de: ["4", "5", "6", "7"], ar: ["4", "5", "6", "7"], en: ["4", "5", "6", "7"] },
            correct: 2
        },
        {
            question: { de: "An wen glauben Muslime als einzigen Gott?", ar: "بمن يؤمن المسلمون كإله واحد؟", en: "Who do Muslims believe in as the only God?" },
            options: { de: ["Allah", "Engel", "Propheten", "Bücher"], ar: ["الله", "الملائكة", "الأنبياء", "الكتب"], en: ["Allah", "Angels", "Prophets", "Books"] },
            correct: 0
        },
        {
            question: { de: "Woraus sind Engel erschaffen?", ar: "مم خُلقت الملائكة؟", en: "What are angels created from?" },
            options: { de: ["Aus Feuer", "Aus Erde", "Aus Licht", "Aus Wasser"], ar: ["من نار", "من تراب", "من نور", "من ماء"], en: ["From fire", "From earth", "From light", "From water"] },
            correct: 2
        },
        {
            question: { de: "Was ist das letzte heilige Buch?", ar: "ما هو آخر كتاب مقدس؟", en: "What is the last holy book?" },
            options: { de: ["Tawrat", "Zabur", "Injil", "Koran"], ar: ["التوراة", "الزبور", "الإنجيل", "القرآن"], en: ["Torah", "Psalms", "Gospel", "Quran"] },
            correct: 3
        },
        {
            question: { de: "Was bedeutet Qadar?", ar: "ما معنى القدر؟", en: "What does Qadar mean?" },
            options: { de: ["Gebet", "Allahs Wissen und weise Planung", "Fasten", "Pilgerfahrt"], ar: ["الصلاة", "علم الله وتخطيطه الحكيم", "الصوم", "الحج"], en: ["Prayer", "Allah's knowledge and wise planning", "Fasting", "Pilgrimage"] },
            correct: 1
        }
    ],
    13: [ // Islamische Werte
        {
            question: { de: "Was bedeutet 'Amanah'?", ar: "ما معنى 'الأمانة'؟", en: "What does 'Amanah' mean?" },
            options: { de: ["Geduld", "Vertrauenswürdig sein", "Mut", "Freude"], ar: ["الصبر", "الأمانة والثقة", "الشجاعة", "الفرح"], en: ["Patience", "Being trustworthy", "Courage", "Joy"] },
            correct: 1
        },
        {
            question: { de: "Wie war Prophet Mohammed ﷺ als Al-Amin bekannt?", ar: "بماذا عُرف النبي محمد ﷺ كالأمين؟", en: "How was Prophet Mohammed ﷺ known as Al-Amin?" },
            options: { de: ["Der Mutige", "Der Vertrauenswürdige", "Der Kluge", "Der Starke"], ar: ["الشجاع", "الأمين", "الذكي", "القوي"], en: ["The Brave", "The Trustworthy", "The Smart", "The Strong"] },
            correct: 1
        },
        {
            question: { de: "Was sollen Muslime laut Koran zu ihren Eltern sein?", ar: "كيف يجب أن يكون المسلم مع والديه حسب القرآن؟", en: "What should Muslims be to their parents according to the Quran?" },
            options: { de: ["Streng", "Gleichgültig", "Respektvoll und gütig", "Lustig"], ar: ["قاسياً", "غير مبالٍ", "باراً ومحسناً", "مرحاً"], en: ["Strict", "Indifferent", "Respectful and kind", "Funny"] },
            correct: 2
        },
        {
            question: { de: "Was macht die Gemeinschaft laut Islam stark?", ar: "ما الذي يقوّي المجتمع في الإسلام؟", en: "What makes the community strong according to Islam?" },
            options: { de: ["Zusammenarbeit und Helfen", "Allein sein", "Viel Geld", "Lautes Reden"], ar: ["التعاون والمساعدة", "الوحدة", "المال الكثير", "الكلام بصوت عالٍ"], en: ["Cooperation and helping", "Being alone", "Lots of money", "Loud talking"] },
            correct: 0
        },
        {
            question: { de: "Was kann ein trauriges Herz froh machen?", ar: "ما الذي يُفرح القلب الحزين؟", en: "What can make a sad heart happy?" },
            options: { de: ["Ein Geschenk", "Ein nettes Wort", "Ein Spiel", "Ein Film"], ar: ["هدية", "كلمة طيبة", "لعبة", "فيلم"], en: ["A gift", "A kind word", "A game", "A movie"] },
            correct: 1
        }
    ],
    14: [ // Geschichten der Sahaba
        {
            question: { de: "Wer war der beste Freund des Propheten Mohammed ﷺ?", ar: "من كان أعز صديق للنبي محمد ﷺ؟", en: "Who was the best friend of Prophet Mohammed ﷺ?" },
            options: { de: ["Umar", "Ali", "Abu Bakr", "Uthman"], ar: ["عمر", "علي", "أبو بكر", "عثمان"], en: ["Umar", "Ali", "Abu Bakr", "Uthman"] },
            correct: 2
        },
        {
            question: { de: "Wer war der erste Muadhdhin (Gebetsrufer) im Islam?", ar: "من كان أول مؤذن في الإسلام؟", en: "Who was the first Muadhdhin (caller to prayer) in Islam?" },
            options: { de: ["Abu Bakr", "Umar", "Bilal", "Ali"], ar: ["أبو بكر", "عمر", "بلال", "علي"], en: ["Abu Bakr", "Umar", "Bilal", "Ali"] },
            correct: 2
        },
        {
            question: { de: "Wer war die erste Person, die an Mohammed ﷺ glaubte?", ar: "من أول من آمن بمحمد ﷺ؟", en: "Who was the first person to believe in Mohammed ﷺ?" },
            options: { de: ["Abu Bakr", "Ali", "Umar", "Khadija"], ar: ["أبو بكر", "علي", "عمر", "خديجة"], en: ["Abu Bakr", "Ali", "Umar", "Khadija"] },
            correct: 3
        },
        {
            question: { de: "Wofür war Umar ibn al-Khattab bekannt?", ar: "بماذا اشتهر عمر بن الخطاب؟", en: "What was Umar ibn al-Khattab known for?" },
            options: { de: ["Reichtum", "Gerechtigkeit", "Geschwindigkeit", "Schönheit"], ar: ["الثروة", "العدل", "السرعة", "الجمال"], en: ["Wealth", "Justice", "Speed", "Beauty"] },
            correct: 1
        },
        {
            question: { de: "Was können Kinder von Anas ibn Malik lernen?", ar: "ماذا يتعلم الأطفال من أنس بن مالك؟", en: "What can children learn from Anas ibn Malik?" },
            options: { de: ["Kämpfen", "Gutes Benehmen im Alltag", "Singen", "Kochen"], ar: ["القتال", "حسن السلوك في الحياة اليومية", "الغناء", "الطبخ"], en: ["Fighting", "Good behavior in daily life", "Singing", "Cooking"] },
            correct: 1
        }
    ],
    15: [ // Prophetenbiografie
        {
            question: { de: "Was bedeutet 'Sira'?", ar: "ما معنى 'السيرة'؟", en: "What does 'Sira' mean?" },
            options: { de: ["Gebet", "Lebensgeschichte des Propheten", "Koran", "Moschee"], ar: ["الصلاة", "قصة حياة النبي", "القرآن", "المسجد"], en: ["Prayer", "Life story of the Prophet", "Quran", "Mosque"] },
            correct: 1
        },
        {
            question: { de: "Was bedeutet 'Rahma'?", ar: "ما معنى 'الرحمة'؟", en: "What does 'Rahma' mean?" },
            options: { de: ["Mut", "Barmherzigkeit", "Stärke", "Wissen"], ar: ["الشجاعة", "الرحمة", "القوة", "العلم"], en: ["Courage", "Mercy", "Strength", "Knowledge"] },
            correct: 1
        },
        {
            question: { de: "Was zeigt laut Islam Vergebung (Tasamuh)?", ar: "ماذا يُظهر التسامح في الإسلام؟", en: "What does forgiveness (Tasamuh) show in Islam?" },
            options: { de: ["Schwäche", "Stärke", "Dummheit", "Faulheit"], ar: ["ضعف", "قوة", "غباء", "كسل"], en: ["Weakness", "Strength", "Stupidity", "Laziness"] },
            correct: 1
        },
        {
            question: { de: "Wie behandelte Prophet Mohammed ﷺ Kinder?", ar: "كيف عامل النبي محمد ﷺ الأطفال؟", en: "How did Prophet Mohammed ﷺ treat children?" },
            options: { de: ["Er ignorierte sie", "Er war liebevoll und hörte ihnen zu", "Er war streng", "Er lief weg"], ar: ["تجاهلهم", "كان حنوناً واستمع إليهم", "كان قاسياً", "ابتعد عنهم"], en: ["He ignored them", "He was loving and listened to them", "He was strict", "He ran away"] },
            correct: 1
        },
        {
            question: { de: "Was öffnet laut Islam Herzen?", ar: "ما الذي يفتح القلوب في الإسلام؟", en: "What opens hearts according to Islam?" },
            options: { de: ["Schreien", "Sanftheit", "Gewalt", "Schweigen"], ar: ["الصراخ", "اللين", "العنف", "الصمت"], en: ["Shouting", "Gentleness", "Violence", "Silence"] },
            correct: 1
        }
    ]
};
