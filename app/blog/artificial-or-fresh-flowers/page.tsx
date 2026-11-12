import GuideFrame from "@/components/blog/GuideFrame";
import Byline from "@/components/blog/Byline";
import Answer from "@/components/blog/Answer";
import Section from "@/components/blog/Section";
import Split from "@/components/blog/Split";
import Note from "@/components/blog/Note";
import Steps from "@/components/blog/Steps";
import Pairs from "@/components/blog/Pairs";
import Questions from "@/components/blog/Questions";
import Prose from "@/components/blog/Prose";
import { artificialOrFresh, guideMetadata, type GuideFaq, type GuideStep } from "@/lib/guides";
import Link from "next/link";

export const metadata = guideMetadata(artificialOrFresh);

const steps: readonly GuideStep[] = [
  {
    title: "Count the days",
    text: "If people see the flowers for one day, fresh is usually the right buy. If the display stays for a week or longer, artificial flowers hold their shape.",
  },
  {
    title: "Look at the room",
    text: "Direct sun, outdoor heat, and strong air-conditioning shorten the life of fresh stems. A cool indoor room is kinder to them.",
  },
  {
    title: "Name the job",
    text: "A gift, a condolence, or a bridal bouquet should be fresh. A permanent corner, a reused backdrop, or a window display can be artificial.",
  },
  {
    title: "Ask about water",
    text: "Fresh flowers need a vase. If the venue cannot take water or loose petals, use artificial flowers for that piece, or a small fresh arrangement that leaves the same day.",
  },
  {
    title: "Tell us the place and the date",
    text: "WhatsApp Èlore Florist in Surabaya with the occasion, the room, and how long the flowers must last. We will tell you if fresh flowers will hold.",
  },
];

const occasions = [
  {
    term: "Birthday or anniversary",
    text: "Fresh. The person should be able to smell the flowers and watch them open in the vase.",
  },
  {
    term: "Condolence",
    text: "Fresh. It is a gesture for that day, not a permanent object.",
  },
  {
    term: "Wedding ceremony",
    text: "Fresh, and booked ahead of the date. Same-day orders are for smaller bouquets, not a full ceremony.",
  },
  {
    term: "Hotel, office, or café corner",
    text: "Artificial if it stays for weeks. Fresh if you want the flowers replaced on a schedule.",
  },
  {
    term: "Shop opening or photo backdrop",
    text: "Artificial when the set is reused. Fresh when it only has to look right on the day.",
  },
] as const;

const faqs: readonly GuideFaq[] = [
  {
    question: "Do artificial flowers look real?",
    answer:
      "Up close, most artificial flowers do not feel like fresh stems, and they have no scent. From across a room they can look tidy and consistent. For a gift placed in someone's hands, fresh flowers are the clearer choice. For a backdrop people mostly see in photos, artificial flowers can be enough.",
  },
  {
    question: "How long do fresh flowers last in Surabaya?",
    answer:
      "A hand-arranged bouquet from Èlore Florist is prepared to stay fresh for 7 or more days with care: recut the stems, change the water daily, and keep the vase away from direct sun and strong air-conditioning. Outdoors at midday, expect a shorter life.",
  },
  {
    question: "Can a wedding use both artificial and fresh flowers?",
    answer:
      "Yes. Many weddings use fresh flowers for the bridal bouquet and the ceremony, and artificial pieces for decor that is set up early or kept afterwards. Tell Èlore Florist the venue and the schedule so the fresh flowers are made close to the event.",
  },
  {
    question: "Which should I buy for a gift?",
    answer:
      "Buy fresh flowers. A gift is about the person receiving it that day. Scent, soft petals, and flowers that open in the vase are the point. You can browse the fresh arrangements from Èlore Florist in Surabaya or message the shop with the occasion.",
  },
  {
    question: "Does Èlore Florist sell artificial flowers?",
    answer:
      "Èlore Florist arranges fresh flowers in Surabaya. If your place or timeline is hard on fresh stems, message the shop on WhatsApp. We will tell you honestly whether fresh flowers will last, or whether that part of the event should be artificial decor.",
  },
];

