// pages/pricing.js
import Head from 'next/head';
import { FaCheck, FaTimes, FaTimes as FaClose } from 'react-icons/fa';
import { useRouter } from 'next/router';

const PricingPage = ({ onClose }) => {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';
  const currentTime = new Date().toISOString();

  const plans = [
    {
      name: 'Miễn Phí (Theo Tháng)',
      price: 0,
      duration: '', // No duration suffix
      features: [
        { text: 'Nhập tên cô dâu chú rể', available: true },
        { text: 'Thêm font vào danh sách yêu thích', available: true },
        { text: 'Tên font bị ẩn (hiển thị "Font ẩn")', available: true },
        { text: 'Không tải được font', available: false },
        { text: 'Không tải được hình ảnh', available: false },
        { text: 'Không tạo được ảnh danh sách font yêu thích', available: false },
        { text: 'Hỗ trợ 24/7', available: true },
      ],
      buttonText: 'Thử Ngay',
      buttonAction: () => router.push('/signup/free'),
      buttonDisabled: false,
    },
    {
      name: 'Premium (Theo tháng)',
      price: 50000,
      duration: 'tháng', // Only this plan shows /tháng
      features: [
        { text: 'Nhập và chỉnh sửa tên cô dâu chú rể', available: true },
        { text: 'Thêm và quản lý danh sách yêu thích', available: true },
        { text: 'Hiển thị tên font đầy đủ', available: true },
        { text: 'Tải font về máy (giới hạn 50 font/tháng)', available: true },
        { text: 'Tải hình ảnh (giới hạn 100 ảnh/tháng)', available: true },
        { text: 'Tạo ảnh danh sách font yêu thích', available: true },
        { text: 'Hỗ trợ 24/7', available: true },
      ],
      buttonText: 'Đăng Ký Ngay',
      buttonAction: () => router.push('/payment/premium-monthly'),
      buttonDisabled: false,
    },
    {
      name: 'Premium (Vĩnh viễn)',
      price: 500000,
      duration: '', // No duration suffix
      features: [
        { text: 'Nhập và chỉnh sửa tên cô dâu chú rể', available: true },
        { text: 'Thêm và quản lý danh sách yêu thích', available: true },
        { text: 'Hiển thị tên font đầy đủ', available: true },
        { text: 'Tải font về máy (không giới hạn)', available: true },
        { text: 'Tải hình ảnh (không giới hạn)', available: true },
        { text: 'Tạo ảnh danh sách font yêu thích', available: true },
        { text: 'Hỗ trợ 24/7', available: true },
      ],
      buttonText: 'Đăng Ký Ngay',
      buttonAction: () => router.push('/payment/premium-lifetime'),
      buttonDisabled: false,
    },
  ];

  const getPrice = (price) => price.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return (
    <>
      <div className="bg-gradient-to-br from-pink-400 via-rose-500 to-pink-600 rounded-2xl py-8 px-4 relative overflow-y-auto md:overflow-y-hidden overflow-x-hidden">
        {/* Close button */}
        <button
          onClick={() => {
            if (typeof onClose === 'function') {
              onClose();
            } else {
              // Fallback: quay lại trang trước đó nếu không có onClose
              window.history.back();
            }
          }}
          className="absolute top-4 right-4 z-50 w-8 h-8 lg:w-10 lg:h-10 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 shadow-lg border-2 border-white/20"
          aria-label="Đóng popup"
        >
          <FaClose size={14} className="lg:w-4 lg:h-4" />
        </button>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-rose-500/20 to-pink-600/20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-400/30 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col">
          <div className="text-center mb-8">

            <h1 className="text-2xl md:text-2xl font-bold text-white mb-2 tracking-tight">
              Bảng Giá Dịch Vụ
            </h1>
            <p className="text-sm md:text-base text-white/90 max-w-3xl mx-auto leading-relaxed">
              Chọn Gói Miễn Phí hoặc Premium (Theo Tháng/Vĩnh Viễn) để thiết kế font chữ đám cưới!
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {plans.length > 0 ? ( 
              plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative group ${index === 1
                      ? 'lg:scale-105 lg:-translate-y-2 z-20'
                      : 'lg:scale-100'
                    }`}
                >
                  {/* Popular badge for middle card */}
                  {index === 1 && (
                    <div className="absolute -top-3 lg:-top-4 left-1/2 transform -translate-x-1/2 z-30">
                    </div>
                  )}

                  <div className={`relative bg-white/95 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-xl lg:shadow-2xl transition-all duration-300 hover:shadow-2xl lg:hover:shadow-3xl hover:-translate-y-2 ${index === 1
                      ? 'border-2 border-pink-400 shadow-pink-500/25'
                      : 'border border-white/20'
                    }`}>

                 

                    <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 lg:mb-4 text-center">{plan.name}</h3>

                    {/* Price section */}
                    <div className="text-center mb-4 lg:mb-6">
                      <div className="flex items-baseline justify-center gap-1 lg:gap-2">
                        <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
                          {plan.price === 0 ? '0' : plan.price.toLocaleString('vi-VN')}
                        </span>
                        <span className="text-lg lg:text-xl xl:text-2xl font-semibold text-gray-600">₫</span>

                        {plan.duration && (
                          <span className="text-sm lg:text-base xl:text-lg font-medium text-gray-500">/{plan.duration}</span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-2 lg:py-3 px-4 lg:px-6 rounded-xl lg:rounded-2xl font-bold text-sm lg:text-base xl:text-lg transition-all duration-300 transform hover:scale-105 ${plan.buttonDisabled
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-1'
                        }`}
                      disabled={plan.buttonDisabled}
                      onClick={plan.buttonAction}
                      aria-label={`Mua gói ${plan.name} ngay bây giờ`}
                    >
                      {plan.buttonText}
                    </button>

                    {/* Features list */}
                    <ul className="mt-4 lg:mt-5 space-y-2 lg:space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3 lg:space-x-4" role="listitem">
                          <span className={`flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 rounded-full flex items-center justify-center shadow-sm ${feature.available
                              ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white'
                              : 'bg-gradient-to-r from-red-400 to-pink-500 text-white'
                            }`}>
                            {feature.available ? (
                              <FaCheck size={10} className="lg:w-3 lg:h-3 xl:w-3 xl:h-3" />
                            ) : (
                              <FaTimes size={10} className="lg:w-3 lg:h-3 xl:w-3 xl:h-3" />
                            )}
                          </span>
                          <span className={`text-base text-gray-700 leading-relaxed ${!feature.available ? 'line-through text-gray-400' : ''}`}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Decorative elements */}
                    <div className="absolute top-2 right-2 lg:top-4 lg:right-4 w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full opacity-20"></div>
                    <div className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4 w-6 h-6 lg:w-8 lg:h-8 xl:w-12 xl:h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full opacity-20"></div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8">
                  <p className="text-white text-base lg:text-xl font-semibold">No pricing plans available at the moment.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;