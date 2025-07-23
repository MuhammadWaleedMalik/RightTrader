export interface User {
  id: string;
  email: string;
  name: string;
  isAuthenticated: boolean;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
  t: (key: string) => string;
}

export interface TradingData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
}

export interface MarketData {
  name: string;
  price: number;
  change: number;
  changePercent: number;
  sparkline: number[];
}

export interface NavigationItem {
  name: string;
  path: string;
  icon?: string;
  children?: NavigationItem[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  instagram: string;
  youtube: string;
  supportEmail: string;
}