export default function ArtificialOrFreshPage() {
  return (
    <GuideFrame
      guide={artificialOrFresh}
      faqs={faqs}
      steps={steps}
      howToName="How to decide between artificial and fresh flowers"
      speakable
    >
      <article className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-semibold text-primary">{artificialOrFresh.title}</h1>
        <Byline published={artificialOrFresh.published} />

        <div className="mt-8">
          <Answer>
            Buy fresh flowers when someone will enjoy them for a few days and you want scent, soft petals, and a bouquet that opens in the vase. Buy artificial flowers when the display has to keep the same shape for weeks, in heat, in strong air-conditioning, or in a place that cannot hold water. Èlore Florist in Surabaya arranges fresh flowers. Tell us the date, the room, and how long the flowers must last, and we will say which choice fits.
          </Answer>
        </div>

        <Section id="side-by-side" title="Fresh or artificial, side by side">
          <Split
            left={{
              title: "Choose fresh flowers when",
              items: [
                "The bouquet is a gift someone will keep at home",
                "The event is one day, such as a wedding ceremony",
                "You want scent and flowers that open through the week",
                "The vase can stay out of direct sun",
              ],
            }}
            right={{
              title: "Choose artificial flowers when",
              items: [
                "The display stays up for many days or is reused",
                "The room is hot, in direct sun, or under strong air-conditioning",
                "The venue does not allow water or loose petals",
                "A shop window or photo set must look the same every day",
              ],
            }}
          />
        </Section>

        <Section id="surabaya-heat" title="What Surabaya heat does to fresh flowers">
          <Prose>
            Surabaya is hot and humid for most of the year. A bouquet that looks firm in the shop can tire faster on a sunny balcony, in a car, or beside an air-conditioning vent. Fresh flowers still do well indoors when someone can look after them.
          </Prose>
          <Prose>
            Hand-arranged bouquets from Èlore Florist are prepared to stay fresh for 7 or more days with ordinary care: recut the stems, change the water daily, and keep the vase away from direct sun and strong air-conditioning. The same care notes are on our{" "}
            <Link href="/faq" className="text-primary underline hover:opacity-70">FAQ</Link>. Outdoors at midday, plan on a shorter life, and tell us so we can choose hardier stems or time the delivery closer to the event.
          </Prose>
          <Note label="From the shop">
            If the flowers will sit outside through the hottest part of the day, say so before we design them. We would rather change the flowers or the delivery time than send a bouquet that fades before guests arrive.
          </Note>
        </Section>

        <Section id="when-artificial" title="When artificial is the better buy">
          <Prose>
            Artificial flowers are the practical buy when the job is the setting, not the gift. A hotel corner, a café shelf, or a backdrop that is photographed all month should not depend on a vase of water. They do not smell, and up close they do not feel like fresh stems. People notice that when a bouquet is placed in their hands. Use artificial flowers for a display people mostly see from a short distance. Use fresh flowers for the moment you hand someone a bouquet.
          </Prose>
          <Prose>
            For a wedding, the split is often both. The bridal bouquet and the ceremony flowers should be fresh, and made close to the day. Decor that is installed early, or that the venue wants to keep, can be artificial. See the{" "}
            <Link href="/weddings" className="text-primary underline hover:opacity-70">wedding flowers</Link>
            {" "}or message us with the venue and the schedule.
          </Prose>
        </Section>

        <Section id="how-to-decide" title="How to decide before you order">
          <Steps items={steps} />
        </Section>

        <Section id="occasions" title="Occasions we arrange in Surabaya">
          <Pairs items={occasions} />
        </Section>

        <Section id="questions" title="Questions before you buy">
          <Questions items={faqs} />
        </Section>

        <Section id="order" title="Order fresh flowers in Surabaya">
          <Prose>
            If the occasion calls for fresh flowers, look through our{" "}
            <Link href="/flowers" className="text-primary underline hover:opacity-70">flowers</Link>
            {" "}and{" "}
            <Link href="/gifts" className="text-primary underline hover:opacity-70">gifts</Link>. If you are still unsure, WhatsApp Èlore Florist at{" "}
            <a href="https://wa.me/6285885606353" className="text-primary underline hover:opacity-70">+62 858-8560-6353</a>
            {" "}and describe the room. The shop is at Jl. Siwalankerto Timur I No. 1B, Surabaya. We are open Monday to Friday, 09:00 to 17:00, and Saturday 09:00 to 16:00. Sunday we are closed. You can also{" "}
            <Link href="/contact" className="text-primary underline hover:opacity-70">visit the contact page</Link>.
          </Prose>
        </Section>
      </article>
    </GuideFrame>
  );
}
