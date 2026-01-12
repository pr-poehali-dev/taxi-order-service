import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [address, setAddress] = useState('');
  const [selectedTariff, setSelectedTariff] = useState('standard');
  const [volume, setVolume] = useState('5');

  const tariffs = [
    { id: 'standard', name: 'Стандарт 5м³', price: 3500, time: '30-60 мин', icon: 'Truck', volume: '5' },
    { id: 'medium', name: 'Средний 10м³', price: 6000, time: '30-60 мин', icon: 'Truck', volume: '10' },
    { id: 'large', name: 'Большой 15м³', price: 8500, time: '30-60 мин', icon: 'Truck', volume: '15' },
    { id: 'urgent', name: 'Срочный выезд', price: 5000, time: '15-30 мин', icon: 'Zap', volume: '5' }
  ];

  const serviceHistory = [
    { id: 1, address: 'ул. Карла Маркса, 45', date: '10 янв', price: 3500, volume: '5м³', status: 'completed' },
    { id: 2, address: 'пер. Светлый, 12', date: '8 янв', price: 6000, volume: '10м³', status: 'completed' },
    { id: 3, address: 'ул. Байкальская, 78', date: '5 янв', price: 3500, volume: '5м³', status: 'completed' }
  ];

  const paymentMethods = [
    { id: 1, type: 'card', number: '•••• 4242', brand: 'Visa', primary: true },
    { id: 2, type: 'card', number: '•••• 8888', brand: 'MasterCard', primary: false }
  ];

  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Droplet" size={28} className="text-accent" />
            <div>
              <h1 className="text-xl font-bold">otkachka-pro.ru</h1>
              <p className="text-xs opacity-80">Ассенизаторские услуги в Иркутске</p>
            </div>
          </div>
          <Avatar>
            <AvatarFallback className="bg-accent text-accent-foreground">ИП</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="container mx-auto p-4 pb-24">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="home" className="flex flex-col gap-1">
              <Icon name="Home" size={20} />
              <span className="text-xs">Главная</span>
            </TabsTrigger>
            <TabsTrigger value="order" className="flex flex-col gap-1">
              <Icon name="ClipboardList" size={20} />
              <span className="text-xs">Заказ</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex flex-col gap-1">
              <Icon name="User" size={20} />
              <span className="text-xs">Профиль</span>
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex flex-col gap-1">
              <Icon name="CreditCard" size={20} />
              <span className="text-xs">Оплата</span>
            </TabsTrigger>
            <TabsTrigger value="support" className="flex flex-col gap-1">
              <Icon name="HeadphonesIcon" size={20} />
              <span className="text-xs">Поддержка</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-6 animate-fade-in">
            <Card className="p-6 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
              <h2 className="text-2xl font-bold mb-2">Откачка септиков и выгребных ям</h2>
              <p className="text-sm opacity-80 mb-4">Работаем круглосуточно по Иркутску и области</p>
              <div className="space-y-4">
                <div className="relative">
                  <Icon name="MapPin" size={20} className="absolute left-3 top-3 text-accent" />
                  <Input
                    placeholder="Введите адрес объекта"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="pl-12 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <Button 
                    variant={volume === '5' ? 'default' : 'outline'}
                    onClick={() => setVolume('5')}
                    className={volume === '5' ? 'bg-accent text-accent-foreground' : 'bg-white/10 border-white/20 text-primary-foreground'}
                  >
                    5 м³
                  </Button>
                  <Button 
                    variant={volume === '10' ? 'default' : 'outline'}
                    onClick={() => setVolume('10')}
                    className={volume === '10' ? 'bg-accent text-accent-foreground' : 'bg-white/10 border-white/20 text-primary-foreground'}
                  >
                    10 м³
                  </Button>
                  <Button 
                    variant={volume === '15' ? 'default' : 'outline'}
                    onClick={() => setVolume('15')}
                    className={volume === '15' ? 'bg-accent text-accent-foreground' : 'bg-white/10 border-white/20 text-primary-foreground'}
                  >
                    15 м³
                  </Button>
                </div>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-6 text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать машину
                </Button>
              </div>
            </Card>

            <div className="relative h-[300px] bg-gradient-to-br from-green-50 to-blue-50 rounded-lg overflow-hidden shadow-lg p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50">
                <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
                  <path d="M50 200 Q 100 150, 150 200 T 250 200" stroke="#22C55E" strokeWidth="4" fill="none" />
                  <path d="M100 100 L 200 150 L 300 100" stroke="#22C55E" strokeWidth="4" fill="none" />
                  <circle cx="150" cy="200" r="10" fill="#22C55E" className="animate-pulse" />
                  <circle cx="250" cy="180" r="8" fill="#1A1F2C" />
                </svg>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="bg-white/90 backdrop-blur rounded-lg p-4 w-fit">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="MapPin" size={20} className="text-accent" />
                    <span className="font-semibold text-lg">Иркутск</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Работаем по всему городу и области</p>
                </div>
                <div className="bg-white/90 backdrop-blur rounded-lg p-3 w-fit">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={18} className="text-accent" />
                    <span className="font-semibold">Среднее время подачи: 30-60 минут</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 hover-scale cursor-pointer border-2 border-accent/20">
                <Icon name="Clock" size={24} className="text-accent mb-2" />
                <h3 className="font-semibold mb-1">История заказов</h3>
                <p className="text-sm text-muted-foreground">{serviceHistory.length} выполнено</p>
              </Card>
              <Card className="p-4 hover-scale cursor-pointer border-2 border-accent/20">
                <Icon name="Sparkles" size={24} className="text-accent mb-2" />
                <h3 className="font-semibold mb-1">Срочный выезд</h3>
                <p className="text-sm text-muted-foreground">За 15-30 минут</p>
              </Card>
            </div>

            <Card className="p-6 bg-accent/5 border-2 border-accent/20">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Info" size={20} className="text-accent" />
                Наши преимущества
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Современные ассенизаторские машины объёмом 5, 10 и 15 м³</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Работаем круглосуточно, без выходных</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Быстрая подача машины — в течение 30-60 минут</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Опытные специалисты с лицензией на утилизацию</span>
                </li>
              </ul>
            </Card>
          </TabsContent>

          <TabsContent value="order" className="space-y-6 animate-fade-in">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Выберите объём машины</h2>
              <div className="space-y-3">
                {tariffs.map((tariff) => (
                  <Card
                    key={tariff.id}
                    className={`p-4 cursor-pointer transition-all hover-scale ${
                      selectedTariff === tariff.id ? 'border-2 border-accent bg-accent/5' : ''
                    }`}
                    onClick={() => setSelectedTariff(tariff.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon name={tariff.icon as any} size={28} className="text-accent" />
                        <div>
                          <h3 className="font-semibold">{tariff.name}</h3>
                          <p className="text-sm text-muted-foreground">Подача {tariff.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold">{tariff.price.toLocaleString()} ₽</p>
                        {selectedTariff === tariff.id && (
                          <Badge className="bg-accent text-accent-foreground">Выбрано</Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Дополнительные услуги</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-accent" />
                  <span>Промывка септика (+500 ₽)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-accent" />
                  <span>Увеличенный шланг 20м (+800 ₽)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-accent" />
                  <span>Срочный выезд (+1500 ₽)</span>
                </label>
              </div>
            </Card>

            <Card className="p-4 bg-muted">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} className="text-accent mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Обратите внимание</p>
                  <p className="text-muted-foreground">
                    Стоимость указана для Иркутска в пределах города. За работы за городом возможна доплата в зависимости от расстояния.
                  </p>
                </div>
              </div>
            </Card>

            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-6 text-lg">
              Оформить заказ за {tariffs.find(t => t.id === selectedTariff)?.price.toLocaleString()} ₽
            </Button>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6 animate-fade-in">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="bg-accent text-accent-foreground text-2xl">ИП</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold">Иван Петров</h2>
                  <p className="text-muted-foreground">+7 (950) 123-45-67</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Icon name="Star" size={16} className="text-accent fill-accent" />
                    <span className="font-semibold">Постоянный клиент</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full">Редактировать профиль</Button>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Clock" size={20} />
                История заказов
              </h3>
              <div className="space-y-3">
                {serviceHistory.map((service) => (
                  <Card key={service.id} className="p-4 hover-scale cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="flex items-start gap-2 mb-2">
                          <Icon name="MapPin" size={16} className="text-accent mt-1" />
                          <p className="text-sm font-medium">{service.address}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Droplet" size={14} />
                          <span>{service.volume}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{service.price.toLocaleString()} ₽</p>
                        <p className="text-xs text-muted-foreground">{service.date}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-green-500 text-green-600">
                      <Icon name="CheckCircle2" size={12} className="mr-1" />
                      Выполнено
                    </Badge>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="payment" className="space-y-6 animate-fade-in">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="CreditCard" size={24} />
                Способы оплаты
              </h2>
              <div className="space-y-3 mb-4">
                {paymentMethods.map((method) => (
                  <Card key={method.id} className="p-4 hover-scale cursor-pointer border-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon name="CreditCard" size={24} className="text-accent" />
                        <div>
                          <p className="font-semibold">{method.brand}</p>
                          <p className="text-sm text-muted-foreground">{method.number}</p>
                        </div>
                      </div>
                      {method.primary && (
                        <Badge className="bg-accent text-accent-foreground">Основная</Badge>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="w-full">
                <Icon name="Plus" size={18} className="mr-2" />
                Добавить карту
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Другие способы</h3>
              <div className="space-y-3">
                <Card className="p-4 hover-scale cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Icon name="Wallet" size={24} className="text-accent" />
                    <span className="font-semibold">Наличные водителю</span>
                  </div>
                </Card>
                <Card className="p-4 hover-scale cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Icon name="FileText" size={24} className="text-accent" />
                    <span className="font-semibold">По счёту для юр. лиц</span>
                  </div>
                </Card>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="support" className="space-y-6 animate-fade-in">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="HeadphonesIcon" size={24} />
                Служба поддержки
              </h2>
              <p className="text-muted-foreground mb-4">Мы работаем 24/7 и готовы помочь вам</p>
              <div className="space-y-3">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Позвонить: 8-950-123-45-67
                </Button>
                <Button variant="outline" className="w-full">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Написать в WhatsApp
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Часто задаваемые вопросы</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Как быстро приедет машина?</AccordionTrigger>
                  <AccordionContent>
                    Стандартное время подачи машины составляет 30-60 минут с момента оформления заказа. 
                    При срочном заказе машина приедет в течение 15-30 минут.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Какой объём септика мне нужен?</AccordionTrigger>
                  <AccordionContent>
                    Для стандартной выгребной ямы частного дома обычно достаточно машины на 5 м³. 
                    Если у вас большой септик или давно не проводилась откачка — лучше заказать 10 м³ или 15 м³.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Куда вывозятся отходы?</AccordionTrigger>
                  <AccordionContent>
                    Все отходы вывозятся на специализированные полигоны утилизации, имеющие все необходимые 
                    лицензии и разрешения. Мы работаем строго в рамках экологического законодательства.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Работаете ли вы за городом?</AccordionTrigger>
                  <AccordionContent>
                    Да, мы работаем по всей Иркутской области. Стоимость рассчитывается индивидуально 
                    в зависимости от расстояния. Свяжитесь с нами для уточнения цены.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            <Card className="p-6 bg-accent/5 border-2 border-accent/20">
              <div className="flex items-start gap-3">
                <Icon name="Shield" size={24} className="text-accent mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Лицензированная деятельность</h4>
                  <p className="text-sm text-muted-foreground">
                    Наша компания имеет все необходимые лицензии на осуществление деятельности по 
                    сбору и утилизации отходов. Работаем официально, предоставляем закрывающие документы.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
