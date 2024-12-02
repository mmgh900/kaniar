'use client'

import { Layout } from '@/components/Layout'
import { RiListUnordered, RiSearch2Line, RiApps2Line } from 'react-icons/ri'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { BottomNavigation } from '@/components/BottomNavigation'

export default function Home() {
  const router = useRouter()

  return (
    <Layout className="flex flex-col items-center justify-between min-h-screen">
      <div className="w-full">
        <div className="text-center mb-8 pt-8">
          <Image
            src="/images/kaniar-logo.png"
            alt="لوگوی کانیار"
            width={200}
            height={200}
            className="mb-4 mx-auto"
          />
          <h1 className="text-5xl font-bold text-purple-300">کانیار</h1>
        </div>
        <div className="flex flex-col space-y-4 px-4">
          <button 
            className="flex items-center justify-between space-x-2 bg-[#312348] text-white p-4 rounded-md"
            onClick={() => router.push('/mineral-list')}
          >
            <span>لیست کانی‌ها</span>
            <RiListUnordered size={24} />
          </button>
          <button 
            className="flex items-center justify-between space-x-2 bg-[#312348] text-white p-4 rounded-md"
            onClick={() => router.push('/identify')}
          >
            <span>شناسایی کانی</span>
            <RiSearch2Line size={24} />
          </button>
          <button 
            className="flex items-center justify-between space-x-2 bg-[#312348] text-white p-4 rounded-md"
            onClick={() => router.push('/other-features')}
          >
            <span>سایر ویژگی‌ها</span>
            <RiApps2Line size={24} />
          </button>
        </div>
      </div>
      <BottomNavigation />
    </Layout>
  )
}

