import React from 'react';
import AdminHeading from './components/admin-heading';
import AdminText from './components/admin-text';
import AdminImage from './components/admin-image';
import AdminSection from './components/admin-section';
import AdminHero from './components/admin-hero';
import Components1 from './components/admin-components1';
import Components2 from './components/admin-components2';
import Components3 from './components/admin-components3';
import ComponentHeader from './components/admin-components-header';
import ComponentCarousel from './components/admin-components-carousel';
import ComponentFooter from './components/admin-component-footer';

//Config — đăng ký 5 components với fields + defaultProps + render.

export const puckConfig = {
  components: {
    Heading: {
      label: 'Tiêu đề',
      fields: {
        content: { type: 'text', label: 'Nội dung', contentEditable: true },
        level: {
          type: 'select', label: 'Cấp độ',
          options: [
            { label: 'H1', value: 1 }, { label: 'H2', value: 2 },
            { label: 'H3', value: 3 }, { label: 'H4', value: 4 },
            { label: 'H5', value: 5 }, { label: 'H6', value: 6 }
          ]
        },
        align: {
          type: 'select', label: 'Căn lề',
          options: [
            { label: 'Trái', value: 'left' },
            { label: 'Giữa', value: 'center' },
            { label: 'Phải', value: 'right' }
          ]
        }
      },
      defaultProps: { content: 'Tiêu đề', level: 2, align: 'left' },
      render: (props) => <AdminHeading {...props} />
    },

    Text: {
      label: 'Văn bản',
      fields: {
        content: { type: 'textarea', label: 'Nội dung', contentEditable: true },
        align: {
          type: 'select', label: 'Căn lề',
          options: [
            { label: 'Trái', value: 'left' },
            { label: 'Giữa', value: 'center' },
            { label: 'Phải', value: 'right' },
            { label: 'Đều', value: 'justify' }
          ]
        }
      },
      defaultProps: { content: 'Nhập văn bản ở đây...', align: 'left' },
      render: (props) => <AdminText {...props} />
    },

    Image: {
      label: 'Ảnh',
      fields: {
        src: { type: 'text', label: 'URL ảnh' },
        alt: { type: 'text', label: 'Alt text' },
        width: { type: 'text', label: 'Chiều rộng', default: '100%' },
        height: { type: 'text', label: 'Chiều cao', default: 'auto' },
        borderRadius: { type: 'text', label: 'Bo góc', default: '0' },
        align: {
          type: 'select', label: 'Căn lề',
          options: [
            { label: 'Trái', value: 'left' },
            { label: 'Giữa', value: 'center' },
            { label: 'Phải', value: 'right' }
          ]
        }
      },
      defaultProps: {
        src: 'https://via.placeholder.com/800x400',
        alt: 'Ảnh minh họa',
        width: '100%', height: 'auto', borderRadius: '0', align: 'center'
      },
      render: (props) => <AdminImage {...props} />
    },

    Section: {
      label: 'Khoảng (Section)',
      fields: {
        container: {
          type: 'select', label: 'Chiều rộng',
          options: [
            { label: 'Small (640px)', value: 'sm' },
            { label: 'Medium (768px)', value: 'md' },
            { label: 'Large (1024px)', value: 'lg' },
            { label: 'XL (1280px)', value: 'xl' }
          ]
        },
        background: {
          type: 'object', label: 'Background',
          objectFields: {
            type: {
              type: 'select', label: 'Loại',
              options: [
                { label: 'Màu', value: 'color' },
                { label: 'Gradient', value: 'gradient' },
                { label: 'Ảnh', value: 'image' }
              ]
            },
            color: { type: 'text', label: 'Màu nền', default: '#ffffff' },
            fromColor: { type: 'text', label: 'Gradient từ', default: '#667eea' },
            toColor: { type: 'text', label: 'Gradient đến', default: '#764ba2' },
            direction: { type: 'text', label: 'Hướng gradient', default: 'to right' },
            bg_image: { type: 'text', label: 'URL ảnh nền' },
            opacity: { type: 'number', label: 'Độ mờ', min: 0, max: 1, step: 0.1, default: 1 }
          }
        },
        padding_x: { type: 'number', label: 'Padding ngang', min: 0, max: 16, default: 4 },
        padding_y: { type: 'number', label: 'Padding dọc', min: 0, max: 16, default: 4 },
        content: { type: 'slot' } // Cho phép nested components
      },
      defaultProps: {
        container: 'lg',
        background: { type: 'color', color: '#ffffff' },
        padding_x: 4, padding_y: 4,
        content: []
      },
      render: (props) => <AdminSection {...props} />
    },

    Hero: {
      label: 'Hero Banner',
      fields: {
        title: { type: 'text', label: 'Tiêu đề', contentEditable: true },
        subtitle: { type: 'textarea', label: 'Mô tả ngắn', contentEditable: true },
        buttons: {
          type: 'array', label: 'Danh sách nút',
          arrayFields: {
            text: { type: 'text', label: 'Text nút', contentEditable: true },
            url: { type: 'text', label: 'URL' },
            style: {
              type: 'select', label: 'Style',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Outline', value: 'outline' }
              ]
            }
          },
          getItemSummary: (item) => item.text
        },
        background: {
          type: 'object', label: 'Background',
          objectFields: {
            type: {
              type: 'select', label: 'Loại',
              options: [
                { label: 'Màu', value: 'color' },
                { label: 'Gradient', value: 'gradient' },
                { label: 'Ảnh', value: 'image' }
              ]
            },
            color: { type: 'text', label: 'Màu nền', default: '#ffffff' },
            gradientFrom: { type: 'text', label: 'Gradient từ', default: '#667eea' },
            gradientTo: { type: 'text', label: 'Gradient đến', default: '#764ba2' },
            gradientDirection: { type: 'text', label: 'Hướng', default: 'to bottom right' },
            imageUrl: { type: 'text', label: 'URL ảnh nền' }
          }
        },
        layout: {
          type: 'object', label: 'Bố cục',
          objectFields: {
            align: {
              type: 'select', label: 'Căn lề',
              options: [
                { label: 'Trái', value: 'left' },
                { label: 'Giữa', value: 'center' },
                { label: 'Phải', value: 'right' }
              ]
            }
          }
        }
      },
      defaultProps: {
        title: 'Chào mừng đến với website',
        subtitle: 'Chúng tôi cung cấp những sản phẩm và dịch vụ tốt nhất',
        buttons: [
          { text: 'Tìm hiểu thêm', url: '#', style: 'primary' },
          { text: 'Liên hệ', url: '#contact', style: 'outline' }
        ],
        background: {
          type: 'gradient',
          gradientFrom: '#667eea', gradientTo: '#764ba2',
          gradientDirection: 'to bottom right'
        },
        layout: { align: 'center' }
      },
      render: (props) => <AdminHero {...props} />
    },

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

    gradientFrom: "#f5f7ff",

    gradientTo: "#eef4ff",

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
            avatar: "/images/member1.png",

            avatarSize: 80,

            fullName: "Nguyễn Văn A",

            clubPosition: "Chủ tịch CLB",

            companyPosition: "Tổng Giám đốc",

            companyName: "ABC Corporation",

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
            avatar: "/images/member1.png",

            avatarSize: 80,

            fullName: "Nguyễn Văn A",

            clubPosition: "Chủ tịch CLB",

            companyPosition: "Tổng Giám đốc",

            companyName: "ABC Corporation",

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
            avatar: "/images/member1.png",

            avatarSize: 80,

            fullName: "Nguyễn Văn A",

            clubPosition: "Chủ tịch CLB",

            companyPosition: "Tổng Giám đốc",

            companyName: "ABC Corporation",

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
        backgroundColor: '#ffffff',

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

  },

  // Sidebar categories
  categoryGroups: [
    { title: 'Cơ bản', components: ['Heading', 'Text', 'Image'] },
    { title: 'Layout', components: ['Section'] },
    { title: 'Nâng cao', components: ['Hero'] },
    { title: 'Sen Hồng ', components: ['Components1']},
    { title: 'Chuyên Môn', components: ['Components2']},
    { title: 'Cơ cấu tổ chức', components: ['Components3']},
    { title: 'Header', components: ['componentHeader']},
    { title: 'Carousel', components: ['componentCarousel']},
    { title: 'Footer', components: ['componentFooter']},

  ],

  // Root config
  root: {
    render: ({ children }) => (
      <div className="min-h-screen">{children}</div>
    )
  }
};

export default puckConfig;
