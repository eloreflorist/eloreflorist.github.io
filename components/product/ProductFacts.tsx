import { startingPriceText } from "@/lib/price";

type ProductFactsProps = {
  name: string;
  description: string;
  includes: readonly string[];
  price: number;
};

export default function ProductFacts({ name, description, includes, price }: ProductFactsProps) {
  const included = includes.join(", ");
  const priceText = startingPriceText(price);
  const answer = `${name} is arranged at Èlore Florist in Siwalankerto, Surabaya. ${description} It includes ${included}. ${priceText}. The shop confirms the stems on WhatsApp because flowers change with the season.`;
  const questions = [
    {
      question: `What is in ${name}?`,
      answer,
    },
    {
      question: `How do I order ${name} in Surabaya?`,
      answer: `Message Èlore Florist on WhatsApp at +62 858-8560-6353, or open this page and send the bouquet name. The shop confirms the stems, sends a quote, and arranges pickup at Jl. Siwalankerto Timur I No. 1B or delivery across Surabaya.`,
    },
    {
      question: `How long will ${name} last?`,
      answer: `Plan on 7 or more days indoors. Recut the stems, change the water daily, and keep the vase out of direct sun and strong air-conditioning. Midday heat outdoors shortens that life.`,
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["#product-answer"] },
  };

  return (
    <section className="mb-8 space-y-6" aria-labelledby="product-facts">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h2 id="product-facts" className="text-xl font-semibold">
        What is in {name}?
      </h2>
      <p id="product-answer" className="leading-relaxed text-gray-700">
        {answer}
      </p>
      <div>
        <h2 className="mb-2 text-xl font-semibold">How do I order {name} in Surabaya?</h2>
        <ol className="list-decimal space-y-2 pl-5 text-gray-700">
          <li>Send the bouquet name on WhatsApp to +62 858-8560-6353.</li>
          <li>Tell the shop the occasion, the date, and whether you want pickup or delivery in Surabaya.</li>
          <li>Wait for the quote. Prices change with the season, and same-day delivery is often possible before 12:00, Monday to Saturday. The shop is closed on Sunday.</li>
        </ol>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-semibold">How long will {name} last?</h2>
        <p className="leading-relaxed text-gray-700">{questions[2].answer}</p>
      </div>
    </section>
  );
}
