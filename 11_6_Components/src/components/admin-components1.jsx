import React from 'react';
import AdminSection from './admin-section';
import AdminHero from './admin-hero';
import AdminHeading from './admin-heading';
import AdminText from './admin-text';
import AdminImage from './admin-image';
const Components1 = () => {
    return (
        <AdminSection
            container="2xl"
            padding_x={0}
            padding_y={0}
            background={{
                type: 'image',
                bg_image:
                    'public/images/background.jpg',
            }}
        >
           
                

                <div className="relative z-10 flex items-center min-h-screen pl-20">
                    <div
                        className="
                            w-[620px]
                            border
                            border-white/20
                            bg-white/10
                            backdrop-blur-xl
                            shadow-2xl
                            p-10

                            rounded-tl-[10px]
                            rounded-tr-[80px]
                            rounded-br-[10px]
                            rounded-bl-[80px]
                        "
                    >
                        <AdminText
                            content="LAN TỎA GIÁ TRỊ ĐẤT"
                            align="left"
                        />

                        <div className="mt-4">
                            <h1
                                className="
                        text-6xl
                        font-bold
                        bg-gradient-to-r
                        from-yellow-300
                        via-yellow-500
                        to-amber-600
                        bg-clip-text
                        text-transparent
                    "
                            >
                                Sen Hồng
                            </h1>
                        </div>

                        <div className="mt-6 text-white/90">
                            <AdminText
                                content={`CLB Doanh nhân Đồng Tháp tại TPHCM quy tụ những người con quê hương Đất Sen Hồng.

Với tinh thần Hợp tác - Đổi mới - Phát triển, CLB đóng vai trò là cầu nối chiến lược, hợp tác, thúc đẩy giá trị kinh doanh và lan tỏa sẻ chia nghĩa tình quê hương.`}
                            />
                        </div>

                        <div className="mt-8 flex justify-center">
                            <button
                                className="
                                    px-10
                                    py-4
                                    rounded-full
                                    bg-gradient-to-r
                                    from-cyan-400
                                    to-blue-600
                                    text-white
                                    font-semibold
                                    hover:scale-105
                                    transition-all
                                "
                            >
                                Tham gia cộng đồng
                            </button>
                        </div>
                    </div>
                </div>
        </AdminSection>
    );
};

export default Components1;