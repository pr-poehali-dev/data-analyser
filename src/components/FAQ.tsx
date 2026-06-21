import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "С какими объектами вы работаете?",
    answer:
      "Мы специализируемся на коммерческих интерьерах: рестораны, кафе и бары, офисы и коворкинги, магазины и шоурумы, отели, спа и салоны красоты. Работаем как с новыми помещениями, так и с реконструкцией действующих объектов.",
  },
  {
    question: "Сколько времени занимает проект?",
    answer:
      "Дизайн-проект коммерческого интерьера обычно занимает от 1,5 до 3 месяцев в зависимости от площади и сложности. С учётом реализации и авторского надзора средний срок «под ключ» составляет от 3 до 6 месяцев. Точные сроки фиксируем в договоре.",
  },
  {
    question: "Что входит в дизайн-проект?",
    answer:
      "Полный пакет включает обмерный план, планировочное решение, 3D-визуализации, рабочие чертежи, подбор и спецификацию материалов, мебели и оборудования. По запросу добавляем комплектацию и авторский надзор за реализацией.",
  },
  {
    question: "Помогаете ли вы с реализацией и закупками?",
    answer:
      "Да. Мы сопровождаем проект на всех этапах: подбираем подрядчиков, контролируем закупки и поставки, ведём авторский надзор на объекте, чтобы итог точно соответствовал утверждённому проекту.",
  },
  {
    question: "Учитываете ли вы требования и нормы для коммерции?",
    answer:
      "Обязательно. Мы проектируем с учётом санитарных норм, пожарной безопасности, логистики персонала и потоков посетителей. Ваш объект будет готов к проверкам и комфортен в ежедневной эксплуатации.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Начните с бесплатной консультации: обсудим вашу концепцию, площадь, бюджет и задачи бизнеса. После этого подготовим коммерческое предложение и техническое задание под ваш объект.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}