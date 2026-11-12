import Answer from "@/components/blog/Answer";
import Byline from "@/components/blog/Byline";
import GuideFrame from "@/components/blog/GuideFrame";
import Note from "@/components/blog/Note";
import Prose from "@/components/blog/Prose";
import Questions from "@/components/blog/Questions";
import Section from "@/components/blog/Section";
import Steps from "@/components/blog/Steps";
import type { ShopGuide } from "@/lib/guides";
import Link from "next/link";

export default function ShopGuidePage({ guide }: { guide: ShopGuide }) {
  return (
    <GuideFrame guide={guide} faqs={guide.faqs} steps={guide.steps} howToName={guide.howToName} speakable>
      <article className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-semibold text-primary">{guide.title}</h1>
        <Byline published={guide.published} />
        <div className="mt-8">
          <Answer>{guide.answer}</Answer>
        </div>
        <Section id="from-the-shop" title="From the shop in Surabaya">
          <Note label="From the shop">{guide.note}</Note>
        </Section>
        <Section id="steps" title={guide.howToName}>
          <Steps items={guide.steps} />
        </Section>
        <Section id="questions" title="Questions">
          <Questions items={guide.faqs} />
        </Section>
        <Section id="order" title="Order from Èlore Florist">
          <Prose>
            Browse the{" "}
            <Link href="/flowers" className="text-primary underline hover:opacity-70">flowers</Link>
            {", "}
            <Link href="/gifts" className="text-primary underline hover:opacity-70">gifts</Link>
            {", and "}
            <Link href="/weddings" className="text-primary underline hover:opacity-70">wedding flowers</Link>
            {", or read the "}
            <Link href="/faq" className="text-primary underline hover:opacity-70">FAQ</Link>
            . WhatsApp{" "}
            <a href="https://wa.me/6285885606353" className="text-primary underline hover:opacity-70">+62 858-8560-6353</a>
            {" "}or{" "}
            <Link href="/contact" className="text-primary underline hover:opacity-70">visit the shop page</Link>.
          </Prose>
        </Section>
      </article>
    </GuideFrame>
  );
}
