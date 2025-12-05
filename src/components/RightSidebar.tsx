import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const RightSidebar = () => {
  return (
    <aside className="hidden lg:block lg:col-span-3">
      <Card className="p-4 bg-gradient-to-br from-card to-card/50 border-border/50 mb-4">
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <Icon name="UserPlus" size={18} className="text-secondary" />
          Рекомендации
        </h4>
        <div className="space-y-3">
          {[
            { name: 'Мария К.', mutual: 12 },
            { name: 'Сергей Л.', mutual: 8 },
            { name: 'Анна П.', mutual: 15 }
          ].map((user, i) => (
            <div key={i} className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.mutual} общих друзей</p>
              </div>
              <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80">
                <Icon name="UserPlus" size={16} />
              </Button>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
        <div className="text-center mb-3">
          <div className="text-4xl mb-2">💎</div>
          <h4 className="font-bold text-lg mb-1">Premium подписка</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Получите эксклюзивные возможности
          </p>
        </div>
        <ul className="text-sm space-y-2 mb-4">
          <li className="flex items-center gap-2">
            <Icon name="Check" size={16} className="text-primary" />
            Без рекламы
          </li>
          <li className="flex items-center gap-2">
            <Icon name="Check" size={16} className="text-primary" />
            Приоритет в поиске
          </li>
          <li className="flex items-center gap-2">
            <Icon name="Check" size={16} className="text-primary" />
            Эксклюзивные стикеры
          </li>
        </ul>
        <Button className="w-full bg-gradient-primary hover:opacity-90">
          Оформить за 299 ₽/мес
        </Button>
      </Card>
    </aside>
  );
};
