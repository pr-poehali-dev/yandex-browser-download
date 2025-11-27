import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "Zap",
      title: "Молниеносная скорость",
      description: "Загрузка страниц на 30% быстрее конкурентов",
    },
    {
      icon: "Shield",
      title: "Защита данных",
      description: "Встроенная защита от фишинга и вирусов",
    },
    {
      icon: "Smartphone",
      title: "Синхронизация",
      description: "Все устройства в одном аккаунте",
    },
    {
      icon: "Star",
      title: "Умные подсказки",
      description: "Алиса поможет найти всё что нужно",
    },
  ];

  const benefits = [
    { number: "300М+", label: "Активных пользователей" },
    { number: "99.9%", label: "Защита от угроз" },
    { number: "4.8★", label: "Средняя оценка" },
  ];

  const security = [
    {
      icon: "Lock",
      title: "Защищённое соединение",
      text: "Автоматическое шифрование данных",
    },
    {
      icon: "Eye",
      title: "Режим инкогнито",
      text: "Приватный просмотр без сохранения истории",
    },
    {
      icon: "ShieldCheck",
      title: "Проверка сайтов",
      text: "Защита от опасных и мошеннических сайтов",
    },
  ];

  const reviews = [
    {
      name: "Алексей М.",
      rating: 5,
      text: "Лучший браузер! Быстрый, удобный, с Алисой — вообще огонь!",
    },
    {
      name: "Мария К.",
      rating: 5,
      text: "Перешла с Chrome и не жалею. Всё работает быстрее.",
    },
    {
      name: "Дмитрий П.",
      rating: 5,
      text: "Отличная защита данных. Чувствую себя в безопасности.",
    },
  ];

  const faq = [
    {
      question: "Яндекс Браузер бесплатный?",
      answer:
        "Да, Яндекс Браузер полностью бесплатен для всех пользователей.",
    },
    {
      question: "Будут ли сохранены мои закладки?",
      answer:
        "Да, при установке вы сможете импортировать закладки из любого браузера.",
    },
    {
      question: "Безопасно ли скачивать браузер?",
      answer:
        "Абсолютно! Вы скачиваете официальную версию с сайта Яндекса.",
    },
    {
      question: "Работает ли на всех устройствах?",
      answer:
        "Да, Яндекс Браузер доступен для Windows, macOS, Android и iOS.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <section className="relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center animate-fade-in">
              <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
                Яндекс Браузер
              </h1>
              <p className="text-xl md:text-2xl mb-4 font-semibold">
                Быстрый и безопасный браузер от Яндекса
              </p>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                С голосовым помощником Алисой и защитой данных
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="https://browser.yandex.ru/download?partner_id=831050&banerid=1313982495"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-7 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Icon name="Download" className="mr-2" size={24} />
                    Скачать для компьютера
                  </Button>
                </a>
                <a
                  href="https://redirect.appmetrica.yandex.com/serve/245744802526670871?clid=13982496&appmetrica_js_redirect=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-red-600 font-bold text-lg px-12 py-7 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Icon name="Smartphone" className="mr-2" size={24} />
                    Скачать для Android
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-8 mt-12">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center animate-scale-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-4xl md:text-5xl font-heading font-bold mb-2">
                      {benefit.number}
                    </div>
                    <div className="text-sm md:text-base opacity-90">
                      {benefit.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
              Преимущества браузера
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-red-500"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                      <Icon
                        name={feature.icon}
                        className="text-red-600"
                        size={32}
                      />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
              Безопасность и защита данных
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {security.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-red-300 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500 rounded-full mb-6">
                    <Icon name={item.icon} className="text-white" size={40} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
              Возможности и функции
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Всё необходимое для комфортной работы в интернете
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-yellow-400 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                        <Icon name="MessageCircle" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2">
                        Голосовой помощник Алиса
                      </h3>
                      <p className="text-gray-600">
                        Отвечает на вопросы, управляет браузером голосом и
                        помогает найти нужную информацию
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-yellow-400 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                        <Icon name="Blocks" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2">
                        Режим Турбо
                      </h3>
                      <p className="text-gray-600">
                        Ускоряет загрузку страниц при медленном интернете и
                        экономит трафик
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-yellow-400 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                        <Icon name="Bookmark" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2">
                        Умная строка поиска
                      </h3>
                      <p className="text-gray-600">
                        Подсказки при вводе, быстрый доступ к закладкам и
                        истории просмотров
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-yellow-400 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                        <Icon name="Languages" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2">
                        Встроенный переводчик
                      </h3>
                      <p className="text-gray-600">
                        Мгновенный перевод страниц и выделенного текста на 95
                        языков
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
              Отзывы пользователей
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <Card
                  key={index}
                  className="border-2 hover:shadow-xl transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className="text-yellow-400 fill-yellow-400"
                          size={20}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
              Вопросы и ответы
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border-2 rounded-lg px-6 hover:border-red-300 transition-all"
                >
                  <AccordionTrigger className="font-heading text-lg font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-red-500 to-red-700 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Готовы начать?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Присоединяйтесь к 300 миллионам пользователей Яндекс Браузера
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://browser.yandex.ru/download?partner_id=831050&banerid=1313982495"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-7 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Icon name="Download" className="mr-2" size={24} />
                  Скачать для компьютера
                </Button>
              </a>
              <a
                href="https://redirect.appmetrica.yandex.com/serve/245744802526670871?clid=13982496&appmetrica_js_redirect=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-red-600 font-bold text-lg px-12 py-7 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Icon name="Smartphone" className="mr-2" size={24} />
                  Скачать для Android
                </Button>
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-8 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-gray-400">
              © 2024 Яндекс. Все права защищены. Официальный партнёр Яндекса.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
