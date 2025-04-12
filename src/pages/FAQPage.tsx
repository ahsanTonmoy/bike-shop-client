import { useState } from "react";

export default function FAQPage() {
  const faqs = [
    {
      question: "How can I order a bike from your bike shop?",
      answer:
        "To order a bike from our website, browse the product catalog, select your preferred bike, and click the 'Order Now' button.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery is usually made within 3 to 5 working days after the order is confirmed. However, the time may vary depending on the region.",
    },
    {
      question: "What are your payment options?",
      answer:
        "We accept various payment methods such as bKash, Nagad, Rocket, and credit/debit cards.",
    },
    {
      question: "Is there a warranty with the bike?",
      answer:
        "Yes, we offer a 1-year warranty for each bike, which covers manufacturing defects only.",
    },
    {
      question: "Can I customize the bike?",
      answer:
        "Yes, we offer customization services on certain models. For more details, please contact our customer service team.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center text-crimson-red">
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="bg-white rounded-lg shadow-md">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full px-6 py-4 font-semibold text-left text-dark-blue hover:bg-gray-200 focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform ${
                    activeIndex === index ? "rotate-180" : ""
                  } transition-transform duration-300`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 text-gray-700 bg-gray-50">
                  {faq.answer}
                </div>
              )}
              <hr className="border-t border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
