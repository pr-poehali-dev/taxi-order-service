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
  const [distance, setDistance] = useState('0');
  const [additionalServices, setAdditionalServices] = useState({
    washing: false,
    longHose: false,
    urgent: false
  });

  const calculateTotalPrice = () => {
    const baseTariff = tariffs.find(t => t.id === selectedTariff);
    if (!baseTariff) return 0;

    let total = baseTariff.price;

    // Доплата за расстояние (50₽/км за пределами города)
    const distanceNum = parseFloat(distance) || 0;
    if (distanceNum > 10) {
      total += (distanceNum - 10) * 50;
    }

    // Дополнительные услуги
    if (additionalServices.washing) total += 500;
    if (additionalServices.longHose) total += 800;
    if (additionalServices.urgent) total += 1500;

    return total;
  };

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
      <header className="bg-primary text-primary-foreground p-3 md:p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Droplet" size={24} className="text-accent md:w-7 md:h-7" />
            <div>
              <h1 className="text-base md:text-xl font-bold">otkachka-pro.ru</h1>
              <p className="text-xs opacity-80 hidden sm:block">Ассенизаторские услуги в Иркутске</p>
            </div>
          </div>
          <Avatar className="w-8 h-8 md:w-10 md:h-10">
            <AvatarFallback className="bg-accent text-accent-foreground text-xs md:text-sm">ИП</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="container mx-auto p-2 md:p-4 pb-24">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 mb-6">
            <TabsTrigger value="home" className="flex flex-col gap-1">
              <Icon name="Home" size={20} />
              <span className="text-xs hidden sm:inline">Главная</span>
            </TabsTrigger>
            <TabsTrigger value="calculator" className="flex flex-col gap-1">
              <Icon name="Calculator" size={20} />
              <span className="text-xs hidden sm:inline">Калькулятор</span>
            </TabsTrigger>
            <TabsTrigger value="map" className="flex flex-col gap-1">
              <Icon name="Map" size={20} />
              <span className="text-xs hidden sm:inline">Карта</span>
            </TabsTrigger>
            <TabsTrigger value="order" className="flex flex-col gap-1 hidden md:flex">
              <Icon name="ClipboardList" size={20} />
              <span className="text-xs hidden sm:inline">Заказ</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex flex-col gap-1 hidden md:flex">
              <Icon name="User" size={20} />
              <span className="text-xs hidden sm:inline">Профиль</span>
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex flex-col gap-1 hidden md:flex">
              <Icon name="CreditCard" size={20} />
              <span className="text-xs hidden sm:inline">Оплата</span>
            </TabsTrigger>
            <TabsTrigger value="support" className="flex flex-col gap-1 hidden md:flex">
              <Icon name="HeadphonesIcon" size={20} />
              <span className="text-xs hidden sm:inline">Поддержка</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-6 animate-fade-in">
            <Card className="p-4 md:p-6 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Откачка септиков и выгребных ям</h2>
              <p className="text-xs md:text-sm opacity-80 mb-4">Работаем круглосуточно по Иркутску и области</p>
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
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-4 md:py-6 text-base md:text-lg">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Вызвать машину
                </Button>
              </div>
            </Card>

            <div className="relative h-[250px] md:h-[300px] bg-gradient-to-br from-green-50 to-blue-50 rounded-lg overflow-hidden shadow-lg p-4 md:p-6">
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

            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <Card className="p-3 md:p-4 hover-scale cursor-pointer border-2 border-accent/20">
                <Icon name="Clock" size={20} className="text-accent mb-2" />
                <h3 className="text-sm md:text-base font-semibold mb-1">История заказов</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{serviceHistory.length} выполнено</p>
              </Card>
              <Card className="p-3 md:p-4 hover-scale cursor-pointer border-2 border-accent/20">
                <Icon name="Sparkles" size={20} className="text-accent mb-2" />
                <h3 className="text-sm md:text-base font-semibold mb-1">Срочный выезд</h3>
                <p className="text-xs md:text-sm text-muted-foreground">За 15-30 минут</p>
              </Card>
            </div>

            <Card className="p-4 md:p-6 bg-accent/5 border-2 border-accent/20">
              <h3 className="text-sm md:text-base font-semibold mb-3 flex items-center gap-2">
                <Icon name="Info" size={18} className="text-accent" />
                Наши преимущества
              </h3>
              <ul className="space-y-2 text-xs md:text-sm">
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

          <TabsContent value="calculator" className="space-y-6 animate-fade-in">
            <Card className="p-4 md:p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20">
              <h2 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
                <Icon name="Calculator" size={24} className="text-accent md:w-7 md:h-7" />
                Калькулятор стоимости
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">Рассчитайте точную стоимость услуги</p>

              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="text-xs md:text-sm font-semibold mb-2 block">Объём машины</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {tariffs.map((tariff) => (
                      <Button
                        key={tariff.id}
                        variant={selectedTariff === tariff.id ? 'default' : 'outline'}
                        onClick={() => setSelectedTariff(tariff.id)}
                        className={`flex flex-col h-auto py-2 md:py-3 text-xs md:text-sm ${selectedTariff === tariff.id ? 'bg-accent text-accent-foreground' : ''}`}
                      >
                        <Icon name={tariff.icon as any} size={16} className="md:w-5 md:h-5" />
                        <span className="text-xs mt-1">{tariff.volume}м³</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs md:text-sm font-semibold mb-2 block flex items-center gap-2">
                    <Icon name="MapPin" size={14} className="text-accent" />
                    Расстояние от города (км)
                  </label>
                  <Input
                    type="number"
                    min="0"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    placeholder="Введите расстояние"
                    className="text-base md:text-lg"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    До 10 км — бесплатно, далее +50₽ за каждый км
                  </p>
                </div>

                <div>
                  <label className="text-xs md:text-sm font-semibold mb-3 block">Дополнительные услуги</label>
                  <div className="space-y-2 md:space-y-3">
                    <Card className={`p-3 md:p-4 cursor-pointer transition-all hover-scale ${additionalServices.washing ? 'border-2 border-accent bg-accent/5' : ''}`}
                      onClick={() => setAdditionalServices(prev => ({ ...prev, washing: !prev.washing }))}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" checked={additionalServices.washing} readOnly className="w-4 h-4 md:w-5 md:h-5 accent-accent" />
                          <div>
                            <p className="text-sm md:text-base font-semibold">Промывка септика</p>
                            <p className="text-xs text-muted-foreground hidden sm:block">Глубокая очистка системы</p>
                          </div>
                        </div>
                        <span className="text-sm md:text-base font-bold text-accent">+500 ₽</span>
                      </div>
                    </Card>

                    <Card className={`p-3 md:p-4 cursor-pointer transition-all hover-scale ${additionalServices.longHose ? 'border-2 border-accent bg-accent/5' : ''}`}
                      onClick={() => setAdditionalServices(prev => ({ ...prev, longHose: !prev.longHose }))}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" checked={additionalServices.longHose} readOnly className="w-4 h-4 md:w-5 md:h-5 accent-accent" />
                          <div>
                            <p className="text-sm md:text-base font-semibold">Увеличенный шланг 20м</p>
                            <p className="text-xs text-muted-foreground hidden sm:block">Для труднодоступных мест</p>
                          </div>
                        </div>
                        <span className="text-sm md:text-base font-bold text-accent">+800 ₽</span>
                      </div>
                    </Card>

                    <Card className={`p-3 md:p-4 cursor-pointer transition-all hover-scale ${additionalServices.urgent ? 'border-2 border-accent bg-accent/5' : ''}`}
                      onClick={() => setAdditionalServices(prev => ({ ...prev, urgent: !prev.urgent }))}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" checked={additionalServices.urgent} readOnly className="w-4 h-4 md:w-5 md:h-5 accent-accent" />
                          <div>
                            <p className="text-sm md:text-base font-semibold">Срочный выезд</p>
                            <p className="text-xs text-muted-foreground hidden sm:block">Подача за 15-30 минут</p>
                          </div>
                        </div>
                        <span className="text-sm md:text-base font-bold text-accent">+1500 ₽</span>
                      </div>
                    </Card>
                  </div>
                </div>

                <Card className="p-4 md:p-6 bg-primary text-primary-foreground">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <span className="text-sm md:text-lg">Базовый тариф:</span>
                    <span className="text-lg md:text-xl font-bold">{tariffs.find(t => t.id === selectedTariff)?.price.toLocaleString()} ₽</span>
                  </div>
                  
                  {parseFloat(distance) > 10 && (
                    <div className="flex items-center justify-between mb-4 text-sm opacity-90">
                      <span>Доплата за расстояние ({Math.round(parseFloat(distance) - 10)} км):</span>
                      <span className="font-semibold">+{((parseFloat(distance) - 10) * 50).toLocaleString()} ₽</span>
                    </div>
                  )}
                  
                  {(additionalServices.washing || additionalServices.longHose || additionalServices.urgent) && (
                    <div className="border-t border-primary-foreground/20 pt-3 mb-4 space-y-2 text-sm opacity-90">
                      {additionalServices.washing && (
                        <div className="flex items-center justify-between">
                          <span>Промывка:</span>
                          <span className="font-semibold">+500 ₽</span>
                        </div>
                      )}
                      {additionalServices.longHose && (
                        <div className="flex items-center justify-between">
                          <span>Длинный шланг:</span>
                          <span className="font-semibold">+800 ₽</span>
                        </div>
                      )}
                      {additionalServices.urgent && (
                        <div className="flex items-center justify-between">
                          <span>Срочный выезд:</span>
                          <span className="font-semibold">+1500 ₽</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="border-t border-primary-foreground/20 pt-3 md:pt-4 flex items-center justify-between">
                    <span className="text-xl md:text-2xl font-bold">Итого:</span>
                    <span className="text-2xl md:text-3xl font-bold text-accent">{calculateTotalPrice().toLocaleString()} ₽</span>
                  </div>
                </Card>

                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-4 md:py-6 text-base md:text-lg">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Заказать за {calculateTotalPrice().toLocaleString()} ₽
                </Button>
              </div>
            </Card>

            <Card className="p-4 bg-muted">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Как рассчитывается стоимость?</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Базовая цена зависит от объёма машины</li>
                    <li>• Выезд в пределах 10 км от Иркутска — бесплатно</li>
                    <li>• За каждый километр свыше 10 км — доплата 50₽</li>
                    <li>• Дополнительные услуги оплачиваются отдельно</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="map" className="space-y-4 md:space-y-6 animate-fade-in">
            <Card className="p-4 md:p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20">
              <h2 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
                <Icon name="Map" size={24} className="text-accent md:w-7 md:h-7" />
                Карта пункта сброса
              </h2>
              <p className="text-sm text-muted-foreground mb-4">Официальный пункт утилизации отходов в Иркутске</p>

              <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-green-50 via-blue-50 to-green-50 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d1d5db" strokeWidth="0.5" opacity="0.3"/>
                    </pattern>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  <rect width="800" height="600" fill="url(#grid)"/>
                  
                  <path d="M100 150 Q200 100 350 200 T600 250" stroke="#22C55E" strokeWidth="6" fill="none" opacity="0.4"/>
                  <path d="M150 400 Q300 350 450 400 T700 450" stroke="#22C55E" strokeWidth="6" fill="none" opacity="0.4"/>
                  
                  <path d="M50 200 L750 200" stroke="#64748b" strokeWidth="8" opacity="0.6"/>
                  <path d="M50 210 L750 210" stroke="#ffffff" strokeWidth="2" strokeDasharray="20,15" opacity="0.8"/>
                  
                  <path d="M400 50 L400 550" stroke="#64748b" strokeWidth="6" opacity="0.5"/>
                  <path d="M405 50 L405 550" stroke="#ffffff" strokeWidth="2" strokeDasharray="15,10" opacity="0.7"/>
                  
                  <rect x="100" y="100" width="80" height="60" fill="#94a3b8" opacity="0.6" rx="4"/>
                  <rect x="250" y="250" width="100" height="80" fill="#94a3b8" opacity="0.6" rx="4"/>
                  <rect x="550" y="120" width="90" height="70" fill="#94a3b8" opacity="0.6" rx="4"/>
                  <rect x="600" y="350" width="120" height="90" fill="#94a3b8" opacity="0.6" rx="4"/>
                  
                  <circle cx="450" cy="300" r="8" fill="#22C55E" opacity="0.3"/>
                  <circle cx="450" cy="300" r="12" fill="#22C55E" opacity="0.2"/>
                  <circle cx="450" cy="300" r="16" fill="#22C55E" opacity="0.1"/>
                  
                  <g transform="translate(450, 300)">
                    <circle r="25" fill="#ef4444" filter="url(#glow)"/>
                    <circle r="20" fill="#dc2626"/>
                    <circle r="15" fill="#ef4444"/>
                    <circle r="8" fill="#ffffff"/>
                    <path d="M-6 0 L6 0 M0 -6 L0 6" stroke="#dc2626" strokeWidth="2"/>
                  </g>
                  
                  <text x="450" y="360" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="bold">Пункт сброса</text>
                  <text x="450" y="378" textAnchor="middle" fill="#475569" fontSize="11">ул. Байкальская, 250</text>
                  
                  <path d="M 650 80 L 680 80 M 680 80 L 680 50" stroke="#1e293b" strokeWidth="3" fill="none"/>
                  <text x="690" y="70" fill="#1e293b" fontSize="12" fontWeight="500">Север</text>
                  
                  <g className="animate-pulse">
                    <circle cx="300" cy="180" r="6" fill="#3b82f6"/>
                    <path d="M300 174 L300 166 L306 170 Z" fill="#3b82f6"/>
                  </g>
                  
                  <g className="animate-pulse">
                    <circle cx="520" cy="380" r="6" fill="#3b82f6"/>
                    <path d="M520 374 L520 366 L526 370 Z" fill="#3b82f6"/>
                  </g>
                </svg>
                
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-lg p-3 md:p-4 shadow-lg max-w-[280px] md:max-w-xs">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-red-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-sm md:text-base mb-1">Пункт утилизации</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">ул. Байкальская, 250</p>
                      <p className="text-xs text-muted-foreground mt-1">Иркутск, Россия</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-lg p-3 md:p-4 shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Clock" size={18} className="text-accent" />
                    <span className="font-semibold text-sm md:text-base">Режим работы</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">Круглосуточно, 24/7</p>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur rounded-lg p-3 shadow-lg">
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span>Пункт сброса</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-1 bg-gray-600"></div>
                      <span>Дороги</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span>Машины</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6">
              <h3 className="font-semibold mb-3 md:mb-4 flex items-center gap-2">
                <Icon name="Info" size={20} className="text-accent" />
                Информация о пункте
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-muted-foreground">г. Иркутск, ул. Байкальская, 250</p>
                    <p className="text-muted-foreground text-xs mt-1">Координаты: 52.2897° N, 104.2806° E</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Лицензия и документы</p>
                    <p className="text-muted-foreground">Официальный пункт с полным пакетом разрешительных документов</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Truck" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Для ассенизаторских машин</p>
                    <p className="text-muted-foreground">Принимаем машины объёмом от 5 до 15 м³</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Shield" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Экологическая безопасность</p>
                    <p className="text-muted-foreground">Утилизация проводится согласно всем санитарным нормам</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 bg-accent/5 border-2 border-accent/20">
              <div className="flex items-start gap-3">
                <Icon name="Phone" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-2">Нужна помощь с навигацией?</p>
                  <p className="text-sm text-muted-foreground mb-3">Наши диспетчеры помогут проложить маршрут до пункта сброса</p>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full md:w-auto">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Позвонить диспетчеру
                  </Button>
                </div>
              </div>
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