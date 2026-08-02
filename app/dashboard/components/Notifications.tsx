"use client";

import {
  Bell,
  PackageCheck,
  Tag,
  MessageCircle,
  TrendingUp,
  Brain,
  Check,
} from "lucide-react";


const notifications = [

  {
    id: 1,
    title: "سفارش شما ارسال شد",
    description:
      "سفارش مکمل شما تحویل شرکت حمل‌ونقل شد.",
    time: "۲ ساعت پیش",
    icon: PackageCheck,
    color: "text-green-400",
    unread: true,
  },


  {
    id: 2,
    title: "تخفیف ویژه المپیا فعال شد",
    description:
      "روی محصولات منتخب تا ۱۵٪ تخفیف دریافت کنید.",
    time: "امروز",
    icon: Tag,
    color: "text-yellow-400",
    unread: true,
  },


  {
    id: 3,
    title: "تحلیل جدید بازار",
    description:
      "گزارش جدید بازار ارز و طلا منتشر شد.",
    time: "دیروز",
    icon: TrendingUp,
    color: "text-blue-400",
    unread: false,
  },


  {
    id: 4,
    title: "پیشنهاد هوش مصنوعی المپیا",
    description:
      "بر اساس پروفایل شما مکمل جدید پیشنهاد شد.",
    time: "۳ روز پیش",
    icon: Brain,
    color: "text-purple-400",
    unread: false,
  },


  {
    id: 5,
    title: "پیام پشتیبانی",
    description:
      "پاسخ جدیدی از تیم پشتیبانی دریافت کردید.",
    time: "۵ روز پیش",
    icon: MessageCircle,
    color: "text-cyan-400",
    unread: false,
  },

];



export default function Notifications() {


  return (

    <div
      className="
      bg-[#101010]
      border
      border-zinc-800
      rounded-2xl
      p-6
      hover:border-yellow-500/40
      transition-all
      "
    >


      <div
        className="
        flex
        items-center
        justify-between
        mb-6
        "
      >


        <div
          className="
          flex
          items-center
          gap-3
          "
        >

          <div
            className="
            w-11
            h-11
            rounded-xl
            bg-yellow-500/10
            flex
            items-center
            justify-center
            "
          >

            <Bell
              size={24}
              className="text-yellow-400"
            />

          </div>



          <div>

            <h2
              className="
              text-xl
              font-bold
              text-yellow-400
              "
            >
              اعلان‌ها
            </h2>


            <p
              className="
              text-xs
              text-gray-500
              mt-1
              "
            >
              آخرین فعالیت‌های حساب شما
            </p>


          </div>


        </div>


      </div>





      <div
        className="
        space-y-4
        "
      >


        {notifications.map((item)=>{


          const Icon = item.icon;


          return (

            <div
              key={item.id}
              className="
              bg-[#171717]
              border
              border-zinc-800
              rounded-xl
              p-4
              hover:border-yellow-500/30
              transition
              "
            >


              <div
                className="
                flex
                gap-4
                items-start
                "
              >


                <div
                  className="
                  w-10
                  h-10
                  rounded-xl
                  bg-yellow-500/10
                  flex
                  items-center
                  justify-center
                  "
                >

                  <Icon
                    size={21}
                    className={item.color}
                  />

                </div>




                <div className="flex-1">


                  <div
                    className="
                    flex
                    items-center
                    justify-between
                    "
                  >

                    <h3
                      className="
                      text-white
                      text-sm
                      font-bold
                      "
                    >
                      {item.title}
                    </h3>



                    {item.unread && (<span
                        className="
                        w-2
                        h-2
                        rounded-full
                        bg-yellow-400
                        "
                      />

                    )}


                  </div>




                  <p
                    className="
                    text-gray-500
                    text-xs
                    mt-2
                    leading-6
                    "
                  >
                    {item.description}
                  </p>




                  <div
                    className="
                    flex
                    items-center
                    justify-between
                    mt-3
                    "
                  >

                    <span
                      className="
                      text-zinc-600
                      text-[11px]
                      "
                    >
                      {item.time}
                    </span>



                    {!item.unread && (

                      <Check
                        size={14}
                        className="text-green-400"
                      />

                    )}


                  </div>


                </div>


              </div>


            </div>


          );


        })}


      </div>




      <button
        className="
        w-full
        mt-6
        py-3
        rounded-xl
        border
        border-yellow-500
        text-yellow-400
        font-bold
        hover:bg-yellow-500
        hover:text-black
        transition
        "
      >
        مشاهده همه اعلان‌ها
      </button>



    </div>

  );

}