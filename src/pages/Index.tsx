import { useState } from 'react';
import { Header } from '@/components/Header';
import { LeftSidebar } from '@/components/LeftSidebar';
import { MainContent } from '@/components/MainContent';
import { RightSidebar } from '@/components/RightSidebar';

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

const Index = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: 'Анна Смирнова',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna',
      content: 'Прекрасный день для новых начинаний! 🌟 Только что запустила свой проект, о котором мечтала целый год. Спасибо всем за поддержку!',
      image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop',
      likes: 42,
      comments: 8,
      time: '2 часа назад'
    },
    {
      id: 2,
      author: 'Максим Петров',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Max',
      content: 'Кто-нибудь был на концерте вчера? Впечатления просто невероятные! 🎸',
      likes: 87,
      comments: 15,
      time: '4 часа назад'
    },
    {
      id: 3,
      author: 'Елена Волкова',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
      content: 'Делюсь рецептом идеального латте ☕ В комментариях напишу подробности!',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop',
      likes: 134,
      comments: 23,
      time: '6 часов назад'
    }
  ]);

  const [messages] = useState<Message[]>([
    {
      id: 1,
      sender: 'Дмитрий',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry',
      text: 'Привет! Как дела с проектом?',
      time: '10:30',
      unread: true
    },
    {
      id: 2,
      sender: 'Ольга',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Olga',
      text: 'Спасибо за поддержку! 💜',
      time: '09:15',
      unread: true
    },
    {
      id: 3,
      sender: 'Иван',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ivan',
      text: 'Отличная идея!',
      time: 'Вчера',
      unread: false
    }
  ]);

  const [notifications] = useState(5);

  const gifts: Gift[] = [
    { id: 1, name: 'Сердце', price: 10, emoji: '💜' },
    { id: 2, name: 'Звезда', price: 25, emoji: '⭐' },
    { id: 3, name: 'Корона', price: 50, emoji: '👑' },
    { id: 4, name: 'Бриллиант', price: 100, emoji: '💎' },
    { id: 5, name: 'Ракета', price: 150, emoji: '🚀' },
    { id: 6, name: 'Огонь', price: 200, emoji: '🔥' }
  ];

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header notifications={notifications} />

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <LeftSidebar />

          <MainContent
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            posts={posts}
            messages={messages}
            gifts={gifts}
            handleLike={handleLike}
          />

          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;
