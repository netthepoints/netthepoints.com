/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '/images/starter/logo/NTP.svg', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '/images/starter/logo/NTP_white.svg', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'Net The Points', // 英雄区文字
  STARTER_HERO_TITLE_2: 'Only offering the matchable purchasing solution. Lets Net The Points to capture the essence of value by connecting all relevant parties.', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'Get Purchasing Solution', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://netthepoints.com/get purchasing solution', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: '', // 产品预览图 ，默认读取public目录下图片

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: '',
  STARTER_NAV_BUTTON_1_URL: '',

  STARTER_NAV_BUTTON_2_TEXT: 'Subscribe',
  STARTER_NAV_BUTTON_2_URL: 'https://noteforms.com/forms/subscribe-36qjbc',

  // 特性区块
  STARTER_FEATURE_ENABLE: false, // 特性区块开关
  STARTER_FEATURE_TITLE: '', // 特性
  STARTER_FEATURE_TEXT_1: 'NotionNext的主要特性', // 特性
  STARTER_FEATURE_TEXT_2:
    'NotionNext的愿景是帮助您简单、无感知地稳定地搭建自己的网站，放大品牌的价值。 ', // 特性

  STARTER_FEATURE_1_TITLE_1: '免费且开源', // 特性1
  STARTER_FEATURE_1_TEXT_1: '项目源码在Github上完全开放共享，遵循MIT协议', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // 特性1

  STARTER_FEATURE_2_TITLE_1: '多种主题定制', // 特性2
  STARTER_FEATURE_2_TEXT_1: '数十种主题,适用于不同场景，总有一款适合你', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    'https://docs.tangly1024.com/article/notion-next-themes', // 特性2

  STARTER_FEATURE_3_TITLE_1: '优秀的性能', // 特性3
  STARTER_FEATURE_3_TEXT_1: '基于NextJS开发，更快的响应速度，更好的SEO', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://docs.tangly1024.com/article/next-js', // 特性3

  STARTER_FEATURE_4_TITLE_1: '便捷的写作体验', // 特性4
  STARTER_FEATURE_4_TEXT_1: '只需在Notion笔记中编修，自动同步到网站', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://docs.tangly1024.com/about', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: 'What Net The Points offers?',
  STARTER_ABOUT_TEXT:
    '<strong>I. Rigorous selection and network building</strong><br/>NTP carefully picks excellent Chinese manufacturers and builds a high-quality supply resource network. This ensures product quality, enhances trust, and reduces procurement risks for customers.<br/><br/><strong>II. Leadership and coordination</strong><br/>NTP provides innovative product/service combinations by leveraging its leadership and coordinating advantages of the network. This helps customers stand out and avoids homogeneous competition.<br/><br/><strong>III. Efficient service process</strong><br/>Customers describe their needs, and NTP gets it done. This saves time and costs, improves satisfaction, and helps NTP gain a market edge and expand business.',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_BUTTON_TEXT: 'Learn More',
  STARTER_ABOUT_BUTTON_URL: 'https://netthepoints.com/about',
  STARTER_ABOUT_TIPS_1: '100+',
  STARTER_ABOUT_TIPS_2: 'factories',
  STARTER_ABOUT_TIPS_3: 'cooperating',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '',
  STARTER_PRICING_TEXT_1: 'Simple Pricing',
  STARTER_PRICING_TEXT_2:
    'Acting as your branch company in China and with expertise in bicycle compounent industry, Net The Points runs with 3 Product Sourcing functional Modes: Discover how your branch company can transform your supply chain to be simple, efficient, and all-in-control today!',

  STARTER_PRICING_1_TITLE: 'Essential Branch Company Mode',
  STARTER_PRICING_1_PRICE: '50+',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: 'order',
  STARTER_PRICING_1_HEADER: 'If you already have suppliers, we offer services below',
  STARTER_PRICING_1_FEATURES: 'Receiving Products,Product Counting and Inspection,Product Return Assistance,Free Warehouse Services,Competitive Shipping Options,Essential Branch Company Mode', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: 'More Details',
  STARTER_PRICING_1_BUTTON_URL:
    'https://netthepionts.com/pricing',

  STARTER_PRICING_2_TAG: 'recommended',
  STARTER_PRICING_2_TITLE: 'Curated Branch Company Mode',
  STARTER_PRICING_2_PRICE: '15',
  STARTER_PRICING_2_PRICE_CURRENCY: '',
  STARTER_PRICING_2_PRICE_PERIOD: '%',
  STARTER_PRICING_2_HEADER: 'If you don't have supplier, we offer services below',
  STARTER_PRICING_2_FEATURES: 'Production Process Monitoring With Well Assigned Sourcing Colleague,Production Process Monitoring With Well Assigned Sourcing Colleague,Free Product Photography for E-Commerce,Quality Inspection Services,Free Warehouse Storage,Certificate Obtaining Assistance,Competive Shipping Options,Quality Assurance | Warranty', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: 'Lean More',
  STARTER_PRICING_2_BUTTON_URL:
    'https://netthepoints.com/pricing',

  STARTER_PRICING_3_TITLE: 'Full Custom Branch Company Mode',
  STARTER_PRICING_3_PRICE: 'Free+',
  STARTER_PRICING_3_PRICE_CURRENCY: '',
  STARTER_PRICING_3_PRICE_PERIOD: '',
  STARTER_PRICING_3_HEADER: 'Deep services',
  STARTER_PRICING_3_FEATURES: 'Factory Audit and Pre-Shipment Inspections,ODM | OEM related business boosting,More unlimited functions to be discussed: Contact Us for Customized Sourcing Services', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: 'Learn More',
  STARTER_PRICING_3_BUTTON_URL:
    'https://netthepoints.com/pricing',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: false, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '数千位站长选择用NotionNext搭建他们的网站,通过帮助手册、交流社群以及技术咨询，大家成功上线了自己的网站',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '感谢大佬的方法。之前尝试过Super、Potion等国外的第三方平台，实现效果一般，个性化程度远不如这个方法，已经用起来了！ ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan`Log 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '很喜欢这个主题，本代码小白用三天台风假期搭建出来了，还根据大佬的教程弄了自定义域名，十分感谢，已请喝咖啡~',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '阿森的百宝袋 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '呜呜呜，经过一个下午的努力，终于把博客部署好啦，非常感谢Tangly1024大佬的框架和教程，这是我有生之年用过的最好用的博客框架┭┮﹏┭┮。从今之后，我就可以在自己的博客里bb啦，( •̀ ω •́ )y ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '且听风吟 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '感谢提供这么好的项目哈哈 之前一直不知道怎么部署(别的项目好难好复杂)这个相对非常简单 新手非常友好哦',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'AI资源分享 Blog',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '灰常感谢大佬的博客项目，能将博客和notion结合起来，这一直是我挺期待的博客模式。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '用好久了，太感谢了',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN考验辅导 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '',
  STARTER_FAQ_TEXT_1: 'FAQ',
  STARTER_FAQ_TEXT_2: 'Here are some questions that you may ask',

  STARTER_FAQ_1_QUESTION: 'NotionNext有帮助文档吗？',
  STARTER_FAQ_1_ANSWER:
    'NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署',

  STARTER_FAQ_2_QUESTION: '部署后要如何编写文章？',
  STARTER_FAQ_2_ANSWER:
    '您可以在Notion中之间添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>',

  STARTER_FAQ_3_QUESTION: '站点部署失败，更新失败？',
  STARTER_FAQ_3_ANSWER:
    '通常是配置修改错误导致，请检查配置或者重试操作步骤，或者通过Vercel后台的Deployments中找到错误日志，并向网友求助',

  STARTER_FAQ_4_QUESTION: '文章没有实时同步？',
  STARTER_FAQ_4_ANSWER:
    '先检查Notion_Page_ID是否正确配置，其次由于博客的每个页面都有独立缓存，刷新网页后即可解决',


  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些关于NotionNext的最新动态，包括新的动向、新的未来计划，以及新功能的特性',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TEXT: 'Contact Us!',
  STARTER_CONTACT_TITLE: 'Are you in supply chain work or running your own business and seeking supplier support? Or do you recognize the advantages of Chinese products and consider purchasing from China? Or are you struggling to find a reliable one-stop solution provider for factory sourcing, negotiations, quality control, and smooth exports? If so, we are the partner you need.',
  STARTER_CONTACT_LOCATION_TITLE: 'Our Location',
  STARTER_CONTACT_LOCATION_TEXT: 'Xiamen Fujian, China',
  STARTER_CONTACT_EMAIL_TITLE: 'Email',
  STARTER_CONTACT_EMAIL_TEXT: 'netthepoints@gmail.com',
  
  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '',
  STARTER_TEAM_TEXT_1: 'Team Members',
  STARTER_TEAM_TEXT_2:
    '',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        '/images/starter/team/hayson_avatar.jpg',
      STARTER_TEAM_ITEM_NICKNAME: 'Hayson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Co-founder | CEO | Supplying Networks Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/koko_avatar.jpg',
      STARTER_TEAM_ITEM_NICKNAME: 'Koko',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Co-founder | Customer Problem Resolution Specialist'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/leo_avatar.jpg',
      STARTER_TEAM_ITEM_NICKNAME: 'Leo',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Supply Chain Standards System Inspector | Lawyer'
    },
  ],
  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/subscribe-36qjbc', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'About Us',
      LINK_GROUP: [
        { TITLE: 'Home Page', URL: '/#home' },
        {
          TITLE: 'Help',
          URL: ''
        },
        {
          TITLE: 'Cooperation Application',
          URL: ''
        }
      ]
    },
    {
      TITLE: '功能特性',
      LINK_GROUP: [
        {
          TITLE: '部署指南',
          URL: 'https://docs.tangly1024.com/article/vercel-deploy-notion-next'
        },
        {
          TITLE: '升级指南',
          URL: 'https://docs.tangly1024.com/article/how-to-update-notionnext'
        },
        { TITLE: '最新版本', URL: 'https://docs.tangly1024.com/article/latest' }
      ]
    },
    {
      TITLE: 'Notion写作',
      LINK_GROUP: [
        {
          TITLE: 'Notion开始写作',
          URL: 'https://docs.tangly1024.com/article/start-to-write'
        },
        {
          TITLE: '快捷键提升效率',
          URL: 'https://docs.tangly1024.com/article/notion-short-key'
        },
        {
          TITLE: '中国大陆使用Notion',
          URL: 'https://docs.tangly1024.com/article/notion-faster'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://netthepoints.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
