'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Layout } from '@/components/Layout'
import { Button } from '@/components/Button'

const questions = [
  {
    id: 1,
    text: "رنگ کانی چیست؟",
    options: ["سفید", "سیاه", "قرمز", "سبز", "آبی", "زرد", "قهوه‌ای"]
  },
  {
    id: 2,
    text: "جلای کانی چگونه است؟",
    options: ["فلزی", "شیشه‌ای", "مرواریدی", "صمغی", "خاکی", "چرب"]
  },
  {
    id: 3,
    text: "سختی کانی در مقیاس موس چقدر است؟",
    options: ["۱-۲", "۳-۴", "۵-۶", "۷-۸", "۹-۱۰"]
  },
  {
    id: 4,
    text: "شکل بلور کانی چگونه است؟",
    options: ["مکعبی", "هگزاگونال", "تتراگونال", "اورتورومبیک", "مونوکلینیک", "تری‌کلینیک"]
  },
  {
    id: 5,
    text: "واکنش کانی با اسید چگونه است؟",
    options: ["جوشش شدید", "جوشش ملایم", "بدون واکنش", "تغییر رنگ"]
  }
]

export default function IdentifyMineral() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const router = useRouter()

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      router.push('/identify/result')
    }
  }

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  return (
      <Layout>
        <div className="relative flex min-h-screen flex-col bg-[#171122] justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center bg-[#171122] p-4 pb-2 justify-between">
              <div className="text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                      d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
                  ></path>
                </svg>
              </div>
              <button onClick={goBack} className="text-white">بازگشت</button>
            </div>

            {/* Progress bar */}
            <div className="flex flex-col gap-3 p-4">
              <div className="rounded bg-[#463267]">
                <div className="h-2 rounded bg-[#722bee]" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
              </div>
              <p className="text-[#a692c9] text-sm font-normal leading-normal">{currentQuestion + 1}/{questions.length}</p>
            </div>

            {/* Question */}
            <h1 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-right pb-3 pt-5">
              {questions[currentQuestion].text}
            </h1>

            {/* Options */}
            <div className="flex flex-col gap-3 p-4">
              {questions[currentQuestion].options.map((option, index) => (
                  <label
                      key={index}
                      className="flex items-center gap-4 rounded border border-solid border-[#463267] p-[15px] flex-row-reverse"
                  >
                    <input
                        type="radio"
                        className="h-5 w-5 border-2 border-[#463267] bg-transparent text-transparent checked:border-[#722bee] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#722bee]"
                        name={`question-${currentQuestion}`}
                        onClick={() => handleAnswer(option)}
                    />
                    <div className="flex grow flex-col">
                      <p className="text-white text-sm font-medium leading-normal">{option}</p>
                    </div>
                  </label>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div>
            <div className="flex px-4 py-3">
              <button
                  onClick={() => handleAnswer('')}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 flex-1 bg-[#722bee] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">سوال بعدی</span>
              </button>
            </div>
            <div className="h-5 bg-[#171122]"></div>
          </div>
        </div>
      </Layout>
  )
}
