import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { InfoCard } from "@/components/InfoCard";
import { ContactCard } from "@/components/ContactCard";
import { Sparkles, Heart, Users, MessageCircle, Send } from "lucide-react";
import elinaPhoto from "@/assets/elina-photo.png";

const Index = () => {
  const handleTelegramContact = () => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.sendData(JSON.stringify({ action: 'contact_therapy' }));
    } else {
      window.open('https://t.me/elina_goncova', '_blank');
    }
  };

  const handleChannelVisit = () => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.sendData(JSON.stringify({ action: 'visit_channel' }));
    } else {
      window.open('https://t.me/energy_elina', '_blank');
    }
  };

  const handleRazbor = () => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.sendData(JSON.stringify({ action: 'razbor' }));
    } else {
      window.open('https://t.me/elina_goncova', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/50 to-background">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                Управление <span className="italic text-primary">энергией</span> и новой версией себя
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                Бережно к тебе ✨
              </p>
              <p className="text-base text-foreground/80 mb-8 max-w-2xl">
                Меня зовут Элина Гонцова, я дипломированный энергокоуч. 
                Помогаю людям обретать гармонию, расти в доходе и жить лучшую версию своей жизни через работу с энергией.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  variant="card" 
                  size="xl"
                  onClick={handleTelegramContact}
                >
                  <Send className="w-5 h-5" />
                  Записаться на терапию
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={handleChannelVisit}
                >
                  Перейти в канал
                </Button>
              </div>
            </div>
            <div className="w-full md:w-auto md:flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl"></div>
                <img 
                  src={elinaPhoto} 
                  alt="Элина Гонцова - Энергокоуч" 
                  className="relative w-full h-full object-cover rounded-full shadow-[var(--shadow-hover)] ring-4 ring-primary/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Мои <span className="italic text-primary">энерготерапии</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Метод обладает уникальной точностью — я ищу причину энергоблока, а не заклеиваю проблему пластырем
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <ServiceCard
              icon={Sparkles}
              title="Энерготерапия по Методу Соло"
              description="Индивидуальная работа с энергополем для трансформации и роста"
              features={[
                "Поиск и устранение причины энергоблоков",
                "Избавление от родовых сглазов и негативных программ",
                "Обретение гармонии в отношениях",
                "Рост в доходе и карьере"
              ]}
              buttonText="Записаться на терапию"
              onClick={handleTelegramContact}
            />
            
            <ServiceCard
              icon={Users}
              title="Групповые расстановки"
              description="Энергопрактики и трансформационные сессии в формате группы"
              features={[
                "Работа с МАК картами",
                "Трансляции с энергопрактиками",
                "Расклады на неделю",
                "Поддержка единомышленников"
              ]}
              buttonText="Участвовать в практиках"
              onClick={handleChannelVisit}
            />
          </div>

          <div className="bg-gradient-to-br from-accent to-background rounded-2xl p-8 text-center shadow-[var(--shadow-card)]">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Первая терапия с оплатой по сердцу
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Готовы к трансформациям и росту? Напишите мне слово <span className="font-bold text-primary">РАЗБОР</span> в личные сообщения
            </p>
            <Button
              variant="card"
              size="xl"
              onClick={handleRazbor}
            >
              <MessageCircle className="w-5 h-5" />
              Написать РАЗБОР
            </Button>
          </div>
        </div>
      </section>

      {/* Free Materials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Бесплатные <span className="italic text-primary">материалы</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ценные инсайты и практики для вашего роста
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard
              title="Энергопрактики"
              subtitle="Трансформация через энергию"
              items={[
                "Техники работы с энергополем",
                "Практики для повышения вибраций",
                "Методы очищения пространства",
                "Упражнения для баланса энергии"
              ]}
              buttonText="Получить материалы"
              onClick={handleChannelVisit}
            />

            <InfoCard
              title="Расклады и инсайты"
              subtitle="Еженедельная поддержка"
              items={[
                "Расклады на неделю по МАК картам",
                "Энергетические прогнозы",
                "Инсайты с обучений и ретритов",
                "Практические рекомендации"
              ]}
              buttonText="Смотреть расклады"
              onClick={handleChannelVisit}
            />

            <InfoCard
              title="Трансформационные практики"
              subtitle="Путь к лучшей версии себя"
              items={[
                "Медитации и визуализации",
                "Работа с убеждениями",
                "Техники манифестации",
                "Практики благодарности"
              ]}
              buttonText="Начать практиковать"
              onClick={handleChannelVisit}
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-[var(--shadow-card)] border-2 border-accent">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Результаты людей после энерготерапий
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/80">Растут в доходе</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/80">Обретают гармонию в отношениях</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/80">Улучшают отношения с детьми</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/80">Избавляются от родовых сглазов и негативных программ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Присоединяйтесь к <span className="italic text-primary">сообществу</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Канал для женщин, где уютно. Трансформации, рост и лучшая версия жизни
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ContactCard
              platform="Telegram канал"
              title="Energy Elina"
              description="Энергопрактики, расклады, инсайты и поддержка на пути трансформации"
              buttonText="Подписаться на канал"
              url="https://t.me/energy_elina"
              onClick={handleChannelVisit}
            />

            <ContactCard
              platform="Личная связь"
              title="Записаться на терапию"
              description="Напишите мне напрямую для записи на энерготерапию или консультацию"
              buttonText="Написать в Telegram"
              url="https://t.me/elina_goncova"
              onClick={handleTelegramContact}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm mb-2">
            Элина Гонцова — Энергокоуч
          </p>
          <p className="text-xs text-primary-foreground/70">
            ELROOM.STUDIO | Управление энергией и трансформация жизни
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
