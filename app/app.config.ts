// app.config.ts
export default defineAppConfig({
  "base": {
    "email": "zhuhuan@circuchem.com",
    "companyName": "CIRCUCHEM",
    "phone": "+86 (177) 27901552",
    "address": "A509,LANGGUANG TECH PARK, Nanshan Dist, Shenzhen, Guangdong, PRC"
  },
  "logo": {
    "darklogoUrl": "/img/logo.png",
    "lightlogoUrl": "/img/logo.png",
    "logoName": "CIRCUCHEM",
  },
  megaMenu: {
    // 1. 顶部标题区域
    header: {
      tag: "Product Portfolio",
      title: "High Purity Copper Salts Solutions"
    },
    // 2. 三个分类的具体内容（图片、文字、描述）
    categories: [
      {
        label: "C Series Copper Chemicals",
        slug: "C-series-Copper-Chemicals",
        description: "High-purity copper salts for feed and industrial applications.",
        image: "/img/C-series.png"
      },
      {
        label: "G Series Copper Chemicals",
        slug: "G-Series-Copper-Chemicals",
        description: "High-purity copper salts for highend industrial applications.",
        image: "/img/G-series.png"
      },
      {
        label: "Other Chemicals",
        slug: "Other-Chemicals",
        description: "Tailored chemical solutions designed for specific industrial research requirements.",
        image: "/img/Others.png"
      }
    ],
    // 3. 底部认证与位置信息
    footer: {
      certifications: ["ISO 9001 / 14001 / 45001 / 27001 CERTIFIED"],
      location: "GUANGDONG/ JiaXing • CHINA & THAILAND"
    }
  },
  "index": {
    "hero": {
      "welcomeText": "SINCE 2020| ISO 9001 / 14001 / 45001 / 27001 CERTIFIED",
      "mainHeading": "High Purity Copper Salts",
      "description": "Leading manufacturer and exporter of high-purity copper chemicals.Backed by years of professional expertise and a global supply chain, we deliver consistent quality for feed, electroplating and industrial applications worldwide.",
      "ctaButton": "Discover our products",
      "cardTitle": "Your Professional High Purity Copper Salts Solutions",
      "cardDescription": "We simplify your sourcing with a specialized logistics system and reliable warehouse capacity. As a professional manufacturer of high-purity copper salts, from customized high-purity copper salt formulation in our production bases to global distribution, your satisfaction is our pursuit. Trust the experience that has been leading the high-purity copper salt industry with strict quality control and professional service.",
    },
    "case": {
      "tag": "CATEGORY",
      "mainHeading": "Core Excellence",
      "subtitle": "SINCE 2020, we have specialized in high-purity copper salts products.",
      "product": [
        {
          brand: "CNAS Certificated Lab Control",
          title: "G series Copper Chemicals",
          products: [
            { id: '00001', name: 'Basic Copper Chloride', cas: '1332-65-6' },
            { id: '00002', name: 'Copper Sulphate Pentahydrate', cas: '7758-98-7' },
            { id: '00003', name: 'Basic Copper Carbonate', cas: '12069-69-1' },
            { id: '00004', name: 'Copper Oxide', cas: '1317-38-0' },

          ],

          image: "/img/G-series.png",

          impact: ["40% Less Inventory Waste", "35% Faster Production", "20% More Accurate Forecasting", "25% Faster Fulfillment"]
        },
        {
          brand: "CNAS Certificated Lab Control",
          title: "C series Copper Chemicals",
          products: [
            { id: '00001', name: 'Basic Copper Carbonate', cas: '12069-69-1' },
            { id: '00002', name: 'Copper Oxide', cas: '1317-38-0' },
          ],

          image: "/img/C-series.png",

        },
        {
          brand: "CNAS Certificated Lab Control",
          title: "Zn/Li/Ni Chemicals",
          description: "Zinc, Lithium, and Nickel salt series are fully based on environmentally friendly recycled raw materials, refined through advanced purification processes to deliver both sustainability and consistent quality. Specifically, basic zinc chloride meets feed additive grade standards, while lithium carbonate and nickel sulfate are qualified for high-end industrial applications, supporting customers in building greener supply chains.",
          image: "/img/Others.png",
          impact: ["115% Fuel Efficiency Increase", "12,000 Tons CO2 Saved Yearly", "100% On-time Delivery Rate", "Real-time Fleet Visibility"]
        }
      ]
    },
    "benefitsGrid": {
      "tag": "PRODUCTS",
      "mainHeading": "Explore Now",
      "subtitle": "Quickly locate the exact CAS number or chemical name you need.",
      "benefits": [
        {
          title: "Iqqqncreased Productivity",
          description: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
          icon: 'Zap'
        },
        {
          title: "Better Customer Experience",
          description: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
          icon: 'Users'
        },
        {
          title: "24/7 Availability",
          description: "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
          icon: 'Clock'
        },
        {
          title: "Cost Reduction",
          description: "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
          icon: 'DollarSign'
        },
        {
          title: "Data-Driven Insights",
          description: "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
          icon: 'Database'
        },
        {
          title: "Scalability & Growth",
          description: "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
          icon: 'TrendingUp'
        }
      ],
      "name": "North Partners",
      "logo": "https://the7.io/fse-corporate/wp-content/uploads/sites/142/2025/08/Slide-3_2-logo-6.svg"
    },
    "faq": {
      "tag": "FAQS",
      "mainHeading": " Copper chemicals for automotive, catalysis, wood protection，feed and electroplating",
      "subtitle": "Quick answers to your questions.",
      "faqs": [
        {
          question: "What is the purity level of your copper salts?",
          answer: "Our products are manufactured using refined copper sources and controlled processes to ensure high purity. For example, our C Series basic copper carbonate typically reaches ≥56% Cu content with strict control over heavy metals and chloride levels."
        },
        {
          question: "What makes your copper salts different from conventional products?",
          answer: "The difference lies in process control and final-stage purification. We refine the material at the last stage of production, which results in better crystallinity, lower impurities, and more stable performance in downstream applications."
        },
        {
          question: "Do impurities really impact performance?",
          answer: "Yes. Even trace impurities can interfere with catalytic activity, electroplating stability, or material consistency. Our products are designed to minimize such risks."
        },
        {
          question: "Can you provide COA and testing methods?",
          answer: "Yes. Each batch is supplied with a Certificate of Analysis (COA), including detailed parameters and testing methods upon request."
        },
        {
          question: "Is particle size customizable?",
          answer: "Yes. We can control particle size distribution based on your application requirements, including specific mesh ranges or D50 targets."
        }
      ]
    },
    "cart": {
      "tag": "Cart",
      "mainHeading": "Start From a Product Specification Sheet",
      "subtitle": "Get started with a detailed inquri."
    },
  },
  "productFeature": {

    "secondSection": {
      "subtitle": "1Top-notch financial stability",
      "title": "1Investing with clarity, navigating with confidence",
      "description": "1Ut elit tellus - luctus nec, luctus consectetur adipiscing elit tellus mattis pulvinar corper mattis nisl pellentesque elit tellus nec elit dapibus. Lorem aliquam commodo, ipsum corper mattis pulvinar dapibus luctus consectetur adipiscing eros nisl pellentesque elit tellus nec elit tellus nec ullam lorvm nulla ipsum corper mattis pulvinar dapibu.",
      "image": "https://the7.io/fse-corporate/wp-content/uploads/sites/142/2025/03/landsc-2x3-094.webp",
      "imageAlt": "Professional working on laptop",
      "customerSatisfaction": "95%",
      "featureBadges": [
        {
          "title": "1Modern professional approach",
          "description": "1Tailored strategies for your unique financial goals",
          "icon": "https://api.iconify.design/lucide:shield-check.svg?color=%233b82f6"
        },
        {
          "title": "1Guaranteed capital growth",
          "description": "1Secure investments with proven returns",
          "icon": "https://api.iconify.design/lucide:trending-up.svg?color=%233b82f6"
        }
      ]
    }
  },
  "about": {
    "tag": "WHO WE ARE",
    "titleOne": "We link high-quality",
    "titleTwo": "copper chemicals",
    "titleThree": "with worldwide industries.",
    "description": "Focused on quality control and sustainable supply, we manufacture premium mineral chemicals for feed additives, electroplating and fine chemical industries.",
stats: [
  { id: 1, type: 'icon', icon: 'flask', variant: 'outline', row: 1 },
  { id: 2, type: 'stat', value: '20+', label: 'Years of chemical manufacturing experience', variant: 'soft', trend: 'up', row: 1 },
  { id: 3, type: 'icon', icon: 'earth', variant: 'outline', row: 1 },
  { id: 4, type: 'stat', value: '60+', label: 'Countries and regions we export to', variant: 'soft', row: 2 },
  { id: 5, type: 'icon', icon: 'check', variant: 'outline', row: 2 },
  { id: 6, type: 'stat', value: '99%', label: 'Customer satisfaction and repeat orders', variant: 'gradient', trend: 'up', row: 2 },
],
"storyTitle": "Our Story",
"storyParagraphs": [
  "Founded as a professional manufacturer of copper and zinc chemicals, we have focused on high-quality inorganic salts for many years. With rich production experience and advanced technology, we have built a good reputation in feed additives and industrial chemical markets.",
  "We strictly control raw materials, production process and finished product testing to ensure stable and reliable product quality. Our products are widely used in feed, electroplating, industrial catalysts and other fields, and exported to all over the world with professional service and stable supply capacity."
],
    "gallery": [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80'
    ],
    "secondblock": {
      tag: 'Statistics',
      titleone: 'Stable',
      titletwo: 'Quality & Service',
    },
    teamTag: 'Team',
    teamTitleone: 'See Our',
    teamTitletwo: 'Team',
    teamMembers :[
      {
        name: 'MR Zhang',
        role: 'Founder & CEO',
        image: 'https://img1.baidu.com/it/u=1196787366,2837426063&fm=253&fmt=auto&app=138&f=JPEG?w=475&h=501',
        socials: { email: '#', linkedin: '#', github: '#' }
      },
      {
        name: 'John David',
        role: 'CEO',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
        socials: { email: '#', linkedin: '#', github: '#' }
      },
      {
        name: 'Michael James',
        role: 'Marketing Leader',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
        socials: { email: '#', linkedin: '#', github: '#' }
      },
      {
        name: 'Jennifer Ann',
        role: 'Project Manager',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400',
        socials: { email: '#', linkedin: '#', github: '#' }
      },
      {
        name: 'William Joseph',
        role: 'Product Designer',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400',
        socials: { email: '#', linkedin: '#', github: '#' }
      },
      {
        name: 'Charlotte Rose',
        role: 'Product Designer',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400',
        socials: { email: '#', linkedin: '#', github: '#' }
      },
      {
        name: 'Amelia Grace',
        role: 'Software Engineer',
        image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400',
        socials: { email: '#', linkedin: '#', github: '#' }
      },
      {
        name: 'Evelyn Mae',
        role: 'Software Engineer',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400',
        socials: { email: '#', linkedin: '#', github: '#' }
      }
    ]
  },
  "contact": {
    "tag": "Contact Us",
    "title": "Start your",
    "sptext": "Cooperation",
    "contactInfo": [
      { icon: 'Mail', label: 'Email', value: 'info@circuchem.com' },
      { icon: 'Phone', label: 'Phone', value: '+86 177 2790 1552' },
      { icon: 'MapPin', label: 'Office', value: 'Guangdong/Jiangxi, China & Thailand' }
    ],
    "email": "info@circuchem.com",
    "phone": "+86 17727901552",
    "address": "No509, Langguang Tech Park, Nanshan Dist, Shenzhen, Guangdong, China"
  },
  "footer": {
    "emailmessage": "Request a Product Sample",
    "socials": [
      { label: 'X', href: 'https://x.com/Zhuxiaoming1987' },
      { label: 'Facebook', href: 'https://facebook.com/daddytemplate' },
      { label: 'Discord', href: '#' }
    ]
  },
  "seo": {
    "index": {
      "title": "high purity copper salts",
      "description": "Circuchem provides unique understanding and professional expertise in the research, production and supply of high-purity copper salts ",
      "ogImage": "/default-og.jpg",
      "twitterCard": "summary_large_image"
    },
    "about": {
      "tag": "About Us",
      "title": "Circuchem - About Us",
      "description": "Circuchem provides unique understanding and professional expertise in the research, production and supply of high-purity copper salts",
      "ogImage": "/default-og.jpg",
      "twitterCard": "summary_large_image"
    },
    "contact": {
      "title": "Circuchem - Contact",
      "description": "Circuchem provides unique understanding and professional expertise in the research, production and supply of high-purity copper salts",
      "ogImage": "/default-og.jpg",
      "twitterCard": "summary_large_image"
    }
  }
})
