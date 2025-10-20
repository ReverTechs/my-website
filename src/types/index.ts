export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface SocialLink {
  name: string;
  icon: string;
  color: string;
  href?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface AnimationProps {
  visibleElements: Set<string>;
}
