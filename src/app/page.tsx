"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PrivacyModal } from "@/components/privacy-modal";
import { MessageSquare, FileQuestion as FolderQuestion, Clock } from "lucide-react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  
  const policyUrl = "https://docs.google.com/document/d/1-oysJOy-sw0ZDNZiKmTyvmq9sWZsHIellOK2gN1dqNk/edit?usp=sharing"; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      
      {/* НОВЫЙ КИНЕМАТОГРАФИЧНЫЙ ГЛАВНЫЙ ЭКРАН */}
      <section className="relative w-full h-screen flex items-center justify-center text-center">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 -z-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-[var(--snow)] leading-tight">
            Согласование видео&nbsp;— в&nbsp;два раза быстрее. Без хаоса и&nbsp;нервов.
          </h1>
          <p className="text-xl lg:text-2xl text-[var(--dusty-grey)] leading-relaxed max-w-3xl mx-auto">
            Наша платформа превращает хаос из&nbsp;сотен комментариев в&nbsp;почте и&nbsp;Telegram в&nbsp;единый, наглядный процесс. Финальная версия&nbsp;— всегда под рукой.
          </p>
          <Button
            size="lg"
            className="bg-[var(--liquid-lava)] hover:bg-[var(--liquid-lava)]/90 text-white px-10 py-4 text-xl font-semibold"
            onClick={() => setIsModalOpen(true)}
          >
            Оставить заявку
          </Button>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--snow)] text-center mb-16">
          Ваш процесс согласования выглядит так?
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 mx-auto">
              <MessageSquare className="w-full h-full text-[var(--liquid-lava)]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[var(--snow)]">Комментарии в&nbsp;10&nbsp;чатах</h3>
            <p className="text-[var(--dusty-grey)] leading-relaxed">
              Правки от&nbsp;клиента в&nbsp;почте, от&nbsp;арт-директора в&nbsp;Telegram, а&nbsp;от&nbsp;продюсера&nbsp;— в&nbsp;WhatsApp. Важные детали неизбежно теряются.
            </p>
          </div>
          <div className="text-center space-y-6">
            <div className="w-16 h-16 mx-auto">
              <FolderQuestion className="w-full h-full text-[var(--liquid-lava)]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[var(--snow)]">Где финальная версия?</h3>
            <p className="text-[var(--dusty-grey)] leading-relaxed">
              <code className="bg-[var(--border-subtle)] px-2 py-1 rounded text-sm">Final_v2_approved.mp4</code> или&nbsp;
              <code className="bg-[var(--border-subtle)] px-2 py-1 rounded text-sm">Final_v3_use_this.mov</code>? Поиск актуальной версии ролика превращается в&nbsp;квест.
            </p>
          </div>
          <div className="text-center space-y-6">
            <div className="w-16 h-16 mx-auto">
              <Clock className="w-full h-full text-[var(--liquid-lava)]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[var(--snow)]">Правка &apos;где-то на&nbsp;5-й секунде&apos;</h3>
            <p className="text-[var(--dusty-grey)] leading-relaxed">
              Неточные комментарии без привязки к&nbsp;кадру затягивают согласование и&nbsp;приводят к&nbsp;бесконечным доработкам.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-32">
        {/* Feature 1 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <img 
            src="/01.webp" 
            alt="Скриншот доски со всеми версиями видео" 
            width={1200} 
            height={632} 
            className="rounded-lg border border-[var(--border-subtle)]"
          />
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-[var(--snow)]">Единая доска-хранилище</h3>
            <p className="text-lg text-[var(--dusty-grey)] leading-relaxed">
              Забудьте о&nbsp;поиске в&nbsp;чатах. Все версии вашего ролика&nbsp;— от&nbsp;первого драфта до&nbsp;финального&nbsp;— хранятся в&nbsp;одном наглядном пространстве. Вы&nbsp;и&nbsp;ваш клиент всегда видите актуальную версию и&nbsp;всю историю правок.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 lg:order-1">
            <h3 className="text-3xl lg:text-4xl font-bold text-[var(--snow)]">Комментарии с&nbsp;точностью до&nbsp;кадра</h3>
            <p className="text-lg text-[var(--dusty-grey)] leading-relaxed">
              Оставляйте правки прямо на&nbsp;таймлайне видео. Просто кликните в&nbsp;нужный момент, напишите комментарий и&nbsp;прикрепите референс. Больше никакого недопонимания.
            </p>
          </div>
          <img 
            src="/02.webp" 
            alt="Пример комментария, привязанного к таймлайну видео" 
            width={1200} 
            height={632} 
            className="rounded-lg border border-[var(--border-subtle)] lg:order-2"
          />
        </div>

        {/* Feature 3 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <img 
            src="/03.webp" 
            alt="Пример выделения объекта на кадре для точной правки" 
            width={1200} 
            height={632} 
            className="rounded-lg border border-[var(--border-subtle)]"
          />
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-[var(--snow)]">Выделяйте объекты прямо на&nbsp;видео</h3>
            <p className="text-lg text-[var(--dusty-grey)] leading-relaxed">
              Нужно указать на&nbsp;конкретный элемент в&nbsp;кадре? Просто обведите его и&nbsp;оставьте комментарий. Идеально для правок по&nbsp;реквизиту, персонажам, графике или цвету.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[var(--dark-section)] py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--snow)]">
            Наведите порядок в&nbsp;согласовании уже сегодня
          </h2>
          <p className="text-xl text-[var(--dusty-grey)] leading-relaxed">
            Оставьте заявку, и&nbsp;мы&nbsp;свяжемся с&nbsp;вами, чтобы предоставить демо-доступ к&nbsp;платформе.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-[var(--dark-void)] border-[var(--border-subtle)] text-[var(--snow)] placeholder:text-[var(--dusty-grey)]"
            />
            <Button
              type="submit"
              className="bg-[var(--liquid-lava)] hover:bg-[var(--liquid-lava)]/90 text-white px-8 py-2 font-semibold"
            >
              Оставить заявку
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--dark-void)] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div className="font-bold text-xl text-[var(--snow)] mb-4 sm:mb-0">Pravki.io</div>
            <a
              href={policyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--dusty-grey)] hover:text-[var(--liquid-lava)] transition-colors"
            >
              Политика конфиденциальности
            </a>
          </div>
          <div className="w-full h-px bg-[var(--border-subtle)] mb-8"></div>
          <div className="text-center text-sm text-[var(--dusty-grey)]">© 2025 Pravki.io. Все права защищены.</div>
        </div>
      </footer>

      <PrivacyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}