import React from 'react';

import Components1 from './components/admin-components1';
import Components2 from './components/admin-components2';
import Components3 from './components/admin-components3';
import ComponentHeader from './components/admin-components-header';
import ComponentCarousel from './components/admin-components-carousel';
import ComponentFooter from './components/admin-component-footer';
import Components4 from './components/admin-components4';
import Components5 from './components/admin-components5';
import Components6 from './components/admin-components6';
import ComponentsGioiThieu from './components/admin-components-gioithieu';
import ComponentsHoiVien from './components/admin-components-hoivien';

export const puckConfig = {
  components: {
   

    Components1: {
  label: 'Sen Hồng',
  fields: {
     backgroundImage: {
      type: 'text',
      label: 'URL Background'
  },

    // ================= POSITION SYSTEM =================
    positionX: {
      type: 'select',
      label: 'Vị trí ngang',
      options: [
        { label: 'Trái', value: 'left' },
        { label: 'Giữa', value: 'center' },
        { label: 'Phải', value: 'right' }
      ]
    },

    paddingLeft: {
      type: 'number',
      label: 'Padding trái',
      min: 0,
      max: 300
    },

    paddingTop: {
      type: 'number',
      label: 'Padding trên',
      min: 0,
      max: 300
    },

    // ================= CARD =================
    cardWidth: {
      type: 'number',
      label: 'Chiều rộng card',
      min: 280,
      max: 600
    },

    cardHeight: {
      type: 'number',
      label: 'Chiều cao card',
      min: 280,
      max: 600
    },

    cardBgOpacity: {
      type: 'number',
      label: 'Độ trong nền',
      min: 0,
      max: 1,
      step: 0.1
    },

    cardBlur: {
      type: 'number',
      label: 'Blur nền',
      min: 0,
      max: 30
    },

    cardPadding: {
      type: 'number',
      label: 'Padding card',
      min: 10,
      max: 60
    },

    radiusTL: {
      type: 'number',
      label: 'Bo góc trên trái',
      min: 0,
      max: 200
    },

    radiusTR: {
      type: 'number',
      label: 'Bo góc trên phải',
      min: 0,
      max: 200
    },

    radiusBR: {
      type: 'number',
      label: 'Bo góc dưới phải',
      min: 0,
      max: 200
    },

    radiusBL: {
      type: 'number',
      label: 'Bo góc dưới trái',
      min: 0,
      max: 200
    },

    // ================= TITLE LINE =================
    titleLine: {
      type: 'text',
      label: 'Dòng phụ',
      contentEditable: true,
    },

    titleLineColor: {
      type: 'text',
      label: 'Màu dòng phụ'
    },

    titleLineSize: {
      type: 'number',
      label: 'Cỡ chữ dòng phụ',
      min: 10,
      max: 40
    },

    // ================= TITLE =================
    title: {
      type: 'text',
      label: 'Tiêu đề',
      contentEditable: true,
    },

    titleColor: {
      type: 'text',
      label: 'Màu tiêu đề'
    },

    titleSize: {
      type: 'number',
      label: 'Cỡ chữ tiêu đề',
      min: 20,
      max: 100
    },

    // ================= DESCRIPTION =================
    description: {
      type: 'textarea',
      label: 'Mô tả',
      contentEditable: true,
    },

    descriptionColor: {
      type: 'text',
      label: 'Màu mô tả'
    },

    descriptionSize: {
      type: 'number',
      label: 'Cỡ chữ mô tả',
      min: 12,
      max: 30
    },

    // ================= BUTTON =================
    buttonText: {
      type: 'text',
      label: 'Text nút',
      contentEditable: true,
    },

    buttonColor: {
      type: 'text',
      label: 'Màu nút'
    },

    buttonSize: {
      type: 'select',
      label: 'Kích cỡ nút',
      options: [
        { label: 'Nhỏ', value: 'sm' },
        { label: 'Vừa', value: 'md' },
        { label: 'Lớn', value: 'lg' }
      ]
    }

  },

  defaultProps: {
    backgroundImage: '/images/background.jpg',

  // POSITION
  positionX: 'left',
  paddingLeft: 80,
  paddingTop: 0,

  // CARD (GIỚI HẠN NHỎ)
  cardWidth: 420,
  cardHeight: 280,
  cardBgOpacity: 0.12,
  cardBlur: 16,
  cardPadding: 28,

  radiusTL: 10,
  radiusTR: 80,
  radiusBR: 10,
  radiusBL: 80,

  // TITLE LINE
  titleLine: "LAN TỎA GIÁ TRỊ ĐẤT",
  titleLineColor: "#ffffff",
  titleLineSize: 14,

  // TITLE
  title: "Sen Hồng",
  titleColor: "#ffffff",
  titleSize: 56,

  // DESCRIPTION
  description: `CLB Doanh nhân Đồng Tháp tại TPHCM quy tụ những người con quê hương Đất Sen Hồng.`,

  descriptionColor: "#ffffff",
  descriptionSize: 14,

  // BUTTON
  buttonText: "Tham gia cộng đồng",
  buttonColor: "#06b6d4",
  buttonSize: "md"
  
  },

  render: (props) => <Components1 {...props} />
    },

    Components2: {
      label: 'Ban Chuyên Môn',

      fields: {

        title: {
          type: 'text',
          label: 'Tiêu đề',
          contentEditable: true,

        },

        subtitle: {
          type: 'textarea',
          label: 'Mô tả',
          contentEditable: true,
        },

        titleColor: {
          type: 'text',
          label: 'Màu tiêu đề'
        },

        subtitleColor: {
          type: 'text',
          label: 'Màu mô tả'
        },

        titleSize: {
          type: 'number',
          label: 'Size tiêu đề',
          min: 20,
          max: 80
        },

        subtitleSize: {
          type: 'number',
          label: 'Size mô tả',
          min: 12,
          max: 40
        },

        gradientFrom: {
          type: 'text',
          label: 'Gradient từ'
        },

        gradientTo: {
          type: 'text',
          label: 'Gradient đến'
        },

        cards: {
          type: 'array',
          label: 'Danh sách ban',
          contentEditable: true,

          arrayFields: {

            icon: {
              type: 'text',
              label: 'Icon URL'
            },

            iconSize: {
              type: 'number',
              label: 'Size icon',
              min: 20,
              max: 150
            },

            title: {
              type: 'text',
              label: 'Tiêu đề',
              contentEditable: true,
            },

            description: {
              type: 'textarea',
              label: 'Mô tả',
              contentEditable: true,
            },

            titleColor: {
              type: 'text',
              label: 'Màu tiêu đề'
            },

            descriptionColor: {
              type: 'text',
              label: 'Màu mô tả'
            },

            titleSize: {
              type: 'number',
              label: 'Size tiêu đề'
            },

            descriptionSize: {
              type: 'number',
              label: 'Size mô tả'
            },

            cardHeight: {
              type: 'number',
              label: 'Chiều cao card'
            },

            cardGradientFrom: {
              type: 'text',
              label: 'Gradient từ'
            },

            cardGradientTo: {
              type: 'text',
              label: 'Gradient đến'
            },

            radiusTL: {
              type: 'number',
              label: 'Bo góc TL'
            },

            radiusTR: {
              type: 'number',
              label: 'Bo góc TR'
            },

            radiusBR: {
              type: 'number',
              label: 'Bo góc BR'
            },

            radiusBL: {
              type: 'number',
              label: 'Bo góc BL'
            },

            buttonText: {
              type: 'text',
              label: 'Text nút',
              contentEditable: true,
            },

            buttonColor: {
              type: 'text',
              label: 'Màu nút'
            },

            buttonTextColor: {
              type: 'text',
              label: 'Màu chữ nút'
            },

            buttonSize: {
              type: 'select',
              label: 'Size nút',
              options: [
                { label: 'Nhỏ', value: 'sm' },
                { label: 'Vừa', value: 'md' },
                { label: 'Lớn', value: 'lg' }
              ]
            }
          },

          getItemSummary: (item) => item.title
        }
      },

      defaultProps: {

        title: "CÁC BAN CHUYÊN MÔN",

        subtitle:
          "CLB DOANH NHÂN ĐỒNG THÁP TẠI TP. HỒ CHÍ MINH",

        titleColor: "#1f4b89",

        subtitleColor: "#1f4b89",

        titleSize: 42,

        subtitleSize: 22,

        gradientFrom: "#f5f7ff",

        gradientTo: "#e8eefb",

        cards: [

          {
            icon: "/public/images/kinhTe.png",
            iconSize: 40,

            title: "Ban Kinh tế - Đầu tư",

            description: "",

            titleColor: "#ffffff",

            descriptionColor: "#ffffff",

            titleSize: 20,

            descriptionSize: 16,

            cardHeight: 90,

            cardGradientFrom: "#38bdf8",

            cardGradientTo: "#0f5da8",

            radiusTL: 80,
            radiusTR: 0,
            radiusBR: 80,
            radiusBL: 0,

            buttonText: "Xem hoạt động",

            buttonColor: "#5f9fd2",

            buttonTextColor: "#ffffff",

            buttonSize: "md"
          },

          {
            icon: "/public/images/kinhTe.png",
            iconSize: 40,

            title: "Ban Kinh tế - Đầu tư",

            description: "",

            titleColor: "#ffffff",

            descriptionColor: "#ffffff",

            titleSize: 20,

            descriptionSize: 16,

            cardHeight: 90,

            cardGradientFrom: "#38bdf8",

            cardGradientTo: "#0f5da8",

            radiusTL: 80,
            radiusTR: 0,
            radiusBR: 80,
            radiusBL: 0,

            buttonText: "Xem hoạt động",

            buttonColor: "#5f9fd2",

            buttonTextColor: "#ffffff",

            buttonSize: "md"
          },

          {
            icon: "/public/images/kinhTe.png",
            iconSize: 40,

            title: "Ban Kinh tế - Đầu tư",

            description: "",

            titleColor: "#ffffff",

            descriptionColor: "#ffffff",

            titleSize: 20,

            descriptionSize: 16,

            cardHeight: 90,

            cardGradientFrom: "#38bdf8",

            cardGradientTo: "#0f5da8",

            radiusTL: 80,
            radiusTR: 0,
            radiusBR: 80,
            radiusBL: 0,

            buttonText: "Xem hoạt động",

            buttonColor: "#5f9fd2",

            buttonTextColor: "#ffffff",

            buttonSize: "md"
          },


          {
            icon: "/public/images/theThao.png",
            iconSize: 40,

            title: "Ban Văn hóa - Thể thao",

            description: "",

            titleColor: "#ffffff",

            descriptionColor: "#ffffff",

            titleSize: 20,

            descriptionSize: 16,

            cardHeight: 90,

            cardGradientFrom: "#38bdf8",

            cardGradientTo: "#0f5da8",

            radiusTL: 80,
            radiusTR: 0,
            radiusBR: 80,
            radiusBL: 0,

            buttonText: "Xem hoạt động",

            buttonColor: "#5f9fd2",

            buttonTextColor: "#ffffff",

            buttonSize: "md"
          },

          {
            icon: "/public/images/kinhTe.png",
            iconSize: 40,

            title: "Ban Kinh tế - Đầu tư",

            description: "",

            titleColor: "#ffffff",

            descriptionColor: "#ffffff",

            titleSize: 20,

            descriptionSize: 16,

            cardHeight: 90,

            cardGradientFrom: "#38bdf8",

            cardGradientTo: "#0f5da8",

            radiusTL: 80,
            radiusTR: 0,
            radiusBR: 80,
            radiusBL: 0,

            buttonText: "Xem hoạt động",

            buttonColor: "#5f9fd2",

            buttonTextColor: "#ffffff",

            buttonSize: "md"
          },
        ]
      },

      render: (props) => <Components2 {...props} />
    },

    Components3: {
    label: "Giới thiệu & Cơ cấu",

    fields: {

    title: {
      type: "text",
      label: "Tiêu đề",
      contentEditable: true,
    },

    subtitle: {
      type: "textarea",
      label: "Mô tả",
      contentEditable: true,
    },

    titleColor: {
      type: "text",
      label: "Màu tiêu đề"
    },

    subtitleColor: {
      type: "text",
      label: "Màu mô tả"
    },

    titleSize: {
      type: "number",
      label: "Size tiêu đề",
      min: 20,
      max: 80
    },

    subtitleSize: {
      type: "number",
      label: "Size mô tả",
      min: 12,
      max: 40
    },

    gradientFrom: {
      type: "text",
      label: "Gradient từ"
    },

    gradientTo: {
      type: "text",
      label: "Gradient đến"
    },

    cards: {
      type: "array",
      label: "Danh sách khối",

      arrayFields: {

        title: {
          type: "text",
          label: "Tiêu đề khối",
          contentEditable: true,
        },

        content: {
          type: "textarea",
          label: "Nội dung",
          contentEditable: true,
        },

        image: {
          type: "text",
          label: "Ảnh"
        },

        titleColor: {
          type: "text",
          label: "Màu tiêu đề"
        },

        contentColor: {
          type: "text",
          label: "Màu nội dung"
        },

        titleSize: {
          type: "number",
          label: "Size tiêu đề"
        },

        contentSize: {
          type: "number",
          label: "Size nội dung"
        },

        cardBgColor: {
          type: "text",
          label: "Màu nền card"
        },

        cardRadius: {
          type: "number",
          label: "Bo góc card"
        },

        cardPadding: {
          type: "number",
          label: "Padding card"
        },

        members: {
          type: "array",
          label: "Danh sách thành viên",

          arrayFields: {

            avatar: {
              type: "text",
              label: "Avatar"
            },

            avatarSize: {
              type: "number",
              label: "Size avatar"
            },

            fullName: {
              type: "text",
              label: "Họ tên",
              contentEditable: true,
            },

            clubPosition: {
              type: "text",
              label: "Chức vụ CLB",
              contentEditable: true,
            },

            companyPosition: {
              type: "text",
              label: "Chức vụ doanh nghiệp",
              contentEditable: true,
            },

            companyName: {
              type: "text",
              label: "Tên doanh nghiệp",
              contentEditable: true,
            },

            fullNameColor: {
              type: "text",
              label: "Màu họ tên"
            },

            clubPositionColor: {
              type: "text",
              label: "Màu chức vụ CLB"
            },

            companyPositionColor: {
              type: "text",
              label: "Màu chức vụ DN"
            },

            companyNameColor: {
              type: "text",
              label: "Màu tên DN"
            },

            fullNameSize: {
              type: "number",
              label: "Size họ tên"
            },

            clubPositionSize: {
              type: "number",
              label: "Size chức vụ CLB"
            },

            companyPositionSize: {
              type: "number",
              label: "Size chức vụ DN"
            },

            companyNameSize: {
              type: "number",
              label: "Size tên DN"
            }
          },

          getItemSummary: (item) =>
            item.fullName || "Thành viên"
        }
      },

      getItemSummary: (item) =>
        item.title || "Khối mới"
    }

    },

    defaultProps: {

    title: "GIỚI THIỆU",

    subtitle:
      "CLB DOANH NHÂN ĐỒNG THÁP TẠI TP. HỒ CHÍ MINH",

    titleColor: "#1f4b89",

    subtitleColor: "#666666",

    titleSize: 42,

    subtitleSize: 18,

    gradientFrom: "#d9f4ff",

    gradientTo: "#f5d4ff",

    cards: [

      {
        title: "VỀ CÂU LẠC BỘ",

        content:
          "CLB Doanh nhân Đồng Tháp tại TP.HCM là nơi kết nối cộng đồng doanh nhân, thúc đẩy hợp tác và phát triển kinh tế.",

        image: "/images/office_background.jpg",

        titleColor: "#1f4b89",

        contentColor: "#333333",

        titleSize: 30,

        contentSize: 16,

        cardBgColor: "#ffffff",

        cardRadius: 20,

        cardPadding: 30,

        members: []
      },

      {
        title: "CƠ CẤU TỔ CHỨC",

        content: "",

        image: "",

        titleColor: "#1f4b89",

        contentColor: "#333333",

        titleSize: 30,

        contentSize: 16,

        cardBgColor: "#ffffff",

        cardRadius: 20,

        cardPadding: 30,

        members: [
          {
            avatar: "/images/member1.webp",

            avatarSize: 80,

            fullName: "Trần Văn Khang",

            clubPosition: "Chủ tịch CLB",

            companyPosition: "Chủ tịch HĐQT",

            companyName: "Công ty CP đầu tư Sen Vàng",

            fullNameColor: "#1f4b89",

            clubPositionColor: "#333333",

            companyPositionColor: "#333333",

            companyNameColor: "#333333",

            fullNameSize: 18,

            clubPositionSize: 15,

            companyPositionSize: 15,

            companyNameSize: 15
          },

          {
            avatar: "/images/member3.jpg",

            avatarSize: 80,

            fullName: "Lê Thị Ngọc Anh",

            clubPosition: "Trưởng ban Truyền thông",

            companyPosition: "Giám đốc Tài chính",

            companyName: "Công ty TNHH May mặc Đồng Tháp",

            fullNameColor: "#1f4b89",

            clubPositionColor: "#333333",

            companyPositionColor: "#333333",

            companyNameColor: "#333333",

            fullNameSize: 18,

            clubPositionSize: 15,

            companyPositionSize: 15,

            companyNameSize: 15
          },

          {
            avatar: "/images/member4.jpg",

            avatarSize: 80,

            fullName: "Nguyễn Thị Mai",

            clubPosition: "Ủy viên BCH",

            companyPosition: "Giám đốc phát triển",

            companyName: "Công ty TNHH XYZ Group",

            fullNameColor: "#1f4b89",

            clubPositionColor: "#333333",

            companyPositionColor: "#333333",

            companyNameColor: "#333333",

            fullNameSize: 18,

            clubPositionSize: 15,

            companyPositionSize: 15,

            companyNameSize: 15
          }
        ]
      }
    ]

    },

    render: (props) => <Components3 {...props} />
    },

    componentHeader: {
      label: 'Header',

      fields: {
        logo: {
          type: 'text',
          label: 'Logo URL'
        },

        title: {
          type: 'text',
          label: 'Dòng tiêu đề',
          contentEditable: true
        },

        subtitle: {
          type: 'text',
          label: 'Dòng phụ',
          contentEditable: true
        },

        menu1: {
          type: 'text',
          label: 'Menu 1',
          contentEditable: true
        },

        menu2: {
          type: 'text',
          label: 'Menu 2',
          contentEditable: true
        },

        menu3: {
          type: 'text',
          label: 'Menu 3',
          contentEditable: true
        },

        menu4: {
          type: 'text',
          label: 'Menu 4',
          contentEditable: true
        },

        menu5: {
          type: 'text',
          label: 'Menu 5',
          contentEditable: true
        },

        menu6: {
          type: 'text',
          label: 'Menu 6',
          contentEditable: true
        },

        viText: {
          type: 'text',
          label: 'Nút Tiếng Việt',
          contentEditable: true
        },

        enText: {
          type: 'text',
          label: 'Nút English',
          contentEditable: true
        },

        backgroundColor: {
          type: 'text',
          label: 'Màu nền'
        },

        textColor: {
          type: 'text',
          label: 'Màu tiêu đề'
        },

        menuColor: {
          type: 'text',
          label: 'Màu menu'
        },

        buttonColor: {
          type: 'text',
          label: 'Màu nút'
        },

        buttonTextColor: {
          type: 'text',
          label: 'Màu chữ nút'
        },

        height: {
          type: 'number',
          label: 'Chiều cao Header',
          min: 60,
          max: 300
        }
      },

      defaultProps: {
        logo: '/images/logoDT.png',

        title: 'CLB DOANH NHÂN ĐỒNG THÁP',
        subtitle: 'Tại TP.Hồ Chí Minh',

        menu1: 'Trang chủ',
        menu2: 'Giới thiệu',
        menu3: 'Hội viên',
        menu4: 'Hoạt động ban',
        menu5: 'Tin tức & sự kiện',
        menu6: 'Liên hệ',

        viText: 'VI',
        enText: 'EN',

        backgroundColor: '#ffffff',

        textColor: '#1f4b89',

        menuColor: '#1f4b89',

        buttonColor: '#1f4b89',

        buttonTextColor: '#ffffff',

        height: 90
      },

      render: (props) => <ComponentHeader {...props} />
    },

    componentCarousel: {
      label: 'Carousel Hình Ảnh',

      fields: {
        title: {
          type: 'text',
          label: 'Tiêu đề',
          contentEditable: true
        },


        backgroundColor: {
          type: 'text',
          label: 'Màu nền'
        },

        titleColor: {
          type: 'text',
          label: 'Màu tiêu đề'
        },

        titleSize: {
          type: 'number',
          label: 'Cỡ chữ tiêu đề',
          min: 20,
          max: 100
        },


        speed: {
          type: 'number',
          label: 'Tốc độ slide',
          min: 5,
          max: 120
        },

        images: {
          type: 'array',
          label: 'Danh sách ảnh',

          arrayFields: {
            src: {
              type: 'text',
              label: 'URL ảnh'
            },

            alt: {
              type: 'text',
              label: 'Alt Text',
              contentEditable: true
            }
          },

          getItemSummary: (item) =>
            item.alt || item.src || 'Ảnh'
        }
      },

      defaultProps: {
        title: 'HỘI VIÊN CLB DOANH NHÂN ĐỒNG THÁP TẠI TP. HỒ CHÍ MINH',

        backgroundColor: '#b5cff8',

        titleColor: '#001431',

        titleSize: 36,

        speed: 30,

        images: [
          {
            src: '/images/logoHH.png',
            alt: 'Hoạt động 1'
          },
          {
            src: '/images/logoHH1.png',
            alt: 'Hoạt động 2'
          },
          {
            src: '/images/logoHH2.jpg',
            alt: 'Hoạt động 3'
          },
          {
            src: '/images/logoEB.png',
            alt: 'Hoạt động 4'
          },
          {
            src: '/images/logoComoon.png',
            alt: 'Hoạt động 5'
          }
        ]
      },

      render: (props) => (
        <ComponentCarousel {...props} />
      )
    },

    componentFooter: {
      label: 'Footer',

      fields: {
        backgroundColor: {
          type: 'text',
          label: 'Màu nền'
        },

        textColor: {
          type: 'text',
          label: 'Màu chữ'
        },

        linkColor: {
          type: 'text',
          label: 'Màu link'
        },

        logo: {
          type: 'text',
          label: 'Logo URL'
        },

        title: {
          type: 'text',
          label: 'Tiêu đề',
          contentEditable: true
        },

        subtitle: {
          type: 'text',
          label: 'Dòng phụ',
          contentEditable: true
        },

        description1: {
          type: 'textarea',
          label: 'Nội dung 1',
          contentEditable: true
        },

        description2: {
          type: 'textarea',
          label: 'Nội dung 2',
          contentEditable: true
        },

        description3: {
          type: 'textarea',
          label: 'Nội dung 3',
          contentEditable: true
        },

        // CỘT 2

        column2Title: {
          type: 'text',
          label: 'Tiêu đề cột 2',
          contentEditable: true
        },

        column2Links: {
  type: "array",
  label: "Menu cột 2",
  arrayFields: {
    text: {
      type: "text",
      label: "Tên",
      contentEditable: true
    },
    url: {
      type: "text",
      label: "Link"
    }
  }
},


        // CỘT 3

        column3Title: {
          type: 'text',
          label: 'Tiêu đề cột 3',
          contentEditable: true
        },

        column3Links: {
  type: "array",
  label: "Menu cột 3",
  arrayFields: {
    text: {
      type: "text",
      label: "Tên",
      contentEditable: true
    },
    url: {
      type: "text",
      label: "Link"
    }
  }
},

        // COPYRIGHT

        copyright: {
          type: 'text',
          label: 'Copyright',
          contentEditable: true
        },

        // FACEBOOK

        facebookIcon: {
          type: 'text',
          label: 'Facebook Icon'
        },

        facebookUrl: {
          type: 'text',
          label: 'Facebook URL'
        },

        // TIKTOK

        tiktokIcon: {
          type: 'text',
          label: 'TikTok Icon'
        },

        tiktokUrl: {
          type: 'text',
          label: 'TikTok URL'
        },

        // YOUTUBE

        youtubeIcon: {
          type: 'text',
          label: 'Youtube Icon'
        },

        youtubeUrl: {
          type: 'text',
          label: 'Youtube URL'
        }
      },

      defaultProps: {
        backgroundColor: "linear-gradient(to bottom right,#d9f4ff,#f5d4ff)",

        textColor: '#000000',

        linkColor: '#000000',

        logo: '/images/logoDT.png',

        title: 'CLB DOANH NHÂN ĐỒNG THÁP',

        subtitle: 'TẠI THÀNH PHỐ HỒ CHÍ MINH',

        description1:
          'Kết nối cộng đồng doanh nhân Đồng Tháp.',

        description2:
          'Thúc đẩy hợp tác và phát triển bền vững.',

        description3:
          'Lan tỏa giá trị Đất Sen Hồng.',

        column2Title: 'Liên kết trang',

        column2Links: [
  {
    text: "Trang chủ",
    url: "/"
  },
  {
    text: "Tin tức và sự kiện",
    url: "/tin-tuc"
  },
  {
    text: "Về chúng tôi",
    url: "/gioi-thieu"
  },
  {
    text: "Các lĩnh vực hoạt động",
    url: "/linh-vuc-hoat-dong"
  },
  {
    text: "Doanh nghiệp hội viên",
    url: "/hoi-vien"
  },
  {
    text: "Đăng ký",
    url: "/dang-ky"
  },
  {
    text: "Hoạt động ban",
    url: "/hoat-dong-ban"
  }
],


        column3Title: 'Khác',

        column3Links: [
  { text: "MYH", url: "#" },
  { text: "MYC", url: "#" },
  { text: "HHF", url: "#" },
  { text: "HHE", url: "#" },
  { text: "HHA", url: "#" },
  { text: "COWE", url: "#" },
  { text: "HHN", url: "#" },
  { text: "HYV", url: "#" }
],
        copyright:
          '© 2026 CLB Doanh Nhân Đồng Tháp tại TP.HCM. All Rights Reserved.',

        facebookIcon:
          '/images/logoFB.png',

        facebookUrl:
          'https://facebook.com',

        tiktokIcon:
          '/images/logoTT.png',

        tiktokUrl:
          'https://tiktok.com',

        youtubeIcon:
          '/images/logoYTB.png',

        youtubeUrl:
          'https://youtube.com'
      },

      render: (props) => (
        <ComponentFooter {...props} />
      )
    },

    Components4: {
      label: "Thống kê",

      fields: {
        title: {
          type: "text",
          label: "Tiêu đề",
          contentEditable: true
        },

        titleColor: {
          type: "text",
          label: "Màu tiêu đề"
        },

        titleSize: {
          type: "number",
          label: "Size tiêu đề",
          min: 20,
          max: 100
        },

        valueSize: {
          type: "number",
          label: "Size dòng trên",
          min: 20,
          max: 120
        },

        labelSize: {
          type: "number",
          label: "Size dòng dưới",
          min: 10,
          max: 50
        },

        cards: {
          type: "array",
          label: "Danh sách thống kê",

          arrayFields: {
            value: {
              type: "text",
              label: "Dòng trên",
              
            },

            label: {
              type: "text",
              label: "Dòng dưới",
              contentEditable: true
            },

            valueColor: {
              type: "text",
              label: "Màu dòng trên"
            },

            labelColor: {
              type: "text",
              label: "Màu dòng dưới"
            }
          },

          getItemSummary: (item) => item.label
        }
      },

      defaultProps: {
        title: "HÀNH TRÌNH KIẾN TẠO & GẮN KẾT GIÁ TRỊ",

        titleColor: "#1f4b89",

        titleSize: 42,

        valueSize: 64,

        labelSize: 18,

        cards: [
          {
            value: "500+",
            label: "Hội viên là các doanh nghiệp và doanh nhân tiêu biểu tại TP.HCM",
            valueColor: "#1f4b89",
            labelColor: "#666"
          },

          {
            value: "20+",
            label: "Năm hình thành và phát triển mạng lưới kết nối đồng hương",
            valueColor: "#1f4b89",
            labelColor: "#666"
          },

          {
            value: "1000+",
            label: "Cơ hội giao thương và kết nối đầu tư được khởi tạo mỗi năm",
            valueColor: "#1f4b89",
            labelColor: "#666"
          },

          {
            value: "100+",
            label: "Chương trình thiện nguyện và hoạt động hướng về quê hương",
            valueColor: "#1f4b89",
            labelColor: "#666"
          }
        ]
      },

      render: (props) => <Components4 {...props} />
    },

    Components5: {
      label: "Liên hệ",

      fields: {
        title: {
          type: "text",
          label: "Tiêu đề",
          contentEditable: true
        },

        titleColor: {
          type: "text",
          label: "Màu tiêu đề"
        },

        titleSize: {
          type: "number",
          label: "Size tiêu đề"
        },

        button1Text: {
          type: "text",
          label: "Button 1",
          contentEditable: true
        },

        button2Text: {
          type: "text",
          label: "Button 2",
          contentEditable: true
        },

        mainButtonText: {
          type: "text",
          label: "Button chính",
          contentEditable: true
        },

        buttonWidth: {
          type: "number",
          label: "Width button"
        },

        buttonHeight: {
          type: "number",
          label: "Height button"
        },

        buttonFontSize: {
          type: "number",
          label: "Size chữ button"
        },

        button1BgColor: {
          type: "text",
          label: "Màu nền button 1"
        },

        button1TextColor: {
          type: "text",
          label: "Màu chữ button 1"
        },

        button1HoverColor: {
          type: "text",
          label: "Hover button 1"
        },

        button2BgColor: {
          type: "text",
          label: "Màu nền button 2"
        },

        button2TextColor: {
          type: "text",
          label: "Màu chữ button 2"
        },

        button2HoverColor: {
          type: "text",
          label: "Hover button 2"
        },

        mainButtonBgColor: {
          type: "text",
          label: "Màu nền button chính"
        },

        mainButtonTextColor: {
          type: "text",
          label: "Màu chữ button chính"
        },

        mainButtonHoverColor: {
          type: "text",
          label: "Hover button chính"
        }
      },

      defaultProps: {
        title: "QUAN TÂM VÀ HỢP TÁC\n VỚI CÁC CHƯƠNG TRÌNH HOẠT ĐỘNG\n CỦA CLB DOANH NHÂN ĐỒNG THÁP TẠI TP.HCM",

        titleColor: "#1f4b89",
        titleSize: 42,

        button1Text: "Info@dte.hunghau.vn",
        button2Text: "1800 1568",
        mainButtonText: "Đăng ký hội viên",

        buttonWidth: 180,
        buttonHeight: 55,
        buttonFontSize: 18,

        button1BgColor: "#ffffff",
        button1TextColor: "#1f4b89",
        button1HoverColor: "#dbeafe",

        button2BgColor: "#ffffff",
        button2TextColor: "#1f4b89",
        button2HoverColor: "#dbeafe",

        mainButtonBgColor: "#1f4b89",
        mainButtonTextColor: "#ffffff",
        mainButtonHoverColor: "#2563eb"
      },

      render: (props) => <Components5 {...props} />
    },

    Components6: {
      label: "Giá trị cộng đồng",

      fields: {

        title: {
          type: "text",
          label: "Tiêu đề",
          contentEditable: true
        },

        titleColor: {
          type: "text",
          label: "Màu tiêu đề"
        },

        moreText: {
          type: "text",
          label: "Text xem thêm",
          contentEditable: true
        },

        moreLink: {
          type: "text",
          label: "Link xem thêm"
        },

        cards: {
          type: "array",
          label: "Danh sách card",

          arrayFields: {

            image: {
              type: "text",
              label: "Ảnh"
            },

            title: {
              type: "text",
              label: "Tiêu đề",
              contentEditable: true
            },

            description: {
              type: "textarea",
              label: "Mô tả",
              contentEditable: true
            },

            radiusTL: {
              type: "number",
              label: "Bo góc trên trái"
            },

            radiusTR: {
              type: "number",
              label: "Bo góc trên phải"
            },

            radiusBR: {
              type: "number",
              label: "Bo góc dưới phải"
            },

            radiusBL: {
              type: "number",
              label: "Bo góc dưới trái"
            },
          },

          getItemSummary: (item) => item.title
        }
      },

      defaultProps: {
        title: "GIÁ TRỊ KHI THAM GIA CỘNG ĐỒNG",

        titleColor: "#0056a6",

        moreText: "Xem thêm",

        moreLink: "#",

        cards: [
          {
            image: "/images/icon_world.png",
            title: "Kết nối chất lượng",
            description:
              "Tiếp cận mạng lưới doanh nhân uy tín, mở rộng cơ hội hợp tác.",

             radiusTL: 90,
              radiusTR: 10,
              radiusBR: 90,
              radiusBL: 10,
          },

          {
            image: "/images/icon_phattrien.png",
            title: "Phát triển kiến thức",
            description:
              "Cập nhật xu hướng, nâng cao tư duy quản trị và kỹ năng.",

              radiusTL: 90,
              radiusTR: 10,
              radiusBR: 90,
              radiusBL: 10,
          },

          {
            image: "/images/icon_hoptac.png",
            title: "Cơ hội hợp tác",
            description:
              "Tham gia dự án, kết nối và xúc tiến thương mại.",

              radiusTL: 90,
              radiusTR: 10,
              radiusBR: 90,
              radiusBL: 10,
          }
        ]
      },

      render: (props) => <Components6 {...props} />
    },

    ComponentsGioiThieu: {
      label: "Giới thiệu",

      fields: {

        title:{
          type:"text",
          label:"Tiêu đề",
          contentEditable:true,
        },

        titleSize:{
          type:"number",
          label:"Size title"
        },

        image:{
          type:"text",
          label:"Ảnh"
        },

        heading:{
          type:"text",
          label:"Heading",
          contentEditable:true,
        },

        headingSize:{
          type:"number",
          label:"Size heading"
        },

        subtitle1:{
          type:"textarea",
          label:"Đoạn 1",
          contentEditable:true,
        },

        subtitle2:{
          type:"textarea",
          label:"Đoạn 2",
          contentEditable:true,
        },

        subtitleSize:{
          type:"number",
          label:"Size subtitle"
        },

        vision:{
          type:"textarea",
          label:"Tầm nhìn",
          contentEditable:true,
        },

        mission:{
          type:"textarea",
          label:"Sứ mệnh",
          contentEditable:true,
        },

        valueSize:{
          type:"number",
          label:"Size số liệu"
        },

        labelSize:{
          type:"number",
          label:"Size mô tả"
        },

        cards:{
          type:"array",
          label:"Thống kê",
          contentEditable:true,

          arrayFields:{
            value:{
              type:"text",
              label:"Giá trị",
              
            },

            label:{
              type:"text",
              label:"Mô tả",
              contentEditable:true,
            }
          },

          getItemSummary:(item)=>item.value
        }

      },

      defaultProps:{
        title:"GIỚI THIỆU DOANH NHÂN ĐỒNG THÁP",

        titleColor:"#1f5fa8",
        titleSize:48,

        image:"/images/gioithieu.jpg",

        heading:"Kết nối – Đồng hành – Phát triển",
        headingColor:"#1f5fa8",
        headingSize:34,


        subtitle1:"Cộng đồng Doanh nhân Đồng Tháp hướng đến việc xây dựng môi trường kết nối giữa các doanh nghiệp, thúc đẩy hợp tác và tạo ra nhiều giá trị bền vững cho địa phương.",
        subtitleSize:20,

        subtitle2:"Với tinh thần đổi mới, sáng tạo và phát triển lâu dài, cộng đồng doanh nhân luôn đóng vai trò quan trọng trong việc thúc đẩy kinh tế, hỗ trợ khởi nghiệp và nâng cao năng lực cạnh tranh.",
        subtitleSize:20,

        vision:"Tầm nhìn: Xây dựng mạng lưới doanh nhân năng động, hiện đại và hội nhập.",
        mission:"Sứ mệnh: Kết nối doanh nghiệp – chia sẻ tri thức – tạo giá trị phát triển bền vững.",

        boxBgColor:"#f3f4f6",
        boxTextColor:"#333",

        valueSize:52,
        labelSize:20,

        cards:[
          {
            value:"500+",
            label:"Doanh nghiệp tham gia"
          },
          {
            value:"50+",
            label:"Sự kiện kết nối mỗi năm"
          },
          {
            value:"100%",
            label:"Hướng đến phát triển bền vững"
          }
        ]
      },

      render:(props)=><ComponentsGioiThieu {...props}/>
    },

     ComponentsHoiVien: {
      label: "Hội Viên",

      fields: {

        title:{
          type:"text",
          label:"Tiêu đề",
          contentEditable:true,
        },

        titleSize:{
          type:"number",
          label:"Size title"
        },

        image:{
          type:"text",
          label:"Ảnh"
        },

        heading:{
          type:"text",
          label:"Heading",
          contentEditable:true,
        },

        headingSize:{
          type:"number",
          label:"Size heading"
        },

        subtitle1:{
          type:"textarea",
          label:"Đoạn 1",
          contentEditable:true,
        },

        subtitle2:{
          type:"textarea",
          label:"Đoạn 2",
          contentEditable:true,
        },

        subtitleSize:{
          type:"number",
          label:"Size subtitle"
        },

        boxTitle:{
          type:"text",
          label:"Tiêu đề box",
          contentEditable:true
        },

        benefits:{
          type:"array",
          label:"Danh sách quyền lợi",

          arrayFields:{
            icon:{
              type:"text",
              label:"Icon"
            },

            text:{
              type:"text",
              label:"Nội dung",
              contentEditable:true
            }
          },

          getItemSummary:(item)=>item.text
        },

        valueSize:{
          type:"number",
          label:"Size số liệu"
        },

        labelSize:{
          type:"number",
          label:"Size mô tả"
        },

        cards:{
          type:"array",
          label:"Thống kê",
          contentEditable:true,

          arrayFields:{
            value:{
              type:"text",
              label:"Giá trị",
              
            },

            label:{
              type:"text",
              label:"Mô tả",
              contentEditable:true,
            }
          },

          getItemSummary:(item)=>item.value
        }

      },

      defaultProps:{
        title:"HỘI VIÊN",

        titleColor:"#1f5fa8",
        titleSize:48,

        image:"/images/hoivien.jpg",

        heading:"Cộng đồng doanh nhân cùng phát triển",
        headingColor:"#1f5fa8",
        headingSize:34,


        subtitle1:"Hội viên là lực lượng nòng cốt tạo nên sự kết nối, chia sẻ và phát triển trong cộng đồng doanh nghiệp Đồng Tháp.",
        subtitleSize:20,

        subtitle2:"Việc tham gia hội viên mở ra cơ hội mở rộng mạng lưới, trao đổi kinh nghiệm, tiếp cận chương trình hỗ trợ và đồng hành trong các hoạt động xúc tiến thương mại.",
        subtitleSize:20,

        boxTitle:"Quyền lợi hội viên",

        benefits:[
          {
          icon:"✓",
          text:"Tham gia các chương trình kết nối doanh nghiệp"
          },

          {
          icon:"✓",
          text:"Tiếp cận hoạt động đào tạo và hội thảo chuyên đề"
          },

          {
          icon:"✓",
          text:"Nhận thông tin thị trường và cơ hội hợp tác"
          },

          {
          icon:"✓",
          text:"Tham gia các hoạt động cộng đồng doanh nhân"
          },

          {
          icon:"✓",
          text:"Đồng hành cùng các chương trình phát triển địa phương"
          }
          ],

        boxBgColor:"#f3f4f6",
        boxTextColor:"#333",

        valueSize:52,
        labelSize:20,

        cards:[
          {
          value:"800+",
          label:"Hội viên"
          },

          {
          value:"120+",
          label:"Đối tác"
          },

          {
          value:"40+",
          label:"Sự kiện / năm"
          },

          {
          value:"12",
          label:"Nhóm kết nối"
          }
          ],
      },

      render:(props)=><ComponentsHoiVien {...props}/>
    },

  },

  // Sidebar categories
  categoryGroups: [
    
    { title: 'Sen Hồng ', components: ['Components1']},
    { title: 'Chuyên Môn', components: ['Components2']},
    { title: 'Cơ cấu tổ chức', components: ['Components3']},
    { title: 'Header', components: ['componentHeader']},
    { title: 'Carousel', components: ['componentCarousel']},
    { title: 'Footer', components: ['componentFooter']},
    { title: 'Thống kê', components: ['Components4']},
    { title: 'Liên hệ', components: ['Components5']},
    { title: 'Giá trị', components: ['Components6']},
    { title: 'Giới thiệu', components: ['ComponentsGioiThieu']},
    { title: 'Hội Viên', components: ['ComponentsHoiVien']},

  ],

  


  // Root config
  root: {
    render: ({ children }) => (
      <div className="min-h-screen">{children}</div>
    )
  }
};

export default puckConfig;
