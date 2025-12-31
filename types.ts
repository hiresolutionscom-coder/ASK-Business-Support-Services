// Fix: Added React import to resolve React namespace error for React.ReactNode
import React from 'react';

export interface ServiceCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
  focus?: string[];
  models?: string[];
  strengths?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface Client {
  name: string;
}