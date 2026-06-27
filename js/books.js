// Bücher Datenbank für Kinder Lernprogramm - Mehrsprachig (DE/AR/EN)
const booksData = [
    {
        id: 11,
        icon: "☪️",
        color: "#1E88E5",
        title: {
            de: "Was ist Islam?",
            ar: "ما هو الإسلام؟",
            en: "What is Islam?"
        },
        description: {
            de: "Die Religion des Friedens einfach erklärt",
            ar: "دين السلام بشرح بسيط",
            en: "The religion of peace simply explained"
        },
        pages: [
            {
                icon: "📖",
                title: {
                    de: "Das Wort Islam",
                    ar: "كلمة الإسلام",
                    en: "The Word Islam"
                },
                content: {
                    de: "Das Wort 'Islam' bedeutet 'Frieden' und 'Hingabe an Gott'. Ein Muslim ist jemand, der an Allah glaubt und versucht, nach seinen Regeln zu leben. Es gibt über 1,8 Milliarden Muslime auf der ganzen Welt - das ist fast jeder vierte Mensch!",
                    ar: "كلمة 'إسلام' تعني 'السلام' و'الاستسلام لله'. المسلم هو من يؤمن بالله ويحاول أن يعيش وفق أوامره. يوجد أكثر من 1.8 مليار مسلم في العالم - أي تقريباً كل رابع إنسان!",
                    en: "The word 'Islam' means 'peace' and 'submission to God'. A Muslim is someone who believes in Allah and tries to live by His rules. There are over 1.8 billion Muslims in the world - that's almost every fourth person!"
                }
            },
            {
                icon: "🌟",
                title: {
                    de: "Der Glaube an Allah",
                    ar: "الإيمان بالله",
                    en: "Belief in Allah"
                },
                content: {
                    de: "Muslime glauben an einen einzigen Gott - Allah. Er hat alles erschaffen: die Sterne, die Erde, die Tiere und uns Menschen. Allah ist gütig, barmherzig und liebt alle seine Geschöpfe. Er sieht und hört alles und hilft denen, die ihn bitten.",
                    ar: "يؤمن المسلمون بإله واحد - الله. هو خلق كل شيء: النجوم والأرض والحيوانات ونحن البشر. الله كريم ورحيم ويحب جميع مخلوقاته. يرى ويسمع كل شيء ويساعد من يدعوه.",
                    en: "Muslims believe in one God - Allah. He created everything: the stars, the earth, the animals and us humans. Allah is kind, merciful and loves all His creatures. He sees and hears everything and helps those who ask Him."
                }
            },
            {
                icon: "📚",
                title: {
                    de: "Der Koran",
                    ar: "القرآن الكريم",
                    en: "The Quran"
                },
                content: {
                    de: "Der Koran ist das heilige Buch der Muslime. Es enthält die Worte Allahs, die dem Propheten Mohammed durch den Engel Gabriel übermittelt wurden. Der Koran lehrt uns, wie wir gute Menschen sein können und wie wir Allah näher kommen.",
                    ar: "القرآن هو الكتاب المقدس للمسلمين. يحتوي على كلام الله الذي أُنزل على النبي محمد ﷺ عن طريق جبريل. يعلمنا القرآن كيف نكون أشخاصاً صالحين وكيف نتقرب إلى الله.",
                    en: "The Quran is the holy book of Muslims. It contains the words of Allah revealed to Prophet Mohammed through Angel Gabriel. The Quran teaches us how to be good people and how to get closer to Allah."
                }
            },
            {
                icon: "✨",
                title: {
                    de: "Die Propheten",
                    ar: "الأنبياء",
                    en: "The Prophets"
                },
                content: {
                    de: "Allah hat viele Propheten geschickt, um den Menschen zu helfen. Adam, Noah, Ibrahim, Musa, Isa und Mohammed - sie alle waren Propheten. Mohammed ist der letzte Prophet. Muslime respektieren und lieben alle Propheten.",
                    ar: "أرسل الله أنبياء كثيرين لمساعدة الناس. آدم ونوح وإبراهيم وموسى وعيسى ومحمد - كلهم كانوا أنبياء. محمد ﷺ هو خاتم الأنبياء. المسلمون يحترمون ويحبون جميع الأنبياء.",
                    en: "Allah sent many prophets to help people. Adam, Noah, Ibrahim, Musa, Isa and Mohammed - they were all prophets. Mohammed is the last prophet. Muslims respect and love all prophets."
                }
            },
            {
                icon: "👼",
                title: {
                    de: "Die Engel",
                    ar: "الملائكة",
                    en: "The Angels"
                },
                content: {
                    de: "Muslime glauben an Engel. Sie sind aus Licht erschaffen und gehorchen Allah immer. Der Engel Gabriel brachte den Koran zu Mohammed. Andere Engel haben verschiedene Aufgaben - manche beschützen uns, manche schreiben unsere Taten auf.",
                    ar: "يؤمن المسلمون بالملائكة. خُلقوا من نور ويطيعون الله دائماً. جبريل أنزل القرآن على محمد ﷺ. للملائكة الأخرى مهام مختلفة - بعضهم يحمينا وبعضهم يكتب أعمالنا.",
                    en: "Muslims believe in angels. They are created from light and always obey Allah. Angel Gabriel brought the Quran to Mohammed. Other angels have different tasks - some protect us, some write down our deeds."
                }
            },
            {
                icon: "🤲",
                title: {
                    de: "Das Gebet",
                    ar: "الصلاة",
                    en: "The Prayer"
                },
                content: {
                    de: "Muslime beten fünfmal am Tag zu Allah. Vor dem Gebet waschen sie sich (Wudu). Sie beten in Richtung Mekka, zur Kaaba. Das Gebet ist eine besondere Zeit, in der wir mit Allah sprechen, ihm danken und ihn um Hilfe bitten.",
                    ar: "يصلي المسلمون خمس مرات في اليوم لله. قبل الصلاة يتوضأون. يصلون باتجاه مكة نحو الكعبة. الصلاة وقت خاص نتحدث فيه مع الله ونشكره ونطلب منه المساعدة.",
                    en: "Muslims pray five times a day to Allah. Before prayer they wash (Wudu). They pray facing Mecca, towards the Kaaba. Prayer is a special time when we talk to Allah, thank Him and ask Him for help."
                }
            },
            {
                icon: "🕌",
                title: {
                    de: "Die Moschee",
                    ar: "المسجد",
                    en: "The Mosque"
                },
                content: {
                    de: "Die Moschee ist das Gebetshaus der Muslime. Dort treffen sich Menschen zum gemeinsamen Gebet, besonders am Freitag. In der Moschee lernen Kinder auch den Koran. Es ist ein Ort des Friedens und der Gemeinschaft.",
                    ar: "المسجد هو بيت صلاة المسلمين. يجتمع فيه الناس للصلاة الجماعية خاصة يوم الجمعة. في المسجد يتعلم الأطفال القرآن أيضاً. إنه مكان للسلام والمجتمع.",
                    en: "The mosque is the house of prayer for Muslims. People gather there for communal prayer, especially on Fridays. In the mosque, children also learn the Quran. It is a place of peace and community."
                }
            },
            {
                icon: "🌙",
                title: {
                    de: "Ramadan",
                    ar: "رمضان",
                    en: "Ramadan"
                },
                content: {
                    de: "Ramadan ist ein besonderer Monat. Erwachsene Muslime fasten von Sonnenaufgang bis Sonnenuntergang. Sie essen und trinken tagsüber nichts. Am Abend essen sie zusammen (Iftar). Am Ende des Ramadan gibt es ein großes Fest - Eid al-Fitr!",
                    ar: "رمضان شهر مميز. يصوم المسلمون البالغون من شروق الشمس إلى غروبها. لا يأكلون ولا يشربون خلال النهار. في المساء يأكلون معاً (الإفطار). في نهاية رمضان يكون عيد الفطر!",
                    en: "Ramadan is a special month. Adult Muslims fast from sunrise to sunset. They don't eat or drink during the day. In the evening they eat together (Iftar). At the end of Ramadan there is a big celebration - Eid al-Fitr!"
                }
            },
            {
                icon: "💝",
                title: {
                    de: "Gutes tun",
                    ar: "فعل الخير",
                    en: "Doing Good"
                },
                content: {
                    de: "Im Islam ist es sehr wichtig, Gutes zu tun. Wir sollen den Armen helfen, freundlich zu Nachbarn sein, unsere Eltern respektieren und ehrlich sein. Jede gute Tat zählt - sogar ein Lächeln! Allah liebt Menschen, die anderen helfen.",
                    ar: "في الإسلام من المهم جداً فعل الخير. يجب أن نساعد الفقراء ونكون لطفاء مع الجيران ونحترم والدينا ونكون صادقين. كل عمل خير يُحسب - حتى الابتسامة! الله يحب من يساعد الآخرين.",
                    en: "In Islam it is very important to do good. We should help the poor, be kind to neighbors, respect our parents and be honest. Every good deed counts - even a smile! Allah loves people who help others."
                }
            },
            {
                icon: "🕊️",
                title: {
                    de: "Frieden und Respekt",
                    ar: "السلام والاحترام",
                    en: "Peace and Respect"
                },
                content: {
                    de: "Islam bedeutet Frieden. Muslime grüßen sich mit 'Assalamu Alaikum' - das heißt 'Friede sei mit dir'. Wir sollen alle Menschen respektieren, egal welche Religion sie haben. Allah hat uns alle erschaffen, und wir sind alle eine große Familie.",
                    ar: "الإسلام يعني السلام. يحيي المسلمون بعضهم بـ'السلام عليكم'. يجب أن نحترم جميع الناس بغض النظر عن دينهم. الله خلقنا جميعاً ونحن عائلة واحدة كبيرة.",
                    en: "Islam means peace. Muslims greet each other with 'Assalamu Alaikum' - which means 'Peace be upon you'. We should respect all people regardless of their religion. Allah created us all, and we are all one big family."
                }
            }
        ]
    },
    {
        id: 2,
        icon: "🕋",
        color: "#2196F3",
        title: {
            de: "Die fünf Säulen",
            ar: "أركان الإسلام الخمسة",
            en: "The Five Pillars"
        },
        description: {
            de: "Die wichtigsten Pflichten im Islam - kindgerecht erklärt",
            ar: "أهم الواجبات في الإسلام - بشرح مبسط للأطفال",
            en: "The most important duties in Islam - explained for children"
        },
        pages: [
            {
                icon: "🏛️",
                title: { de: "Was sind die fünf Säulen?", ar: "ما هي أركان الإسلام الخمسة؟", en: "What are the Five Pillars?" },
                content: {
                    de: "Stell dir ein Haus vor. Damit es stark steht, braucht es starke Säulen. Der Islam hat auch fünf 'Säulen' - das sind fünf wichtige Dinge, die jeder Muslim tun sollte. Sie helfen uns, gute Menschen zu sein und nah bei Allah zu bleiben.",
                    ar: "تخيل بيتاً. لكي يقف بقوة يحتاج أعمدة قوية. الإسلام أيضاً له خمسة 'أركان' - وهي خمسة أشياء مهمة يجب على كل مسلم فعلها. تساعدنا أن نكون أشخاصاً صالحين وقريبين من الله.",
                    en: "Imagine a house. To stand strong, it needs strong pillars. Islam also has five 'pillars' - these are five important things every Muslim should do. They help us be good people and stay close to Allah."
                }
            },
            {
                icon: "💬",
                title: { de: "Shahada - Das Glaubensbekenntnis", ar: "الشهادة", en: "Shahada - The Declaration of Faith" },
                content: {
                    de: "Die erste Säule ist die Shahada. Das ist ein besonderer Satz, der bedeutet: 'Es gibt keinen Gott außer Allah, und Mohammed ist sein Prophet.' Wenn jemand das mit dem Herzen sagt und meint, wird er Muslim.",
                    ar: "الركن الأول هو الشهادة. وهي جملة خاصة تعني: 'لا إله إلا الله ومحمد رسول الله.' من يقولها بقلبه ويعنيها يصبح مسلماً.",
                    en: "The first pillar is the Shahada. It is a special sentence that means: 'There is no god but Allah, and Mohammed is His Prophet.' When someone says this with their heart and means it, they become Muslim."
                }
            },
            {
                icon: "🤲",
                title: { de: "Salah - Das Gebet", ar: "الصلاة", en: "Salah - The Prayer" },
                content: {
                    de: "Die zweite Säule ist das Gebet. Muslime beten fünfmal am Tag. Das Gebet ist wie ein Gespräch mit Allah. Wir danken ihm, bitten um Hilfe und fühlen uns ihm nahe. Es ist eine schöne Zeit der Ruhe.",
                    ar: "الركن الثاني هو الصلاة. يصلي المسلمون خمس مرات في اليوم. الصلاة كأنها حديث مع الله. نشكره ونطلب المساعدة ونشعر بقربه. إنها وقت جميل من السكينة.",
                    en: "The second pillar is prayer. Muslims pray five times a day. Prayer is like a conversation with Allah. We thank Him, ask for help and feel close to Him. It is a beautiful time of peace."
                }
            },
            {
                icon: "💝",
                title: { de: "Zakat - Das Spenden", ar: "الزكاة", en: "Zakat - Giving Charity" },
                content: {
                    de: "Die dritte Säule ist Zakat - das bedeutet, den Armen zu helfen. Wenn jemand genug Geld hat, gibt er etwas davon den Menschen, die weniger haben. So teilen alle und keiner muss hungern oder frieren.",
                    ar: "الركن الثالث هو الزكاة - وتعني مساعدة الفقراء. من لديه مال كافٍ يعطي جزءاً منه للناس الذين لديهم أقل. هكذا يتشارك الجميع ولا يجوع أحد.",
                    en: "The third pillar is Zakat - it means helping the poor. When someone has enough money, they give some of it to people who have less. This way everyone shares and no one has to go hungry."
                }
            },
            {
                icon: "🌙",
                title: { de: "Sawm - Das Fasten", ar: "الصوم", en: "Sawm - Fasting" },
                content: {
                    de: "Die vierte Säule ist das Fasten im Monat Ramadan. Erwachsene Muslime essen und trinken tagsüber nichts. So lernen sie, wie sich hungrige Menschen fühlen, und werden dankbarer. Kinder fasten erst, wenn sie älter sind.",
                    ar: "الركن الرابع هو الصوم في شهر رمضان. المسلمون البالغون لا يأكلون ولا يشربون خلال النهار. هكذا يتعلمون كيف يشعر الجائعون ويصبحون أكثر شكراً. الأطفال يصومون عندما يكبرون.",
                    en: "The fourth pillar is fasting in the month of Ramadan. Adult Muslims don't eat or drink during the day. This way they learn how hungry people feel and become more grateful. Children fast when they are older."
                }
            },
            {
                icon: "🕋",
                title: { de: "Hajj - Die Pilgerfahrt", ar: "الحج", en: "Hajj - The Pilgrimage" },
                content: {
                    de: "Die fünfte Säule ist die Hajj - eine Reise nach Mekka. Jeder Muslim, der kann, sollte einmal im Leben dorthin reisen. Millionen Menschen aus aller Welt treffen sich dort und beten gemeinsam zu Allah.",
                    ar: "الركن الخامس هو الحج - رحلة إلى مكة. كل مسلم يستطيع يجب أن يذهب إلى هناك مرة في حياته. ملايين الناس من كل العالم يجتمعون هناك ويصلون معاً لله.",
                    en: "The fifth pillar is Hajj - a journey to Mecca. Every Muslim who can should travel there once in their lifetime. Millions of people from all over the world meet there and pray together to Allah."
                }
            }
        ]
    },
    {
        id: 12,
        icon: "✨",
        color: "#00ACC1",
        title: { de: "Arkan Al Iman (أركان الإيمان)", ar: "أركان الإيمان", en: "Pillars of Faith (Arkan Al Iman)" },
        description: { de: "Die 6 Glaubensgrundlagen einfach fuer Kinder", ar: "أسس الإيمان الستة بشرح بسيط للأطفال", en: "The 6 foundations of faith simply for children" },
        pages: [
            { icon: "🛡️", title: { de: "Was ist Arkan Al Iman?", ar: "ما هي أركان الإيمان؟", en: "What is Arkan Al Iman?" }, content: { de: "Arkan Al Iman sind 6 wichtige Dinge, an die Muslime glauben. Sie helfen unserem Herzen, stark und ruhig zu sein. So lernen wir, Allah besser zu kennen und zu vertrauen.", ar: "أركان الإيمان هي 6 أشياء مهمة يؤمن بها المسلمون. تساعد قلوبنا أن تكون قوية وهادئة. هكذا نتعلم أن نعرف الله أكثر ونثق به.", en: "Arkan Al Iman are 6 important things that Muslims believe in. They help our hearts be strong and calm. This way we learn to know Allah better and trust Him." } },
            { icon: "☝️", title: { de: "1. Glaube an Allah", ar: "١. الإيمان بالله", en: "1. Belief in Allah" }, content: { de: "Wir glauben an einen einzigen Gott: Allah. Er hat alles erschaffen und sorgt fuer uns. Allah ist barmherzig, gerecht und liebt das Gute.", ar: "نؤمن بإله واحد: الله. هو خلق كل شيء ويرعانا. الله رحيم وعادل ويحب الخير.", en: "We believe in one God: Allah. He created everything and takes care of us. Allah is merciful, just and loves goodness." } },
            { icon: "👼", title: { de: "2. Glaube an die Engel", ar: "٢. الإيمان بالملائكة", en: "2. Belief in Angels" }, content: { de: "Engel sind aus Licht erschaffen. Sie gehorchen Allah immer und machen keinen Fehler. Jeder Engel hat Aufgaben, die Allah ihm gibt.", ar: "الملائكة مخلوقة من نور. يطيعون الله دائماً ولا يخطئون. لكل ملاك مهام يعطيها الله له.", en: "Angels are created from light. They always obey Allah and make no mistakes. Each angel has tasks that Allah gives them." } },
            { icon: "📚", title: { de: "3. Glaube an die Buecher", ar: "٣. الإيمان بالكتب", en: "3. Belief in the Books" }, content: { de: "Allah schickte heilige Buecher als Leitung. Dazu gehoeren Tawrat, Zabur, Injil und der Koran. Der Koran ist das letzte Buch fuer alle Menschen.", ar: "أرسل الله كتباً مقدسة هداية للناس. منها التوراة والزبور والإنجيل والقرآن. القرآن هو الكتاب الأخير لجميع الناس.", en: "Allah sent holy books as guidance. These include the Torah, Psalms, Gospel and the Quran. The Quran is the last book for all people." } },
            { icon: "🕊️", title: { de: "4. Glaube an die Propheten", ar: "٤. الإيمان بالرسل", en: "4. Belief in the Prophets" }, content: { de: "Allah schickte viele Propheten, um die Wahrheit zu lehren. Adam, Nuh, Ibrahim, Musa, Isa und Mohammed gehoeren dazu. Mohammed ist der letzte Prophet.", ar: "أرسل الله أنبياء كثيرين ليعلموا الحق. منهم آدم ونوح وإبراهيم وموسى وعيسى ومحمد. محمد ﷺ هو خاتم الأنبياء.", en: "Allah sent many prophets to teach the truth. Adam, Nuh, Ibrahim, Musa, Isa and Mohammed are among them. Mohammed is the last prophet." } },
            { icon: "⚖️", title: { de: "5. Glaube an den Juengsten Tag", ar: "٥. الإيمان باليوم الآخر", en: "5. Belief in the Last Day" }, content: { de: "Eines Tages werden alle Menschen zu Allah zurueckkehren. Dann wird gerecht ueber gute und schlechte Taten entschieden. Das erinnert uns, freundlich und ehrlich zu leben.", ar: "يوماً ما سيعود جميع الناس إلى الله. حينها يُحكم بالعدل على الأعمال الخيرة والسيئة. هذا يذكرنا أن نعيش بلطف وصدق.", en: "One day all people will return to Allah. Then good and bad deeds will be judged fairly. This reminds us to live kindly and honestly." } },
            { icon: "🧭", title: { de: "6. Glaube an Qadar", ar: "٦. الإيمان بالقدر", en: "6. Belief in Qadar" }, content: { de: "Qadar bedeutet: Allah weiss alles und plant mit Weisheit. Gute und schwere Zeiten gehoeren zum Leben. Wir tun unser Bestes und vertrauen auf Allah.", ar: "القدر يعني: الله يعلم كل شيء ويخطط بحكمة. الأوقات الجيدة والصعبة جزء من الحياة. نبذل قصارى جهدنا ونتوكل على الله.", en: "Qadar means: Allah knows everything and plans with wisdom. Good and difficult times are part of life. We do our best and trust in Allah." } },
            { icon: "💡", title: { de: "Wie hilft uns Iman im Alltag?", ar: "كيف يساعدنا الإيمان في حياتنا؟", en: "How does Iman help us daily?" }, content: { de: "Iman macht uns mutig, dankbar und geduldig. Er hilft uns, richtig zu entscheiden und anderen zu helfen. Mit Iman fuehlt sich das Herz heller an.", ar: "الإيمان يجعلنا شجعاناً وشاكرين وصابرين. يساعدنا أن نتخذ القرارات الصحيحة ونساعد الآخرين. مع الإيمان يشعر القلب بالنور.", en: "Iman makes us brave, grateful and patient. It helps us make right decisions and help others. With Iman the heart feels brighter." } },
            { icon: "🧒", title: { de: "Kinder und Iman", ar: "الأطفال والإيمان", en: "Children and Iman" }, content: { de: "Kinder können Iman jeden Tag ueben: beten, Danke sagen und die Wahrheit sprechen. Auch ein kleines gutes Wort ist wichtig. Allah sieht jede gute Tat.", ar: "يمكن للأطفال ممارسة الإيمان كل يوم: الصلاة وقول شكراً وقول الحقيقة. حتى الكلمة الطيبة الصغيرة مهمة. الله يرى كل عمل خير.", en: "Children can practice Iman every day: praying, saying thank you and speaking the truth. Even a small kind word is important. Allah sees every good deed." } },
            { icon: "📝", title: { de: "Merksatz fuer Arkan Al Iman", ar: "جملة لحفظ أركان الإيمان", en: "Summary of Arkan Al Iman" }, content: { de: "Allah, Engel, Buecher, Propheten, Juengster Tag und Qadar. Das sind die 6 Arkan Al Iman. Wenn wir sie lernen, wird unser Glaube stark.", ar: "الله والملائكة والكتب والرسل واليوم الآخر والقدر. هذه هي أركان الإيمان الستة. إذا تعلمناها يقوى إيماننا.", en: "Allah, Angels, Books, Prophets, Last Day and Qadar. These are the 6 Arkan Al Iman. When we learn them, our faith becomes strong." } }
        ]
    },
    {
        id: 1,
        icon: "🌙",
        color: "#4CAF50",
        title: { de: "Prophet Mohammed ﷺ", ar: "النبي محمد ﷺ", en: "Prophet Mohammed ﷺ" },
        description: { de: "Die Geschichte des letzten Propheten - einfach erklärt für Kinder", ar: "قصة خاتم الأنبياء - بشرح بسيط للأطفال", en: "The story of the last Prophet - simply explained for children" },
        pages: [
            { icon: "⭐", title: { de: "Die Geburt des Propheten", ar: "مولد النبي ﷺ", en: "The Birth of the Prophet" }, content: { de: "Vor langer, langer Zeit, im Jahr 570, wurde in der Stadt Mekka ein besonderes Baby geboren. Sein Name war Mohammed ﷺ. Sein Vater Abdullah war schon vor seiner Geburt gestorben. Seine Mutter Amina liebte ihn sehr. Die Menschen in Mekka sahen, dass dieses Kind etwas Besonderes war.", ar: "منذ زمن بعيد، في عام 570، وُلد طفل مميز في مدينة مكة. اسمه محمد ﷺ. كان أبوه عبدالله قد توفي قبل ولادته. أمه آمنة أحبته كثيراً. رأى أهل مكة أن هذا الطفل مميز.", en: "A long, long time ago, in the year 570, a special baby was born in the city of Mecca. His name was Mohammed ﷺ. His father Abdullah had died before his birth. His mother Amina loved him very much. The people of Mecca saw that this child was special." } },
            { icon: "👶", title: { de: "Die Kindheit", ar: "الطفولة", en: "Childhood" }, content: { de: "Als Mohammed ﷺ noch klein war, lebte er bei einer Pflegefamilie in der Wüste. Dort lernte er, wie die Beduinen lebten. Er war ein ruhiges und freundliches Kind. Leider starb seine Mutter, als er sechs Jahre alt war. Sein Großvater Abdul-Muttalib kümmerte sich dann um ihn.", ar: "عندما كان محمد ﷺ صغيراً عاش مع عائلة حاضنة في الصحراء. هناك تعلم كيف يعيش البدو. كان طفلاً هادئاً ولطيفاً. للأسف توفيت أمه وعمره ست سنوات. اعتنى به جده عبدالمطلب.", en: "When Mohammed ﷺ was small, he lived with a foster family in the desert. There he learned how the Bedouins lived. He was a quiet and friendly child. Sadly, his mother died when he was six years old. His grandfather Abdul-Muttalib took care of him." } },
            { icon: "💎", title: { de: "Ein ehrlicher junger Mann", ar: "شاب صادق", en: "An Honest Young Man" }, content: { de: "Als Mohammed ﷺ erwachsen wurde, war er bekannt für seine Ehrlichkeit. Die Menschen nannten ihn 'Al-Amin' - das bedeutet 'der Vertrauenswürdige'. Er log nie und half immer anderen Menschen. Alle in Mekka respektierten ihn sehr.", ar: "عندما كبر محمد ﷺ اشتهر بصدقه. سمّاه الناس 'الأمين'. لم يكذب أبداً وساعد الآخرين دائماً. الجميع في مكة احترموه كثيراً.", en: "When Mohammed ﷺ grew up, he was known for his honesty. People called him 'Al-Amin' - meaning 'the Trustworthy'. He never lied and always helped others. Everyone in Mecca respected him greatly." } },
            { icon: "💕", title: { de: "Die Heirat mit Khadija", ar: "الزواج من خديجة", en: "Marriage to Khadija" }, content: { de: "Mohammed ﷺ arbeitete als Händler für eine kluge und erfolgreiche Frau namens Khadija. Sie war beeindruckt von seiner Ehrlichkeit und seinem guten Charakter. Sie heirateten und waren sehr glücklich zusammen. Khadija war immer an seiner Seite und unterstützte ihn.", ar: "عمل محمد ﷺ تاجراً عند امرأة ذكية وناجحة اسمها خديجة. أُعجبت بصدقه وأخلاقه الحسنة. تزوجا وكانا سعيدين معاً. خديجة كانت دائماً بجانبه وتدعمه.", en: "Mohammed ﷺ worked as a trader for a smart and successful woman named Khadija. She was impressed by his honesty and good character. They married and were very happy together. Khadija was always by his side and supported him." } },
            { icon: "📖", title: { de: "Die erste Offenbarung", ar: "الوحي الأول", en: "The First Revelation" }, content: { de: "Als Mohammed ﷺ vierzig Jahre alt war, ging er oft in eine Höhle namens Hira, um nachzudenken. Eines Tages kam der Engel Gabriel zu ihm und brachte ihm die erste Botschaft von Allah. Mohammed ﷺ wurde zum Propheten auserwählt, um den Menschen die Wahrheit zu verkünden.", ar: "عندما بلغ محمد ﷺ الأربعين كان يذهب كثيراً لغار حراء للتأمل. يوماً ما جاء جبريل إليه وأحضر له أول رسالة من الله. اختار الله محمداً ﷺ نبياً ليبلغ الناس الحق.", en: "When Mohammed ﷺ was forty years old, he often went to a cave called Hira to think. One day Angel Gabriel came to him and brought the first message from Allah. Mohammed ﷺ was chosen as a Prophet to tell people the truth." } },
            { icon: "🕌", title: { de: "Die Botschaft des Islam", ar: "رسالة الإسلام", en: "The Message of Islam" }, content: { de: "Prophet Mohammed ﷺ lehrte die Menschen, dass es nur einen Gott gibt - Allah. Er sagte, dass alle Menschen gleich sind und sich gegenseitig respektieren sollen. Er lehrte Güte, Ehrlichkeit und Mitgefühl. Diese Lehren sind der Islam.", ar: "علّم النبي محمد ﷺ الناس أنه لا إله إلا الله. قال إن جميع الناس متساوون ويجب أن يحترموا بعضهم. علّم اللطف والصدق والرحمة. هذه التعاليم هي الإسلام.", en: "Prophet Mohammed ﷺ taught people that there is only one God - Allah. He said all people are equal and should respect each other. He taught kindness, honesty and compassion. These teachings are Islam." } },
            { icon: "🌧️", title: { de: "Schwierige Zeiten", ar: "أوقات صعبة", en: "Difficult Times" }, content: { de: "Am Anfang wollten viele Menschen in Mekka die neue Botschaft nicht hören. Sie waren gemein zu Mohammed ﷺ und seinen Freunden. Aber Mohammed ﷺ blieb geduldig und freundlich. Er gab niemals auf und vertraute auf Allah.", ar: "في البداية لم يرد كثير من أهل مكة سماع الرسالة الجديدة. كانوا قاسين مع محمد ﷺ وأصحابه. لكن محمد ﷺ بقي صبوراً ولطيفاً. لم يستسلم أبداً وتوكل على الله.", en: "At first, many people in Mecca didn't want to hear the new message. They were mean to Mohammed ﷺ and his friends. But Mohammed ﷺ remained patient and kind. He never gave up and trusted in Allah." } },
            { icon: "🐪", title: { de: "Die Auswanderung nach Medina", ar: "الهجرة إلى المدينة", en: "The Migration to Medina" }, content: { de: "Nach vielen Jahren lud die Stadt Medina Mohammed ﷺ ein, zu ihnen zu kommen. Diese wichtige Reise nennt man 'Hijra'. In Medina wurden Mohammed ﷺ und die Muslime herzlich empfangen. Dort bauten sie eine starke und friedliche Gemeinschaft auf.", ar: "بعد سنوات كثيرة دعت المدينة محمداً ﷺ للقدوم إليها. هذه الرحلة المهمة تسمى 'الهجرة'. في المدينة استُقبل محمد ﷺ والمسلمون بحفاوة. هناك بنوا مجتمعاً قوياً ومسالماً.", en: "After many years, the city of Medina invited Mohammed ﷺ to come to them. This important journey is called 'Hijra'. In Medina, Mohammed ﷺ and the Muslims were warmly welcomed. There they built a strong and peaceful community." } },
            { icon: "💫", title: { de: "Ein Vorbild für alle", ar: "قدوة للجميع", en: "A Role Model for All" }, content: { de: "Prophet Mohammed ﷺ war immer freundlich zu allen - zu Kindern, Tieren und auch zu Menschen, die anders dachten. Er half den Armen, war nett zu Nachbarn und lächelte viel. Er zeigte uns, wie man ein guter Mensch sein kann.", ar: "كان النبي محمد ﷺ لطيفاً دائماً مع الجميع - مع الأطفال والحيوانات ومع من يختلفون معه. ساعد الفقراء وكان طيباً مع الجيران وابتسم كثيراً. أرانا كيف نكون أشخاصاً صالحين.", en: "Prophet Mohammed ﷺ was always kind to everyone - to children, animals and even people who thought differently. He helped the poor, was nice to neighbors and smiled a lot. He showed us how to be good people." } },
            { icon: "🌍", title: { de: "Das Vermächtnis", ar: "الإرث", en: "The Legacy" }, content: { de: "Prophet Mohammed ﷺ starb im Jahr 632, aber seine Lehren leben weiter. Über eine Milliarde Menschen auf der ganzen Welt folgen heute dem Islam. Sie versuchen, so gütig und ehrlich zu sein wie er. Sein Beispiel inspiriert Menschen bis heute, Gutes zu tun.", ar: "توفي النبي محمد ﷺ عام 632 لكن تعاليمه باقية. أكثر من مليار إنسان حول العالم يتبعون الإسلام اليوم. يحاولون أن يكونوا طيبين وصادقين مثله. قدوته تلهم الناس حتى اليوم لفعل الخير.", en: "Prophet Mohammed ﷺ died in 632, but his teachings live on. Over a billion people around the world follow Islam today. They try to be as kind and honest as he was. His example inspires people to this day to do good." } }
        ]
    },
    {
        id: 3,
        icon: "🌳",
        color: "#8BC34A",
        title: { de: "Prophet Adam", ar: "النبي آدم عليه السلام", en: "Prophet Adam" },
        description: { de: "Der erste Mensch auf der Erde", ar: "أول إنسان على الأرض", en: "The first human on Earth" },
        pages: [
            { icon: "✨", title: { de: "Die Erschaffung Adams", ar: "خلق آدم", en: "The Creation of Adam" }, content: { de: "Allah erschuf Adam aus Erde und Ton. Er war der erste Mensch auf der Erde. Allah hauchte ihm Leben ein und lehrte ihn die Namen aller Dinge. Die Engel verneigten sich vor Adam, weil Allah es ihnen befahl.", ar: "خلق الله آدم من تراب وطين. كان أول إنسان على الأرض. نفخ الله فيه الروح وعلّمه أسماء كل شيء. سجدت الملائكة لآدم لأن الله أمرهم بذلك.", en: "Allah created Adam from earth and clay. He was the first human on Earth. Allah breathed life into him and taught him the names of all things. The angels bowed to Adam because Allah commanded them." } },
            { icon: "🌺", title: { de: "Das Paradies", ar: "الجنة", en: "Paradise" }, content: { de: "Adam lebte im wunderschönen Paradies. Dort gab es alles, was man sich wünschen konnte - leckere Früchte, schöne Blumen und friedliche Tiere. Allah erschuf auch Hawa (Eva) als Gefährtin für Adam.", ar: "عاش آدم في الجنة الجميلة. كان فيها كل ما يتمناه - فواكه لذيذة وزهور جميلة وحيوانات مسالمة. خلق الله أيضاً حواء رفيقة لآدم.", en: "Adam lived in beautiful Paradise. There was everything one could wish for - delicious fruits, beautiful flowers and peaceful animals. Allah also created Hawa (Eve) as a companion for Adam." } },
            { icon: "🌲", title: { de: "Der verbotene Baum", ar: "الشجرة المحرمة", en: "The Forbidden Tree" }, content: { de: "Allah sagte Adam und Hawa, dass sie alles im Paradies genießen dürfen - außer von einem bestimmten Baum zu essen. Aber Shaitan (der Teufel) flüsterte ihnen ein und brachte sie dazu, davon zu essen.", ar: "قال الله لآدم وحواء أنهما يستمتعان بكل شيء في الجنة - إلا أن يأكلا من شجرة معينة. لكن الشيطان وسوس لهما وجعلهما يأكلان منها.", en: "Allah told Adam and Hawa they could enjoy everything in Paradise - except eating from a certain tree. But Shaitan (the devil) whispered to them and made them eat from it." } },
            { icon: "😢", title: { de: "Die Reue", ar: "التوبة", en: "The Repentance" }, content: { de: "Adam und Hawa erkannten ihren Fehler und bereuten zutiefst. Sie baten Allah um Vergebung. Allah ist barmherzig und vergab ihnen. Aber sie mussten das Paradies verlassen und auf der Erde leben.", ar: "أدرك آدم وحواء خطأهما وندما ندماً شديداً. طلبا من الله المغفرة. الله رحيم وغفر لهما. لكنهما اضطرا لمغادرة الجنة والعيش على الأرض.", en: "Adam and Hawa realized their mistake and deeply regretted it. They asked Allah for forgiveness. Allah is merciful and forgave them. But they had to leave Paradise and live on Earth." } },
            { icon: "🌍", title: { de: "Das Leben auf der Erde", ar: "الحياة على الأرض", en: "Life on Earth" }, content: { de: "Auf der Erde lernten Adam und Hawa zu arbeiten und zu leben. Sie hatten viele Kinder, die die ersten Menschen auf der Erde wurden. Adam war der erste Prophet und lehrte seine Familie, an Allah zu glauben.", ar: "على الأرض تعلم آدم وحواء العمل والحياة. أنجبا أطفالاً كثيرين كانوا أول البشر على الأرض. كان آدم أول نبي وعلّم عائلته الإيمان بالله.", en: "On Earth, Adam and Hawa learned to work and live. They had many children who became the first humans on Earth. Adam was the first Prophet and taught his family to believe in Allah." } }
        ]
    },
    {
        id: 4,
        icon: "🚢",
        color: "#00BCD4",
        title: { de: "Prophet Noah (Nuh)", ar: "النبي نوح عليه السلام", en: "Prophet Noah (Nuh)" },
        description: { de: "Die Geschichte der großen Arche", ar: "قصة السفينة العظيمة", en: "The story of the great Ark" },
        pages: [
            { icon: "📢", title: { de: "Noahs Auftrag", ar: "مهمة نوح", en: "Noah's Mission" }, content: { de: "Noah war ein guter Mann, der an Allah glaubte. Die Menschen um ihn herum hatten Allah vergessen und beteten Götzen an. Allah wählte Noah aus, um die Menschen zurück zum richtigen Weg zu führen.", ar: "كان نوح رجلاً صالحاً يؤمن بالله. الناس من حوله نسوا الله وعبدوا الأصنام. اختار الله نوحاً ليرشد الناس إلى الطريق الصحيح.", en: "Noah was a good man who believed in Allah. The people around him had forgotten Allah and worshipped idols. Allah chose Noah to guide people back to the right path." } },
            { icon: "⚠️", title: { de: "Die Warnung", ar: "التحذير", en: "The Warning" }, content: { de: "Noah predigte 950 Jahre lang! Er warnte die Menschen, dass eine große Flut kommen würde, wenn sie nicht auf Allah hören. Aber die meisten lachten ihn nur aus und wollten nicht zuhören.", ar: "دعا نوح قومه 950 سنة! حذرهم أن طوفاناً عظيماً سيأتي إن لم يسمعوا لله. لكن أكثرهم سخروا منه ولم يريدوا الاستماع.", en: "Noah preached for 950 years! He warned people that a great flood would come if they didn't listen to Allah. But most just laughed at him and didn't want to listen." } },
            { icon: "🔨", title: { de: "Der Bau der Arche", ar: "بناء السفينة", en: "Building the Ark" }, content: { de: "Allah befahl Noah, ein großes Schiff zu bauen - die Arche. Obwohl es weit vom Wasser entfernt war, gehorchte Noah. Die Leute machten sich über ihn lustig, aber Noah baute weiter und vertraute auf Allah.", ar: "أمر الله نوحاً أن يبني سفينة كبيرة. رغم أنها كانت بعيدة عن الماء أطاع نوح. سخر منه الناس لكن نوح واصل البناء وتوكل على الله.", en: "Allah commanded Noah to build a big ship - the Ark. Even though it was far from water, Noah obeyed. People made fun of him, but Noah kept building and trusted in Allah." } },
            { icon: "🦁", title: { de: "Die Tiere kommen", ar: "الحيوانات تأتي", en: "The Animals Come" }, content: { de: "Als die Arche fertig war, kamen von jeder Tierart ein Paar - zwei Löwen, zwei Elefanten, zwei Vögel und alle anderen Tiere. Noah, seine Familie und die wenigen Gläubigen gingen auch an Bord.", ar: "عندما اكتملت السفينة جاء من كل نوع حيوان زوج - أسدان وفيلان وطائران وكل الحيوانات الأخرى. ركب نوح وعائلته والمؤمنون القليلون أيضاً.", en: "When the Ark was finished, a pair of every animal came - two lions, two elephants, two birds and all other animals. Noah, his family and the few believers also went on board." } },
            { icon: "🌊", title: { de: "Die große Flut", ar: "الطوفان العظيم", en: "The Great Flood" }, content: { de: "Dann begann es zu regnen, wie es noch nie geregnet hatte. Wasser kam vom Himmel und aus der Erde. Die ganze Welt wurde überflutet. Aber die Arche schwamm sicher auf den Wellen, beschützt von Allah.", ar: "ثم بدأ المطر ينهمر كما لم يحدث من قبل. جاء الماء من السماء ومن الأرض. غُمرت الأرض كلها. لكن السفينة سبحت آمنة على الأمواج بحماية الله.", en: "Then it began to rain like never before. Water came from the sky and from the earth. The whole world was flooded. But the Ark floated safely on the waves, protected by Allah." } },
            { icon: "🌈", title: { de: "Ein neuer Anfang", ar: "بداية جديدة", en: "A New Beginning" }, content: { de: "Nach langer Zeit hörte der Regen auf. Die Arche landete auf einem Berg. Noah ließ einen Vogel fliegen, der mit einem Olivenzweig zurückkam - ein Zeichen, dass das Land trocken war. Ein neuer Anfang für die Menschheit!", ar: "بعد وقت طويل توقف المطر. رست السفينة على جبل. أطلق نوح طائراً عاد بغصن زيتون - علامة على أن الأرض جفت. بداية جديدة للبشرية!", en: "After a long time the rain stopped. The Ark landed on a mountain. Noah released a bird that came back with an olive branch - a sign that the land was dry. A new beginning for humanity!" } }
        ]
    },
    {
        id: 5,
        icon: "🔥",
        color: "#FF5722",
        title: { de: "Prophet Ibrahim", ar: "النبي إبراهيم عليه السلام", en: "Prophet Ibrahim (Abraham)" },
        description: { de: "Der Freund Allahs", ar: "خليل الله", en: "The Friend of Allah" },
        pages: [
            { icon: "🤔", title: { de: "Der kluge Junge", ar: "الفتى الذكي", en: "The Smart Boy" }, content: { de: "Ibrahim war ein kluges Kind. Er sah, dass die Menschen Statuen anbeteten, die sie selbst gemacht hatten. Das schien ihm nicht richtig. Er fragte sich: Wer hat die Sterne, den Mond und die Sonne erschaffen?", ar: "كان إبراهيم طفلاً ذكياً. رأى أن الناس يعبدون تماثيل صنعوها بأيديهم. هذا لم يبدُ صحيحاً له. تساءل: من خلق النجوم والقمر والشمس؟", en: "Ibrahim was a smart child. He saw that people worshipped statues they had made themselves. That didn't seem right to him. He wondered: Who created the stars, the moon and the sun?" } },
            { icon: "🌟", title: { de: "Die Suche nach der Wahrheit", ar: "البحث عن الحقيقة", en: "The Search for Truth" }, content: { de: "Eines Nachts sah Ibrahim einen Stern und dachte: 'Vielleicht ist das mein Gott.' Aber der Stern verschwand. Dann sah er den Mond, aber auch er verschwand. Dann die Sonne - auch sie ging unter. Ibrahim verstand: Der wahre Gott geht nie unter!", ar: "ذات ليلة رأى إبراهيم نجماً وظن: 'ربما هذا ربي.' لكن النجم اختفى. ثم رأى القمر لكنه أيضاً اختفى. ثم الشمس - هي أيضاً غابت. فهم إبراهيم: الإله الحقيقي لا يغيب أبداً!", en: "One night Ibrahim saw a star and thought: 'Maybe this is my God.' But the star disappeared. Then he saw the moon, but it also disappeared. Then the sun - it also set. Ibrahim understood: The true God never sets!" } },
            { icon: "🗿", title: { de: "Die zerbrochenen Götzen", ar: "الأصنام المحطمة", en: "The Broken Idols" }, content: { de: "Ibrahim wollte den Menschen zeigen, dass ihre Statuen keine echten Götter sind. Als alle weg waren, zerstörte er die Götzen - bis auf den größten. Er sagte: 'Fragt doch den großen, ob er es getan hat!' Da verstanden einige, dass Statuen nicht sprechen können.", ar: "أراد إبراهيم أن يُري الناس أن تماثيلهم ليست آلهة حقيقية. عندما ذهب الجميع حطّم الأصنام - إلا أكبرها. قال: 'اسألوا كبيرهم إن كان فعلها!' فهم بعضهم أن التماثيل لا تتكلم.", en: "Ibrahim wanted to show people that their statues are not real gods. When everyone was away, he destroyed the idols - except the biggest one. He said: 'Ask the big one if he did it!' Then some understood that statues cannot speak." } },
            { icon: "🔥", title: { de: "Das Feuer", ar: "النار", en: "The Fire" }, content: { de: "Der König war wütend und befahl, Ibrahim ins Feuer zu werfen. Aber Allah beschützte ihn! Das Feuer wurde kühl und friedlich für Ibrahim. Er kam unversehrt heraus. Das war ein großes Wunder!", ar: "غضب الملك وأمر بإلقاء إبراهيم في النار. لكن الله حماه! صارت النار برداً وسلاماً على إبراهيم. خرج منها سالماً. كانت معجزة عظيمة!", en: "The king was angry and ordered Ibrahim to be thrown into the fire. But Allah protected him! The fire became cool and peaceful for Ibrahim. He came out unharmed. That was a great miracle!" } },
            { icon: "🕋", title: { de: "Die Kaaba", ar: "الكعبة", en: "The Kaaba" }, content: { de: "Allah befahl Ibrahim und seinem Sohn Ismail, die Kaaba in Mekka zu bauen. Sie bauten gemeinsam das heilige Haus Allahs. Bis heute besuchen Millionen Muslime die Kaaba und gehen um sie herum, so wie Ibrahim es lehrte.", ar: "أمر الله إبراهيم وابنه إسماعيل ببناء الكعبة في مكة. بنيا معاً بيت الله الحرام. حتى اليوم يزور ملايين المسلمين الكعبة ويطوفون حولها كما علّم إبراهيم.", en: "Allah commanded Ibrahim and his son Ismail to build the Kaaba in Mecca. They built the holy house of Allah together. To this day millions of Muslims visit the Kaaba and walk around it, just as Ibrahim taught." } }
        ]
    },
    {
        id: 6,
        icon: "🌊",
        color: "#3F51B5",
        title: { de: "Prophet Musa (Moses)", ar: "النبي موسى عليه السلام", en: "Prophet Musa (Moses)" },
        description: { de: "Die Befreiung aus Ägypten", ar: "التحرر من مصر", en: "The Liberation from Egypt" },
        pages: [
            { icon: "👶", title: { de: "Das Baby im Korb", ar: "الطفل في السلة", en: "The Baby in the Basket" }, content: { de: "In Ägypten herrschte der grausame Pharao. Er befahl, alle israelitischen Babyjungen zu töten. Aber Musas Mutter legte ihn in einen Korb und setzte ihn auf dem Nil aus. Allah beschützte das kleine Baby.", ar: "حكم مصرَ فرعونُ الظالم. أمر بقتل كل أطفال بني إسرائيل الذكور. لكن أم موسى وضعته في سلة وألقته في النيل. حمى الله الطفل الصغير.", en: "In Egypt the cruel Pharaoh ruled. He ordered all Israelite baby boys to be killed. But Musa's mother put him in a basket and set him on the Nile. Allah protected the little baby." } },
            { icon: "👑", title: { de: "Im Palast aufgewachsen", ar: "نشأ في القصر", en: "Growing Up in the Palace" }, content: { de: "Die Tochter des Pharao fand den Korb und nahm das Baby zu sich. So wuchs Musa im Palast des Pharao auf! Seine eigene Mutter wurde seine Amme, ohne dass jemand es wusste. Allah hatte einen Plan.", ar: "وجدت ابنة فرعون السلة وأخذت الطفل إليها. هكذا نشأ موسى في قصر فرعون! أصبحت أمه مرضعته دون أن يعلم أحد. كان لله خطة.", en: "Pharaoh's daughter found the basket and took the baby. So Musa grew up in Pharaoh's palace! His own mother became his nurse without anyone knowing. Allah had a plan." } },
            { icon: "🏃", title: { de: "Die Flucht", ar: "الهروب", en: "The Escape" }, content: { de: "Als Musa erwachsen war, verteidigte er einen Israeliten gegen einen Ägypter. Dabei kam der Ägypter ums Leben. Musa musste fliehen und ging weit weg in ein Land namens Midian.", ar: "عندما كبر موسى دافع عن إسرائيلي ضد مصري. مات المصري. اضطر موسى للهروب وذهب بعيداً إلى أرض تسمى مدين.", en: "When Musa grew up, he defended an Israelite against an Egyptian. The Egyptian died. Musa had to flee and went far away to a land called Midian." } },
            { icon: "🔥", title: { de: "Der brennende Busch", ar: "الشجرة المشتعلة", en: "The Burning Bush" }, content: { de: "In Midian heiratete Musa und wurde Hirte. Eines Tages sah er einen Busch, der brannte aber nicht verbrannte! Allah sprach zu ihm aus dem Busch und gab ihm einen wichtigen Auftrag: Geh zum Pharao und befreie mein Volk!", ar: "في مدين تزوج موسى وأصبح راعياً. يوماً ما رأى شجرة تشتعل لكنها لا تحترق! كلّمه الله من الشجرة وأعطاه مهمة مهمة: اذهب إلى فرعون وحرر قومي!", en: "In Midian, Musa married and became a shepherd. One day he saw a bush that was burning but not burning up! Allah spoke to him from the bush and gave him an important mission: Go to Pharaoh and free my people!" } },
            { icon: "✨", title: { de: "Die Wunder", ar: "المعجزات", en: "The Miracles" }, content: { de: "Musa ging zum Pharao mit seinem Bruder Harun. Er zeigte große Wunder: Sein Stab wurde zu einer Schlange! Aber der Pharao war stur und ließ das Volk nicht gehen. Allah schickte viele Zeichen - Frösche, Heuschrecken und mehr.", ar: "ذهب موسى إلى فرعون مع أخيه هارون. أظهر معجزات عظيمة: عصاه تحولت لأفعى! لكن فرعون كان عنيداً ولم يُطلق القوم. أرسل الله آيات كثيرة - ضفادع وجراد وغيرها.", en: "Musa went to Pharaoh with his brother Harun. He showed great miracles: His staff became a snake! But Pharaoh was stubborn and wouldn't let the people go. Allah sent many signs - frogs, locusts and more." } },
            { icon: "🌊", title: { de: "Die Teilung des Meeres", ar: "انشقاق البحر", en: "The Parting of the Sea" }, content: { de: "Endlich ließ der Pharao sie gehen. Aber dann verfolgte er sie mit seiner Armee. Am Roten Meer schien es keine Rettung zu geben. Aber Musa schlug mit seinem Stab aufs Wasser - und das Meer teilte sich! Das Volk ging trockenen Fußes hindurch.", ar: "أخيراً أطلقهم فرعون. لكنه لحقهم بجيشه. عند البحر الأحمر بدا أنه لا نجاة. لكن موسى ضرب البحر بعصاه - فانشق! مشى القوم على أرض يابسة.", en: "Finally Pharaoh let them go. But then he chased them with his army. At the Red Sea there seemed to be no escape. But Musa struck the water with his staff - and the sea parted! The people walked through on dry ground." } }
        ]
    },
    {
        id: 7,
        icon: "🌾",
        color: "#9C27B0",
        title: { de: "Prophet Yusuf (Josef)", ar: "النبي يوسف عليه السلام", en: "Prophet Yusuf (Joseph)" },
        description: { de: "Die Geschichte der Brüder und der Träume", ar: "قصة الإخوة والأحلام", en: "The story of the brothers and the dreams" },
        pages: [
            { icon: "🌟", title: { de: "Der schöne Traum", ar: "الحلم الجميل", en: "The Beautiful Dream" }, content: { de: "Yusuf war ein junger Mann, den sein Vater Yaqub sehr liebte. Eines Nachts hatte Yusuf einen besonderen Traum: Elf Sterne, die Sonne und der Mond verneigten sich vor ihm. Sein Vater sagte: 'Erzähl das nicht deinen Brüdern!'", ar: "كان يوسف شاباً يحبه أبوه يعقوب كثيراً. ذات ليلة رأى يوسف حلماً مميزاً: أحد عشر كوكباً والشمس والقمر يسجدون له. قال أبوه: 'لا تقصص رؤياك على إخوتك!'", en: "Yusuf was a young man whom his father Yaqub loved very much. One night Yusuf had a special dream: Eleven stars, the sun and the moon bowed before him. His father said: 'Don't tell this to your brothers!'" } },
            { icon: "😠", title: { de: "Die eifersüchtigen Brüder", ar: "الإخوة الحاسدون", en: "The Jealous Brothers" }, content: { de: "Yusufs Brüder waren eifersüchtig, weil ihr Vater Yusuf so sehr liebte. Sie machten einen bösen Plan: Sie warfen Yusuf in einen tiefen Brunnen und erzählten ihrem Vater, ein Wolf hätte ihn gefressen.", ar: "كان إخوة يوسف حاسدين لأن أباهم أحب يوسف كثيراً. دبروا خطة شريرة: ألقوا يوسف في بئر عميق وأخبروا أباهم أن ذئباً أكله.", en: "Yusuf's brothers were jealous because their father loved Yusuf so much. They made an evil plan: They threw Yusuf into a deep well and told their father a wolf had eaten him." } },
            { icon: "🏛️", title: { de: "In Ägypten", ar: "في مصر", en: "In Egypt" }, content: { de: "Eine Karawane fand Yusuf im Brunnen und brachte ihn nach Ägypten. Dort wurde er als Sklave verkauft. Aber Allah war mit Yusuf. Er war ehrlich und fleißig, und bald vertraute ihm sein Herr sehr.", ar: "وجدت قافلة يوسف في البئر وأخذته إلى مصر. بيع هناك كعبد. لكن الله كان مع يوسف. كان صادقاً ومجتهداً فوثق به سيده كثيراً.", en: "A caravan found Yusuf in the well and brought him to Egypt. There he was sold as a slave. But Allah was with Yusuf. He was honest and hardworking, and soon his master trusted him greatly." } },
            { icon: "🔒", title: { de: "Im Gefängnis", ar: "في السجن", en: "In Prison" }, content: { de: "Obwohl Yusuf nichts Böses tat, kam er ins Gefängnis. Dort half er anderen Gefangenen, ihre Träume zu deuten. Allah hatte ihm diese besondere Gabe gegeben. Die Nachricht von seinem Talent verbreitete sich.", ar: "رغم أن يوسف لم يفعل سوءاً دخل السجن. هناك ساعد سجناء آخرين في تفسير أحلامهم. أعطاه الله هذه الموهبة الخاصة. انتشر خبر موهبته.", en: "Although Yusuf did nothing wrong, he went to prison. There he helped other prisoners interpret their dreams. Allah had given him this special gift. News of his talent spread." } },
            { icon: "👑", title: { de: "Der Traum des Königs", ar: "حلم الملك", en: "The King's Dream" }, content: { de: "Der König von Ägypten hatte einen seltsamen Traum, den niemand verstehen konnte. Yusuf deutete ihn: Es würden sieben gute Jahre kommen, dann sieben Jahre Hungersnot. Der König war beeindruckt und machte Yusuf zu seinem Minister!", ar: "رأى ملك مصر حلماً غريباً لم يستطع أحد فهمه. فسّره يوسف: ستأتي سبع سنوات خير ثم سبع سنوات قحط. أُعجب الملك وجعل يوسف وزيراً!", en: "The King of Egypt had a strange dream that no one could understand. Yusuf interpreted it: Seven good years would come, then seven years of famine. The king was impressed and made Yusuf his minister!" } },
            { icon: "👨‍👩‍👦‍👦", title: { de: "Die Wiedervereinigung", ar: "لمّ الشمل", en: "The Reunion" }, content: { de: "Die Hungersnot kam, und Yusufs Brüder kamen nach Ägypten, um Essen zu kaufen - sie erkannten ihn nicht! Yusuf vergab seinen Brüdern und holte seine ganze Familie nach Ägypten. Sein Traum wurde wahr: Alle verneigten sich vor ihm.", ar: "جاءت المجاعة وأتى إخوة يوسف إلى مصر لشراء الطعام - لم يعرفوه! سامح يوسف إخوته وأحضر عائلته كلها إلى مصر. تحقق حلمه: الجميع سجدوا له.", en: "The famine came, and Yusuf's brothers came to Egypt to buy food - they didn't recognize him! Yusuf forgave his brothers and brought his whole family to Egypt. His dream came true: Everyone bowed before him." } }
        ]
    },
    {
        id: 8,
        icon: "✨",
        color: "#E91E63",
        title: { de: "Prophet Isa (Jesus)", ar: "النبي عيسى عليه السلام", en: "Prophet Isa (Jesus)" },
        description: { de: "Der Prophet der Wunder", ar: "نبي المعجزات", en: "The Prophet of Miracles" },
        pages: [
            { icon: "👼", title: { de: "Die Verkündigung", ar: "البشارة", en: "The Annunciation" }, content: { de: "Maryam (Maria) war eine fromme junge Frau. Eines Tages kam der Engel Gabriel zu ihr mit einer erstaunlichen Nachricht: Sie würde einen besonderen Sohn bekommen, obwohl sie nicht verheiratet war. Das Kind würde ein großer Prophet sein.", ar: "كانت مريم امرأة شابة صالحة. يوماً ما جاء جبريل إليها بخبر مذهل: ستُرزق بابن مميز رغم أنها غير متزوجة. سيكون الطفل نبياً عظيماً.", en: "Maryam (Mary) was a devout young woman. One day Angel Gabriel came to her with amazing news: She would have a special son even though she was not married. The child would be a great prophet." } },
            { icon: "⭐", title: { de: "Die wundersame Geburt", ar: "الولادة المعجزة", en: "The Miraculous Birth" }, content: { de: "Isa wurde auf wundersame Weise geboren - ohne Vater, nur durch Allahs Willen. Als die Menschen Maryam beschuldigten, geschah ein Wunder: Das Baby Isa sprach und verteidigte seine Mutter! Er sagte, er sei ein Diener Allahs.", ar: "وُلد عيسى بطريقة معجزة - بلا أب، بمشيئة الله فقط. عندما اتهم الناس مريم حدثت معجزة: تكلم الطفل عيسى ودافع عن أمه! قال إنه عبد الله.", en: "Isa was born miraculously - without a father, only by Allah's will. When people accused Maryam, a miracle happened: Baby Isa spoke and defended his mother! He said he was a servant of Allah." } },
            { icon: "🌟", title: { de: "Die Wunder Isas", ar: "معجزات عيسى", en: "The Miracles of Isa" }, content: { de: "Mit Allahs Erlaubnis tat Isa viele Wunder: Er heilte Blinde und Kranke. Er formte einen Vogel aus Ton, und als er darauf blies, wurde er lebendig! Diese Wunder zeigten den Menschen, dass er ein wahrer Prophet war.", ar: "بإذن الله فعل عيسى معجزات كثيرة: شفى العميان والمرضى. صنع طائراً من طين ونفخ فيه فصار حياً! هذه المعجزات أظهرت للناس أنه نبي حقيقي.", en: "With Allah's permission, Isa performed many miracles: He healed the blind and sick. He shaped a bird from clay, and when he blew on it, it came alive! These miracles showed people he was a true prophet." } },
            { icon: "📖", title: { de: "Die Botschaft", ar: "الرسالة", en: "The Message" }, content: { de: "Isa lehrte die Menschen, an den einen Gott zu glauben und gut zu anderen zu sein. Er bekam von Allah ein heiliges Buch - das Injil (Evangelium). Seine Anhänger hießen die Jünger, und sie halfen ihm, die Botschaft zu verbreiten.", ar: "علّم عيسى الناس الإيمان بالله الواحد والإحسان إلى الآخرين. أنزل الله عليه كتاباً مقدساً - الإنجيل. أتباعه يُسمَّون الحواريين وساعدوه في نشر الرسالة.", en: "Isa taught people to believe in the one God and be good to others. He received a holy book from Allah - the Injil (Gospel). His followers were called the disciples, and they helped him spread the message." } },
            { icon: "☁️", title: { de: "Die Rettung", ar: "النجاة", en: "The Rescue" }, content: { de: "Die Feinde Isas wollten ihm schaden. Aber Allah rettete ihn und hob ihn zu sich in den Himmel. Muslime glauben, dass Isa noch lebt und eines Tages zurückkehren wird, um Frieden auf die Erde zu bringen.", ar: "أراد أعداء عيسى إيذاءه. لكن الله أنقذه ورفعه إلى السماء. يؤمن المسلمون أن عيسى حي وسيعود يوماً ليحقق السلام على الأرض.", en: "The enemies of Isa wanted to harm him. But Allah saved him and raised him to heaven. Muslims believe that Isa is still alive and will one day return to bring peace to the Earth." } }
        ]
    },
    {
        id: 9,
        icon: "🤝",
        color: "#009688",
        title: { de: "Gute Manieren", ar: "الآداب الحسنة", en: "Good Manners" },
        description: { de: "Wie wir uns im Islam benehmen", ar: "كيف نتصرف في الإسلام", en: "How we behave in Islam" },
        pages: [
            { icon: "🍽️", title: { de: "Bismillah sagen", ar: "قول بسم الله", en: "Saying Bismillah" }, content: { de: "Bevor wir essen, trinken oder etwas Wichtiges beginnen, sagen wir 'Bismillah' - das bedeutet 'Im Namen Allahs'. So erinnern wir uns daran, dass alles Gute von Allah kommt. Nach dem Essen sagen wir 'Alhamdulillah' - Dank sei Allah!", ar: "قبل أن نأكل أو نشرب أو نبدأ شيئاً مهماً نقول 'بسم الله'. هكذا نتذكر أن كل خير من الله. بعد الأكل نقول 'الحمد لله'!", en: "Before we eat, drink or start something important, we say 'Bismillah' - it means 'In the name of Allah'. This way we remember that all good comes from Allah. After eating we say 'Alhamdulillah' - Thanks be to Allah!" } },
            { icon: "👨‍👩‍👧", title: { de: "Respekt vor den Eltern", ar: "احترام الوالدين", en: "Respect for Parents" }, content: { de: "Im Islam ist es sehr wichtig, unsere Eltern zu respektieren und zu lieben. Wir sollten ihnen gehorchen, ihnen helfen und nett zu ihnen sein. Der Koran sagt, dass wir zu unseren Eltern gütig sein sollen.", ar: "في الإسلام من المهم جداً احترام والدينا ومحبتهما. يجب أن نطيعهما ونساعدهما ونكون لطفاء معهما. القرآن يأمرنا بالإحسان إلى الوالدين.", en: "In Islam it is very important to respect and love our parents. We should obey them, help them and be kind to them. The Quran tells us to be good to our parents." } },
            { icon: "😊", title: { de: "Freundlich zu allen", ar: "اللطف مع الجميع", en: "Kind to Everyone" }, content: { de: "Prophet Mohammed sagte: 'Lächeln ist Sadaqa (gute Tat)!' Wir sollen freundlich zu allen sein - zu Freunden, Fremden und sogar zu Menschen, die nicht nett zu uns sind. Ein freundliches Wort kann den Tag eines Menschen erhellen.", ar: "قال النبي محمد ﷺ: 'تبسمك في وجه أخيك صدقة!' يجب أن نكون لطفاء مع الجميع - الأصدقاء والغرباء وحتى من لا يحسنون إلينا. كلمة طيبة قد تُنير يوم إنسان.", en: "Prophet Mohammed said: 'Smiling is Sadaqa (a good deed)!' We should be kind to everyone - friends, strangers and even people who are not nice to us. A kind word can brighten someone's day." } },
            { icon: "🎁", title: { de: "Teilen und Helfen", ar: "المشاركة والمساعدة", en: "Sharing and Helping" }, content: { de: "Gute Muslime teilen mit anderen. Wenn wir ein Spielzeug haben, teilen wir es. Wenn wir sehen, dass jemand Hilfe braucht, helfen wir. Allah liebt die Menschen, die großzügig sind und anderen helfen.", ar: "المسلمون الصالحون يتشاركون مع الآخرين. إذا كان لدينا لعبة نشاركها. إذا رأينا من يحتاج مساعدة نساعده. الله يحب الكرماء ومن يساعدون الآخرين.", en: "Good Muslims share with others. If we have a toy, we share it. If we see someone needs help, we help. Allah loves people who are generous and help others." } },
            { icon: "✓", title: { de: "Die Wahrheit sagen", ar: "قول الحقيقة", en: "Telling the Truth" }, content: { de: "Lügen ist im Islam verboten. Wir sollen immer die Wahrheit sagen, auch wenn es schwer ist. Prophet Mohammed war bekannt als 'Al-Amin' - der Vertrauenswürdige, weil er nie log. Ehrlichkeit macht uns zu besseren Menschen.", ar: "الكذب محرم في الإسلام. يجب أن نقول الحقيقة دائماً حتى لو كان صعباً. النبي محمد ﷺ عُرف بـ'الأمين' لأنه لم يكذب أبداً. الصدق يجعلنا أشخاصاً أفضل.", en: "Lying is forbidden in Islam. We should always tell the truth, even when it's hard. Prophet Mohammed was known as 'Al-Amin' - the Trustworthy, because he never lied. Honesty makes us better people." } },
            { icon: "🧼", title: { de: "Sauberkeit", ar: "النظافة", en: "Cleanliness" }, content: { de: "Der Prophet sagte: 'Sauberkeit ist die Hälfte des Glaubens.' Wir waschen uns vor dem Gebet (Wudu), halten unsere Kleidung sauber und räumen unser Zimmer auf. Ein sauberer Körper und ein sauberer Ort helfen uns, Allah näher zu sein.", ar: "قال النبي ﷺ: 'الطهور شطر الإيمان.' نتوضأ قبل الصلاة ونحافظ على نظافة ملابسنا ونرتب غرفتنا. الجسم النظيف والمكان النظيف يساعداننا أن نكون قريبين من الله.", en: "The Prophet said: 'Cleanliness is half of faith.' We wash before prayer (Wudu), keep our clothes clean and tidy our room. A clean body and a clean place help us be closer to Allah." } }
        ]
    },
    {
        id: 13,
        icon: "🤝",
        color: "#43A047",
        title: { de: "Islamische Werte und gutes Benehmen (الأخلاق الإسلامية)", ar: "الأخلاق الإسلامية", en: "Islamic Values and Good Behavior" },
        description: { de: "Kindgerecht erklaert: gutes Verhalten im Islam", ar: "بشرح بسيط للأطفال: السلوك الحسن في الإسلام", en: "Child-friendly: good behavior in Islam" },
        pages: [
            { icon: "🌿", title: { de: "Was bedeutet الأخلاق الإسلامية?", ar: "ما معنى الأخلاق الإسلامية؟", en: "What does Islamic Ethics mean?" }, content: { de: "Das bedeutet islamische Werte und gutes Benehmen. Im Islam gehören dazu Wahrheit, Respekt und Barmherzigkeit. Der Koran und der Prophet Mohammed ﷺ lehren uns diese schoenen Eigenschaften.", ar: "تعني القيم الإسلامية والسلوك الحسن. في الإسلام تشمل الصدق والاحترام والرحمة. القرآن والنبي محمد ﷺ يعلماننا هذه الصفات الجميلة.", en: "It means Islamic values and good behavior. In Islam these include truth, respect and mercy. The Quran and Prophet Mohammed ﷺ teach us these beautiful qualities." } },
            { icon: "✅", title: { de: "Die Wahrheit sagen", ar: "قول الصدق", en: "Telling the Truth" }, content: { de: "Im Islam ist Ehrlichkeit sehr wichtig. Ein Muslim soll die Wahrheit sagen und nicht lügen. So vertrauen die Menschen einander und das Herz bleibt sauber.", ar: "في الإسلام الصدق مهم جداً. المسلم يقول الحق ولا يكذب. هكذا يثق الناس ببعضهم ويبقى القلب نظيفاً.", en: "In Islam honesty is very important. A Muslim should tell the truth and not lie. This way people trust each other and the heart stays clean." } },
            { icon: "🔐", title: { de: "Amanah - Vertrauenswuerdig sein", ar: "الأمانة", en: "Amanah - Being Trustworthy" }, content: { de: "Amanah bedeutet: Man passt gut auf etwas auf und betruegt niemanden. Wenn dir jemand etwas gibt, sollst du ehrlich damit umgehen. Auch der Prophet Mohammed ﷺ war fuer seine Treue bekannt.", ar: "الأمانة تعني: أن تحافظ على ما عندك ولا تخون أحداً. إذا أعطاك أحد شيئاً تتعامل معه بصدق. النبي محمد ﷺ عُرف بأمانته.", en: "Amanah means: Taking good care of things and not cheating anyone. If someone gives you something, you handle it honestly. Prophet Mohammed ﷺ was also known for his trustworthiness." } },
            { icon: "🤲", title: { de: "Respekt fuer andere", ar: "احترام الآخرين", en: "Respect for Others" }, content: { de: "Im Islam sollen wir andere mit Respekt behandeln. Wir sprechen freundlich und verletzen niemanden mit Worten. Auch kleine Kinder können durch gute Worte viel Gutes tun.", ar: "في الإسلام يجب أن نعامل الآخرين باحترام. نتكلم بلطف ولا نجرح أحداً بالكلام. حتى الأطفال الصغار يمكنهم فعل الخير بالكلمة الطيبة.", en: "In Islam we should treat others with respect. We speak kindly and don't hurt anyone with words. Even small children can do much good through kind words." } },
            { icon: "👨‍👩‍👧", title: { de: "Guete zu den Eltern", ar: "بر الوالدين", en: "Kindness to Parents" }, content: { de: "Der Koran lehrt uns, zu unseren Eltern respektvoll zu sein. Wir sollen ihnen zuhören, helfen und dankbar sein. Freundlichkeit zu den Eltern ist im Islam etwas sehr Wertvolles.", ar: "القرآن يعلمنا أن نكون بارّين بوالدينا. نسمع لهما ونساعدهما ونكون شاكرين. الإحسان إلى الوالدين شيء ثمين جداً في الإسلام.", en: "The Quran teaches us to be respectful to our parents. We should listen to them, help them and be grateful. Kindness to parents is something very precious in Islam." } },
            { icon: "🧩", title: { de: "Zusammen helfen", ar: "التعاون", en: "Helping Together" }, content: { de: "Im Islam ist Zusammenarbeit etwas Gutes. Wir helfen bei guten Dingen, teilen und lassen niemanden allein. So wird die Gemeinschaft stark und freundlich.", ar: "في الإسلام التعاون شيء حسن. نساعد في الخير ونتشارك ولا نترك أحداً وحيداً. هكذا يصبح المجتمع قوياً ولطيفاً.", en: "In Islam cooperation is a good thing. We help with good things, share and don't leave anyone alone. This makes the community strong and friendly." } },
            { icon: "💬", title: { de: "Freundlich sprechen", ar: "الكلام الطيب", en: "Speaking Kindly" }, content: { de: "Ein Muslim soll schoen und freundlich sprechen. Böse Wörte, andere auslachen und Beleidigungen sind nicht gut. Ein nettes Wort kann ein trauriges Herz froh machen.", ar: "المسلم يتكلم بلطف وجمال. الكلام السيء والسخرية والإهانات ليست جيدة. كلمة طيبة يمكن أن تفرح قلباً حزيناً.", en: "A Muslim should speak beautifully and kindly. Bad words, mocking others and insults are not good. A nice word can make a sad heart happy." } },
            { icon: "❤️", title: { de: "Barmherzig sein", ar: "الرحمة", en: "Being Merciful" }, content: { de: "Der Islam lehrt Mitgefuehl mit Menschen und Tieren. Wir sollen den Kleinen helfen und mit den Schwachen sanft sein. Barmherzigkeit macht einen Menschen im Islam besonders schoen.", ar: "الإسلام يعلّم الرحمة بالناس والحيوانات. نساعد الصغار ونرفق بالضعفاء. الرحمة تجعل الإنسان جميلاً في الإسلام.", en: "Islam teaches compassion for people and animals. We should help the little ones and be gentle with the weak. Mercy makes a person especially beautiful in Islam." } },
            { icon: "🏫", title: { de: "Ein kleines Alltagsbeispiel", ar: "مثال صغير من الحياة اليومية", en: "A Small Daily Example" }, content: { de: "Findet ein Kind in der Schule einen Stift, gibt es ihn zurück. Das ist Ehrlichkeit und Amanah. So lebt man islamische Werte auch in kleinen Dingen.", ar: "إذا وجد طفل قلماً في المدرسة يُعيده. هذا صدق وأمانة. هكذا نعيش القيم الإسلامية حتى في الأشياء الصغيرة.", en: "If a child finds a pen at school, they return it. That is honesty and Amanah. This is how we live Islamic values even in small things." } },
            { icon: "📝", title: { de: "Merksatz", ar: "جملة للحفظ", en: "Summary" }, content: { de: "Wahrheit, Amanah, Respekt, Guete zu den Eltern und Helfen. Das sind wichtige islamische Werte fuer Kinder. Mit ihnen liebt Allah gute Taten und schoenes Benehmen.", ar: "الصدق والأمانة والاحترام وبر الوالدين والمساعدة. هذه قيم إسلامية مهمة للأطفال. بها يحب الله الأعمال الحسنة والسلوك الجميل.", en: "Truth, Amanah, respect, kindness to parents and helping. These are important Islamic values for children. With them Allah loves good deeds and beautiful behavior." } }
        ]
    },
    {
        id: 14,
        icon: "🕌",
        color: "#5E35B1",
        title: { de: "Geschichten der Sahaba für Kinder (قصص الصحابة للأطفال)", ar: "قصص الصحابة للأطفال", en: "Stories of the Sahaba for Kids" },
        description: { de: "Wichtige Vorbilder aus dem Leben der Sahaba", ar: "قدوات مهمة من حياة الصحابة", en: "Important role models from the lives of the Sahaba" },
        pages: [
            { icon: "🌟", title: { de: "Abu Bakr (ra)", ar: "أبو بكر رضي الله عنه", en: "Abu Bakr (ra)" }, content: { de: "Abu Bakr (ra) war der beste Freund des Propheten Mohammed ﷺ. Er glaubte sehr frueh an den Islam und half den Muslimen in schweren Zeiten. Er war bekannt fuer Wahrheit, Mut und Grosszuegigkeit.", ar: "أبو بكر رضي الله عنه كان أعز صديق للنبي محمد ﷺ. آمن بالإسلام مبكراً جداً وساعد المسلمين في الأوقات الصعبة. عُرف بالصدق والشجاعة والكرم.", en: "Abu Bakr (ra) was the best friend of Prophet Mohammed ﷺ. He believed in Islam very early and helped Muslims in difficult times. He was known for truth, courage and generosity." } },
            { icon: "⚖️", title: { de: "Umar ibn al-Khattab (ra)", ar: "عمر بن الخطاب رضي الله عنه", en: "Umar ibn al-Khattab (ra)" }, content: { de: "Umar (ra) war stark, gerecht und sehr verantwortungsvoll. Nach seiner Annahme des Islam schuetzte er die Muslime mutig. Er achtete darauf, dass Arme und Schwache ihre Rechte bekommen.", ar: "عمر رضي الله عنه كان قوياً وعادلاً ومسؤولاً جداً. بعد إسلامه حمى المسلمين بشجاعة. حرص على أن ينال الفقراء والضعفاء حقوقهم.", en: "Umar (ra) was strong, just and very responsible. After accepting Islam he bravely protected the Muslims. He made sure that the poor and weak got their rights." } },
            { icon: "📖", title: { de: "Uthman ibn Affan (ra)", ar: "عثمان بن عفان رضي الله عنه", en: "Uthman ibn Affan (ra)" }, content: { de: "Uthman (ra) war freundlich, bescheiden und sehr spendabel. Er unterstuetzte die Gemeinde mit seinem Vermoegen. Zu seiner Zeit wurde der Koran in einer einheitlichen Form gesammelt.", ar: "عثمان رضي الله عنه كان لطيفاً ومتواضعاً وكريماً جداً. دعم الأمة بماله. في عهده جُمع القرآن بصورة موحدة.", en: "Uthman (ra) was kind, humble and very generous. He supported the community with his wealth. During his time the Quran was collected in a unified form." } },
            { icon: "🛡️", title: { de: "Ali ibn Abi Talib (ra)", ar: "علي بن أبي طالب رضي الله عنه", en: "Ali ibn Abi Talib (ra)" }, content: { de: "Ali (ra) war ein mutiger und kluger Sahabi. Er liebte Wissen und setzte sich fuer Gerechtigkeit ein. Kinder lernen von ihm Mut, Ehrlichkeit und gute Absicht.", ar: "علي رضي الله عنه كان صحابياً شجاعاً وذكياً. أحب العلم وعمل من أجل العدل. يتعلم الأطفال منه الشجاعة والصدق والنية الحسنة.", en: "Ali (ra) was a brave and smart companion. He loved knowledge and stood for justice. Children learn from him courage, honesty and good intention." } },
            { icon: "🔊", title: { de: "Bilal ibn Rabah (ra)", ar: "بلال بن رباح رضي الله عنه", en: "Bilal ibn Rabah (ra)" }, content: { de: "Bilal (ra) blieb trotz schwerer Qualen fest im Glauben. Er wurde der erste Muadhdhin im Islam und rief zum Gebet. Seine Geschichte zeigt Geduld, Standhaftigkeit und Liebe zu Allah.", ar: "بلال رضي الله عنه ثبت على إيمانه رغم العذاب الشديد. أصبح أول مؤذن في الإسلام. قصته تُظهر الصبر والثبات وحب الله.", en: "Bilal (ra) stayed firm in faith despite severe torture. He became the first Muadhdhin in Islam and called to prayer. His story shows patience, steadfastness and love for Allah." } },
            { icon: "💖", title: { de: "Khadija bint Khuwaylid (ra)", ar: "خديجة بنت خويلد رضي الله عنها", en: "Khadija bint Khuwaylid (ra)" }, content: { de: "Khadija (ra) war die erste, die an den Propheten Mohammed ﷺ glaubte. Sie stand immer treu an seiner Seite und troestete ihn. Sie ist ein Vorbild fuer Vertrauen, Loyalitaet und Grossherzigkeit.", ar: "خديجة رضي الله عنها كانت أول من آمن بالنبي محمد ﷺ. وقفت بجانبه بإخلاص وواسته دائماً. هي قدوة في الثقة والوفاء وكرم القلب.", en: "Khadija (ra) was the first to believe in Prophet Mohammed ﷺ. She always stood faithfully by his side and comforted him. She is a role model for trust, loyalty and generosity." } },
            { icon: "🎓", title: { de: "Aisha bint Abi Bakr (ra)", ar: "عائشة بنت أبي بكر رضي الله عنها", en: "Aisha bint Abi Bakr (ra)" }, content: { de: "Aisha (ra) war eine sehr kluge Sahabiyya mit viel Wissen. Viele Menschen lernten von ihr Hadithe und islamische Regeln. Sie zeigt Kindern, wie wichtig Lernen und Fragen sind.", ar: "عائشة رضي الله عنها كانت صحابية ذكية جداً بعلم كثير. تعلم منها كثيرون الأحاديث والأحكام الإسلامية. تُظهر للأطفال أهمية التعلم والسؤال.", en: "Aisha (ra) was a very smart companion with great knowledge. Many people learned Hadiths and Islamic rules from her. She shows children how important learning and asking questions are." } },
            { icon: "🤲", title: { de: "Abdurrahman ibn Auf (ra)", ar: "عبدالرحمن بن عوف رضي الله عنه", en: "Abdurrahman ibn Auf (ra)" }, content: { de: "Abdurrahman (ra) war ein erfolgreicher Haendler mit einem ehrlichen Herzen. Er verdiente auf halal Weise und spendete sehr viel fuer Allahs Weg. Er lehrt uns Fleiss, Ehrlichkeit und Teilen.", ar: "عبدالرحمن رضي الله عنه كان تاجراً ناجحاً بقلب صادق. كسب بطريقة حلال وتصدق كثيراً في سبيل الله. يعلمنا الاجتهاد والصدق والمشاركة.", en: "Abdurrahman (ra) was a successful trader with an honest heart. He earned in a halal way and donated a lot for Allah's cause. He teaches us diligence, honesty and sharing." } },
            { icon: "🏹", title: { de: "Saad ibn Abi Waqqas (ra)", ar: "سعد بن أبي وقاص رضي الله عنه", en: "Saad ibn Abi Waqqas (ra)" }, content: { de: "Saad (ra) gehoerte zu den fruehen Muslimen und war fuer seinen Mut bekannt. Der Prophet Mohammed ﷺ lobte ihn und machte Dua fuer ihn. Er zeigt, wie Gehorsam und Vertrauen zu Erfolg fuehren.", ar: "سعد رضي الله عنه من المسلمين الأوائل وعُرف بشجاعته. مدحه النبي محمد ﷺ ودعا له. يُظهر كيف تؤدي الطاعة والثقة إلى النجاح.", en: "Saad (ra) was among the early Muslims and was known for his courage. Prophet Mohammed ﷺ praised him and made Dua for him. He shows how obedience and trust lead to success." } },
            { icon: "🤝", title: { de: "Anas ibn Malik (ra)", ar: "أنس بن مالك رضي الله عنه", en: "Anas ibn Malik (ra)" }, content: { de: "Anas (ra) diente dem Propheten Mohammed ﷺ viele Jahre. Er erzaehlte, dass der Prophet immer freundlich und geduldig war. Von Anas lernen Kinder gutes Benehmen im Alltag.", ar: "أنس رضي الله عنه خدم النبي محمد ﷺ سنوات كثيرة. روى أن النبي كان دائماً لطيفاً وصبوراً. من أنس يتعلم الأطفال حسن السلوك في الحياة اليومية.", en: "Anas (ra) served Prophet Mohammed ﷺ for many years. He told that the Prophet was always kind and patient. From Anas, children learn good behavior in daily life." } }
        ]
    },
    {
        id: 15,
        icon: "🌙",
        color: "#00897B",
        title: { de: "Die Prophetenbiografie für Kinder (السيرة النبوية للأطفال)", ar: "السيرة النبوية للأطفال", en: "The Prophet's Biography for Kids" },
        description: { de: "Die schoenen Eigenschaften des Propheten ﷺ einfach erklaert", ar: "صفات النبي ﷺ الجميلة بشرح بسيط", en: "The beautiful qualities of the Prophet ﷺ simply explained" },
        pages: [
            { icon: "📚", title: { de: "Was ist die Sira?", ar: "ما هي السيرة؟", en: "What is the Sira?" }, content: { de: "Sira bedeutet die Lebensgeschichte des Propheten Mohammed ﷺ. Wir sollen daraus lernen und seinem Verhalten und seinem guten Vorbild im Alltag folgen.", ar: "السيرة تعني قصة حياة النبي محمد ﷺ. يجب أن نتعلم منها ونتبع سلوكه وقدوته الحسنة في حياتنا اليومية.", en: "Sira means the life story of Prophet Mohammed ﷺ. We should learn from it and follow his behavior and good example in daily life." } },
            { icon: "❤️", title: { de: "Rahma - Barmherzigkeit", ar: "الرحمة", en: "Rahma - Mercy" }, content: { de: "Der Prophet Mohammed ﷺ war sehr barmherzig zu Menschen und Tieren. Er half den Schwachen und troestete Traurige. Im Islam ist Barmherzigkeit ein Zeichen von starkem Glauben.", ar: "كان النبي محمد ﷺ رحيماً جداً بالناس والحيوانات. ساعد الضعفاء وواسى الحزانى. في الإسلام الرحمة علامة على الإيمان القوي.", en: "Prophet Mohammed ﷺ was very merciful to people and animals. He helped the weak and comforted the sad. In Islam mercy is a sign of strong faith." } },
            { icon: "✅", title: { de: "Sidq - Wahrheit", ar: "الصدق", en: "Sidq - Truth" }, content: { de: "Noch vor dem Prophetentum war Mohammed ﷺ fuer seine Ehrlichkeit bekannt. Die Menschen nannten ihn Al-Amin, den Vertrauenswuerdigen. Wahrheit macht das Herz rein und Beziehungen stark.", ar: "حتى قبل النبوة عُرف محمد ﷺ بصدقه. سمّاه الناس الأمين. الصدق يطهر القلب ويقوي العلاقات.", en: "Even before prophethood, Mohammed ﷺ was known for his honesty. People called him Al-Amin, the Trustworthy. Truth makes the heart pure and relationships strong." } },
            { icon: "🤍", title: { de: "Tasamuh - Vergebung", ar: "التسامح", en: "Tasamuh - Forgiveness" }, content: { de: "Der Prophet Mohammed ﷺ vergab oft, auch wenn Menschen ihn verletzten. Er zeigte, dass Vergebung Staerke ist und nicht Schwaeche. So lernen Kinder, Streit friedlich zu beenden.", ar: "النبي محمد ﷺ سامح كثيراً حتى من آذوه. أظهر أن المسامحة قوة وليست ضعفاً. هكذا يتعلم الأطفال إنهاء الخلافات بسلام.", en: "Prophet Mohammed ﷺ often forgave, even when people hurt him. He showed that forgiveness is strength, not weakness. This way children learn to end conflicts peacefully." } },
            { icon: "🏠", title: { de: "Guter Umgang mit Nachbarn", ar: "حسن الجوار", en: "Good Treatment of Neighbors" }, content: { de: "Im Islam sollen Nachbarn freundlich behandelt werden. Der Prophet Mohammed ﷺ lehrte: nicht stoeren, sondern helfen. Gute Nachbarschaft bringt Frieden in jede Strasse.", ar: "في الإسلام يجب معاملة الجيران بلطف. علّم النبي محمد ﷺ: لا تزعج بل ساعد. حسن الجوار يجلب السلام لكل شارع.", en: "In Islam neighbors should be treated kindly. Prophet Mohammed ﷺ taught: don't disturb, but help. Good neighborliness brings peace to every street." } },
            { icon: "🧒", title: { de: "Freundlichkeit zu Kindern", ar: "اللطف مع الأطفال", en: "Kindness to Children" }, content: { de: "Der Prophet Mohammed ﷺ war liebevoll zu Kindern und hoerte ihnen zu. Er gruesste sie, laechelte und spielte freundlich mit ihnen. So lernen Erwachsene und Kinder gegenseitigen Respekt.", ar: "كان النبي محمد ﷺ حنوناً مع الأطفال ويستمع إليهم. كان يسلّم عليهم ويبتسم ويلاعبهم بلطف. هكذا يتعلم الكبار والصغار الاحترام المتبادل.", en: "Prophet Mohammed ﷺ was loving to children and listened to them. He greeted them, smiled and played kindly with them. This way adults and children learn mutual respect." } },
            { icon: "🌿", title: { de: "Sanftheit statt Haerte", ar: "اللين بدل القسوة", en: "Gentleness Instead of Harshness" }, content: { de: "Der Prophet Mohammed ﷺ waehlte oft sanfte Worte. Er schrie nicht und beleidigte niemanden. Sanftheit oeffnet Herzen und hilft, dass Menschen besser zuhoeren.", ar: "النبي محمد ﷺ اختار غالباً الكلمات اللطيفة. لم يصرخ ولم يُهن أحداً. اللين يفتح القلوب ويساعد الناس أن يستمعوا أفضل.", en: "Prophet Mohammed ﷺ often chose gentle words. He didn't shout and didn't insult anyone. Gentleness opens hearts and helps people listen better." } },
            { icon: "🤝", title: { de: "Hilfsbereitschaft", ar: "المساعدة", en: "Helpfulness" }, content: { de: "Der Prophet Mohammed ﷺ half Armen, Kranken und Reisenden. Er zeigte, dass jeder etwas Gutes geben kann, auch ein Lachen. Im Islam zaehlt jede gute Tat bei Allah.", ar: "النبي محمد ﷺ ساعد الفقراء والمرضى والمسافرين. أظهر أن كل شخص يستطيع تقديم شيء طيب حتى الابتسامة. في الإسلام كل عمل خير محسوب عند الله.", en: "Prophet Mohammed ﷺ helped the poor, sick and travelers. He showed that everyone can give something good, even a smile. In Islam every good deed counts with Allah." } },
            { icon: "⏳", title: { de: "Geduld in schweren Zeiten", ar: "الصبر في الأوقات الصعبة", en: "Patience in Hard Times" }, content: { de: "Trotz schwieriger Zeiten blieb der Prophet Mohammed ﷺ geduldig. Er vertraute auf Allah und gab nie auf. Kinder lernen daraus Mut, Standhaftigkeit und Hoffnung.", ar: "رغم الأوقات الصعبة بقي النبي محمد ﷺ صبوراً. توكل على الله ولم يستسلم أبداً. يتعلم الأطفال من ذلك الشجاعة والثبات والأمل.", en: "Despite difficult times, Prophet Mohammed ﷺ remained patient. He trusted in Allah and never gave up. Children learn from this courage, steadfastness and hope." } },
            { icon: "📝", title: { de: "Merksatz der Sira", ar: "جملة لحفظ السيرة", en: "Summary of the Sira" }, content: { de: "Barmherzigkeit, Wahrheit, Vergebung und guter Umgang gehoeren zur Sira. Der Prophet Mohammed ﷺ ist unser bestes Vorbild. Wer ihm folgt, bringt Frieden und Guete in den Alltag.", ar: "الرحمة والصدق والتسامح وحسن المعاملة من السيرة. النبي محمد ﷺ قدوتنا الأفضل. من يتبعه يجلب السلام والخير في حياته اليومية.", en: "Mercy, truth, forgiveness and good treatment belong to the Sira. Prophet Mohammed ﷺ is our best role model. Whoever follows him brings peace and goodness to daily life." } }
        ]
    }
];
