import { Layout } from '@/components/Layout'
import { Button } from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

// This is a dummy result. In a real application, this would be determined by the backend based on the user's answers.
const identificationResult = {
  name: 'کوارتز',
  image: '/images/quartz.png',
  properties: {
    color: 'شفاف تا سفید',
    hardness: 7,
    crystalSystem: 'هگزاگونال',
  },
}

export default function IdentificationResult() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">نتیجه شناسایی</h1>
      <div className="bg-purple-800 p-4 rounded-md">
        <h2 className="text-2xl font-semibold mb-2">{identificationResult.name}</h2>
        <Image src={identificationResult.image} alt={identificationResult.name} width={400} height={400} className="w-full max-w-md mx-auto mb-4 rounded-md" />
        <div className="space-y-2 mb-4">
          {Object.entries(identificationResult.properties).map(([key, value]) => (
            <p key={key}><span className="font-medium">{key}:</span> {value}</p>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          <Link href={`/mineral/1`} passHref>
            <Button className="w-full">مشاهده جزئیات</Button>
          </Link>
          <Link href="/identify" passHref>
            <Button variant="secondary" className="w-full">شناسایی مجدد</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

