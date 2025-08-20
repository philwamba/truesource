import './globals.css'

export const metadata = {
    title: 'TrueSource',
    description: 'Verification, fast and cited.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="min-h-dvh bg-white text-black antialiased">
                {children}
            </body>
        </html>
    )
}
