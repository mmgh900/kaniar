'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Layout } from '@/components/Layout'
import { RiSearch2Line, RiArrowLeftLine } from 'react-icons/ri'
import Image from 'next/image'
import { minerals } from '@/lib/minerals'
import { BottomNavigation } from '@/components/BottomNavigation'

export default function MineralList() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const filteredMinerals = minerals.filter(mineral =>
    mineral.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Layout>
      <div className="flex items-center bg-[#171122] p-4 pb-2 justify-between">
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">پایگاه داده کانی‌ها</h2>
        <div className="flex w-12 items-center justify-start">
          <button className="text-white">
            <RiSearch2Line size={24} />
          </button>
        </div>
      </div>
      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded h-full">
            <div className="text-[#a692c9] flex border-none bg-[#312348] items-center justify-center pr-4 rounded-r border-l-0">
              <RiSearch2Line size={24} />
            </div>
            <input
              placeholder="جستجوی کانی‌ها"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-white focus:outline-0 focus:ring-0 border-none bg-[#312348] focus:border-none h-full placeholder:text-[#a692c9] px-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </label>
      </div>
      <div className="grid grid-cols-2 gap-3 p-4">
        {filteredMinerals.map((mineral) => (
          <div
            key={mineral.id}
            className="bg-cover bg-center flex flex-col gap-3 rounded justify-end p-4 aspect-video cursor-pointer"
            style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url(${mineral.image})` }}
            onClick={() => router.push(`/mineral/${mineral.id}`)}
          >
            <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">{mineral.name}</p>
          </div>
        ))}
      </div>
      <BottomNavigation />
    </Layout>
  )
}

