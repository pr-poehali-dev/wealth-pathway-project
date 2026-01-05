import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">ВсеЛенская терапия</h3>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection("hero")} className="text-sm hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary transition-colors">О программе</button>
              <button onClick={() => scrollToSection("modules")} className="text-sm hover:text-primary transition-colors">Три модуля</button>
              <button onClick={() => scrollToSection("method")} className="text-sm hover:text-primary transition-colors">О методике</button>
              <button onClick={() => scrollToSection("contact")} className="text-sm hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight">
            ВсеЛенский проход <br/>к своим деньгам
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Системная работа с программами препятствий и блоков, родовыми травмами, дефицитами и открытие доступа к своему достатку. Это многослойная и многоуровневая работа. Программа позволяет с разных сторон проработать все, что связано с деньгами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Icon name="Calendar" size={20} />
              <span>21 день</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Icon name="Users" size={20} />
              <span>7 встреч</span>
            </div>
          </div>
          <Button size="lg" className="mt-12" onClick={() => scrollToSection("contact")}>
            Записаться на программу
          </Button>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-light mb-16 text-center">О программе</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Во вселенской терапии, мы смотрим на деньги как на инструмент. Они показывают нам где потерян контакт с собой, со своими истинными желаниями, где есть напряжения и блоки, а где ресурсы.
            </p>
            
            <div className="grid gap-6 my-12">
              <Card className="p-8 border-l-4 border-primary bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-light text-primary">30%</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">До зачатия</h4>
                    <p className="text-muted-foreground">Программ закладывается в человеке до его зачатия из генетических программ рода</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 border-l-4 border-primary bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-light text-primary">30%</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">От зачатия до рождения</h4>
                    <p className="text-muted-foreground">Формируется через все, что случается с родителями</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 border-l-4 border-primary bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-light text-primary">30%</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">От рождения до 7 лет</h4>
                    <p className="text-muted-foreground">Формируется в первые годы жизни</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 border-l-4 border-primary bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-light text-primary">10%</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">В процессе жизни</h4>
                    <p className="text-muted-foreground">Мы создаем в процессе своей жизни</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-light mb-16 text-center">Три модуля трансформации</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-card/50 border-t-4 border-primary">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6">
                    <span className="text-2xl font-light text-primary">1</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Что стоит за деньгами</h3>
                </div>
                
                <div className="flex-grow">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Деньги — это абстракция. На самом деле мы хотим получить что-то другое через них.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Это «что-то другое» может быть небезопасным для нас, и тогда мы блокируем деньги, чтобы не получить то, чего боимся.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-card/50 border-t-4 border-primary">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6">
                    <span className="text-2xl font-light text-primary">2</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Дефициты и установки</h3>
                </div>
                
                <div className="flex-grow space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Родовая память дефицита</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Наши предки жили в нехватке. Отсюда установка «безопасно — значит мало» и «порог безопасности», выше которого система не пускает.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Напряжение</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Деньги откликаются на игру. Когда мы относимся к ним слишком серьёзно, появляется напряжение, и поток блокируется.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-card/50 border-t-4 border-primary">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6">
                    <span className="text-2xl font-light text-primary">3</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Путь к изобилию</h3>
                </div>
                
                <div className="flex-grow">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Путь открыт. Можно смело взять курс к своим деньгам, изобилию и успеху.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Всё, что когда-то было заметно только у кого-то, становится доступным для вас.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Каждый модуль подразумевает глубокую проработку разных аспектов, связанных с деньгами и коснемся баланса брать-давать.
            </p>
          </div>
        </div>
      </section>

      <section id="method" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-light mb-16 text-center">О методике</h2>
          
          <div className="space-y-8">
            <Card className="p-10 bg-card/50">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">ВсеЛенская терапия</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Курс вселенский проход к своим деньгам основан на вселенской терапии и на модальностях психологии и психотерапии. ВсеЛенский проход – это не чек-лист как зарабатывать деньги. Это навигация, которая расширит ваше видение и насмотренность на 360°, вы станете больше видеть, чувствовать, распознавать внутренние телесные ощущения, как собственный радар отношений с собой, с деньгами… и это поможет вам вернуть выбор как вы хотите жить.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-10 bg-card/50">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Глубинная проработка</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Работа с родовыми паттернами, установками дефицита и возвращение в состояние игры и лёгкости в отношениях с деньгами.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-10 bg-card/50">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Flame" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Трансформация</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Про чувства и ощущения. Как важна личная настройка собственного радара и укрепления внутренней опоры. В процессе 21 дня мы будем работать с ключевыми корневыми причинами, которые стоят за симптомами того что сейчас в жизни каждого человека происходят. Самое ценное в курсе это навигация вашего личного прохода к своим деньгам через практическое применение: диагностики, расстановки и техники, которые мы будем вам давать. И измеримые изменения, которые вы будете замечать и фиксировать в течении всего курса, что поможет вам интегрировать их в жизнь.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-light mb-8">Что будет на курсе</h2>
          <p className="text-xl text-muted-foreground mb-12">
            И так что будет происходить на этом курсе:
          </p>
          
          <Card className="p-12 bg-accent/20 border-2 border-primary/20">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Диагностики</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Расстановки индивидуальные и групповые</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Аудио практики</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Информационные посты</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Практические задания</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Ответы на вопросы</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Личное ведение двух ведущих терапевтов</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Групповая поддержка в чате</span>
                </div>
              </div>

              <p className="text-center text-muted-foreground pt-6">
                А также то, что поможет вам в процессе курса и в дальнейшем
              </p>

              <div className="pt-6 text-center">
                <Button size="lg" className="w-full sm:w-auto">
                  Записаться на программу
                </Button>
              </div>

              <p className="text-sm text-muted-foreground pt-4 text-center">
                Оставьте заявку, и мы свяжемся с вами для обсуждения деталей
              </p>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">
            © 2024 ВсеЛенская терапия. Путь к своим деньгам.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;