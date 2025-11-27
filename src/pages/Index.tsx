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
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trackDownload = (platform: string) => {
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(101026698, 'reachGoal', `download_${platform}`);
    }
  };

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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <section className="relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white py-12 md:py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center animate-fade-in">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6">
                Яндекс Браузер
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 font-semibold px-4">
                Быстрый и безопасный браузер от Яндекса
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90 px-4">
                С голосовым помощником Алисой и защитой данных
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
                <a
                  href="https://browser.yandex.ru/download?partner_id=831050&banerid=1313982495"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackDownload('desktop')}
                  className="hidden sm:block w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Icon name="Download" className="mr-2" size={20} />
                    Скачать для компьютера
                  </Button>
                </a>
                <a
                  href="https://redirect.appmetrica.yandex.com/serve/245744802526670871?clid=13982496&appmetrica_js_redirect=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackDownload('android')}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white hover:bg-gray-100 text-red-600 font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Icon name="Smartphone" className="mr-2" size={20} />
                    Скачать для Android
                  </Button>
                </a>
              </div>

              <div className="flex flex-col items-center gap-6 md:gap-8 mt-8 md:mt-12">
                <a 
                  href="https://yandex.ru/project/browser/bonus/multioffer/affiliate?source=yQjEd371UYSSK54848&partner_string=P89XvN11U6RuE47077&cliddbro=14041107&clidmbro=14041100&cliddefault=14041116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 md:p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://yandex.ru/project/browser/bonus/multioffer/affiliate?source=yQjEd371UYSSK54848%26partner_string=P89XvN11U6RuE47077%26cliddbro=14041107%26clidmbro=14041100%26cliddefault=14041116"
                    alt="QR код для скачивания Яндекс Браузера"
                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40"
                  />
                  <p className="text-center text-black text-xs sm:text-sm mt-2 font-semibold">Сканируй и скачивай</p>
                </a>
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center animate-scale-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-2">
                      {benefit.number}
                    </div>
                    <div className="text-xs sm:text-sm md:text-base opacity-90">
                      {benefit.label}
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-900 px-4">
              Преимущества браузера
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-red-500"
                >
                  <CardContent className="p-5 md:p-6 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-red-100 rounded-full mb-4">
                      <Icon
                        name={feature.icon}
                        className="text-red-600"
                        size={28}
                      />
                    </div>
                    <h3 className="font-heading text-lg md:text-xl font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-900 px-4">
              Безопасность и защита данных
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {security.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 md:p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-red-300 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-red-500 rounded-full mb-4 md:mb-6">
                    <Icon name={item.icon} className="text-white" size={36} />
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 md:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 text-gray-900 px-4">
              Возможности и функции
            </h2>
            <p className="text-center text-gray-600 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              Всё необходимое для комфортной работы в интернете
            </p>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <Card className="border-2 hover:border-yellow-400 transition-all">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                        <Icon name="MessageCircle" size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg md:text-xl font-bold mb-2">
                        Голосовой помощник Алиса
                      </h3>
                      <p className="text-sm md:text-base text-gray-600">
                        Отвечает на вопросы, управляет браузером голосом и
                        помогает найти нужную информацию
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-yellow-400 transition-all">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                        <Icon name="Blocks" size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg md:text-xl font-bold mb-2">
                        Режим Турбо
                      </h3>
                      <p className="text-sm md:text-base text-gray-600">
                        Ускоряет загрузку страниц при медленном интернете и
                        экономит трафик
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-yellow-400 transition-all">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                        <Icon name="Bookmark" size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg md:text-xl font-bold mb-2">
                        Умная строка поиска
                      </h3>
                      <p className="text-sm md:text-base text-gray-600">
                        Подсказки при вводе, быстрый доступ к закладкам и
                        истории просмотров
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-yellow-400 transition-all">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                        <Icon name="Languages" size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg md:text-xl font-bold mb-2">
                        Встроенный переводчик
                      </h3>
                      <p className="text-sm md:text-base text-gray-600">
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

        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-900 px-4">
              Отзывы пользователей
            </h2>
            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {reviews.map((review, index) => (
                <Card
                  key={index}
                  className="border-2 hover:shadow-xl transition-all"
                >
                  <CardContent className="p-5 md:p-6">
                    <div className="flex mb-3 md:mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className="text-yellow-400 fill-yellow-400"
                          size={18}
                        />
                      ))}
                    </div>
                    <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 italic">"{review.text}"</p>
                    <p className="text-sm md:text-base font-semibold text-gray-900">{review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-900 px-4">
              Вопросы и ответы
            </h2>
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {faq.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white border-2 rounded-lg px-4 md:px-6 hover:border-red-300 transition-all"
                  >
                    <AccordionTrigger className="font-heading text-base md:text-lg font-semibold hover:no-underline text-left py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-red-500 to-red-700 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-4">
              Готовы начать?
            </h2>
            <p className="text-lg md:text-xl mb-8 md:mb-10 opacity-90 px-4">
              Присоединяйтесь к 300 миллионам пользователей Яндекс Браузера
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <a
                href="https://browser.yandex.ru/download?partner_id=831050&banerid=1313982495"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDownload('desktop_cta')}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать для компьютера
                </Button>
              </a>
              <a
                href="https://redirect.appmetrica.yandex.com/serve/245744802526670871?clid=13982496&appmetrica_js_redirect=0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDownload('android_cta')}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white hover:bg-gray-100 text-red-600 font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Icon name="Smartphone" className="mr-2" size={20} />
                  Скачать для Android
                </Button>
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-6 md:py-8 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-sm md:text-base text-gray-400 px-4">
              © 2024 Яндекс. Все права защищены. Официальный партнёр Яндекса.
            </p>
          </div>
        </footer>

        <div
          className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 transition-all duration-500 transform ${
            showFloatingButton
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-20 opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <a
            href="https://browser.yandex.ru/download?partner_id=831050&banerid=1313982495"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackDownload('floating_desktop')}
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-2"
            >
              <Icon name="Download" size={18} />
              <span className="hidden sm:inline">Скачать браузер</span>
              <span className="sm:hidden">Скачать</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;