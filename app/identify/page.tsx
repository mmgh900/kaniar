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
    text: "��اکنش کانی با اسید چگونه است؟",
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
      // Here you would typically send the answers to a backend for processing
      // For now, we'll just redirect to a dummy result
      router.push('/identify/result')
    }
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">شناسایی کانی</h1>
      <div className="bg-purple-800 p-4 rounded-md">
        <div className="mb-4 bg-purple-700 h-2 rounded-full">
          <div 
            className="bg-purple-500 h-2 rounded-full transition-all duration-300 ease-in-out" 
            style={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}
          ></div>
        </div>
        <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion].text}</h2>
        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <Button 
              key={index} 
              variant="secondary" 
              className="w-full text-right"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
    </Layout>
  )
}

