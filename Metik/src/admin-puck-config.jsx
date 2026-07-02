import React from 'react';
import Header from './components/header';
import Banner from './components/banner';
import NewProduct from './components/new-product';
import GioiThieu from './components/gioithieu';
import VeChungToi from './components/vechungtoi';
import KhachHang from './components/khachhang';
import Footer from './components/footer';



export const puckConfig = {
    components: {
        Header: {
            label: "Header",

            fields: {
                logo: {
                    type: "text",
                    label: "Logo URL",

                },

                logoLink: {
                    type: "text",
                    label: "Logo Link",

                },

                backgroundColor: {
                    type: "text",
                    label: "Background Color",
                    contentEditable: true,
                },

                textColor: {
                    type: "text",
                    label: "Text Color",
                    contentEditable: true,
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
                            label: "Link", contentEditable: true,
                        },
                    },
                },

                socials: {
                    type: "array",
                    label: "Social",

                    arrayFields: {
                        image: {
                            type: "text",
                            label: "Image URL",

                        },

                        alt: {
                            type: "text",
                            label: "Alt",

                        },

                        link: {
                            type: "text",
                            label: "Link",

                        },
                    },
                },
            },

            defaultProps: {
                logo: "/public/images/logometik.png.webp",

                logoLink: "#",

                backgroundColor: "rgba(255,255,255,0.15)",

                textColor: "#222222",

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
                        title: "Sản phẩm",
                        link: "#",
                    },
                    {
                        title: "Tin tức",
                        link: "#",
                    },
                    {
                        title: "Liên hệ",
                        link: "#",
                    },
                ],

                socials: [
                    {
                        image: "/public/images/logoFB.png",
                        alt: "Facebook",
                        link: "#",
                    },
                    {
                        image: "/public/images/logoTT.png",
                        alt: "TikTok",
                        link: "#",
                    },
                    {
                        image: "/public/images/logoYTB.png",
                        alt: "YouTube",
                        link: "#",
                    },
                ],
            },

            render: (props) => <Header {...props} />,
        },

        Banner: {
            label: "Banner",
            fields: {
                images: {
                    type: "array",
                    label: "Images",
                    arrayFields: {
                        src: {
                            type: "text",
                            label: "Image URL",
                        },
                    },
                },
            },

            defaultProps: {
                images: [
                    { src: "/public/images/slide1.webp" },
                    { src: "/public/images/slide2.webp" },

                ],
            },

            render: (props) => {
                const images = props.images?.map((img) => img.src);
                return <Banner images={images} />;
            },
        },

        NewProduct: {
            label: "New Product",

            fields: {
                title: {
                    type: "text",
                    label: "Title",
                },

                items: {
                    type: "array",
                    label: "Items",

                    arrayFields: {
                        image: {
                            type: "text",
                            label: "Image URL",
                        },

                        title: {
                            type: "text",
                            label: "Item Title",
                        },

                        link: {
                            type: "text",
                            label: "Link",
                        },
                    },
                },
            },

            defaultProps: {
                title: "Sản phẩm mới",

                items: [
                    {
                        image: "/public/images/product1.webp",
                        title: "Snack vị tảo biển",
                        link: "#",
                    },
                    {
                        image: "/public/images/product2.webp",
                        title: "Snack vị BBQ",
                        link: "#",
                    },
                    {
                        image: "/public/images/product3.webp",
                        title: "Snack vị bắp",
                        link: "#",
                    },
                    {
                        image: "/public/images/product4.webp",
                        title: "Snack vị phô mai",
                        link: "#",
                    },
                ],
            },

            render: (props) => <NewProduct {...props} />,
        },

        gioithieu: {
            label: "Giới thiệu",

            fields: {
                title: {
                    type: "text",
                    label: "Title",
                },

                subtitle: {
                    type: "textarea",
                    label: "Subtitle",
                },

                image1: {
                    type: "text",
                    label: "Image 1",
                },

                text1: {
                    type: "textarea",
                    label: "Text 1",
                },

                bulletItems: {
                    type: "array",
                    label: "Bullet Items",

                    arrayFields: {
                        text: {
                            type: "text",
                            label: "Item",
                        },
                    },
                },

                image2: {
                    type: "text",
                    label: "Image 2",
                },

                image3: {
                    type: "text",
                    label: "Image 3",
                },

                text3: {
                    type: "textarea",
                    label: "Text 3",
                },

                gradientFrom: {
                    type: "text",
                    label: "Gradient From",
                },

                gradientTo: {
                    type: "text",
                    label: "Gradient To",
                },

                radiusTopLeft: {
                    type: "number",
                    label: "Radius Top Left",
                },

                radiusTopRight: {
                    type: "number",
                    label: "Radius Top Right",
                },

                radiusBottomRight: {
                    type: "number",
                    label: "Radius Bottom Right",
                },

                radiusBottomLeft: {
                    type: "number",
                    label: "Radius Bottom Left",
                },
            },

            defaultProps: {
                title: "GIỚI THIỆU VỀ METIK",

                subtitle:
                    "metik là thương hiệu snack thuộc OCHAO, được phát triển trong hệ sinh thái HUNGHAU Holdings với định hướng mang đến những sản phẩm ăn vặt thơm ngon, vui tươi và phù hợp với nhịp sống hiện đại.",

                image1: "/public/images/subtitle1.webp",

                text1:
                    "Ra đời từ nền tảng sản xuất bánh kẹo của OCHAO, METIK kế thừa hệ thống nhà máy hiện đại, quy trình sản xuất khép kín và tiêu chuẩn kiểm soát chất lượng nghiêm ngặt. METIK tập trung phát triển các dòng snack giòn, nhẹ, dễ ăn và phù hợp với nhiều nhóm khách hàng. Sản phẩm được nghiên cứu với nhiều hương vị hấp dẫn như rong biển, bắp, phô mai, BBQ và các hương vị đặc trưng khác.",

                bulletItems: [
                    {
                        text: "Sử dụng nguyên liệu có nguồn gốc rõ ràng, phù hợp với tiêu chuẩn sản xuất thực phẩm.",
                    },
                    {
                        text: "Quy trình sản xuất hiện đại, khép kín và đảm bảo vệ sinh an toàn thực phẩm.",
                    },
                    {
                        text: "Kiểm soát chất lượng chặt chẽ trong từng công đoạn, từ nguyên liệu đầu vào đến thành phẩm.",
                    },
                ],

                image2: "/public/images/subtitle2.webp",

                image3: "/public/images/subtitle3.webp",

                text3:
                    "Với hương vị hấp dẫn, phong cách trẻ trung và tinh thần vui nhộn, METIK hướng đến hình ảnh một thương hiệu snack năng động, gần gũi và dễ tạo thiện cảm với người tiêu dùng VIệt Nam.",

                gradientFrom: "#ffffff",

                gradientTo: "#f5d7a1",

                radiusTopLeft: 24,

                radiusTopRight: 2,

                radiusBottomRight: 24,

                radiusBottomLeft: 2,
            },

            render: (props) => (
                <GioiThieu
                    {...props}
                    bulletItems={(props.bulletItems || []).map((item) => item.text)}
                />
            ),
        },

        VeChungToi: {
            label: "Về chúng tôi",

            fields: {

                title: {
                    type: "text",
                    label: "Title",
                },

                paragraph1: {
                    type: "textarea",
                    label: "Paragraph 1",
                },

                paragraph2: {
                    type: "textarea",
                    label: "Paragraph 2",
                },

                videoLink: {
                    type: "text",
                    label: "Video Link",
                },

                gradientFrom: {
                    type: "text",
                    label: "Gradient From",
                },

                gradientTo: {
                    type: "text",
                    label: "Gradient To",
                },

                radiusTopLeft: {
                    type: "number",
                    label: "Radius Top Left",
                },

                radiusTopRight: {
                    type: "number",
                    label: "Radius Top Right",
                },

                radiusBottomRight: {
                    type: "number",
                    label: "Radius Bottom Right",
                },

                radiusBottomLeft: {
                    type: "number",
                    label: "Radius Bottom Left",
                },

            },

            defaultProps: {

                title: "VỀ CHÚNG TÔI",

                paragraph1:
                    "Với tinh thần “Chạm mê tít – Snap into Joy”, metik  mong muốn trở thành người bạn đồng hành trong những khoảnh khắc vui vẻ hằng ngày. Từ những buổi gặp gỡ bạn bè, giờ giải lao, chuyến đi chơi đến những phút thư giãn tại nhà, metik mang đến trải nghiệm ăn vặt giòn ngon, trẻ trung và đầy cảm hứng.",

                paragraph2:
                    "không chỉ là một sản phẩm snack. metik  là cảm giác giòn vui khi mở gói, là hương vị dễ mê trong từng miếng bánh và là nguồn năng lượng tích cực cho những khoảnh khắc thường ngày.",

                videoLink:
                    "https://www.youtube.com/watch?v=RzDW4zI5X6Y",

                gradientFrom: "#ffffff",

                gradientTo: "#f5d7a1",

                radiusTopLeft: 24,

                radiusTopRight: 2,

                radiusBottomRight: 24,

                radiusBottomLeft: 2,

            },

            render: (props) => (
                <VeChungToi {...props} />
            ),

        },

        KhachHang: {
            label: "Khách hàng",

            fields: {

                title: {
                    type: "text",
                    label: "Title",
                },

                cards: {
                    type: "array",
                    label: "Customers",

                    arrayFields: {

                        avatar: {
                            type: "text",
                            label: "Avatar URL",
                        },

                        review: {
                            type: "textarea",
                            label: "Review",
                        },

                        name: {
                            type: "text",
                            label: "Customer Name",
                        },

                        rating: {
                            type: "number",
                            label: "Rating (1-5)",
                        },

                    },
                },

                gradientFrom: {
                    type: "text",
                    label: "Gradient From",
                },

                gradientTo: {
                    type: "text",
                    label: "Gradient To",
                },

                avatarSize: {
                    type: "number",
                    label: "Avatar Size",
                },

                avatarRadius: {
                    type: "text",
                    label: "Avatar Radius",
                },

            },

            defaultProps: {

                title: "KHÁCH HÀNG NÓI GÌ?",

                cards: [

                    {
                        avatar: "/public/images/avt1.webp",

                        review:
                            "Snack metik ăn vừa giòn, vừa ngon vừa cuốn miệng. Em thường lựa chọn để mang theo tới trường",

                        name: "Sinh viên Huỳnh Vĩnh, TP.HCM",

                        rating: 5,
                    },

                    {
                        avatar: "/public/images/avt2.webp",

                        review:
                            "metik gợi nhớ cho em rất nhiều kỉ niệm thời thơ ấu. Hy vọng nhãn hàng trong tương lai sẽ ra nhiều sản phẩm độc đáo hơn nữa.",

                        name: "Bạn Mỹ Duyên, Đồng Tháp",

                        rating: 5,
                    },

                ],

                gradientFrom: "#ffffff",

                gradientTo: "#f5d7a1",

                avatarSize: 120,

                avatarRadius: "50%",

            },

            render: (props) => (
                <KhachHang {...props} />
            ),

        },

        Footer: {
            label: "Footer",

            fields: {

                logo: {
                    type: "text",
                    label: "Logo URL",
                },

                description: {
                    type: "textarea",
                    label: "Description",
                },

                title: {
                    type: "text",
                    label: "Title",
                },

                phone: {
                    type: "text",
                    label: "Phone",
                },

                email: {
                    type: "text",
                    label: "Email",
                },

                address: {
                    type: "textarea",
                    label: "Address",
                },

                copyright: {
                    type: "text",
                    label: "Copyright",
                },

                backgroundTop: {
                    type: "text",
                    label: "Top Background",
                },

                backgroundBottom: {
                    type: "text",
                    label: "Bottom Background",
                },

                titleColor: {
                    type: "text",
                    label: "Title Color",
                },

                textColor: {
                    type: "text",
                    label: "Text Color",
                },

                bottomTextColor: {
                    type: "text",
                    label: "Bottom Text Color",
                },

            },

            defaultProps: {

                logo: "/public/images/logometik.png.webp",

                description:
                    "METIK - một thế giới snack dành cho những ai yêu sự giòn giòn ngất ngây, hương vị trẻ trung, đầy cảm hứng để mỗi ngày đều căng tràn sức sống.",

                title: "THÔNG TIN LIÊN HỆ",

                phone: "(+84) 79 721 3333",

                email: "sale@ochao.vn",

                address: " Lô C3-1, Đường D2-N7, KCN Tân Phú Trung, Xã Củ Chi, TP.HCM..",

                copyright:
                    "Copyright 2026 © METIK. All Rights Reserved.",

                backgroundTop: "#ffbf1e",

                backgroundBottom: "#e67e22",

                titleColor: "#2e7d32",

                textColor: "#111111",

                bottomTextColor: "#ffffff",

            },

            render: (props) => (
                <Footer {...props} />
            ),

        },

    },



    // Sidebar categories
    categoryGroups: [
        { title: 'Header', components: ['Header'] },
        { title: 'Banner', components: ['Banner'] },
        { title: 'NewProduct', components: ['NewProduct'] },
        { title: 'Gioithieu', components: ['Gioithieu'] },
        { title: 'Vechungtoi', components: ['Vechungtoi'] },
        { title: 'Khachhang', components: ['khachhang'] },
        { title: 'Footer', components: ['Footer'] },


    ],

    // Root config
    root: {
        render: ({ children }) => (
            <div className="min-h-screen">{children}</div>
        )
    }
};

export default puckConfig;
