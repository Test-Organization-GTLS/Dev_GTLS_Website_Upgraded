export interface GridCardProps {
  id: number;
  title: string;
  icon: string; // Made optional in case some cards don't have an icon
  description: string;
  content: string;
  footer: string;
}

export interface CenterTitleProps {
  title: string;
  description?: string; // The `?` makes this property optional
  button?: React.ReactNode; // `React.ReactNode` is a great type for optional elements like a button
}
