import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] border-t border-zinc-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10">

          {/* معرفی */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              المپیا
            </h3>

            <p className="text-gray-400 leading-8">
              فروشگاه تخصصی مکمل‌های ورزشی با تضمین اصالت کالا،
              ارسال سریع و بهترین برندهای دنیا.
            </p>
          </div>

          {/* لینک‌ها */}
          <div>
            <h4 className="text-white font-bold mb-5">
              دسترسی سریع
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li className="cursor-pointer transition hover:text-yellow-400">
                خانه
              </li>
              <li className="cursor-pointer transition hover:text-yellow-400">
                فروشگاه
              </li>
              <li className="cursor-pointer transition hover:text-yellow-400">
                مقالات
              </li>
              <li className="cursor-pointer transition hover:text-yellow-400">
                تماس با ما
              </li>
            </ul>
          </div>

          {/* تماس */}
          <div>
            <h4 className="text-white font-bold mb-5">
              ارتباط با ما
            </h4>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-400" />
                <span>0912 123 4567</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400" />
                <span>info@olympia.ir</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-yellow-400" />
                <span>تهران، ایران</span>
              </div>
            </div>
          </div>

          {/* شبکه‌های اجتماعی */}
          <div>
            <h4 className="text-white font-bold mb-5">
              ما را دنبال کنید
            </h4>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                <FaTelegramPlane size={22} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-gray-500">
          © 2026 Olympia. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}