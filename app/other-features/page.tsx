'use client'
import { Layout } from '@/components/Layout'
import { Button } from '@/components/Button'
import { useRouter } from 'next/navigation'

export default function OtherFeatures() {
  const router = useRouter()

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Other Features</h1>
      <p className="mb-4">This section is under development. More features coming soon!</p>
      <Button onClick={() => router.push('/')}>Back to Home</Button>
    </Layout>
  )
}

