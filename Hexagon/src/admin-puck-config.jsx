import React from 'react';
import Header from './components/header';
import TrangChu from './components/trangchu';
import GioiThieu from './components/gioithieu';
import DichVu from './components/dichvu';
import TinTuc from './components/tintuc';
import CarouselAnimation from './components/carousel-animation';
import Footer from './components/footer';

export function createPuckConfig(options = {}) {
    const FLAGS = {
        VI: "/images/VI_icon.webp",
        EN: "/images/EN_icon.svg",
        MIX: "/images/MIX_icon.jpg",
        
    };
    const {

        project,

        translations = [],

        onChangeLanguage,

    } = options;

    return {
        components: {
            Header: {
                label: "Header",

                fields: {
                    language: {
                        type: "select",
                        label: "Language",
                        options: [
                            {
                                label: "Vietnamese",
                                value: "VI",
                            },
                            {
                                label: "English",
                                value: "EN",
                            },
                        ],
                    },

                    logo: {
                        type: "text",
                        label: "Logo URL",
                    },

                    logoLink: {
                        type: "text",
                        label: "Logo Link",
                    },

                    websiteName: {
                        type: "text",
                        label: "Website Name",
                        contentEditable: true,
                    },

                    backgroundFrom: {
                        type: "text",
                        label: "Gradient From",
                    },

                    backgroundTo: {
                        type: "text",
                        label: "Gradient To",
                    },

                    textColor: {
                        type: "text",
                        label: "Text Color",
                    },

                    hoverTextColor: {
                        type: "text",
                        label: "Hover Text Color",
                    },

                    showLanguageSwitcher: {
                        type: "radio",
                        label: "Show Language Switcher",
                        options: [
                            {
                                label: "Show",
                                value: true,
                            },
                            {
                                label: "Hide",
                                value: false,
                            },
                        ],
                    },

                    menu: {
                        type: "array",
                        label: "Menu",

                        arrayFields: {
                            title: {
                                type: "text",
                                label: "Title",
                                contentEditable: true,
                            },

                            link: {
                                type: "text",
                                label: "Link",
                            },
                        },
                    },
                },

                defaultProps: {
                    language: "VI",

                    logo: "/images/logo.png",

                    logoLink: "#",

                    websiteName: "HEXAGON",

                    backgroundFrom: "#1a6b49",

                    backgroundTo: "#1a6b49",

                    textColor: "#ffffff",

                    hoverTextColor: "#facc15",

                    showLanguageSwitcher: true,

                    menu: [
                        {
                            title: "Trang chủ",
                            link: "#",
                        },
                        {
                            title: "Giới thiệu",
                            link: "#",
                        },
                        {
                            title: "Dịch Vụ",
                            link: "#",
                        },
                        {
                            title: "Hỗ trợ",
                            link: "#",
                        },
                        {
                            title: "Liên hệ",
                            link: "#",
                        },
                    ],
                },

                render: (props) => (
                    <Header
                        key={`${project?.id}-${props.language}`}
                        {...props}
                        language={project?.language || props.language}
                        projectId={project?.id}
                        translationGroup={project?.translationGroup}
                        translations={translations}
                        onChangeLanguage={onChangeLanguage}
                        viFlag={FLAGS.VI}
                        enFlag={FLAGS.EN}
                        mixFlag={FLAGS.MIX}
                    />
                ),
            },

            TrangChu: {
                label: "Trang Chủ",

                fields: {
                    language: {
                        type: "select",
                        label: "Language",
                        options: [
                            {
                                label: "Vietnamese",
                                value: "VI",
                            },
                            {
                                label: "English",
                                value: "EN",
                            },
                        ],
                    },

                    // Background

                    backgroundHeight: {
                        type: "number",
                        label: "Background Height",
                    },

                    backgroundFrom: {
                        type: "text",
                        label: "Background From",
                    },

                    backgroundTo: {
                        type: "text",
                        label: "Background To",
                    },

                    // Badge
                    badgeText: {
                        type: "text",
                        label: "Badge Text",
                        contentEditable: true,
                    },

                    badgeFontSize: {
                        type: "number",
                        label: "Badge Font Size",
                    },

                    badgeColor: {
                        type: "text",
                        label: "Badge Color",
                    },

                    badgeBorderColor: {
                        type: "text",
                        label: "Badge Border Color",
                    },

                    // Typewriter
                    typewriterTexts: {
                        type: "array",
                        label: "Typewriter Texts",

                        arrayFields: {
                            text: {
                                type: "text",
                                label: "Text",
                                contentEditable: true,
                            },
                        },
                    },

                    typewriterFontSize: {
                        type: "number",
                        label: "Typewriter Font Size",
                    },

                    typewriterColor: {
                        type: "text",
                        label: "Typewriter Color",
                    },

                    typewriterTypingSpeed: {
                        type: "number",
                        label: "Typing Speed",
                    },

                    typewriterDeletingSpeed: {
                        type: "number",
                        label: "Deleting Speed",
                    },

                    typewriterDelay: {
                        type: "number",
                        label: "Delay",
                    },

                    // Title
                    title: {
                        type: "text",
                        label: "Title",
                        contentEditable: true,
                    },

                    titleFontSize: {
                        type: "number",
                        label: "Title Font Size",
                    },

                    titleGradientFrom: {
                        type: "text",
                        label: "Title Gradient From",
                    },

                    titleGradientMiddle: {
                        type: "text",
                        label: "Title Gradient Middle",
                    },

                    titleGradientTo: {
                        type: "text",
                        label: "Title Gradient To",
                    },

                    // Description
                    description: {
                        type: "textarea",
                        label: "Description",
                    },

                    descriptionFontSize: {
                        type: "number",
                        label: "Description Font Size",
                    },

                    descriptionColor: {
                        type: "text",
                        label: "Description Color",
                    },

                    // Image
                    image: {
                        type: "text",
                        label: "Image",
                    },

                    // Buttons
                    buttons: {
                        type: "array",
                        label: "Buttons",

                        arrayFields: {
                            text: {
                                type: "text",
                                label: "Button Text",
                            },

                            link: {
                                type: "text",
                                label: "Button Link",
                            },

                            variant: {
                                type: "select",
                                label: "Variant",

                                options: [
                                    {
                                        label: "Primary",
                                        value: "primary",
                                    },
                                    {
                                        label: "Secondary",
                                        value: "secondary",
                                    },
                                ],
                            },
                        },
                    },

                    buttonFontSize: {
                        type: "number",
                        label: "Button Font Size",
                    },

                    buttonBorderRadius: {
                        type: "number",
                        label: "Button Radius",
                    },

                    buttonPaddingX: {
                        type: "number",
                        label: "Button Padding X",
                    },

                    buttonPaddingY: {
                        type: "number",
                        label: "Button Padding Y",
                    },

                    buttonGradientFrom: {
                        type: "text",
                        label: "Primary Button From",
                    },

                    buttonGradientTo: {
                        type: "text",
                        label: "Primary Button To",
                    },

                    secondaryButtonBackground: {
                        type: "text",
                        label: "Secondary Button Background",
                    },

                    secondaryButtonBorder: {
                        type: "text",
                        label: "Secondary Button Border",
                    },
                },

                defaultProps: {
                    language: "VI",

                    backgroundHeight: 900,
                    backgroundFrom: "#135439",
                    backgroundTo: "#41b57d",

                    badgeText: "Công nghệ tương lai",
                    badgeFontSize: 15,
                    badgeColor: "#f0b000",
                    badgeBorderColor: "#f0b000",

                    typewriterTexts: [
                        {
                            text: "Giải pháp công nghệ",
                        },
                        {
                            text: "Thi công & lắp đặt",
                        },
                        {
                            text: "Dịch vụ CNTT",
                        },
                    ],

                    typewriterFontSize: 55,
                    typewriterColor: "#ffffff",

                    typewriterTypingSpeed: 90,
                    typewriterDeletingSpeed: 40,
                    typewriterDelay: 1800,

                    title: "HEXAGON Solutions",
                    titleFontSize: 55,

                    titleGradientFrom: "#edf7f4",
                    titleGradientMiddle: "#b0e8dc",
                    titleGradientTo: "#f09d30",

                    description:
                        "HEXAGON kiến tạo các giải pháp chuyển đổi số toàn diện, từ phần mềm đến cung cấp các giải pháp internet, thiết bị công nghệ thông tin, giúp doanh nghiệp bứt phá trong kỷ nguyên số.",

                    descriptionFontSize: 15,
                    descriptionColor: "#ffffff",

                    image: "/images/global.webp",

                    buttons: [
                        {
                            text: "Khám phá dịch vụ",
                            link: "#",
                            variant: "primary",
                        },
                        {
                            text: "Liên hệ tư vấn",
                            link: "#",
                            variant: "secondary",
                        },
                    ],

                    buttonFontSize: 18,
                    buttonBorderRadius: 10,
                    buttonPaddingX: 30,
                    buttonPaddingY: 14,

                    buttonGradientFrom: "#fe9a03",
                    buttonGradientTo: "#f2d337",

                    secondaryButtonBackground: "rgba(255,255,255,.15)",
                    secondaryButtonBorder: "rgba(255,255,255,.3)",
                },

                render: (props) => (
                    <TrangChu
                        {...props}
                        typewriterTexts={(props.typewriterTexts || []).map(item => item.text)}
                    />
                ),
            },

            GioiThieu: {
                label: "Giới Thiệu",

                fields: {
                    language: {
                        type: "select",
                        label: "Language",
                        options: [
                            {
                                label: "Vietnamese",
                                value: "VI",
                            },
                            {
                                label: "English",
                                value: "EN",
                            },
                        ],
                    },

                    // =========================
                    // Background
                    // =========================

                    backgroundFrom: {
                        type: "text",
                        label: "Background From",
                    },

                    backgroundTo: {
                        type: "text",
                        label: "Background To",
                    },

                    // =========================
                    // Image
                    // =========================

                    image: {
                        type: "text",
                        label: "Image",
                    },

                    imageBackgroundFrom: {
                        type: "text",
                        label: "Image Background From",
                    },

                    imageBackgroundTo: {
                        type: "text",
                        label: "Image Background To",
                    },

                    imageRotate: {
                        type: "number",
                        label: "Background Rotate",
                    },

                    // =========================
                    // Quote Card
                    // =========================

                    quoteBackground: {
                        type: "text",
                        label: "Quote Background",
                    },

                    quoteShadow: {
                        type: "text",
                        label: "Quote Shadow",
                    },

                    quoteText: {
                        type: "textarea",
                        label: "Quote",
                        contentEditable: true,
                    },

                    quoteAuthor: {
                        type: "text",
                        label: "Quote Author",
                        contentEditable: true,
                    },

                    quoteFontSize: {
                        type: "number",
                        label: "Quote Font Size",
                    },

                    quoteColor: {
                        type: "text",
                        label: "Quote Color",
                    },

                    quoteAuthorFontSize: {
                        type: "number",
                        label: "Author Font Size",
                    },

                    quoteAuthorColor: {
                        type: "text",
                        label: "Author Color",
                    },

                    // =========================
                    // Title
                    // =========================

                    title: {
                        type: "text",
                        label: "Title",
                        contentEditable: true,
                    },

                    titleFontSize: {
                        type: "number",
                        label: "Title Font Size",
                    },

                    titleColor: {
                        type: "text",
                        label: "Title Color",
                    },

                    // =========================
                    // Description
                    // =========================

                    description: {
                        type: "textarea",
                        label: "Description",
                        contentEditable: true,
                    },

                    descriptionFontSize: {
                        type: "number",
                        label: "Description Font Size",
                    },

                    descriptionColor: {
                        type: "text",
                        label: "Description Color",
                    },

                    // =========================
                    // Feature Boxes
                    // =========================

                    boxBackground: {
                        type: "text",
                        label: "Box Background",
                    },

                    boxTitleFontSize: {
                        type: "number",
                        label: "Box Title Font Size",
                    },

                    boxTitleColor: {
                        type: "text",
                        label: "Box Title Color",
                    },

                    boxDescriptionFontSize: {
                        type: "number",
                        label: "Box Description Font Size",
                    },

                    boxDescriptionColor: {
                        type: "text",
                        label: "Box Description Color",
                    },

                    features: {
                        type: "array",
                        label: "Feature Boxes",

                        arrayFields: {

                            title: {
                                type: "text",
                                label: "Title",
                                contentEditable: true,
                            },

                            description: {
                                type: "textarea",
                                label: "Description",
                                contentEditable: true,
                            },

                        },
                    },

                },

                defaultProps: {
                    language: "VI",

                    // Background

                    backgroundFrom: "#ffffff",
                    backgroundTo: "#ffffff",

                    // Image

                    image: "/images/VPX16.jpg",

                    imageBackgroundFrom: "#cffae5",
                    imageBackgroundTo: "#c8faef",

                    imageRotate: 2,

                    // Quote

                    quoteBackground: "#ffffff",

                    quoteShadow: "0 12px 30px rgba(255,215,0,.18)",

                    quoteText:
                        '"Làm ngày, làm đêm, làm thêm ngày nghỉ ^_^"',

                    quoteAuthor: "— HEXAGON CULTURE",

                    quoteFontSize: 15,
                    quoteColor: "#000000",

                    quoteAuthorFontSize: 12,
                    quoteAuthorColor: "#f0b000",

                    // Right

                    title: "Về Hexagon",

                    titleFontSize: 32,
                    titleColor: "#000000",

                    description:
                        "Hexagon Corporation – Công nghệ tiên phong, nơi chúng tôi không ngừng kiến tạo và đổi mới để mang đến những giá trị vượt trội trong kỷ nguyên số. Với tầm nhìn đa chiều và khát vọng vươn tầm, Hexagon tự hào là đối tác tin cậy, đồng hành cùng bạn trên hành trình chinh phục những đỉnh cao công nghệ.",

                    descriptionFontSize: 15,
                    descriptionColor: "#000000",

                    // Feature

                    boxBackground: "#f7fafc",

                    boxTitleFontSize: 21,
                    boxTitleColor: "#1d6b49",

                    boxDescriptionFontSize: 13,
                    boxDescriptionColor: "#000000",

                    features: [
                        {
                            title: "Sứ mệnh",
                            description:
                                "Kiến tạo tương lai số bằng các giải pháp tiên tiến.",
                        },
                        {
                            title: "Tầm nhìn",
                            description:
                                "Trở thành biểu tượng về hệ sinh thái công nghệ đổi mới.",
                        },
                        {
                            title: "Giá trị cốt lõi",
                            description:
                                "Đổi mới - Đồng hành - Tiên phong - Minh bạch.",
                        },
                        {
                            title: "Nền tảng",
                            description:
                                "Hệ sinh thái đa ngành, vững chắc và linh hoạt.",
                        },
                    ],

                },

                render: (props) => (
                    <GioiThieu
                        {...props}
                    />
                ),
            },

            DichVu: {
                label: "Dịch Vụ",

                fields: {
                    language: {
                        type: "select",
                        label: "Language",
                        options: [
                            {
                                label: "Vietnamese",
                                value: "VI",
                            },
                            {
                                label: "English",
                                value: "EN",
                            },
                        ],
                    },

                    // =========================
                    // Background
                    // =========================

                    backgroundFrom: {
                        type: "text",
                        label: "Background From",
                    },

                    backgroundTo: {
                        type: "text",
                        label: "Background To",
                    },

                    // =========================
                    // Section Title
                    // =========================

                    title: {
                        type: "text",
                        label: "Title",
                        contentEditable: true,
                    },

                    titleFontSize: {
                        type: "number",
                        label: "Title Font Size",
                    },

                    titleColor: {
                        type: "text",
                        label: "Title Color",
                    },

                    subtitle: {
                        type: "textarea",
                        label: "Subtitle",
                        contentEditable: true,
                    },

                    subtitleFontSize: {
                        type: "number",
                        label: "Subtitle Font Size",
                    },

                    subtitleColor: {
                        type: "text",
                        label: "Subtitle Color",
                    },

                    // =========================
                    // Card
                    // =========================

                    cardWidth: {
                        type: "number",
                        label: "Card Width",
                    },

                    cardHeight: {
                        type: "number",
                        label: "Card Height",
                    },

                    cardRadius: {
                        type: "number",
                        label: "Card Border Radius",
                    },

                    // =========================
                    // Overlay
                    // =========================

                    overlayFrom: {
                        type: "text",
                        label: "Overlay Gradient From",
                    },

                    overlayTo: {
                        type: "text",
                        label: "Overlay Gradient To",
                    },

                    overlayTitleFontSize: {
                        type: "number",
                        label: "Card Title Font Size",
                    },

                    overlayTitleColor: {
                        type: "text",
                        label: "Card Title Color",
                    },

                    overlayTextFontSize: {
                        type: "number",
                        label: "Overlay Text Font Size",
                    },

                    overlayTextColor: {
                        type: "text",
                        label: "Overlay Text Color",
                    },

                    overlayLinkFontSize: {
                        type: "number",
                        label: "Bottom Text Font Size",
                    },

                    overlayLinkColor: {
                        type: "text",
                        label: "Bottom Text Color",
                    },

                    // =========================
                    // Cards
                    // =========================

                    cards: {
                        type: "array",
                        label: "Cards",

                        arrayFields: {

                            title: {
                                type: "text",
                                label: "Title",
                                contentEditable: true,
                            },

                            image: {
                                type: "text",
                                label: "Background Image",
                            },

                            description: {
                                type: "textarea",
                                label: "Description",
                                contentEditable: true,
                            },

                            moreText: {
                                type: "text",
                                label: "Bottom Text",
                                contentEditable: true,
                            },

                            link: {
                                type: "text",
                                label: "Link",
                            },

                        },
                    },

                },

                defaultProps: {
                    language: "VI",

                    // Background

                    backgroundFrom: "#f7fafc",
                    backgroundTo: "#f7fafc",

                    // Section

                    title: "Lĩnh vực hoạt động",

                    titleFontSize: 32,

                    titleColor: "#000000",

                    subtitle:
                        "Tại Hexagon, chúng tôi tập trung phát triển hệ sinh thái công nghệ toàn diện, bao gồm:",

                    subtitleFontSize: 17,

                    subtitleColor: "#000000",

                    // Card

                    cardWidth: 290,

                    cardHeight: 400,

                    cardRadius: 10,

                    // Overlay

                    overlayFrom: "#fffaff",

                    overlayTo: "#ffddba",

                    overlayTitleFontSize: 20,

                    overlayTitleColor: "#f0b000",

                    overlayTextFontSize: 13,

                    overlayTextColor: "#000000",

                    overlayLinkFontSize: 14,

                    overlayLinkColor: "#3071fc",

                    // Cards

                    cards: [

                        {
                            title: "Giải pháp công nghệ",

                            image: "/public/images/dv1.jpg",

                            description:
                                "Phát triển và triển khai các giải pháp phần mềm tùy chỉnh, tối ưu vận hành doanh nghiệp, nâng cao hiệu suất, đáp ứng linh...",

                            moreText: "Xem chi tiết ->",

                            link: "#",
                        },

                        {
                            title: "Giải pháp thi công & lắp đặt",

                            image: "/public/images/dv2.jpg",

                            description:
                                "Tư vấn chiến lược chuyển đổi số toàn diện, giúp doanh nghiệp tối ưu quy trình, nâng cao trải nghiệm khách hàng và tăng...",

                            moreText: "Xem chi tiết ->",

                            link: "#",
                        },

                        {
                            title: "Cung cấp thiết bị CNTT",

                            image: "/public/images/dv3.jpg",

                            description:
                                "Cung cấp giải pháp trí tuệ nhân tạo và phân tích dữ liệu, hỗ trợ ra quyết định thông minh, tự động hóa quy trình và kh...",

                            moreText: "Xem chi tiết ->",

                            link: "#",
                        },

                        {
                            title: "Dịch vụ Công nghệ thông tin",

                            image: "/public/images/dv4.jpg",

                            description:
                                "Thi công và lắp đặt hệ thống camera giám sát, mạng wifi chuyên nghiệp, đảm bảo an ninh, ổn định kết nối và phù hợp với mọi...",

                            moreText: "Xem chi tiết ->",

                            link: "#",
                        },

                    ],

                },

                render: (props) => (
                    <DichVu
                        {...props}
                    />
                ),

            },

            TinTuc: {
                label: "Tin Tức",

                fields: {
                    language: {
                        type: "select",
                        label: "Language",
                        options: [
                            {
                                label: "Vietnamese",
                                value: "VI",
                            },
                            {
                                label: "English",
                                value: "EN",
                            },
                        ],
                    },

                    // =========================
                    // Background
                    // =========================

                    backgroundFrom: {
                        type: "text",
                        label: "Background From",
                    },

                    backgroundTo: {
                        type: "text",
                        label: "Background To",
                    },

                    sectionHeight: {
                        type: "number",
                        label: "Section Height",
                    },

                    // =========================
                    // Header
                    // =========================

                    title: {
                        type: "text",
                        label: "Title",
                        contentEditable: true,
                    },

                    titleFontSize: {
                        type: "number",
                        label: "Title Font Size",
                    },

                    titleColor: {
                        type: "text",
                        label: "Title Color",
                    },

                    subtitle: {
                        type: "textarea",
                        label: "Subtitle",
                        contentEditable: true,
                    },

                    subtitleFontSize: {
                        type: "number",
                        label: "Subtitle Font Size",
                    },

                    subtitleColor: {
                        type: "text",
                        label: "Subtitle Color",
                    },

                    dividerWidth: {
                        type: "number",
                        label: "Divider Width",
                    },

                    dividerHeight: {
                        type: "number",
                        label: "Divider Height",
                    },

                    dividerColor: {
                        type: "text",
                        label: "Divider Color",
                    },

                    // =========================
                    // Hot Box
                    // =========================

                    hotBoxWidth: {
                        type: "number",
                        label: "Hot Box Width",
                    },

                    hotBoxHeight: {
                        type: "number",
                        label: "Hot Box Height",
                    },

                    hotBoxRadius: {
                        type: "number",
                        label: "Hot Box Radius",
                    },

                    hotBoxBackground: {
                        type: "text",
                        label: "Hot Box Background",
                    },

                    // =========================
                    // Normal Box
                    // =========================

                    normalBoxWidth: {
                        type: "number",
                        label: "Normal Box Width",
                    },

                    normalBoxHeight: {
                        type: "number",
                        label: "Normal Box Height",
                    },

                    normalBoxRadius: {
                        type: "number",
                        label: "Normal Box Radius",
                    },

                    normalBoxBackground: {
                        type: "text",
                        label: "Normal Box Background",
                    },

                    // =========================
                    // Image
                    // =========================

                    imageHeight: {
                        type: "number",
                        label: "Image Height",
                    },

                    // =========================
                    // Text
                    // =========================

                    newsTitleFontSize: {
                        type: "number",
                        label: "News Title Font Size",
                    },

                    newsTitleColor: {
                        type: "text",
                        label: "News Title Color",
                    },

                    paragraphFontSize: {
                        type: "number",
                        label: "Paragraph Font Size",
                    },

                    paragraphColor: {
                        type: "text",
                        label: "Paragraph Color",
                    },

                    dateFontSize: {
                        type: "number",
                        label: "Date Font Size",
                    },

                    dateColor: {
                        type: "text",
                        label: "Date Color",
                    },

                    detailFontSize: {
                        type: "number",
                        label: "Detail Font Size",
                    },

                    detailColor: {
                        type: "text",
                        label: "Detail Color",
                    },

                    // =========================
                    // Hover
                    // =========================

                    hoverBorderColor: {
                        type: "text",
                        label: "Hover Border Color",
                    },

                    hoverTitleColor: {
                        type: "text",
                        label: "Hover Title Color",
                    },

                    // =========================
                    // Button
                    // =========================

                    buttonText: {
                        type: "text",
                        label: "Button Text",
                        contentEditable: true,
                    },

                    buttonWidth: {
                        type: "number",
                        label: "Button Width",
                    },

                    buttonHeight: {
                        type: "number",
                        label: "Button Height",
                    },

                    buttonRadius: {
                        type: "number",
                        label: "Button Radius",
                    },

                    buttonFrom: {
                        type: "text",
                        label: "Button Gradient From",
                    },

                    buttonTo: {
                        type: "text",
                        label: "Button Gradient To",
                    },

                    buttonTextColor: {
                        type: "text",
                        label: "Button Text Color",
                    },

                    buttonFontSize: {
                        type: "number",
                        label: "Button Font Size",
                    },

                    buttonHoverBorder: {
                        type: "text",
                        label: "Button Hover Border",
                    },

                    // =========================
                    // Hot News
                    // =========================

                    hotNews: {
                        type: "array",
                        label: "Hot News",

                        arrayFields: {

                            image: {
                                type: "text",
                                label: "Image",
                            },

                            title: {
                                type: "text",
                                label: "Title",
                                contentEditable: true,
                            },

                            description: {
                                type: "textarea",
                                label: "Description",
                                contentEditable: true,
                            },

                            date: {
                                type: "text",
                                label: "Date",
                                contentEditable: true,
                            },

                            detailText: {
                                type: "text",
                                label: "Detail Text",
                                contentEditable: true,
                            },

                            link: {
                                type: "text",
                                label: "Link",
                            },

                        },

                    },

                    // =========================
                    // Normal News
                    // =========================

                    normalNews: {
                        type: "array",
                        label: "Normal News",

                        arrayFields: {

                            image: {
                                type: "text",
                                label: "Image",
                            },

                            title: {
                                type: "text",
                                label: "Title",
                                contentEditable: true,
                            },

                            description: {
                                type: "textarea",
                                label: "Description",
                                contentEditable: true,
                            },

                            date: {
                                type: "text",
                                label: "Date",
                                contentEditable: true,
                            },

                            detailText: {
                                type: "text",
                                label: "Detail Text",
                                contentEditable: true,
                            },

                            link: {
                                type: "text",
                                label: "Link",
                            },

                        },

                    },

                },

                defaultProps: {
                    language: "VI",

                    backgroundFrom: "#ffffff",
                    backgroundTo: "#ffffff",
                    sectionHeight: 1100,

                    title: "Tin tức",
                    titleFontSize: 32,
                    titleColor: "#000000",

                    subtitle: "Cập nhật tin tức, sự kiện và thông tin mới nhất từ Hexagon Corporation.",
                    subtitleFontSize: 14,
                    subtitleColor: "#000000",

                    dividerWidth: 120,
                    dividerHeight: 4,
                    dividerColor: "#fcc600",

                    hotBoxWidth: 560,
                    hotBoxHeight: 380,
                    hotBoxRadius: 10,
                    hotBoxBackground: "#ffffff",

                    normalBoxWidth: 360,
                    normalBoxHeight: 400,
                    normalBoxRadius: 10,
                    normalBoxBackground: "#ffffff",

                    imageHeight: 165,

                    newsTitleFontSize: 15,
                    newsTitleColor: "#000000",

                    paragraphFontSize: 13,
                    paragraphColor: "#4a5566",

                    dateFontSize: 11,
                    dateColor: "#6d7581",

                    detailFontSize: 11,
                    detailColor: "#d98600",

                    hoverBorderColor: "#fcc600",
                    hoverTitleColor: "#d18800",

                    buttonText: "Xem tất cả bài viết >",

                    buttonWidth: 220,
                    buttonHeight: 52,
                    buttonRadius: 10,

                    buttonFrom: "#018273",
                    buttonTo: "#89ba17",

                    buttonTextColor: "#ffffff",
                    buttonFontSize: 15,

                    buttonHoverBorder: "#6fbf34",

                    hotNews: [
                        {
                            image: "/images/tin1.jpg",
                            title: "Không khí tưng bừng tại Chương trình Teambuilding myH25 tại Ngôi nhà Hùng Hậu",
                            description: "Cùng nhìn lại những khoảnh khắc đáng nhớ và đẹp nhất của đại gia đình HHC trong chương trình TEAMBUILDING MYH25, diễn ra...",
                            date: "26 ng 6, 2026",
                            detailText: "Xem chi tiết",
                            link: "#",
                        },
                        {
                            image: "/images/tin2.jpg",
                            title: "Đồng hành cùng sinh viên Đại học Văn Hiến tại Ngày hội sinh viên",
                            description: "Công ty Cổ phần Lục Giác hân hạnh được đồng hành cùng các bạn sinh viên khoa Công nghệ Thông tin - Đại học Văn Hiến trong chương trình “VHE Startup Devote’’...",
                            date: "26 ng 6, 2026",
                            detailText: "Xem chi tiết",
                            link: "#",
                        },
                    ],

                    normalNews: [
                        {
                            image: "/images/tin3.jpg",
                            title: "Sắm tết công nghệ - Nâng cấp thiết bị, khởi đầu bứt phá",
                            description: "Năm mới, vận hội mới, thiết bị cũng phải mới! Đầu tư cho công nghệ là đầu tư cho tương lai. Ghé ‘Lục Giác’...",
                            date: "26 ng 6, 2026",
                            detailText: "Xem chi tiết",
                            link: "#",
                        },
                        {
                            image: "/images/tin4.png",
                            title: "Bài viết 4",
                            description: "Bài viết 4",
                            date: "26 ng 6, 2026",
                            detailText: "Xem chi tiết",
                            link: "#",
                        },
                        {
                            image: "/images/tin5.jpg",
                            title: "Bài viết 5",
                            description: "Bài viết 5",
                            date: "26 ng 6, 2026",
                            detailText: "Xem chi tiết",
                            link: "#",
                        },
                    ],

                },

                render: (props) => (
                    <TinTuc
                        {...props}
                    />
                ),

            },

            CarouselAnimation: {
                label: "Carousel Animation",

                fields: {
                    language: {
                        type: "select",
                        label: "Language",
                        options: [
                            {
                                label: "Vietnamese",
                                value: "VI",
                            },
                            {
                                label: "English",
                                value: "EN",
                            },
                        ],
                    },

                    // =========================
                    // Background
                    // =========================

                    backgroundFrom: {
                        type: "text",
                        label: "Background From",
                    },

                    backgroundTo: {
                        type: "text",
                        label: "Background To",
                    },

                    sectionHeight: {
                        type: "number",
                        label: "Section Height",
                    },

                    // =========================
                    // Title
                    // =========================

                    title: {
                        type: "text",
                        label: "Title",
                        contentEditable: true,
                    },

                    titleFontSize: {
                        type: "number",
                        label: "Title Font Size",
                    },

                    titleColor: {
                        type: "text",
                        label: "Title Color",
                    },

                    // =========================
                    // Box
                    // =========================

                    boxWidth: {
                        type: "number",
                        label: "Box Width",
                    },

                    boxHeight: {
                        type: "number",
                        label: "Box Height",
                    },

                    boxRadius: {
                        type: "number",
                        label: "Box Radius",
                    },

                    boxBackground: {
                        type: "text",
                        label: "Box Background",
                    },

                    // =========================
                    // Animation
                    // =========================

                    direction: {
                        type: "select",
                        label: "Animation Direction",

                        options: [
                            {
                                label: "Left",
                                value: "left",
                            },
                            {
                                label: "Right",
                                value: "right",
                            },
                        ],
                    },

                    speed: {
                        type: "number",
                        label: "Animation Speed (Second)",
                    },

                    // =========================
                    // Images
                    // =========================

                    images: {
                        type: "array",
                        label: "Images",

                        arrayFields: {

                            image: {
                                type: "text",
                                label: "Image",
                            },

                        },
                    },

                },

                defaultProps: {
                    language: "VI",

                    // =========================
                    // Background
                    // =========================

                    backgroundFrom: "#10826b",

                    backgroundTo: "#85edab",

                    sectionHeight: 350,

                    // =========================
                    // Title
                    // =========================

                    title: "Các đối tác liên kết",

                    titleFontSize: 32,

                    titleColor: "#000000",

                    // =========================
                    // Box
                    // =========================

                    boxWidth: 200,

                    boxHeight: 120,

                    boxRadius: 25,

                    boxBackground: "#ffffff",

                    // =========================
                    // Animation
                    // =========================

                    direction: "left",

                    speed: 20,

                    // =========================
                    // Images
                    // =========================

                    images: [

                        {
                            image: "/images/logo.png",
                        },

                        {
                            image: "/images/logo1.png",
                        },

                        {
                            image: "/images/logo2.png",
                        },

                        {
                            image: "/images/logo3.png",
                        },

                        {
                            image: "/images/logo4.png",
                        },

                        {
                            image: "/images/logo5.png",
                        },


                    ],

                },

                render: (props) => (
                    <CarouselAnimation
                        {...props}
                    />
                ),

            },

            Footer: {
                label: "Footer",

                fields: {
                    language: {
                        type: "select",
                        label: "Language",
                        options: [
                            {
                                label: "Vietnamese",
                                value: "VI",
                            },
                            {
                                label: "English",
                                value: "EN",
                            },
                        ],
                    },

                    // =========================
                    // Top Background
                    // =========================

                    backgroundFrom: {
                        type: "text",
                        label: "Background From",
                    },

                    backgroundTo: {
                        type: "text",
                        label: "Background To",
                    },

                    topSectionHeight: {
                        type: "number",
                        label: "Top Section Height",
                    },

                    // =========================
                    // Left
                    // =========================

                    title: {
                        type: "text",
                        label: "Title",
                        contentEditable: true,
                    },

                    titleFontSize: {
                        type: "number",
                        label: "Title Font Size",
                    },

                    titleColor: {
                        type: "text",
                        label: "Title Color",
                    },

                    subtitle: {
                        type: "textarea",
                        label: "Subtitle",
                        contentEditable: true,
                    },

                    subtitleFontSize: {
                        type: "number",
                        label: "Subtitle Font Size",
                    },

                    subtitleColor: {
                        type: "text",
                        label: "Subtitle Color",
                    },

                    // =========================
                    // Contact Item
                    // =========================

                    iconSize: {
                        type: "number",
                        label: "Icon Size",
                    },

                    iconBackground: {
                        type: "text",
                        label: "Icon Background",
                    },

                    iconBorderColor: {
                        type: "text",
                        label: "Icon Border Color",
                    },

                    contactTitleFontSize: {
                        type: "number",
                        label: "Contact Title Font Size",
                    },

                    contactTitleColor: {
                        type: "text",
                        label: "Contact Title Color",
                    },

                    contactTextFontSize: {
                        type: "number",
                        label: "Contact Text Font Size",
                    },

                    contactTextColor: {
                        type: "text",
                        label: "Contact Text Color",
                    },

                    contacts: {
                        type: "array",
                        label: "Contacts",

                        arrayFields: {

                            icon: {
                                type: "text",
                                label: "Icon",
                            },

                            title: {
                                type: "text",
                                label: "Title",
                                contentEditable: true,
                            },

                            text: {
                                type: "textarea",
                                label: "Text",
                                contentEditable: true,
                            },

                        },

                    },

                    // =========================
                    // Social
                    // =========================

                    socialFontSize: {
                        type: "number",
                        label: "Social Font Size",
                    },

                    socialTextColor: {
                        type: "text",
                        label: "Social Text Color",
                    },

                    socialBackground: {
                        type: "text",
                        label: "Social Background",
                    },

                    socialBorderColor: {
                        type: "text",
                        label: "Social Border Color",
                    },

                    socialHoverBackground: {
                        type: "text",
                        label: "Social Hover Background",
                    },

                    socialLinks: {
                        type: "array",
                        label: "Social Links",

                        arrayFields: {

                            text: {
                                type: "text",
                                label: "Text",
                                contentEditable: true,
                            },

                            link: {
                                type: "text",
                                label: "Link",
                            },

                        },

                    },

                    // =========================
                    // Google Maps
                    // =========================

                    mapEmbedUrl: {
                        type: "textarea",
                        label: "Google Maps Embed URL",
                    },

                    // =========================
                    // Bottom
                    // =========================

                    bottomBackground: {
                        type: "text",
                        label: "Bottom Background",
                    },

                    copyright: {
                        type: "text",
                        label: "Copyright",
                        contentEditable: true,
                    },

                    copyrightFontSize: {
                        type: "number",
                        label: "Copyright Font Size",
                    },

                    copyrightColor: {
                        type: "text",
                        label: "Copyright Color",
                    },

                },

                defaultProps: {
                    language: "VI",

                    // =========================
                    // Background
                    // =========================

                    backgroundFrom: "#f8fafc",

                    backgroundTo: "#f8fafc",

                    topSectionHeight: 700,

                    // =========================
                    // Left
                    // =========================

                    title: "Liên hệ với chúng tôi",

                    titleFontSize: 26,

                    titleColor: "#000000",

                    subtitle:
                        "Sẵn sàng cho dự án tiếp theo? Đội ngũ chuyên gia của Hexagon luôn ở đây để lắng nghe và đưa ra giải pháp tốt nhất cho bạn.",

                    subtitleFontSize: 14,

                    subtitleColor: "#000000",

                    // =========================
                    // Contact
                    // =========================

                    iconSize: 48,

                    iconBackground: "#dcf2f2",

                    iconBorderColor: "#b3e8e5",

                    contactTitleFontSize: 14,

                    contactTitleColor: "#000000",

                    contactTextFontSize: 14,

                    contactTextColor: "#000000",

                    contacts: [

                        {
                            icon: "/images/gps.png",
                            title: "Trụ sở chính",
                            text: "615 Âu Cơ, Phường Tân Phú, TP. Hồ Chí Minh",
                        },

                        {
                            icon: "/images/mail.png",
                            title: "Email",
                            text: "info@hexagon.xyz",
                        },

                        {
                            icon: "/images/telephone.png",
                            title: "Hotline",
                            text: "096 446 0333",
                        },

                    ],

                    // =========================
                    // Social
                    // =========================

                    socialFontSize: 14,

                    socialTextColor: "#007870",

                    socialBackground: "#def3f3",

                    socialBorderColor: "#007870",

                    socialHoverBackground: "#c7edea",

                    socialLinks: [

                        {
                            text: "Facebook",
                            link: "#",
                        },

                        {
                            text: "LinkedIn",
                            link: "#",
                        },

                        {
                            text: "YouTube",
                            link: "#",
                        },

                        {
                            text: "Zalo",
                            link: "#",
                        },

                    ],

                    // =========================
                    // Google Maps
                    // =========================

                    mapEmbedUrl:
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.9589746501572!2d106.64166381816763!3d10.784974357248785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0026872297%3A0xaf9b928587d21b23!2zQ2hpIG5ow6FuaCAyIC0gTmjDoCBzw6FjaCBFQ09CT09L!5e0!3m2!1svi!2s!4v1783268345082!5m2!1svi!2s",

                    // =========================
                    // Bottom
                    // =========================

                    bottomBackground: "#0d593a",

                    copyright:
                        "Copyright 2026 © Hexagon Corporation. All rights reserved",

                    copyrightFontSize: 14,

                    copyrightColor: "#989994",

                },

                render: (props) => (
                    <Footer
                        {...props}
                    />
                ),

            },






        },

        categoryGroups: [
            { title: 'Header', components: ['Header'] },
            { title: 'TrangChu', components: ['TrangChu'] },
            { title: 'GioiThieu', components: ['GioiThieu'] },
            { title: 'DichVu', components: ['DichVu'] },
            { title: 'TinTuc', components: ['TinTuc'] },
            { title: 'CarouselAnimation', components: ['CarouselAnimation'] },
            { title: 'Footer', components: ['Footer'] },
        ],

        root: {
            render: ({ children }) => (
                <div className="min-h-screen bg-white">
                    {children}
                </div>
            ),
        },
    };
}