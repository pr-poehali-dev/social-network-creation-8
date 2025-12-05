import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const LeftSidebar = () => {
  return (
    <aside className="hidden lg:block lg:col-span-3">
      <Card className="p-4 bg-gradient-to-br from-card to-card/50 border-border/50">
        <div className="text-center mb-4">
          <Avatar className="h-20 w-20 mx-auto mb-3 border-4 border-primary">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
            <AvatarFallback>Я</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-lg">Александр Иванов</h3>
          <p className="text-sm text-muted-foreground">@alex_ivanov</p>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Друзья</span>
            <span className="font-semibold">342</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Подписчики</span>
            <span className="font-semibold">1.2k</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Посты</span>
            <span className="font-semibold">89</span>
          </div>
        </div>

        <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
          Редактировать профиль
        </Button>
      </Card>

      <Card className="mt-4 p-4 bg-gradient-to-br from-card to-card/50 border-border/50">
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <Icon name="TrendingUp" size={18} className="text-primary" />
          Популярные темы
        </h4>
        <div className="space-y-2">
          {['#дизайн', '#путешествия', '#технологии', '#фотография'].map((tag) => (
            <Button key={tag} variant="ghost" className="w-full justify-start text-sm hover:bg-muted">
              {tag}
            </Button>
          ))}
        </div>
      </Card>
    </aside>
  );
};
