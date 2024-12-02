import { Layout } from '@/components/Layout'
import Image from 'next/image'
import { minerals } from '@/lib/minerals'
import Link from 'next/link'
import { RiArrowLeftLine, RiShareLine } from 'react-icons/ri'
import { BottomNavigation } from '@/components/BottomNavigation'

export async function generateStaticParams() {
  return minerals.map((mineral) => ({
    id: mineral.id.toString(),
  }))
}

export default function MineralDetail({ params }: { params: { id: string } }) {
  const mineral = minerals.find(m => m.id === parseInt(params.id))

  if (!mineral) {
    return (
      <Layout>
        <h1 className="text-3xl font-bold mb-4 text-purple-300">کانی یافت نشد</h1>
        <p className="text-gray-300">متأسفانه کانی مورد نظر شما پیدا نشد.</p>
        <Link href="/mineral-list" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded">
          بازگشت به لیست کانی‌ها
        </Link>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="flex items-center bg-[#171122] p-4 pb-2 justify-between">
        <Link href="/mineral-list" className="text-white">
          <RiArrowLeftLine size={24} />
        </Link>
        <div className="flex w-12 items-center justify-start">
          <button className="text-white">
            <RiShareLine size={24} />
          </button>
        </div>
      </div>
      <div className="@container">
        <div className="@[480px]:px-4 @[480px]:py-3">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#171122] @[480px]:rounded min-h-[218px]"
            style={{ backgroundImage: `url(${mineral.image})` }}
          ></div>
        </div>
      </div>
      <h1 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-right pb-3 pt-5">{mineral.name}</h1>
      <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
        {mineral.description}
      </p>
      <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">ویژگی‌ها</h3>
      <div className="flex items-center gap-4 bg-[#171122] px-4 min-h-[72px] py-2">
        <div className="flex flex-col justify-center">
          <p className="text-white text-base font-medium leading-normal line-clamp-1">رنگ</p>
          <p className="text-[#a692c9] text-sm font-normal leading-normal line-clamp-2">{mineral.color}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-[#171122] px-4 min-h-[72px] py-2">
        <div className="flex flex-col justify-center">
          <p className="text-white text-base font-medium leading-normal line-clamp-1">سختی</p>
          <p className="text-[#a692c9] text-sm font-normal leading-normal line-clamp-2">{mineral.hardness}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-[#171122] px-4 min-h-[72px] py-2">
        <div className="flex flex-col justify-center">
          <p className="text-white text-base font-medium leading-normal line-clamp-1">سیستم بلوری</p>
          <p className="text-[#a692c9] text-sm font-normal leading-normal line-clamp-2">{mineral.crystalSystem}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-[#171122] px-4 min-h-[72px] py-2">
        <div className="flex flex-col justify-center">
          <p className="text-white text-base font-medium leading-normal line-clamp-1">فرمول شیمیایی</p>
          <p className="text-[#a692c9] text-sm font-normal leading-normal line-clamp-2">{mineral.chemicalFormula}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 bg-[#722bee] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
            <span className="truncate">شناسایی کانی مشابه</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 bg-[#312348] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
            <span className="truncate">افزودن به مجموعه</span>
          </button>
        </div>
      </div>
      <BottomNavigation />
    </Layout>
  )
}

