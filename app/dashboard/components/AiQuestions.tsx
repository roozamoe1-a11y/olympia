"use client";

import {
  Brain,
  Send,
  Sparkles,
} from "lucide-react";

import { useState } from "react";


const questions = [

  "برای افزایش حجم چه مکملی مناسب است؟",

  "بهترین زمان مصرف کراتین چه زمانی است؟",

  "برای کاهش چربی بدن چه مکملی پیشنهاد می‌شود؟",

  "مقدار پروتئین مورد نیاز روزانه من چقدر است؟",

  "تفاوت وی پروتئین و گینر چیست؟",

];



export default function AiQuestions() {


  const [selectedQuestion,setSelectedQuestion] =
    useState("");



  function sendQuestion(){

    if(!selectedQuestion) return;


    window.location.href =
      `/ai?q=${encodeURIComponent(selectedQuestion)}`;

  }



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
        gap-3
        mb-6
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

          <Brain
            size={25}
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
            دستیار هوش مصنوعی المپیا
          </h2>


          <p
            className="
            text-xs
            text-gray-500
            mt-1
            "
          >
            سوال خود را درباره مکمل و ورزش بپرسید
          </p>


        </div>


      </div>





      <div
        className="
        space-y-3
        "
      >


        {questions.map((question)=>(


          <button

            key={question}

            onClick={()=>setSelectedQuestion(question)}

            className={`
            w-full
            text-right
            p-4
            rounded-xl
            border
            transition-all

            ${
              selectedQuestion === question

              ? 
              "border-yellow-500 bg-yellow-500/10 text-yellow-400"

              :

              "border-zinc-800 bg-[#171717] text-gray-300 hover:border-yellow-500/30"

            }

            `}

          >

            <div
              className="
              flex
              items-center
              gap-3
              "
            >

              <Sparkles
                size={16}
                className="text-yellow-400"
              />


              <span
                className="
                text-sm
                "
              >
                {question}
              </span>


            </div>


          </button>


        ))}



      </div>





      <button

        onClick={sendQuestion}

        className="
        w-full
        mt-6
        py-3
        rounded-xl
        bg-yellow-500
        text-black
        font-bold
        flex
        items-center
        justify-center
        gap-2
        hover:bg-yellow-400
        transition
        "

      >

        <Send size={18}/>

        ارسال سوال به هوش مصنوعی

      </button>




    </div>

  );

}