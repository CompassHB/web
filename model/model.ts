import {Model} from "falcor";
import {ref} from "falcor-json-graph";
import {router} from './router';

export const model = new Model({
  cache: {
    distinctives: {
      inOrder: {
        0: ref("distinctives.byAlias.bible"),
        1: ref("distinctives.byAlias.preaching"),
        2: ref("distinctives.byAlias.god"),
        3: ref("distinctives.byAlias.gospel"),
        4: ref("distinctives.byAlias.prayer"),
        5: ref("distinctives.byAlias.participants"),
        6: ref("distinctives.byAlias.leaders"),
        7: ref("distinctives.byAlias.churches"),
        length: 8,
      },
      byAlias: {
        bible: {
          title: "The Bible is central",
          description: `While the Bible is not an end in itself, it is certainly the indispensable "compass"
                        for our knowledge and understanding of God and his plan for our lives.`,
          references: "Psalm 43:3; Psalm 119:105; John 17:17; 1 Timothy 3:15",
        },
        preaching: {
          title: "We showcase expository preaching",
          description: `Because God’s written revelation to us is "living and active and sharper than any two-edged sword"
                        it is our intention to allow it to utilize Compass preachers to get to our hearts and minds as they open the word and let its message out.
                        Our goal is that Compass pastors won't use the Bible to preach their messages, but that the Bible will use Compass pastors to preach its message.
                        God's powerful and life-changing truth!`,
          references: "Hebrews 4:12",
        },
        god: {
          title: "We seek to maintain a high view of God",
          description: `In a day when many have attempted to reduce God to be their spiritual therapist,
                        it is important for us to remember that God, our Creator, is the highly exalted, transcendent, King of all things.
                        We cannot afford to think less of God than he really is.
                        We dare not respond to him as merely our comfortable friend and fail to worship him as our Sovereign Lord.`,
          references: "Malachi 1:6-11",
        },
        gospel: {
          title: "We work to proclaim a Biblical gospel",
          description: `It is imperative that we understand what God's word says about how one becomes a disciple of Christ and thus a child of God.
                        We cannot truncate, sterilize, simplify, adjust or in any other way modify the message of the gospel that was once and for all delivered to God's people in God's word.
                        We will not shy away from clearly articulating God's truth on heaven, hell, sin, judgment, repentance and faith.
                        It will be our goal to hold tightly to a biblical gospel.`,
          references: "Romans 1:16",
        },
        prayer: {
          title: "We have a genuine reliance on prayer",
          description: `We understand that the mission, the goals and the values at Compass Bible Church are humanly impossible.
                        We do not inherently possess the wherewithal to make disciples or aid them in knowing, loving and serving Christ.
                        These are works of God and we will always rely on him as we ardently ask him to accomplish these biblical objectives among us.`,
          references: "Colossians 4:2-6",
        },
        participants: {
          title: "We have highly committed participants",
          description: `To effectively and efficiently accomplish all that God has called us to do,
                        we cannot maintain the all-too-common "20% of the people do 80% of the work."
                        At Compass we must always encourage that "each part does its work." (Eph.4:16b)`,
          references: "Ephesians 4:11-16; Acts 4:34-35",
        },
        leaders: {
          title: "We will look to authentic and sacrificial leaders",
          description: `The kind of people that God calls to lead at Compass Bible Church is extremely important.
                        Obviously our pastors and teachers must meet the biblical qualifications as set forth in the books of 1 Timothy and Titus.
                        Beyond that we expect our leaders to follow in Apostle Paul's example of being authentic, forthright, honest, hard-working and sacrificial.
                        In a phrase we expect that our leaders set the example of saying to Christ daily: "any thing, any place, any time!"`,
          references: "2 Corinthians 6:3-11; 1 Thessalonians 2:8-9",
        },
        churches: {
          title: "We will always be working to plant new churches",
          description: `It is our concern that we work to regularly launch more Bible-teaching churches that are resolved and constrained
                        to move into more communities with a biblical purpose, a biblical mission and clearly maintained biblical values.
                        It is our hope that Compass will never lose its commitment to this end.`,
          references: "Acts 1:8",
        },
      },
    },
    beliefs: {
      inOrder: {
        0: ref("beliefs.byAlias.bible"),
        1: ref("beliefs.byAlias.father"),
        2: ref("beliefs.byAlias.son"),
        3: ref("beliefs.byAlias.spirit"),
        4: ref("beliefs.byAlias.people"),
        5: ref("beliefs.byAlias.salvation"),
        6: ref("beliefs.byAlias.church"),
        7: ref("beliefs.byAlias.last"),
        length: 8,
      },
      byAlias: {
        bible: {
          title: "The Bible",
          content: `The sixty-six books of the Bible were given by the inspiration of God's Spirit and are not the product of human creativity or ingenuity (2 Pt 1:20-21).
                    Every word of the Bible is inspired by God in the original manuscripts (2 Timothy 3:16; Mt 5:18).
                    The Bible in its original manuscripts is without error and is completely accurate in all that it affirms (John 17:17; Ps 19:7).
                    The Scripture is to be interpreted considering the literal, grammatical and historical aspects of a given text.`,
        },
        father: {
          title: "God the Father",
          content: `There is only one true and living God (Deuteronomy 6:4; Isaiah 45:5-7; 1 Corinthians 8:4).
                    God is one essence existing in three persons: the Father, the Son and the Holy Spirit (Mt.28:19; 2 Corinthians 13:14).
                    God is sovereign (Psalm 115:3), eternal (Isaiah 44:6), all-knowing (Ps 139:4), all-powerful (Job 42:2), holy (Isaiah 6:1-7), unchanging (Malachi 3:6), just (Ps 97:2) and loving (1 John 4:8).`,
        },
        jesus: {
          title: "Jesus Christ",
          content: `Jesus is God in very essence and pre-existed as God in all His glory before His incarnation in time and space (John 8:57-58; Philippians 2:6-7).
                    Jesus Christ became a man, virgin born (Matthew 1:23), to redeem mankind and at that time accepted all the essential characteristics of humanity without violating or detracting from His divine essence (Hebrews 2:14-15; Philippians 2:5-8).
                    Jesus died on a cross for our sin (John 10:15; Romans 5:8; 1 Peter 2:24), was physically raised from the dead (Romans 1:4; 1 Corinthians 15:16-20), ascended to the Father (Acts 1:9; Romans 8:34), and will return to receive his church (Acts 1:9-11; 1 Thessalonians 4:13-17).`,
        },
        spirit: {
          title: "The Holy Spirit",
          content: `The Holy Spirit is coequal with the Father and the Son (Matthew 28:19; Acts 5:3-4, 28:25-26; 1 Corinthians 12:4-6; 2 Corinthians 13:14).
                    The Holy Spirit regenerates the Christian at conversion (Titus 3:5-7; John 3:3-8),
                    places the Christian into the body of Christ at conversion (1 Corinthians 12:13),
                    indwells the Christian at conversion (1 Corinthians 6:19),
                    and is guarantee of the Christian’s redemption (Ephesians 1:13-14),
                    and leads the Christian on a daily basis as he or she submits to His leadership (Galatians 5:16-25; Ephesians 5:18; Romans 8:14).
                    The Holy Spirit is the Christian’s source of giftedness in ministering to the local church (1 Corinthians 12:7-11).`,
        },
        people: {
          title: "People",
          content: `The human race began by the direct and instantaneous creation of God (Gen.1:26-27).
                    Men and women are created in God’s image (Gen.1:26-27) and exist to glorify God (Is.43:7).
                    People forfeited their intended fellowship with God (Is.59:2),
                    incurred the penalty of spiritual and physical death (Gen.2:16-17; Rom.5:12),
                    became subject to the wrath of God (Jn.3:36),
                    and lost the ability to be independently acceptable to God (Rom.5:6-10)
                    through Adam’s one act of disobedience (Rom.5:12).
                    People exist relationally separated from God and express that sinfulness in a variety of sinful acts (Is.59:2; Rom.3:10-18).`,
        },
        salvation: {
          title: "Salvation",
          content: `Salvation of individuals is wholly carried out by God’s grace, based on the redemptive work of Jesus on the cross and is in no way contributed to or accomplished by the merit or work of the individual (Eph.1:7; 2:8-10; 1 Pt.1:18-19).
                    Those who repent and put their trust in Jesus as their provision for their sinful condition (Mk.1:15; Lk.24:46-47; Ac.3:19; 11:18; 20:21) are declared righteous by God (Rom.3:21-22; 8:33).
                    From a human perspective one is saved after
                      hearing the message of the gospel (Rom.10:14),
                      being convicted by the Holy Spirit of sin (Jn.16:8-9),
                      mentally turning from sin to God (2 Cor.7:9-11),
                      placing one’s trust in Jesus as the complete and sole payment for sin (Jn.3:14-15).
                    At this point God’s Spirit indwells the individual (Rom.8:9), resulting in new birth (Jn.3:3) which is often referred to as conversion (Mt.18:3; Ac.15:3; Rom.16:5).
                    Each step in the process of salvation is granted by God including repentance and faith (Ac.11:18; Eph.2:8).
                    The converted individual then naturally bears fruit in keeping with the internal transformation that has taken place (2 Cor.5:17; Mt.3:8; 7:17-23; Jn.3:36).`,
        },
        church: {
          title: "The Church",
          content: `The universal church is composed of all Christians from Acts 2 to the rapture and is considered the complete body of Christ (Eph.5:22-33; Mt.16:18; Jn.1:12-13).
                    Christians gathered in geographical locations around the world with
                      a biblical purpose (Ac.2:42-47; Phil.3:3; Heb.10:24-25; Ac.1:8),
                      biblical leadership (Tit.1:5; 1 Tim.3; 1Pt.5:1-3),
                      and practicing the biblical ordinances (Mt.28:19; 1Cor.11:23-26)
                    is what the Bible most often refers to as the church—i.e. local churches (1Cor.1:2; Gal.1:2; 1Th.1:1).`,
        },
        last: {
          title: "The Last Things",
          content: `All people will be physically resurrected (Ac.24:14-15; 1 Cor.15:22-23),
                      the saved to blessing and reward (2 Cor.4:14),
                      the unsaved to retribution and punishment (Rev.20:13-15; Dan.12:2).
                    God has appointed Jesus to judge the world (Jn.5:22), both Christians, concerning rewards (1 Cor.3:11-15), and non-Christians, concerning punishment (Rev.20:6, 11-15; Mt.8:12; 25:41; Rev.14:10-11; 21:8).
                    Christ will return for his church (Ac.1:11; 1Th.4:16-17).
                    There will be a terrible time of Tribulation (Rev.chaps.4-19).
                    Christ will establish his kingdom (Rev.20:1-9).
                    God will ultimately provide a new heaven and a new earth where the redeemed of God will dwell forever (Rev.21:1-22:5).`,
        },
      },
    },
    ministries: {
      byAlias: {
        men: {
          sermons: {
            recent: {
              0: {
                alias: 'mens-retreat-2016-session-4',
                backgroundImage: 'https://i.vimeocdn.com/video/554589747_640.jpg',
                title: 'Men’s Retreat 2016 - Session 4',
                date: 'Sunday, January 31, 2016',
                teacher: ref('people.byAlias.bobby'),
              },
              1: {
                alias: 'mens-retreat-2016-session-3',
                backgroundImage: 'https://i.vimeocdn.com/video/554582150_640.jpg',
                title: 'Men’s Retreat 2016 - Session 3',
                date: 'Saturday, January 30, 2016',
                teacher: ref('people.byAlias.bobby'),
              },
              2: {
                alias: 'mens-retreat-2016-session-2',
                backgroundImage: 'https://i.vimeocdn.com/video/554425400_1280.jpg',
                title: 'Men’s Retreat 2016 - Session 2',
                date: 'Saturday, January 30, 2016',
                teacher: ref('people.byAlias.bobby'),
              },
              3: {
                alias: 'mens-retreat-2016-session-1',
                backgroundImage: 'https://i.vimeocdn.com/video/554418903_1280.jpg',
                title: 'Men’s Retreat 2016 - Session 1',
                date: 'Friday, January 29, 2016',
                teacher: ref('people.byAlias.bobby'),
              },
              length: 4,
            },
          },
        },
      },
    },
    people: {
      byAlias: {
        bobby: {
          name: 'Bobby Blakey',
        },
      },
    },
    sermons: {
      recent: {
        0: {
          alias: 'psalm-of-the-day',
          coverImage: 'https://i.vimeocdn.com/video/563621117_1280.jpg',
          date: 'Sunday, April 3, 2016',
          teacher: ref('people.byAlias.bobby'),
          text: 'Psalm 1',
          title: 'Psalm of the Day',
        },
          1: {
          alias: 'the-new-you',
          coverImage: 'https://i.vimeocdn.com/video/563309239_640.jpg',
          date: 'Thursday, March 31, 2016',
          teacher: ref('people.byAlias.bobby'),
          text: 'Colossians 3:12-17',
          title: 'The New You',
        },
        2: {
          alias: 'die-to-live',
          coverImage: 'https://i.vimeocdn.com/video/563121070_1280.jpg',
          date: 'Wednesday, March 30, 2016',
          teacher: ref('people.byAlias.bobby'),
          text: 'Colossians 3:5-11',
          title: 'Die to Live',
        },
        3: {
          alias: 'rise-above-this-world',
          coverImage: 'https://i.vimeocdn.com/video/562924917_1280.jpg',
          date: 'Tuesday, March 29, 2016',
          teacher: ref('people.byAlias.bobby'),
          text: 'Colossians 3:1-4',
          title: 'Rise Above This World',
        },
        length: 4,
      },
    },
    series: {
      recent: {
        0: {
          alias: 'parables',
          coverImage: 'https://compasshb.s3.amazonaws.com/images/parables.jpeg',
          description: 'Psalm 1',
          title: 'Parables',
        },
        1: {
          alias: 'the-protestant-reformation-33-years-that-shook-the-world',
          coverImage: 'https://compasshb.smugmug.com/photos/i-k9Sq2D3/0/S/i-k9Sq2D3-S.png',
          description: 'Colossians 3:12-17',
          title: 'The Protestant Reformation: 33 Years That Shook the World',
        },
        2: {
          alias: 'salvation-assurance',
          coverImage: 'https://compasshb.smugmug.com/photos/i-kH3t7DN/0/M/i-kH3t7DN-M.jpg',
          description: 'Colossians 3:5-11',
          title: 'Salvation Assurance',
        },
        3: {
          alias: 'building-your-bible-dictionary',
          coverImage: 'https://compasshb.s3.amazonaws.com/images/buildingbibledictionaryseries.jpg',
          description: 'Colossians 3:1-4',
          title: 'Building Your Bible Dictionary',
        },
        length: 4,
      },
    },
  },

  source: router,
});