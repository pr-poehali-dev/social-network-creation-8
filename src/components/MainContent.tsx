import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface Post {
  id: number;
  author: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  time: string;
}

interface Message {
  id: number;
  sender: string;
  avatar: string;
  text: string;
  time: string;
  unread: boolean;
}

interface Gift {
  id: number;
  name: string;
  price: number;
  emoji: string;
}

interface MainContentProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  posts: Post[];
  messages: Message[];
  gifts: Gift[];
  handleLike: (postId: number) => void;
}

export const MainContent = ({ activeTab, setActiveTab, posts, messages, gifts, handleLike }: MainContentProps) => {
  return (
    <main className="lg:col-span-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6 bg-muted/50">
          <TabsTrigger value="feed" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
            <Icon name="Home" size={18} className="mr-2" />
            Лента
          </TabsTrigger>
          <TabsTrigger value="profile" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
            <Icon name="User" size={18} className="mr-2" />
            Профиль
          </TabsTrigger>
          <TabsTrigger value="messages" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
            <Icon name="MessageCircle" size={18} className="mr-2" />
            Сообщения
          </TabsTrigger>
          <TabsTrigger value="groups" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
            <Icon name="Users" size={18} className="mr-2" />
            Группы
          </TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="space-y-4">
          <Card className="p-4 bg-gradient-to-br from-card to-card/50 border-border/50">
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
                <AvatarFallback>Я</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea 
                  placeholder="Что нового?" 
                  className="min-h-[80px] mb-3 bg-muted/50 border-border resize-none"
                />
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Icon name="Image" size={18} className="mr-1" />
                      Фото
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Icon name="Video" size={18} className="mr-1" />
                      Видео
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Icon name="Smile" size={18} className="mr-1" />
                      Emoji
                    </Button>
                  </div>
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Опубликовать
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {posts.map((post) => (
            <Card key={post.id} className="p-5 bg-gradient-to-br from-card to-card/50 border-border/50 animate-fade-in hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <Avatar>
                  <AvatarImage src={post.avatar} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{post.author}</h4>
                      <p className="text-xs text-muted-foreground">{post.time}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Icon name="MoreVertical" size={18} />
                    </Button>
                  </div>
                </div>
              </div>

              <p className="mb-3 text-foreground/90">{post.content}</p>

              {post.image && (
                <img 
                  src={post.image} 
                  alt="Post" 
                  className="w-full rounded-lg mb-4 hover:scale-[1.02] transition-transform cursor-pointer"
                />
              )}

              <div className="flex items-center gap-6 pt-3 border-t border-border/50">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center gap-2 hover:text-primary"
                  onClick={() => handleLike(post.id)}
                >
                  <Icon name="Heart" size={18} />
                  <span>{post.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:text-accent">
                  <Icon name="MessageCircle" size={18} />
                  <span>{post.comments}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:text-secondary">
                  <Icon name="Share2" size={18} />
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="ml-auto flex items-center gap-2 bg-gradient-primary/10 hover:bg-gradient-primary/20">
                      <Icon name="Gift" size={18} />
                      Подарить
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-card border-border">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        Виртуальные подарки
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-3 gap-3 py-4">
                      {gifts.map((gift) => (
                        <Button
                          key={gift.id}
                          variant="outline"
                          className="h-24 flex flex-col items-center justify-center gap-2 hover:bg-gradient-primary/10 hover:border-primary transition-all"
                        >
                          <span className="text-4xl">{gift.emoji}</span>
                          <span className="text-xs font-medium">{gift.price} ₽</span>
                        </Button>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-primary hover:opacity-90">
                      Пополнить баланс
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="profile">
          <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-border/50">
            <div className="relative mb-20">
              <div className="h-40 bg-gradient-accent rounded-xl"></div>
              <Avatar className="absolute -bottom-16 left-6 h-32 w-32 border-4 border-card">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
                <AvatarFallback>АИ</AvatarFallback>
              </Avatar>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-1">Александр Иванов</h2>
              <p className="text-muted-foreground mb-4">@alex_ivanov</p>
              <p className="text-foreground/80 mb-4">
                Дизайнер • Разработчик • Путешественник 🌍<br />
                Создаю красивые и функциональные интерфейсы
              </p>
              <div className="flex gap-4">
                <Button className="bg-gradient-primary hover:opacity-90">
                  Редактировать профиль
                </Button>
                <Button variant="outline">
                  Поделиться
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">342</div>
                <div className="text-sm text-muted-foreground">Друзья</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-secondary">1.2k</div>
                <div className="text-sm text-muted-foreground">Подписчики</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-accent">89</div>
                <div className="text-sm text-muted-foreground">Посты</div>
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-4">Мои посты</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i} 
                  className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg hover:scale-105 transition-transform cursor-pointer"
                ></div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card className="bg-gradient-to-br from-card to-card/50 border-border/50">
            <ScrollArea className="h-[600px]">
              <div className="p-4 space-y-2">
                {messages.map((message) => (
                  <div 
                    key={message.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  >
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={message.avatar} />
                        <AvatarFallback>{message.sender[0]}</AvatarFallback>
                      </Avatar>
                      {message.unread && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-card animate-pulse-glow"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-semibold truncate">{message.sender}</h4>
                        <span className="text-xs text-muted-foreground">{message.time}</span>
                      </div>
                      <p className={`text-sm truncate ${message.unread ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                        {message.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </Card>
        </TabsContent>

        <TabsContent value="groups">
          <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-border/50">
            <h3 className="text-xl font-bold mb-4">Мои группы</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Веб-дизайн', members: '12.5k', icon: 'Palette' },
                { name: 'Программирование', members: '25.8k', icon: 'Code' },
                { name: 'Путешествия', members: '8.3k', icon: 'Plane' },
                { name: 'Фотография', members: '15.2k', icon: 'Camera' }
              ].map((group, i) => (
                <div 
                  key={i}
                  className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Icon name={group.icon as any} size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{group.name}</h4>
                      <p className="text-sm text-muted-foreground">{group.members} участников</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Открыть
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};
