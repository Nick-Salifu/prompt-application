import Feed from '@/components/Feed';

export default function Home() {
    return (
        <section className="w-full flex-col flex-center">
            <h1 className="head_text text-center">
                Discover $ Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">AI-Powered Prompts</span>
            </h1>

            <p className="text-center desc">
                Prompt-App is an open source AI prompting tool for modern world to discover, create and share creative prompt
            </p>

            <Feed />
        </section>
    )
}