"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// Иконка X больше не нужна, так как компонент Dialog сам ее добавит. Можно удалить эту строку.
// import { X } from "lucide-react"; 

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  const policyUrl = "https://docs.google.com/document/d/1-oysJOy-sw0ZDNZiKmTyvmq9sWZsHIellOK2gN1dqNk/edit?usp=sharing"; 

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[var(--dark-section)] border-[var(--border-subtle)] max-w-2xl">
        <DialogHeader>
          {/* Мы просто оставляем один заголовок. Крестик появится автоматически. */}
          <DialogTitle className="text-xl font-bold text-[var(--snow)]">Обработка персональных данных</DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <p className="text-[var(--dusty-grey)] leading-relaxed">
            Нажимая кнопку 'Оставить заявку', вы даете согласие на&nbsp;обработку ваших персональных данных. Мы свяжемся с&nbsp;вами по&nbsp;указанному email для&nbsp;демонстрации продукта. Подробнее о том, как&nbsp;мы обрабатываем данные, читайте в&nbsp;нашей{" "}
            <a 
              href={policyUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[var(--liquid-lava)] hover:underline"
            >
              политике конфиденциальности
            </a>
            .
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}