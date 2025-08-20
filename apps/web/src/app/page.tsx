'use client'

import { Button } from '@truesource/ui'

export default function Home() {
    return (
        <main className="mx-auto max-w-2xl p-8">
            <h1 className="text-3xl font-bold mb-4">TrueSource</h1>
            <p className="mb-6">
                Monorepo is alive. Web (Next.js + Tailwind v4) running.
            </p>
            <Button onClick={() => alert('Hello')}>Test Button</Button>
            <div className="text-red-500">If this is red, Tailwind works</div>
        </main>
    )
}
