export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'design' | 'ecommerce' | 'marketing';
  categoryLabel: { vi: string; en: string };
  coverImage: string;
  gallery: { src: string; caption: { vi: string; en: string } }[];
  tags: string[];
  period: string;
  clientOrOrg: string;
  overview: { vi: string; en: string };
  highlights: { vi: string[]; en: string[] };
  githubUrl?: string;
  liveUrl?: string;
}

export interface ReferencePerson {
  title: { vi: string; en: string };
  name: string;
  role: { vi: string; en: string };
  company: string;
  phone: string;
  email?: string;
  avatar?: string;
  relationship: { vi: string; en: string };
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: { vi: string; en: string };
  rank?: { vi: string; en: string };
  period: { vi: string; en: string };
  location: { vi: string; en: string };
  type: 'fulltime' | 'contract' | 'freelance' | 'academic';
  typeLabel: { vi: string; en: string };
  isCurrent?: boolean;
  responsibilities: { vi: string[]; en: string[] };
  skills: string[];
  reference?: ReferencePerson;
}

export interface SkillCategory {
  id: string;
  title: { vi: string; en: string };
  description: { vi: string; en: string };
  skills: {
    name: string;
    category?: string;
  }[];
  tools: string[];
}

export const PERSONAL_INFO = {
  fullName: "Võ Đức Huy",
  englishName: "Huy Vo",
  title: {
    vi: "Marketing Support Executive (Senior & Trainer) · Web Developer · UI/UX Designer",
    en: "Marketing Support Executive (Senior & Trainer) · Web Developer · UI/UX Designer",
  },
  roles: [
    "Marketing Support Executive",
    "Senior & Trainer at MAC USA One",
    "Frontend & Web Developer",
    "Creative UI/UX & Graphic Designer",
    "Quality Assurance Engineer",
    "Digital Marketing & Multimedia Creator",
    "IT Lecturer & Mentor"
  ],
  bio: {
    vi: "Một chuyên viên công nghệ và sáng tạo năng động tốt nghiệp Đại học Công nghiệp TP.HCM (IUH). Tôi kết hợp tư duy logic của một kỹ sư lập trình, sự tỉ mỉ của chuyên viên kiểm thử chất lượng phần mềm (QA), năng lực tư vấn vận hành marketing khách hàng thực tế cùng cảm quan thẩm mỹ tinh tế của một nhà thiết kế đồ họa & truyền thông đa phương tiện.",
    en: "A dynamic tech and creative specialist graduated from Industrial University of Ho Chi Minh City. I unite the analytical precision of a software engineer, rigorous attention to detail as a QA specialist, client management acumen, and the aesthetic craftsmanship of a multimedia designer."
  },
  motto: {
    vi: "Không gì là không thể — hãy nỗ lực hết mình, mọi điều tốt đẹp sẽ đến!",
    en: "Nothing is impossible — do your best, and all will turn out wonderfully!"
  },
  aboutPitch: {
    vi: "Với tinh thần điềm tĩnh, khả năng thích ứng linh hoạt với môi trường áp lực cao, không ngại thách thức và luôn chủ động tìm ra giải pháp tối ưu cho từng bài toán sản phẩm và vận hành khách hàng.",
    en: "Calm under pressure, highly adaptable to demanding environments, fearless when facing complex challenges, and relentless in discovering optimal solutions for product challenges."
  },
  dob: "01/08/1999",
  email: "huyvo1899@gmail.com",
  phone: "0564996472",
  address: {
    vi: "Thành phố Hồ Chí Minh, Việt Nam",
    en: "Ho Chi Minh City, Vietnam"
  },
  education: {
    status: {
      vi: "Đã tốt nghiệp",
      en: "Graduated"
    },
    degree: {
      vi: "Cử nhân Công nghệ Thông tin",
      en: "Bachelor of Information Technology"
    },
    school: {
      vi: "Đại học Công nghiệp TP. Hồ Chí Minh (IUH)",
      en: "Industrial University of Ho Chi Minh City (IUH)"
    },
    period: "2018 — 2021",
    location: "Gò Vấp, TP. Hồ Chí Minh",
    courses: [
      { vi: "Kỹ năng Tiếng Anh: Đọc hiểu tài liệu chuyên ngành tốt & Giao tiếp cơ bản", en: "English Proficiency: Strong technical reading comprehension & Basic communication" },
      { vi: "Kiến thức căn bản về Facebook Ads & Quản trị chiến dịch", en: "Fundamental Facebook Ads & Campaign Management" },
      { vi: "Kiến thức căn bản về SEO Google & Tối ưu Website", en: "Fundamental Google SEO & Website Optimization" },
      { vi: "Đồ họa thương hiệu & Thiết kế đa phương tiện 2D/Video", en: "Brand Graphics & 2D/Video Multimedia Design" },
      { vi: "Quy trình kiểm thử phần mềm chuyên nghiệp (Manual & API Testing)", en: "Professional Software QA Workflow (Manual & API Testing)" }
    ]
  },
  interests: [
    { label: { vi: "Bóng đá thể thao", en: "Football" }, icon: "trophy" },
    { label: { vi: "Nhiếp ảnh sản phẩm & đường phố", en: "Photography" }, icon: "camera" },
    { label: { vi: "Guitar acoustic & Âm nhạc Rap", en: "Guitar & Music" }, icon: "music" },
    { label: { vi: "Du lịch trải nghiệm & khám phá", en: "Travel & Culture" }, icon: "compass" }
  ],
  stats: [
    { value: "6+", label: { vi: "Năm kinh nghiệm thực chiến", en: "Years Experience" } },
    { value: "25+", label: { vi: "Dự án & Thiết kế hoàn thành", en: "Completed Projects" } },
    { value: "80+", label: { vi: "Học viên CNTT đã đào tạo & tốt nghiệp", en: "IT Students Mentored & Graduated" } },
    { value: "100%", label: { vi: "Tận tâm & Đúng tiến độ", en: "Commitment & On-Time" } }
  ],
  cvUrl: "https://cvdesignr.com/p/6437ca4a58c5b",
  cvPdfUrl: "/assets/aistudio/CV_2026-10-25_V____c__Huy_74b247c1.pdf",
  socials: [
    { name: "GitHub", url: "https://github.com/Duchuyy1899?tab=repositories", handle: "Duchuyy1899" },
    { name: "Facebook", url: "https://www.facebook.com/voduchuy1899/", handle: "Vo Duc Huy" },
    { name: "Telegram", url: "https://t.me/huyvo1899", handle: "@huyvo1899" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/huy-v%C3%B5-undefined-236a2526a", handle: "Huy Võ" },
    { name: "CV Online", url: "https://cvdesignr.com/p/6437ca4a58c5b", handle: "cvdesignr.com" },
    { name: "CV PDF", url: "/assets/aistudio/CV_2026-10-25_V____c__Huy_74b247c1.pdf", handle: "Vo_Duc_Huy_CV.pdf" }
  ]
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "mindx",
    title: "MindX Technology School",
    subtitle: "Brand Visuals, Event Design & Student Teaching",
    category: "marketing",
    categoryLabel: { vi: "Giáo dục & Thương hiệu", en: "Education & Branding" },
    coverImage: "/images/portfolio1.jpg",
    period: "2021 — Nay",
    clientOrOrg: "MindX Technology School",
    tags: ["Graphic Design", "Brand Identity", "Event Banners", "Adobe Photoshop", "Adobe Illustrator"],
    overview: {
      vi: "Hệ thống các ấn phẩm truyền thông, thiết kế sự kiện tuyển sinh, hình ảnh văn phòng truyền cảm hứng và các hoạt động giảng dạy công nghệ thực tế tại hệ thống trường học MindX.",
      en: "Comprehensive multimedia creative assets, key visual banners for events, promotional materials, office wall graphics, and programming instruction for students at MindX Technology School."
    },
    highlights: {
      vi: [
        "Thiết kế Key Visual công bố nhận vốn đầu tư và các sự kiện khai trương cơ sở mới.",
        "Xây dựng bộ tranh cổ động, văn hóa doanh nghiệp tạo động lực làm việc tại các chi nhánh văn phòng.",
        "Ấn phẩm quảng cáo tuyển sinh, banner digital marketing đạt tỉ lệ tương tác cao.",
        "Trực tiếp đứng lớp giảng dạy lập trình cơ bản và nâng cao cho hàng trăm học viên trẻ."
      ],
      en: [
        "Crafted Key Visuals for major venture capital announcements and new branch grand openings.",
        "Designed motivational office wall art and corporate culture graphics across campuses.",
        "Produced recruitment and digital ad campaign creatives with high engagement metrics.",
        "Directly lectured and mentored hundreds of students in software development principles."
      ]
    },
    gallery: [
      { src: "/images/portfolio/mindx/Portfolio-1.jpg", caption: { vi: "Ấn phẩm sự kiện nhận vốn đầu tư MindX", en: "MindX Capital Investment Announcement Key Visual" } },
      { src: "/images/portfolio/mindx/Portfolio-2.jpg", caption: { vi: "Ấn phẩm khai trương chi nhánh mới", en: "Campus Grand Opening Event Graphics" } },
      { src: "/images/portfolio/mindx/Screenshot 2023-05-17 141140.png", caption: { vi: "Tranh văn phòng tạo động lực phát triển", en: "Office Motivational Culture Artwork" } },
      { src: "/images/portfolio/mindx/item 2.jpg", caption: { vi: "Banner tuyển dụng & tuyển sinh nhân tài", en: "Talent Recruitment & Student Admission Banner" } },
      { src: "/images/portfolio/mindx/item 4.jpg", caption: { vi: "Thiết kế ấn phẩm truyền thông số", en: "Digital Marketing Campaign Graphic" } },
      { src: "/images/portfolio/mindx/IMG_3574.JPG", caption: { vi: "Hình ảnh lớp học thực tế và học viên", en: "Live classroom session and students" } },
      { src: "/images/portfolio/mindx/IMG_3577.JPG", caption: { vi: "Không gian đào tạo công nghệ sáng tạo", en: "Tech training classroom environment" } }
    ]
  },
  {
    id: "shopgaran",
    title: "OGANI Fried Chicken E-Commerce",
    subtitle: "Full-Stack Food Ordering & Product Management Platform",
    category: "web",
    categoryLabel: { vi: "Web App & Thương mại", en: "Web App & E-Commerce" },
    coverImage: "/images/abc.jpg",
    period: "2023",
    clientOrOrg: "Independent Project",
    tags: ["ReactJS", "Laravel", "PHP", "MySQL", "REST API", "TailwindCSS"],
    githubUrl: "https://github.com/Duchuyy1899/shop-ga-ran",
    overview: {
      vi: "Nền tảng thương mại điện tử chuyên đặt món gà rán và đồ ăn nhanh trực tuyến. Ứng dụng xây dựng với kiến trúc Frontend ReactJS tách biệt giao tiếp cùng Laravel RESTful API backend, hỗ trợ giỏ hàng, xác thực người dùng và quản trị danh mục sản phẩm.",
      en: "A modern fast-food and fried chicken online ordering platform built with a decoupled ReactJS frontend and a robust Laravel RESTful backend, featuring shopping cart state, JWT authentication, and product catalog management."
    },
    highlights: {
      vi: [
        "Xây dựng giao diện Responsive trực quan, tối ưu trải nghiệm gọi món nhanh trên cả thiết bị di động và máy tính.",
        "Thiết kế luồng giỏ hàng (Cart), tính toán tổng tiền động và luồng checkout trực quan.",
        "Hệ thống đăng nhập/đăng ký người dùng bảo mật và quản trị đơn hàng.",
        "Kiến trúc REST API đồng bộ dữ liệu nhanh và cấu trúc cơ sở dữ liệu MySQL chuẩn hóa."
      ],
      en: [
        "Designed an intuitive, responsive UI optimized for quick food ordering across mobile and desktop.",
        "Engineered real-time cart state management with dynamic pricing calculation and sleek checkout.",
        "Implemented secure customer authentication, user session management, and admin inventory control.",
        "Structured clean RESTful endpoints connecting React state with normalized MySQL schemas."
      ]
    },
    gallery: [
      { src: "/images/portfolio/shopga/abc.jpg", caption: { vi: "Banner trang chủ và giao diện chào mừng OGANI", en: "Homepage Hero Banner & Promotional Welcome" } },
      { src: "/images/portfolio/shopga/shopgaran1.png", caption: { vi: "Bố cục menu món ăn & danh mục combo", en: "Food Menu & Crispy Chicken Combo Catalog" } },
      { src: "/images/portfolio/shopga/shopgaran_products.png", caption: { vi: "Danh sách sản phẩm & thẻ giá khuyến mãi", en: "Product Listing Grid with Price Tags" } },
      { src: "/images/portfolio/shopga/giohang.png", caption: { vi: "Giao diện giỏ hàng và thanh toán chi tiết", en: "Shopping Cart & Dynamic Checkout Calculation" } },
      { src: "/images/portfolio/shopga/login_page.png", caption: { vi: "Trang đăng nhập & đăng ký thành viên", en: "Clean User Login & Authentication Screen" } },
      { src: "/images/portfolio/shopga/shopgaran_footer.png", caption: { vi: "Chân trang và chính sách khách hàng", en: "Footer & Customer Support Policies" } }
    ]
  },
  {
    id: "gabby",
    title: "Uy Vu Company - Gabby Brand",
    subtitle: "Packaging Design, Media Photography & Advertising",
    category: "marketing",
    categoryLabel: { vi: "Thiết kế bao bì & Sản phẩm", en: "Packaging & Commercial Design" },
    coverImage: "/images/portfolio3.jpg",
    period: "2023",
    clientOrOrg: "Uy Vu Trading & Media Co.",
    tags: ["Product Photography", "Packaging Design", "Standee", "Canva", "Photoshop", "Social Media"],
    overview: {
      vi: "Thiết kế bao bì thương mại, sản xuất hình ảnh sản phẩm chụp thực tế, standee quảng cáo điểm bán và các bộ ấn phẩm hoạt hình bản quyền (Disney Elsa, Lotso Bear, Gabby) cho thị trường tiêu dùng.",
      en: "Commercial product packaging design, studio product photography, retail point-of-sale standees, and licensed character merchandise creative collateral (Disney Elsa, Lotso, Gabby brand lines)."
    },
    highlights: {
      vi: [
        "Thiết kế đồ họa bao bì, nhãn dán chai lọ, túi hộp mỹ phẩm và quà tặng thương mại.",
        "Chụp ảnh sản phẩm thực tế, xử lý ánh sáng và hậu kỳ màu sắc phục vụ quảng cáo sàn thương mại điện tử.",
        "Thiết kế Standee kích thước lớn tại các hội chợ và gian hàng siêu thị.",
        "Phát triển hình ảnh nhân vật Lotso, Elsa theo chuẩn nhận diện thương hiệu."
      ],
      en: [
        "Crafted retail packaging, cosmetic bottle labels, merchandise gift boxes, and hangtags.",
        "Conducted product photoshoot sessions, light balancing, and high-end retouching for e-commerce.",
        "Produced large-format standee banners for retail pop-up stores and exhibition booths.",
        "Adapted beloved IP assets (Elsa, Lotso Bear) into engaging consumer promotional packs."
      ]
    },
    gallery: [
      { src: "/images/portfolio/gabby/portfolio3.jpg", caption: { vi: "Tổng quan các dự án thiết kế cho Uy Vu Company", en: "Uy Vu Company Design Portfolio Overview" } },
      { src: "/images/portfolio/gabby/gabby1.jpg", caption: { vi: "Thiết kế bao bì và hình ảnh sản phẩm thương mại", en: "Commercial Packaging & Merchandise Graphics" } },
      { src: "/images/portfolio/gabby/gabby2.jpg", caption: { vi: "Standee quảng cáo trưng bày tại điểm bán", en: "Retail POS Advertising Standee" } },
      { src: "/images/portfolio/gabby/elsa.png", caption: { vi: "Bao bì sản phẩm chủ đề Elsa Frozen", en: "Frozen Elsa Themed Product Packaging" } },
      { src: "/images/portfolio/gabby/lotso.png", caption: { vi: "Thiết kế phụ kiện nhân vật Lotso Bear", en: "Lotso Bear Character Merchandise Graphic" } },
      { src: "/images/portfolio/gabby/gabby5.jpg", caption: { vi: "Bộ ấn phẩm quảng cáo mạng xã hội", en: "Social Media Campaign Post Creatives" } },
      { src: "/images/portfolio/gabby/gabby 7.jpg", caption: { vi: "Banner chào xuân và khuyến mãi bán lẻ", en: "Seasonal Retail Promotion Banner" } }
    ]
  },
  {
    id: "asiavina",
    title: "AsiaVina Fans E-Commerce",
    subtitle: "WordPress & PHP Commercial Catalog & Showcase",
    category: "ecommerce",
    categoryLabel: { vi: "Website Doanh nghiệp", en: "Corporate & E-Commerce Web" },
    coverImage: "/images/asiavinafans.jpg",
    period: "2022 — 2023",
    clientOrOrg: "AsiaVina Fans",
    tags: ["WordPress", "PHP", "CSS3", "JavaScript", "SEO", "Responsive UI"],
    overview: {
      vi: "Website giới thiệu thương hiệu và danh mục thiết bị quạt điện AsiaVina, tích hợp tra cứu thông số kỹ thuật, hệ thống đại lý phân phối, chính sách bảo hành và bộ lọc sản phẩm trực quan.",
      en: "An official corporate product catalog and distributor showcase for AsiaVina cooling equipment, featuring technical specification sheets, dealer locator, warranty services, and interactive product filtering."
    },
    highlights: {
      vi: [
        "Tùy biến giao diện WordPress chuyên nghiệp theo màu cờ sắc áo thương hiệu AsiaVina.",
        "Tối ưu hóa tốc độ tải trang, cấu trúc chuẩn SEO on-page và tương thích hoàn hảo trên di động.",
        "Trang chi tiết sản phẩm hiển thị đầy đủ thông số công suất, chế độ gió, phụ kiện thay thế.",
        "Trang giới thiệu công ty, trang khuyến mãi và hệ thống biểu mẫu liên hệ đặt hàng đại lý."
      ],
      en: [
        "Engineered a customized WordPress theme aligned strictly with AsiaVina corporate brand guidelines.",
        "Optimized page load speed, on-page SEO semantics, and mobile responsive typography.",
        "Built detailed product spec sheets highlighting airflow velocity, motor wattage, and warranty.",
        "Created an integrated dealer locator, campaign landing pages, and B2B inquiry forms."
      ]
    },
    gallery: [
      { src: "/images/portfolio/asia/fans-header.png", caption: { vi: "Đầu trang và Menu điều hướng thương hiệu", en: "Header Navigation & Brand Identity Bar" } },
      { src: "/images/portfolio/asia/fans-products-page.png", caption: { vi: "Danh mục sản phẩm quạt điện AsiaVina", en: "Product Catalog Grid & Category Filter" } },
      { src: "/images/portfolio/asia/fans-productdetail.png", caption: { vi: "Trang thông số kỹ thuật chi tiết quạt cây", en: "Detailed Product Specifications Sheet" } },
      { src: "/images/portfolio/asia/fans-pomotion-page.png", caption: { vi: "Trang chiến dịch khuyến mãi theo mùa", en: "Seasonal Promotional Campaign Landing" } },
      { src: "/images/portfolio/asia/fans-stores-page.png", caption: { vi: "Hệ thống showroom và đại lý phân phối", en: "Dealer Showrooms & Distribution Network" } },
      { src: "/images/portfolio/asia/fans-aboutpage.png", caption: { vi: "Trang giới thiệu lịch sử và chất lượng thương hiệu", en: "Brand Story & Quality Assurance Page" } }
    ]
  },
  {
    id: "freelance-brand",
    title: "Blue Tea & Creative Identity",
    subtitle: "Brand Identity, Menu System & Print Signage",
    category: "design",
    categoryLabel: { vi: "Nhận diện & F&B", en: "Brand Identity & F&B" },
    coverImage: "/images/freelance_img.jpg",
    period: "2022 — 2023",
    clientOrOrg: "Blue Tea Cafe & Freelance Clients",
    tags: ["F&B Menu Design", "Outdoor Signage", "Business Cards", "Typography", "Illustrator"],
    overview: {
      vi: "Dự án thiết kế bộ nhận diện thương hiệu cho quán trà sữa & cafe Blue Tea: Thiết kế menu đồ uống sang trọng, biển hiệu cửa hàng ngoài trời, danh thiếp và các ấn phẩm in ấn quảng bá.",
      en: "End-to-end visual identity and print design project for Blue Tea specialty cafe, featuring bespoke beverage menu layouts, storefront outdoor signage, business cards, and marketing collateral."
    },
    highlights: {
      vi: [
        "Thiết kế bố cục menu đồ uống hiện đại, phối màu xanh ngọc tươi mát và phân cấp mức giá rõ ràng.",
        "Bản vẽ thi công biển hiệu mặt tiền và hộp đèn thu hút khách hàng buổi tối.",
        "Card visit ép kim sang trọng và nhãn ly dán cốc thương hiệu.",
        "Các sản phẩm đồ họa freelance khác cho đối tác thương mại vừa và nhỏ."
      ],
      en: [
        "Crafted modern beverage menu typography with clear price hierarchy and fresh color scheme.",
        "Created outdoor illuminated storefront signage and lightbox specs for night visibility.",
        "Designed tactile business cards and branded takeaway cup sleeve graphics.",
        "Delivered diverse custom print design assets for small businesses and commercial partners."
      ]
    },
    gallery: [
      { src: "/images/portfolio/freelance/blue tea.jpg", caption: { vi: "Thiết kế menu đồ uống chính Blue Tea", en: "Blue Tea Main Beverage Menu Layout" } },
      { src: "/images/portfolio/freelance/blue tea 2.jpg", caption: { vi: "Thiết kế mặt sau menu và topping", en: "Menu Reverse Side & Topping Selections" } },
      { src: "/images/portfolio/freelance/free1.jpg", caption: { vi: "Bản vẽ phối cảnh biển hiệu cửa hàng", en: "Storefront Facade Signage Concept" } },
      { src: "/images/portfolio/freelance/free2.jpg", caption: { vi: "Ấn phẩm card visit và nhận diện cá nhân", en: "Business Card & Identity Mockup" } },
      { src: "/images/portfolio/freelance/free3.jpg", caption: { vi: "Banner khuyến mãi đồ uống khai trương", en: "Opening Day Drink Promotion Banner" } },
      { src: "/images/portfolio/freelance/free4.jpg", caption: { vi: "Hình ảnh thương hiệu trên ấn phẩm quà tặng", en: "Branded Promotional Print Asset" } }
    ]
  }
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: "mac-usa-one-exp",
    company: "MAC USA One",
    role: {
      vi: "Marketing Support Executive",
      en: "Marketing Support Executive"
    },
    rank: {
      vi: "Senior & Trainer",
      en: "Senior & Trainer"
    },
    period: {
      vi: "08/2022 — Hiện tại",
      en: "Aug 2022 — Present"
    },
    location: {
      vi: "Hoa Kỳ & Việt Nam (Hỗ trợ Khách hàng Tiệm Nails & Nhà Hàng)",
      en: "United States & Vietnam (Supporting US Nails & Restaurants)"
    },
    type: "fulltime",
    typeLabel: { vi: "Toàn thời gian · Senior & Trainer", en: "Full-time · Senior & Trainer" },
    isCurrent: true,
    skills: [
      "Marketing Management",
      "Social Media (Google Map, Apple Map, Yelp, Facebook, Instagram, Twitter)",
      "Website (WordPress, HTML, CSS, JS)",
      "Payment Gateway APIs (Authorize.net, PayPal - Deposit & Gift Card)",
      "Merchant Services (Quick Support)",
      "Hardware (POS License, Quick Support, Import Data)",
      "System Admin (Domain, SSL, VPS, DNS, Bitvise)",
      "Designing (Canva, Photoshop, Illustrator)",
      "Software Technical Support",
      "New Staff Training"
    ],
    responsibilities: {
      vi: [
        "Hỗ trợ lĩnh vực quản lý và vận hành cho khách hàng là các tiệm Nails và ngành Nhà Hàng tại Mỹ.",
        "Đưa plan và tư vấn chiến lược marketing, tối ưu doanh thu cho khách hàng và bên phía team nội bộ.",
        "Đầu mối phối hợp nhịp nhàng giữa các bộ phận: Team phần cứng (Hardware / POS License), Merchant Support Team, và Design Team.",
        "Hỗ trợ tiệm tạo và quản lý các trang Social Media (Google Map, Apple Map, Yelp, Facebook, Instagram, Twitter...) theo hướng chuyên nghiệp và tối ưu nhất.",
        "Lấy API từ Authorize.net hoặc Paypal để đấu nối, tích hợp phương thức thanh toán cho website (Chức năng Deposit online, Bán Gift Card Online chuyên dùng cho các tiệm Nails).",
        "Quản lý Domain, SSL, VPS, DNS và sử dụng phần mềm Bitvise để quản lý SSL/TLS, Domain, Site, VPS hệ thống.",
        "Giải đáp và hỗ trợ nhanh chóng về kỹ thuật phần mềm, giải quyết các vấn đề liên quan pháp lý tiệm, hỗ trợ dịch vụ thanh toán (Merchant Services Quick Support), nhập dữ liệu POS (Import Data) và tư vấn chạy Ads.",
        "Trực tiếp hỗ trợ training, hướng dẫn nghiệp vụ và kèm cặp các nhân sự mới của công ty."
      ],
      en: [
        "Delivering business management and operations support for clients who are US-based Nail Salons and Restaurants.",
        "Formulating actionable marketing plans and providing strategic consultations for clients and internal cross-functional teams.",
        "Serving as the key operational bridge coordinating Hardware (POS License), Merchant Support, and Design teams.",
        "Supporting stores in creating, standardizing, and managing Social Media channels (Google Map, Apple Map, Yelp, Facebook, Instagram, Twitter) professionally and optimally.",
        "Integrating payment gateway APIs from Authorize.net or PayPal to connect and embed payment solutions for websites (Online Deposit features and Online Gift Card sales specialized for Nail Salons).",
        "Managing Domain, SSL, VPS, DNS and utilizing Bitvise client to manage SSL/TLS certificates, domains, websites, and VPS nodes.",
        "Troubleshooting software technical issues, resolving legal/compliance inquiries, handling Merchant Services quick support, POS data onboarding, and ad campaign advisory.",
        "Directly conducting training, onboarding, and practical mentoring for new staff members within the team."
      ]
    },
    reference: {
      title: { vi: "Người Tham Chiếu", en: "Professional Reference" },
      name: "Quản Lý / Người Tham Chiếu MAC USA One",
      role: { vi: "Operations Manager / Supervisor", en: "Operations Manager / Supervisor" },
      company: "MAC USA One",
      phone: "0564996472 (Liên hệ xác thực)",
      relationship: { vi: "Người quản lý trực tiếp & Xác nhận kinh nghiệm làm việc", en: "Direct Manager & Employment Verification Reference" }
    }
  },
  {
    id: "mindx-exp",
    company: "MindX Technology School",
    role: {
      vi: "Giảng viên CNTT & Chuyên viên Thiết kế Đồ họa",
      en: "IT Lecturer & Graphic Designer"
    },
    period: {
      vi: "04/2021 — 08/2023",
      en: "Apr 2021 — Aug 2023"
    },
    location: {
      vi: "TP. Hồ Chí Minh",
      en: "Ho Chi Minh City"
    },
    type: "fulltime",
    typeLabel: { vi: "Toàn thời gian", en: "Full-time" },
    skills: ["Giảng dạy Lập trình", "Python / Web Basics", "Photoshop", "Illustrator", "Event Key Visuals"],
    responsibilities: {
      vi: [
        "Trực tiếp giảng dạy và truyền đạt kiến thức công nghệ thông tin, tư duy thuật toán và lập trình cho học viên (đã đào tạo & tốt nghiệp 80+ học viên).",
        "Thiết kế toàn bộ ấn phẩm đồ họa, banner, backdrop, standee phục vụ các sự kiện trọng đại tại các cơ sở trường.",
        "Chỉnh sửa hình ảnh, biên tập video và hỗ trợ sản xuất học liệu số, tài liệu quảng bá các khóa học.",
        "Lên ý tưởng sáng tạo visual concept cho các hoạt động ngoại khóa, hackathon và lễ tốt nghiệp."
      ],
      en: [
        "Instructing and delivering core information technology, computational thinking, and web programming to students (mentored & graduated 80+ students).",
        "Designing corporate graphic assets, stage backdrops, standees, and banners for major institutional events.",
        "Editing photos, crafting short-form videos, and assembling digital course promotional materials.",
        "Brainstorming creative visual concepts for hackathons, workshops, and graduation ceremonies."
      ]
    }
  },
  {
    id: "uyvu-exp",
    company: "Công ty TNHH Uy Vũ",
    role: {
      vi: "Social Marketing - Thiết kế Đồ họa & Biên tập Video",
      en: "Social Marketing, Designer & Video Editor"
    },
    period: {
      vi: "02/2023 — 06/2023",
      en: "Feb 2023 — Jun 2023"
    },
    location: {
      vi: "Quận 10, TP. Hồ Chí Minh",
      en: "District 10, Ho Chi Minh City"
    },
    type: "contract",
    typeLabel: { vi: "Hợp đồng", en: "Contract" },
    skills: ["Product Photography", "Packaging Design", "Premiere", "Canva", "Social Ads"],
    responsibilities: {
      vi: [
        "Tổ chức chụp ảnh sản phẩm thương mại, quay dựng video giới thiệu tính năng sản phẩm của công ty.",
        "Thiết kế đồ họa thương hiệu, banner mạng xã hội, standee trưng bày điểm bán, namecard và bao bì đóng gói.",
        "Phối hợp cùng đội ngũ marketing tối ưu hóa hình ảnh quảng cáo Facebook & TikTok Ads tăng tỷ lệ chuyển đổi."
      ],
      en: [
        "Conducted studio product photoshoots and produced engaging short product showcase videos.",
        "Designed promotional graphics, social media ads, retail standees, printing cards, and packaging mockups.",
        "Collaborated with marketing colleagues to A/B test ad creatives, boosting conversion on digital ad channels."
      ]
    }
  },
  {
    id: "otrafy-exp",
    company: "Otrafy Company",
    role: {
      vi: "Kỹ sư Kiểm thử Phần mềm (QA Engineer)",
      en: "Quality Assurance Engineer"
    },
    period: {
      vi: "10/2022 — 03/2023",
      en: "Oct 2022 — Mar 2023"
    },
    location: {
      vi: "Làm việc từ xa (Remote)",
      en: "Remote Working"
    },
    type: "contract",
    typeLabel: { vi: "Remote QA", en: "Remote QA" },
    skills: ["Manual Testing", "Test Case Design", "API Testing (Postman)", "Jira", "Database Validation"],
    responsibilities: {
      vi: [
        "Phân tích tài liệu yêu cầu phần mềm (SRS), phát hiện sớm các kịch bản bất thường và rủi ro logic.",
        "Thiết lập bộ checklist và test case kiểm thử chức năng, giao diện và tính khả dụng của sản phẩm.",
        "Phân tích ảnh hưởng của lỗi tới cơ sở dữ liệu và hiệu năng vận hành của hệ thống.",
        "Ghi nhận, phân loại bug chi tiết trên hệ thống Jira/Trello và lập báo cáo chất lượng release."
      ],
      en: [
        "Reviewed functional software requirements to uncover logical edge cases and ambiguity early.",
        "Constructed comprehensive test scenarios, checklists, and regression suites across user journeys.",
        "Assessed defect impacts on database integrity, query consistency, and user experience.",
        "Logged and tracked defects on Jira, publishing sprint QA summaries and release health reports."
      ]
    }
  },
  {
    id: "playground-exp",
    company: "PlayGround Company",
    role: {
      vi: "Kỹ sư Quản lý Chất lượng (QC Engineer)",
      en: "Quality Control Engineer"
    },
    period: {
      vi: "03/2022 — 10/2022",
      en: "Mar 2022 — Oct 2022"
    },
    location: {
      vi: "TP. Hồ Chí Minh",
      en: "Ho Chi Minh City"
    },
    type: "fulltime",
    typeLabel: { vi: "Toàn thời gian", en: "Full-time" },
    skills: ["Quality Control", "Usability Testing", "Regression Testing", "Issue Tracking"],
    responsibilities: {
      vi: [
        "Thực thi quy trình kiểm thử chất lượng sản phẩm tương tác đa phương tiện trước khi triển khai thực tế.",
        "Thực hiện kiểm thử hồi quy (regression testing) sau mỗi chu kỳ cập nhật tính năng.",
        "Phối hợp trực tiếp với lập trình viên để tái hiện lỗi, giải thích nguyên nhân và thẩm định bản vá."
      ],
      en: [
        "Executed end-to-end quality control procedures for interactive products prior to production deploy.",
        "Conducted thorough regression testing across multiple browsers and device resolutions.",
        "Partnered closely with engineering teams to reproduce complex defects and verify patches."
      ]
    }
  },
  {
    id: "alta-exp",
    company: "AltaSoftware Company",
    role: {
      vi: "Lập trình viên Web (Web Developer)",
      en: "Web Developer"
    },
    period: {
      vi: "08/2021 — 03/2022",
      en: "Aug 2021 — Mar 2022"
    },
    location: {
      vi: "Làm việc từ xa (Remote)",
      en: "Remote Working"
    },
    type: "contract",
    typeLabel: { vi: "Lập trình Web", en: "Web Engineering" },
    skills: ["PHP", "WordPress", "JavaScript", "HTML5/CSS3", "Responsive Web"],
    responsibilities: {
      vi: [
        "Lập trình phát triển các website thương mại và cổng thông tin doanh nghiệp từ bản vẽ thiết kế Figma/PSD.",
        "Tùy biến theme và plugin trên nền tảng PHP - WordPress theo nghiệp vụ đặc thù của khách hàng.",
        "Tối ưu hóa mã nguồn frontend đảm bảo tải nhanh, mượt mà và hiển thị chuẩn xác trên mobile."
      ],
      en: [
        "Developed full-featured commercial and portal websites translated precisely from Figma/PSD mockups.",
        "Customized WordPress PHP themes, templates, and plugins to meet unique client workflows.",
        "Optimized frontend bundle sizes and responsive styling across major mobile browsers."
      ]
    }
  },
  {
    id: "freelance-exp",
    company: "Freelancer Studio",
    role: {
      vi: "Thiết kế Đồ họa & Nhận diện Thương hiệu Tự do",
      en: "Freelance Graphic & Brand Identity Designer"
    },
    period: {
      vi: "11/2022 — 04/2023",
      en: "Nov 2022 — Apr 2023"
    },
    location: {
      vi: "Làm việc từ xa & TP.HCM",
      en: "Remote & Ho Chi Minh City"
    },
    type: "freelance",
    typeLabel: { vi: "Freelance", en: "Freelance" },
    skills: ["Brand Identity", "Menu Design", "Outdoor Signage", "Print Materials"],
    responsibilities: {
      vi: [
        "Tư vấn và thiết kế bộ nhận diện thương hiệu hoàn chỉnh: Logo, Menu đồ uống, Card visit, Bảng hiệu cửa hàng.",
        "Hỗ trợ kỹ thuật file in đạt chuẩn màu sắc CMYK và độ phân giải cao cho các xưởng in ấn."
      ],
      en: [
        "Consulted and delivered complete brand packs: Logos, F&B drink menus, business cards, and outdoor signboards.",
        "Prepared prepress CMYK production-ready vector files for commercial print facilities."
      ]
    }
  },
  {
    id: "bachkhoa-exp",
    company: "Trường Cao đẳng Bách Khoa",
    role: {
      vi: "Quản trị viên Hệ thống Phòng máy Tính (Lab Administrator)",
      en: "Computer Lab System Administrator"
    },
    period: {
      vi: "01/2023 — 05/2023",
      en: "Jan 2023 — May 2023"
    },
    location: {
      vi: "TP. Hồ Chí Minh",
      en: "Ho Chi Minh City"
    },
    type: "contract",
    typeLabel: { vi: "Quản trị hệ thống", en: "SysAdmin" },
    skills: ["System Maintenance", "LAN Network", "OS & Software Deployment"],
    responsibilities: {
      vi: [
        "Quản trị, kiểm tra kết nối mạng LAN và bảo trì định kỳ hệ thống máy tính phục vụ giảng dạy.",
        "Cài đặt phần mềm, môi trường thực hành lập trình và xử lý sự cố kỹ thuật tức thì cho giảng viên."
      ],
      en: [
        "Supervised local LAN network connections, server nodes, and scheduled maintenance routines.",
        "Deployed academic development environments and resolved live workstation technical issues."
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "web-dev",
    title: { vi: "Website Development (Back-end & Front-end Skills)", en: "Website Development (Back-end & Front-end Skills)" },
    description: {
      vi: "Xây dựng website chuẩn SEO, responsive mượt mà và tương tác thời gian thực.",
      en: "Building SEO-optimized, highly responsive, and real-time interactive web applications."
    },
    skills: [
      { name: "HTML5 / CSS3 / SCSS", category: "frontend" },
      { name: "JavaScript (ES6+) & TypeScript", category: "frontend" },
      { name: "ReactJS & Modern Frontend Basics", category: "frontend" },
      { name: "TailwindCSS & Responsive Web Design", category: "frontend" },
      { name: "PHP & Laravel Framework", category: "backend" },
      { name: "WordPress CMS & Custom Themes", category: "cms" },
      { name: "Python & Django Basics", category: "backend" },
      { name: "SQL Server & MySQL Database", category: "database" }
    ],
    tools: ["VS Code", "Bitvise", "Git / GitHub", "Vite", "Node.js", "XAMPP", "NPM"]
  },
  {
    id: "marketing-operations",
    title: { vi: "Vận hành Khách hàng & Quản trị Hệ thống", en: "Client Operations & System Admin" },
    description: {
      vi: "Quản trị dịch vụ khách hàng US (Nails & Nhà hàng), hỗ trợ POS, hạ tầng Domain/SSL/VPS và đào tạo nhân sự.",
      en: "US client management (Nails & Restaurants), POS merchant support, Domain/SSL/VPS infrastructure, and staff training."
    },
    skills: [
      { name: "Marketing Management cho Tiệm Nails & Nhà hàng", category: "management" },
      { name: "Quản lý Social Media (Google Map, Apple Map, Yelp, FB, IG, Twitter)", category: "social" },
      { name: "Quản lý Domain, SSL, VPS, DNS", category: "sysadmin" },
      { name: "Giải đáp & Hỗ trợ Kỹ thuật Phần mềm", category: "support" },
      { name: "Merchant Services (Quick Support)", category: "merchant" },
      { name: "Hardware (POS License, Quick Support, Import Data)", category: "pos" },
      { name: "Đào tạo & Hướng dẫn Nhân sự Mới (Trainer)", category: "training" }
    ],
    tools: ["Bitvise (quản lý SSL/TLS, Domain, Site, VPS)", "Google Business Profile", "Apple Maps Connect", "Yelp for Business", "Meta Business Suite", "POS Terminals"]
  },
  {
    id: "design-video",
    title: { vi: "Thiết kế Đồ họa & Biên tập Video", en: "Graphic Design & Video Editing" },
    description: {
      vi: "Sáng tạo visual ấn tượng, thiết kế nhận diện thương hiệu, bao bì và dựng video clip.",
      en: "Crafting eye-catching visuals, brand identities, retail packaging, and video production."
    },
    skills: [
      { name: "Adobe Photoshop (PTS)", category: "design" },
      { name: "Adobe Illustrator (AI)", category: "design" },
      { name: "Figma UI/UX Design", category: "ui" },
      { name: "Canva Pro Design", category: "design" },
      { name: "Adobe Premiere Pro", category: "video" },
      { name: "CapCut & Social Video", category: "video" },
      { name: "Chụp ảnh & Bố cục ánh sáng sản phẩm", category: "photo" }
    ],
    tools: ["Photoshop", "Illustrator", "Figma", "Premiere Pro", "CapCut", "Canva", "DSLR Camera"]
  },
  {
    id: "qa-testing",
    title: { vi: "Kiểm thử Phần mềm (QA/QC)", en: "Software QA / QC Testing" },
    description: {
      vi: "Đảm bảo tính ổn định, trải nghiệm người dùng không lỗi và bảo mật hệ thống.",
      en: "Guaranteeing software reliability, bug-free UX, and system functionality."
    },
    skills: [
      { name: "Đọc & Phân tích yêu cầu (SRS Review)", category: "qa" },
      { name: "Thiết kế Checklist & Test Case", category: "qa" },
      { name: "Manual Testing & Usability Testing", category: "qa" },
      { name: "API Testing bằng Postman", category: "qa" },
      { name: "Báo cáo & Phân loại Bug (Jira / Trello)", category: "qa" }
    ],
    tools: ["Postman", "Jira", "Trello", "Confluence", "Chrome DevTools", "TestLink"]
  },
  {
    id: "digital-marketing",
    title: { vi: "Digital Marketing & Truyền thông Căn bản", en: "Digital Marketing & Basic SEO" },
    description: {
      vi: "Kiến thức căn bản về quảng cáo Facebook Ads, SEO Google và quản trị kênh truyền thông số.",
      en: "Fundamental Facebook Ads knowledge, basic Google & Website SEO, and fanpage management."
    },
    skills: [
      { name: "Kiến thức căn bản Facebook Ads", category: "marketing" },
      { name: "Kiến thức căn bản SEO Google & Website", category: "seo" },
      { name: "Quản trị & Phát triển Fanpage", category: "marketing" },
      { name: "Content Strategy & Copywriting", category: "marketing" },
      { name: "Đọc báo cáo chỉ số & Doanh số", category: "analytics" },
      { name: "Tiếng Anh đọc hiểu tài liệu chuyên ngành", category: "language" }
    ],
    tools: ["Meta Business Suite", "Google Analytics", "Facebook Ads Manager", "MS Excel", "Office 365"]
  }
];
