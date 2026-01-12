import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [selectedTariff, setSelectedTariff] = useState('comfort');

  const tariffs = [
    { id: 'economy', name: 'Эконом', price: 250, time: '5 мин', icon: 'Car' },
    { id: 'comfort', name: 'Комфорт', price: 320, time: '3 мин', icon: 'Car' },
    { id: 'business', name: 'Бизнес', price: 450, time: '7 мин', icon: 'Car' },
    { id: 'premium', name: 'Премиум', price: 650, time: '10 мин', icon: 'Crown' }
  ];

  const rideHistory = [
    { id: 1, from: 'ул. Тверская, 12', to: 'Красная площадь', date: '10 янв', price: 320, status: 'completed' },
    { id: 2, from: 'Аэропорт Шереметьево', to: 'ул. Арбат, 45', date: '8 янв', price: 850, status: 'completed' },
    { id: 3, from: 'Парк Горького', to: 'Москва-Сити', date: '5 янв', price: 420, status: 'completed' }
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
            <Icon name="Car" size={28} className="text-accent" />
            <h1 className="text-2xl font-bold">TaxiPro</h1>
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
              <Icon name="MapPin" size={20} />
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
              <h2 className="text-2xl font-bold mb-4">Быстрый заказ</h2>
              <div className="space-y-4">
                <div className="relative">
                  <Icon name="MapPin" size={20} className="absolute left-3 top-3 text-accent" />
                  <Input
                    placeholder="Откуда"
                    value={fromAddress}
                    onChange={(e) => setFromAddress(e.target.value)}
                    className="pl-12 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                </div>
                <div className="relative">
                  <Icon name="Navigation" size={20} className="absolute left-3 top-3 text-accent" />
                  <Input
                    placeholder="Куда"
                    value={toAddress}
                    onChange={(e) => setToAddress(e.target.value)}
                    className="pl-12 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                </div>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Найти водителя
                </Button>
              </div>
            </Card>

            <div className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-gray-100">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <path d="M50 200 Q 100 150, 150 200 T 250 200" stroke="#cbd5e1" strokeWidth="3" fill="none" />
                  <path d="M100 100 L 200 150 L 300 100" stroke="#cbd5e1" strokeWidth="3" fill="none" />
                  <path d="M150 300 Q 200 250, 250 300" stroke="#cbd5e1" strokeWidth="3" fill="none" />
                  
                  <circle cx="120" cy="180" r="8" fill="#FEC84B" className="animate-pulse" />
                  <circle cx="280" cy="220" r="8" fill="#1A1F2C" />
                  <circle cx="200" cy="150" r="6" fill="#1A1F2C" opacity="0.5" />
                </svg>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3">
                <div className="flex items-center gap-2">
                  <Icon name="Navigation" size={16} className="text-accent" />
                  <span className="text-sm font-semibold">GPS активен</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 hover-scale cursor-pointer">
                <Icon name="Clock" size={24} className="text-accent mb-2" />
                <h3 className="font-semibold mb-1">История поездок</h3>
                <p className="text-sm text-muted-foreground">{rideHistory.length} поездок</p>
              </Card>
              <Card className="p-4 hover-scale cursor-pointer">
                <Icon name="Star" size={24} className="text-accent mb-2" />
                <h3 className="font-semibold mb-1">Избранное</h3>
                <p className="text-sm text-muted-foreground">3 адреса</p>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="order" className="space-y-6 animate-fade-in">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Выберите тариф</h2>
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
                        <p className="text-xl font-bold">{tariff.price} ₽</p>
                        {selectedTariff === tariff.id && (
                          <Badge className="bg-accent text-accent-foreground">Выбран</Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Дополнительные опции</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-accent" />
                  <span>Детское кресло</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-accent" />
                  <span>Кондиционер</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-accent" />
                  <span>Помощь с багажом</span>
                </label>
              </div>
            </Card>

            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-6 text-lg">
              Заказать за {tariffs.find(t => t.id === selectedTariff)?.price} ₽
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
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Icon name="Star" size={16} className="text-accent fill-accent" />
                    <span className="font-semibold">4.9</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full">Редактировать профиль</Button>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Clock" size={20} />
                История поездок
              </h3>
              <div className="space-y-3">
                {rideHistory.map((ride) => (
                  <Card key={ride.id} className="p-4 hover-scale cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="flex items-start gap-2 mb-2">
                          <Icon name="MapPin" size={16} className="text-accent mt-1" />
                          <p className="text-sm font-medium">{ride.from}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Navigation" size={16} className="text-primary mt-1" />
                          <p className="text-sm font-medium">{ride.to}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{ride.price} ₽</p>
                        <p className="text-xs text-muted-foreground">{ride.date}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-green-500 text-green-600">
                      <Icon name="CheckCircle2" size={12} className="mr-1" />
                      Завершена
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
                    <span className="font-semibold">Наличные</span>
                  </div>
                </Card>
                <Card className="p-4 hover-scale cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Icon name="Building2" size={24} className="text-accent" />
                    <span className="font-semibold">Корпоративный счёт</span>
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
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Открыть чат
                </Button>
                <Button variant="outline" className="w-full">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Позвонить: 8-800-123-45-67
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Часто задаваемые вопросы</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Как изменить адрес в активном заказе?</AccordionTrigger>
                  <AccordionContent>
                    Вы можете изменить адрес через чат с водителем или связавшись со службой поддержки. 
                    Изменение адреса может повлиять на стоимость поездки.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Как получить чек за поездку?</AccordionTrigger>
                  <AccordionContent>
                    Чек автоматически отправляется на вашу электронную почту после завершения поездки. 
                    Вы также можете найти все чеки в истории поездок.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Что делать если забыл вещи в машине?</AccordionTrigger>
                  <AccordionContent>
                    Свяжитесь со службой поддержки как можно скорее. Мы найдем водителя и организуем 
                    возврат ваших вещей. В истории поездок есть кнопка "Забыл вещи".
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Как оценить поездку?</AccordionTrigger>
                  <AccordionContent>
                    После завершения поездки вам придет уведомление с просьбой оценить водителя и сервис. 
                    Вы также можете сделать это в истории поездок.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            <Card className="p-6 bg-muted">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} className="text-accent mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Нужна помощь?</h4>
                  <p className="text-sm text-muted-foreground">
                    Наша команда поддержки готова ответить на любые вопросы в любое время
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
