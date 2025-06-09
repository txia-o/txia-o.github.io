var $hPUfP$reactjsxruntime = require("react/jsx-runtime");
var $hPUfP$react = require("react");
var $hPUfP$reactdomclient = require("react-dom/client");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}





// Tailwind CSS is assumed to be available
// You can include it in your HTML like this: <script src="https://cdn.tailwindcss.com"></script>
function $4e377c42f539ba61$var$App() {
    const [selectedDay, setSelectedDay] = (0, $hPUfP$react.useState)(null);
    const [selectedLocation, setSelectedLocation] = (0, $hPUfP$react.useState)(null);
    // 旅行日程数据 (Itinerary Data)
    const itineraryData = [
        {
            id: 'day1',
            date: "8\u670829\u65E5 (\u5468\u4E94)",
            title: "\u542F\u7A0B\u524D\u5F80\u58A8\u5C14\u672C",
            activities: [
                {
                    id: 'act1-1',
                    time: "\u5168\u5929",
                    name: "\u4ECE\u65B0\u52A0\u5761\u51FA\u53D1\uFF0C\u642D\u4E58\u56FD\u9645\u822A\u73ED\u524D\u5F80\u58A8\u5C14\u672C",
                    type: 'travel'
                },
                {
                    id: 'act1-2',
                    time: "\u665A\u4E0A",
                    name: "\u62B5\u8FBE\u58A8\u5C14\u672C\uFF0C\u529E\u7406\u79DF\u8F66\u53CA\u9152\u5E97\u5165\u4F4F",
                    type: 'logistics'
                },
                {
                    id: 'act1-3',
                    time: '20:00 - 22:00',
                    name: "\u665A\u9910\u4E0E\u4F11\u606F",
                    type: 'meal'
                }
            ]
        },
        {
            id: 'day2',
            date: "8\u670830\u65E5 (\u5468\u516D)",
            title: "\u58A8\u5C14\u672C\u8F7B\u677E\u6E38\u4E0E\u670B\u53CB\u805A\u9910",
            activities: [
                {
                    id: 'act2-1',
                    time: '09:00 - 10:00',
                    name: "\u9152\u5E97\u65E9\u9910",
                    type: 'meal'
                },
                {
                    id: 'act2-2',
                    time: '10:00 - 12:00',
                    name: "\u58A8\u5C14\u672C\u5E02\u533A\u81EA\u9A7E\u9002\u5E94\uFF0C\u8D2D\u4E70\u96F6\u98DF",
                    type: 'leisure'
                },
                {
                    id: 'act2-3',
                    time: '12:00 - 14:00',
                    name: "\u4E0E\u5728\u58A8\u5C14\u672C\u7684\u670B\u53CB\u5171\u8FDB\u5348\u9910",
                    type: 'social'
                },
                {
                    id: 'act2-4',
                    time: '14:00 - 17:00',
                    name: "\u53C2\u89C2\u8054\u90A6\u5E7F\u573A (Federation Square)",
                    type: 'sightseeing',
                    locationIds: [
                        'federation-square'
                    ]
                },
                {
                    id: 'act2-5',
                    time: '17:00 - 18:00',
                    name: "\u8FD4\u56DE\u9152\u5E97\u4F11\u606F",
                    type: 'leisure'
                },
                {
                    id: 'act2-6',
                    time: '18:00 - 20:00',
                    name: "\u58A8\u5C14\u672C\u5E02\u533A\u665A\u9910",
                    type: 'meal'
                },
                {
                    id: 'act2-7',
                    time: "20:00\u4EE5\u540E",
                    name: "\u81EA\u7531\u6D3B\u52A8\uFF0C\u4F11\u606F",
                    type: 'leisure'
                }
            ]
        },
        {
            id: 'day3',
            date: "8\u670831\u65E5 (\u5468\u65E5)",
            title: "\u5A5A\u793C\u65E5",
            activities: [
                {
                    id: 'act3-1',
                    time: "\u5168\u5929",
                    name: "\u53C2\u52A0\u670B\u53CB\u7684\u5A5A\u793C",
                    type: 'event'
                }
            ]
        },
        {
            id: 'day4',
            date: "9\u67081\u65E5 (\u5468\u4E00)",
            title: "\u58A8\u5C14\u672C\u81EA\u7136\u98CE\u5149\u4F53\u9A8C",
            activities: [
                {
                    id: 'act4-1',
                    time: '09:00 - 10:00',
                    name: "\u9152\u5E97\u65E9\u9910",
                    type: 'meal'
                },
                {
                    id: 'act4-2',
                    time: '10:00 - 13:00',
                    name: "\u53C2\u89C2\u58A8\u5C14\u672C\u7687\u5BB6\u690D\u7269\u56ED (Royal Botanic Gardens)",
                    type: 'sightseeing',
                    locationIds: [
                        'royal-botanic-gardens'
                    ]
                },
                {
                    id: 'act4-3',
                    time: '13:00 - 14:00',
                    name: "\u5348\u9910",
                    type: 'meal'
                },
                {
                    id: 'act4-4',
                    time: '14:00 - 18:00',
                    name: "\u5468\u8FB9\u81EA\u9A7E\u77ED\u9014",
                    type: 'sightseeing',
                    locationIds: [
                        'phillip-island',
                        'brighton-bathing-boxes',
                        'queen-victoria-market'
                    ]
                },
                {
                    id: 'act4-5',
                    time: '18:00 - 20:00',
                    name: "\u665A\u9910",
                    type: 'meal'
                },
                {
                    id: 'act4-6',
                    time: "20:00\u4EE5\u540E",
                    name: "\u6574\u7406\u884C\u674E\uFF0C\u51C6\u5907\u524D\u5F80\u6089\u5C3C",
                    type: 'logistics'
                }
            ]
        },
        {
            id: 'day5',
            date: "9\u67082\u65E5 (\u5468\u4E8C)",
            title: "\u98DE\u5F80\u6089\u5C3C\uFF0C\u5E02\u533A\u5730\u6807\u6E38",
            activities: [
                {
                    id: 'act5-1',
                    time: '08:00 - 09:00',
                    name: "\u9152\u5E97\u65E9\u9910\uFF0C\u529E\u7406\u9000\u623F",
                    type: 'meal'
                },
                {
                    id: 'act5-2',
                    time: '09:00 - 10:00',
                    name: "\u9A7E\u8F66\u524D\u5F80\u58A8\u5C14\u672C\u673A\u573A\uFF0C\u529E\u7406\u8FD8\u8F66\u624B\u7EED",
                    type: 'logistics'
                },
                {
                    id: 'act5-3',
                    time: '10:00 - 12:00',
                    name: "\u642D\u4E58\u56FD\u5185\u822A\u73ED\u98DE\u5F80\u6089\u5C3C",
                    type: 'travel'
                },
                {
                    id: 'act5-4',
                    time: '12:00 - 13:00',
                    name: "\u62B5\u8FBE\u6089\u5C3C\u673A\u573A\uFF0C\u529E\u7406\u79DF\u8F66\u53CA\u9152\u5E97\u5165\u4F4F",
                    type: 'logistics'
                },
                {
                    id: 'act5-5',
                    time: '13:00 - 14:00',
                    name: "\u5348\u9910",
                    type: 'meal'
                },
                {
                    id: 'act5-6',
                    time: '14:00 - 16:30',
                    name: "\u6E38\u89C8\u6089\u5C3C\u6B4C\u5267\u9662 (Sydney Opera House)",
                    type: 'sightseeing',
                    locationIds: [
                        'sydney-opera-house'
                    ]
                },
                {
                    id: 'act5-7',
                    time: '16:30 - 18:00',
                    name: "\u6B65\u884C\u81F3\u6089\u5C3C\u6D77\u6E2F\u5927\u6865 (Sydney Harbour Bridge)",
                    type: 'sightseeing',
                    locationIds: [
                        'sydney-harbour-bridge'
                    ]
                },
                {
                    id: 'act5-8',
                    time: '18:00 - 20:00',
                    name: "\u8FBE\u4EE4\u6E2F (Darling Harbour) \u665A\u9910",
                    type: 'meal'
                },
                {
                    id: 'act5-9',
                    time: "20:00\u4EE5\u540E",
                    name: "\u6B23\u8D4F\u591C\u666F\uFF0C\u611F\u53D7\u6089\u5C3C\u591C\u751F\u6D3B",
                    type: 'leisure'
                }
            ]
        },
        {
            id: 'day6',
            date: "9\u67083\u65E5 (\u5468\u4E09)",
            title: "\u6089\u5C3C\u81EA\u7136\u4E0E\u6D77\u6EE9",
            activities: [
                {
                    id: 'act6-1',
                    time: '09:00 - 10:00',
                    name: "\u9152\u5E97\u65E9\u9910",
                    type: 'meal'
                },
                {
                    id: 'act6-2',
                    time: '10:00 - 13:00',
                    name: "\u9A7E\u8F66\u524D\u5F80\u90A6\u8FEA\u6D77\u6EE9 (Bondi Beach)",
                    type: 'sightseeing',
                    locationIds: [
                        'bondi-beach'
                    ]
                },
                {
                    id: 'act6-3',
                    time: '13:00 - 14:00',
                    name: "\u5348\u9910",
                    type: 'meal'
                },
                {
                    id: 'act6-4',
                    time: '14:00 - 18:00',
                    name: "\u52A8\u7269\u56ED\u6216\u5E02\u533A\u63A2\u7D22",
                    type: 'sightseeing',
                    locationIds: [
                        'taronga-zoo',
                        'the-rocks-circular-quay'
                    ]
                },
                {
                    id: 'act6-5',
                    time: '18:00 - 20:00',
                    name: "\u665A\u9910",
                    type: 'meal'
                },
                {
                    id: 'act6-6',
                    time: "20:00\u4EE5\u540E",
                    name: "\u81EA\u7531\u6D3B\u52A8",
                    type: 'leisure'
                }
            ]
        },
        {
            id: 'day7',
            date: "9\u67084\u65E5 (\u5468\u56DB)",
            title: "\u84DD\u5C71\u56FD\u5BB6\u516C\u56ED\u4E00\u65E5\u6E38",
            activities: [
                {
                    id: 'act7-1',
                    time: '08:00 - 09:00',
                    name: "\u9152\u5E97\u65E9\u9910\uFF0C\u51C6\u5907\u5348\u9910\u548C\u96F6\u98DF",
                    type: 'meal'
                },
                {
                    id: 'act7-2',
                    time: '09:00 - 11:00',
                    name: "\u9A7E\u8F66\u524D\u5F80\u84DD\u5C71\u56FD\u5BB6\u516C\u56ED (Blue Mountains National Park)",
                    type: 'travel',
                    locationIds: [
                        'blue-mountains'
                    ]
                },
                {
                    id: 'act7-3',
                    time: '11:00 - 13:00',
                    name: "\u56DE\u97F3\u89D2\u89C2\u666F\u70B9\u6B23\u8D4F\u4E09\u59D0\u59B9\u5CF0",
                    type: 'sightseeing',
                    locationIds: [
                        'blue-mountains'
                    ]
                },
                {
                    id: 'act7-4',
                    time: '13:00 - 14:00',
                    name: "\u84DD\u5C71\u5C0F\u9547\u5348\u9910",
                    type: 'meal'
                },
                {
                    id: 'act7-5',
                    time: '14:00 - 17:00',
                    name: "\u4F53\u9A8C\u666F\u89C2\u4E16\u754C (Scenic World) \u7F06\u8F66\u548C\u7D22\u9053",
                    type: 'sightseeing',
                    locationIds: [
                        'blue-mountains'
                    ]
                },
                {
                    id: 'act7-6',
                    time: '17:00 - 19:00',
                    name: "\u8FD4\u56DE\u6089\u5C3C\u5E02\u533A",
                    type: 'travel'
                },
                {
                    id: 'act7-7',
                    time: '19:00 - 20:00',
                    name: "\u665A\u9910",
                    type: 'meal'
                },
                {
                    id: 'act7-8',
                    time: "20:00\u4EE5\u540E",
                    name: "\u81EA\u7531\u6D3B\u52A8\uFF0C\u6574\u7406\u884C\u674E",
                    type: 'leisure'
                }
            ]
        },
        {
            id: 'day8',
            date: "9\u67085\u65E5 (\u5468\u4E94)",
            title: "\u6089\u5C3C\u81EA\u7531\u6D3B\u52A8\u4E0E\u8FD4\u56DE\u58A8\u5C14\u672C",
            activities: [
                {
                    id: 'act8-1',
                    time: '09:00 - 12:00',
                    name: "\u6089\u5C3C\u81EA\u7531\u8D2D\u7269\u6216\u8865\u9057",
                    type: 'leisure'
                },
                {
                    id: 'act8-2',
                    time: '12:00 - 13:00',
                    name: "\u5348\u9910",
                    type: 'meal'
                },
                {
                    id: 'act8-3',
                    time: '13:00 - 14:00',
                    name: "\u529E\u7406\u9152\u5E97\u9000\u623F",
                    type: 'logistics'
                },
                {
                    id: 'act8-4',
                    time: '14:00 - 15:00',
                    name: "\u9A7E\u8F66\u524D\u5F80\u6089\u5C3C\u673A\u573A\uFF0C\u529E\u7406\u8FD8\u8F66\u624B\u7EED",
                    type: 'logistics'
                },
                {
                    id: 'act8-5',
                    time: '15:00 - 17:00',
                    name: "\u642D\u4E58\u56FD\u5185\u822A\u73ED\u4ECE\u6089\u5C3C\u98DE\u5F80\u58A8\u5C14\u672C",
                    type: 'travel'
                },
                {
                    id: 'act8-6',
                    time: '17:00 - 18:00',
                    name: "\u62B5\u8FBE\u58A8\u5C14\u672C\u673A\u573A\uFF0C\u524D\u5F80\u9152\u5E97\u529E\u7406\u5165\u4F4F",
                    type: 'logistics'
                },
                {
                    id: 'act8-7',
                    time: '18:00 - 20:00',
                    name: "\u58A8\u5C14\u672C\u544A\u522B\u665A\u9910",
                    type: 'meal'
                },
                {
                    id: 'act8-8',
                    time: "20:00\u4EE5\u540E",
                    name: "\u6574\u7406\u884C\u674E\uFF0C\u51C6\u5907\u56DE\u56FD",
                    type: 'logistics'
                }
            ]
        },
        {
            id: 'day9',
            date: "9\u67086\u65E5 (\u5468\u516D)",
            title: "\u542F\u7A0B\u56DE\u56FD",
            activities: [
                {
                    id: 'act9-1',
                    time: "\u4E0A\u5348",
                    name: "\u6839\u636E\u822A\u73ED\u65F6\u95F4\uFF0C\u524D\u5F80\u58A8\u5C14\u672C\u673A\u573A\uFF0C\u529E\u7406\u767B\u673A\u624B\u7EED\uFF0C\u542F\u7A0B\u56DE\u56FD\u3002",
                    type: 'travel'
                }
            ]
        }
    ];
    // 地点详细信息 (Location Details)
    const locationDetailsData = {
        'federation-square': {
            id: 'federation-square',
            name: "\u8054\u90A6\u5E7F\u573A (Federation Square)",
            introduction: "\u8054\u90A6\u5E7F\u573A\u662F\u58A8\u5C14\u672C\u5E02\u4E2D\u5FC3\u7684\u6587\u5316\u548C\u827A\u672F\u67A2\u7EBD\uFF0C\u4EE5\u5176\u72EC\u7279\u7684\u73B0\u4EE3\u5EFA\u7B51\u548C\u591A\u6837\u7684\u6D3B\u52A8\u800C\u95FB\u540D\uFF0C\u662F\u611F\u53D7\u58A8\u5C14\u672C\u57CE\u5E02\u6D3B\u529B\u7684\u7EDD\u4F73\u573A\u6240\u3002",
            specialFeatures: [
                "\u53C2\u89C2\u6FB3\u5927\u5229\u4E9A\u6D3B\u52A8\u5F71\u50CF\u4E2D\u5FC3 (ACMI) \u6216\u7EF4\u591A\u5229\u4E9A\u56FD\u5BB6\u7F8E\u672F\u9986 (NGV Australia)\u3002",
                "\u5728\u5927\u5C4F\u5E55\u4E0A\u89C2\u770B\u6D3B\u52A8\u76F4\u64AD\u6216\u4F53\u80B2\u8D5B\u4E8B\u3002",
                "\u5728\u5E7F\u573A\u4E0A\u653E\u677E\uFF0C\u611F\u53D7\u5F53\u5730\u7684\u8857\u5934\u8868\u6F14\u6216\u8282\u5E86\u6D3B\u52A8\u3002"
            ],
            travelAdvice: [
                "\u4F4D\u4E8E\u58A8\u5C14\u672C\u5E02\u4E2D\u5FC3\u5F17\u6797\u5FB7\u65AF\u8857\u8F66\u7AD9\u5BF9\u9762\uFF0C\u4EA4\u901A\u4FBF\u5229\uFF0C\u6B65\u884C\u53EF\u8FBE\u3002",
                "\u5EFA\u8BAE\u6E38\u73A9\u65F6\u95F4\uFF1A1-3\u5C0F\u65F6\uFF0C\u5982\u679C\u53C2\u89C2\u535A\u7269\u9986\u5219\u9700\u66F4\u4E45\u3002"
            ],
            notes: [
                "\u8BB8\u591A\u6D3B\u52A8\u514D\u8D39\uFF0C\u662F\u4E2A\u611F\u53D7\u58A8\u5C14\u672C\u57CE\u5E02\u6D3B\u529B\u7684\u597D\u5730\u65B9\u3002",
                "\u5E7F\u573A\u5468\u8FB9\u6709\u5404\u79CD\u9910\u5385\u548C\u5496\u5561\u9986\u3002"
            ]
        },
        'royal-botanic-gardens': {
            id: 'royal-botanic-gardens',
            name: "\u58A8\u5C14\u672C\u7687\u5BB6\u690D\u7269\u56ED (Royal Botanic Gardens)",
            introduction: "\u58A8\u5C14\u672C\u7687\u5BB6\u690D\u7269\u56ED\u662F\u4E16\u754C\u7EA7\u7684\u690D\u7269\u56ED\uFF0C\u62E5\u6709\u4E30\u5BCC\u7684\u690D\u7269\u79CD\u7C7B\u548C\u4F18\u7F8E\u7684\u56ED\u6797\u666F\u89C2\uFF0C\u662F\u5E02\u6C11\u4F11\u95F2\u653E\u677E\u7684\u597D\u53BB\u5904\u3002",
            specialFeatures: [
                "\u6F2B\u6B65\u56ED\u5185\uFF0C\u63A2\u7D22\u4E0D\u540C\u4E3B\u9898\u7684\u533A\u57DF\uFF0C\u5982\u73AB\u7470\u56ED\u3001\u70ED\u5E26\u690D\u7269\u9986\u7B49\u3002",
                "\u5728\u5E7F\u9614\u7684\u8349\u576A\u4E0A\u91CE\u9910\u6216\u5C0F\u61A9\uFF0C\u4EAB\u53D7\u5B81\u9759\u7684\u81EA\u7136\u73AF\u5883\u3002",
                "\u53C2\u52A0\u514D\u8D39\u7684\u5BFC\u89C8\u6B65\u884C\uFF0C\u4E86\u89E3\u690D\u7269\u56ED\u7684\u5386\u53F2\u548C\u7279\u8272\u690D\u7269\u3002"
            ],
            travelAdvice: [
                "\u4F4D\u4E8E\u58A8\u5C14\u672C\u5E02\u4E2D\u5FC3\u9644\u8FD1\uFF0C\u53EF\u6B65\u884C\u6216\u4E58\u5750\u6709\u8F68\u7535\u8F66\u5230\u8FBE\u3002",
                "\u5EFA\u8BAE\u6E38\u73A9\u65F6\u95F4\uFF1A2-3\u5C0F\u65F6\uFF0C\u5982\u679C\u6DF1\u5EA6\u6E38\u89C8\u6216\u91CE\u9910\u5219\u9700\u66F4\u4E45\u3002"
            ],
            notes: [
                "\u514D\u8D39\u5165\u573A\u3002",
                "\u690D\u7269\u56ED\u9762\u79EF\u8F83\u5927\uFF0C\u5EFA\u8BAE\u7A7F\u7740\u8212\u9002\u7684\u978B\u5B50\u3002",
                "\u56ED\u5185\u6709\u5496\u5561\u9986\u548C\u793C\u54C1\u5E97\u3002"
            ]
        },
        'phillip-island': {
            id: 'phillip-island',
            name: "\u83F2\u5229\u666E\u5C9B (Phillip Island) - \u4F01\u9E45\u5F52\u5DE2",
            introduction: "\u83F2\u5229\u666E\u5C9B\u4F4D\u4E8E\u58A8\u5C14\u672C\u4E1C\u5357\u65B9\uFF0C\u4EE5\u5176\u72EC\u7279\u7684\u91CE\u751F\u52A8\u7269\u548C\u81EA\u7136\u98CE\u5149\u800C\u95FB\u540D\uFF0C\u5C24\u5176\u662F\u6BCF\u665A\u5C0F\u4F01\u9E45\u4ECE\u6D77\u91CC\u6447\u6447\u6446\u6446\u5F52\u5DE2\u7684\u5947\u89C2\u3002",
            specialFeatures: [
                "**\u4F01\u9E45\u5F52\u5DE2 (Penguin Parade):** \u89C2\u770B\u6210\u5343\u4E0A\u4E07\u53EA\u5C0F\u4F01\u9E45\u4ECE\u6D77\u91CC\u56DE\u5230\u5DE2\u7A74\u7684\u58EE\u89C2\u666F\u8C61\u3002",
                "**\u8003\u62C9\u4FDD\u80B2\u4E2D\u5FC3 (Koala Conservation Centre):** \u8FD1\u8DDD\u79BB\u89C2\u5BDF\u91CE\u751F\u7684\u8003\u62C9\u3002",
                "**\u4E18\u5409\u5C14\u5C9B\u4F20\u7EDF\u519C\u573A (Churchill Island Heritage Farm):** \u4F53\u9A8C\u6FB3\u6D32\u4F20\u7EDF\u519C\u573A\u751F\u6D3B\uFF0C\u89C2\u770B\u526A\u7F8A\u6BDB\u8868\u6F14\u3002"
            ],
            travelAdvice: [
                "\u8DDD\u79BB\u58A8\u5C14\u672C\u5E02\u4E2D\u5FC3\u7EA6 2 \u5C0F\u65F6\u8F66\u7A0B\uFF0C\u5EFA\u8BAE\u81EA\u9A7E\u6216\u53C2\u52A0\u4E00\u65E5\u6E38\u3002",
                "\u4F01\u9E45\u5F52\u5DE2\u5728\u65E5\u843D\u65F6\u5206\u8FDB\u884C\uFF0C\u5177\u4F53\u65F6\u95F4\u968F\u5B63\u8282\u53D8\u5316\uFF0C\u8BF7\u63D0\u524D\u67E5\u8BE2\u3002",
                "\u5F80\u8FD4\u884C\u7A0B\u901A\u5E38\u9700\u8981 6-8 \u5C0F\u65F6\uFF08\u5305\u62EC\u4EA4\u901A\u548C\u6E38\u89C8\u65F6\u95F4\uFF09\u3002"
            ],
            notes: [
                "**\u8D2D\u7968\u5EFA\u8BAE\uFF1A** \u4F01\u9E45\u5F52\u5DE2\u89C2\u8D4F\u533A\u6709\u591A\u79CD\u7968\u52A1\u9009\u9879\uFF0C\u5305\u62EC\uFF1A",
                "  * **\u666E\u901A\u7968 (General Viewing):** \u6700\u57FA\u672C\u7684\u89C2\u8D4F\u533A\uFF0C\u4EF7\u683C\u5B9E\u60E0\u3002",
                "  * **\u5347\u7EA7\u770B\u53F0\u7968 (Penguins Plus):** \u66F4\u597D\u7684\u89C2\u8D4F\u4F4D\u7F6E\uFF0C\u901A\u5E38\u5728\u4E3B\u770B\u53F0\u7684\u524D\u6392\uFF0C\u89C6\u91CE\u66F4\u4F73\u3002",
                "  * **\u5730\u4E0B\u89C2\u666F\u53F0\u7968 (Underground Viewing):** \u53EF\u4EE5\u5728\u5730\u4E0B\u73BB\u7483\u5E55\u5899\u540E\u8FD1\u8DDD\u79BB\u89C2\u770B\u4F01\u9E45\u4ECE\u60A8\u811A\u4E0B\u7ECF\u8FC7\uFF0C\u4E0D\u53D7\u5929\u6C14\u5F71\u54CD\u3002",
                "  * **VIP \u5BFC\u6E38\u56E2 (Ultimate Penguin Tour):** \u5C0F\u56E2\u4F53\u9A8C\uFF0C\u6709\u4E13\u4E1A\u5BFC\u6E38\u8BB2\u89E3\uFF0C\u63D0\u4F9B\u6BEF\u5B50\u548C\u70ED\u996E\uFF0C\u5E76\u6709\u673A\u4F1A\u5728\u975E\u516C\u5171\u533A\u57DF\u89C2\u8D4F\u3002",
                "\u5EFA\u8BAE\u63D0\u524D\u5728\u83F2\u5229\u666E\u5C9B\u5B98\u7F51\u9884\u8BA2\u95E8\u7968\uFF0C\u5C24\u5176\u662F\u5728\u65FA\u5B63\uFF08\u8282\u5047\u65E5\u6216\u5B66\u6821\u5047\u671F\uFF09\u3002",
                "**\u91CD\u8981\u63D0\u793A\uFF1A** \u4F01\u9E45\u5F52\u5DE2\u65F6\u4E25\u7981\u62CD\u7167\u548C\u4F7F\u7528\u95EA\u5149\u706F\uFF0C\u56E0\u4E3A\u8FD9\u4F1A\u4F24\u5BB3\u4F01\u9E45\u7684\u773C\u775B\u3002\u8BF7\u9075\u5B88\u89C4\u5B9A\u3002",
                "\u83F2\u5229\u666E\u5C9B\u591C\u665A\u6D77\u98CE\u8F83\u5927\uFF0C\u6C14\u6E29\u8F83\u4F4E\uFF0C\u5373\u4F7F\u662F\u590F\u5929\u4E5F\u5EFA\u8BAE\u643A\u5E26\u4FDD\u6696\u8863\u7269\u3002"
            ]
        },
        'brighton-bathing-boxes': {
            id: 'brighton-bathing-boxes',
            name: "\u5E03\u83B1\u987F\u5F69\u8679\u5C0F\u5C4B (Brighton Bathing Boxes)",
            introduction: "\u5E03\u83B1\u987F\u5F69\u8679\u5C0F\u5C4B\u662F\u58A8\u5C14\u672C\u8457\u540D\u7684\u5730\u6807\uFF0C\u6CBF\u6D77\u6EE9\u4E00\u5B57\u6392\u5F00\uFF0C\u6BCF\u5EA7\u5C0F\u5C4B\u90FD\u62E5\u6709\u72EC\u7279\u7684\u8272\u5F69\u548C\u8BBE\u8BA1\uFF0C\u662F\u62CD\u7167\u6253\u5361\u7684\u7EDD\u4F73\u5730\u70B9\uFF0C\u4E5F\u4F53\u73B0\u4E86\u58A8\u5C14\u672C\u72EC\u7279\u7684\u6D77\u6EE8\u6587\u5316\u3002",
            specialFeatures: [
                "\u6B23\u8D4F\u5E76\u62CD\u6444**\u8272\u5F69\u6591\u6593\u7684\u7EF4\u591A\u5229\u4E9A\u65F6\u4EE3\u98CE\u683C\u6D77\u6EE9\u5C0F\u5C4B**\u3002",
                "\u5728\u6D77\u6EE9\u4E0A\u6563\u6B65\uFF0C\u611F\u53D7\u58A8\u5C14\u672C\u7684\u6D77\u5CB8\u98CE\u60C5\u3002"
            ],
            travelAdvice: [
                "\u4F4D\u4E8E\u58A8\u5C14\u672C\u5E02\u90CA\u7684\u5E03\u83B1\u987F\u6D77\u6EE9\uFF0C\u8DDD\u79BB\u5E02\u4E2D\u5FC3\u7EA6 13 \u516C\u91CC\uFF0C\u9A7E\u8F66\u7EA6 20-30 \u5206\u949F\u3002",
                "\u4E5F\u53EF\u4E58\u5750\u706B\u8F66\uFF08Sandringham\u7EBF\uFF09\u81F3Brighton Beach\u7AD9\u3002"
            ],
            notes: [
                "\u5C0F\u5C4B\u662F\u79C1\u4EBA\u8D22\u4EA7\uFF0C\u901A\u5E38\u4E0D\u80FD\u8FDB\u5165\u5185\u90E8\u3002",
                "**\u65E9\u6668\u6216\u508D\u665A\u7684\u5149\u7EBF**\u66F4\u9002\u5408\u62CD\u7167\u3002",
                "\u514D\u8D39\u53C2\u89C2\u3002"
            ]
        },
        'queen-victoria-market': {
            id: 'queen-victoria-market',
            name: "\u7EF4\u591A\u5229\u4E9A\u5973\u738B\u5E02\u573A (Queen Victoria Market)",
            introduction: "\u7EF4\u591A\u5229\u4E9A\u5973\u738B\u5E02\u573A\u662F\u5357\u534A\u7403\u6700\u5927\u7684\u9732\u5929\u5E02\u573A\uFF0C\u4E5F\u662F\u58A8\u5C14\u672C\u7684\u5386\u53F2\u5730\u6807\u4E4B\u4E00\u3002\u8FD9\u91CC\u6C47\u805A\u4E86\u65B0\u9C9C\u7684\u519C\u4EA7\u54C1\u3001\u6D77\u9C9C\u3001\u8089\u7C7B\u3001\u719F\u98DF\uFF0C\u4EE5\u53CA\u5404\u79CD\u670D\u88C5\u3001\u7EAA\u5FF5\u54C1\u7B49\uFF0C\u662F\u4F53\u9A8C\u58A8\u5C14\u672C\u5F53\u5730\u751F\u6D3B\u548C\u54C1\u5C1D\u7F8E\u98DF\u7684\u597D\u5730\u65B9\u3002",
            specialFeatures: [
                "\u54C1\u5C1D**\u65B0\u9C9C\u7684\u5F53\u5730\u519C\u4EA7\u54C1\u548C\u7F8E\u98DF\u5C0F\u5403**\u3002",
                "\u8D2D\u4E70\u7EAA\u5FF5\u54C1\u548C\u5F53\u5730\u7279\u8272\u5546\u54C1\u3002",
                "\u611F\u53D7\u70ED\u95F9\u7684\u5E02\u573A\u6C1B\u56F4\u548C\u5386\u53F2\u5EFA\u7B51\u3002"
            ],
            travelAdvice: [
                "\u4F4D\u4E8E\u58A8\u5C14\u672C\u5E02\u4E2D\u5FC3\uFF0C\u53EF\u6B65\u884C\u3001\u4E58\u5750\u6709\u8F68\u7535\u8F66\u6216\u5DF4\u58EB\u5230\u8FBE\u3002",
                "\u5EFA\u8BAE\u6E38\u73A9\u65F6\u95F4\uFF1A2-3\u5C0F\u65F6\u3002"
            ],
            notes: [
                "\u5E02\u573A\u5E76\u975E\u6BCF\u5929\u5F00\u653E\uFF0C\u8BF7**\u63D0\u524D\u67E5\u8BE2\u5F00\u653E\u65F6\u95F4**\uFF08\u901A\u5E38\u5468\u4E00\u3001\u5468\u4E09\u5173\u95ED\uFF09\u3002",
                "\u590F\u5B63\uFF0811\u6708-3\u6708\uFF09\u5468\u4E09\u665A\u4E0A\u6709\u591C\u5E02\uFF0C\u63D0\u4F9B\u66F4\u591A\u7F8E\u98DF\u548C\u5A31\u4E50\u6D3B\u52A8\u3002",
                "\u4EBA\u6D41\u8F83\u591A\uFF0C\u6CE8\u610F\u4FDD\u7BA1\u4E2A\u4EBA\u7269\u54C1\u3002"
            ]
        },
        'sydney-opera-house': {
            id: 'sydney-opera-house',
            name: "\u6089\u5C3C\u6B4C\u5267\u9662 (Sydney Opera House)",
            introduction: "\u6089\u5C3C\u6B4C\u5267\u9662\u662F\u6FB3\u5927\u5229\u4E9A\u7684\u6807\u5FD7\u6027\u5EFA\u7B51\uFF0C\u4E16\u754C\u6587\u5316\u9057\u4EA7\uFF0C\u4EE5\u5176\u72EC\u7279\u7684\u8D1D\u58F3\u9020\u578B\u95FB\u540D\u4E8E\u4E16\uFF0C\u662F\u8868\u6F14\u827A\u672F\u7684\u6BBF\u5802\u3002",
            specialFeatures: [
                "**\u5185\u90E8\u5BFC\u89C8\uFF1A** \u53C2\u52A0\u6B4C\u5267\u9662\u5185\u90E8\u5BFC\u89C8\uFF08\u6709\u4E2D\u6587\u8BB2\u89E3\uFF09\uFF0C\u6DF1\u5165\u4E86\u89E3\u5176\u72EC\u7279\u7684\u5EFA\u7B51\u8BBE\u8BA1\u3001\u5386\u53F2\u548C\u5E55\u540E\u6545\u4E8B\u3002",
                "**\u89C2\u770B\u8868\u6F14\uFF1A** \u5982\u679C\u65F6\u95F4\u5141\u8BB8\uFF0C\u89C2\u770B\u4E00\u573A\u6B4C\u5267\u3001\u97F3\u4E50\u5267\u3001\u620F\u5267\u6216\u821E\u8E48\u8868\u6F14\uFF0C\u611F\u53D7\u4E16\u754C\u7EA7\u7684\u827A\u672F\u6C1B\u56F4\u3002",
                "**\u6D77\u6EE8\u9910\u996E\uFF1A** \u5728\u6B4C\u5267\u9662\u5916\u7684\u9910\u5385\u6216\u9152\u5427\u7528\u9910\uFF0C\u4E00\u8FB9\u4EAB\u53D7\u7F8E\u98DF\uFF0C\u4E00\u8FB9\u6B23\u8D4F\u6089\u5C3C\u6E2F\u548C\u6D77\u6E2F\u5927\u6865\u7684\u58EE\u4E3D\u666F\u8272\u3002",
                "**\u62CD\u7167\u6253\u5361\uFF1A** \u4ECE\u4E0D\u540C\u89D2\u5EA6\u62CD\u6444\u6B4C\u5267\u9662\uFF0C\u5C24\u5176\u662F\u5728\u65E5\u51FA\u3001\u65E5\u843D\u6216\u591C\u665A\u706F\u5149\u4EAE\u8D77\u65F6\u3002"
            ],
            travelAdvice: [
                "\u4F4D\u4E8E\u6089\u5C3C\u5E02\u4E2D\u5FC3\u73AF\u5F62\u7801\u5934\uFF0C\u4EA4\u901A\u4FBF\u5229\uFF0C\u53EF\u6B65\u884C\u6216\u642D\u4E58\u516C\u5171\u4EA4\u901A\u3002",
                "\u5EFA\u8BAE\u53C2\u89C2\u65F6\u95F4\uFF1A\u5185\u90E8\u5BFC\u89C8\u7EA6 1 \u5C0F\u65F6\uFF0C\u89C2\u770B\u8868\u6F14\u5219\u9700\u6839\u636E\u6F14\u51FA\u65F6\u957F\u3002"
            ],
            notes: [
                "\u5BFC\u89C8\u548C\u6F14\u51FA\u95E8\u7968\u5EFA\u8BAE**\u63D0\u524D\u901A\u8FC7\u6089\u5C3C\u6B4C\u5267\u9662\u5B98\u65B9\u7F51\u7AD9\u9884\u8BA2**\u3002",
                "\u6B4C\u5267\u9662\u533A\u57DF\u662F\u514D\u8D39\u5F00\u653E\u7684\uFF0C\u4F46\u8FDB\u5165\u8868\u6F14\u5385\u6216\u53C2\u52A0\u5BFC\u89C8\u9700\u8D2D\u7968\u3002"
            ]
        },
        'sydney-harbour-bridge': {
            id: 'sydney-harbour-bridge',
            name: "\u6089\u5C3C\u6D77\u6E2F\u5927\u6865 (Sydney Harbour Bridge)",
            introduction: "\u6089\u5C3C\u6D77\u6E2F\u5927\u6865\u662F\u4E16\u754C\u6700\u5927\u7684\u94A2\u62F1\u6865\uFF0C\u4E5F\u662F\u6089\u5C3C\u7684\u53E6\u4E00\u5730\u6807\uFF0C\u88AB\u8A89\u4E3A\u201C\u8863\u67B6\u201D\uFF0C\u8FDE\u63A5\u7740\u6089\u5C3C\u5357\u5317\u4E24\u5CB8\u3002",
            specialFeatures: [
                "**\u6B65\u884C\u8FC7\u6865\uFF1A** \u5728\u4E13\u95E8\u7684\u4EBA\u884C\u9053\u4E0A\u6B65\u884C\u8FC7\u6865\uFF0C\u53EF\u4EE5\u4ECE\u4E0D\u540C\u89D2\u5EA6\u6B23\u8D4F\u6089\u5C3C\u6E2F\u548C\u6B4C\u5267\u9662\u7684\u7F8E\u666F\uFF0C\u8FD9\u662F\u514D\u8D39\u7684\u3002",
                "**\u6500\u767B\u6D77\u6E2F\u5927\u6865 (BridgeClimb Sydney)\uFF1A** \u8FD9\u662F\u6700\u5177\u6807\u5FD7\u6027\u7684\u4F53\u9A8C\u4E4B\u4E00\u3002\u5728\u4E13\u4E1A\u5BFC\u6E38\u7684\u5E26\u9886\u4E0B\uFF0C\u6500\u767B\u5230\u5927\u6865\u7684\u9876\u7AEF\uFF0C360\u5EA6\u4FEF\u77B0\u6089\u5C3C\u5168\u666F\uFF0C\u5305\u62EC\u6B4C\u5267\u9662\u3001\u8FBE\u4EE4\u6E2F\u548C\u84DD\u5C71\u3002\u5206\u4E3A\u4E0D\u540C\u7684\u6500\u767B\u9879\u76EE\uFF08\u5982\u9ECE\u660E\u3001\u767D\u5929\u3001\u9EC4\u660F\u3001\u591C\u665A\u6500\u767B\uFF0C\u4EE5\u53CA\u4E0D\u540C\u65F6\u957F\u548C\u9AD8\u5EA6\u7684\u9009\u9879\uFF09\u3002",
                "**\u53C2\u89C2\u6865\u5854\u77AD\u671B\u53F0 (Pylon Lookout)\uFF1A** \u5982\u679C\u4E0D\u60F3\u6500\u767B\uFF0C\u53EF\u4EE5\u4ED8\u8D39\u53C2\u89C2\u4E1C\u5357\u6865\u5854\u5185\u7684\u77AD\u671B\u53F0\u548C\u535A\u7269\u9986\uFF0C\u4E86\u89E3\u5927\u6865\u7684\u5386\u53F2\u548C\u5EFA\u9020\u8FC7\u7A0B\uFF0C\u5E76\u6B23\u8D4F\u666F\u8272\u3002"
            ],
            travelAdvice: [
                "\u4F4D\u4E8E\u6089\u5C3C\u5E02\u4E2D\u5FC3\uFF0C\u4E0E\u6B4C\u5267\u9662\u9694\u6C34\u76F8\u671B\uFF0C\u53EF\u6B65\u884C\u6216\u642D\u4E58\u516C\u5171\u4EA4\u901A\u3002",
                "\u6B65\u884C\u8FC7\u6865\u7EA6\u9700 30-60 \u5206\u949F\u3002\u6500\u767B\u9879\u76EE\u901A\u5E38\u9700\u8981 2.5-3.5 \u5C0F\u65F6\uFF08\u542B\u51C6\u5907\u65F6\u95F4\uFF09\u3002\u6865\u5854\u77AD\u671B\u53F0\u7EA6\u9700 1-1.5 \u5C0F\u65F6\u3002"
            ],
            notes: [
                "**\u6500\u767B\u6D77\u6E2F\u5927\u6865 (BridgeClimb Sydney) \u8D2D\u7968\u5EFA\u8BAE\uFF1A**",
                "  * \u6500\u767B\u9879\u76EE\u975E\u5E38\u70ED\u95E8\uFF0C\u52A1\u5FC5**\u63D0\u524D\u901A\u8FC7\u5176\u5B98\u65B9\u7F51\u7AD9\u9884\u8BA2**\u3002",
                "  * \u4EF7\u683C\u8F83\u9AD8\uFF0C\u4F46\u4F53\u9A8C\u975E\u5E38\u72EC\u7279\u3002\u5EFA\u8BAE\u6839\u636E\u9884\u7B97\u548C\u5174\u8DA3\u9009\u62E9\u4E0D\u540C\u7684\u6500\u767B\u9009\u9879\u3002",
                "  * \u6500\u767B\u65F6\u7981\u6B62\u643A\u5E26\u4EFB\u4F55\u4E2A\u4EBA\u7269\u54C1\uFF08\u5305\u62EC\u624B\u673A\u548C\u76F8\u673A\uFF09\uFF0C\u4F1A\u6709\u4E13\u4E1A\u7684\u6444\u5F71\u5E08\u62CD\u7167\uFF0C\u7167\u7247\u53EF\u5728\u7ED3\u675F\u540E\u8D2D\u4E70\u3002",
                "\u6865\u5854\u77AD\u671B\u53F0\u6709\u5165\u573A\u8D39\uFF0C\u65E0\u9700\u63D0\u524D\u9884\u8BA2\u3002"
            ]
        },
        'bondi-beach': {
            id: 'bondi-beach',
            name: "\u90A6\u8FEA\u6D77\u6EE9 (Bondi Beach)",
            introduction: "\u90A6\u8FEA\u6D77\u6EE9\u662F\u6089\u5C3C\u6700\u8457\u540D\u548C\u6700\u5177\u6D3B\u529B\u7684\u6D77\u6EE9\u4E4B\u4E00\uFF0C\u4EE5\u5176\u7EC6\u817B\u7684\u6C99\u6EE9\u3001\u51B2\u6D6A\u6587\u5316\u548C\u6D77\u6EE8\u751F\u6D3B\u65B9\u5F0F\u800C\u95FB\u540D\u3002",
            specialFeatures: [
                "**\u65E5\u5149\u6D74\u548C\u6E38\u6CF3\uFF1A** \u5728\u91D1\u8272\u6C99\u6EE9\u4E0A\u653E\u677E\uFF0C\u4EAB\u53D7\u9633\u5149\u548C\u6D77\u98CE\uFF0C\u6216\u8005\u5728\u6307\u5B9A\u7684\u5B89\u5168\u533A\u57DF\u6E38\u6CF3\u3002",
                "**\u51B2\u6D6A\u4F53\u9A8C\uFF1A** \u90A6\u8FEA\u662F\u51B2\u6D6A\u7231\u597D\u8005\u7684\u5929\u5802\uFF0C\u5373\u4F7F\u662F\u521D\u5B66\u8005\u4E5F\u53EF\u4EE5\u5728\u8FD9\u91CC\u627E\u5230\u51B2\u6D6A\u5B66\u6821\u5B66\u4E60\u3002",
                "**\u90A6\u8FEA\u5230\u5E93\u5409\u6CBF\u6D77\u6B65\u9053 (Bondi to Coogee Coastal Walk):** \u6CBF\u7740\u98CE\u666F\u58EE\u4E3D\u7684\u6D77\u5CB8\u7EBF\u5F92\u6B65\uFF0C\u6B23\u8D4F\u60AC\u5D16\u3001\u6D77\u6E7E\u548C\u6D77\u8680\u6D1E\u3002",
                "**\u6D77\u6EE8\u5496\u5561\u9986\u548C\u9910\u5385\uFF1A** \u5728\u90A6\u8FEA\u6D77\u6EE9\u9644\u8FD1\u6709\u8BB8\u591A\u65F6\u5C1A\u7684\u5496\u5561\u9986\u3001\u9910\u5385\u548C\u9152\u5427\uFF0C\u53EF\u4EE5\u54C1\u5C1D\u7F8E\u98DF\u548C\u4EAB\u53D7\u6D77\u6EE8\u6C1B\u56F4\u3002"
            ],
            travelAdvice: [
                "\u8DDD\u79BB\u6089\u5C3C\u5E02\u4E2D\u5FC3\u7EA6 8 \u516C\u91CC\uFF0C\u9A7E\u8F66\u6216\u4E58\u5750\u516C\u5171\u4EA4\u901A\uFF08\u5DF4\u58EB\uFF09\u5747\u53EF\u5230\u8FBE\u3002",
                "\u5EFA\u8BAE\u6E38\u73A9\u65F6\u95F4\uFF1A2-4\u5C0F\u65F6\uFF0C\u5982\u679C\u8FDB\u884C\u5F92\u6B65\u5219\u9700\u66F4\u4E45\u3002"
            ],
            notes: [
                "\u6D77\u6EE9\u5168\u5E74\u5F00\u653E\uFF0C\u514D\u8D39\u5165\u573A\u3002",
                "**\u6CE8\u610F\u9632\u6652**\uFF0C\u5373\u4F7F\u662F\u9634\u5929\u7D2B\u5916\u7EBF\u4E5F\u5F88\u5F3A\u3002",
                "\u51B2\u6D6A\u65F6\u8BF7\u6CE8\u610F\u5B89\u5168\uFF0C\u9075\u5FAA\u6D77\u6EE9\u7684\u8B66\u793A\u6807\u5FD7\u548C\u6551\u751F\u5458\u7684\u6307\u793A\u3002"
            ]
        },
        'taronga-zoo': {
            id: 'taronga-zoo',
            name: "\u5854\u9F99\u52A0\u52A8\u7269\u56ED (Taronga Zoo)",
            introduction: "\u5854\u9F99\u52A0\u52A8\u7269\u56ED\u662F\u6089\u5C3C\u7684\u77E5\u540D\u52A8\u7269\u56ED\uFF0C\u4E0D\u4EC5\u62E5\u6709\u6765\u81EA\u4E16\u754C\u5404\u5730\u7684\u52A8\u7269\uFF0C\u8FD8\u56E0\u5176\u72EC\u7279\u7684\u5730\u7406\u4F4D\u7F6E\u800C\u80FD\u4FEF\u77B0\u6089\u5C3C\u6E2F\u7684\u58EE\u4E3D\u666F\u8272\u3002",
            specialFeatures: [
                "**\u6FB3\u6D32\u672C\u571F\u52A8\u7269\uFF1A** \u8FD1\u8DDD\u79BB\u89C2\u8D4F\u888B\u9F20\u3001\u8003\u62C9\u3001\u9E2D\u5634\u517D\u3001\u5854\u65AF\u9A6C\u5C3C\u4E9A\u6076\u9B54\u7B49\u6FB3\u6D32\u7279\u6709\u52A8\u7269\u3002",
                "**\u6D77\u6E2F\u666F\u8272\uFF1A** \u52A8\u7269\u56ED\u4F4D\u4E8E\u5C71\u5761\u4E0A\uFF0C\u8BB8\u591A\u533A\u57DF\u90FD\u53EF\u4FEF\u77B0\u6089\u5C3C\u6B4C\u5267\u9662\u548C\u6D77\u6E2F\u5927\u6865\u7684\u666F\u8272\uFF0C\u662F\u62CD\u7167\u7684\u597D\u5730\u65B9\u3002",
                "**\u52A8\u7269\u8868\u6F14\uFF1A** \u89C2\u770B\u6D77\u8C79\u8868\u6F14\u3001\u9E1F\u7C7B\u98DE\u884C\u8868\u6F14\u7B49\u3002",
                "**\u7F06\u8F66\u4F53\u9A8C\uFF1A** \u4E58\u5750 Sky Safari \u7F06\u8F66\u5728\u52A8\u7269\u56ED\u5185\u79FB\u52A8\uFF0C\u540C\u65F6\u6B23\u8D4F\u7F8E\u666F\u3002"
            ],
            travelAdvice: [
                "\u4ECE\u6089\u5C3C\u5E02\u4E2D\u5FC3\u4E58\u5750\u6E21\u8F6E\u662F\u6700\u4FBF\u6377\u548C\u98CE\u666F\u4F18\u7F8E\u7684\u4EA4\u901A\u65B9\u5F0F\uFF0C\u6E21\u8F6E\u76F4\u63A5\u62B5\u8FBE\u52A8\u7269\u56ED\u4E0B\u65B9\u7684\u7801\u5934\u3002",
                "\u5EFA\u8BAE\u6E38\u73A9\u65F6\u95F4\uFF1A\u81F3\u5C11 3-4 \u5C0F\u65F6\uFF0C\u5982\u679C\u89C2\u770B\u8868\u6F14\u6216\u6DF1\u5EA6\u6E38\u89C8\u5219\u9700\u8981\u4E00\u6574\u5929\u3002"
            ],
            notes: [
                "\u5EFA\u8BAE**\u63D0\u524D\u5728\u5B98\u7F51\u8D2D\u4E70\u95E8\u7968**\uFF0C\u53EF\u4EE5\u8282\u7701\u6392\u961F\u65F6\u95F4\u3002",
                "\u52A8\u7269\u56ED\u5185\u6709\u9910\u996E\u670D\u52A1\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5E26\u98DF\u7269\u91CE\u9910\u3002",
                "\u56ED\u5185\u5761\u5EA6\u8F83\u5927\uFF0C\u5EFA\u8BAE\u7A7F\u7740\u8212\u9002\u7684\u978B\u5B50\u3002"
            ]
        },
        'the-rocks-circular-quay': {
            id: 'the-rocks-circular-quay',
            name: "\u5CA9\u77F3\u533A\u4E0E\u73AF\u5F62\u7801\u5934 (The Rocks & Circular Quay)",
            introduction: "\u5CA9\u77F3\u533A\u662F\u6089\u5C3C\u6700\u53E4\u8001\u7684\u8857\u533A\uFF0C\u4FDD\u7559\u7740\u6B96\u6C11\u65F6\u671F\u7684\u5386\u53F2\u5EFA\u7B51\u548C\u9E45\u5375\u77F3\u8857\u9053\uFF0C\u5145\u6EE1\u4E86\u827A\u672F\u6C1B\u56F4\u548C\u72EC\u7279\u7684\u9B45\u529B\u3002\u73AF\u5F62\u7801\u5934\u662F\u6089\u5C3C\u4E3B\u8981\u7684\u4EA4\u901A\u67A2\u7EBD\u548C\u6D77\u6E2F\u6E38\u89C8\u7684\u8D77\u70B9\uFF0C\u8FDE\u63A5\u7740\u6B4C\u5267\u9662\u548C\u6D77\u6E2F\u5927\u6865\u3002",
            specialFeatures: [
                "\u5728\u5CA9\u77F3\u533A\u6F2B\u6B65\uFF0C\u63A2\u7D22**\u5386\u53F2\u60A0\u4E45\u7684\u5DF7\u9053\u548C\u5EFA\u7B51**\u3002",
                "\u53C2\u89C2**\u5CA9\u77F3\u533A\u5468\u672B\u5E02\u573A**\uFF08\u5982\u679C\u6070\u9022\u5468\u672B\uFF09\uFF0C\u5BFB\u627E\u624B\u5DE5\u827A\u54C1\u548C\u827A\u672F\u54C1\u3002",
                "\u5728\u73AF\u5F62\u7801\u5934\u4E58\u5750\u6E21\u8F6E\uFF0C**\u4ECE\u6C34\u4E0A\u6B23\u8D4F\u6089\u5C3C\u6E2F\u3001\u6B4C\u5267\u9662\u548C\u6D77\u6E2F\u5927\u6865\u7684\u7F8E\u666F**\u3002",
                "\u5728\u6D77\u6EE8\u9910\u5385\u4EAB\u7528\u7F8E\u98DF\u3002"
            ],
            travelAdvice: [
                "\u5CA9\u77F3\u533A\u548C\u73AF\u5F62\u7801\u5934\u7D27\u90BB\u6089\u5C3C\u5E02\u4E2D\u5FC3\uFF0C\u53EF\u6B65\u884C\u6216\u642D\u4E58\u516C\u5171\u4EA4\u901A\uFF08\u706B\u8F66\u3001\u5DF4\u58EB\u3001\u6E21\u8F6E\uFF09\u5230\u8FBE\u3002",
                "\u5EFA\u8BAE\u6E38\u73A9\u65F6\u95F4\uFF1A2-4\u5C0F\u65F6\u3002"
            ],
            notes: [
                "\u5468\u672B\u5E02\u573A\uFF08The Rocks Markets\uFF09\u901A\u5E38\u5728**\u5468\u516D\u548C\u5468\u65E5\u5F00\u653E**\uFF0C\u5177\u4F53\u65F6\u95F4\u8BF7\u67E5\u8BE2\u5B98\u7F51\u3002",
                "\u73AF\u5F62\u7801\u5934\u662F\u524D\u5F80\u5854\u9F99\u52A0\u52A8\u7269\u56ED\u3001\u66FC\u5229\u6D77\u6EE9\u7B49\u5730\u7684\u6E21\u8F6E\u8D77\u70B9\u3002"
            ]
        },
        'blue-mountains': {
            id: 'blue-mountains',
            name: "\u84DD\u5C71\u56FD\u5BB6\u516C\u56ED (Blue Mountains National Park)",
            introduction: "\u84DD\u5C71\u56FD\u5BB6\u516C\u56ED\u662F\u4E16\u754C\u9057\u4EA7\uFF0C\u4EE5\u5176\u58EE\u4E3D\u7684\u7802\u5CA9\u60AC\u5D16\u3001\u8302\u5BC6\u7684\u6849\u6811\u6797\u548C\u56E0\u6849\u6811\u6CB9\u6325\u53D1\u800C\u4EA7\u751F\u7684\u84DD\u8272\u8584\u96FE\u800C\u95FB\u540D\uFF0C\u4E09\u59D0\u59B9\u5CF0\u662F\u5176\u6807\u5FD7\u6027\u666F\u89C2\u3002",
            specialFeatures: [
                "**\u56DE\u97F3\u89D2\u89C2\u666F\u70B9 (Echo Point Lookout) \u4E0E\u4E09\u59D0\u59B9\u5CF0\uFF1A** \u6700\u4F73\u89C2\u666F\u70B9\uFF0C\u53EF\u4EE5\u770B\u5230\u6807\u5FD7\u6027\u7684\u4E09\u59D0\u59B9\u5CF0\u548C\u6770\u7C73\u900A\u8C37 (Jamison Valley) \u7684\u58EE\u4E3D\u666F\u8272\u3002",
                "**\u666F\u89C2\u4E16\u754C (Scenic World)\uFF1A** \u4F53\u9A8C\u4E16\u754C\u4E0A\u6700\u9661\u5CED\u7684\u94C1\u8DEF (Scenic Railway)\u3001\u7A7A\u4E2D\u7F06\u8F66 (Scenic Cableway) \u548C\u96E8\u6797\u6B65\u9053 (Scenic Walkway)\uFF0C\u4ECE\u4E0D\u540C\u89D2\u5EA6\u63A2\u7D22\u5CE1\u8C37\u3002",
                "**\u4E1B\u6797\u5F92\u6B65\uFF1A** \u516C\u56ED\u5185\u6709\u591A\u79CD\u96BE\u5EA6\u548C\u65F6\u957F\u7684\u5F92\u6B65\u8DEF\u7EBF\uFF0C\u4ECE\u8F7B\u677E\u7684\u77ED\u9014\u6B65\u884C\u5230\u6311\u6218\u6027\u7684\u957F\u9014\u5F92\u6B65\u3002",
                "**\u63A2\u7D22\u5C0F\u9547\uFF1A** \u6E38\u89C8\u84DD\u5C71\u5730\u533A\u53E4\u6734\u7684\u5C0F\u9547\uFF0C\u5982\u5361\u901A\u5DF4 (Katoomba) \u548C\u9C81\u62C9 (Leura)\uFF0C\u6709\u827A\u672F\u753B\u5ECA\u3001\u5496\u5561\u9986\u548C\u7279\u8272\u5546\u5E97\u3002"
            ],
            travelAdvice: [
                "\u8DDD\u79BB\u6089\u5C3C\u5E02\u533A\u7EA6 1.5 - 2 \u5C0F\u65F6\u8F66\u7A0B\uFF0C\u5EFA\u8BAE\u81EA\u9A7E\u6216\u53C2\u52A0\u4E00\u65E5\u6E38\u3002",
                "\u84DD\u5C71\u9762\u79EF\u8F83\u5927\uFF0C\u666F\u70B9\u5206\u6563\uFF0C\u81EA\u9A7E\u66F4\u65B9\u4FBF\u5B89\u6392\u884C\u7A0B\u3002",
                "\u5EFA\u8BAE\u6E38\u73A9\u65F6\u95F4\uFF1A\u4E00\u6574\u5929 (8-10\u5C0F\u65F6)\u3002"
            ],
            notes: [
                "\u84DD\u5C71\u56FD\u5BB6\u516C\u56ED\u672C\u8EAB\u514D\u8D39\u5165\u573A\uFF0C\u4F46\u666F\u89C2\u4E16\u754C\u7684\u5404\u9879\u8BBE\u65BD\u9700\u8D2D\u7968\u3002\u5EFA\u8BAE\u8D2D\u4E70\u666F\u89C2\u4E16\u754C\u901A\u7968\u3002",
                "\u84DD\u5C71\u5929\u6C14\u53D8\u5316\u8F83\u5FEB\uFF0C\u5373\u4F7F\u662F\u590F\u5B63\u4E5F\u53EF\u80FD\u8F83\u51C9\uFF0C\u5C24\u5176\u662F\u5728\u96E8\u6797\u4E2D\uFF0C\u5EFA\u8BAE\u643A\u5E26\u5916\u5957\u548C\u9632\u6C34\u8863\u7269\u3002",
                "\u5F92\u6B65\u65F6\u52A1\u5FC5\u7A7F\u7740\u8212\u9002\u9632\u6ED1\u7684\u978B\u5B50\uFF0C\u5E76\u5E26\u8DB3\u996E\u7528\u6C34\u3002"
            ]
        }
    };
    const handleDayClick = (dayId)=>{
        setSelectedDay(itineraryData.find((day)=>day.id === dayId));
        setSelectedLocation(null); // Clear location detail when selecting a new day
    };
    const handleBackToTimeline = ()=>{
        setSelectedDay(null);
        setSelectedLocation(null);
    };
    const handleLocationClick = (locationId)=>{
        setSelectedLocation(locationDetailsData[locationId]);
    };
    const handleCloseLocationDetail = ()=>{
        setSelectedLocation(null);
    };
    // Helper function to render text with simple Markdown bolding
    const renderMarkdownText = (text)=>{
        if (!text) return {
            __html: ''
        };
        // Replace **text** with <strong>text</strong>
        const html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return {
            __html: html
        };
    };
    return /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-800",
        children: [
            /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("header", {
                className: "fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-md py-4 px-4 md:px-8 transition-all duration-300",
                children: /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("div", {
                    className: "container mx-auto flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("h1", {
                            className: "text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight cursor-pointer",
                            onClick: handleBackToTimeline,
                            children: "\u6FB3\u5927\u5229\u4E9A\u4E4B\u65C5"
                        }),
                        /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("nav", {
                            children: [
                                selectedDay && /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("button", {
                                    onClick: handleBackToTimeline,
                                    className: "px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm md:text-base",
                                    children: "\u2190 \u8FD4\u56DE\u65F6\u95F4\u7EBF"
                                }),
                                selectedLocation && /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("button", {
                                    onClick: handleCloseLocationDetail,
                                    className: "ml-4 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm md:text-base",
                                    children: "\u2190 \u8FD4\u56DE\u884C\u7A0B\u8BE6\u60C5"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("main", {
                className: "container mx-auto p-4 md:p-8 pt-24",
                children: [
                    " ",
                    !selectedDay && /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)($4e377c42f539ba61$var$Timeline, {
                        itinerary: itineraryData,
                        onDayClick: handleDayClick
                    }),
                    selectedDay && !selectedLocation && /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)($4e377c42f539ba61$var$DayDetail, {
                        day: selectedDay,
                        onLocationClick: handleLocationClick,
                        locationDetailsData: locationDetailsData
                    }),
                    selectedLocation && /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)($4e377c42f539ba61$var$LocationDetail, {
                        location: selectedLocation,
                        onClose: handleCloseLocationDetail,
                        renderMarkdownText: renderMarkdownText
                    })
                ]
            }),
            /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("footer", {
                className: "py-6 px-4 md:px-8 bg-gray-900 text-white text-center text-sm mt-12 rounded-t-xl",
                children: /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("p", {
                    children: "\xa9 2025 \u60A8\u7684\u65C5\u884C\u8BA1\u5212\u52A9\u624B\u3002\u6240\u6709\u6743\u5229\u4FDD\u7559\u3002"
                })
            })
        ]
    });
}
// Timeline Component
function $4e377c42f539ba61$var$Timeline({ itinerary: itinerary, onDayClick: onDayClick }) {
    return /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("div", {
        className: "flex flex-col items-center py-8",
        children: [
            /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("h2", {
                className: "text-4xl font-extrabold text-gray-900 mb-12 text-center relative z-10 animate-fade-in-up",
                children: [
                    "\u60A8\u7684\u6FB3\u5927\u5229\u4E9A\u7CBE\u5F69\u65C5\u7A0B",
                    /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("span", {
                        className: "block w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("div", {
                className: "w-full max-w-4xl space-y-8",
                children: itinerary.map((day, index)=>/*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("div", {
                        className: "relative flex items-center group cursor-pointer",
                        onClick: ()=>onDayClick(day.id),
                        children: [
                            /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("div", {
                                className: "absolute left-1/2 -ml-0.5 w-1 bg-gradient-to-b from-blue-300 to-blue-500 h-full transform -translate-x-1/2 z-0"
                            }),
                            /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("div", {
                                className: "w-2/5 text-right pr-8 flex-shrink-0 relative z-10",
                                children: /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("div", {
                                    className: "inline-block bg-gradient-to-br from-blue-400 to-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-300",
                                    children: day.date
                                })
                            }),
                            /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("div", {
                                className: "w-3/5 pl-8 relative z-10",
                                children: /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("div", {
                                    className: "bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:translate-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("h3", {
                                            className: "text-xl font-bold text-gray-900 mb-2",
                                            children: day.title
                                        }),
                                        /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("ul", {
                                            className: "text-gray-700 text-sm space-y-1",
                                            children: [
                                                day.activities.slice(0, 2).map((activity)=>/*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("li", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("svg", {
                                                                className: "w-4 h-4 mr-2 text-blue-500 flex-shrink-0",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                children: /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 10.586V6z",
                                                                    clipRule: "evenodd"
                                                                })
                                                            }),
                                                            activity.time,
                                                            ": ",
                                                            activity.name
                                                        ]
                                                    }, activity.id)),
                                                day.activities.length > 2 && /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("li", {
                                                    className: "text-blue-500 font-semibold",
                                                    children: "...\u66F4\u591A\u8BE6\u60C5"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }, day.id))
            })
        ]
    });
}
// DayDetail Component
function $4e377c42f539ba61$var$DayDetail({ day: day, onLocationClick: onLocationClick, locationDetailsData: locationDetailsData }) {
    return /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("div", {
        className: "py-8 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("h2", {
                className: "text-4xl font-extrabold text-gray-900 mb-8 text-center relative z-10",
                children: [
                    day.date,
                    " - ",
                    day.title,
                    /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("span", {
                        className: "block w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("div", {
                className: "bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto space-y-6",
                children: day.activities.map((activity)=>/*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("div", {
                        className: "border-b border-gray-100 last:border-b-0 pb-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("div", {
                                className: "flex items-center mb-2",
                                children: [
                                    /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("span", {
                                        className: "text-lg font-semibold text-blue-700 w-24 flex-shrink-0",
                                        children: activity.time
                                    }),
                                    /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("p", {
                                        className: "text-gray-800 text-lg ml-4",
                                        children: activity.name
                                    })
                                ]
                            }),
                            activity.locationIds && activity.locationIds.length > 0 && /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("div", {
                                className: "ml-28 flex flex-wrap gap-2 mt-2",
                                children: [
                                    " ",
                                    activity.locationIds.map((locationId)=>/*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("button", {
                                            onClick: ()=>onLocationClick(locationId),
                                            className: "px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm",
                                            children: [
                                                "\u67E5\u770B ",
                                                locationDetailsData[locationId]?.name.split(' ')[0],
                                                " \u8BE6\u60C5 \u2192 "
                                            ]
                                        }, locationId))
                                ]
                            })
                        ]
                    }, activity.id))
            })
        ]
    });
}
// LocationDetail Component (Modal-like view)
function $4e377c42f539ba61$var$LocationDetail({ location: location, onClose: onClose, renderMarkdownText: renderMarkdownText }) {
    if (!location) return null;
    return(// Outer overlay for modal, clickable to close
    /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("div", {
        className: "fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 animate-fade-in-slow",
        onClick: onClose,
        children: /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("div", {
            className: "bg-white rounded-3xl shadow-2xl max-w-2xl w-full mx-4 p-8 relative transform scale-100 opacity-100 transition-all duration-300 ease-out" // Fixed: ensure visible, add transition
            ,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("button", {
                    onClick: onClose,
                    className: "absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200",
                    "aria-label": "\u5173\u95ED",
                    children: /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("svg", {
                        className: "w-8 h-8",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M6 18L18 6M6 6l12 12"
                        })
                    })
                }),
                /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("h3", {
                    className: "text-3xl font-extrabold text-gray-900 mb-4 text-center pb-2 border-b-2 border-blue-100",
                    children: location.name
                }),
                /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("div", {
                    className: "overflow-y-auto max-h-[70vh] pr-4 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50 rounded-lg",
                    children: [
                        /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("section", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("h4", {
                                    className: "text-xl font-bold text-gray-800 mb-2 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("svg", {
                                            className: "w-5 h-5 mr-2 text-blue-500",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: [
                                                /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("path", {
                                                    d: "M10 12a2 2 0 100-4 2 2 0 000 4z"
                                                }),
                                                /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("path", {
                                                    fillRule: "evenodd",
                                                    d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
                                                    clipRule: "evenodd"
                                                })
                                            ]
                                        }),
                                        "\u7B80\u4ECB"
                                    ]
                                }),
                                /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("p", {
                                    className: "text-gray-700 leading-relaxed",
                                    dangerouslySetInnerHTML: renderMarkdownText(location.introduction)
                                })
                            ]
                        }),
                        location.specialFeatures && location.specialFeatures.length > 0 && /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("section", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("h4", {
                                    className: "text-xl font-bold text-gray-800 mb-2 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("svg", {
                                            className: "w-5 h-5 mr-2 text-purple-500",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("path", {
                                                d: "M11 3a1 1 0 10-2 0v4a1 1 0 102 0V3zM14.586 6.172a1 1 0 00-1.414-1.414l-2.829 2.828a1 1 0 101.414 1.414l2.829-2.828zM18 11a1 1 0 100-2h-4a1 1 0 100 2h4zM14.586 13.828a1 1 0 001.414 1.414l2.829-2.828a1 1 0 00-1.414-1.414l-2.829 2.828zM11 17a1 1 0 10-2 0v4a1 1 0 102 0v-4zM6.172 14.586a1 1 0 00-1.414 1.414l-2.828-2.829a1 1 0 101.414-1.414l2.828 2.829zM2 11a1 1 0 100-2H-.5a1 1 0 100 2H2zM6.172 6.172a1 1 0 00-1.414-1.414L.5 2.829a1 1 0 101.414 1.414l2.828 2.829z"
                                            })
                                        }),
                                        "\u7279\u8272\u73A9\u6CD5"
                                    ]
                                }),
                                /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("ul", {
                                    className: "list-disc list-inside text-gray-700 space-y-1",
                                    children: location.specialFeatures.map((feature, index)=>/*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("li", {
                                            dangerouslySetInnerHTML: renderMarkdownText(feature)
                                        }, index))
                                })
                            ]
                        }),
                        location.travelAdvice && location.travelAdvice.length > 0 && /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("section", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("h4", {
                                    className: "text-xl font-bold text-gray-800 mb-2 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("svg", {
                                            className: "w-5 h-5 mr-2 text-green-500",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: [
                                                /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("path", {
                                                    d: "M4 4a2 2 0 00-2 2v6a2 2 0 002 2h2V4H4z"
                                                }),
                                                /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("path", {
                                                    fillRule: "evenodd",
                                                    d: "M18 8H6v10a2 2 0 002 2h10a2 2 0 002-2V8zm-2 6H8l3-4 3 4z",
                                                    clipRule: "evenodd"
                                                })
                                            ]
                                        }),
                                        "\u4EA4\u901A\u5EFA\u8BAE"
                                    ]
                                }),
                                /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("ul", {
                                    className: "list-disc list-inside text-gray-700 space-y-1",
                                    children: location.travelAdvice.map((advice, index)=>/*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("li", {
                                            dangerouslySetInnerHTML: renderMarkdownText(advice)
                                        }, index))
                                })
                            ]
                        }),
                        location.notes && location.notes.length > 0 && /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("section", {
                            children: [
                                /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsxs)("h4", {
                                    className: "text-xl font-bold text-gray-800 mb-2 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("svg", {
                                            className: "w-5 h-5 mr-2 text-red-500",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M8.257 3.332a.995.995 0 01.93-.574h.624c.355 0 .694.195.875.52l.279.508c.55.999 1.638 1.62 2.87 1.62h.2c.414 0 .75.336.75.75v3.253a.75.75 0 01-1.5 0v-2.916a.25.25 0 00-.244-.244H13.25c-1.077 0-2.036-.599-2.529-1.564l-.279-.508c-.06-.11-.186-.17-.31-.17H8.5c-.124 0-.25-.06-.31-.17l-.279-.508c-.493-.965-1.452-1.564-2.529-1.564H4.25c-.138 0-.25.112-.25.25v2.916a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75h.2c1.232 0 2.32-.621 2.87-1.62l.279-.508a.995.995 0 01.875-.52h.624c.355 0 .694.195.875.52zM10 12.75a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H10.75a.75.75 0 01-.75-.75zM10 15.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H10.75a.75.75 0 01-.75-.75zM8.257 3.332a.995.995 0 01.93-.574h.624c.355 0 .694.195.875.52l.279-.508c-.493-.965-1.452-1.564-2.529-1.564H4.25c-.138 0-.25.112-.25.25v2.916a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75h.2c1.232 0 2.32-.621 2.87-1.62l.279-.508a.995.995 0 01.875-.52h.624c.355 0 .694.195.875.52zM10 12.75a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H10.75a.75.75 0 01-.75-.75zM10 15.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H10.75a.75.75 0 01-.75-.75z",
                                                clipRule: "evenodd"
                                            })
                                        }),
                                        "\u6CE8\u610F\u4E8B\u9879"
                                    ]
                                }),
                                /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("ul", {
                                    className: "list-disc list-inside text-gray-700 space-y-1",
                                    children: location.notes.map((note, index)=>/*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)("li", {
                                            dangerouslySetInnerHTML: renderMarkdownText(note)
                                        }, index))
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
}
var $4e377c42f539ba61$export$2e2bcd8739ae039 = $4e377c42f539ba61$var$App;


// If you have a global CSS file for base styles or resets, import it here.
// For example: import './index.css';
const $d3928351bb4a0237$var$root = (0, ($parcel$interopDefault($hPUfP$reactdomclient))).createRoot(document.getElementById('root'));
$d3928351bb4a0237$var$root.render(/*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)((0, ($parcel$interopDefault($hPUfP$react))).StrictMode, {
    children: /*#__PURE__*/ (0, $hPUfP$reactjsxruntime.jsx)((0, $4e377c42f539ba61$export$2e2bcd8739ae039), {})
}));
