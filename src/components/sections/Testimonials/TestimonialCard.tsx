import React from 'react';
import { Star } from 'lucide-react';
import { Card } from '../../ui/Card';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export function TestimonialCard({ name, role, image, quote }: TestimonialCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-primary fill-current" />
        ))}
      </div>
      <p className="text-muted-foreground italic">"{quote}"</p>
    </Card>
  );
}